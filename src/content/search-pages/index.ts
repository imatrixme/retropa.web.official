import type { Locale } from "@/i18n/locales"
import { supportedLocales } from "@/i18n/locales"
import { detailLinkLabel, isProductPage } from "@/content/product-details"
import type { SearchPageContent } from "@/content/search-pages/types"

import { pages as en } from "@/content/search-pages/locales/en"
import { pages as zhHans } from "@/content/search-pages/locales/zh-Hans"
import { pages as zhHant } from "@/content/search-pages/locales/zh-Hant"
import { pages as de } from "@/content/search-pages/locales/de"
import { pages as es } from "@/content/search-pages/locales/es"
import { pages as fr } from "@/content/search-pages/locales/fr"
import { pages as it } from "@/content/search-pages/locales/it"
import { pages as ja } from "@/content/search-pages/locales/ja"
import { pages as ko } from "@/content/search-pages/locales/ko"
import { pages as ru } from "@/content/search-pages/locales/ru"
import { pages as tr } from "@/content/search-pages/locales/tr"
import { pages as ptBR } from "@/content/search-pages/locales/pt-BR"
import { pages as vi } from "@/content/search-pages/locales/vi"
import { pages as id } from "@/content/search-pages/locales/id"
import { pages as th } from "@/content/search-pages/locales/th"

/**
 * Locale-scoped content modules. Each file owns one language, so adding or
 * editing a translation never touches another language's file. A locale with no
 * entry for a slug is simply not published in that language, which is what keeps
 * language alternates and the sitemap honest.
 */
const byLocale: Record<Locale, Record<string, SearchPageContent>> = {
  en, "zh-Hans": zhHans, "zh-Hant": zhHant, de, es, fr, it, ja, ko, ru, tr,
  "pt-BR": ptBR, vi, id, th,
}

/** Slugs are the union across locales; a slug published nowhere would be a mistake. */
const allSlugs = [...new Set(supportedLocales.flatMap((locale) => Object.keys(byLocale[locale] ?? {})))]

const bySlug = new Map<string, Partial<Record<Locale, SearchPageContent>>>()
for (const locale of supportedLocales) {
  for (const [slug, content] of Object.entries(byLocale[locale] ?? {})) {
    const entry = bySlug.get(slug) ?? {}
    entry[locale] = content
    bySlug.set(slug, entry)
  }
}

for (const [slug, entry] of bySlug) {
  if (!entry.en) throw new Error(`Search page "${slug}" has no English source and cannot establish a canonical path`)
}

export const searchPageSlugs: readonly string[] = allSlugs.sort()

/** Locales in which a given search page is actually published. */
export function searchPageLocales(slug: string): Locale[] {
  const entry = bySlug.get(slug)
  return entry ? supportedLocales.filter((locale) => entry[locale] !== undefined) : []
}

export function searchPageContent(slug: string, locale: Locale): SearchPageContent | null {
  const entry = bySlug.get(slug)
  if (!entry) return null
  return entry[locale] ?? entry[locale.startsWith("zh") ? "zh-Hans" : "en"] ?? entry.en ?? null
}

export function isSearchPage(slug: string): boolean {
  return bySlug.has(slug)
}

/**
 * Answer pages live under `/guides/` so the index page and its children form one
 * crawlable hierarchy. Other search pages sit at the site root. Paths are derived
 * from the English source, because a route must not depend on which translations
 * happen to exist.
 */
export function searchPagePath(slug: string): string {
  const content = bySlug.get(slug)?.en
  return content?.kind === "guide" ? `/guides/${slug}/` : `/${slug}/`
}

/** Slugs of every published answer page, derived from the English source. */
export const guidePageSlugs: readonly string[] = searchPageSlugs.filter((slug) => bySlug.get(slug)?.en?.kind === "guide")

export function relatedSearchPages(content: SearchPageContent, locale: Locale): Pick<SearchPageContent, "slug" | "label">[] {
  return (content.related ?? []).flatMap((slug) => {
    if (isProductPage(slug)) return [{ slug, label: detailLinkLabel(slug, locale) }]
    const page = searchPageContent(slug, locale)
    return page ? [{ slug: page.slug, label: page.label }] : []
  })
}
