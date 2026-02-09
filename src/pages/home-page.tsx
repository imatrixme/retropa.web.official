import {
  ArrowUpRight,
  Cpu,
  Download,
  Gamepad2,
  Globe2,
  Layers,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { LogoWall } from "@/components/logo-wall"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  coreMatrixRows,
  homepageCoreLogoWall,
  homepageSystemLogoWall,
  romSupportGroups,
} from "@/content/emulator-catalog"
import { siteConfig } from "@/lib/site-config"

const spotlightFeatures = [
  {
    title: "Skin System with Delta compatibility",
    description:
      "Runtime skin pipeline spans Flat2D, SVG2D, Delta2D, and 3D console shells. Delta .deltaskin packages are parsed and mapped by game type with safe fallback behavior.",
    icon: Layers,
  },
  {
    title: "Per-system skin and control memory",
    description:
      "Retropa remembers skin mode and control layout per EmulatorSystemID, then auto-restores preferences when you switch ROM systems.",
    icon: Sparkles,
  },
  {
    title: "Controller mapping at pro depth",
    description:
      "Multiple physical controllers can connect simultaneously, each mapped to independent controller slots and per-system profiles with live rebinding.",
    icon: Gamepad2,
  },
  {
    title: "Taptic waveform studio",
    description:
      "Waveform packs support press/release patterns, per-action overrides, and curve presets through Core Haptics when available, with graceful fallback on unsupported devices.",
    icon: Zap,
  },
  {
    title: "Librashader filter pipeline",
    description:
      "Filters run through .slangp presets with split preview, runtime switching, and pass-through fallback. Active RetroPack resources are preferred when present.",
    icon: WandSparkles,
  },
  {
    title: "Multi-core runtime switch",
    description:
      "Core selection is configurable by system: mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, and Ares are wired through the core selection store.",
    icon: Cpu,
  },
  {
    title: "Localization pack mechanism",
    description:
      "Localization .retropack bundles hot-load language strings with namespace lookup and fallback chain (namespace -> common -> default English), no app restart required.",
    icon: Globe2,
  },
  {
    title: "Retropack ecosystem",
    description:
      "A unified import pipeline handles visual packs, localization packs, shader packs, audio assets, docs, and patches with strict validation and safety guards.",
    icon: ArrowUpRight,
  },
] as const

const highlights = [
  { value: "4 skin layers", label: "Flat2D / SVG2D / Delta2D / 3D" },
  { value: "8 cores", label: "Selectable by system" },
  { value: "Waveform haptics", label: "Per-action tunable feedback" },
] as const

export function HomePage() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:pt-20">
        <div className="space-y-7">
          <Badge
            variant="outline"
            className="rounded-full border-border/70 bg-card/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Premium iOS Emulator Website
          </Badge>

          <div className="space-y-5">
            <h1 className="brand-display text-balance text-5xl leading-[1.02] tracking-[0.02em] text-foreground md:text-7xl">
              Retropa turns
              <br />
              retro gameplay into
              <br />
              a crafted iOS product.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Built on a protocol-driven emulator architecture, Retropa combines core switching,
              premium skins, deep controller tools, and legal-ready distribution pages in one
              cohesive experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 text-[15px] text-primary-foreground hover:bg-primary/90"
            >
              <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download for iOS
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/70 bg-card/75 px-8 text-[15px] text-foreground hover:bg-card"
            >
              <a href="/cores/">Explore emulator cores</a>
            </Button>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 shadow-[0_18px_40px_-28px_rgba(72,97,214,0.45)]"
              >
                <p className="brand-display text-2xl tracking-[0.03em] text-foreground">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-primary/30 blur-3xl dark:bg-primary/22" />
          <div className="absolute -bottom-12 left-2 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <Card className="relative overflow-hidden border-border/70 bg-card/85 py-0 shadow-[0_24px_90px_-46px_rgba(88,113,255,0.75)] backdrop-blur-2xl">
            <CardHeader className="border-b border-border/60 pb-7 pt-8">
              <div className="flex items-start justify-between gap-4">
                <BrandLogo size="lg" showWordmark={false} />
                <Badge className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                  Static + SEO Ready
                </Badge>
              </div>
              <CardTitle className="brand-display mt-4 text-4xl leading-tight tracking-[0.02em] text-foreground">
                Feature depth users
                <br />
                can feel on day one.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 py-7">
              <div className="rounded-2xl border border-border/70 bg-background/45 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Designed from the iOS codebase
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Delta skin parser",
                    "Librashader presets",
                    "Waveform haptics",
                    "Controller slot mapping",
                    "Localization packs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs text-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Delta skin compatibility with orientation-aware layout",
                  "Button style customization: dpad / joystick / joystickCross",
                  "Filter packs via .slangp in RetroPack visual/shaders",
                ].map((item) => (
                  <div key={item} className="rounded-xl bg-background/45 px-4 py-3 text-sm text-foreground/85">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto w-[calc(100%-3rem)] max-w-7xl bg-border/60 md:w-[calc(100%-5rem)]" />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Product highlights from real app capabilities
            </p>
            <h2 className="brand-display mt-3 text-4xl tracking-[0.03em] text-foreground md:text-5xl">
              Built for enthusiasts,
              <br />
              engineered for reliability.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {spotlightFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="h-full border-border/70 bg-card/82 py-0 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(71,97,214,0.45)]"
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

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 md:px-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Emulator support visualized
            </p>
            <h2 className="brand-display mt-2 text-4xl tracking-[0.03em] text-foreground md:text-5xl">
              Core and ROM logo wall
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit rounded-full border-border/70 bg-card/75 px-6 text-foreground hover:bg-card"
          >
            <a href="/cores/">Open complete core catalog</a>
          </Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-xl font-semibold text-foreground">Emulator cores</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageCoreLogoWall} direction="left" durationSeconds={34} />
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-xl font-semibold text-foreground">Systems and ROM groups</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <LogoWall items={homepageSystemLogoWall} direction="right" durationSeconds={44} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-8 md:px-10">
        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="brand-display text-3xl tracking-[0.02em] text-foreground">
                Core matrix and runtime switching
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Core selection is stored per system and can switch without redesigning your skin layer.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 pb-6">
              {coreMatrixRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-border/60 bg-background/45 px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm text-foreground/88">{row.cores}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 py-0">
            <CardHeader className="pb-4 pt-6">
              <CardTitle className="brand-display text-3xl tracking-[0.02em] text-foreground">
                ROM and package format coverage
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Import routing supports direct files and zipped archives, with explicit validation and
                unsupported-type rejection (for example .pce / .sgx).
              </p>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              {romSupportGroups.map((group) => (
                <div key={group.id}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.extensions.map((ext) => (
                      <span
                        key={ext}
                        className="rounded-full border border-border/70 bg-background/50 px-3 py-1 text-xs text-foreground/85"
                      >
                        {ext}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 md:px-10 md:pb-28">
        <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-primary/22 via-accent/14 to-emerald-500/10 py-0 backdrop-blur-xl">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Download Retropa
              </p>
              <h3 className="brand-display mt-2 text-4xl tracking-[0.03em] text-foreground">
                Experience it directly on iOS.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                From Delta skin compatibility to waveform-level haptics and filter-pack extensibility,
                Retropa is designed to invite exploration from your very first launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
              >
                <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                  Download now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border/80 bg-card/75 px-7 text-foreground hover:bg-card"
              >
                <a href="/terms/">Review terms</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
