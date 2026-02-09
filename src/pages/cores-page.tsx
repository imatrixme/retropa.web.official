import { ArrowUpRight, Cpu, Download, Github, Layers3 } from "lucide-react"

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
      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-14 md:px-10 md:pt-18">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-card/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Core Catalog
            </Badge>

            <div>
              <h1 className="brand-display text-balance text-5xl leading-[1.03] tracking-[0.02em] text-foreground md:text-6xl">
                Emulator cores,
                <br />
                system matrix,
                <br />
                and ROM coverage.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This page maps each integrated emulator core to supported game systems, accepted ROM
                extensions, and the upstream GitHub repository used by Retropa integration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
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
              <CardTitle className="brand-display text-3xl tracking-[0.03em] text-foreground">
                Catalog scope
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 py-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Core cards below include repository origin, supported systems, and ROM extension
                signals that mirror homepage claims.
              </p>
              <p>
                Logo assets are local static files and keep route behavior compatible with static
                hosting and multi-page deployment.
              </p>
              <div className="rounded-xl border border-border/60 bg-background/45 px-4 py-3 text-foreground/86">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Current catalog
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {emulatorCores.length} cores · {systemSupportMatrix.length} support groups
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="inline-flex items-center gap-2 text-xl font-semibold text-foreground">
                <Cpu className="h-5 w-5 text-primary" />
                Emulator core logo wall
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
                System and ROM logo wall
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageSystemLogoWall} direction="right" durationSeconds={44} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Emulator cores
          </p>
          <h2 className="brand-display mt-2 text-4xl tracking-[0.03em] text-foreground">
            Core cards with source repositories
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
                    className="h-14 w-24 rounded-lg border border-border/60 object-cover"
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
                    {core.romExtensions.map((ext) => (
                      <span
                        key={`${core.id}-${ext}`}
                        className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-xs text-foreground/86"
                      >
                        {ext}
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
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            System matrix
          </p>
          <h2 className="brand-display mt-2 text-4xl tracking-[0.03em] text-foreground">
            Game systems to cores and ROM types
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {systemSupportMatrix.map((system) => (
            <Card key={system.id} className="border-border/70 bg-card/80 py-0">
              <CardHeader className="space-y-3 pb-4 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={system.logoPath}
                    alt={system.alt}
                    className="h-14 w-24 rounded-lg border border-border/60 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <CardTitle className="text-2xl tracking-[0.02em] text-foreground">{system.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pb-6">
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
                    {system.romExtensions.map((ext) => (
                      <span
                        key={`${system.id}-${ext}`}
                        className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-xs text-foreground/86"
                      >
                        {ext}
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
