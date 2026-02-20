import { LegalDocument } from "@/components/legal-document"
import { useI18n } from "@/i18n/context"
import { siteConfig } from "@/lib/site-config"

export function PrivacyPage() {
  const { locale, messages } = useI18n()
  const [year, month, day] = siteConfig.legalEffectiveDateISO.split("-").map(Number)
  const effectiveDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)))

  return (
    <LegalDocument
      title={messages.privacy.title}
      subtitle={messages.privacy.subtitle}
      effectiveDate={effectiveDate}
      sections={messages.privacy.sections}
    />
  )
}
