import type { CatalogTranslations } from "@/content/emulator-catalog"
import type { PageKey } from "@/i18n/pages"
import type { LegalSection } from "@/lib/site-config"

type FeatureCopy = {
  title: string
  description: string
}

type HighlightCopy = {
  value: string
  label: string
}

export type SeoPageMetadata = {
  title: string
  description: string
  keywords: string
  ogType: "website" | "article"
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
  jsonLd: Record<string, unknown>
}

export type LocaleMessages = {
  shared: {
    brand: {
      name: string
      logoAlt: string
      tagline: string
      homepageAriaLabel: string
    }
    nav: Record<PageKey, string>
    headerDownloadLabel: string
    footer: {
      description: string
      legalSupportHeading: string
      emulatorCores: string
      terms: string
      privacy: string
      rightsReserved: string
    }
    language: {
      menuLabel: string
      openMenuLabel: string
    }
    theme: {
      menuLabel: string
      openMenuLabel: string
      options: {
        system: string
        light: string
        dark: string
      }
    }
    legalDocument: {
      badge: string
      effectiveDateLabel: string
      onThisPageLabel: string
    }
  }
  home: {
    heroBadge: string
    heroTitleLines: [string, string, string]
    heroDescription: string
    readCompatibilityPromise: string
    downloadForIOSLabel: string
    compatibilityCardKicker: string
    compatibilityCardTitleLines: [string, string]
    compatibilityPillars: [FeatureCopy, FeatureCopy]
    runtimeIntegrityTitle: string
    runtimeIntegrityDescription: string
    highlights: [HighlightCopy, HighlightCopy, HighlightCopy]
    compatibilitySectionKicker: string
    compatibilitySectionTitleLines: [string, string]
    logosSectionKicker: string
    logosSectionTitle: string
    logosSectionDescription: string
    coreShowcaseTitle: string
    systemShowcaseTitle: string
    capabilitySectionKicker: string
    capabilitySectionTitleLines: [string, string]
    spotlightFeatures: [FeatureCopy, FeatureCopy, FeatureCopy, FeatureCopy, FeatureCopy, FeatureCopy]
    systemCoreMatrixTitle: string
    systemCoreMatrixSubtitle: string
    autoBadge: string
    romClarityTitle: string
    romClaritySubtitle: string
    bottomCtaKicker: string
    bottomCtaTitleLines: [string, string]
    bottomCtaDescription: string
    bottomCtaDownloadLabel: string
    inspectCoreCatalogLabel: string
  }
  cores: {
    heroBadge: string
    heroTitleLines: [string, string, string]
    heroDescription: string
    downloadForIOSLabel: string
    backToHomepageLabel: string
    standardsTitle: string
    standardsRetroArchTitle: string
    standardsRetroArchDescription: string
    standardsDeltaTitle: string
    standardsDeltaDescription: string
    standardsTraceabilityTitle: string
    standardsTraceabilityDescription: string
    coreLogoShowcaseTitle: string
    systemLogoShowcaseTitle: string
    coreCardsKicker: string
    coreCardsTitle: string
    romExtensionsLabel: string
    systemMatrixKicker: string
    systemMatrixTitle: string
    availableCoresLabel: string
    romCoverageLabel: string
  }
  terms: {
    title: string
    subtitle: string
    sections: LegalSection[]
  }
  privacy: {
    title: string
    subtitle: string
    sections: LegalSection[]
  }
  seo: Record<PageKey, SeoPageMetadata>
  catalog: CatalogTranslations
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? U[]
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K]
}
