import type { Locale } from "@/i18n/locales"
import type { FeatureContent, FeaturePage } from "@/content/feature-pages/types"
import { pages as en } from "@/content/feature-pages/locales/en"
import { pages as zhHans } from "@/content/feature-pages/locales/zh-Hans"
import { pages as ja } from "@/content/feature-pages/locales/ja"

export { featurePages, type FeaturePage } from "@/content/feature-pages/types"

/**
 * Controls and import reference pages. A page is published in a locale only
 * when that locale carries its own body; others resolve to English.
 */
const byLocale: Partial<Record<Locale, Partial<Record<FeaturePage, FeatureContent>>>> = { en, "zh-Hans": zhHans, ja }

export const isFeaturePage = (page: string): page is FeaturePage => page === "controls" || page === "import"
export const hasFeatureBody = (page: FeaturePage, locale: Locale): boolean => Boolean(byLocale[locale]?.[page]?.sections.length)
export const featureContent = (page: FeaturePage, locale: Locale): FeatureContent => byLocale[locale]?.[page] ?? en[page]
