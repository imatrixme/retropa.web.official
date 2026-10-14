import { siteConfig } from "@/lib/site-config"
import type { DisplayModeName } from "@/content/display-study"

// Client-side: the page identity comes from the rendered document (html lang,
// retropa-page meta, canonical link), so this module never bundles the route
// registry or page content.
function currentPage(): { page: string; locale: string; location: string } {
  const page = document.querySelector<HTMLMetaElement>("meta[name=retropa-page]")?.content ?? "not-found"
  const location = document.querySelector<HTMLLinkElement>("link[rel=canonical]")?.href ?? `${siteConfig.siteUrl}/404.html`
  return { page, locale: document.documentElement.lang || "en", location }
}

export const analyticsConfig = {
  measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID ?? "",
  providerToken: import.meta.env.VITE_ASC_PROVIDER_TOKEN ?? "",
  revision: "channel-surf-2026-10-v13",
} as const
export type Consent = "unknown" | "granted" | "denied"
type EventName = "web_page_view" | "web_download_clicked" | "web_feature_viewed" | "web_feature_selected" | "web_guide_opened" | "web_filter_preview_changed"
type Attributes = { placement?: "header" | "hero" | "footer" | "guide" | "filters"; feature_id?: "skins" | "filters" | "library" | "plus" | "channel" | "skin_rack" | "console_mode" | "collection" | "arcade" | "qr" | "touch_lab" | "haptics" | "import_routes" | "portal"; display_mode?: DisplayModeName }
type Evidence = { name: EventName; parameters: Record<string, string | number>; delivery: "consent_blocked" | "unconfigured" | "queued"; timestamp: string }
type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  __retropaEvidence?: Evidence[]
}
const storageKey = "retropa.analytics-consent.v1"
const isConfigured = () => /^G-[A-Z0-9]+$/.test(analyticsConfig.measurementId)
const storage = (): Consent => {
  try {
    const value = localStorage.getItem(storageKey)
    return value === "granted" || value === "denied" ? value : "unknown"
  } catch { return "unknown" }
}
let sessionConsent: Consent | undefined
export const readConsent = (): Consent => typeof window === "undefined" ? "unknown" : sessionConsent ?? storage()

function startAnalytics(): void {
  if (!isConfigured() || readConsent() !== "granted") return
  const target = window as AnalyticsWindow
  if (target.gtag) return
  target.dataLayer = target.dataLayer ?? []
  // The Google tag queue consumes Arguments objects, not event records.
  // eslint-disable-next-line prefer-rest-params
  target.gtag = function () { target.dataLayer!.push(arguments) }
  const { location: pageLocation } = currentPage()
  target.gtag("js", new Date())
  target.gtag("config", analyticsConfig.measurementId, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    page_location: pageLocation,
    page_referrer: "", cookie_flags: "SameSite=Lax;Secure",
  })
  const script = document.createElement("script")
  script.async = true
  script.id = "retropa-analytics"
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`
  document.head.appendChild(script)
}

function entrySource(): string {
  try {
    const stored = sessionStorage.getItem("retropa.entry-source.v1")
    const allowed = ["direct_or_unknown", "google", "bing", "other_referral"]
    if (stored && allowed.includes(stored)) return stored
    const host = document.referrer ? new URL(document.referrer).hostname : ""
    const source = ["www.google.com", "www.google.co.jp", "www.google.com.hk", "www.google.co.uk"].includes(host) ? "google" : ["www.bing.com", "cn.bing.com"].includes(host) ? "bing" : host && host !== location.hostname ? "other_referral" : "direct_or_unknown"
    sessionStorage.setItem("retropa.entry-source.v1", source)
    return source
  } catch { return "direct_or_unknown" }
}

export function track(name: EventName, attributes: Attributes = {}): void {
  if (typeof window === "undefined") return
  const { page, locale, location: pageLocation } = currentPage()
  const parameters: Record<string, string | number> = {
    schema_version: 1, site_revision: analyticsConfig.revision, page_id: page, locale,
    page_location: pageLocation,
    page_referrer: "", page_title: `${siteConfig.name} / ${page}`,
    entry_source: readConsent() === "granted" ? entrySource() : "not_collected",
  }
  if (attributes.placement) parameters.placement = attributes.placement
  if (attributes.feature_id) parameters.feature_id = attributes.feature_id
  if (attributes.display_mode) parameters.display_mode = attributes.display_mode
  const delivery = readConsent() !== "granted" ? "consent_blocked" : !isConfigured() ? "unconfigured" : "queued"
  const target = window as AnalyticsWindow
  if (import.meta.env.DEV || new URLSearchParams(location.search).get("analytics_debug") === "1") {
    target.__retropaEvidence = [...(target.__retropaEvidence ?? []).slice(-49), { name, parameters, delivery, timestamp: new Date().toISOString() }]
  }
  if (delivery !== "queued") return
  startAnalytics()
  target.gtag?.("event", name, { ...parameters, transport_type: "beacon" })
}

export function setConsent(consent: Exclude<Consent, "unknown">): void {
  const previous = readConsent()
  sessionConsent = consent
  try { localStorage.setItem(storageKey, consent) } catch { /* The current page still honors the choice. */ }
  if (consent === "denied" && previous === "granted") {
    Reflect.set(window, `ga-disable-${analyticsConfig.measurementId}`, true)
    window.location.reload()
    return
  }
  window.dispatchEvent(new Event("retropa-consent"))
  if (consent === "granted" && previous !== "granted") track("web_page_view")
}

export function observeAcquisition(): () => void {
  track("web_page_view")
  const seen = new Set<string>()
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.25 || readConsent() !== "granted") continue
      const feature = (entry.target as HTMLElement).dataset.feature as Attributes["feature_id"]
      if (!feature || seen.has(feature)) continue
      seen.add(feature)
      track("web_feature_viewed", { feature_id: feature })
    }
  }, { threshold: 0.25 })
  const observe = () => document.querySelectorAll("[data-feature]").forEach(element => { observer.unobserve(element); observer.observe(element) })
  observe()
  const mutations = new MutationObserver(observe)
  mutations.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["data-feature"] })
  window.addEventListener("retropa-consent", observe)
  return () => { observer.disconnect(); mutations.disconnect(); window.removeEventListener("retropa-consent", observe) }
}
