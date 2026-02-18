import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Gamepad2,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react"

import { LogoWall } from "@/components/logo-wall"
import { PrismaticDownloadButton } from "@/components/prismatic-download-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  coreMatrixRows,
  homepageCoreLogoWall,
  homepageSystemLogoWall,
  romSupportGroups,
  systemSupportMatrix,
} from "@/content/emulator-catalog"

const compatibilityPillars = [
  {
    title: "RetroArch Filter Stack: Full Support",
    description:
      "Run full RetroArch shader chains with .slang / .slangp presets, multi-pass ordering, parameter controls, and stable runtime switching.",
    icon: WandSparkles,
  },
  {
    title: "Delta Skin Packages: Full Compatibility",
    description:
      "Import Delta .deltaskin packages directly, preserve layout intent, and keep controls responsive across portrait and landscape transitions.",
    icon: Layers,
  },
] as const

const spotlightFeatures = [
  {
    title: "Per-system memory that respects your habits",
    description:
      "Retropa remembers your preferred core, skin mode, and control layout for each console system so you can return exactly where comfort starts.",
    icon: Sparkles,
  },
  {
    title: "Controller mapping with studio-level depth",
    description:
      "Multiple physical controllers can run in parallel with independent slot mapping, profile save, and live remap behavior during gameplay.",
    icon: Gamepad2,
  },
  {
    title: "Haptics tuned by intent, not by chance",
    description:
      "Waveform packs support per-action press/release patterns and fallback behavior so tactile feedback feels deliberate on every device.",
    icon: Zap,
  },
  {
    title: "Core switching without breaking flow",
    description:
      "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, and Ares are wired into one runtime model with coherent behavior.",
    icon: Cpu,
  },
  {
    title: "Localization packs that ship with craft",
    description:
      "Language packs hot-load instantly with reliable namespace fallback, letting community or regional updates feel native instead of patched.",
    icon: Globe2,
  },
  {
    title: "Pack ecosystem with strict validation",
    description:
      "Visual, shader, localization, audio, and document packs follow one import pipeline with integrity checks before runtime activation.",
    icon: ArrowUpRight,
  },
] as const

const highlights = [
  { value: "RetroArch .slangp", label: "full filter pipeline" },
  { value: "Delta .deltaskin", label: "full compatibility" },
  { value: "8 runtime cores", label: "system-aware switching" },
] as const

const heroSystemPhotoWall = systemSupportMatrix
  .filter((system) => system.id !== "containers" && Boolean(system.hardwarePhotoPath))
  .map((system) => ({
    id: system.id,
    photoPath: system.hardwarePhotoPath as string,
  }))

export function HomePage() {
  return (
    <div className="home-page">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30">
            <div
              className="logo-marquee-track logo-marquee-left flex w-max items-center"
              style={{ animationDuration: "120s" }}
            >
              {[0, 1].map((groupIndex) => (
                <div
                  key={`hero-system-group-${groupIndex}`}
                  aria-hidden={groupIndex === 1}
                  className="flex shrink-0 items-center gap-8 pr-8"
                >
                  {heroSystemPhotoWall.map((item) => (
                    <img
                      key={`hero-system-${groupIndex}-${item.id}`}
                      src={item.photoPath}
                      alt=""
                      aria-hidden="true"
                      width={512}
                      height={512}
                      className="h-[512px] w-[512px] shrink-0 max-w-none"
                      loading="eager"
                      decoding="async"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-hero-grid relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:pt-14">
          <div className="space-y-7">
            <Badge
              variant="outline"
              className="home-hero-badge rounded-full border-border/70 bg-card/82 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Crafted for people who still care how games feel
            </Badge>

            <div className="space-y-5">
              <h1 className="home-hero-title brand-display text-balance text-[3.15rem] leading-[0.98] tracking-[0.02em] text-foreground md:text-[5.2rem]">
                A better home
                <br />
                for the games
                <br />
                that raised us.
              </h1>
              <p className="editorial-lede max-w-2xl">
                Retropa is not nostalgia as decoration. It is careful engineering for players who know
                timing, texture, and control memory by heart. Every frame, filter, and touch target is
                designed to preserve what made these games matter in the first place.
              </p>
            </div>

            <div className="home-cta-row flex flex-wrap gap-3">
              <PrismaticDownloadButton size="lg" label="Download for iOS" />

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border/70 bg-card/76 px-8 text-[15px] text-foreground hover:bg-card"
              >
                <a href="#compatibility">Read compatibility promise</a>
              </Button>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 shadow-[0_18px_40px_-28px_rgba(72,97,214,0.45)]"
                >
                  <p className="home-metric-value brand-display text-[1.75rem] leading-none tracking-[0.02em] text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.13em] text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="h-fit overflow-hidden border-border/70 bg-card/84 py-0 shadow-[0_26px_90px_-52px_rgba(74,105,255,0.76)] backdrop-blur-xl">
            <CardHeader className="border-b border-border/60 pb-6 pt-7">
              <p className="editorial-kicker">Compatibility Promise</p>
              <CardTitle className="home-hero-card-title brand-display mt-2 text-[2.35rem] leading-[1.04] tracking-[0.02em] text-foreground">
                Two commitments
                <br />
                we treat as non-negotiable.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 py-6">
              {compatibilityPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-border/65 bg-background/45 p-4 shadow-[0_12px_30px_-28px_rgba(88,113,255,0.8)]"
                >
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    <pillar.icon className="h-4 w-4 text-primary" />
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </article>
              ))}

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300 dark:text-emerald-200">
                  <ShieldCheck className="h-4 w-4" />
                  Built from real runtime behavior
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/88">
                  What we claim on this page is tied to the production code path, not marketing-only
                  mock behavior.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto w-[calc(100%-3rem)] max-w-7xl bg-border/60 md:w-[calc(100%-5rem)]" />

      <section
        id="compatibility"
        className="home-section-tight mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-kicker">Compatibility before cosmetics</p>
            <h2 className="home-section-title brand-display mt-2 text-5xl leading-[0.95] tracking-[0.03em] text-foreground">
              Built for confidence,
              <br />
              not checkbox marketing.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {compatibilityPillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="h-full border-border/70 bg-card/82 py-0 shadow-[0_20px_48px_-34px_rgba(71,97,214,0.6)]"
            >
              <CardHeader className="pb-4 pt-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/16 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-2xl font-semibold leading-tight text-foreground">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
        <div className="mb-9">
          <p className="editorial-kicker">Core and system logos</p>
          <h2 className="brand-display mt-2 text-4xl tracking-[0.03em] text-foreground md:text-5xl">
            Official assets in motion
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Core and console logos are sourced from official project repositories and Wikimedia,
            then normalized into performance-safe PNG assets for smooth page rendering.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-xl font-semibold text-foreground">Emulator core showcase</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageCoreLogoWall} direction="left" durationSeconds={34} />
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-xl font-semibold text-foreground">System showcase</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageSystemLogoWall} direction="right" durationSeconds={44} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="home-section-tight mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-kicker">Real capability highlights</p>
            <h2 className="home-section-title brand-display mt-3 text-4xl leading-tight tracking-[0.03em] text-foreground md:text-5xl">
              Premium feel starts with
              <br />
              reliable internals.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {spotlightFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="h-full border-border/70 bg-card/82 py-0 transition hover:-translate-y-1 hover:shadow-[0_20px_42px_-30px_rgba(71,97,214,0.62)]"
            >
              <CardHeader className="pb-4 pt-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/18 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
        <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <Card className="relative overflow-hidden border-primary/25 bg-gradient-to-br from-card/90 via-card/82 to-primary/12 py-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_94%_0%,rgba(122,92,255,0.25),transparent_42%)]" />
            <CardHeader className="relative pb-4 pt-6">
              <CardTitle className="brand-display text-[1.75rem] leading-[1.06] tracking-[0.02em] text-foreground md:text-[2rem]">
                System-to-core matrix
              </CardTitle>
              <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">
                Dense routing map · per-system core preference memory
              </p>
            </CardHeader>
            <CardContent className="relative pb-6">
              <div className="grid gap-2 sm:grid-cols-2">
                {coreMatrixRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-border/60 bg-background/50 px-3 py-2.5 transition hover:border-primary/35 hover:bg-background/70"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        {row.label}
                      </p>
                      <span className="rounded-full border border-primary/35 bg-primary/12 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary">
                        Auto
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground/88">{row.cores}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-accent/35 bg-gradient-to-br from-card/90 via-card/82 to-accent/14 py-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(39,194,225,0.22),transparent_44%)]" />
            <CardHeader className="relative pb-4 pt-6">
              <CardTitle className="brand-display text-[1.75rem] leading-[1.06] tracking-[0.02em] text-foreground md:text-[2rem]">
                ROM format clarity
              </CardTitle>
              <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">
                Extension matrix · deterministic import behavior
              </p>
            </CardHeader>
            <CardContent className="relative pb-6">
              <div className="grid gap-2 sm:grid-cols-2">
                {romSupportGroups.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-xl border border-border/60 bg-background/50 px-3 py-2.5 transition hover:border-accent/45 hover:bg-background/70"
                  >
                    <p className="truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/86">
                      {group.label}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {group.extensions.map((extension) => (
                        <span
                          key={`${group.id}-${extension}`}
                          className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 text-[10px] font-medium text-foreground/82"
                        >
                          {extension}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="home-bottom-cta mx-auto w-full max-w-7xl px-6 pb-24 pt-14 md:px-10 md:pb-28">
        <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-primary/20 via-accent/10 to-emerald-500/8 py-0 backdrop-blur-xl">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="editorial-kicker">Download Retropa</p>
              <h3 className="home-section-title brand-display mt-2 text-5xl leading-[0.95] tracking-[0.03em] text-foreground">
                Keep the classics,
                <br />
                keep the feeling.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                If you care about authenticity as much as modern polish, Retropa is built for your
                daily play—not just for screenshots.
              </p>
            </div>

            <div className="home-cta-row flex flex-wrap gap-3">
              <PrismaticDownloadButton size="lg" label="Download now" />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border/80 bg-card/75 px-7 text-foreground hover:bg-card"
              >
                <a href="/cores/">
                  <CheckCircle2 className="h-4 w-4" />
                  Inspect core catalog
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
