import { ArrowUpRight, Download } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { appStoreLink, track } from "@/lib/analytics"
import type { SitePage } from "@/lib/routes"

/**
 * `placement` names the slot the link occupies, and `page` overrides which
 * landing page the campaign token is derived from. By default the token follows
 * the route being rendered, which is read from the i18n context rather than
 * guessed, so a per-page campaign cannot silently collapse into the homepage
 * token.
 */
export function DownloadLink({ placement, compact = false, page }: { placement: "header" | "hero" | "footer" | "guide" | "filters"; compact?: boolean; page?: SitePage }) {
  const { page: currentPage, messages } = useI18n()
  return <a className={`download-link${compact ? " compact" : ""}`} href={appStoreLink(page ?? currentPage)}
    onClick={() => track("web_download_clicked", { placement })}>
    <Download size={17} aria-hidden="true" />
    <span>{compact ? messages.shared.headerDownloadLabel : messages.home.downloadForIOSLabel}</span>
    {!compact && <ArrowUpRight size={18} aria-hidden="true" />}
  </a>
}
