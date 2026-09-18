import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { DownloadLink } from "@/components/download-link"
import { detailLinkLabel } from "@/content/product-details"
import { localizedPath } from "@/lib/routes"
import { searchPageLocales } from "@/content/search-pages"

const systemLabels: Record<string, string> = {
  "game-boy": "GB", "game-boy-color": "GBC", "game-boy-advance": "GBA", "nintendo-ds": "DS",
  nes: "NES", snes: "SNES", "sega-master-system": "SMS", "game-gear": "GG", "mega-drive": "MD", genesis: "GEN",
  wonderswan: "WS", "wonderswan-color": "WSC", "neo-geo-pocket": "NGP", "neo-geo-pocket-color": "NGPC", containers: "ZIP / RetroPack",
}

/**
 * Maps catalog ids to their dedicated landing page. An id without a page of its
 * own links to nothing extra, so the catalog never advertises a destination that
 * does not exist, and never links a locale where the page is unpublished.
 */
const systemLandingPage: Record<string, string> = {
  "game-boy": "gb-emulator", "game-boy-color": "gbc-emulator", "game-boy-advance": "gba-emulator",
  "nintendo-ds": "ds-emulator", nes: "nes-emulator", snes: "snes-emulator",
  "sega-master-system": "master-system-emulator", "game-gear": "game-gear-emulator",
  "mega-drive": "sega-genesis-emulator", genesis: "sega-genesis-emulator",
  wonderswan: "wonderswan-emulator", "wonderswan-color": "wonderswan-emulator",
  "neo-geo-pocket": "neogeo-pocket-emulator", "neo-geo-pocket-color": "neogeo-pocket-emulator",
}

const coreLandingPage: Record<string, string> = {
  mgba: "mgba-core", skyemu: "skyemu-core", sameboy: "sameboy-core",
  rusticones: "rusticones-core", tetanes: "tetanes-core", lakesnes: "lakesnes-core",
  jgenesis: "jgenesis-core", ares: "ares-core",
}

export function CoresPage() {
  const { locale, messages, catalog } = useI18n()
  const copy = acquisitionCopy(locale)
  const names = new Map(catalog.emulatorCores.map(core => [core.id, core.label]))
  const pageLink = (slug: string | undefined) =>
    slug && searchPageLocales(slug).includes(locale) ? localizedPath(slug, locale) : null
  return <article className="reference-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA</p><h1>{messages.home.systemShowcaseTitle}</h1><p>{messages.cores.heroDescription}</p><DownloadLink placement="guide" /></header>
    <p className="content-notice">{copy.noRoms}</p>
    <section className="arcade-reference"><h2>Arcade</h2><p className="arcade-systems">CPS I / CPS II / CPS III / Neo Geo / PGM / M92</p><p>{copy.plus}</p><a className="inline-link" href={localizedPath("arcade", locale)}>{detailLinkLabel("arcade", locale)}<ArrowUpRight size={18} /></a></section>
    <section><h2>{messages.cores.systemMatrixTitle}</h2><div className="support-table" role="region" aria-label={messages.cores.systemMatrixTitle} tabIndex={0}>
      <table><thead><tr><th>{messages.home.systemShowcaseTitle}</th><th>{messages.cores.availableCoresLabel}</th><th>{messages.cores.romCoverageLabel}</th></tr></thead><tbody>
        {catalog.systemSupportMatrix.map(system => {
          const link = pageLink(systemLandingPage[system.id])
          return <tr id={system.id} key={system.id}><th scope="row">{link ? <a href={link}>{systemLabels[system.id]}</a> : systemLabels[system.id]}</th><td>{system.coreIds.map(id => names.get(id)).join(" / ")}</td><td className="mono">{system.romExtensions.join(" ")}</td></tr>
        })}
      </tbody></table>
    </div></section>
    <section className="core-credits"><h2>{messages.cores.coreCardsTitle}</h2><div className="credit-list">{catalog.emulatorCores.map(core => {
      const link = pageLink(coreLandingPage[core.id])
      return <a href={link ?? core.githubUrl} key={core.id} {...(link ? {} : { rel: "noopener", target: "_blank" })}><img src={core.logoPath} width="64" height="40" alt="" loading="lazy" /><span>{core.label}</span><ArrowUpRight size={18} /></a>
    })}</div></section>
    <section className="compatibility-notes">{messages.home.compatibilityPillars.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</section>
  </article>
}
