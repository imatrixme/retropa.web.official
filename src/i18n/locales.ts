export const supportedLocales = [
  "en",
  "de",
  "es",
  "fr",
  "it",
  "ja",
  "ko",
  "ru",
  "tr",
  "pt-BR",
  "vi",
  "id",
  "th",
  "zh-Hans",
  "zh-Hant",
] as const

export type Locale = (typeof supportedLocales)[number]

export const defaultLocale: Locale = "en"
export const localeStorageKey = "retropa.locale"
export const localeQueryParam = "lang"

export const localeLabelByLocale: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
  tr: "Türkçe",
  "pt-BR": "Português (Brasil)",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  th: "ไทย",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
}

const exactLocaleMap: Record<string, Locale> = {
  en: "en",
  de: "de",
  es: "es",
  fr: "fr",
  it: "it",
  ja: "ja",
  ko: "ko",
  ru: "ru",
  tr: "tr",
  "pt-br": "pt-BR",
  vi: "vi",
  id: "id",
  th: "th",
  "zh-hans": "zh-Hans",
  "zh-hant": "zh-Hant",
}

const baseLocaleMap: Record<string, Locale> = {
  en: "en",
  de: "de",
  es: "es",
  fr: "fr",
  it: "it",
  ja: "ja",
  ko: "ko",
  ru: "ru",
  tr: "tr",
  vi: "vi",
  id: "id",
  th: "th",
}

function normalizeRawLocale(raw: string): string {
  return raw.trim().replace(/_/g, "-")
}

function normalizeLowerLocale(raw: string): string {
  return normalizeRawLocale(raw).toLowerCase()
}

function normalizeChineseLocale(lower: string): Locale | null {
  if (
    lower === "zh-hans" ||
    lower === "zh-cn" ||
    lower === "zh-sg" ||
    lower.startsWith("zh-hans-")
  ) {
    return "zh-Hans"
  }

  if (
    lower === "zh-hant" ||
    lower === "zh-tw" ||
    lower === "zh-hk" ||
    lower === "zh-mo" ||
    lower.startsWith("zh-hant-")
  ) {
    return "zh-Hant"
  }

  return null
}

function normalizePortugueseLocale(lower: string): Locale | null {
  if (lower === "pt-br" || lower.startsWith("pt-br-")) {
    return "pt-BR"
  }

  return null
}

export function normalizeLocale(raw: string | null | undefined): Locale | null {
  if (!raw) {
    return null
  }

  const normalized = normalizeRawLocale(raw)
  if (!normalized) {
    return null
  }

  const lowered = normalized.toLowerCase()
  const exact = exactLocaleMap[lowered]
  if (exact) {
    return exact
  }

  const chinese = normalizeChineseLocale(lowered)
  if (chinese) {
    return chinese
  }

  const portuguese = normalizePortugueseLocale(lowered)
  if (portuguese) {
    return portuguese
  }

  const base = lowered.split("-")[0]
  return baseLocaleMap[base] ?? null
}

export function getLocaleFromQuery(search: string): Locale | null {
  const params = new URLSearchParams(search)
  return normalizeLocale(params.get(localeQueryParam))
}

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null
  }

  return normalizeLocale(window.localStorage.getItem(localeStorageKey))
}

function getBrowserLocales(): string[] {
  if (typeof navigator === "undefined") {
    return []
  }

  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return navigator.languages
  }

  return navigator.language ? [navigator.language] : []
}

export function getBrowserLocale(): Locale | null {
  const candidates = getBrowserLocales()

  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate)
    if (normalized) {
      return normalized
    }
  }

  return null
}

export function detectInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale
  }

  const queryValue = new URLSearchParams(window.location.search).get(localeQueryParam)
  if (queryValue !== null) {
    return normalizeLocale(queryValue) ?? defaultLocale
  }

  const storedValue = window.localStorage.getItem(localeStorageKey)
  if (storedValue !== null) {
    return normalizeLocale(storedValue) ?? defaultLocale
  }

  return getBrowserLocale() ?? defaultLocale
}

export function persistLocale(locale: Locale): void {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(localeStorageKey, locale)
}

export function localeToHtmlLang(locale: Locale): string {
  return locale
}

export function localeToOgLocale(locale: Locale): string {
  const map: Record<Locale, string> = {
    en: "en_US",
    de: "de_DE",
    es: "es_ES",
    fr: "fr_FR",
    it: "it_IT",
    ja: "ja_JP",
    ko: "ko_KR",
    ru: "ru_RU",
    tr: "tr_TR",
    "pt-BR": "pt_BR",
    vi: "vi_VN",
    id: "id_ID",
    th: "th_TH",
    "zh-Hans": "zh_CN",
    "zh-Hant": "zh_TW",
  }

  return map[locale]
}

export function getAlternateLocales(locale: Locale): Locale[] {
  return supportedLocales.filter((item) => item !== locale)
}

export function normalizeLocaleTag(raw: string): string {
  const normalized = normalizeLowerLocale(raw)
  const locale = normalizeLocale(normalized)
  return locale ?? defaultLocale
}
