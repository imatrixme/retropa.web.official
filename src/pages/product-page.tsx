import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { productDetail, productPages, type ProductPage as ProductPageKey } from "@/content/product-details"
import { acquisitionCopy } from "@/content/acquisition"
import { ProductImage } from "@/components/product-image"
import { DownloadLink } from "@/components/download-link"
import { localizedPath } from "@/lib/routes"
import { DisplayStudy } from "@/components/display-study"

export function ProductPage({ page }: { page: ProductPageKey }) {
  const { locale, messages } = useI18n()
  const detail = productDetail(page, locale)
  const copy = acquisitionCopy(locale)
  return <article className="detail-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA / {detail.label}</p><h1>{detail.title}</h1><p>{detail.summary}</p><DownloadLink placement="guide" /></header>
    <div className="detail-layout">
      <div className="detail-body">{detail.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p>{section.points && <ul className="feature-notes">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
        <a className="inline-link" href={detail.link.startsWith("/") ? localizedPath("cores", locale) : detail.link}>{detail.linkLabel}<ArrowUpRight size={18} /></a>
      </div>
      <aside><ProductImage image={detail.image} alt={detail.imageAlt} caption={`${detail.label} / Retropa`} /><p className="fine-print">{copy.noRoms}</p></aside>
    </div>
    {page === "crt-filters" && <DisplayStudy linked={false} />}
    <nav className="related-reading" aria-label={messages.shared.nav.home}>
      {productPages.filter(key => key !== page).map(key => <a key={key} href={localizedPath(key, locale)}>{productDetail(key, locale).title}<ArrowRight size={18} /></a>)}
      <a href={localizedPath("start", locale)}>{copy.start}<ArrowRight size={18} /></a>
    </nav>
  </article>
}
