import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/i18n/context"
import type { LegalSection } from "@/lib/site-config"

type LegalDocumentProps = {
  title: string
  subtitle: string
  effectiveDate: string
  sections: LegalSection[]
}

export function LegalDocument({
  title,
  subtitle,
  effectiveDate,
  sections,
}: LegalDocumentProps) {
  const { messages } = useI18n()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-12 md:px-10">
      <Card className="border-border/70 bg-card/72 py-0 shadow-[0_24px_80px_-52px_rgba(72,103,255,0.45)] backdrop-blur-xl">
        <CardHeader className="gap-4 border-b border-border/60 py-8">
          <Badge
            variant="outline"
            className="w-fit border-border/70 bg-background/35 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            {messages.shared.legalDocument.badge}
          </Badge>
          <CardTitle className="brand-display text-4xl tracking-[0.03em] text-foreground md:text-5xl">
            {title}
          </CardTitle>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {messages.shared.legalDocument.effectiveDateLabel} · {effectiveDate}
          </p>
        </CardHeader>

        <CardContent className="grid gap-10 py-10 md:grid-cols-[250px_1fr] md:items-start">
          <aside className="md:sticky md:top-28">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {messages.shared.legalDocument.onThisPageLabel}
            </h2>
            <ul className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                <h3 className="brand-display text-2xl tracking-[0.03em] text-foreground">
                  {section.title}
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {sectionIndex < sections.length - 1 ? (
                  <Separator className="mt-6 bg-border/60" />
                ) : null}
              </section>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
