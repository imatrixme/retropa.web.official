import { Download, ShieldCheck } from "lucide-react"
import { NavLink, Outlet } from "react-router-dom"

import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
]

export function SiteLayout() {
  return (
    <div className="site-background relative isolate min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(124,86,255,0.38),transparent_42%),radial-gradient(circle_at_82%_16%,rgba(0,195,255,0.22),transparent_38%),radial-gradient(circle_at_45%_86%,rgba(0,174,122,0.15),transparent_45%),linear-gradient(135deg,#05060c_0%,#090b16_45%,#101327_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,12,0.68)_68%,rgba(1,2,8,0.95)_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <NavLink to="/" className="transition hover:opacity-90" aria-label="Retropa homepage">
            <BrandLogo size="sm" />
          </NavLink>

          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold text-white/70 transition",
                    isActive ? "bg-white/12 text-white" : "hover:bg-white/7 hover:text-white"
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button
            asChild
            className="group rounded-full bg-white text-black hover:bg-white/90"
            size="sm"
          >
            <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
              <Download className="mr-1.5 h-4 w-4 transition group-hover:-translate-y-0.5" />
              Download
            </a>
          </Button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-2">
            <BrandLogo size="sm" />
            <p className="max-w-md text-sm text-white/60">{siteConfig.description}</p>
          </div>

          <div className="space-y-3 text-sm text-white/65">
            <p className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-white/75">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Legal and support
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <NavLink to="/terms" className="transition hover:text-white">
                Terms of Service
              </NavLink>
              <NavLink to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </NavLink>
              <a href={`mailto:${siteConfig.supportEmail}`} className="transition hover:text-white">
                {siteConfig.supportEmail}
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.11em] text-white/45">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
