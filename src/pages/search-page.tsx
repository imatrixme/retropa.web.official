import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { discoveryCopy } from "@/content/discovery"
import { DownloadLink } from "@/components/download-link"
import { localizedPath } from "@/lib/routes"
import type { SitePage } from "@/lib/routes"
import type { SearchPageContent } from "@/content/search-pages/types"
import { relatedSearchPages } from "@/content/search-pages"

/**
 * Renders any single search landing page: a system page, a core page, a
 * comparison page or a capability page. Structure is shared; the page supplies
 * its own sections and questions so each page answers one search intent
 * completely, in static HTML, without requiring client scripts.
 */
export function SearchPage({ content }: { content: SearchPageContent }) {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  const discovery = discoveryCopy(locale)
  const related = relatedSearchPages(content, locale)
  const faqs = content.faqs ?? []

  return <article className="detail-page wrap">
    <nav className="breadcrumbs" aria-label={locale.startsWith("zh") ? "当前位置" : "Breadcrumb"}>
      <a href={localizedPath("home", locale)}>{discovery.home}</a><ChevronRight size={13} />
      <a href={localizedPath("cores", locale)}>{discovery.explore}</a><ChevronRight size={13} />
      <span aria-current="page">{content.label}</span>
    </nav>

    <header className="page-heading detail-heading">
      <p className="eyebrow"><span className="section-marker" />RETROPA / {content.label}</p>
      <h1>{content.title}</h1>
      <p>{content.summary}</p>
      <DownloadLink placement="guide" />
      <p className="fine-print">{copy.free}</p>
    </header>

    <div className="detail-layout">
      <aside className="article-index">
        <nav aria-label={discovery.onThisPage}>
          <p className="mono">{discovery.onThisPage}</p>
          {content.sections.map((section, index) => <a href={`#chapter-${index + 1}`} key={section.title}><span className="mono">0{index + 1}</span>{section.title}</a>)}
          {faqs.length > 0 && <a href="#page-questions"><span className="mono">?</span>{locale.startsWith("zh") ? "常见问题" : "Questions"}</a>}
        </nav>
        <p className="fine-print">{copy.noRoms}</p>
      </aside>

      <div className="detail-body">
        {content.sections.map((section, index) => <section key={section.title} id={`chapter-${index + 1}`}>
          <span className="chapter-number mono">0{index + 1}</span>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.points && <ul className="feature-notes">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
        </section>)}

        {faqs.length > 0 && <section className="faq-section" id="page-questions">
          <h2>{locale.startsWith("zh") ? "常见问题" : "Questions"}</h2>
          {faqs.map(item => <details id={`faq-${item.id}`} key={item.id}>
            <summary>{item.question}<ChevronDown size={19} /></summary>
            <p>{item.answer}</p>
          </details>)}
        </section>}

        {content.attribution && <p className="fine-print page-attribution">{content.attribution}</p>}
      </div>
    </div>

    <section className="article-download"><div><h2>Retropa<span>.</span></h2><p>{copy.free}</p></div><DownloadLink placement="guide" /></section>

    <nav className="related-reading" aria-label={discovery.related}>
      <p className="eyebrow">{discovery.related}</p>
      {related.map(page => <a key={page.slug} href={localizedPath(page.slug as SitePage, locale)}><span>{page.label}</span><ArrowRight size={18} /></a>)}
      <a href={localizedPath("cores", locale)}><span>{discovery.more}</span><ArrowUpRight size={18} /></a>
    </nav>
  </article>
}
