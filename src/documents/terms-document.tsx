import { SiteLayout } from "@/components/site-layout"
import { TermsPage } from "@/pages/terms-page"

export function TermsDocument() {
  return (
    <SiteLayout currentPage="terms">
      <TermsPage />
    </SiteLayout>
  )
}
