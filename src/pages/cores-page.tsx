import { ArrowUpRight, CheckCircle2, Download, Github, Layers3, ShieldCheck } from "lucide-react"

import { LogoWall } from "@/components/logo-wall"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  emulatorCores,
  homepageCoreLogoWall,
  homepageSystemLogoWall,
  systemSupportMatrix,
} from "@/content/emulator-catalog"
import { siteConfig } from "@/lib/site-config"

const coreNameById = new Map(emulatorCores.map((core) => [core.id, core.label]))

export function CoresPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-10 md:px-10 md:pt-14">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-card/82 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Emulator Core Catalog
            </Badge>

            <div>
              <h1 className="brand-display text-balance text-[3.3rem] leading-[0.96] tracking-[0.02em] text-foreground md:text-[5rem]">
                Core lineage,
                <br />
                system matrix,
                <br />
                and source truth.
              </h1>
              <p className="editorial-lede mt-4 max-w-2xl">
                This page shows exactly which emulator cores power Retropa, which consoles each core
                serves, and where each project lives on GitHub. No blurred claims, no hidden footnotes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-primary px-7 text-primary-foreground shadow-[0_16px_42px_-20px_rgba(88,113,255,0.9)] hover:bg-primary/90"
              >
                <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download for iOS
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border/70 bg-card/75 px-7 text-foreground hover:bg-card"
              >
                <a href="/">Back to homepage</a>
              </Button>
            </div>
          </div>

          <Card className="border-border/70 bg-card/82 py-0 shadow-[0_24px_90px_-54px_rgba(82,106,236,0.68)] backdrop-blur-xl">
            <CardHeader className="border-b border-border/60 pb-6 pt-7">
              <CardTitle className="brand-display text-4xl leading-[1.04] tracking-[0.03em] text-foreground">
                Compatibility standards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 py-6 text-sm leading-relaxed text-muted-foreground">
              <article className="rounded-xl border border-border/60 bg-background/45 px-4 py-3">
                <p className="inline-flex items-center gap-2 font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  RetroArch filter chain support
                </p>
                <p className="mt-2">
                  Full .slang / .slangp pipeline support is expected in runtime behavior and reflected
                  in product capability communication.
                </p>
              </article>

              <article className="rounded-xl border border-border/60 bg-background/45 px-4 py-3">
                <p className="inline-flex items-center gap-2 font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Delta skin compatibility
                </p>
                <p className="mt-2">
                  Delta skin package compatibility is maintained as a first-class contract, including
                  layout-safe fallback behavior.
                </p>
              </article>

              <article className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300 dark:text-emerald-200">
                  <ShieldCheck className="h-4 w-4" />
                  Source traceability
                </p>
                <p className="mt-2 text-foreground/88">
                  Core logos and system logos are sourced and versioned with explicit origin records.
                </p>
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
                Core logo showcase
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageCoreLogoWall} direction="left" durationSeconds={34} />
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="inline-flex items-center gap-2 text-xl font-semibold text-foreground">
                <Layers3 className="h-5 w-5 text-primary" />
                System logo showcase
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageSystemLogoWall} direction="right" durationSeconds={44} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">
        <div className="mb-7">
          <p className="editorial-kicker">Core cards</p>
          <h2 className="brand-display mt-2 text-[2.9rem] leading-[0.96] tracking-[0.03em] text-foreground">
            Every core, mapped and linked
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {emulatorCores.map((core) => (
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
                    ROM extensions
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
          <p className="editorial-kicker">System matrix</p>
          <h2 className="brand-display mt-2 text-[2.9rem] leading-[0.96] tracking-[0.03em] text-foreground">
            Console families and ROM coverage
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {systemSupportMatrix.map((system) => (
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
                    Available cores
                  </p>
                  <p className="text-sm text-foreground/88">
                    {system.coreIds.map((coreId) => coreNameById.get(coreId) ?? coreId).join(" · ")}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    ROM coverage
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
