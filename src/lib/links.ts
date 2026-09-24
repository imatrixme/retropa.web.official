import { localeLabelByLocale, publishedLocales, type Locale } from "@/i18n/locales"
import { familyForPage } from "@/lib/page-families"
import { localizedPath, type SitePage } from "@/lib/routes"

export type SiteLink = { href: string; hreflang: Locale; foreign: boolean }

/**
 * A link to `page` for a visitor reading in `locale`. When the page is not
 * published in that language it resolves to the closest published language,
 * and `foreign` tells the template to label the link with that language.
 */
export function siteLink(page: SitePage, locale: Locale): SiteLink {
  const resolved = familyForPage(page)?.resolveLocale(locale, page) ?? "en"
  return { href: localizedPath(page, locale), hreflang: resolved, foreign: resolved !== locale }
}

/**
 * Language menu targets for the current page. A language where the page is
 * unpublished points to that language's homepage, so choosing a language always
 * changes the language.
 */
export function languageTargets(page: SitePage) {
  const family = familyForPage(page)
  return publishedLocales.map((locale) => {
    const available = page !== "not-found" && family?.resolveLocale(locale, page) === locale
    return { locale, label: localeLabelByLocale[locale], href: localizedPath(available ? page : "home", locale) }
  })
}

const tags: Partial<Record<Locale, string>> = { en: "EN", "zh-Hans": "中文", ja: "日本語" }
export const languageTag = (locale: Locale) => tags[locale] ?? locale.toUpperCase()
