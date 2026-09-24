// Site-wide behavior shared by every page. Everything here enhances markup
// that already works without JavaScript.
import { observeAcquisition, track } from "@/lib/analytics"
import { legacyLocaleTarget } from "@/lib/legacy-locale"

// The HTTP layer already answers legacy ?lang= entrypoints with 308; this covers
// hosts that serve the static files without those rules.
const legacy = legacyLocaleTarget(new URL(location.href))
if (legacy) location.replace(legacy.href)
observeAcquisition()

type Placement = "header" | "hero" | "footer" | "guide" | "filters"
const placements: readonly Placement[] = ["header", "hero", "footer", "guide", "filters"]

// Analytics: one delegated listener covers every download and guide link.
document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-download], [data-guide]") : null
  if (!target) return
  if (target.dataset.download !== undefined) {
    const placement = target.dataset.download as Placement
    track("web_download_clicked", { placement: placements.includes(placement) ? placement : "guide" })
  } else track("web_guide_opened")
})

// Header gains a backdrop once the page scrolls under it.
const header = document.querySelector<HTMLElement>("[data-header]")
const sync = () => header?.classList.toggle("is-scrolled", scrollY > 8)
sync()
addEventListener("scroll", sync, { passive: true })

// Disclosure menus close on Escape, outside clicks and navigation.
const menus = [...document.querySelectorAll<HTMLDetailsElement>("details[data-dismiss]")]
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return
  for (const menu of menus) if (menu.open) { menu.open = false; menu.querySelector("summary")?.focus() }
})
document.addEventListener("pointerdown", (event) => {
  for (const menu of menus) if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false
})
for (const menu of menus) {
  menu.addEventListener("toggle", () => { if (menu.open) for (const other of menus) if (other !== menu) other.open = false })
}

// Power-on reveals: sections light up once as they enter the viewport.
const reveals = document.querySelectorAll(".reveal, .power-on")
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("is-on"); observer.unobserve(entry.target) }
  }, { rootMargin: "0px 0px -12% 0px" })
  reveals.forEach((element) => observer.observe(element))
} else reveals.forEach((element) => element.classList.add("is-on"))
