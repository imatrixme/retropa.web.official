import { SiteLayout } from "@/components/site-layout"
import { PrivacyPage } from "@/pages/privacy-page"

export function PrivacyDocument() {
  return (
    <SiteLayout currentPage="privacy">
      <PrivacyPage />
    </SiteLayout>
  )
}
