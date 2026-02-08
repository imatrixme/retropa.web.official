import { Download, ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type NavKey = "home" | "terms" | "privacy"

type SiteLayoutProps = {
  currentPage: NavKey
  children: ReactNode
}

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "terms", label: "Terms", href: "/terms/" },
  { key: "privacy", label: "Privacy", href: "/privacy/" },
]

export function SiteLayout({ currentPage, children }: SiteLayoutProps) {
  return (
    <div className="site-background relative isolate min-h-screen overflow-hidden text-foreground transition-colors">
      <div className="site-grid-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="site-vignette-overlay pointer-events-none absolute inset-0 -z-10" />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="/" className="transition hover:opacity-90" aria-label="Retropa homepage">
            <BrandLogo size="sm" />
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground transition",
                  currentPage === item.key
                    ? "bg-secondary text-foreground"
                    : "hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
              <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                <Download className="mr-1.5 h-4 w-4 transition group-hover:-translate-y-0.5" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/60 bg-background/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-2">
            <BrandLogo size="sm" />
            <p className="max-w-md text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-foreground/88">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Legal and support
            </p>
            <div className="flex flex-wrap items-center gap-4">
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
