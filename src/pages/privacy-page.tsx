import { LegalDocument } from "@/components/legal-document"
import { privacySections } from "@/content/legal"
import { siteConfig } from "@/lib/site-config"

export function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      subtitle="This policy explains what information Retropa processes, how we secure it, and the rights you can exercise regarding your data."
      effectiveDate={siteConfig.legalEffectiveDate}
      sections={privacySections}
    />
  )
}
