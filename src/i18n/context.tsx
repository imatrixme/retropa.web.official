/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

import { buildCatalog, type CatalogData } from "@/content/emulator-catalog"
import { defaultLocale, normalizeLocale, type Locale } from "@/i18n/locales"
import { localizedPath, routeFromPath } from "@/lib/routes"
import { getMessages, type LocaleMessages } from "@/i18n/messages"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  setLocaleFromValue: (value: string) => void
  messages: LocaleMessages
  catalog: CatalogData
}

const I18nContext = createContext<I18nContextValue | null>(null)

type I18nProviderProps = {
  children: ReactNode
  initialLocale?: Locale
}

export function I18nProvider({ children, initialLocale = defaultLocale }: I18nProviderProps) {
  const [locale] = useState<Locale>(initialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    const url = new URL(window.location.href)
    url.pathname = localizedPath(routeFromPath(url.pathname).page, nextLocale)
    url.searchParams.delete("lang")
    window.location.assign(url.href)
  }, [])

  const setLocaleFromValue = useCallback(
    (value: string) => {
      const normalizedLocale = normalizeLocale(value)
      if (!normalizedLocale) {
        setLocale(defaultLocale)
        return
      }

      setLocale(normalizedLocale)
    },
    [setLocale]
  )

  const messages = useMemo(() => getMessages(locale), [locale])
  const catalog = useMemo(() => buildCatalog(messages.catalog), [messages.catalog])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      setLocaleFromValue,
      messages,
      catalog,
    }),
    [catalog, locale, messages, setLocale, setLocaleFromValue]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}
