import { readConsent, track, type Attributes } from "@/lib/analytics"
import { publishedLocales } from "@/i18n/locales"

// How a page view was read and where it led: visible seconds and scroll depth, sections reached, questions opened and
// links followed. Every value comes from a closed set (page ids, the page's own anchor ids, locales, a host
// allowlist), never a URL. track() drops everything without consent; the once-per-view sets only fill with consent,
// so a visitor who allows analytics mid-page still reports what is on screen.
const idPattern = /^[a-z0-9-]{1,40}$/
const hosts = ["hub.retropa.com", "github.com", "www.apple.com", "apps.apple.com"]
const maxSeconds = 1800
const depths = ["0", "25", "50", "75", "100"] as const
type Depth = (typeof depths)[number]
const isLocale = (value: string) => (publishedLocales as readonly string[]).includes(value)

function sectionId(section: Element | null): string | undefined {
  if (!section) return undefined
  const id = section.id || section.getAttribute("aria-labelledby")?.replace(/-title$/, "") || ""
  return idPattern.test(id) ? id : undefined
}

function pageId(url: URL): string {
  const parts = url.pathname.split("/").filter(Boolean)
  if (isLocale(parts[0])) parts.shift()
  const id = parts.at(-1) ?? "home"
  return idPattern.test(id) ? id : "other"
}

function linkAttributes(link: HTMLAnchorElement): Attributes | undefined {
  let url: URL
  try { url = new URL(link.href, location.href) } catch { return undefined }
  const placement = link.closest("[data-header]") ? "header" : link.closest(".site-footer") ? "footer" : "content"
  const base: Attributes = { placement, section_id: sectionId(link.closest("section")) }
  if (link.closest("[data-language-selector]")) {
    return { ...base, link_kind: "locale", link_target: isLocale(link.hreflang) ? link.hreflang : "other" }
  }
  if (url.origin === location.origin || url.hostname === "retropa.com") {
    if (url.pathname === location.pathname && url.hash) {
      const anchor = decodeURIComponent(url.hash.slice(1))
      return { ...base, link_kind: "anchor", link_target: idPattern.test(anchor) ? anchor : "other" }
    }
    return { ...base, link_kind: "internal", link_target: pageId(url) }
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return undefined
  return { ...base, link_kind: "outbound", link_target: hosts.includes(url.hostname) ? url.hostname : "other" }
}

function depthBucket(): Depth {
  const height = document.documentElement.scrollHeight
  const ratio = height > 0 ? (scrollY + innerHeight) / height : 1
  if (ratio >= 0.98) return "100"
  return depths[Math.min(3, Math.floor(ratio * 4))]
}

export function observeEngagement(): void {
  // Visible time and the deepest scroll, sent once when the page is first hidden or left.
  let visibleMs = 0
  let visibleSince = document.visibilityState === "visible" ? performance.now() : undefined
  let depth = depthBucket()
  let sent = false
  const deepen = () => {
    const now = depthBucket()
    if (depths.indexOf(now) > depths.indexOf(depth)) depth = now
  }
  const finish = () => {
    if (visibleSince !== undefined) visibleMs += performance.now() - visibleSince
    visibleSince = undefined
    if (sent) return
    sent = true
    const seconds = Math.min(maxSeconds, Math.round(visibleMs / 1000))
    track("web_page_engaged", { engaged_seconds: seconds, scroll_depth: depth })
  }
  addEventListener("scroll", deepen, { passive: true })
  addEventListener("pagehide", finish)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") finish()
    else visibleSince = performance.now()
  })

  // Sections reached: a quarter of the section, or half the screen for a tall one, for a second. The dwell keeps a
  // smooth scroll past a section, or a jump to an anchor, from counting it.
  const reached = new Set<string>()
  const pending = new Map<string, ReturnType<typeof setTimeout>>()
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const id = sectionId(entry.target)
      if (!id || reached.has(id)) continue
      const inView = entry.isIntersecting
        && (entry.intersectionRatio >= 0.25 || entry.intersectionRect.height >= innerHeight * 0.5)
      if (!inView || readConsent() !== "granted") {
        clearTimeout(pending.get(id))
        pending.delete(id)
      } else if (!pending.has(id)) {
        pending.set(id, setTimeout(() => {
          pending.delete(id)
          reached.add(id)
          track("web_section_viewed", { section_id: id })
        }, 1000))
      }
    }
  }, { threshold: [0, 0.1, 0.25, 0.5] })
  const observe = () => document.querySelectorAll("main section").forEach(section => {
    observer.unobserve(section)
    observer.observe(section)
  })
  observe()
  addEventListener("retropa-consent", observe)

  // Questions opened; toggle does not bubble, so listen in the capture phase.
  const opened = new Set<string>()
  document.addEventListener("toggle", (event) => {
    const details = event.target
    if (!(details instanceof HTMLDetailsElement) || !details.open || details.hasAttribute("data-dismiss")) return
    if (!idPattern.test(details.id) || opened.has(details.id) || readConsent() !== "granted") return
    opened.add(details.id)
    track("web_detail_opened", { section_id: details.id })
  }, true)

  // Links followed, other than download and guide links, which have their own events.
  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null
    if (!link || link.matches("[data-download], [data-guide]")) return
    const attributes = linkAttributes(link)
    if (attributes) track("web_link_clicked", attributes)
  })
}
