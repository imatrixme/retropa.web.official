import { normalizeLocale, publishedLocales as supportedLocales, type Locale } from "@/i18n/locales"
import type { PageKey } from "@/i18n/pages"
import type { ProductPage } from "@/content/product-details"
import { familyForPage, guideLocale, pageFamilies } from "@/lib/page-families"

/**
 * Every addressable page. Core pages and product pages are literal unions;
 * search landing pages and the guides index are open strings, because they are
 * registered from content modules. Their validity is enforced by the route
 * registry and the build integrity gate rather than by the type system.
 */
export type SitePage = PageKey | ProductPage | "start" | "guides" | "not-found" | (string & {})

export { guideLocale }

export function localizedPath(page: SitePage, locale: Locale): string {
  if (page === "not-found") return "/404.html"
  const family = familyForPage(page)
  if (!family || family.localesFor(page).length === 0) return "/404.html"
  const language = family.resolveLocale(locale, page)
  const path = family.path(page)
  return `${language === "en" ? "" : `/${language}`}${path}`
}

export function routeFromPath(pathname: string): { page: SitePage; locale: Locale } {
  const parts = pathname.split("/").filter(Boolean)
  const prefix = supportedLocales.find((value) => value === parts[0])
  const locale = prefix ?? "en"
  const segments = prefix ? parts.slice(1) : parts
  const path = segments.length ? `/${segments.join("/")}/` : "/"
  for (const family of pageFamilies) {
    const page = family.pages.find((candidate) => family.path(candidate) === path)
    if (page && family.localesFor(page).includes(locale)) return { page, locale }
  }
  return { page: "not-found", locale }
}

export function legacyLocaleRedirect(): void {
  const requested = normalizeLocale(new URLSearchParams(location.search).get("lang"))
  if (!requested) return
  const current = routeFromPath(location.pathname)
  if (current.page === "not-found") return
  const url = new URL(location.href)
  url.pathname = localizedPath(current.page, requested)
  url.searchParams.delete("lang")
  location.replace(url.href)
}
