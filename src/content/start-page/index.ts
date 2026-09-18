import type { Locale } from "@/i18n/locales"
import type { StartPageContent } from "@/content/start-page/types"

import { content as en } from "@/content/start-page/locales/en"
import { content as zhHans } from "@/content/start-page/locales/zh-Hans"
import { content as zhHant } from "@/content/start-page/locales/zh-Hant"
import { content as de } from "@/content/start-page/locales/de"
import { content as es } from "@/content/start-page/locales/es"
import { content as fr } from "@/content/start-page/locales/fr"
import { content as it } from "@/content/start-page/locales/it"
import { content as ja } from "@/content/start-page/locales/ja"
import { content as ko } from "@/content/start-page/locales/ko"
import { content as ru } from "@/content/start-page/locales/ru"
import { content as tr } from "@/content/start-page/locales/tr"
import { content as ptBR } from "@/content/start-page/locales/pt-BR"
import { content as vi } from "@/content/start-page/locales/vi"
import { content as id } from "@/content/start-page/locales/id"
import { content as th } from "@/content/start-page/locales/th"

/**
 * Start-page copy per locale. A locale without its own file falls back to the
 * English source, which keeps the route working while making the gap visible.
 */
const byLocale: Partial<Record<Locale, Partial<StartPageContent>>> = {
  en, "zh-Hans": zhHans, "zh-Hant": zhHant, de, es, fr, it, ja, ko, ru, tr,
  "pt-BR": ptBR, vi, id, th,
}

/** A locale counts as translated only when it carries real copy, not a placeholder. */
export const hasStartPageContent = (locale: Locale): boolean =>
  typeof byLocale[locale]?.title === "string" && (byLocale[locale]?.faqs?.length ?? 0) > 0

export const startPageContent = (locale: Locale): StartPageContent =>
  hasStartPageContent(locale) ? (byLocale[locale]! as StartPageContent) : en
