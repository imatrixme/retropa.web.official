import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { DownloadLink } from "@/components/download-link"
import { detailLinkLabel } from "@/content/product-details"
import { localizedPath } from "@/lib/routes"

const systemLabels: Record<string, string> = {
  "game-boy": "GB", "game-boy-color": "GBC", "game-boy-advance": "GBA", "nintendo-ds": "DS",
  nes: "NES", snes: "SNES", "sega-master-system": "SMS", "game-gear": "GG", "mega-drive": "MD", genesis: "GEN",
  wonderswan: "WS", "wonderswan-color": "WSC", "neo-geo-pocket": "NGP", "neo-geo-pocket-color": "NGPC", containers: "ZIP / RetroPack",
}

export function CoresPage() {
  const { locale, messages, catalog } = useI18n()
  const copy = acquisitionCopy(locale)
  const names = new Map(catalog.emulatorCores.map(core => [core.id, core.label]))
  return <article className="reference-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA</p><h1>{messages.home.systemShowcaseTitle}</h1><p>{messages.cores.heroDescription}</p><DownloadLink placement="guide" /></header>
    <p className="content-notice">{copy.noRoms}</p>
    <section className="arcade-reference"><h2>Arcade</h2><p className="arcade-systems">CPS I / CPS II / CPS III / Neo Geo / PGM / M92</p><p>{copy.plus}</p><a className="inline-link" href={localizedPath("arcade", locale)}>{detailLinkLabel("arcade", locale)}<ArrowUpRight size={18} /></a></section>
    <section><h2>{messages.cores.systemMatrixTitle}</h2><div className="support-table" role="region" aria-label={messages.cores.systemMatrixTitle} tabIndex={0}>
      <table><thead><tr><th>{messages.home.systemShowcaseTitle}</th><th>{messages.cores.availableCoresLabel}</th><th>{messages.cores.romCoverageLabel}</th></tr></thead><tbody>
        {catalog.systemSupportMatrix.map(system => <tr key={system.id}><th scope="row">{systemLabels[system.id]}</th><td>{system.coreIds.map(id => names.get(id)).join(" / ")}</td><td className="mono">{system.romExtensions.join(" ")}</td></tr>)}
      </tbody></table>
    </div></section>
    <section className="core-credits"><h2>{messages.cores.coreCardsTitle}</h2><div className="credit-list">{catalog.emulatorCores.map(core => <a href={core.githubUrl} key={core.id} rel="noopener" target="_blank"><img src={core.logoPath} width="64" height="40" alt="" loading="lazy" /><span>{core.label}</span><ArrowUpRight size={18} /></a>)}</div></section>
    <section className="compatibility-notes">{messages.home.compatibilityPillars.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</section>
  </article>
}
