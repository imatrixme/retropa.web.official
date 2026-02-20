import { ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

import { BrandLogo } from "@/components/brand-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { PrismaticDownloadButton } from "@/components/prismatic-download-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useI18n } from "@/i18n/context"
import { useRuntimeSeo } from "@/i18n/seo"
import type { PageKey } from "@/i18n/pages"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type SiteLayoutProps = {
  currentPage: PageKey
  children: ReactNode
}
function NavLinks({
  currentPage,
  compact = false,
  navItems,
}: {
  currentPage: PageKey
  compact?: boolean
  navItems: Array<{ key: PageKey; label: string; href: string }>
}) {
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
  const { messages } = useI18n()
  useRuntimeSeo(currentPage)

  const navItems: Array<{ key: PageKey; label: string; href: string }> = [
    { key: "home", label: messages.shared.nav.home, href: "/" },
    { key: "cores", label: messages.shared.nav.cores, href: "/cores/" },
    { key: "terms", label: messages.shared.nav.terms, href: "/terms/" },
    { key: "privacy", label: messages.shared.nav.privacy, href: "/privacy/" },
  ]

  return (
    <div className="site-background relative isolate min-h-screen overflow-x-clip text-foreground transition-colors">
      <div className="site-grid-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="site-vignette-overlay pointer-events-none absolute inset-0 -z-10" />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pb-2 pt-3 md:px-6 md:pt-4">
        <div className="premium-nav-shell mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-2 px-3 py-2 md:px-4 md:py-2.5">
            <a
              href="/"
              className="transition hover:opacity-90"
              aria-label={messages.shared.brand.homepageAriaLabel}
            >
              <BrandLogo size="sm" showWordmark={false} />
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              <NavLinks currentPage={currentPage} navItems={navItems} />
            </nav>

            <div className="flex items-center gap-1.5">
              <LanguageSwitcher />
              <ThemeToggle />
              <PrismaticDownloadButton size="sm" label={messages.shared.headerDownloadLabel} />
            </div>
          </div>

          <nav className="premium-nav-mobile-scroll px-2 pb-2 md:hidden">
            <div className="inline-flex min-w-full gap-1">
              <NavLinks currentPage={currentPage} compact navItems={navItems} />
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
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {messages.shared.footer.description}
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-foreground/88">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              {messages.shared.footer.legalSupportHeading}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/cores/" className="transition hover:text-foreground">
                {messages.shared.footer.emulatorCores}
              </a>
              <a href="/terms/" className="transition hover:text-foreground">
                {messages.shared.footer.terms}
              </a>
              <a href="/privacy/" className="transition hover:text-foreground">
                {messages.shared.footer.privacy}
              </a>
              <a href={`mailto:${siteConfig.supportEmail}`} className="transition hover:text-foreground">
                {siteConfig.supportEmail}
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.11em] text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. {messages.shared.footer.rightsReserved}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
