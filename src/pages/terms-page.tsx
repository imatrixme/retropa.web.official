import { LegalDocument } from "@/components/legal-document"
import { termsSections } from "@/content/legal"
import { siteConfig } from "@/lib/site-config"

export function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      subtitle="These terms govern your use of Retropa, including app access, purchases, and user responsibilities for imported content."
      effectiveDate={siteConfig.legalEffectiveDate}
      sections={termsSections}
    />
  )
}
