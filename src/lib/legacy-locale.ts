import { isPublishedLocale, retiredLocaleFallback, supportedLocales, type Locale } from "../i18n/locales"

const prefix = (locale: Locale) => (locale === "en" ? "" : `/${locale}`)
const published = (locale: Locale): Locale => (isPublishedLocale(locale) ? locale : retiredLocaleFallback[locale] ?? "en")

// Mirrors deploy/legacy-locales.conf. Two migrations, both permanent (308):
// 1. `?lang=` on the four historical entrypoints → the static language path.
// 2. A retired language prefix → the same path in its fallback language.
export function legacyLocaleTarget(url: URL): URL | null {
  const segments = url.pathname.split("/")
  const retired = supportedLocales.find((item) => !isPublishedLocale(item) && item === segments[1])
  if (retired) {
    const target = new URL(url)
    const rest = url.pathname.slice(retired.length + 1) || "/"
    target.pathname = `${prefix(published(retired))}${rest}`
    return target
  }
  const values = url.searchParams.getAll("lang")
  if (values.length !== 1) return null
  const locale = supportedLocales.find(item => item.toLowerCase() === values[0].toLowerCase())
  if (!locale) return null
  const pathname = url.pathname.replace(/\/index\.html$/, "/")
  if (!/^\/(?:cores\/?|terms\/?|privacy\/?)?$/.test(pathname)) return null
  const target = new URL(url)
  const page = pathname.endsWith("/") ? pathname : `${pathname}/`
  target.pathname = `${prefix(published(locale))}${page}`
  target.searchParams.delete("lang")
  return target
}
