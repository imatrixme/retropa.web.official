import { Download, ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type NavKey = "home" | "cores" | "terms" | "privacy"

type SiteLayoutProps = {
  currentPage: NavKey
  children: ReactNode
}

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "cores", label: "Cores", href: "/cores/" },
  { key: "terms", label: "Terms", href: "/terms/" },
  { key: "privacy", label: "Privacy", href: "/privacy/" },
]

function NavLinks({ currentPage, compact = false }: { currentPage: NavKey; compact?: boolean }) {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className={cn(
            "premium-nav-pill",
            currentPage === item.key ? "premium-nav-active" : "premium-nav-idle",
            compact ? "shrink-0" : undefined
          )}
        >
          {item.label}
        </a>
      ))}
    </>
  )
}

export function SiteLayout({ currentPage, children }: SiteLayoutProps) {
  return (
    <div className="site-background relative isolate min-h-screen overflow-x-clip text-foreground transition-colors">
      <div className="site-grid-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="site-vignette-overlay pointer-events-none absolute inset-0 -z-10" />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pb-2 pt-3 md:px-6 md:pt-4">
        <div className="premium-nav-shell mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-2 px-3 py-2 md:px-4 md:py-2.5">
            <a href="/" className="transition hover:opacity-90" aria-label="Retropa homepage">
              <BrandLogo size="sm" showWordmark={false} />
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              <NavLinks currentPage={currentPage} />
            </nav>

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <Button
                asChild
                className="group h-9 rounded-full bg-primary px-3 text-xs text-primary-foreground shadow-[0_10px_24px_-16px_rgba(95,116,255,0.9)] hover:bg-primary/90"
                size="sm"
              >
                <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                  <Download className="mr-1.5 h-4 w-4 transition group-hover:-translate-y-0.5" />
                  Download
                </a>
              </Button>
            </div>
          </div>

          <nav className="premium-nav-mobile-scroll px-2 pb-2 md:hidden">
            <div className="inline-flex min-w-full gap-1">
              <NavLinks currentPage={currentPage} compact />
            </div>
          </nav>
        </div>
      </header>

      <div aria-hidden className="h-[96px] md:h-[72px]" />

      <main>{children}</main>

      <footer className="mt-10 border-t border-border/55 bg-background/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="space-y-3">
            <BrandLogo size="sm" />
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-foreground/88">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Legal and support
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/cores/" className="transition hover:text-foreground">
                Emulator Cores
              </a>
              <a href="/terms/" className="transition hover:text-foreground">
                Terms of Service
              </a>
              <a href="/privacy/" className="transition hover:text-foreground">
                Privacy Policy
              </a>
              <a href={`mailto:${siteConfig.supportEmail}`} className="transition hover:text-foreground">
                {siteConfig.supportEmail}
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.11em] text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
