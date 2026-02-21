import { ArrowUpRight, CheckCircle2, Github, Layers3, ShieldCheck } from "lucide-react"

import { LogoWall } from "@/components/logo-wall"
import { PrismaticDownloadButton } from "@/components/prismatic-download-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/i18n/context"

export function CoresPage() {
  const { messages, catalog } = useI18n()
  const coreNameById = new Map(catalog.emulatorCores.map((core) => [core.id, core.label]))

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-10 md:px-10 md:pt-14">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-card/82 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {messages.cores.heroBadge}
            </Badge>

            <div>
              <h1 className="brand-display text-balance text-[2.35rem] leading-[0.99] tracking-[0.02em] text-foreground md:text-[4.2rem]">
                {messages.cores.heroTitleLines[0]}
                <br />
                {messages.cores.heroTitleLines[1]}
                <br />
                {messages.cores.heroTitleLines[2]}
              </h1>
              <p className="editorial-lede mt-4 max-w-2xl">{messages.cores.heroDescription}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrismaticDownloadButton size="lg" label={messages.cores.downloadForIOSLabel} />
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border/70 bg-card/75 px-7 text-foreground hover:bg-card"
              >
                <a href="/">{messages.cores.backToHomepageLabel}</a>
              </Button>
            </div>
          </div>

          <Card className="border-border/70 bg-card/82 py-0 shadow-[0_24px_90px_-54px_rgba(82,106,236,0.68)] backdrop-blur-xl">
            <CardHeader className="border-b border-border/60 pb-6 pt-7">
              <CardTitle className="brand-display text-[2.05rem] leading-[1.05] tracking-[0.03em] text-foreground md:text-[2.55rem]">
                {messages.cores.standardsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 py-6 text-sm leading-relaxed text-muted-foreground">
              <article className="rounded-xl border border-border/60 bg-background/45 px-4 py-3">
                <p className="inline-flex items-center gap-2 font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {messages.cores.standardsRetroArchTitle}
                </p>
                <p className="mt-2">{messages.cores.standardsRetroArchDescription}</p>
              </article>

              <article className="rounded-xl border border-border/60 bg-background/45 px-4 py-3">
                <p className="inline-flex items-center gap-2 font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {messages.cores.standardsDeltaTitle}
                </p>
                <p className="mt-2">{messages.cores.standardsDeltaDescription}</p>
              </article>

              <article className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300 dark:text-emerald-200">
                  <ShieldCheck className="h-4 w-4" />
                  {messages.cores.standardsTraceabilityTitle}
                </p>
                <p className="mt-2 text-foreground/88">{messages.cores.standardsTraceabilityDescription}</p>
              </article>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="inline-flex items-center gap-2 text-xl font-semibold text-foreground">
                <Layers3 className="h-5 w-5 text-primary" />
                {messages.cores.coreLogoShowcaseTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={catalog.homepageCoreLogoWall} direction="left" durationSeconds={34} />
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="inline-flex items-center gap-2 text-xl font-semibold text-foreground">
                <Layers3 className="h-5 w-5 text-primary" />
                {messages.cores.systemLogoShowcaseTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={catalog.homepageSystemLogoWall} direction="right" durationSeconds={44} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">
        <div className="mb-7">
          <p className="editorial-kicker">{messages.cores.coreCardsKicker}</p>
          <h2 className="brand-display mt-2 text-[2.15rem] leading-[0.99] tracking-[0.03em] text-foreground md:text-[2.95rem]">
            {messages.cores.coreCardsTitle}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalog.emulatorCores.map((core) => (
            <Card key={core.id} className="border-border/70 bg-card/82 py-0">
              <CardHeader className="space-y-3 pb-4 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={core.logoPath}
                    alt={core.alt}
                    className="h-14 w-24 rounded-lg border border-border/60 object-contain bg-background/45 p-1"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <CardTitle className="text-2xl tracking-[0.02em] text-foreground">{core.label}</CardTitle>
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {core.supportedSystems.join(" · ")}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{core.summary}</p>
              </CardHeader>
              <CardContent className="space-y-4 pb-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {messages.cores.romExtensionsLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {core.romExtensions.map((extension) => (
                      <span
                        key={`${core.id}-${extension}`}
                        className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-xs text-foreground/86"
                      >
                        {extension}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={core.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  <Github className="h-4 w-4" />
                  <span>{core.githubUrl}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-6 md:px-10 md:pb-28">
        <div className="mb-7">
          <p className="editorial-kicker">{messages.cores.systemMatrixKicker}</p>
          <h2 className="brand-display mt-2 text-[2.15rem] leading-[0.99] tracking-[0.03em] text-foreground md:text-[2.95rem]">
            {messages.cores.systemMatrixTitle}
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {catalog.systemSupportMatrix.map((system) => (
            <Card key={system.id} className="relative overflow-hidden border-border/70 bg-card/80 py-0">
              {system.hardwarePhotoPath ? (
                <img
                  src={system.hardwarePhotoPath}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[-180px] right-[-180px] z-0 w-[512px] max-w-none select-none opacity-45"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-background/80 via-background/55 to-transparent" />

              <img
                src={system.logoPath}
                alt={system.alt}
                className="pointer-events-none absolute right-4 top-4 z-[11] h-16 w-28 rounded-xl border border-border/60 bg-background/45 object-contain p-2 md:h-20 md:w-36"
                loading="lazy"
                decoding="async"
              />

              <CardHeader className="relative z-10 pb-3 pt-6 pr-32 md:pr-40">
                <CardTitle className="text-[1.6rem] tracking-[0.02em] text-foreground">
                  {system.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4 pb-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {messages.cores.availableCoresLabel}
                  </p>
                  <p className="text-sm text-foreground/88">
                    {system.coreIds.map((coreId) => coreNameById.get(coreId) ?? coreId).join(" · ")}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {messages.cores.romCoverageLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {system.romExtensions.map((extension) => (
                      <span
                        key={`${system.id}-${extension}`}
                        className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-xs text-foreground/86"
                      >
                        {extension}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
