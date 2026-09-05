import { I18nProvider } from "@/i18n/context"
import type { Locale } from "@/i18n/locales"
import { SiteLayout } from "@/components/site-layout"
import { HomePage } from "@/pages/home-page"
import { CoresPage } from "@/pages/cores-page"
import { TermsPage } from "@/pages/terms-page"
import { PrivacyPage } from "@/pages/privacy-page"
import { StartPage } from "@/pages/start-page"
import type { SitePage } from "@/lib/routes"
import { ProductPage } from "@/pages/product-page"
import { isProductPage } from "@/content/product-details"

export function Site({ page, locale }: { page: SitePage; locale: Locale }) {
  return <I18nProvider initialLocale={locale}><SiteLayout currentPage={page}>
    {page === "home" ? <HomePage /> : page === "cores" ? <CoresPage /> : page === "terms" ? <TermsPage /> : page === "privacy" ? <PrivacyPage /> : page === "start" ? <StartPage /> : isProductPage(page) ? <ProductPage page={page} /> :
      <section className="wrap page-heading"><p className="eyebrow">404</p><h1>This page is not here.</h1><p>The address may have changed.</p><a className="inline-link" href="/">Return to Retropa</a></section>}
  </SiteLayout></I18nProvider>
}
