import type { Locale } from "@/i18n/locales"
import type { FeatureCatalog } from "@/content/feature-pages/types"
import { appStoreLink } from "@/lib/app-store-link"
import { siteLink } from "@/lib/links"
import type { SitePage } from "@/lib/routes"

export type ResolvedCard = {
  title: string
  body: string
  action: string
  note?: string
  href: string
  hreflang?: Locale
  /** Outside sites open in a new tab; the App Store and site pages do not, matching every other App Store link. */
  newTab: boolean
  /** Set on App Store links so the delegated download listener counts them. */
  download?: "header" | "guide"
}

/**
 * Turns a content card into a link. App Store cards take the campaign of the
 * page they appear on (`from`), so a click from the products page and one from
 * the header menu stay distinguishable in App Store Connect.
 */
export function resolveCard(card: FeatureCatalog, from: SitePage, locale: Locale, placement: "header" | "guide"): ResolvedCard {
  const base = { title: card.title, body: card.body, action: card.action, note: card.note }
  if (card.href) return { ...base, href: card.href, newTab: true }
  if (card.page) {
    const link = siteLink(card.page, locale)
    return { ...base, href: link.href, hreflang: link.hreflang, newTab: false }
  }
  return { ...base, href: appStoreLink(from), newTab: false, download: placement }
}
