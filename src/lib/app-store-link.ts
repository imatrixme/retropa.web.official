import type { SitePage } from "@/lib/routes"
import { familyForPage } from "@/lib/page-families"
import { siteConfig } from "@/lib/site-config"
import { analyticsConfig } from "@/lib/analytics"

// Build-time only: derives the per-page App Store campaign token from the route
// registry. Kept apart from analytics.ts so client bundles never include it.
export function appStoreLink(page: SitePage = "home"): string {
  const family = familyForPage(page)
  const pageId = family?.localesFor(page).length && /^[a-z0-9-]+$/.test(page) ? page : "not-found"
  let campaign = pageId === "home" ? "retropa_web_v1" : `retropa_${pageId}`
  if (campaign.length > 30) {
    let hash = 2166136261
    for (const character of pageId) hash = Math.imul(hash ^ character.charCodeAt(0), 16777619)
    campaign = `retropa_${pageId.slice(0, 15)}_${(hash >>> 0).toString(36)}`
  }
  const url = new URL(siteConfig.appStoreUrl)
  url.searchParams.set("ct", campaign)
  url.searchParams.set("mt", "8")
  if (/^\d+$/.test(analyticsConfig.providerToken)) url.searchParams.set("pt", analyticsConfig.providerToken)
  return url.href
}
