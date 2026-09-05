import { useI18n } from "@/i18n/context"
import type { LegalSection } from "@/lib/site-config"

export function LegalDocument({ title, subtitle, effectiveDate, sections }: { title: string; subtitle: string; effectiveDate: string; sections: LegalSection[] }) {
  const { messages } = useI18n()
  return <article className="legal-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA</p><h1>{title}</h1><p>{subtitle}</p><small>{messages.shared.legalDocument.effectiveDateLabel}: {effectiveDate}</small></header>
    <div className="legal-layout">
      <aside><h2>{messages.shared.legalDocument.onThisPageLabel}</h2><nav>{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav></aside>
      <div>{sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
    </div>
  </article>
}
