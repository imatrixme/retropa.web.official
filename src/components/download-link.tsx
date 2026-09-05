import { ArrowUpRight, Download } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { appStoreLink, track } from "@/lib/analytics"

export function DownloadLink({ placement, compact = false }: { placement: "header" | "hero" | "footer" | "guide" | "filters"; compact?: boolean }) {
  const { messages } = useI18n()
  return <a className={`download-link${compact ? " compact" : ""}`} href={appStoreLink()}
    onClick={() => track("web_download_clicked", { placement })}>
    <Download size={17} aria-hidden="true" />
    <span>{compact ? messages.shared.headerDownloadLabel : messages.home.downloadForIOSLabel}</span>
    {!compact && <ArrowUpRight size={18} aria-hidden="true" />}
  </a>
}
