import { ArrowRight, Check, Gamepad2 } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { DownloadLink } from "@/components/download-link"
import { ProductShowcase } from "@/components/product-showcase"
import { localizedPath } from "@/lib/routes"
import { track } from "@/lib/analytics"
import { detailLinkLabel, productDetail } from "@/content/product-details"
import { DisplayStudy } from "@/components/display-study"
import { ProductHero } from "@/components/product-hero"
import { DiscoveryIndex } from "@/components/discovery-index"

export function HomePage() {
  const { locale, messages } = useI18n()
  const copy = acquisitionCopy(locale)
  return <>
    <ProductHero />
    <div className="system-strip" aria-label={messages.home.systemShowcaseTitle}>
      <a href={localizedPath("gba-emulator", locale)}>GBA</a><a href={localizedPath("ds-emulator", locale)}>DS</a><a href={`${localizedPath("cores", locale)}#game-boy`}>GB / GBC</a><a href={`${localizedPath("cores", locale)}#nes`}>NES / SNES</a><a href={localizedPath("arcade", locale)} className="arcade-label">ARCADE <Gamepad2 size={17} /></a><span>CPS / Neo Geo / PGM / M92</span>
    </div>
    <DiscoveryIndex />
    <section className="experience-section" id="experience" aria-label={copy.experience}>
      <ProductShowcase />
    </section>
    <div className="display-section" id="filters"><div className="wrap"><DisplayStudy /></div></div>
    <section className="systems-section" id="systems">
      <div className="wrap systems-inner">
        <div><h2>{messages.home.systemShowcaseTitle}</h2><p>{copy.category}</p><a className="inline-link" href={localizedPath("cores", locale)}>{messages.home.inspectCoreCatalogLabel}<ArrowRight size={18} /></a><p className="arcade-intro" lang={locale.startsWith("zh") ? "zh-Hans" : "en"}>{productDetail("arcade", locale).summary}</p><a className="inline-link" href={localizedPath("arcade", locale)}>{detailLinkLabel("arcade", locale)}<ArrowRight size={18} /></a></div>
        <div className="system-list">
          {["GBA / DS / GB / GBC", "NES / SNES / MD / GG / SMS", "WS / WSC / NGP / NGPC", "CPS I / II / III / Neo Geo / PGM / M92"].map((system, index) => <div key={system}><span className="mono">0{index + 1}</span><h3>{system}</h3><Check size={20} /></div>)}
        </div>
      </div>
    </section>
    <section className="start-section wrap" id="start">
      <div className="section-heading"><h2>{copy.start}</h2><p>{copy.noRoms}</p></div>
      <a className="guide-link" href={localizedPath("start", locale)} onClick={() => track("web_guide_opened")}>
        <span className="mono">01 → 02 → 03</span><span>{copy.start}</span><ArrowRight size={26} />
      </a>
    </section>
    <section className="plus-section" data-feature="plus">
      <div className="wrap plus-inner"><div><h2>Retropa Plus</h2><p>{copy.plus}</p><p className="fine-print">{copy.free}</p></div><DownloadLink placement="footer" /></div>
    </section>
  </>
}
