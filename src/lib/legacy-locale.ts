import { supportedLocales } from "../i18n/locales"

// Only the four historical entrypoints participate in this migration.
export function legacyLocaleTarget(url: URL): URL | null {
  const values = url.searchParams.getAll("lang")
  if (values.length !== 1) return null
  const locale = supportedLocales.find(item => item.toLowerCase() === values[0].toLowerCase())
  if (!locale) return null
  const pathname = url.pathname.replace(/\/index\.html$/, "/")
  if (!/^\/(?:cores\/?|terms\/?|privacy\/?)?$/.test(pathname)) return null
  const target = new URL(url)
  const page = pathname.endsWith("/") ? pathname : `${pathname}/`
  target.pathname = `${locale === "en" ? "" : `/${locale}`}${page}`
  target.searchParams.delete("lang")
  return target
}
