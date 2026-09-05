import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import { useI18n } from "@/i18n/context"
import { localeLabelByLocale, supportedLocales } from "@/i18n/locales"
import { acquisitionCopy } from "@/content/acquisition"
import { localizedPath, type SitePage } from "@/lib/routes"
import { observeAcquisition, track } from "@/lib/analytics"
import { setTheme } from "@/lib/theme"
import { siteConfig } from "@/lib/site-config"
import { DownloadLink } from "@/components/download-link"
import { AnalyticsConsent } from "@/components/analytics-consent"

export function SiteLayout({ currentPage, children }: { currentPage: SitePage; children: ReactNode }) {
  const { locale, messages, setLocaleFromValue } = useI18n()
  const copy = acquisitionCopy(locale)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => observeAcquisition(), [])
  const links = [
    { href: localizedPath("home", locale), label: messages.shared.nav.home, key: "home" },
    { href: localizedPath("cores", locale), label: messages.home.systemShowcaseTitle, key: "cores" },
    { href: localizedPath("start", locale), label: copy.start, key: "start" },
  ]
  return <div className="site-shell">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <a href={localizedPath("home", locale)} className="wordmark" aria-label={messages.shared.brand.homepageAriaLabel}>
        <img src="/brand/retropa-site-logo.png" width="32" height="32" alt="" />Retropa<span className="brand-period">.</span>
      </a>
      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label={messages.shared.nav.home}>
        {links.map(link => <a key={link.key} href={link.href} aria-current={currentPage === link.key ? "page" : undefined}
          onClick={() => { setMenuOpen(false); if (link.key === "start") track("web_guide_opened") }}>{link.label}</a>)}
      </nav>
      <div className="header-actions">
        <DownloadLink placement="header" compact />
        <button className="icon-button menu-button" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer className="site-footer wrap">
      <div className="footer-top"><a className="footer-brand" href={localizedPath("home", locale)}>Retropa<span>.</span></a><p>{copy.category}<br />iPhone & iPad</p></div>
      <div className="footer-links">
        <a href={localizedPath("cores", locale)}>{messages.shared.footer.emulatorCores}</a>
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
