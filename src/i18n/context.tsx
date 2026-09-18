/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

import { buildCatalog, type CatalogData } from "@/content/emulator-catalog"
import { defaultLocale, normalizeLocale, type Locale } from "@/i18n/locales"
import { localizedPath, routeFromPath } from "@/lib/routes"
import { familyForPage } from "@/lib/page-families"
import type { SitePage } from "@/lib/routes"
import { getMessages, type LocaleMessages } from "@/i18n/messages"

type I18nContextValue = {
  locale: Locale
  /**
   * The page currently being rendered. Components that need to identify their
   * own route, such as the App Store download link, read it from here rather
   * than guessing, so per-page behaviour cannot silently fall back to the
   * homepage.
   */
  page: SitePage
  setLocale: (locale: Locale) => void
  setLocaleFromValue: (value: string) => void
  messages: LocaleMessages
  catalog: CatalogData
}

const I18nContext = createContext<I18nContextValue | null>(null)

type I18nProviderProps = {
  children: ReactNode
  initialLocale?: Locale
  page?: SitePage
}

export function I18nProvider({ children, initialLocale = defaultLocale, page = "home" }: I18nProviderProps) {
  const [locale] = useState<Locale>(initialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    const current = routeFromPath(window.location.pathname).page
    const family = familyForPage(current)
    // A page is only really available in the requested language when the family
    // resolves that locale to itself. `localizedPath` otherwise falls back to a
    // language that does have content, which would leave the visitor on the page
    // they are already reading. In that case go to the requested language's
    // homepage, so choosing a language always changes the language.
    const available = family !== undefined && family.resolveLocale(nextLocale, current) === nextLocale
    const url = new URL(window.location.href)
    url.pathname = available ? localizedPath(current, nextLocale) : localizedPath("home", nextLocale)
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
      page,
      setLocale,
      setLocaleFromValue,
      messages,
      catalog,
    }),
    [catalog, locale, page, messages, setLocale, setLocaleFromValue]
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
