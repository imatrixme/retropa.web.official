import { ArrowRight, ChevronRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { discoveryCopy } from "@/content/discovery"
import { DownloadLink } from "@/components/download-link"
import { guidePageSlugs, searchPageContent } from "@/content/search-pages"
import { localizedPath } from "@/lib/routes"
import { searchPagePath } from "@/content/search-pages"
import { guidesIndexContent } from "@/content/guides-index"

/**
 * Index page for the answer pages. It exists so the guides form a crawlable
 * hierarchy rather than a flat set of orphan URLs, and so a visitor who lands on
 * any one answer can find the others.
 */
export function GuidesPage() {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  const discovery = discoveryCopy(locale)
  const text = guidesIndexContent(locale)
  const guides = guidePageSlugs
    .map((slug) => searchPageContent(slug, locale))
    .filter((page): page is NonNullable<typeof page> => Boolean(page))

  return <article className="detail-page wrap">
    <nav className="breadcrumbs" aria-label={text.breadcrumb}>
      <a href={localizedPath("home", locale)}>{discovery.home}</a><ChevronRight size={13} />
      <span aria-current="page">{text.breadcrumb}</span>
    </nav>

    <header className="page-heading">
      <p className="eyebrow"><span className="section-marker" />RETROPA / {text.eyebrow}</p>
      <h1>{text.title}</h1>
      <p>{text.intro}</p>
      <DownloadLink placement="guide" />
      <p className="fine-print">{copy.free}</p>
    </header>

    <div className="detail-body">
      <section>
        <h2>{text.allGuides}</h2>
        <ul className="feature-notes">
          {guides.map(guide => <li key={guide.slug}>
            <a className="inline-link" href={`${locale === "en" ? "" : `/${locale}`}${searchPagePath(guide.slug)}`}>{guide.title}<ArrowRight size={16} /></a>
          </li>)}
        </ul>
        <p className="fine-print">{copy.noRoms}</p>
      </section>
    </div>

    <section className="article-download"><div><h2>Retropa<span>.</span></h2><p>{copy.free}</p></div><DownloadLink placement="guide" /></section>

    <nav className="related-reading" aria-label={discovery.related}>
      <p className="eyebrow">{discovery.related}</p>
      <a href={localizedPath("cores", locale)}><span>{discovery.more}</span><ArrowRight size={18} /></a>
      <a href={localizedPath("plus", locale)}><span>{text.freeLabel}</span><ArrowRight size={18} /></a>
    </nav>
  </article>
}
