import type { Locale } from "@/i18n/locales"
import type { ProductDetail } from "@/content/product-details/types"
import { sharedProductCopy } from "@/content/product-details/shared"

import { pages as de } from "@/content/product-details/locales/de"
import { pages as en } from "@/content/product-details/locales/en"
import { pages as es } from "@/content/product-details/locales/es"
import { pages as fr } from "@/content/product-details/locales/fr"
import { pages as it } from "@/content/product-details/locales/it"
import { pages as ja } from "@/content/product-details/locales/ja"
import { pages as ko } from "@/content/product-details/locales/ko"
import { pages as ru } from "@/content/product-details/locales/ru"
import { pages as zhHans } from "@/content/product-details/locales/zh-Hans"
import { pages as id } from "@/content/product-details/locales/id"
import { pages as th } from "@/content/product-details/locales/th"
import { pages as tr } from "@/content/product-details/locales/tr"
import { pages as vi } from "@/content/product-details/locales/vi"
import { pages as zhHant } from "@/content/product-details/locales/zh-Hant"
import { pages as ptBR } from "@/content/product-details/locales/pt-BR"

export type { ProductDetail, ProductSection } from "@/content/product-details/types"

export const productPages = ["gba-emulator", "ds-emulator", "arcade", "delta-skins", "crt-filters"] as const
export type ProductPage = typeof productPages[number]
export const isProductPage = (page: string): page is ProductPage => productPages.some(value => value === page)

/**
 * Product bodies per locale. Each locale owns one file, so a translator never
 * edits another language by accident.
 *
 * Imports are explicit rather than globbed: this module is also loaded by the
 * integrity gate under plain `bun`, where `import.meta.glob` does not exist. The
 * cost is that a new locale file must be registered here, which the gate checks
 * for, so a finished translation cannot sit unpublished.
 *
 * A locale without a body falls back to the English source, but the short
 * surrounding copy in `sharedProductCopy` is still localized, so a page never
 * becomes fully English just because its long body is not translated yet.
 */
const bodies: Partial<Record<Locale, Record<string, ProductDetail>>> = {
  "de": de,
  en,
  "es": es,
  "fr": fr,
  "it": it,
  "ja": ja,
  "ko": ko,
  "ru": ru,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  "vi": vi,
  "id": id,
  "th": th,
  "pt-BR": ptBR,
  "tr": tr,
}

export function productDetail(page: ProductPage, locale: Locale): ProductDetail {
  const detail = bodies[locale]?.[page] ?? en[page]
  const shared = sharedProductCopy[locale]
  if (page === "arcade") return { ...detail, summary: shared.arcadeSummary, imageAlt: shared.libraryAlt }
  if (page === "delta-skins") return { ...detail, imageAlt: shared.materialAlt }
  return detail
}

/** Whether this product page has a translated body, as opposed to a fallback. */
export const hasProductBody = (page: ProductPage, locale: Locale): boolean =>
  bodies[locale]?.[page] !== undefined

export const detailLinkLabel = (page: ProductPage, locale: Locale) =>
  `${sharedProductCopy[locale].titles[page]}${locale !== "en" && !hasProductBody(page, locale) ? " (EN)" : ""}`
