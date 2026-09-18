import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useRef, type ReactNode } from "react"
import { useI18n } from "@/i18n/context"
import { localeLabelByLocale, supportedLocales } from "@/i18n/locales"
import { acquisitionCopy } from "@/content/acquisition"
import { discoveryCopy, navigationCopy } from "@/content/discovery"
import { guideLocale, localizedPath, type SitePage } from "@/lib/routes"
import { observeAcquisition, track } from "@/lib/analytics"
import { setTheme } from "@/lib/theme"
import { siteConfig } from "@/lib/site-config"
import { DownloadLink } from "@/components/download-link"
import { AnalyticsConsent } from "@/components/analytics-consent"

export function SiteLayout({ currentPage, children }: { currentPage: SitePage; children: ReactNode }) {
  const { locale, messages, setLocaleFromValue } = useI18n()
  const copy = acquisitionCopy(locale)
  const discovery = discoveryCopy(locale)
  const labels = navigationCopy(locale)
  const menu = useRef<HTMLDetailsElement>(null)
  useEffect(() => observeAcquisition(), [])
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !menu.current?.open) return
      menu.current.open = false
      menu.current.querySelector("summary")?.focus()
    }
    const outside = (event: PointerEvent) => {
      if (menu.current?.open && event.target instanceof Node && !menu.current.contains(event.target)) menu.current.open = false
    }
    document.addEventListener("keydown", close)
    document.addEventListener("pointerdown", outside)
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside) }
  }, [])
  const links: { page: SitePage; label: string }[] = [
    { page: "cores", label: labels[0] }, { page: "delta-skins", label: labels[1] },
    { page: "crt-filters", label: labels[2] }, { page: "start", label: labels[3] },
  ]
  const guideLanguage = guideLocale(locale)
  const guideLanguageLabel = guideLanguage === "en" && locale !== "en" ? <small className="link-language" lang="en">EN</small> : null
  const navigation = (mobile = false) => <nav className={mobile ? "mobile-nav" : "main-nav"} aria-label={discovery.openMenu}>
    {links.map(link => <a key={link.page} href={localizedPath(link.page, locale)} hrefLang={link.page === "cores" ? locale : guideLocale(locale)} aria-current={currentPage === link.page ? "page" : undefined}
      onClick={() => { if (menu.current) menu.current.open = false; if (link.page === "start") track("web_guide_opened") }}><span>{link.label}{link.page !== "cores" && guideLanguageLabel}</span>{mobile && <ArrowUpRight size={18} />}</a>)}
  </nav>
  return <div className="site-shell">
    <a href="#main" className="skip-link">{discovery.skip}</a>
    <header className="site-header">
      <a href={localizedPath("home", locale)} className="wordmark" aria-label={messages.shared.brand.homepageAriaLabel}>
        <img src="/brand/retropa-site-logo.png" width="32" height="32" alt="" />Retropa<span className="brand-period">.</span>
      </a>
      {navigation()}
      <div className="header-actions">
        <DownloadLink placement="header" compact />
        <details className="mobile-menu" ref={menu}>
          <summary className="icon-button" aria-label={discovery.openMenu} title={discovery.openMenu}><Menu className="menu-open-icon" size={23} /><X className="menu-close-icon" size={23} /></summary>
          {navigation(true)}
        </details>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer className="site-footer wrap">
      <div className="footer-top">
        <div><a className="footer-brand" href={localizedPath("home", locale)}>Retropa<span>.</span></a><p>{copy.category}<br />iPhone & iPad</p></div>
        <div className="footer-directory">
          <div><p>{labels[0]}</p>{[["gba-emulator", "GBA"], ["ds-emulator", "DS"], ["arcade", discovery.arcadeLabel]].map(([page, label]) => <a key={page} href={localizedPath(page as SitePage, locale)} hrefLang={guideLanguage}>{label}{guideLanguageLabel}<ArrowUpRight size={14} /></a>)}</div>
          <div><p>Retropa</p>{links.slice(1).map(link => <a href={localizedPath(link.page, locale)} hrefLang={guideLanguage} key={link.page}>{link.label}{guideLanguageLabel}</a>)}</div>
        </div>
      </div>
      <div className="footer-links">
        <a href={localizedPath("cores", locale)}>{messages.shared.footer.emulatorCores}</a>
        <a href={localizedPath("guides", locale)} hrefLang={guideLanguage}>{discovery.guides}{guideLanguageLabel}</a>
        <a href={localizedPath("plus", locale)} hrefLang={guideLanguage}>{discovery.free}{guideLanguageLabel}</a>
        <a href={localizedPath("terms", locale)}>{messages.shared.footer.terms}</a>
        <a href={localizedPath("privacy", locale)}>{messages.shared.footer.privacy}</a>
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}<ArrowUpRight size={14} /></a>
      </div>
      <div className="footer-bottom">
        <small>© 2026 Retropa. {messages.shared.footer.rightsReserved}</small>
        <div className="preferences">
          <select aria-label={messages.shared.language.menuLabel} value={locale} onChange={event => setLocaleFromValue(event.target.value)}>
            {supportedLocales.map(value => <option key={value} value={value}>{localeLabelByLocale[value]}</option>)}
          </select>
          <button type="button" className="icon-button" title={messages.shared.theme.menuLabel} aria-label={messages.shared.theme.menuLabel}
            onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}>
            <Moon className="theme-moon" size={19} /><Sun className="theme-sun" size={19} />
          </button>
          <AnalyticsConsent />
        </div>
      </div>
    </footer>
  </div>
}
