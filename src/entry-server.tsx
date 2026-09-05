import { renderToStaticMarkup, renderToString } from "react-dom/server"
import { Site } from "@/site"
import { getPageMetadata, publishedPages } from "@/lib/metadata"
import { localizedPath, type SitePage } from "@/lib/routes"
import { siteConfig } from "@/lib/site-config"
import type { Locale } from "@/i18n/locales"
import { analyticsConfig } from "@/lib/analytics"

export { publishedPages, localizedPath, analyticsConfig }

export function renderPage(page: SitePage, locale: Locale, assets: { script: string; styles: string[] }) {
  const meta = getPageMetadata(page, locale)
  const body = renderToString(<Site page={page} locale={locale} />)
  return "<!doctype html>" + renderToStaticMarkup(<html lang={locale}><head>
    <meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{meta.title}</title><meta name="description" content={meta.description} />
    <meta name="robots" content={page === "not-found" ? "noindex,follow" : "index,follow,max-image-preview:large"} />
    <link rel="canonical" href={meta.canonical} />
    {meta.alternates.map(item => <link key={item.locale} rel="alternate" hrefLang={item.locale} href={item.href} />)}
    {page !== "not-found" && <link rel="alternate" hrefLang="x-default" href={new URL(localizedPath(page, "en"), siteConfig.siteUrl).href} />}
    <link rel="icon" href="/brand/retropa-site-logo-192.png" type="image/png" />
    <link rel="apple-touch-icon" href="/brand/retropa-site-logo-192.png" /><link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#fafafa" />
    <meta property="og:type" content="website" /><meta property="og:site_name" content="Retropa" />
    <meta property="og:title" content={meta.title} /><meta property="og:description" content={meta.description} />
    <meta property="og:url" content={meta.canonical} /><meta property="og:image" content={new URL(siteConfig.socialImage, siteConfig.siteUrl).href} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} /><meta name="twitter:image" content={new URL(siteConfig.socialImage, siteConfig.siteUrl).href} />
    <link rel="preload" as="font" href="/fonts/bricolage-latin.woff2" type="font/woff2" crossOrigin="anonymous" />
    {assets.styles.map(style => <link rel="stylesheet" key={style} href={`/${style}`} />)}
    <script src="/theme.js" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c") }} />
  </head><body><div id="root" dangerouslySetInnerHTML={{ __html: body }} /><script type="module" src={`/${assets.script}`} /></body></html>)
}
