import { ArrowDown } from "lucide-react"
import { acquisitionCopy } from "@/content/acquisition"
import { replayCopy } from "@/content/replay"
import { useI18n } from "@/i18n/context"
import { DownloadLink } from "@/components/download-link"

function ProductScene() {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  return <div className="hero-product-scene">
    <div className="hero-images">
      {[
        { image: "library", alt: copy.library },
        { image: "material", alt: copy.styles },
        { image: "filter", alt: copy.filters },
      ].map(({ image, alt }) => <a className={`hero-product hero-product-${image}`} key={image} href={`/product/${image}.webp`} target="_blank" rel="noopener" title={alt}>
        <img src={`/product/${image}.webp`} alt={alt} width="720" height="1557" fetchPriority={image === "material" ? "high" : "auto"} />
      </a>)}
    </div>
  </div>
}

export function ProductHero() {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  const replay = replayCopy[locale]
  return <section className="product-hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">{copy.category}<span className="hero-platform">iPhone & iPad</span></p>
      <h1 id="hero-title">Retropa<span>.</span></h1>
      <p className="hero-replay">{replay.title}</p>
      <p className="hero-intro">{replay.intro}</p>
      <div className="hero-actions"><DownloadLink placement="hero" /><a href="#experience" className="hero-explore" aria-label={copy.experience} title={copy.experience}><ArrowDown size={22} /></a></div>
      <p className="hero-note">{copy.free}</p>
    </div>
    <ProductScene />
  </section>
}
