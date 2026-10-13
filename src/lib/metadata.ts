import { acquisitionCopy } from "@/content/acquisition"
import { getMessages } from "@/i18n/messages"
import { type Locale } from "@/i18n/locales"
import { localizedPath, type SitePage } from "@/lib/routes"
import { siteConfig } from "@/lib/site-config"
import { isProductPage, productDetail } from "@/content/product-details"
import { isSearchPage, searchPageContent } from "@/content/search-pages"
import { startPageContent } from "@/content/start-page"
import { guidesIndexContent } from "@/content/guides-index"
import { featureContent, isFeaturePage } from "@/content/feature-pages"
import { publishedEntries } from "@/lib/page-families"
import { changelogContent, isShipped, shippedVersion } from "@/content/releases"

export const publishedPages: { page: SitePage; locale: Locale }[] = publishedEntries().map((entry) => ({
  page: entry.page as SitePage,
  locale: entry.locale,
}))

const home = (locale: Locale) => new URL(localizedPath("home", locale), siteConfig.siteUrl).href
const crumbs = (locale: Locale, canonical: string, middle: { name: string; href: string } | null, label: string) => ({
  "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: locale.startsWith("zh") ? "首页" : "Home", item: home(locale) },
    ...(middle ? [{ "@type": "ListItem", position: 2, name: middle.name, item: middle.href }] : []),
    { "@type": "ListItem", position: middle ? 3 : 2, name: label, item: canonical },
  ],
})

export function getPageMetadata(page: SitePage, locale: Locale) {
  const messages = getMessages(locale)
  const copy = acquisitionCopy(locale)
  const canonical = new URL(localizedPath(page, locale), siteConfig.siteUrl).href
  const detail = isProductPage(page) ? productDetail(page, locale) : null
  const search = page !== "not-found" && isSearchPage(page) ? searchPageContent(page, locale) : null
  const socialImage = new URL(`/product/social-${isProductPage(page) ? page : search ? page : "home"}.jpg`, siteConfig.siteUrl).href
  const socialImageAlt = `${locale.startsWith("zh") ? "Retropa 产品展示" : "Retropa product artwork"} / ${detail?.label ?? search?.label ?? "GBA, DS & Arcade"}`
  const start = page === "start" ? startPageContent(locale) : null
  const guides = page === "guides" ? guidesIndexContent(locale) : null
  const feature = page !== "not-found" && isFeaturePage(page) ? featureContent(page, locale) : null
  const changelog = page === "changelog" ? changelogContent(locale) : null
  const title = page === "home" ? locale === "en" ? "Retropa | GBA, DS & Arcade Emulator for iPhone and iPad" : `Retropa | ${copy.category} | iPhone & iPad` : start ? (start.metaTitle ?? start.title) : guides ? (guides.metaTitle ?? guides.title) : changelog ? changelog.metaTitle : feature ? feature.metaTitle : page === "not-found" ? "Page not found | Retropa" : detail ? `${detail.title} | Retropa` : search ? search.title : messages.seo[page as "cores" | "terms" | "privacy"].title
  const description = page === "home" ? `${copy.intro} ${copy.free}` : start ? (start.description ?? start.intro) : guides ? (guides.description ?? guides.intro) : changelog ? changelog.description : feature ? feature.description : page === "not-found" ? "Return to Retropa." : detail ? detail.summary : search ? search.description : messages.seo[page as "cores" | "terms" | "privacy"].description
  const alternates = publishedPages.filter(route => route.page === page).map(route => ({ locale: route.locale, href: new URL(localizedPath(page, route.locale), siteConfig.siteUrl).href }))

  // FAQ structured data mirrors the questions rendered on the page, so the two
  // can never disagree about what the page claims.
  const faqLd = search?.faqs?.length ? {
    "@type": "FAQPage",
    mainEntity: search.faqs.map(item => ({
      "@type": "Question", name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : {}

  const jsonLd = page === "home" ? {
    "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": `${siteConfig.siteUrl}/#app`, name: "Retropa", applicationCategory: "GameApplication",
    operatingSystem: "iOS 18 or later", url: canonical, description, inLanguage: locale,
    downloadUrl: siteConfig.appStoreUrl, image: socialImage,
    softwareVersion: shippedVersion, releaseNotes: new URL(localizedPath("changelog", locale), siteConfig.siteUrl).href,
    featureList: [...(isShipped("2.4.0") ? ["44 console shells in eight material families, with texture and gloss dials and PRO key kits", "Glass panel screen and a redesigned fullscreen with glass keys beside the picture"] : []), "GBA and DS emulation", "CPS, Neo Geo, PGM and M92 arcade families", "Delta .deltaskin import", "Advanced CRT and LCD filters without an integer-scaling requirement", "RetroArch .slang and .slangp workflows", "External controller mapping with vendor templates", "Adaptive touch hot zones with genre touch styles", "Waveform haptics with per-button curves", "Wi-Fi Portal import from a computer browser"],
  } : { "@context": "https://schema.org", "@type": "WebPage", name: title, description, url: canonical, inLanguage: locale,
    about: { "@type": "SoftwareApplication", "@id": `${siteConfig.siteUrl}/#app`, name: "Retropa" },
    isPartOf: { "@type": "WebSite", name: "Retropa", url: siteConfig.siteUrl },
    ...(detail ? { breadcrumb: crumbs(locale, canonical, null, detail.label) } : {}),
    ...(search ? { breadcrumb: crumbs(locale, canonical, { name: locale.startsWith("zh") ? "模拟器核心" : "Emulator cores", href: new URL(localizedPath("cores", locale), siteConfig.siteUrl).href }, search.label) } : {}),
    ...(feature ? { breadcrumb: crumbs(locale, canonical, null, feature.label) } : {}),
    ...(changelog ? { breadcrumb: crumbs(locale, canonical, null, changelog.breadcrumb) } : {}),
    ...(feature ? { mainEntity: { "@type": "FAQPage", mainEntity: feature.faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } } : {}),
    ...faqLd,
  }
  return { title, description, canonical, alternates, jsonLd, socialImage, socialImageAlt }
}
