import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { productDetail, productPages, type ProductPage as ProductPageKey } from "@/content/product-details"
import { acquisitionCopy } from "@/content/acquisition"
import { discoveryCopy } from "@/content/discovery"
import { DownloadLink } from "@/components/download-link"
import { localizedPath } from "@/lib/routes"
import { DisplayStudy } from "@/components/display-study"

export function ProductPage({ page }: { page: ProductPageKey }) {
  const { locale } = useI18n()
  const detail = productDetail(page, locale)
  const copy = acquisitionCopy(locale)
  const discovery = discoveryCopy(locale)
  return <article className="detail-page wrap">
    <nav className="breadcrumbs" aria-label={locale.startsWith("zh") ? "当前位置" : "Breadcrumb"}>
      <a href={localizedPath("home", locale)}>{discovery.home}</a><ChevronRight size={13} /><span aria-current="page">{detail.label}</span>
    </nav>
    <header className="page-heading detail-heading"><p className="eyebrow"><span className="section-marker" />RETROPA / {detail.label}</p><h1>{detail.title}</h1><p>{detail.summary}</p><DownloadLink placement="guide" /><p className="fine-print">{copy.free}</p></header>
    <div className="detail-layout">
      <aside className="article-index">
        <nav aria-label={discovery.onThisPage}><p className="mono">{discovery.onThisPage}</p>{detail.sections.map((section, index) => <a href={`#chapter-${index + 1}`} key={section.title}><span className="mono">0{index + 1}</span>{section.title}</a>)}{page === "crt-filters" && <a href="#display-study">{locale.startsWith("zh") ? "画面对照" : "Display comparison"}<ArrowRight size={15} /></a>}</nav>
        <p className="fine-print">{copy.noRoms}</p>
      </aside>
      <div className="detail-body">
        <figure className={`article-media article-media-${detail.image}`}>
          <a href={`/product/${detail.image}.webp`} target="_blank" rel="noopener" title={discovery.original}><img src={`/product/${detail.image}-detail.webp`} width="720" height={detail.image === "library" ? "1060" : "1140"} alt={detail.imageAlt} /><span className="artwork-open"><ArrowUpRight size={20} /></span></a>
          <figcaption>{detail.imageAlt}</figcaption>
        </figure>
        {detail.sections.map((section, index) => <section key={section.title} id={`chapter-${index + 1}`}><span className="chapter-number mono">0{index + 1}</span><h2>{section.title}</h2><p>{section.body}</p>{section.points && <ul className="feature-notes">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
        <a className="inline-link" href={detail.link.startsWith("/") ? localizedPath("cores", locale) : detail.link}>{detail.linkLabel}<ArrowUpRight size={18} /></a>
      </div>
    </div>
    {page === "crt-filters" && <DisplayStudy linked={false} />}
    <section className="article-download"><div><h2>Retropa<span>.</span></h2><p>{copy.free}</p></div><DownloadLink placement="guide" /></section>
    <nav className="related-reading" aria-label={discovery.related}>
      <p className="eyebrow">{discovery.related}</p>
      {productPages.filter(key => key !== page).map(key => <a key={key} href={localizedPath(key, locale)}><span>{productDetail(key, locale).title}</span><ArrowRight size={18} /></a>)}
      <a href={localizedPath("start", locale)}><span>{copy.start}</span><ArrowRight size={18} /></a>
    </nav>
  </article>
}
