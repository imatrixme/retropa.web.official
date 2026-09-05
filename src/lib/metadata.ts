import { acquisitionCopy } from "@/content/acquisition"
import { getMessages } from "@/i18n/messages"
import { supportedLocales, type Locale } from "@/i18n/locales"
import { localizedPath, type SitePage } from "@/lib/routes"
import { siteConfig } from "@/lib/site-config"
import { isProductPage, productDetail, productPages } from "@/content/product-details"

export const publishedPages = supportedLocales.flatMap(locale => ["home", "cores", "terms", "privacy"].map(page => ({ page: page as SitePage, locale })))
publishedPages.push({ page: "start", locale: "en" }, { page: "start", locale: "zh-Hans" })
for (const page of productPages) publishedPages.push({ page, locale: "en" }, { page, locale: "zh-Hans" })

export function getPageMetadata(page: SitePage, locale: Locale) {
  const messages = getMessages(locale)
  const copy = acquisitionCopy(locale)
  const canonical = new URL(localizedPath(page, locale), siteConfig.siteUrl).href
  const detail = isProductPage(page) ? productDetail(page, locale) : null
  const title = page === "home" ? locale === "en" ? "Retropa | GBA, DS & Arcade Emulator for iPhone and iPad" : `Retropa | ${copy.category} | iPhone & iPad` : page === "start" ? locale === "zh-Hans" ? "Retropa 游戏导入指南 | GBA、DS 与街机" : "How to Import ROMs in Retropa | iPhone & iPad Guide" : page === "not-found" ? "Page not found | Retropa" : isProductPage(page) ? `${detail!.title} | Retropa` : messages.seo[page].title
  const description = page === "home" ? `${copy.intro} ${copy.free}` : page === "start" ? locale === "zh-Hans" ? "在 iPhone 和 iPad 上导入 GBA、DS 与街机游戏。了解 ROM、BIOS、Delta 皮肤、手柄、存档、Plus 与无需整数倍缩放的高级滤镜。" : "Import GBA, DS and arcade games on iPhone and iPad. Answers about ROMs, BIOS, Delta skins, controllers, saves, Plus and advanced filters without integer scaling." : page === "not-found" ? "Return to Retropa." : isProductPage(page) ? detail!.summary : messages.seo[page].description
  const alternates = publishedPages.filter(route => route.page === page).map(route => ({ locale: route.locale, href: new URL(localizedPath(page, route.locale), siteConfig.siteUrl).href }))
  const jsonLd = page === "home" ? {
    "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": `${siteConfig.siteUrl}/#app`, name: "Retropa", applicationCategory: "GameApplication",
    operatingSystem: "iOS 18 or later", url: canonical, description, inLanguage: locale,
    downloadUrl: siteConfig.appStoreUrl, image: new URL(siteConfig.socialImage, siteConfig.siteUrl).href,
    featureList: ["GBA and DS emulation", "CPS, Neo Geo, PGM and M92 arcade families", "Delta .deltaskin import", "Advanced CRT and LCD filters without an integer-scaling requirement", "RetroArch .slang and .slangp workflows", "External controller mapping"],
    screenshot: ["material", "filter", "library"].map(image => new URL(`/product/${image}.webp`, siteConfig.siteUrl).href),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: copy.free },
  } : { "@context": "https://schema.org", "@type": "WebPage", name: title, description, url: canonical, inLanguage: locale,
    about: { "@type": "SoftwareApplication", "@id": `${siteConfig.siteUrl}/#app`, name: "Retropa" },
    isPartOf: { "@type": "WebSite", name: "Retropa", url: siteConfig.siteUrl } }
  return { title, description, canonical, alternates, jsonLd }
}
