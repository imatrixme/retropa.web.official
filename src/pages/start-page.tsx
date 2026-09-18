import { ArrowRight, ChevronDown } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { DownloadLink } from "@/components/download-link"
import { acquisitionCopy } from "@/content/acquisition"
import { localizedPath } from "@/lib/routes"
import { detailLinkLabel, productPages } from "@/content/product-details"
import { startPageContent } from "@/content/start-page"

export function StartPage() {
  const { locale } = useI18n()
  const guide = startPageContent(locale)
  const copy = acquisitionCopy(locale)
  return <article className="guide-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA / {copy.start}</p><h1>{guide.title}</h1><p>{guide.intro}</p><DownloadLink placement="guide" /></header>
    <nav className="guide-quick-links" aria-label={guide.systems}>{(["gba-emulator", "ds-emulator", "arcade"] as const).map(page => <a key={page} href={localizedPath(page, locale)}>{page === "gba-emulator" ? "GBA" : page === "ds-emulator" ? "DS" : "Arcade"}<ArrowRight size={15} /></a>)}<a href="#before-you-start">{guide.faqTitle}<ChevronDown size={15} /></a></nav>
    <div className="guide-steps">{guide.steps.map(([title, body], index) => <section key={title}><span className="step-number">0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div>
    <a className="inline-link" href={localizedPath("cores", locale)}>{guide.systems}<ArrowRight size={18} /></a>
    <section className="faq-section" id="before-you-start"><h2>{guide.faqTitle}</h2>{guide.faqs.map(item => <details id={`faq-${item.id}`} key={item.id} open={["games", "integer-scaling"].includes(item.id)}><summary>{item.question}<ChevronDown size={19} /></summary><p>{item.answer}</p>{item.link && <a className="inline-link faq-related" href={localizedPath(item.link, locale)}>{item.linkLabel}<ArrowRight size={16} /></a>}</details>)}</section>
    <p>{guide.support} <a className="inline-link" href="mailto:support@retropa.com">support@retropa.com</a></p>
    <nav className="related-reading" aria-label={copy.start}>{productPages.map(page => <a key={page} href={localizedPath(page, locale)}>{detailLinkLabel(page, locale)}<ArrowRight size={18} /></a>)}</nav>
  </article>
}
