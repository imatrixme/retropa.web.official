import { ArrowDown, ArrowUpRight } from "lucide-react"
import { acquisitionCopy } from "@/content/acquisition"
import { replayCopy } from "@/content/replay"
import { discoveryCopy } from "@/content/discovery"
import { productDetail } from "@/content/product-details"
import { useI18n } from "@/i18n/context"
import { DownloadLink } from "@/components/download-link"
import { localizedPath } from "@/lib/routes"

export function ProductHero() {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  const replay = replayCopy[locale]
  const discovery = discoveryCopy(locale)
  return <section className="product-hero" aria-labelledby="hero-title">
    <div className="hero-art"><img src="/product/material-detail.webp" width="720" height="1140" alt={productDetail("delta-skins", locale).imageAlt} fetchPriority="high" /></div>
    <div className="hero-copy wrap">
      <p className="hero-edition mono">iPhone & iPad <span>GBA / DS / ARCADE</span></p>
      <h1 id="hero-title">Retropa<span>.</span></h1>
      <p className="hero-replay">{replay.title}</p>
      <p className="hero-intro">{replay.intro}</p>
      <div className="hero-actions"><DownloadLink placement="hero" /><a href="#discover" className="hero-explore" aria-label={discovery.explore} title={discovery.explore}><ArrowDown size={22} /></a></div>
      <p className="hero-note">{copy.free}</p>
    </div>
    <a className="hero-art-link" href={localizedPath("delta-skins", locale)}><span>{copy.styles}</span><ArrowUpRight size={17} /></a>
    <div className="hero-colophon mono" aria-hidden="true"><span>RETROPA / PLAY COLLECTION</span><span>01</span></div>
  </section>
}
