import { publishedLocales as supportedLocales, isPublishedLocale, retiredLocaleFallback, type Locale } from "@/i18n/locales"
import { pagePathByKey, type PageKey } from "@/i18n/pages"
import { hasProductBody, productPages } from "@/content/product-details"
import { hasStartPageContent } from "@/content/start-page"
import { hasGuidesIndexContent } from "@/content/guides-index"
import { searchPageLocales, searchPagePath, searchPageSlugs } from "@/content/search-pages"

/**
 * A page family groups pages that share publication rules, path generation and
 * locale resolution. Registering a family is what makes its pages routable,
 * publishable and discoverable through language alternates.
 *
 * `localesFor` is a function rather than a fixed list because search pages are
 * published per locale according to the content that actually exists. A locale
 * with no content is never enumerated, so it is never declared as a language
 * alternate or listed in the sitemap.
 */
export type PageFamily = {
  readonly id: string
  readonly pages: readonly string[]
  readonly localesFor: (page: string) => readonly Locale[]
  readonly resolveLocale: (locale: Locale, page: string) => Locale
  readonly path: (page: string) => string
  /** Order used when enumerating published entries; only affects build output order. */
  readonly enumerate: "locale-major" | "page-major"
}

export const guideLocale = (locale: Locale): Locale => (isPublishedLocale(locale) ? locale : retiredLocaleFallback[locale] ?? "en")

/** Resolves a retired language to the published language that replaced it. */
const identity = (locale: Locale): Locale => isPublishedLocale(locale) ? locale : retiredLocaleFallback[locale] ?? "en"
const fixed = (locales: readonly Locale[]) => () => locales

const coreFamily: PageFamily = {
  id: "core",
  pages: ["home", "cores", "terms", "privacy"],
  localesFor: fixed(supportedLocales),
  resolveLocale: identity,
  path: (page) => pagePathByKey[page as PageKey],
  enumerate: "locale-major",
}

/**
 * The start page is published in exactly the locales that have authored copy, so
 * adding a translation is all it takes to publish the route in that language.
 */
const guideFamily: PageFamily = {
  id: "guide",
  pages: ["start"],
  localesFor: () => supportedLocales.filter(hasStartPageContent),
  resolveLocale: (locale) =>
    hasStartPageContent(locale) && isPublishedLocale(locale) ? locale : identity(locale),
  path: (page) => `/${page}/`,
  enumerate: "page-major",
}

/** Product pages publish per locale once that locale has a translated body. */
const productFamily: PageFamily = {
  id: "product",
  pages: productPages,
  localesFor: (page) => supportedLocales.filter((locale) => hasProductBody(page as (typeof productPages)[number], locale)),
  resolveLocale: (locale, page) =>
    hasProductBody(page as (typeof productPages)[number], locale) && isPublishedLocale(locale) ? locale : identity(locale),
  path: (page) => `/${page}/`,
  enumerate: "page-major",
}

/**
 * Search landing pages are published in exactly the locales that have authored
 * content, so the registry stays honest as content is added language by language.
 */
const searchFamily: PageFamily = {
  id: "search",
  pages: searchPageSlugs,
  localesFor: (page) => searchPageLocales(page).filter(isPublishedLocale),
  resolveLocale: (locale, page) => {
    const locales = searchPageLocales(page).filter(isPublishedLocale) as Locale[]
    return locales.includes(locale) ? locale : locales.includes(guideLocale(locale)) ? guideLocale(locale) : locales.includes("en") ? "en" : locales[0] ?? "en"
  },
  path: searchPagePath,
  enumerate: "page-major",
}

/** The `/guides/` index aggregates the answer pages; it is not itself a search page. */
/** The guides index publishes per locale once that locale has translated copy. */
const guidesIndexFamily: PageFamily = {
  id: "guides-index",
  pages: ["guides"],
  localesFor: () => supportedLocales.filter(hasGuidesIndexContent),
  resolveLocale: (locale) => (hasGuidesIndexContent(locale) && isPublishedLocale(locale) ? locale : identity(locale)),
  path: () => "/guides/",
  enumerate: "page-major",
}

export const pageFamilies: readonly PageFamily[] = [coreFamily, guideFamily, productFamily, searchFamily, guidesIndexFamily]

export function familyForPage(page: string): PageFamily | undefined {
  return pageFamilies.find((family) => family.pages.includes(page))
}

/**
 * Enumerates every published page/locale pair across all registered families.
 * Language alternates and the sitemap are both derived from this list, so a page
 * that is not enumerated here is not published.
 */
export function publishedEntries(): { page: string; locale: Locale }[] {
  const entries: { page: string; locale: Locale }[] = []

  for (const family of pageFamilies) {
    if (family.enumerate === "locale-major") {
      for (const locale of family.localesFor("")) {
        for (const page of family.pages) entries.push({ page, locale })
      }
    } else {
      for (const page of family.pages) {
        for (const locale of family.localesFor(page)) entries.push({ page, locale })
      }
    }
  }

  return entries
}
