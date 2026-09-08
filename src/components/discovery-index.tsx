import { ArrowRight, ArrowUpRight } from "lucide-react"
import { discoveryCopy } from "@/content/discovery"
import { useI18n } from "@/i18n/context"
import { localizedPath } from "@/lib/routes"

export function DiscoveryIndex() {
  const { locale } = useI18n()
  const copy = discoveryCopy(locale)
  const entries = [
    { page: "gba-emulator" as const, title: "GBA", text: copy.gba, files: ".gba", number: "01" },
    { page: "ds-emulator" as const, title: "DS", text: copy.ds, files: ".nds", number: "02" },
    { page: "arcade" as const, title: "Arcade", text: copy.arcade, files: "CPS / Neo Geo / PGM / M92", number: "03" },
  ]
  return <section id="discover" className="discovery-section wrap" lang={copy.language} aria-labelledby="discovery-title">
    <header className="discovery-heading"><p className="eyebrow"><span className="section-marker" />{copy.explore}</p><a className="inline-link" href={localizedPath("cores", locale)}>{copy.more}<ArrowRight size={17} /></a></header>
    <div className="discovery-intro"><h2 id="discovery-title">{copy.index}</h2><p>{copy.intro}</p></div>
    <div className="discovery-links">{entries.map(entry => <a href={localizedPath(entry.page, locale)} key={entry.page}>
      <span className="discovery-number mono">{entry.number}<ArrowUpRight size={22} /></span><h3>{entry.title}</h3><p>{entry.text}</p><span className="discovery-files mono">{entry.files}</span>
    </a>)}</div>
  </section>
}
