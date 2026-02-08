import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-12 md:px-10">
      <Card className="border-white/15 bg-white/5 py-0 backdrop-blur-xl">
        <CardHeader className="gap-4 border-b border-white/10 py-8">
          <Badge
            variant="outline"
            className="w-fit border-white/30 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/75"
          >
            Legal
          </Badge>
          <CardTitle className="brand-display text-4xl tracking-[0.03em] text-white md:text-5xl">
            {title}
          </CardTitle>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">{subtitle}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Effective Date · {effectiveDate}
          </p>
        </CardHeader>

        <CardContent className="grid gap-10 py-10 md:grid-cols-[250px_1fr] md:items-start">
          <aside className="md:sticky md:top-28">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              On this page
            </h2>
            <ul className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-white/75 transition hover:text-white"
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
                <h3 className="brand-display text-2xl tracking-[0.03em] text-white">
                  {section.title}
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-white/75">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {sectionIndex < sections.length - 1 ? (
                  <Separator className="mt-6 bg-white/10" />
                ) : null}
              </section>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
