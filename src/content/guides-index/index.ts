import type { Locale } from "@/i18n/locales"
import type { GuidesIndexContent } from "@/content/guides-index/types"

import { content as en } from "@/content/guides-index/locales/en"
import { content as zhHans } from "@/content/guides-index/locales/zh-Hans"
import { content as zhHant } from "@/content/guides-index/locales/zh-Hant"
import { content as de } from "@/content/guides-index/locales/de"
import { content as es } from "@/content/guides-index/locales/es"
import { content as fr } from "@/content/guides-index/locales/fr"
import { content as it } from "@/content/guides-index/locales/it"
import { content as ja } from "@/content/guides-index/locales/ja"
import { content as ko } from "@/content/guides-index/locales/ko"
import { content as ru } from "@/content/guides-index/locales/ru"
import { content as tr } from "@/content/guides-index/locales/tr"
import { content as ptBR } from "@/content/guides-index/locales/pt-BR"
import { content as vi } from "@/content/guides-index/locales/vi"
import { content as id } from "@/content/guides-index/locales/id"
import { content as th } from "@/content/guides-index/locales/th"

const byLocale: Partial<Record<Locale, Partial<GuidesIndexContent>>> = {
  en, "zh-Hans": zhHans, "zh-Hant": zhHant, de, es, fr, it, ja, ko, ru, tr,
  "pt-BR": ptBR, vi, id, th,
}

/** A locale counts as translated only when it carries real copy, not a placeholder. */
export const hasGuidesIndexContent = (locale: Locale): boolean =>
  typeof byLocale[locale]?.title === "string"

export const guidesIndexContent = (locale: Locale): GuidesIndexContent =>
  hasGuidesIndexContent(locale) ? (byLocale[locale]! as GuidesIndexContent) : en
