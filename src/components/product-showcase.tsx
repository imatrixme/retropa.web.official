import { ArrowRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { track } from "@/lib/analytics"
import { detailLinkLabel, productDetail } from "@/content/product-details"
import { ProductImage } from "@/components/product-image"
import { localizedPath } from "@/lib/routes"

export function ProductShowcase() {
  const { locale, messages } = useI18n()
  const copy = acquisitionCopy(locale)
  const detailed = locale === "en" || locale.startsWith("zh")
  const skins = productDetail("delta-skins", locale)
  const filters = productDetail("crt-filters", locale)
  const items = [
    { id: "skins" as const, image: "material", title: copy.styles, label: detailed ? skins.label : "Skins", description: detailed ? skins.summary : messages.home.compatibilityPillars[1].description, detail: detailed ? skins.sections[0].body : messages.home.spotlightFeatures[1].description, points: detailed ? skins.sections[0].points : undefined, page: "delta-skins" as const },
    { id: "filters" as const, image: "filter", title: copy.filters, label: detailed ? filters.label : "Filters", description: detailed ? filters.summary : messages.home.compatibilityPillars[0].description, detail: detailed ? filters.sections[0].body : messages.cores.standardsRetroArchDescription, points: detailed ? filters.sections[0].points : undefined, page: "crt-filters" as const },
    { id: "library" as const, image: "library", title: copy.library, label: locale.startsWith("zh") ? "游戏库" : "Library", description: messages.home.spotlightFeatures[0].description, detail: messages.home.spotlightFeatures[1].description, points: undefined, page: "start" as const },
  ]
  return <div className="showcase">
    <nav className="showcase-index" aria-label={copy.experience}>{items.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => track("web_feature_selected", { feature_id: item.id })}>{item.label}<ArrowRight size={16} /></a>)}</nav>
    {items.map((item, index) => <article className="showcase-panel" key={item.id} id={item.id} data-feature={item.id}>
      <ProductImage image={item.image} alt={item.page === "start" ? item.title : productDetail(item.page, locale).imageAlt} caption={`${item.label} / Retropa`} />
      <div className="showcase-copy"><span className="mono">0{index + 1} / {item.label}</span><h3>{item.title}</h3><p>{item.description}</p><p>{item.detail}</p>
        {item.points && <ul className="feature-notes">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}
        <a className="inline-link" href={localizedPath(item.page, locale)}>{item.page === "start" ? copy.start : detailLinkLabel(item.page, locale)}<ArrowRight size={18} /></a>
      </div>
    </article>)}
  </div>
}
