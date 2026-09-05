import { normalizeLocale, supportedLocales, type Locale } from "@/i18n/locales"
import { pagePathByKey, type PageKey } from "@/i18n/pages"
import { isProductPage, type ProductPage } from "@/content/product-details"

export type SitePage = PageKey | ProductPage | "start" | "not-found"
export const guideLocale = (locale: Locale): Locale => locale.startsWith("zh") ? "zh-Hans" : "en"

export function localizedPath(page: SitePage, locale: Locale): string {
  if (page === "not-found") return "/404.html"
  const language = page === "start" || isProductPage(page) ? guideLocale(locale) : locale
  const path = page === "start" || isProductPage(page) ? `/${page}/` : pagePathByKey[page]
  return `${language === "en" ? "" : `/${language}`}${path}`
}

export function routeFromPath(pathname: string): { page: SitePage; locale: Locale } {
  const parts = pathname.split("/").filter(Boolean)
  const locale = supportedLocales.find((value) => value === parts[0]) ?? "en"
  const path = locale === "en" ? parts : parts.slice(1)
  const leaf = path.join("/")
  const page = leaf === "" ? "home" : ["cores", "terms", "privacy", "start"].includes(leaf) || isProductPage(leaf) ? leaf as SitePage : "not-found"
  if ((page === "start" || isProductPage(page)) && guideLocale(locale) !== locale) return { page: "not-found", locale }
  return { page, locale }
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
