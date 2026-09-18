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
import { SearchPage } from "@/pages/search-page"
import { GuidesPage } from "@/pages/guides-page"
import { isProductPage } from "@/content/product-details"
import { searchPageContent, isSearchPage } from "@/content/search-pages"

export function Site({ page, locale }: { page: SitePage; locale: Locale }) {
  const search = page !== "not-found" && isSearchPage(page) ? searchPageContent(page, locale) : null
  return <I18nProvider initialLocale={locale} page={page}><SiteLayout currentPage={page}>
    {page === "home" ? <HomePage /> : page === "cores" ? <CoresPage /> : page === "terms" ? <TermsPage /> : page === "privacy" ? <PrivacyPage /> : page === "start" ? <StartPage /> : page === "guides" ? <GuidesPage /> : isProductPage(page) ? <ProductPage page={page} /> : search ? <SearchPage content={search} /> :
      <section className="wrap page-heading"><p className="eyebrow">404</p><h1>This page is not here.</h1><p>The address may have changed.</p><a className="inline-link" href="/">Return to Retropa</a></section>}
  </SiteLayout></I18nProvider>
}
