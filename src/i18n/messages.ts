import type { Locale } from "@/i18n/locales"
import { defaultLocale, supportedLocales } from "@/i18n/locales"
import { localeOverrides } from "@/i18n/messages/locales"
import { enMessages } from "@/i18n/messages/locales/en"
import type { DeepPartial, LocaleMessages } from "@/i18n/messages/types"
import type { PageKey } from "@/i18n/pages"

export type { DeepPartial, LocaleMessages, SeoPageMetadata } from "@/i18n/messages/types"

const typedLocaleOverrides = localeOverrides as Partial<Record<Locale, DeepPartial<LocaleMessages>>>

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function deepClone<T>(input: T): T {
  if (Array.isArray(input)) {
    return input.map((item) => deepClone(item)) as T
  }

  if (isRecord(input)) {
    const output: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(input)) {
      output[key] = deepClone(value)
    }
    return output as T
  }

  return input
}

function mergeDeep<T>(base: T, override?: DeepPartial<T>): T {
  if (!override) {
    return deepClone(base)
  }

  const output = deepClone(base)

  if (!isRecord(output) || !isRecord(override)) {
    return output
  }

  const mutableOutput: Record<string, unknown> = output

  for (const [key, value] of Object.entries(override)) {
    const current = mutableOutput[key]

    if (value === undefined) {
      continue
    }

    if (Array.isArray(value)) {
      mutableOutput[key] = deepClone(value)
      continue
    }

    if (isRecord(current) && isRecord(value)) {
      mutableOutput[key] = mergeDeep(current, value)
      continue
    }

    mutableOutput[key] = value
  }

  return output as T
}

function applyLocaleAwareSeo(
  locale: Locale,
  messages: LocaleMessages,
  overrides?: DeepPartial<LocaleMessages>
): LocaleMessages {
  if (locale === defaultLocale || overrides?.seo) {
    return messages
  }

  const next = deepClone(messages)
  const pageLabelByKey: Record<PageKey, string> = {
    home: next.shared.nav.home,
    cores: next.shared.nav.cores,
    terms: next.terms.title,
    privacy: next.privacy.title,
  }

  ;(["home", "cores", "terms", "privacy"] as const).forEach((pageKey) => {
    const currentPageSeo = next.seo[pageKey]
    const pageLabel = pageLabelByKey[pageKey]
    const localizedDescription = `${pageLabel} · ${currentPageSeo.description}`
    const localizedTitle = `${next.shared.brand.name} · ${pageLabel}`

    next.seo[pageKey] = {
      ...currentPageSeo,
      title: localizedTitle,
      description: localizedDescription,
      ogTitle: localizedTitle,
      ogDescription: localizedDescription,
      twitterTitle: localizedTitle,
      twitterDescription: localizedDescription,
      keywords: `${currentPageSeo.keywords},${locale}`,
    }
  })

  return next
}

const messagesByLocale: Record<Locale, LocaleMessages> = supportedLocales.reduce(
  (accumulator, locale) => {
    const overrides = typedLocaleOverrides[locale]
    const merged = mergeDeep(enMessages, overrides)
    accumulator[locale] = applyLocaleAwareSeo(locale, merged, overrides)
    return accumulator
  },
  {} as Record<Locale, LocaleMessages>
)

export function getMessages(locale: Locale): LocaleMessages {
  return messagesByLocale[locale] ?? messagesByLocale[defaultLocale]
}
