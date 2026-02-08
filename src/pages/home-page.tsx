import {
  ChevronRight,
  Download,
  Gamepad2,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { Link } from "react-router-dom"

import { BrandLogo } from "@/components/brand-logo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"

const highlights = [
  {
    title: "Console-grade performance",
    description:
      "Frame-accurate cores, low-latency input, and premium rendering tuned for iPhone and iPad.",
    icon: Zap,
  },
  {
    title: "Signature skin system",
    description:
      "2D and 3D skins with cinematic polish, customizable overlays, and tactile feedback details.",
    icon: Layers,
  },
  {
    title: "Daily-ready workflow",
    description:
      "Fast import, save-state stability, rewind capability, and polished controls that feel native.",
    icon: Rocket,
  },
]

const metrics = [
  { value: "< 1 frame", label: "Input latency target" },
  { value: "4K-ready", label: "Upscaled visual pipeline" },
  { value: "Multi-core", label: "Optimized emulation runtime" },
]

export function HomePage() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pt-20">
        <div className="space-y-7">
          <Badge
            variant="outline"
            className="rounded-full border-white/30 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/85"
          >
            Premium iOS Emulator Experience
          </Badge>

          <div className="space-y-5">
            <h1 className="brand-display text-balance text-5xl leading-[1.02] tracking-[0.02em] text-white md:text-7xl">
              Retro gaming,
              <br />
              rebuilt with modern iOS elegance.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
              Retropa combines precision emulation technology with a luxury-first interface.
              The result is a product that feels both nostalgic and unmistakably current.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-[15px] text-black hover:bg-white/90"
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
              className="rounded-full border-white/30 bg-white/8 px-8 text-[15px] text-white hover:bg-white/15"
            >
              <Link to="/privacy">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Privacy first
              </Link>
            </Button>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md"
              >
                <p className="brand-display text-2xl tracking-[0.03em] text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/58">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-12 left-2 h-64 w-64 rounded-full bg-cyan-400/16 blur-3xl" />

          <Card className="relative overflow-hidden border-white/15 bg-black/45 py-0 shadow-[0_24px_90px_-44px_rgba(88,134,255,0.9)] backdrop-blur-2xl">
            <CardHeader className="border-b border-white/10 pb-7 pt-8">
              <div className="flex items-start justify-between gap-4">
                <BrandLogo size="lg" showWordmark={false} />
                <Badge className="rounded-full bg-emerald-300/90 px-3 py-1 text-black">
                  iOS Native
                </Badge>
              </div>
              <CardTitle className="brand-display mt-4 text-4xl leading-tight tracking-[0.02em] text-white">
                Crafted for players
                <br />
                who notice details.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 py-7">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/55">
                  Core stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "mGBA runtime",
                    "Frame scheduler",
                    "Shader pipeline",
                    "Haptic touch mapping",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {["Skin customization", "Save-state safety", "Portal interoperability"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-violet-300" />
                      <p className="text-sm text-white/80">{item}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/45" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto w-[calc(100%-3rem)] max-w-7xl bg-white/10 md:w-[calc(100%-5rem)]" />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Why teams choose Retropa
            </p>
            <h2 className="brand-display mt-3 text-4xl tracking-[0.03em] text-white md:text-5xl">
              Engineered substance,
              <br />
              not just aesthetics.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/70">
            <Gamepad2 className="h-4 w-4" />
            Built for serious retro players
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card
              key={highlight.title}
              className="border-white/15 bg-white/6 py-0 backdrop-blur-lg transition hover:-translate-y-1 hover:bg-white/10"
            >
              <CardHeader className="pb-4 pt-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/12">
                  <highlight.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6 text-sm leading-relaxed text-white/70">
                {highlight.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10 md:pb-28">
        <Card className="overflow-hidden border-white/15 bg-gradient-to-br from-violet-500/25 via-cyan-400/12 to-emerald-400/15 py-0 backdrop-blur-2xl">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                Download Retropa
              </p>
              <h3 className="brand-display mt-2 text-4xl tracking-[0.03em] text-white">
                Start your next retro session.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/78">
                Install Retropa on your iOS device and experience premium emulation design,
                legal transparency, and a workflow made for daily play.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-7 text-black hover:bg-white/90"
              >
                <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                  Download now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/35 bg-black/30 px-7 text-white hover:bg-black/45"
              >
                <Link to="/terms">Review terms</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
