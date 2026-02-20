import { useEffect } from "react"

import { useI18n } from "@/i18n/context"
import {
  defaultLocale,
  getAlternateLocales,
  localeToHtmlLang,
  localeToOgLocale,
  supportedLocales,
  type Locale,
} from "@/i18n/locales"
import type { PageKey } from "@/i18n/pages"
import { pagePathByKey } from "@/i18n/pages"
import { siteConfig } from "@/lib/site-config"

function ensureMeta(attribute: "name" | "property", value: string): HTMLMetaElement {
  const selector = `meta[${attribute}="${value}"]`
  const existing = document.head.querySelector<HTMLMetaElement>(selector)

  if (existing) {
    return existing
  }

  const meta = document.createElement("meta")
  meta.setAttribute(attribute, value)
  document.head.appendChild(meta)
  return meta
}

function setMetaContent(attribute: "name" | "property", value: string, content: string): void {
  ensureMeta(attribute, value).setAttribute("content", content)
}

function ensureCanonicalLink(url: string): void {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (existing) {
    existing.setAttribute("href", url)
    return
  }

  const link = document.createElement("link")
  link.setAttribute("rel", "canonical")
  link.setAttribute("href", url)
  document.head.appendChild(link)
}

function rebuildHreflangAlternates(canonicalUrl: string): void {
  document.head
    .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
    .forEach((element) => element.remove())

  const xDefault = document.createElement("link")
  xDefault.setAttribute("rel", "alternate")
  xDefault.setAttribute("hreflang", "x-default")
  xDefault.setAttribute("href", canonicalUrl)
  document.head.appendChild(xDefault)

  for (const locale of supportedLocales) {
    const href =
      locale === defaultLocale ? canonicalUrl : `${canonicalUrl}?lang=${encodeURIComponent(locale)}`
    const alternate = document.createElement("link")
    alternate.setAttribute("rel", "alternate")
    alternate.setAttribute("hreflang", locale)
    alternate.setAttribute("href", href)
    document.head.appendChild(alternate)
  }
}

function rebuildAlternateOgLocales(activeLocale: Locale): void {
  document.head
    .querySelectorAll<HTMLMetaElement>('meta[property="og:locale:alternate"]')
    .forEach((element) => element.remove())

  for (const locale of getAlternateLocales(activeLocale)) {
    const alternateMeta = document.createElement("meta")
    alternateMeta.setAttribute("property", "og:locale:alternate")
    alternateMeta.setAttribute("content", localeToOgLocale(locale))
    document.head.appendChild(alternateMeta)
  }
}

function localizeJsonLd(
  pageKey: PageKey,
  input: Record<string, unknown>,
  homeLabel: string,
  termsLabel: string,
  privacyLabel: string,
  description: string
): Record<string, unknown> {
  const clone = JSON.parse(JSON.stringify(input)) as Record<string, unknown>

  if (typeof clone.name === "string") {
    if (pageKey === "terms") {
      clone.name = termsLabel
    } else if (pageKey === "privacy") {
      clone.name = privacyLabel
    }
  }

  if (typeof clone.description === "string") {
    clone.description = description
  }

  if (clone["@type"] === "BreadcrumbList" && Array.isArray(clone.itemListElement)) {
    clone.itemListElement = clone.itemListElement.map((item, index) => {
      if (typeof item !== "object" || item === null) {
        return item
      }

      const next = { ...item }
      if (index === 0) {
        next.name = homeLabel
      }

      if (index === 1) {
        next.name = pageKey === "terms" ? termsLabel : privacyLabel
      }

      return next
    })
  }

  return clone
}

function ensureJsonLdScript(content: Record<string, unknown>): void {
  const existing =
    document.head.querySelector<HTMLScriptElement>("#retropa-runtime-jsonld") ??
    document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]')
  const jsonText = JSON.stringify(content)

  if (existing) {
    existing.id = "retropa-runtime-jsonld"
    existing.textContent = jsonText
    document.head
      .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
      .forEach((script) => {
        if (script !== existing) {
          script.remove()
        }
      })
    return
  }

  const script = document.createElement("script")
  script.id = "retropa-runtime-jsonld"
  script.setAttribute("type", "application/ld+json")
  script.textContent = jsonText
  document.head.appendChild(script)
}

export function useRuntimeSeo(pageKey: PageKey): void {
  const { locale, messages } = useI18n()
  const seo = messages.seo[pageKey]

  useEffect(() => {
    const canonicalPath = pagePathByKey[pageKey]
    const canonicalUrl = new URL(canonicalPath, siteConfig.siteUrl).toString()

    document.documentElement.setAttribute("lang", localeToHtmlLang(locale))
    document.title = seo.title

    setMetaContent("name", "description", seo.description)
    setMetaContent("name", "keywords", seo.keywords)

    setMetaContent("property", "og:type", seo.ogType)
    setMetaContent("property", "og:site_name", messages.shared.brand.name)
    setMetaContent("property", "og:title", seo.ogTitle)
    setMetaContent("property", "og:description", seo.ogDescription)
    setMetaContent("property", "og:url", canonicalUrl)
    setMetaContent("property", "og:image", new URL(siteConfig.socialImage, siteConfig.siteUrl).toString())
    setMetaContent("property", "og:image:alt", messages.shared.brand.logoAlt)
    setMetaContent("property", "og:locale", localeToOgLocale(locale))

    setMetaContent("name", "twitter:card", "summary_large_image")
    setMetaContent("name", "twitter:title", seo.twitterTitle)
    setMetaContent("name", "twitter:description", seo.twitterDescription)
    setMetaContent("name", "twitter:image", new URL(siteConfig.socialImage, siteConfig.siteUrl).toString())
    setMetaContent("name", "twitter:locale", locale)

    ensureCanonicalLink(canonicalUrl)
    rebuildHreflangAlternates(canonicalUrl)
    rebuildAlternateOgLocales(locale)

    const jsonLd = localizeJsonLd(
      pageKey,
      seo.jsonLd,
      messages.shared.nav.home,
      messages.terms.title,
      messages.privacy.title,
      seo.description
    )
    ensureJsonLdScript(jsonLd)
  }, [locale, messages, pageKey, seo])
}
