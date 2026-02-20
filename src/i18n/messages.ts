import { privacySections as privacySectionsEn, termsSections as termsSectionsEn } from "@/content/legal"
import type { CatalogTranslations } from "@/content/emulator-catalog"
import type { Locale } from "@/i18n/locales"
import { defaultLocale, supportedLocales } from "@/i18n/locales"
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

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? U[]
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K]
}

const enMessages: LocaleMessages = {
  shared: {
    brand: {
      name: "Retropa",
      logoAlt: "Retropa website logo",
      tagline: "iOS Retro Studio",
      homepageAriaLabel: "Retropa homepage",
    },
    nav: {
      home: "Home",
      cores: "Cores",
      terms: "Terms",
      privacy: "Privacy",
    },
    headerDownloadLabel: "Download",
    footer: {
      description:
        "Retropa blends multi-core emulation, advanced skin customization, haptic waveform tuning, filter packs, and localization packs into a polished iOS experience.",
      legalSupportHeading: "Legal and support",
      emulatorCores: "Emulator Cores",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      rightsReserved: "All rights reserved.",
    },
    language: {
      menuLabel: "Language",
      openMenuLabel: "Open language menu",
    },
    theme: {
      menuLabel: "Theme",
      openMenuLabel: "Open theme menu",
      options: {
        system: "System",
        light: "Light",
        dark: "Dark",
      },
    },
    legalDocument: {
      badge: "Legal",
      effectiveDateLabel: "Effective Date",
      onThisPageLabel: "On this page",
    },
  },
  home: {
    heroBadge: "Crafted for people who still care how games feel",
    heroTitleLines: ["A better home", "for the games", "that raised us."],
    heroDescription:
      "Retropa is not nostalgia as decoration. It is careful engineering for players who know timing, texture, and control memory by heart. Every frame, filter, and touch target is designed to preserve what made these games matter in the first place.",
    readCompatibilityPromise: "Read compatibility promise",
    downloadForIOSLabel: "Download for iOS",
    compatibilityCardKicker: "Compatibility Promise",
    compatibilityCardTitleLines: ["Two commitments", "we treat as non-negotiable."],
    compatibilityPillars: [
      {
        title: "RetroArch Filter Stack: Full Support",
        description:
          "Run full RetroArch shader chains with .slang / .slangp presets, multi-pass ordering, parameter controls, and stable runtime switching.",
      },
      {
        title: "Delta Skin Packages: Full Compatibility",
        description:
          "Import Delta .deltaskin packages directly, preserve layout intent, and keep controls responsive across portrait and landscape transitions.",
      },
    ],
    runtimeIntegrityTitle: "Built from real runtime behavior",
    runtimeIntegrityDescription:
      "What we claim on this page is tied to the production code path, not marketing-only mock behavior.",
    highlights: [
      { value: "RetroArch .slangp", label: "full filter pipeline" },
      { value: "Delta .deltaskin", label: "full compatibility" },
      { value: "8 runtime cores", label: "system-aware switching" },
    ],
    compatibilitySectionKicker: "Compatibility before cosmetics",
    compatibilitySectionTitleLines: ["Built for confidence,", "not checkbox marketing."],
    logosSectionKicker: "Core and system logos",
    logosSectionTitle: "Official assets in motion",
    logosSectionDescription:
      "Core and console logos are sourced from official project repositories and Wikimedia, then normalized into performance-safe PNG assets for smooth page rendering.",
    coreShowcaseTitle: "Emulator core showcase",
    systemShowcaseTitle: "System showcase",
    capabilitySectionKicker: "Real capability highlights",
    capabilitySectionTitleLines: ["Premium feel starts with", "reliable internals."],
    spotlightFeatures: [
      {
        title: "Per-system memory that respects your habits",
        description:
          "Retropa remembers your preferred core, skin mode, and control layout for each console system so you can return exactly where comfort starts.",
      },
      {
        title: "Controller mapping with studio-level depth",
        description:
          "Multiple physical controllers can run in parallel with independent slot mapping, profile save, and live remap behavior during gameplay.",
      },
      {
        title: "Haptics tuned by intent, not by chance",
        description:
          "Waveform packs support per-action press/release patterns and fallback behavior so tactile feedback feels deliberate on every device.",
      },
      {
        title: "Core switching without breaking flow",
        description:
          "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, and Ares are wired into one runtime model with coherent behavior.",
      },
      {
        title: "Localization packs that ship with craft",
        description:
          "Language packs hot-load instantly with reliable namespace fallback, letting community or regional updates feel native instead of patched.",
      },
      {
        title: "Pack ecosystem with strict validation",
        description:
          "Visual, shader, localization, audio, and document packs follow one import pipeline with integrity checks before runtime activation.",
      },
    ],
    systemCoreMatrixTitle: "System-to-core matrix",
    systemCoreMatrixSubtitle: "Dense routing map · per-system core preference memory",
    autoBadge: "Auto",
    romClarityTitle: "ROM format clarity",
    romClaritySubtitle: "Extension matrix · deterministic import behavior",
    bottomCtaKicker: "Download Retropa",
    bottomCtaTitleLines: ["Keep the classics,", "keep the feeling."],
    bottomCtaDescription:
      "If you care about authenticity as much as modern polish, Retropa is built for your daily play, not just for screenshots.",
    bottomCtaDownloadLabel: "Download now",
    inspectCoreCatalogLabel: "Inspect core catalog",
  },
  cores: {
    heroBadge: "Emulator Core Catalog",
    heroTitleLines: ["Core lineage,", "system matrix,", "and source truth."],
    heroDescription:
      "This page shows exactly which emulator cores power Retropa, which consoles each core serves, and where each project lives on GitHub. No blurred claims, no hidden footnotes.",
    downloadForIOSLabel: "Download for iOS",
    backToHomepageLabel: "Back to homepage",
    standardsTitle: "Compatibility standards",
    standardsRetroArchTitle: "RetroArch filter chain support",
    standardsRetroArchDescription:
      "Full .slang / .slangp pipeline support is expected in runtime behavior and reflected in product capability communication.",
    standardsDeltaTitle: "Delta skin compatibility",
    standardsDeltaDescription:
      "Delta skin package compatibility is maintained as a first-class contract, including layout-safe fallback behavior.",
    standardsTraceabilityTitle: "Source traceability",
    standardsTraceabilityDescription:
      "Core logos and system logos are sourced and versioned with explicit origin records.",
    coreLogoShowcaseTitle: "Core logo showcase",
    systemLogoShowcaseTitle: "System logo showcase",
    coreCardsKicker: "Core cards",
    coreCardsTitle: "Every core, mapped and linked",
    romExtensionsLabel: "ROM extensions",
    systemMatrixKicker: "System matrix",
    systemMatrixTitle: "Console families and ROM coverage",
    availableCoresLabel: "Available cores",
    romCoverageLabel: "ROM coverage",
  },
  terms: {
    title: "Terms of Service",
    subtitle:
      "These terms govern your use of Retropa, including app access, purchases, and user responsibilities for imported content.",
    sections: termsSectionsEn,
  },
  privacy: {
    title: "Privacy Policy",
    subtitle:
      "This policy explains what information Retropa processes, how we secure it, and the rights you can exercise regarding your data.",
    sections: privacySectionsEn,
  },
  seo: {
    home: {
      title: "Retropa for iOS · Skins, Filters, Haptics, Multi-Core Emulator",
      description:
        "Retropa official website for iOS: premium retro emulator with Delta skin compatibility, custom button styles, librashader filters, multi-core switching, controller mapping, and localization packs.",
      keywords:
        "Retropa,iOS emulator,retro gaming,Delta skin,custom skins,librashader,slangp filters,controller mapping,haptic waveform,ROM support,multi-core emulator",
      ogType: "website",
      ogTitle: "Retropa for iOS · Skins, Filters, Haptics, Multi-Core Emulator",
      ogDescription:
        "Explore the premium iOS emulator platform with Delta skin compatibility, filter packs, haptic customization, and per-system core switching.",
      twitterTitle: "Retropa for iOS",
      twitterDescription:
        "Premium retro gaming on iOS with skins, filters, haptics, controller mapping, and localization packs.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Retropa",
        applicationCategory: "GameApplication",
        operatingSystem: "iOS",
        url: "https://retropa.com/",
        downloadUrl: "https://apps.apple.com/",
        image: "https://retropa.com/brand/retropa-site-logo-512.png",
        description:
          "Premium iOS retro emulator with multi-core runtime, advanced skin system, controller mapping, filter packs, and localization packs.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Delta skin compatibility (.deltaskin)",
          "Flat2D / SVG2D / 3D skin rendering",
          "Controller slot mapping and per-system profiles",
          "Core Haptics waveform packs and per-action customization",
          "Librashader filter pipeline with .slangp presets",
          "Localization packs with runtime refresh",
        ],
      },
    },
    cores: {
      title: "Retropa Emulator Cores · Systems and ROM Support Catalog",
      description:
        "Explore Retropa emulator cores, supported game systems, ROM extension matrix, and upstream GitHub repositories on the official iOS website.",
      keywords:
        "Retropa cores,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM support,emulator systems",
      ogType: "website",
      ogTitle: "Retropa Emulator Cores Catalog",
      ogDescription:
        "See emulator cores, system compatibility matrix, ROM extension coverage, and upstream GitHub links used by Retropa.",
      twitterTitle: "Retropa Emulator Cores Catalog",
      twitterDescription:
        "A dedicated official page for emulator cores, supported systems, ROM types, and source repositories.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Retropa Emulator Cores",
        url: "https://retropa.com/cores/",
        description:
          "Catalog of emulator cores, supported systems, ROM extensions, and source repositories used in Retropa.",
        isPartOf: {
          "@type": "WebSite",
          name: "Retropa",
          url: "https://retropa.com/",
        },
      },
    },
    terms: {
      title: "Retropa Terms of Service · Official Legal Page",
      description:
        "Read Retropa Terms of Service for iOS app usage, licensing, purchases, user responsibilities, and legal contact information.",
      keywords: "Retropa terms,terms of service,iOS app legal,user responsibilities,app licensing",
      ogType: "article",
      ogTitle: "Retropa Terms of Service",
      ogDescription: "Official legal terms for Retropa iOS app and website.",
      twitterTitle: "Retropa Terms of Service",
      twitterDescription: "Official legal terms for Retropa iOS app and website.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://retropa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms of Service",
            item: "https://retropa.com/terms/",
          },
        ],
      },
    },
    privacy: {
      title: "Retropa Privacy Policy · Official Data Statement",
      description:
        "Read the Retropa Privacy Policy: information collection scope, data handling, storage, sharing, and user rights for the iOS app and official website.",
      keywords: "Retropa privacy,privacy policy,data handling,user rights,iOS app privacy",
      ogType: "article",
      ogTitle: "Retropa Privacy Policy",
      ogDescription: "Official privacy statement for Retropa iOS app and website.",
      twitterTitle: "Retropa Privacy Policy",
      twitterDescription: "Official privacy statement for Retropa iOS app and website.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://retropa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: "https://retropa.com/privacy/",
          },
        ],
      },
    },
  },
  catalog: {},
}

const localeOverrides: Partial<Record<Locale, DeepPartial<LocaleMessages>>> = {
  de: {
    shared: {
      brand: {
        logoAlt: "Retropa Website-Logo",
        tagline: "Retro-Studio für iOS",
        homepageAriaLabel: "Retropa Startseite",
      },
      nav: {
        home: "Startseite",
        cores: "Kerne",
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutz",
      },
      headerDownloadLabel: "Download",
      footer: {
        description:
          "Retropa verbindet Multi-Core-Emulation, fortgeschrittene Skin-Anpassung, haptisches Waveform-Tuning, Filter-Packs und Lokalisierungspakete zu einem polierten iOS-Erlebnis.",
        legalSupportHeading: "Rechtliches & Support",
        emulatorCores: "Emulator-Kerne",
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutzrichtlinie",
        rightsReserved: "Alle Rechte vorbehalten.",
      },
      language: {
        menuLabel: "Sprache",
        openMenuLabel: "Sprachmenü öffnen",
      },
      theme: {
        menuLabel: "Design",
        openMenuLabel: "Designmenü öffnen",
        options: {
          system: "System",
          light: "Hell",
          dark: "Dunkel",
        },
      },
      legalDocument: {
        badge: "Rechtliches",
        effectiveDateLabel: "Gültig ab",
        onThisPageLabel: "Auf dieser Seite",
      },
    },
    terms: {
      title: "Nutzungsbedingungen",
      subtitle:
        "Diese Bedingungen regeln deine Nutzung von Retropa, einschließlich App-Zugriff, Käufen und deiner Verantwortung für importierte Inhalte.",
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      subtitle:
        "Diese Richtlinie erklärt, welche Informationen Retropa verarbeitet, wie wir sie schützen und welche Rechte du in Bezug auf deine Daten ausüben kannst.",
    },
    home: {
      heroBadge: "Für Menschen gemacht, die noch wissen, wie sich Spiele anfühlen",
      heroTitleLines: ["Ein besseres Zuhause", "für die Spiele", "die uns geprägt haben."],
      heroDescription:
        "Retropa ist keine Nostalgie als Dekoration. Es ist sorgfältige Ingenieursarbeit für Spielerinnen und Spieler, die Timing, Textur und Muskelgedächtnis wirklich kennen. Jeder Frame, jeder Filter und jedes Touch-Target ist darauf ausgelegt, das zu bewahren, was diese Spiele überhaupt erst bedeutend gemacht hat.",
      readCompatibilityPromise: "Kompatibilitätsversprechen lesen",
      downloadForIOSLabel: "Für iOS laden",
      compatibilityCardKicker: "Kompatibilitätsversprechen",
      compatibilityCardTitleLines: ["Zwei Zusagen", "an denen wir nicht rütteln."],
      compatibilityPillars: [
        {
          title: "RetroArch-Filter-Stack: volle Unterstützung",
          description:
            "Führe komplette RetroArch-Shader-Ketten mit .slang / .slangp-Presets aus: Multi-Pass-Reihenfolge, Parametersteuerung und stabiles Umschalten zur Laufzeit.",
        },
        {
          title: "Delta-Skin-Pakete: volle Kompatibilität",
          description:
            "Importiere Delta-.deltaskin-Pakete direkt, bewahre die Layout-Intention und halte die Controls reaktionsschnell in Portrait- und Landscape-Wechseln.",
        },
      ],
      runtimeIntegrityTitle: "Aus echtem Runtime-Verhalten gebaut",
      runtimeIntegrityDescription:
        "Was wir auf dieser Seite behaupten, hängt am Produktions-Codepfad, nicht an Marketing-Mockups.",
      highlights: [
        { value: "RetroArch .slangp", label: "vollständige Filter-Pipeline" },
        { value: "Delta .deltaskin", label: "volle Kompatibilität" },
        { value: "8 Runtime-Cores", label: "systembewusstes Umschalten" },
      ],
      compatibilitySectionKicker: "Kompatibilität vor Kosmetik",
      compatibilitySectionTitleLines: ["Für Vertrauen gebaut,", "nicht für Checkbox-Marketing."],
      logosSectionKicker: "Core- und System-Logos",
      logosSectionTitle: "Offizielle Assets in Bewegung",
      logosSectionDescription:
        "Core- und Konsolenlogos stammen aus offiziellen Projekt-Repositories und von Wikimedia und werden anschließend zu performance-sicheren PNG-Assets normalisiert, damit die Seite sauber und flüssig rendert.",
      coreShowcaseTitle: "Emulator-Core-Showcase",
      systemShowcaseTitle: "System-Showcase",
      capabilitySectionKicker: "Echte Capability-Highlights",
      capabilitySectionTitleLines: ["Premium-Feeling beginnt mit", "verlässlichen Interna."],
      spotlightFeatures: [
        {
          title: "Pro System ein Gedächtnis, das deine Gewohnheiten respektiert",
          description:
            "Retropa merkt sich deinen bevorzugten Core, den Skin-Modus und dein Controller-Layout pro Konsolensystem, damit du genau dort weitermachst, wo sich alles richtig anfühlt.",
        },
        {
          title: "Controller-Mapping mit Studio-Tiefe",
          description:
            "Mehrere physische Controller laufen parallel mit unabhängiger Slot-Zuordnung, Profil-Speicherung und Live-Remap während des Spiels.",
        },
        {
          title: "Haptik nach Absicht getunt, nicht nach Zufall",
          description:
            "Waveform-Packs unterstützen pro Aktion Press/Release-Patterns und Fallback-Verhalten, damit haptisches Feedback auf jedem Gerät bewusst wirkt.",
        },
        {
          title: "Core-Wechsel ohne Flow-Bruch",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis und Ares sind in ein gemeinsames Runtime-Modell verdrahtet, das sich konsistent verhält.",
        },
        {
          title: "Lokalisierungspakete, die mit Handwerk shippen",
          description:
            "Sprachpakete laden sofort nach, mit verlässlichem Namespace-Fallback, damit Community- und regionale Updates sich nativ anfühlen statt aufgeklebt.",
        },
        {
          title: "Pack-Ökosystem mit strenger Validierung",
          description:
            "Visual-, Shader-, Localization-, Audio- und Document-Packs folgen einer Import-Pipeline mit Integritätschecks vor der Aktivierung zur Laufzeit.",
        },
      ],
      systemCoreMatrixTitle: "System-zu-Core-Matrix",
      systemCoreMatrixSubtitle: "Dichte Routing-Map · pro System Core-Präferenzspeicher",
      autoBadge: "Auto",
      romClarityTitle: "Klarheit bei ROM-Formaten",
      romClaritySubtitle: "Erweiterungs-Matrix · deterministisches Importverhalten",
      bottomCtaKicker: "Retropa laden",
      bottomCtaTitleLines: ["Bewahr die Klassiker,", "bewahr das Gefühl."],
      bottomCtaDescription:
        "Wenn dir Authentizität genauso wichtig ist wie moderner Feinschliff, ist Retropa für dein tägliches Spielen gebaut, nicht nur für Screenshots.",
      bottomCtaDownloadLabel: "Jetzt laden",
      inspectCoreCatalogLabel: "Core-Katalog ansehen",
    },
    cores: {
      heroBadge: "Emulator-Core-Katalog",
      heroTitleLines: ["Core-Abstammung,", "System-Matrix,", "und Quellwahrheit."],
      heroDescription:
        "Diese Seite zeigt genau, welche Emulator-Cores Retropa antreiben, welche Konsolen jeder Core abdeckt und wo jedes Projekt auf GitHub lebt. Keine verschwommenen Behauptungen, keine versteckten Fußnoten.",
      downloadForIOSLabel: "Für iOS laden",
      backToHomepageLabel: "Zur Startseite",
      standardsTitle: "Kompatibilitätsstandards",
      standardsRetroArchTitle: "RetroArch-Filterketten-Support",
      standardsRetroArchDescription:
        "Volle .slang / .slangp-Pipeline-Unterstützung wird im Runtime-Verhalten erwartet und in der Kommunikation der Produktfähigkeiten entsprechend abgebildet.",
      standardsDeltaTitle: "Delta-Skin-Kompatibilität",
      standardsDeltaDescription:
        "Kompatibilität mit Delta-Skin-Paketen ist ein Vertrag erster Klasse, inklusive layout-sicherem Fallback-Verhalten.",
      standardsTraceabilityTitle: "Nachvollziehbarkeit der Quellen",
      standardsTraceabilityDescription:
        "Core-Logos und System-Logos werden mit klaren Herkunftsnachweisen bezogen und versioniert.",
      coreLogoShowcaseTitle: "Core-Logo-Showcase",
      systemLogoShowcaseTitle: "System-Logo-Showcase",
      coreCardsKicker: "Core-Karten",
      coreCardsTitle: "Jeder Core, gemappt und verlinkt",
      romExtensionsLabel: "ROM-Erweiterungen",
      systemMatrixKicker: "System-Matrix",
      systemMatrixTitle: "Konsolenfamilien und ROM-Abdeckung",
      availableCoresLabel: "Verfügbare Cores",
      romCoverageLabel: "ROM-Abdeckung",
    },
    seo: {
      home: {
        title: "Retropa für iOS · Skins, Filter, Haptik, Multi-Core-Emulator",
        description:
          "Retropa offizielle iOS-Website: Premium-Retro-Emulator mit Delta-Skin-Kompatibilität, anpassbaren Buttons, Librashader-Filtern, Multi-Core-Switching, Controller-Mapping und Lokalisierungspaketen.",
        keywords:
          "Retropa,iOS Emulator,Retro Gaming,Delta Skin,Skins,librashader,slangp Filter,Controller Mapping,Haptik,Waveform,ROM Support,Multi-Core Emulator",
        ogType: "website",
        ogTitle: "Retropa für iOS · Skins, Filter, Haptik, Multi-Core-Emulator",
        ogDescription:
          "Entdecke die Premium-iOS-Emulator-Plattform mit Delta-Skin-Kompatibilität, Filter-Packs, Haptik-Anpassung und Core-Switching pro System.",
        twitterTitle: "Retropa für iOS",
        twitterDescription:
          "Premium Retro-Gaming auf iOS mit Skins, Filtern, Haptik, Controller-Mapping und Lokalisierungspaketen.",
        jsonLd: {
          featureList: [
            "Delta-Skin-Kompatibilität (.deltaskin)",
            "Flat2D / SVG2D / 3D-Skin-Rendering",
            "Controller-Slot-Mapping und Profile pro System",
            "Core-Haptics-Waveform-Packs und Anpassung pro Aktion",
            "Librashader-Filter-Pipeline mit .slangp-Presets",
            "Lokalisierungspakete mit Runtime-Refresh",
          ],
        },
      },
      cores: {
        title: "Retropa Emulator-Kerne · Systeme und ROM-Support im Katalog",
        description:
          "Entdecke Retropa Emulator-Kerne, unterstützte Systeme, ROM-Erweiterungsmatrix und Upstream-GitHub-Repositories auf der offiziellen iOS-Website.",
        keywords:
          "Retropa Kerne,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM Support,Emulator Systeme",
        ogType: "website",
        ogTitle: "Retropa Emulator-Kernkatalog",
        ogDescription:
          "Sieh dir Emulator-Kerne, System-Matrix, ROM-Typen und Upstream-Links an, die Retropa nutzt.",
        twitterTitle: "Retropa Emulator-Kernkatalog",
        twitterDescription:
          "Offizielle Seite mit Emulator-Kernen, unterstützten Systemen, ROM-Typen und Quell-Repositories.",
        jsonLd: {
          name: "Retropa Emulator-Kerne",
        },
      },
      terms: {
        title: "Retropa Nutzungsbedingungen · Offizielle Rechtsseite",
        description:
          "Lies die Retropa Nutzungsbedingungen für die iOS-App: Nutzung, Lizenzierung, Käufe, Verantwortung für importierte Inhalte und Kontaktinformationen.",
        keywords:
          "Retropa Nutzungsbedingungen,Nutzungsbedingungen,iOS App Recht,Verantwortung der Nutzer,App Lizenzierung",
        ogType: "article",
        ogTitle: "Retropa Nutzungsbedingungen",
        ogDescription: "Offizielle Nutzungsbedingungen für Retropa iOS-App und Website.",
        twitterTitle: "Retropa Nutzungsbedingungen",
        twitterDescription: "Offizielle Nutzungsbedingungen für Retropa iOS-App und Website.",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa Datenschutzrichtlinie · Offizielle Datenerklärung",
        description:
          "Lies die Retropa Datenschutzrichtlinie: Umfang der Datenerhebung, Verarbeitung, Speicherung, Weitergabe und deine Rechte für die iOS-App und die offizielle Website.",
        keywords:
          "Retropa Datenschutz,Datenschutzrichtlinie,Datenverarbeitung,Nutzerrechte,iOS App Datenschutz",
        ogType: "article",
        ogTitle: "Retropa Datenschutzrichtlinie",
        ogDescription: "Offizielle Datenschutzerklärung für Retropa iOS-App und Website.",
        twitterTitle: "Retropa Datenschutzrichtlinie",
        twitterDescription: "Offizielle Datenschutzerklärung für Retropa iOS-App und Website.",
        jsonLd: {},
      },
    },
  },
  es: {
    shared: {
      brand: {
        logoAlt: "Logotipo del sitio web de Retropa",
        tagline: "Estudio retro para iOS",
        homepageAriaLabel: "Inicio de Retropa",
      },
      nav: {
        home: "Inicio",
        cores: "Núcleos",
        terms: "Términos",
        privacy: "Privacidad",
      },
      headerDownloadLabel: "Descargar",
      footer: {
        description:
          "Retropa combina emulación multi-core, personalización avanzada de skins, ajuste de háptica por formas de onda, packs de filtros y packs de localización en una experiencia iOS pulida.",
        legalSupportHeading: "Legal y soporte",
        emulatorCores: "Núcleos del emulador",
        terms: "Términos del servicio",
        privacy: "Política de privacidad",
        rightsReserved: "Todos los derechos reservados.",
      },
      language: {
        menuLabel: "Idioma",
        openMenuLabel: "Abrir el menú de idioma",
      },
      theme: {
        menuLabel: "Tema",
        openMenuLabel: "Abrir el menú de tema",
        options: {
          system: "Sistema",
          light: "Claro",
          dark: "Oscuro",
        },
      },
      legalDocument: {
        badge: "Legal",
        effectiveDateLabel: "Fecha de entrada en vigor",
        onThisPageLabel: "En esta página",
      },
    },
    terms: {
      title: "Términos del servicio",
      subtitle:
        "Estos términos regulan tu uso de Retropa, incluido el acceso a la app, las compras y tus responsabilidades sobre el contenido importado.",
    },
    privacy: {
      title: "Política de privacidad",
      subtitle:
        "Esta política explica qué información procesa Retropa, cómo la protegemos y qué derechos puedes ejercer respecto a tus datos.",
    },
    home: {
      heroBadge: "Hecho para quienes todavia se fijan en como se sienten los juegos",
      heroTitleLines: ["Un mejor hogar", "para los juegos", "que nos criaron."],
      heroDescription:
        "Retropa no es nostalgia como adorno. Es ingenieria cuidadosa para jugadores que conocen de memoria el timing, la textura y el control. Cada fotograma, filtro y objetivo tactil esta pensado para conservar lo que hizo que estos juegos importaran de verdad.",
      readCompatibilityPromise: "Ver promesa de compatibilidad",
      downloadForIOSLabel: "Descargar para iOS",
      compatibilityCardKicker: "Promesa de compatibilidad",
      compatibilityCardTitleLines: ["Dos compromisos", "que no negociamos."],
      compatibilityPillars: [
        {
          title: "Pila de filtros RetroArch: soporte total",
          description:
            "Ejecuta cadenas completas de shaders de RetroArch con presets .slang / .slangp, orden multi-pass, control de parametros y cambio estable en tiempo de ejecucion.",
        },
        {
          title: "Paquetes de skins Delta: compatibilidad total",
          description:
            "Importa paquetes .deltaskin de Delta directamente, conserva la intencion del layout y manten los controles responsivos en transiciones vertical/horizontal.",
        },
      ],
      runtimeIntegrityTitle: "Basado en comportamiento real de ejecucion",
      runtimeIntegrityDescription:
        "Lo que afirmamos en esta pagina esta ligado al camino de codigo en produccion, no a maquetas de marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "tuberia de filtros completa" },
        { value: "Delta .deltaskin", label: "compatibilidad total" },
        { value: "8 cores en runtime", label: "cambio segun el sistema" },
      ],
      compatibilitySectionKicker: "Compatibilidad antes que cosmetica",
      compatibilitySectionTitleLines: ["Hecho para confiar,", "no para marketing de casillas."],
      logosSectionKicker: "Logos de core y sistema",
      logosSectionTitle: "Activos oficiales en movimiento",
      logosSectionDescription:
        "Los logos de cores y consolas se toman de repositorios oficiales y Wikimedia, y luego se normalizan a PNG seguros para rendimiento, para que la pagina renderice suave y limpia.",
      coreShowcaseTitle: "Muestra de cores del emulador",
      systemShowcaseTitle: "Muestra de sistemas",
      capabilitySectionKicker: "Capacidades reales",
      capabilitySectionTitleLines: ["La sensacion premium empieza con", "unas bases fiables."],
      spotlightFeatures: [
        {
          title: "Memoria por sistema que respeta tus habitos",
          description:
            "Retropa recuerda tu core preferido, modo de skin y distribucion de controles para cada consola, para que vuelvas exactamente donde empieza la comodidad.",
        },
        {
          title: "Mapeo de controles con profundidad de estudio",
          description:
            "Varios controladores fisicos pueden usarse en paralelo con mapeo de slots independiente, guardado de perfiles y remapeo en vivo durante la partida.",
        },
        {
          title: "Haptica afinada con intencion, no por azar",
          description:
            "Los packs de formas de onda admiten patrones de pulsacion/soltado por accion y comportamiento de fallback para que el feedback tactil se sienta deliberado en cada dispositivo.",
        },
        {
          title: "Cambio de core sin romper el flujo",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis y Ares comparten un modelo de runtime con comportamiento coherente.",
        },
        {
          title: "Packs de localizacion con oficio",
          description:
            "Los paquetes de idioma se cargan al instante con fallback fiable por namespace, haciendo que actualizaciones regionales o de comunidad se sientan nativas, no parcheadas.",
        },
        {
          title: "Ecosistema de packs con validacion estricta",
          description:
            "Packs visuales, de shaders, localizacion, audio y documentos siguen una unica canalizacion de importacion con comprobaciones de integridad antes de activarse en runtime.",
        },
      ],
      systemCoreMatrixTitle: "Matriz de sistema a core",
      systemCoreMatrixSubtitle: "Mapa de enrutamiento denso · memoria de core preferido por sistema",
      autoBadge: "Auto",
      romClarityTitle: "Claridad de formatos ROM",
      romClaritySubtitle: "Matriz de extensiones · importacion determinista",
      bottomCtaKicker: "Descarga Retropa",
      bottomCtaTitleLines: ["Conserva los clasicos,", "conserva la sensacion."],
      bottomCtaDescription:
        "Si te importa la autenticidad tanto como el pulido moderno, Retropa esta hecho para jugar cada dia, no solo para capturas.",
      bottomCtaDownloadLabel: "Descargar ahora",
      inspectCoreCatalogLabel: "Ver catalogo de cores",
    },
    cores: {
      heroBadge: "Catalogo de cores del emulador",
      heroTitleLines: ["Linaje de cores,", "matriz de sistemas,", "y fuente verificable."],
      heroDescription:
        "Esta pagina muestra exactamente que cores impulsan Retropa, que consolas cubre cada core y donde vive cada proyecto en GitHub. Sin afirmaciones borrosas, sin notas escondidas.",
      downloadForIOSLabel: "Descargar para iOS",
      backToHomepageLabel: "Volver al inicio",
      standardsTitle: "Estandares de compatibilidad",
      standardsRetroArchTitle: "Soporte de cadena de filtros RetroArch",
      standardsRetroArchDescription:
        "Se espera soporte completo del pipeline .slang / .slangp en el comportamiento en runtime, y se refleja en la comunicacion de capacidades del producto.",
      standardsDeltaTitle: "Compatibilidad con skins de Delta",
      standardsDeltaDescription:
        "La compatibilidad con paquetes de skins Delta se mantiene como contrato de primera clase, incluyendo fallback seguro para el layout.",
      standardsTraceabilityTitle: "Trazabilidad de la fuente",
      standardsTraceabilityDescription:
        "Los logos de core y de sistema se obtienen y versionan con registros explicitos de origen.",
      coreLogoShowcaseTitle: "Muestra de logos de cores",
      systemLogoShowcaseTitle: "Muestra de logos de sistemas",
      coreCardsKicker: "Tarjetas de cores",
      coreCardsTitle: "Cada core, mapeado y enlazado",
      romExtensionsLabel: "Extensiones ROM",
      systemMatrixKicker: "Matriz de sistemas",
      systemMatrixTitle: "Familias de consolas y cobertura de ROM",
      availableCoresLabel: "Cores disponibles",
      romCoverageLabel: "Cobertura de ROM",
    },
    seo: {
      home: {
        title: "Retropa para iOS · Skins, filtros, háptica, emulador multicore",
        description:
          "Sitio oficial de Retropa para iOS: emulador retro premium con compatibilidad de skins de Delta, estilos de botones, filtros librashader, cambio multicore, mapeo de mandos y packs de localización.",
        keywords:
          "Retropa,emulador iOS,juegos retro,skin Delta,skins personalizados,librashader,filtros slangp,mapeo de mandos,háptica,forma de onda,soporte ROM,emulador multicore",
        ogType: "website",
        ogTitle: "Retropa para iOS · Skins, filtros, háptica, emulador multicore",
        ogDescription:
          "Explora la plataforma premium de emulación en iOS con compatibilidad de skins de Delta, packs de filtros, personalización háptica y cambio de núcleo por sistema.",
        twitterTitle: "Retropa para iOS",
        twitterDescription:
          "Juego retro premium en iOS con skins, filtros, háptica, mapeo de mandos y packs de localización.",
        jsonLd: {
          featureList: [
            "Compatibilidad con skins de Delta (.deltaskin)",
            "Renderizado de skins Flat2D / SVG2D / 3D",
            "Asignación de slots de mando y perfiles por sistema",
            "Packs de formas de onda de Core Haptics y personalización por acción",
            "Pipeline de filtros librashader con presets .slangp",
            "Packs de localización con refresco en tiempo de ejecución",
          ],
        },
      },
      cores: {
        title: "Núcleos de emulación de Retropa · Catálogo de sistemas y soporte de ROM",
        description:
          "Explora los núcleos de emulación de Retropa, sistemas compatibles, matriz de extensiones ROM y repositorios upstream en GitHub en el sitio oficial para iOS.",
        keywords:
          "núcleos Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,soporte ROM,sistemas emulador",
        ogType: "website",
        ogTitle: "Catálogo de núcleos de Retropa",
        ogDescription:
          "Consulta los núcleos de emulación, la matriz de compatibilidad por sistema, la cobertura de extensiones ROM y los enlaces upstream de GitHub.",
        twitterTitle: "Catálogo de núcleos de Retropa",
        twitterDescription:
          "Página oficial con núcleos, sistemas compatibles, tipos de ROM y repositorios de origen.",
        jsonLd: {
          name: "Núcleos de emulación de Retropa",
        },
      },
      terms: {
        title: "Términos del servicio de Retropa · Página legal oficial",
        description:
          "Lee los Términos del servicio de Retropa para la app iOS: uso, licencias, compras, responsabilidades sobre contenido importado e información de contacto.",
        keywords:
          "Retropa términos,términos del servicio,legal app iOS,responsabilidades del usuario,licencias",
        ogType: "article",
        ogTitle: "Términos del servicio de Retropa",
        ogDescription: "Términos oficiales para la app iOS y el sitio web de Retropa.",
        twitterTitle: "Términos del servicio de Retropa",
        twitterDescription: "Términos oficiales para la app iOS y el sitio web de Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Política de privacidad de Retropa · Declaración oficial de datos",
        description:
          "Lee la Política de privacidad de Retropa: alcance de la información, tratamiento, almacenamiento, compartición y derechos del usuario para la app iOS y el sitio oficial.",
        keywords:
          "Retropa privacidad,política de privacidad,tratamiento de datos,derechos del usuario,privacidad app iOS",
        ogType: "article",
        ogTitle: "Política de privacidad de Retropa",
        ogDescription: "Declaración oficial de privacidad para la app iOS y el sitio web de Retropa.",
        twitterTitle: "Política de privacidad de Retropa",
        twitterDescription: "Declaración oficial de privacidad para la app iOS y el sitio web de Retropa.",
        jsonLd: {},
      },
    },
  },
  fr: {
    shared: {
      brand: {
        logoAlt: "Logo du site Retropa",
        tagline: "Studio retro iOS",
        homepageAriaLabel: "Accueil Retropa",
      },
      nav: {
        home: "Accueil",
        cores: "Cœurs",
        terms: "Conditions",
        privacy: "Confidentialité",
      },
      headerDownloadLabel: "Télécharger",
      footer: {
        description:
          "Retropa réunit l'émulation multi-cœur, la personnalisation avancée des skins, le réglage haptique par formes d'onde, des packs de filtres et des packs de localisation dans une expérience iOS soignée.",
        legalSupportHeading: "Mentions légales et support",
        emulatorCores: "Cœurs d'émulation",
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        rightsReserved: "Tous droits réservés.",
      },
      language: {
        menuLabel: "Langue",
        openMenuLabel: "Ouvrir le menu des langues",
      },
      theme: {
        menuLabel: "Thème",
        openMenuLabel: "Ouvrir le menu des thèmes",
        options: {
          system: "Système",
          light: "Clair",
          dark: "Sombre",
        },
      },
      legalDocument: {
        badge: "Juridique",
        effectiveDateLabel: "Date d'entrée en vigueur",
        onThisPageLabel: "Sur cette page",
      },
    },
    terms: {
      title: "Conditions d'utilisation",
      subtitle:
        "Ces conditions encadrent votre utilisation de Retropa, y compris l'accès à l'app, les achats et vos responsabilités concernant le contenu importé.",
    },
    privacy: {
      title: "Politique de confidentialité",
      subtitle:
        "Cette politique explique quelles informations Retropa traite, comment nous les protégeons et quels droits vous pouvez exercer concernant vos données.",
    },
    home: {
      heroBadge: "Concu pour celles et ceux qui se soucient encore de la sensation de jeu",
      heroTitleLines: ["Un meilleur foyer", "pour les jeux", "qui nous ont fait grandir."],
      heroDescription:
        "Retropa n'est pas la nostalgie en decoration. C'est une ingenierie minutieuse pour les joueurs qui connaissent le timing, la texture et la memoire des gestes. Chaque frame, chaque filtre et chaque zone tactile vise a preserver ce qui rendait ces jeux importants.",
      readCompatibilityPromise: "Lire la promesse de compatibilite",
      downloadForIOSLabel: "Telecharger pour iOS",
      compatibilityCardKicker: "Promesse de compatibilite",
      compatibilityCardTitleLines: ["Deux engagements", "non negociables."],
      compatibilityPillars: [
        {
          title: "Pile de filtres RetroArch : prise en charge complete",
          description:
            "Executez des chaines completes de shaders RetroArch avec des presets .slang / .slangp, un ordre multi-pass, des controles de parametres et un basculement stable a l'execution.",
        },
        {
          title: "Skins Delta : compatibilite totale",
          description:
            "Importez directement des paquets .deltaskin, respectez l'intention de mise en page et gardez des controles reactifs en portrait comme en paysage.",
        },
      ],
      runtimeIntegrityTitle: "Bati sur le comportement reel du runtime",
      runtimeIntegrityDescription:
        "Ce que nous annoncons ici est lie au chemin de code en production, pas a des maquettes marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "pipeline de filtres complet" },
        { value: "Delta .deltaskin", label: "compatibilite totale" },
        { value: "8 coeurs runtime", label: "basculement par systeme" },
      ],
      compatibilitySectionKicker: "La compatibilite avant le cosmetique",
      compatibilitySectionTitleLines: ["Pense pour la confiance,", "pas pour du marketing a cases."],
      logosSectionKicker: "Logos de coeurs et de systemes",
      logosSectionTitle: "Des assets officiels en mouvement",
      logosSectionDescription:
        "Les logos de coeurs et de consoles proviennent de depots officiels et de Wikimedia, puis sont normalises en PNG performants pour un rendu fluide et fiable.",
      coreShowcaseTitle: "Vitrine des coeurs d'emulation",
      systemShowcaseTitle: "Vitrine des systemes",
      capabilitySectionKicker: "Des capacites qui comptent",
      capabilitySectionTitleLines: ["Le premium commence par", "des fondations fiables."],
      spotlightFeatures: [
        {
          title: "Une memoire par systeme qui respecte vos habitudes",
          description:
            "Retropa retient votre coeur prefere, le mode de skin et la disposition des controles pour chaque console, afin que vous reveniez exactement la ou le confort commence.",
        },
        {
          title: "Mapping de manettes au niveau studio",
          description:
            "Plusieurs manettes physiques peuvent fonctionner en parallele avec un mapping de slots independant, des profils sauvegardes et un remap en direct pendant le jeu.",
        },
        {
          title: "Haptique reglee par intention, pas par hasard",
          description:
            "Les packs de formes d'onde gerent des motifs appui/relachement par action et des comportements de repli pour un retour tactile coherent sur chaque appareil.",
        },
        {
          title: "Changement de coeur sans casser le flow",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis et Ares partagent un modele runtime unique au comportement coherent.",
        },
        {
          title: "Des packs de localisation concus avec soin",
          description:
            "Les packs de langue se chargent instantanement avec un fallback de namespace fiable, pour que les mises a jour regionales ou communautaires paraissent natives.",
        },
        {
          title: "Ecosysteme de packs avec validation stricte",
          description:
            "Les packs visuels, shaders, localisation, audio et documents suivent un pipeline d'import unique avec controles d'integrite avant activation.",
        },
      ],
      systemCoreMatrixTitle: "Matrice systeme-vers-coeur",
      systemCoreMatrixSubtitle: "Carte de routage dense · memoire de coeur prefere par systeme",
      autoBadge: "Auto",
      romClarityTitle: "Clarte des formats ROM",
      romClaritySubtitle: "Matrice d'extensions · import deterministe",
      bottomCtaKicker: "Telecharger Retropa",
      bottomCtaTitleLines: ["Garder les classiques,", "garder la sensation."],
      bottomCtaDescription:
        "Si l'authenticite compte autant pour vous que le polissage moderne, Retropa est fait pour jouer au quotidien, pas seulement pour des captures.",
      bottomCtaDownloadLabel: "Telecharger maintenant",
      inspectCoreCatalogLabel: "Consulter le catalogue des coeurs",
    },
    cores: {
      heroBadge: "Catalogue des coeurs d'emulation",
      heroTitleLines: ["Lignee des coeurs,", "matrice des systemes,", "et source tracable."],
      heroDescription:
        "Cette page montre exactement quels coeurs alimentent Retropa, quelles consoles chaque coeur couvre, et ou chaque projet vit sur GitHub. Pas d'affirmations floues, pas de notes cachees.",
      downloadForIOSLabel: "Telecharger pour iOS",
      backToHomepageLabel: "Retour a l'accueil",
      standardsTitle: "Normes de compatibilite",
      standardsRetroArchTitle: "Prise en charge des chaines de filtres RetroArch",
      standardsRetroArchDescription:
        "La prise en charge complete du pipeline .slang / .slangp est attendue dans le runtime et se retrouve dans la communication des capacites produit.",
      standardsDeltaTitle: "Compatibilite des skins Delta",
      standardsDeltaDescription:
        "La compatibilite des paquets de skins Delta est maintenue comme un contrat de premier ordre, avec des replis surs pour la mise en page.",
      standardsTraceabilityTitle: "Tracabilite des sources",
      standardsTraceabilityDescription:
        "Les logos de coeurs et de systemes sont sources et versionnes avec des enregistrements d'origine explicites.",
      coreLogoShowcaseTitle: "Vitrine des logos de coeurs",
      systemLogoShowcaseTitle: "Vitrine des logos de systemes",
      coreCardsKicker: "Cartes de coeurs",
      coreCardsTitle: "Chaque coeur, cartographie et lie",
      romExtensionsLabel: "Extensions ROM",
      systemMatrixKicker: "Matrice des systemes",
      systemMatrixTitle: "Familles de consoles et couverture ROM",
      availableCoresLabel: "Coeurs disponibles",
      romCoverageLabel: "Couverture ROM",
    },
    seo: {
      home: {
        title: "Retropa pour iOS · Skins, filtres, haptique, émulateur multi-cœurs",
        description:
          "Site officiel Retropa pour iOS : émulateur rétro premium avec compatibilité skins Delta, styles de boutons, filtres librashader, bascule multi-cœur, mapping manettes et packs de localisation.",
        keywords:
          "Retropa,émulateur iOS,jeux rétro,skin Delta,skins personnalisés,librashader,filtres slangp,mapping manette,haptique,formes d'onde,ROM,émulateur multi-cœurs",
        ogType: "website",
        ogTitle: "Retropa pour iOS · Skins, filtres, haptique, émulateur multi-cœurs",
        ogDescription:
          "Découvrez la plateforme premium sur iOS : compatibilité skins Delta, packs de filtres, personnalisation haptique et bascule de cœur par système.",
        twitterTitle: "Retropa pour iOS",
        twitterDescription:
          "Jeu rétro premium sur iOS avec skins, filtres, haptique, mapping manette et packs de localisation.",
        jsonLd: {
          featureList: [
            "Compatibilité skins Delta (.deltaskin)",
            "Rendu de skins Flat2D / SVG2D / 3D",
            "Mapping des slots de manette et profils par système",
            "Packs de formes d'onde Core Haptics et personnalisation par action",
            "Pipeline de filtres librashader avec presets .slangp",
            "Packs de localisation avec rafraîchissement à l'exécution",
          ],
        },
      },
      cores: {
        title: "Cœurs d'émulation Retropa · Catalogue des systèmes et support ROM",
        description:
          "Explorez les cœurs d'émulation Retropa, les systèmes pris en charge, la matrice des extensions ROM et les dépôts GitHub upstream sur le site officiel iOS.",
        keywords:
          "cœurs Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,support ROM,systèmes émulés",
        ogType: "website",
        ogTitle: "Catalogue des cœurs Retropa",
        ogDescription:
          "Consultez les cœurs d'émulation, la matrice système, la couverture des extensions ROM et les liens upstream GitHub utilisés par Retropa.",
        twitterTitle: "Catalogue des cœurs Retropa",
        twitterDescription:
          "Page officielle dédiée aux cœurs, aux systèmes pris en charge, aux types de ROM et aux dépôts sources.",
        jsonLd: {
          name: "Cœurs d'émulation Retropa",
        },
      },
      terms: {
        title: "Conditions d'utilisation Retropa · Page légale officielle",
        description:
          "Lisez les Conditions d'utilisation Retropa pour l'app iOS : utilisation, licences, achats, responsabilités liées au contenu importé et informations de contact.",
        keywords:
          "Retropa conditions,conditions d'utilisation,légal iOS,responsabilités utilisateur,licences",
        ogType: "article",
        ogTitle: "Conditions d'utilisation Retropa",
        ogDescription: "Conditions officielles pour l'app iOS et le site Retropa.",
        twitterTitle: "Conditions d'utilisation Retropa",
        twitterDescription: "Conditions officielles pour l'app iOS et le site Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Politique de confidentialité Retropa · Déclaration officielle",
        description:
          "Lisez la Politique de confidentialité Retropa : collecte, traitement, stockage, partage des données et droits des utilisateurs pour l'app iOS et le site officiel.",
        keywords:
          "Retropa confidentialité,politique de confidentialité,traitement des données,droits utilisateur,confidentialité iOS",
        ogType: "article",
        ogTitle: "Politique de confidentialité Retropa",
        ogDescription: "Déclaration officielle de confidentialité pour l'app iOS et le site Retropa.",
        twitterTitle: "Politique de confidentialité Retropa",
        twitterDescription: "Déclaration officielle de confidentialité pour l'app iOS et le site Retropa.",
        jsonLd: {},
      },
    },
  },
  it: {
    shared: {
      brand: {
        logoAlt: "Logo del sito Retropa",
        tagline: "Studio retro per iOS",
        homepageAriaLabel: "Home di Retropa",
      },
      nav: {
        home: "Home",
        cores: "Core",
        terms: "Termini",
        privacy: "Privacy",
      },
      headerDownloadLabel: "Scarica",
      footer: {
        description:
          "Retropa unisce emulazione multi-core, personalizzazione avanzata delle skin, regolazione aptica a forme d'onda, pacchetti di filtri e pacchetti di localizzazione in un'esperienza iOS rifinita.",
        legalSupportHeading: "Legale e supporto",
        emulatorCores: "Core emulatore",
        terms: "Termini di servizio",
        privacy: "Informativa sulla privacy",
        rightsReserved: "Tutti i diritti riservati.",
      },
      language: {
        menuLabel: "Lingua",
        openMenuLabel: "Apri il menu lingua",
      },
      theme: {
        menuLabel: "Tema",
        openMenuLabel: "Apri il menu tema",
        options: {
          system: "Sistema",
          light: "Chiaro",
          dark: "Scuro",
        },
      },
      legalDocument: {
        badge: "Legale",
        effectiveDateLabel: "Data di entrata in vigore",
        onThisPageLabel: "In questa pagina",
      },
    },
    terms: {
      title: "Termini di servizio",
      subtitle:
        "Questi termini regolano l'uso di Retropa, inclusi l'accesso all'app, gli acquisti e le responsabilità dell'utente per i contenuti importati.",
    },
    privacy: {
      title: "Informativa sulla privacy",
      subtitle:
        "Questa informativa spiega quali dati Retropa tratta, come li proteggiamo e quali diritti puoi esercitare riguardo alle tue informazioni.",
    },
    home: {
      heroBadge: "Creato per chi tiene ancora a come si sentono i giochi",
      heroTitleLines: ["Una casa migliore", "per i giochi", "che ci hanno formato."],
      heroDescription:
        "Retropa non e nostalgia come decorazione. E ingegneria curata per giocatori che conoscono a memoria timing, texture e controllo. Ogni frame, filtro e target tattile e progettato per preservare cio che rendeva questi giochi importanti.",
      readCompatibilityPromise: "Leggi la promessa di compatibilita",
      downloadForIOSLabel: "Scarica per iOS",
      compatibilityCardKicker: "Promessa di compatibilita",
      compatibilityCardTitleLines: ["Due impegni", "non negoziabili."],
      compatibilityPillars: [
        {
          title: "Stack filtri RetroArch: supporto completo",
          description:
            "Esegui catene complete di shader RetroArch con preset .slang / .slangp, ordine multi-pass, controllo parametri e switching stabile a runtime.",
        },
        {
          title: "Pacchetti skin Delta: compatibilita totale",
          description:
            "Importa direttamente pacchetti .deltaskin, preserva l'intento del layout e mantieni i controlli reattivi tra verticale e orizzontale.",
        },
      ],
      runtimeIntegrityTitle: "Costruito sul comportamento reale del runtime",
      runtimeIntegrityDescription:
        "Cio che dichiariamo in questa pagina e legato al percorso di codice in produzione, non a mock da marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "pipeline filtri completa" },
        { value: "Delta .deltaskin", label: "compatibilita totale" },
        { value: "8 core runtime", label: "switch per sistema" },
      ],
      compatibilitySectionKicker: "Compatibilita prima dell'estetica",
      compatibilitySectionTitleLines: ["Costruito per la fiducia,", "non per marketing a spunte."],
      logosSectionKicker: "Loghi core e sistemi",
      logosSectionTitle: "Asset ufficiali in movimento",
      logosSectionDescription:
        "I loghi di core e console provengono da repository ufficiali e da Wikimedia, poi vengono normalizzati in PNG sicuri per le prestazioni, per un rendering fluido della pagina.",
      coreShowcaseTitle: "Vetrina dei core di emulazione",
      systemShowcaseTitle: "Vetrina dei sistemi",
      capabilitySectionKicker: "Punti di forza reali",
      capabilitySectionTitleLines: ["La sensazione premium parte da", "interni affidabili."],
      spotlightFeatures: [
        {
          title: "Memoria per sistema che rispetta le tue abitudini",
          description:
            "Retropa ricorda core preferito, modalita skin e layout dei controlli per ogni console, cosi torni esattamente dove inizia il comfort.",
        },
        {
          title: "Mapping controller con profondita da studio",
          description:
            "Piu controller fisici possono funzionare in parallelo con mapping slot indipendente, salvataggio profili e remap in tempo reale durante il gioco.",
        },
        {
          title: "Feedback aptico calibrato per intenzione",
          description:
            "I pacchetti waveform supportano pattern pressione/rilascio per azione e fallback, cosi l'aptica risulta deliberata su ogni dispositivo.",
        },
        {
          title: "Cambio core senza spezzare il ritmo",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis e Ares sono cablati in un unico modello runtime con comportamento coerente.",
        },
        {
          title: "Pacchetti di localizzazione fatti con cura",
          description:
            "I language pack si caricano all'istante con fallback affidabile per namespace, cosi gli aggiornamenti regionali o community sembrano nativi.",
        },
        {
          title: "Ecosistema pack con validazione rigorosa",
          description:
            "Pack visivi, shader, localizzazione, audio e documenti seguono un'unica pipeline di import con controlli d'integrita prima dell'attivazione a runtime.",
        },
      ],
      systemCoreMatrixTitle: "Matrice sistema-core",
      systemCoreMatrixSubtitle: "Mappa di routing densa · memoria del core preferito per sistema",
      autoBadge: "Auto",
      romClarityTitle: "Chiarezza dei formati ROM",
      romClaritySubtitle: "Matrice estensioni · import deterministico",
      bottomCtaKicker: "Scarica Retropa",
      bottomCtaTitleLines: ["Tieni i classici,", "tieni la sensazione."],
      bottomCtaDescription:
        "Se per te l'autenticita conta quanto il polish moderno, Retropa e costruito per giocare ogni giorno, non solo per screenshot.",
      bottomCtaDownloadLabel: "Scarica ora",
      inspectCoreCatalogLabel: "Vedi catalogo dei core",
    },
    cores: {
      heroBadge: "Catalogo dei core di emulazione",
      heroTitleLines: ["Lineage dei core,", "matrice dei sistemi,", "e fonte verificabile."],
      heroDescription:
        "Questa pagina mostra esattamente quali core alimentano Retropa, quali console serve ogni core e dove vive ogni progetto su GitHub. Niente affermazioni vaghe, niente note nascoste.",
      downloadForIOSLabel: "Scarica per iOS",
      backToHomepageLabel: "Torna alla home",
      standardsTitle: "Standard di compatibilita",
      standardsRetroArchTitle: "Supporto catena filtri RetroArch",
      standardsRetroArchDescription:
        "Il supporto completo del pipeline .slang / .slangp e previsto nel comportamento a runtime e si riflette nella comunicazione delle capacita prodotto.",
      standardsDeltaTitle: "Compatibilita skin Delta",
      standardsDeltaDescription:
        "La compatibilita dei pacchetti skin Delta e mantenuta come contratto di primo livello, includendo fallback sicuri per il layout.",
      standardsTraceabilityTitle: "Tracciabilita delle fonti",
      standardsTraceabilityDescription:
        "Loghi core e loghi di sistema sono reperiti e versionati con registri di origine espliciti.",
      coreLogoShowcaseTitle: "Vetrina loghi dei core",
      systemLogoShowcaseTitle: "Vetrina loghi dei sistemi",
      coreCardsKicker: "Schede core",
      coreCardsTitle: "Ogni core, mappato e collegato",
      romExtensionsLabel: "Estensioni ROM",
      systemMatrixKicker: "Matrice sistemi",
      systemMatrixTitle: "Famiglie di console e copertura ROM",
      availableCoresLabel: "Core disponibili",
      romCoverageLabel: "Copertura ROM",
    },
    seo: {
      home: {
        title: "Retropa per iOS · Skin, filtri, aptica, emulatore multi-core",
        description:
          "Sito ufficiale Retropa per iOS: emulatore retro premium con compatibilità skin Delta, stili dei pulsanti, filtri librashader, switching multi-core, mapping controller e pacchetti di localizzazione.",
        keywords:
          "Retropa,emulatore iOS,giochi retro,skin Delta,skin personalizzate,librashader,filtri slangp,mapping controller,aptica,waveform,ROM,emulatore multi-core",
        ogType: "website",
        ogTitle: "Retropa per iOS · Skin, filtri, aptica, emulatore multi-core",
        ogDescription:
          "Scopri la piattaforma premium su iOS con compatibilità skin Delta, pacchetti di filtri, personalizzazione aptica e switching del core per sistema.",
        twitterTitle: "Retropa per iOS",
        twitterDescription:
          "Retro gaming premium su iOS con skin, filtri, aptica, mapping controller e pacchetti di localizzazione.",
        jsonLd: {
          featureList: [
            "Compatibilità skin Delta (.deltaskin)",
            "Rendering skin Flat2D / SVG2D / 3D",
            "Mapping slot controller e profili per sistema",
            "Pacchetti waveform di Core Haptics e personalizzazione per azione",
            "Pipeline filtri librashader con preset .slangp",
            "Pacchetti di localizzazione con refresh a runtime",
          ],
        },
      },
      cores: {
        title: "Core di emulazione Retropa · Catalogo sistemi e supporto ROM",
        description:
          "Esplora i core di emulazione Retropa, i sistemi supportati, la matrice delle estensioni ROM e i repository upstream su GitHub nel sito ufficiale iOS.",
        keywords:
          "core Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,supporto ROM,sistemi emulati",
        ogType: "website",
        ogTitle: "Catalogo core Retropa",
        ogDescription:
          "Vedi core, matrice dei sistemi, copertura delle estensioni ROM e link upstream GitHub usati da Retropa.",
        twitterTitle: "Catalogo core Retropa",
        twitterDescription:
          "Pagina ufficiale con core, sistemi supportati, tipi di ROM e repository sorgente.",
        jsonLd: {
          name: "Core di emulazione Retropa",
        },
      },
      terms: {
        title: "Termini di servizio Retropa · Pagina legale ufficiale",
        description:
          "Leggi i Termini di servizio Retropa per l'app iOS: uso, licenze, acquisti, responsabilità sui contenuti importati e informazioni di contatto.",
        keywords:
          "Retropa termini,termini di servizio,legale iOS,responsabilità utente,licenze",
        ogType: "article",
        ogTitle: "Termini di servizio Retropa",
        ogDescription: "Termini ufficiali per l'app iOS e il sito Retropa.",
        twitterTitle: "Termini di servizio Retropa",
        twitterDescription: "Termini ufficiali per l'app iOS e il sito Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Informativa sulla privacy Retropa · Dichiarazione ufficiale",
        description:
          "Leggi l'Informativa sulla privacy Retropa: raccolta, trattamento, archiviazione, condivisione dei dati e diritti dell'utente per l'app iOS e il sito ufficiale.",
        keywords:
          "Retropa privacy,informativa privacy,trattamento dati,diritti utente,privacy iOS",
        ogType: "article",
        ogTitle: "Informativa sulla privacy Retropa",
        ogDescription: "Dichiarazione ufficiale sulla privacy per l'app iOS e il sito Retropa.",
        twitterTitle: "Informativa sulla privacy Retropa",
        twitterDescription: "Dichiarazione ufficiale sulla privacy per l'app iOS e il sito Retropa.",
        jsonLd: {},
      },
    },
  },
  ja: {
    shared: {
      brand: {
        logoAlt: "Retropa 公式サイトのロゴ",
        tagline: "iOS レトロスタジオ",
        homepageAriaLabel: "Retropa ホーム",
      },
      nav: {
        home: "ホーム",
        cores: "コア",
        terms: "利用規約",
        privacy: "プライバシー",
      },
      headerDownloadLabel: "ダウンロード",
      footer: {
        description:
          "Retropa はマルチコアエミュレーション、スキンの高度なカスタマイズ、触覚波形チューニング、フィルターパック、ローカライズパックを統合し、磨き込まれた iOS 体験に仕上げます。",
        legalSupportHeading: "法務・サポート",
        emulatorCores: "エミュレーターコア",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        rightsReserved: "無断転載を禁じます。",
      },
      language: {
        menuLabel: "言語",
        openMenuLabel: "言語メニューを開く",
      },
      theme: {
        menuLabel: "テーマ",
        openMenuLabel: "テーマメニューを開く",
        options: {
          system: "システム",
          light: "ライト",
          dark: "ダーク",
        },
      },
      legalDocument: {
        badge: "法務",
        effectiveDateLabel: "施行日",
        onThisPageLabel: "このページ",
      },
    },
    terms: {
      title: "利用規約",
      subtitle:
        "本規約は、アプリへのアクセス、購入、インポートしたコンテンツに関する利用者の責任を含め、Retropa の利用条件を定めるものです。",
    },
    privacy: {
      title: "プライバシーポリシー",
      subtitle:
        "本ポリシーは、Retropa が処理する情報の範囲、保護方法、およびあなたが行使できるデータに関する権利について説明します。",
    },
    home: {
      heroBadge: "ゲームの手触りをまだ大事にする人のために",
      heroTitleLines: ["もっといい居場所を", "あの頃のゲームに", "もう一度。"],
      heroDescription:
        "Retropaは懐かしさを飾るためのアプリではありません。タイミングや質感、操作の記憶を身体で知っているプレイヤーのための、丁寧なエンジニアリングです。1フレーム、1つのフィルター、1つのタップ領域まで、当時の価値を損なわないために設計しています。",
      readCompatibilityPromise: "互換性の約束を読む",
      downloadForIOSLabel: "iOS版を入手",
      compatibilityCardKicker: "互換性の約束",
      compatibilityCardTitleLines: ["譲れない約束を", "ふたつ。"],
      compatibilityPillars: [
        {
          title: "RetroArchフィルタースタック：完全対応",
          description:
            ".slang / .slangpプリセットによるRetroArchシェーダーチェーンをフルで実行。マルチパス順序、パラメータ制御、ランタイムでの安定切替まで対応します。",
        },
        {
          title: "Deltaスキンパッケージ：完全互換",
          description:
            "Deltaの.deltaskinパッケージをそのまま取り込み、レイアウトの意図を保ちます。縦横の切替でも操作をしっかり反応させます。",
        },
      ],
      runtimeIntegrityTitle: "実際のランタイム挙動から設計",
      runtimeIntegrityDescription:
        "このページの主張は、マーケ用の擬似挙動ではなく、本番コードパスに結び付いています。",
      highlights: [
        { value: "RetroArch .slangp", label: "フィルターのフルパイプライン" },
        { value: "Delta .deltaskin", label: "完全互換" },
        { value: "8つのランタイムコア", label: "システム別の切替" },
      ],
      compatibilitySectionKicker: "見た目より互換性",
      compatibilitySectionTitleLines: ["安心のために作る。", "チェック項目のためじゃない。"],
      logosSectionKicker: "コアとシステムのロゴ",
      logosSectionTitle: "公式アセットをきれいに動かす",
      logosSectionDescription:
        "コア/コンソールのロゴは公式リポジトリとWikimediaから取得し、ページ表示に最適化したPNGへ正規化。滑らかな描画と安定したパフォーマンスを両立します。",
      coreShowcaseTitle: "エミュレーターコア展示",
      systemShowcaseTitle: "システム展示",
      capabilitySectionKicker: "本物の強み",
      capabilitySectionTitleLines: ["プレミアムな手触りは", "信頼できる中身から。"],
      spotlightFeatures: [
        {
          title: "システムごとの記憶で、いつもの心地よさへ",
          description:
            "Retropaはコンソールごとに、好みのコア/スキンモード/操作レイアウトを記憶します。次に開いた瞬間から、ちょうど良い状態に戻れます。",
        },
        {
          title: "スタジオ級のコントローラーマッピング",
          description:
            "複数の物理コントローラーを同時に扱い、独立したスロット割り当てやプロファイル保存に対応。プレイ中のライブリマップも可能です。",
        },
        {
          title: "偶然じゃない、意図で調律した触覚",
          description:
            "Waveformパックはアクションごとの押下/解放パターンとフォールバックをサポート。デバイスが変わっても、触感が狙い通りに揃います。",
        },
        {
          title: "流れを切らないコア切替",
          description:
            "mGBA、SkyEmu、SameBoy、RusticoNES、TetaNES、LakeSnes、JGenesis、Aresを1つのランタイムモデルに統合し、一貫した挙動で扱います。",
        },
        {
          title: "手仕事のあるローカライズパック",
          description:
            "言語パックは即時ホットロード、名前空間のフォールバックも堅牢。コミュニティ/地域アップデートも、貼り付けではなくネイティブに感じられます。",
        },
        {
          title: "厳格に検証されるパックエコシステム",
          description:
            "ビジュアル、シェーダー、ローカライズ、オーディオ、ドキュメントの各パックは、単一の取り込みパイプラインで整合性チェックを行ってから有効化します。",
        },
      ],
      systemCoreMatrixTitle: "システム×コア マトリクス",
      systemCoreMatrixSubtitle: "密なルーティングマップ · システム別のコア優先設定を記憶",
      autoBadge: "自動",
      romClarityTitle: "ROM形式の明快さ",
      romClaritySubtitle: "拡張子マトリクス · 決定的なインポート挙動",
      bottomCtaKicker: "Retropaをダウンロード",
      bottomCtaTitleLines: ["名作を残す。", "感触も残す。"],
      bottomCtaDescription:
        "本物らしさと現代的な磨き込み、その両方が大事なら。Retropaはスクショ映えのためではなく、日常のプレイのために作りました。",
      bottomCtaDownloadLabel: "今すぐ入手",
      inspectCoreCatalogLabel: "コアカタログを見る",
    },
    cores: {
      heroBadge: "エミュレーターコアカタログ",
      heroTitleLines: ["コアの系譜、", "システムマトリクス、", "そして出典。"],
      heroDescription:
        "このページでは、Retropaを支えるエミュレーターコア、各コアが担当するコンソール、そして上流プロジェクトのGitHubを明示します。ぼかした表現も、隠れた注釈もありません。",
      downloadForIOSLabel: "iOS版を入手",
      backToHomepageLabel: "ホームへ戻る",
      standardsTitle: "互換性の基準",
      standardsRetroArchTitle: "RetroArchフィルターチェーン対応",
      standardsRetroArchDescription:
        ".slang / .slangpのフルパイプライン対応はランタイムの期待値であり、製品の能力表現にも一致させています。",
      standardsDeltaTitle: "Deltaスキン互換",
      standardsDeltaDescription:
        "Deltaスキンパッケージ互換は最優先の契約事項です。レイアウト安全なフォールバック挙動も含めて維持します。",
      standardsTraceabilityTitle: "出典のトレーサビリティ",
      standardsTraceabilityDescription:
        "コア/システムのロゴは、明確な出典記録とともに取得・バージョン管理しています。",
      coreLogoShowcaseTitle: "コアロゴ展示",
      systemLogoShowcaseTitle: "システムロゴ展示",
      coreCardsKicker: "コアカード",
      coreCardsTitle: "すべてのコアを、対応表とリンクで",
      romExtensionsLabel: "ROM拡張子",
      systemMatrixKicker: "システムマトリクス",
      systemMatrixTitle: "コンソール系統とROMカバー範囲",
      availableCoresLabel: "利用可能なコア",
      romCoverageLabel: "ROMカバー範囲",
    },
    seo: {
      home: {
        title: "Retropa for iOS · スキン/フィルター/触覚/マルチコア対応エミュレーター",
        description:
          "Retropa iOS 公式サイト：Delta スキン互換、ボタンスタイルのカスタマイズ、librashader フィルター、マルチコア切替、コントローラー設定、ローカライズパックを備えたプレミアムなレトロエミュレーター。",
        keywords:
          "Retropa,iOS エミュレーター,レトロゲーム,Delta スキン,deltaskin,librashader,slangp,コントローラー設定,触覚,ROM,マルチコア",
        ogType: "website",
        ogTitle: "Retropa for iOS · スキン/フィルター/触覚/マルチコア対応エミュレーター",
        ogDescription:
          "Delta スキン互換、フィルターパック、触覚カスタマイズ、システム別コア切替を備えた iOS 向けプレミアム体験をチェック。",
        twitterTitle: "Retropa for iOS",
        twitterDescription:
          "iOS でプレミアムなレトロ体験。スキン、フィルター、触覚、コントローラー設定、ローカライズパックに対応。",
        jsonLd: {
          featureList: [
            "Delta スキン互換 (.deltaskin)",
            "Flat2D / SVG2D / 3D スキンレンダリング",
            "コントローラーのスロット割り当てとシステム別プロファイル",
            "Core Haptics 波形パックとアクション別カスタマイズ",
            "librashader フィルターパイプライン（.slangp プリセット対応）",
            "ローカライズパック（ランタイム更新）",
          ],
        },
      },
      cores: {
        title: "Retropa エミュレーターコア · 対応システム/ROM カタログ",
        description:
          "Retropa が採用するエミュレーターコア、対応するゲーム機、ROM 拡張子マトリクス、上流 GitHub リポジトリを公式サイトで確認できます。",
        keywords:
          "Retropa コア,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,対応システム",
        ogType: "website",
        ogTitle: "Retropa エミュレーターコアカタログ",
        ogDescription:
          "エミュレーターコア、システム互換マトリクス、ROM カバー範囲、上流 GitHub リンクを一覧で。",
        twitterTitle: "Retropa エミュレーターコアカタログ",
        twitterDescription:
          "コア、対応システム、ROM 種別、ソースリポジトリをまとめた公式ページ。",
        jsonLd: {
          name: "Retropa エミュレーターコア",
        },
      },
      terms: {
        title: "Retropa 利用規約 · 公式法務ページ",
        description:
          "Retropa 利用規約（iOS アプリ）：利用条件、ライセンス、購入、インポートしたコンテンツに関する責任、連絡先情報を確認できます。",
        keywords:
          "Retropa 利用規約,利用条件,iOS 法務,ユーザー責任,ライセンス",
        ogType: "article",
        ogTitle: "Retropa 利用規約",
        ogDescription: "Retropa iOS アプリと公式サイトの利用規約（公式）。",
        twitterTitle: "Retropa 利用規約",
        twitterDescription: "Retropa iOS アプリと公式サイトの利用規約（公式）。",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa プライバシーポリシー · 公式データ声明",
        description:
          "Retropa プライバシーポリシー：収集する情報の範囲、取り扱い、保管、共有、データに関して行使できる権利を説明します。",
        keywords:
          "Retropa プライバシー,プライバシーポリシー,データ取り扱い,ユーザー権利,iOS",
        ogType: "article",
        ogTitle: "Retropa プライバシーポリシー",
        ogDescription: "Retropa iOS アプリと公式サイトのプライバシー声明（公式）。",
        twitterTitle: "Retropa プライバシーポリシー",
        twitterDescription: "Retropa iOS アプリと公式サイトのプライバシー声明（公式）。",
        jsonLd: {},
      },
    },
  },
  ko: {
    shared: {
      brand: {
        logoAlt: "Retropa 웹사이트 로고",
        tagline: "iOS 레트로 스튜디오",
        homepageAriaLabel: "Retropa 홈",
      },
      nav: {
        home: "홈",
        cores: "코어",
        terms: "이용약관",
        privacy: "개인정보",
      },
      headerDownloadLabel: "다운로드",
      footer: {
        description:
          "Retropa는 멀티 코어 에뮬레이션, 고급 스킨 커스터마이징, 햅틱 웨이브폼 튜닝, 필터 팩, 로컬라이제이션 팩을 하나로 묶어 완성도 높은 iOS 경험을 제공합니다.",
        legalSupportHeading: "법률 및 지원",
        emulatorCores: "에뮬레이터 코어",
        terms: "서비스 이용약관",
        privacy: "개인정보 처리방침",
        rightsReserved: "모든 권리 보유.",
      },
      language: {
        menuLabel: "언어",
        openMenuLabel: "언어 메뉴 열기",
      },
      theme: {
        menuLabel: "테마",
        openMenuLabel: "테마 메뉴 열기",
        options: {
          system: "시스템",
          light: "라이트",
          dark: "다크",
        },
      },
      legalDocument: {
        badge: "법률",
        effectiveDateLabel: "시행일",
        onThisPageLabel: "이 페이지",
      },
    },
    terms: {
      title: "서비스 이용약관",
      subtitle:
        "이 약관은 앱 접근, 구매, 가져온 콘텐츠에 대한 사용자 책임을 포함해 Retropa 사용을 규정합니다.",
    },
    privacy: {
      title: "개인정보 처리방침",
      subtitle:
        "이 방침은 Retropa가 처리하는 정보의 범위, 보호 방법, 그리고 데이터에 대해 행사할 수 있는 권리를 설명합니다.",
    },
    home: {
      heroBadge: "게임의 감각을 아직도 중요하게 여기는 사람을 위해",
      heroTitleLines: ["더 나은 보금자리", "우리를 키운 게임을", "다시 제대로."],
      heroDescription:
        "Retropa는 추억을 장식으로 쓰지 않습니다. 타이밍, 질감, 조작의 기억을 몸으로 아는 플레이어를 위한 섬세한 엔지니어링입니다. 모든 프레임, 필터, 터치 타깃을 통해 그 게임들이 왜 의미 있었는지 그대로 지켜냅니다.",
      readCompatibilityPromise: "호환성 약속 읽기",
      downloadForIOSLabel: "iOS용 다운로드",
      compatibilityCardKicker: "호환성 약속",
      compatibilityCardTitleLines: ["양보할 수 없는", "두 가지 약속."],
      compatibilityPillars: [
        {
          title: "RetroArch 필터 스택: 완전 지원",
          description:
            ".slang / .slangp 프리셋을 포함한 RetroArch 셰이더 체인을 온전히 실행합니다. 멀티패스 순서, 파라미터 제어, 런타임 안정 전환까지 지원합니다.",
        },
        {
          title: "Delta 스킨 패키지: 완전 호환",
          description:
            "Delta .deltaskin 패키지를 그대로 가져오고 레이아웃 의도를 보존합니다. 세로/가로 전환에서도 컨트롤 반응성을 유지합니다.",
        },
      ],
      runtimeIntegrityTitle: "실제 런타임 동작에서 출발",
      runtimeIntegrityDescription:
        "이 페이지의 주장들은 마케팅용 모의 동작이 아니라, 실제 프로덕션 코드 경로에 연결돼 있습니다.",
      highlights: [
        { value: "RetroArch .slangp", label: "전체 필터 파이프라인" },
        { value: "Delta .deltaskin", label: "완전 호환" },
        { value: "8 런타임 코어", label: "시스템 인지 전환" },
      ],
      compatibilitySectionKicker: "꾸밈보다 호환성",
      compatibilitySectionTitleLines: ["체크리스트 마케팅이 아니라,", "신뢰를 위해 만듭니다."],
      logosSectionKicker: "코어 및 시스템 로고",
      logosSectionTitle: "공식 에셋을 매끄럽게",
      logosSectionDescription:
        "코어/콘솔 로고는 공식 프로젝트 저장소와 Wikimedia에서 가져온 뒤, 페이지 렌더링에 안전한 PNG 에셋으로 정규화합니다. 성능과 선명함을 동시에 지킵니다.",
      coreShowcaseTitle: "에뮬레이터 코어 쇼케이스",
      systemShowcaseTitle: "시스템 쇼케이스",
      capabilitySectionKicker: "진짜 강점",
      capabilitySectionTitleLines: ["프리미엄 감각은", "신뢰할 수 있는 내부에서 시작됩니다."],
      spotlightFeatures: [
        {
          title: "시스템별 메모리로, 늘 편한 상태로",
          description:
            "Retropa는 콘솔 시스템마다 선호 코어, 스킨 모드, 컨트롤 레이아웃을 기억합니다. 다시 열면 바로 편한 지점에서 시작합니다.",
        },
        {
          title: "스튜디오급 깊이의 컨트롤러 매핑",
          description:
            "여러 물리 컨트롤러를 병렬로 사용하면서도, 슬롯별 독립 매핑과 프로필 저장을 지원합니다. 플레이 중 실시간 리맵도 가능합니다.",
        },
        {
          title: "우연이 아니라 의도로 튜닝한 햅틱",
          description:
            "웨이브폼 팩은 액션별 눌림/떼기 패턴과 폴백 동작을 지원해, 어떤 기기에서도 촉각 피드백이 의도대로 느껴지게 합니다.",
        },
        {
          title: "흐름을 끊지 않는 코어 전환",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, Ares를 하나의 런타임 모델로 연결해 일관된 동작을 제공합니다.",
        },
        {
          title: "손맛이 느껴지는 로컬라이제이션 팩",
          description:
            "언어 팩은 즉시 핫로드되며 네임스페이스 폴백도 견고합니다. 커뮤니티/지역 업데이트가 덧댄 느낌이 아니라 자연스럽게 녹아듭니다.",
        },
        {
          title: "엄격한 검증을 거치는 팩 생태계",
          description:
            "비주얼, 셰이더, 로컬라이제이션, 오디오, 문서 팩이 하나의 임포트 파이프라인을 공유하며, 런타임 활성화 전 무결성 체크를 통과해야 합니다.",
        },
      ],
      systemCoreMatrixTitle: "시스템-코어 매트릭스",
      systemCoreMatrixSubtitle: "조밀한 라우팅 맵 · 시스템별 선호 코어 기억",
      autoBadge: "자동",
      romClarityTitle: "ROM 형식 명확성",
      romClaritySubtitle: "확장자 매트릭스 · 결정적 임포트 동작",
      bottomCtaKicker: "Retropa 다운로드",
      bottomCtaTitleLines: ["클래식을 지키고,", "감각을 지키세요."],
      bottomCtaDescription:
        "진정성과 현대적 완성도를 모두 원한다면, Retropa는 스크린샷을 위한 앱이 아니라 매일의 플레이를 위해 만들어졌습니다.",
      bottomCtaDownloadLabel: "지금 다운로드",
      inspectCoreCatalogLabel: "코어 카탈로그 보기",
    },
    cores: {
      heroBadge: "에뮬레이터 코어 카탈로그",
      heroTitleLines: ["코어 계보,", "시스템 매트릭스,", "그리고 출처."],
      heroDescription:
        "이 페이지는 Retropa를 구동하는 에뮬레이터 코어, 각 코어가 담당하는 콘솔, 그리고 각 프로젝트의 GitHub 위치를 정확히 보여줍니다. 흐릿한 주장도, 숨겨진 각주도 없습니다.",
      downloadForIOSLabel: "iOS용 다운로드",
      backToHomepageLabel: "홈으로",
      standardsTitle: "호환성 기준",
      standardsRetroArchTitle: "RetroArch 필터 체인 지원",
      standardsRetroArchDescription:
        "런타임 동작에서 .slang / .slangp 전체 파이프라인 지원을 기대하며, 제품 기능 커뮤니케이션에도 그대로 반영합니다.",
      standardsDeltaTitle: "Delta 스킨 호환",
      standardsDeltaDescription:
        "Delta 스킨 패키지 호환성은 1급 계약으로 유지됩니다. 레이아웃 안전 폴백 동작까지 포함합니다.",
      standardsTraceabilityTitle: "소스 추적 가능성",
      standardsTraceabilityDescription:
        "코어 로고와 시스템 로고는 명시적인 출처 기록과 함께 수집하고 버전 관리합니다.",
      coreLogoShowcaseTitle: "코어 로고 쇼케이스",
      systemLogoShowcaseTitle: "시스템 로고 쇼케이스",
      coreCardsKicker: "코어 카드",
      coreCardsTitle: "모든 코어를, 매핑과 링크로",
      romExtensionsLabel: "ROM 확장자",
      systemMatrixKicker: "시스템 매트릭스",
      systemMatrixTitle: "콘솔 계열과 ROM 커버리지",
      availableCoresLabel: "사용 가능한 코어",
      romCoverageLabel: "ROM 커버리지",
    },
    seo: {
      home: {
        title: "Retropa iOS · 스킨, 필터, 햅틱, 멀티코어 에뮬레이터",
        description:
          "Retropa iOS 공식 사이트: Delta 스킨 호환, 버튼 스타일 커스터마이징, librashader 필터, 멀티코어 전환, 컨트롤러 매핑, 로컬라이제이션 팩을 갖춘 프리미엄 레트로 에뮬레이터.",
        keywords:
          "Retropa,iOS 에뮬레이터,레트로 게임,Delta 스킨,deltaskin,librashader,slangp,컨트롤러 매핑,햅틱,ROM,멀티코어",
        ogType: "website",
        ogTitle: "Retropa iOS · 스킨, 필터, 햅틱, 멀티코어 에뮬레이터",
        ogDescription:
          "Delta 스킨 호환, 필터 팩, 햅틱 커스터마이징, 시스템별 코어 전환을 제공하는 iOS 프리미엄 경험을 확인하세요.",
        twitterTitle: "Retropa iOS",
        twitterDescription:
          "iOS에서 스킨, 필터, 햅틱, 컨트롤러 매핑, 로컬라이제이션 팩까지 지원하는 프리미엄 레트로 경험.",
        jsonLd: {
          featureList: [
            "Delta 스킨 호환 (.deltaskin)",
            "Flat2D / SVG2D / 3D 스킨 렌더링",
            "컨트롤러 슬롯 매핑 및 시스템별 프로필",
            "Core Haptics 웨이브폼 팩 및 액션별 커스터마이징",
            "librashader 필터 파이프라인(.slangp 프리셋)",
            "로컬라이제이션 팩(런타임 갱신)",
          ],
        },
      },
      cores: {
        title: "Retropa 에뮬레이터 코어 · 시스템/ROM 지원 카탈로그",
        description:
          "Retropa가 사용하는 에뮬레이터 코어, 각 코어의 지원 시스템, ROM 확장자 매트릭스, 업스트림 GitHub 저장소를 공식 페이지에서 확인하세요.",
        keywords:
          "Retropa 코어,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,지원 시스템",
        ogType: "website",
        ogTitle: "Retropa 에뮬레이터 코어 카탈로그",
        ogDescription:
          "코어, 시스템 매트릭스, ROM 커버리지, 업스트림 GitHub 링크를 한 페이지에서 확인하세요.",
        twitterTitle: "Retropa 에뮬레이터 코어 카탈로그",
        twitterDescription:
          "코어, 지원 시스템, ROM 타입, 소스 저장소를 정리한 공식 페이지.",
        jsonLd: {
          name: "Retropa 에뮬레이터 코어",
        },
      },
      terms: {
        title: "Retropa 이용약관 · 공식 법무 페이지",
        description:
          "Retropa 이용약관(iOS 앱): 이용, 라이선스, 구매, 가져온 콘텐츠에 대한 책임, 법적 연락처 정보를 확인하세요.",
        keywords:
          "Retropa 이용약관,서비스 이용약관,iOS 법무,사용자 책임,라이선스",
        ogType: "article",
        ogTitle: "Retropa 이용약관",
        ogDescription: "Retropa iOS 앱 및 웹사이트의 공식 이용약관.",
        twitterTitle: "Retropa 이용약관",
        twitterDescription: "Retropa iOS 앱 및 웹사이트의 공식 이용약관.",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa 개인정보 처리방침 · 공식 데이터 안내",
        description:
          "Retropa 개인정보 처리방침: 수집 범위, 처리, 저장, 공유, 그리고 데이터에 대해 행사할 수 있는 권리를 iOS 앱과 공식 사이트 기준으로 설명합니다.",
        keywords:
          "Retropa 개인정보,개인정보 처리방침,데이터 처리,사용자 권리,iOS 개인정보",
        ogType: "article",
        ogTitle: "Retropa 개인정보 처리방침",
        ogDescription: "Retropa iOS 앱 및 웹사이트의 공식 개인정보 안내.",
        twitterTitle: "Retropa 개인정보 처리방침",
        twitterDescription: "Retropa iOS 앱 및 웹사이트의 공식 개인정보 안내.",
        jsonLd: {},
      },
    },
  },
  ru: {
    shared: {
      brand: {
        logoAlt: "Логотип сайта Retropa",
        tagline: "Ретро-студия для iOS",
        homepageAriaLabel: "Главная Retropa",
      },
      nav: {
        home: "Главная",
        cores: "Ядра",
        terms: "Условия",
        privacy: "Конфиденциальность",
      },
      headerDownloadLabel: "Скачать",
      footer: {
        description:
          "Retropa объединяет мульти-ядровую эмуляцию, продвинутую настройку скинов, тонкую настройку тактильной отдачи, пакеты фильтров и пакеты локализации в отполированный iOS-опыт.",
        legalSupportHeading: "Правовая информация и поддержка",
        emulatorCores: "Ядра эмуляторов",
        terms: "Условия обслуживания",
        privacy: "Политика конфиденциальности",
        rightsReserved: "Все права защищены.",
      },
      language: {
        menuLabel: "Язык",
        openMenuLabel: "Открыть меню языка",
      },
      theme: {
        menuLabel: "Тема",
        openMenuLabel: "Открыть меню темы",
        options: {
          system: "Система",
          light: "Светлая",
          dark: "Темная",
        },
      },
      legalDocument: {
        badge: "Правовая информация",
        effectiveDateLabel: "Дата вступления в силу",
        onThisPageLabel: "На этой странице",
      },
    },
    terms: {
      title: "Условия обслуживания",
      subtitle:
        "Эти условия регулируют использование Retropa, включая доступ к приложению, покупки и ответственность пользователя за импортированный контент.",
    },
    privacy: {
      title: "Политика конфиденциальности",
      subtitle:
        "Эта политика объясняет, какие данные обрабатывает Retropa, как мы их защищаем и какие права вы можете реализовать в отношении своих данных.",
    },
    home: {
      heroBadge: "Сделано для тех, кому важны ощущения от игры",
      heroTitleLines: ["Лучший дом", "для игр", "которые нас воспитали."],
      heroDescription:
        "Retropa - это не ностальгия как декор. Это аккуратная инженерия для игроков, которые помнят тайминг, фактуру и управление на уровне мышечной памяти. Каждый кадр, фильтр и тач-цель спроектированы так, чтобы сохранить то, что делало эти игры важными.",
      readCompatibilityPromise: "Читать обещание совместимости",
      downloadForIOSLabel: "Скачать для iOS",
      compatibilityCardKicker: "Обещание совместимости",
      compatibilityCardTitleLines: ["Два обещания,", "не подлежащие торгу."],
      compatibilityPillars: [
        {
          title: "Стек фильтров RetroArch: полная поддержка",
          description:
            "Запускайте полные цепочки шейдеров RetroArch с пресетами .slang / .slangp: порядок multi-pass, управление параметрами и стабильное переключение в рантайме.",
        },
        {
          title: "Пакеты скинов Delta: полная совместимость",
          description:
            "Импортируйте пакеты Delta .deltaskin напрямую, сохраняйте задумку раскладки и держите управление отзывчивым при смене портрета и ландшафта.",
        },
      ],
      runtimeIntegrityTitle: "Основано на реальном поведении рантайма",
      runtimeIntegrityDescription:
        "Заявления на этой странице привязаны к продакшн-кодпути, а не к маркетинговым макетам.",
      highlights: [
        { value: "RetroArch .slangp", label: "полный пайплайн фильтров" },
        { value: "Delta .deltaskin", label: "полная совместимость" },
        { value: "8 рантайм-ядер", label: "переключение по системе" },
      ],
      compatibilitySectionKicker: "Совместимость важнее косметики",
      compatibilitySectionTitleLines: ["Сделано для уверенности,", "а не для галочек."],
      logosSectionKicker: "Логотипы ядер и систем",
      logosSectionTitle: "Официальные ассеты в движении",
      logosSectionDescription:
        "Логотипы ядер и консолей берутся из официальных репозиториев проектов и Wikimedia, затем нормализуются в безопасные для производительности PNG-ассеты, чтобы страница рендерилась плавно.",
      coreShowcaseTitle: "Витрина ядер эмуляции",
      systemShowcaseTitle: "Витрина систем",
      capabilitySectionKicker: "Реальные возможности",
      capabilitySectionTitleLines: ["Премиальное ощущение начинается с", "надежных внутренних механизмов."],
      spotlightFeatures: [
        {
          title: "Память по системе, которая уважает ваши привычки",
          description:
            "Retropa запоминает предпочитаемое ядро, режим скина и раскладку управления для каждой консоли, чтобы вы возвращались ровно туда, где начинается комфорт.",
        },
        {
          title: "Маппинг контроллеров со студийной глубиной",
          description:
            "Несколько физических контроллеров могут работать параллельно с независимым маппингом слотов, сохранением профилей и живым ремапом во время игры.",
        },
        {
          title: "Хаптика настроена намеренно, а не случайно",
          description:
            "Паки waveform поддерживают паттерны нажатия/отпускания для каждого действия и fallback-поведение, чтобы тактильная отдача ощущалась осмысленно на любом устройстве.",
        },
        {
          title: "Переключение ядер без потери потока",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis и Ares объединены в одну рантайм-модель с согласованным поведением.",
        },
        {
          title: "Паки локализации, сделанные с ремеслом",
          description:
            "Языковые паки загружаются мгновенно с надежным fallback по неймспейсам, поэтому обновления сообщества или регионов выглядят нативно, а не как заплатка.",
        },
        {
          title: "Экосистема паков со строгой валидацией",
          description:
            "Визуальные, шейдерные, локализационные, аудио- и документные паки проходят единый импорт-пайплайн с проверкой целостности перед активацией в рантайме.",
        },
      ],
      systemCoreMatrixTitle: "Матрица систем и ядер",
      systemCoreMatrixSubtitle: "Плотная карта маршрутизации · память предпочтений ядра по системе",
      autoBadge: "Авто",
      romClarityTitle: "Понятные форматы ROM",
      romClaritySubtitle: "Матрица расширений · детерминированный импорт",
      bottomCtaKicker: "Скачать Retropa",
      bottomCtaTitleLines: ["Сохрани классику,", "сохрани ощущение."],
      bottomCtaDescription:
        "Если вам важна аутентичность так же, как современная полировка, Retropa создана для ежедневной игры, а не только для скриншотов.",
      bottomCtaDownloadLabel: "Скачать сейчас",
      inspectCoreCatalogLabel: "Открыть каталог ядер",
    },
    cores: {
      heroBadge: "Каталог ядер эмуляции",
      heroTitleLines: ["Происхождение ядер,", "матрица систем,", "и источник истины."],
      heroDescription:
        "Эта страница показывает, какие ядра эмуляции питают Retropa, какие консоли обслуживает каждое ядро и где живет каждый проект на GitHub. Никаких размытых заявлений и скрытых примечаний.",
      downloadForIOSLabel: "Скачать для iOS",
      backToHomepageLabel: "Назад на главную",
      standardsTitle: "Стандарты совместимости",
      standardsRetroArchTitle: "Поддержка цепочек фильтров RetroArch",
      standardsRetroArchDescription:
        "Полная поддержка пайплайна .slang / .slangp ожидается в поведении рантайма и отражается в коммуникации о возможностях продукта.",
      standardsDeltaTitle: "Совместимость со скинами Delta",
      standardsDeltaDescription:
        "Совместимость пакетов скинов Delta поддерживается как контракт первого класса, включая безопасное для раскладки fallback-поведение.",
      standardsTraceabilityTitle: "Прослеживаемость источников",
      standardsTraceabilityDescription:
        "Логотипы ядер и систем берутся и версионируются с явными записями об источнике.",
      coreLogoShowcaseTitle: "Витрина логотипов ядер",
      systemLogoShowcaseTitle: "Витрина логотипов систем",
      coreCardsKicker: "Карточки ядер",
      coreCardsTitle: "Каждое ядро: карта и ссылки",
      romExtensionsLabel: "Расширения ROM",
      systemMatrixKicker: "Матрица систем",
      systemMatrixTitle: "Семейства консолей и покрытие ROM",
      availableCoresLabel: "Доступные ядра",
      romCoverageLabel: "Покрытие ROM",
    },
    seo: {
      home: {
        title: "Retropa для iOS · Скины, фильтры, тактильная отдача, мульти-ядровый эмулятор",
        description:
          "Официальный сайт Retropa для iOS: премиальный ретро-эмулятор с совместимостью Delta-скинов, стилями кнопок, фильтрами librashader, переключением ядер, маппингом контроллеров и пакетами локализации.",
        keywords:
          "Retropa,iOS эмулятор,ретро игры,Delta скин,deltaskin,librashader,slangp,маппинг контроллеров,тактильная отдача,ROM,мульти-ядровый",
        ogType: "website",
        ogTitle: "Retropa для iOS · Скины, фильтры, тактильная отдача, мульти-ядровый эмулятор",
        ogDescription:
          "Премиальная эмуляция на iOS: Delta-скины, пакеты фильтров, настройка тактильной отдачи и переключение ядра по системе.",
        twitterTitle: "Retropa для iOS",
        twitterDescription:
          "Премиальный ретро-опыт на iOS: скины, фильтры, тактильная отдача, контроллеры и пакеты локализации.",
        jsonLd: {
          featureList: [
            "Совместимость со скинами Delta (.deltaskin)",
            "Рендеринг скинов Flat2D / SVG2D / 3D",
            "Слот-маппинг контроллеров и профили по системам",
            "Пакеты waveform для Core Haptics и настройка по действиям",
            "Фильтровый пайплайн librashader с пресетами .slangp",
            "Пакеты локализации с обновлением в рантайме",
          ],
        },
      },
      cores: {
        title: "Ядра эмуляции Retropa · Каталог систем и поддержка ROM",
        description:
          "Изучите ядра эмуляции Retropa, поддерживаемые системы, матрицу расширений ROM и upstream-репозитории GitHub на официальном сайте для iOS.",
        keywords:
          "ядра Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,системы эмуляции",
        ogType: "website",
        ogTitle: "Каталог ядер Retropa",
        ogDescription:
          "Список ядер, матрица систем, покрытие ROM и upstream-ссылки GitHub, которые использует Retropa.",
        twitterTitle: "Каталог ядер Retropa",
        twitterDescription:
          "Официальная страница с ядрами, поддерживаемыми системами, типами ROM и исходными репозиториями.",
        jsonLd: {
          name: "Ядра эмуляции Retropa",
        },
      },
      terms: {
        title: "Условия обслуживания Retropa · Официальная юридическая страница",
        description:
          "Прочитайте Условия обслуживания Retropa для приложения iOS: использование, лицензии, покупки, ответственность за импортированный контент и контактную информацию.",
        keywords:
          "Retropa условия,условия обслуживания,iOS юридическое,ответственность пользователя,лицензии",
        ogType: "article",
        ogTitle: "Условия обслуживания Retropa",
        ogDescription: "Официальные условия для приложения iOS и сайта Retropa.",
        twitterTitle: "Условия обслуживания Retropa",
        twitterDescription: "Официальные условия для приложения iOS и сайта Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Политика конфиденциальности Retropa · Официальная декларация",
        description:
          "Прочитайте Политику конфиденциальности Retropa: сбор, обработка, хранение, передача данных и права пользователя для приложения iOS и официального сайта.",
        keywords:
          "Retropa конфиденциальность,политика конфиденциальности,обработка данных,права пользователя,iOS",
        ogType: "article",
        ogTitle: "Политика конфиденциальности Retropa",
        ogDescription: "Официальная декларация конфиденциальности для приложения iOS и сайта Retropa.",
        twitterTitle: "Политика конфиденциальности Retropa",
        twitterDescription: "Официальная декларация конфиденциальности для приложения iOS и сайта Retropa.",
        jsonLd: {},
      },
    },
  },
  tr: {
    shared: {
      brand: {
        logoAlt: "Retropa web sitesi logosu",
        tagline: "iOS Retro Stüdyo",
        homepageAriaLabel: "Retropa ana sayfası",
      },
      nav: {
        home: "Ana Sayfa",
        cores: "Çekirdekler",
        terms: "Koşullar",
        privacy: "Gizlilik",
      },
      headerDownloadLabel: "İndir",
      footer: {
        description:
          "Retropa; çok çekirdekli emülasyon, gelişmiş skin özelleştirmesi, haptik waveform ayarı, filtre paketleri ve yerelleştirme paketlerini cilalı bir iOS deneyiminde birleştirir.",
        legalSupportHeading: "Hukuk ve destek",
        emulatorCores: "Emülatör çekirdekleri",
        terms: "Hizmet Şartları",
        privacy: "Gizlilik Politikası",
        rightsReserved: "Tüm hakları saklıdır.",
      },
      language: {
        menuLabel: "Dil",
        openMenuLabel: "Dil menüsünü aç",
      },
      theme: {
        menuLabel: "Tema",
        openMenuLabel: "Tema menüsünü aç",
        options: {
          system: "Sistem",
          light: "Açık",
          dark: "Koyu",
        },
      },
      legalDocument: {
        badge: "Hukuki",
        effectiveDateLabel: "Yürürlük tarihi",
        onThisPageLabel: "Bu sayfada",
      },
    },
    terms: {
      title: "Hizmet Şartları",
      subtitle:
        "Bu şartlar, uygulamaya erişim, satın alımlar ve içe aktarılan içeriklerden doğan kullanıcı sorumlulukları dahil olmak üzere Retropa kullanımını düzenler.",
    },
    privacy: {
      title: "Gizlilik Politikası",
      subtitle:
        "Bu politika, Retropa'nın hangi bilgileri işlediğini, onları nasıl koruduğumuzu ve verilerinizle ilgili hangi hakları kullanabileceğinizi açıklar.",
    },
    home: {
      heroBadge: "Oyunlarin hissini hala onemseyenler icin tasarlandi",
      heroTitleLines: ["Daha iyi bir yuva", "bizi buyuten oyunlara", "yeniden."],
      heroDescription:
        "Retropa, nostaljiyi sus diye kullanmaz. Zamanlama, doku ve kontrol hafizasini ezbere bilen oyuncular icin titiz bir muhendisliktir. Her kare, her filtre ve her dokunma hedefi, bu oyunlari onemli yapan seyi korumak icin tasarlanir.",
      readCompatibilityPromise: "Uyumluluk vaadini oku",
      downloadForIOSLabel: "iOS icin indir",
      compatibilityCardKicker: "Uyumluluk Vaadi",
      compatibilityCardTitleLines: ["Pazarlik konusu olmayan", "iki taahhut."],
      compatibilityPillars: [
        {
          title: "RetroArch filtre yigini: tam destek",
          description:
            ".slang / .slangp presetleriyle tam RetroArch shader zincirleri calistirin; coklu gecis sirasi, parametre kontrolleri ve calisma zamaninda kararlı gecis.",
        },
        {
          title: "Delta skin paketleri: tam uyumluluk",
          description:
            "Delta .deltaskin paketlerini dogrudan ice aktarın, yerlesim niyetini koruyun ve dikey/yatay gecislerde kontrolleri hizli tutun.",
        },
      ],
      runtimeIntegrityTitle: "Gercek runtime davranisindan insa edildi",
      runtimeIntegrityDescription:
        "Bu sayfada soylediklerimiz, pazarlama maketlerine degil, uretim kod yoluna baglidir.",
      highlights: [
        { value: "RetroArch .slangp", label: "tam filtre hattı" },
        { value: "Delta .deltaskin", label: "tam uyumluluk" },
        { value: "8 runtime cekirdegi", label: "sisteme gore gecis" },
      ],
      compatibilitySectionKicker: "Gorunumden once uyumluluk",
      compatibilitySectionTitleLines: ["Guven icin yapildi,", "tik kutucugu pazarlamasi icin degil."],
      logosSectionKicker: "Cekirdek ve sistem logolari",
      logosSectionTitle: "Resmi assetler harekette",
      logosSectionDescription:
        "Cekirdek ve konsol logolari resmi proje depolarindan ve Wikimedia'dan alinip, sayfanin akici render etmesi icin performans-guvenli PNG assetlerine normalize edilir.",
      coreShowcaseTitle: "Emulator cekirdek vitrini",
      systemShowcaseTitle: "Sistem vitrini",
      capabilitySectionKicker: "Gercek yetenekler",
      capabilitySectionTitleLines: ["Premium his", "guvenilir ic yapiyla baslar."],
      spotlightFeatures: [
        {
          title: "Aliskanliklariniza saygi duyan sistem-bazli hafiza",
          description:
            "Retropa her konsol sistemi icin tercih ettiginiz cekirdegi, skin modunu ve kontrol yerlesimini hatirlar; boylece konforun basladigi yere donersiniz.",
        },
        {
          title: "Stüdyo seviyesinde kontrolcu esleme",
          description:
            "Birden fazla fiziksel kontrolcu, bagimsiz slot esleme, profil kaydetme ve oyun sirasinda canli yeniden esleme ile paralel calisabilir.",
        },
        {
          title: "Sans eseri degil, niyetle ayarlanmis haptik",
          description:
            "Waveform paketleri eylem bazli bas/cek birak desenleri ve yedek davranislar sunar; boylece dokunsal geri bildirim her cihazda bilincli hissedilir.",
        },
        {
          title: "Akisi bozmadan cekirdek degistirme",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis ve Ares tek bir runtime modeline baglanir ve tutarli davranir.",
        },
        {
          title: "Zanaatla gelen yerellestirme paketleri",
          description:
            "Dil paketleri guvenilir namespace fallback ile aninda hot-load olur; topluluk ya da bolgesel guncellemeler yama gibi degil, yerel gibi hissettirir.",
        },
        {
          title: "Siki dogrulama ile pack ekosistemi",
          description:
            "Gorsel, shader, yerellestirme, ses ve dokuman paketleri tek bir ice aktarma hattindan gecerek runtime etkinlestirmeden once butunluk kontrolleri yapar.",
        },
      ],
      systemCoreMatrixTitle: "Sistemden cekirdege matris",
      systemCoreMatrixSubtitle: "Yogun yonlendirme haritasi · sistem bazli cekirdek tercihi hafizasi",
      autoBadge: "Oto",
      romClarityTitle: "ROM formatlarinda netlik",
      romClaritySubtitle: "Uzanti matrisi · belirleyici ice aktarma davranisi",
      bottomCtaKicker: "Retropa'yi indir",
      bottomCtaTitleLines: ["Klasikleri koru,", "hissi koru."],
      bottomCtaDescription:
        "Otantikligi modern cilayla ayni derecede onemsiyorsaniz, Retropa ekran goruntusu icin degil, her gun oynamak icin yapildi.",
      bottomCtaDownloadLabel: "Simdi indir",
      inspectCoreCatalogLabel: "Cekirdek katalogunu incele",
    },
    cores: {
      heroBadge: "Emulator cekirdek katalogu",
      heroTitleLines: ["Cekirdek soyu,", "sistem matrisi,", "ve kaynak gercegi."],
      heroDescription:
        "Bu sayfa Retropa'yi calistiran emulator cekirdeklerini, her cekirdegin hangi konsollara hizmet ettigini ve her projenin GitHub'da nerede oldugunu acikca gosterir. Bulanik iddialar yok, gizli dipnot yok.",
      downloadForIOSLabel: "iOS icin indir",
      backToHomepageLabel: "Ana sayfaya don",
      standardsTitle: "Uyumluluk standartlari",
      standardsRetroArchTitle: "RetroArch filtre zinciri destegi",
      standardsRetroArchDescription:
        ".slang / .slangp hattinin tam destegi runtime davranisinin bir parcasi olarak beklenir ve urun yetenek iletisinde de yansitilir.",
      standardsDeltaTitle: "Delta skin uyumlulugu",
      standardsDeltaDescription:
        "Delta skin paket uyumlulugu, yerlesim-guvenli fallback davranisi dahil birinci sinif bir sozlesme olarak korunur.",
      standardsTraceabilityTitle: "Kaynak izlenebilirligi",
      standardsTraceabilityDescription:
        "Cekirdek ve sistem logolari acik kaynak kayitlariyla temin edilir ve surumlenir.",
      coreLogoShowcaseTitle: "Cekirdek logo vitrini",
      systemLogoShowcaseTitle: "Sistem logo vitrini",
      coreCardsKicker: "Cekirdek kartlari",
      coreCardsTitle: "Her cekirdek, haritalandi ve baglandi",
      romExtensionsLabel: "ROM uzantilari",
      systemMatrixKicker: "Sistem matrisi",
      systemMatrixTitle: "Konsol aileleri ve ROM kapsami",
      availableCoresLabel: "Mevcut cekirdekler",
      romCoverageLabel: "ROM kapsami",
    },
    seo: {
      home: {
        title: "Retropa iOS · Skinler, filtreler, haptik, çok çekirdekli emülatör",
        description:
          "Retropa iOS resmi sitesi: Delta skin uyumluluğu, buton stili özelleştirme, librashader filtreleri, çok çekirdekli geçiş, kontrolcü eşleme ve yerelleştirme paketleriyle premium retro emülatör.",
        keywords:
          "Retropa,iOS emülatör,retro oyun,Delta skin,deltaskin,librashader,slangp,kontrolcü eşleme,haptik,ROM,çok çekirdekli",
        ogType: "website",
        ogTitle: "Retropa iOS · Skinler, filtreler, haptik, çok çekirdekli emülatör",
        ogDescription:
          "Delta skin uyumluluğu, filtre paketleri, haptik özelleştirme ve sistem bazlı çekirdek geçişiyle iOS'ta premium deneyimi keşfedin.",
        twitterTitle: "Retropa iOS",
        twitterDescription:
          "iOS'ta skin, filtre, haptik, kontrolcü eşleme ve yerelleştirme paketleriyle premium retro deneyim.",
        jsonLd: {
          featureList: [
            "Delta skin uyumluluğu (.deltaskin)",
            "Flat2D / SVG2D / 3D skin render",
            "Kontrolcü slot eşleme ve sistem bazlı profiller",
            "Core Haptics waveform paketleri ve aksiyon bazlı özelleştirme",
            "librashader filtre hattı (.slangp preset)",
            "Çalışma zamanında yenilenen yerelleştirme paketleri",
          ],
        },
      },
      cores: {
        title: "Retropa emülatör çekirdekleri · Sistem ve ROM kataloğu",
        description:
          "Retropa'nın kullandığı emülatör çekirdeklerini, her çekirdeğin desteklediği sistemleri, ROM uzantı matrisini ve upstream GitHub depolarını resmi iOS sitesinde inceleyin.",
        keywords:
          "Retropa çekirdek,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,sistem",
        ogType: "website",
        ogTitle: "Retropa çekirdek kataloğu",
        ogDescription:
          "Çekirdekler, sistem matrisi, ROM kapsami ve upstream GitHub linkleri: hepsi tek sayfada.",
        twitterTitle: "Retropa çekirdek kataloğu",
        twitterDescription:
          "Çekirdekler, desteklenen sistemler, ROM türleri ve kaynak depoları için resmi sayfa.",
        jsonLd: {
          name: "Retropa emülatör çekirdekleri",
        },
      },
      terms: {
        title: "Retropa Hizmet Şartları · Resmi yasal sayfa",
        description:
          "Retropa Hizmet Şartları'nı okuyun: iOS uygulama kullanımı, lisanslar, satın alımlar, içe aktarılan içerik sorumluluğu ve iletişim bilgileri.",
        keywords:
          "Retropa şartlar,hizmet şartları,yasal iOS,kullanıcı sorumluluğu,lisans",
        ogType: "article",
        ogTitle: "Retropa Hizmet Şartları",
        ogDescription: "Retropa iOS uygulaması ve resmi sitesi için resmi şartlar.",
        twitterTitle: "Retropa Hizmet Şartları",
        twitterDescription: "Retropa iOS uygulaması ve resmi sitesi için resmi şartlar.",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa Gizlilik Politikası · Resmi beyan",
        description:
          "Retropa Gizlilik Politikası'nı okuyun: veri kapsamı, işleme, saklama, paylaşım ve iOS uygulaması ile resmi site için kullanıcı hakları.",
        keywords:
          "Retropa gizlilik,gizlilik politikası,veri işleme,kullanıcı hakları,iOS",
        ogType: "article",
        ogTitle: "Retropa Gizlilik Politikası",
        ogDescription: "Retropa iOS uygulaması ve resmi sitesi için resmi gizlilik beyanı.",
        twitterTitle: "Retropa Gizlilik Politikası",
        twitterDescription: "Retropa iOS uygulaması ve resmi sitesi için resmi gizlilik beyanı.",
        jsonLd: {},
      },
    },
  },
  "pt-BR": {
    shared: {
      brand: {
        logoAlt: "Logo do site da Retropa",
        tagline: "Estúdio retro para iOS",
        homepageAriaLabel: "Página inicial da Retropa",
      },
      nav: {
        home: "Início",
        cores: "Núcleos",
        terms: "Termos",
        privacy: "Privacidade",
      },
      headerDownloadLabel: "Baixar",
      footer: {
        description:
          "Retropa combina emulação multi-core, personalização avançada de skins, ajuste de háptica por formas de onda, packs de filtros e packs de localização em uma experiência iOS polida.",
        legalSupportHeading: "Jurídico e suporte",
        emulatorCores: "Núcleos do emulador",
        terms: "Termos de serviço",
        privacy: "Política de privacidade",
        rightsReserved: "Todos os direitos reservados.",
      },
      language: {
        menuLabel: "Idioma",
        openMenuLabel: "Abrir o menu de idioma",
      },
      theme: {
        menuLabel: "Tema",
        openMenuLabel: "Abrir o menu de tema",
        options: {
          system: "Sistema",
          light: "Claro",
          dark: "Escuro",
        },
      },
      legalDocument: {
        badge: "Jurídico",
        effectiveDateLabel: "Data de vigência",
        onThisPageLabel: "Nesta página",
      },
    },
    terms: {
      title: "Termos de serviço",
      subtitle:
        "Estes termos regem o uso do Retropa, incluindo acesso ao app, compras e responsabilidades do usuário sobre conteúdo importado.",
    },
    privacy: {
      title: "Política de privacidade",
      subtitle:
        "Esta política explica quais informações o Retropa processa, como as protegemos e quais direitos você pode exercer sobre seus dados.",
    },
    home: {
      heroBadge: "Feito para quem ainda se importa com como os jogos se sentem",
      heroTitleLines: ["Um lar melhor", "para os jogos", "que criaram a gente."],
      heroDescription:
        "Retropa nao e nostalgia como decoracao. E engenharia cuidadosa para jogadores que conhecem timing, textura e memoria de controle de coracao. Cada frame, filtro e alvo de toque e desenhado para preservar o que fez esses jogos importarem.",
      readCompatibilityPromise: "Ler promessa de compatibilidade",
      downloadForIOSLabel: "Baixar para iOS",
      compatibilityCardKicker: "Promessa de compatibilidade",
      compatibilityCardTitleLines: ["Dois compromissos", "inegociaveis."],
      compatibilityPillars: [
        {
          title: "Pilha de filtros RetroArch: suporte total",
          description:
            "Rode cadeias completas de shaders RetroArch com presets .slang / .slangp, ordenacao multi-pass, controles de parametros e troca estavel em runtime.",
        },
        {
          title: "Skins do Delta: compatibilidade total",
          description:
            "Importe pacotes .deltaskin do Delta diretamente, preserve a intencao do layout e mantenha os controles responsivos em transicoes retrato/paisagem.",
        },
      ],
      runtimeIntegrityTitle: "Baseado no comportamento real do runtime",
      runtimeIntegrityDescription:
        "O que afirmamos nesta pagina esta ligado ao caminho de codigo em producao, nao a simulacoes de marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "pipeline completo de filtros" },
        { value: "Delta .deltaskin", label: "compatibilidade total" },
        { value: "8 cores em runtime", label: "troca por sistema" },
      ],
      compatibilitySectionKicker: "Compatibilidade antes de cosmetica",
      compatibilitySectionTitleLines: ["Feito para confianca,", "nao para checklist de marketing."],
      logosSectionKicker: "Logos de core e sistema",
      logosSectionTitle: "Assets oficiais em movimento",
      logosSectionDescription:
        "Logos de cores e consoles sao obtidos de repositorios oficiais e da Wikimedia, depois normalizados em PNGs seguros para performance, para um render suave da pagina.",
      coreShowcaseTitle: "Vitrine de cores do emulador",
      systemShowcaseTitle: "Vitrine de sistemas",
      capabilitySectionKicker: "Capacidades de verdade",
      capabilitySectionTitleLines: ["A sensacao premium comeca com", "internos confiaveis."],
      spotlightFeatures: [
        {
          title: "Memoria por sistema que respeita seus habitos",
          description:
            "Retropa lembra seu core preferido, modo de skin e layout de controles para cada console, para voce voltar exatamente onde o conforto comeca.",
        },
        {
          title: "Mapeamento de controles com profundidade de estudio",
          description:
            "Varios controles fisicos podem rodar em paralelo com mapeamento de slots independente, salvamento de perfis e remapeamento ao vivo durante o jogo.",
        },
        {
          title: "Haptics ajustados por intencao, nao por acaso",
          description:
            "Packs de waveform suportam padroes de pressionar/soltar por acao e comportamento de fallback para que o feedback tatil pareca deliberado em qualquer dispositivo.",
        },
        {
          title: "Troca de core sem quebrar o fluxo",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis e Ares estao ligados a um unico modelo de runtime com comportamento coerente.",
        },
        {
          title: "Packs de localizacao com capricho",
          description:
            "Packs de idioma hot-load instantaneamente com fallback confiavel por namespace, deixando atualizacoes regionais ou da comunidade com cara nativa.",
        },
        {
          title: "Ecossistema de packs com validacao rigorosa",
          description:
            "Packs visuais, shaders, localizacao, audio e documentos seguem um unico pipeline de importacao com verificacoes de integridade antes de ativar em runtime.",
        },
      ],
      systemCoreMatrixTitle: "Matriz de sistema para core",
      systemCoreMatrixSubtitle: "Mapa de roteamento denso · memoria de core preferido por sistema",
      autoBadge: "Auto",
      romClarityTitle: "Clareza de formatos ROM",
      romClaritySubtitle: "Matriz de extensoes · importacao deterministica",
      bottomCtaKicker: "Baixar Retropa",
      bottomCtaTitleLines: ["Guarde os classicos,", "guarde a sensacao."],
      bottomCtaDescription:
        "Se autenticidade importa tanto quanto acabamento moderno, Retropa foi feito para o jogo do dia a dia, nao so para screenshots.",
      bottomCtaDownloadLabel: "Baixar agora",
      inspectCoreCatalogLabel: "Ver catalogo de cores",
    },
    cores: {
      heroBadge: "Catalogo de cores do emulador",
      heroTitleLines: ["Linagem de cores,", "matriz de sistemas,", "e fonte de verdade."],
      heroDescription:
        "Esta pagina mostra exatamente quais cores movem o Retropa, quais consoles cada core atende e onde cada projeto vive no GitHub. Sem promessas nebulosas, sem rodapes escondidos.",
      downloadForIOSLabel: "Baixar para iOS",
      backToHomepageLabel: "Voltar ao inicio",
      standardsTitle: "Padroes de compatibilidade",
      standardsRetroArchTitle: "Suporte a cadeia de filtros RetroArch",
      standardsRetroArchDescription:
        "Suporte completo ao pipeline .slang / .slangp e esperado no comportamento em runtime e refletido na comunicacao de capacidades do produto.",
      standardsDeltaTitle: "Compatibilidade de skins Delta",
      standardsDeltaDescription:
        "A compatibilidade com pacotes de skins Delta e mantida como um contrato de primeira classe, incluindo fallback seguro de layout.",
      standardsTraceabilityTitle: "Rastreabilidade de fontes",
      standardsTraceabilityDescription:
        "Logos de core e de sistema sao obtidos e versionados com registros explicitos de origem.",
      coreLogoShowcaseTitle: "Vitrine de logos de cores",
      systemLogoShowcaseTitle: "Vitrine de logos de sistemas",
      coreCardsKicker: "Cartoes de cores",
      coreCardsTitle: "Cada core, mapeado e linkado",
      romExtensionsLabel: "Extensoes de ROM",
      systemMatrixKicker: "Matriz de sistemas",
      systemMatrixTitle: "Familias de consoles e cobertura de ROM",
      availableCoresLabel: "Cores disponiveis",
      romCoverageLabel: "Cobertura de ROM",
    },
    seo: {
      home: {
        title: "Retropa para iOS · Skins, filtros, háptica, emulador multi-core",
        description:
          "Site oficial do Retropa para iOS: emulador retro premium com compatibilidade de skins do Delta, estilos de botões, filtros librashader, troca multi-core, mapeamento de controles e packs de localização.",
        keywords:
          "Retropa,emulador iOS,jogos retro,skin Delta,deltaskin,librashader,slangp,mapeamento de controle,háptica,waveform,ROM,multi-core",
        ogType: "website",
        ogTitle: "Retropa para iOS · Skins, filtros, háptica, emulador multi-core",
        ogDescription:
          "Confira a experiência premium no iOS: skins do Delta, packs de filtros, personalização háptica e troca de núcleo por sistema.",
        twitterTitle: "Retropa para iOS",
        twitterDescription:
          "Retro premium no iOS com skins, filtros, háptica, mapeamento de controles e packs de localização.",
        jsonLd: {
          featureList: [
            "Compatibilidade com skins do Delta (.deltaskin)",
            "Renderização de skins Flat2D / SVG2D / 3D",
            "Mapeamento de slots de controle e perfis por sistema",
            "Packs de waveform do Core Haptics e personalização por ação",
            "Pipeline de filtros librashader com presets .slangp",
            "Packs de localização com atualização em runtime",
          ],
        },
      },
      cores: {
        title: "Núcleos de emulação Retropa · Catálogo de sistemas e suporte de ROM",
        description:
          "Explore os núcleos de emulação do Retropa, sistemas suportados, matriz de extensões ROM e repositórios upstream no GitHub no site oficial para iOS.",
        keywords:
          "núcleos Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,sistemas",
        ogType: "website",
        ogTitle: "Catálogo de núcleos do Retropa",
        ogDescription:
          "Veja núcleos, matriz de sistemas, cobertura de extensões ROM e links upstream do GitHub usados pelo Retropa.",
        twitterTitle: "Catálogo de núcleos do Retropa",
        twitterDescription:
          "Página oficial com núcleos, sistemas suportados, tipos de ROM e repositórios de origem.",
        jsonLd: {
          name: "Núcleos de emulação Retropa",
        },
      },
      terms: {
        title: "Termos de serviço do Retropa · Página jurídica oficial",
        description:
          "Leia os Termos de serviço do Retropa para o app iOS: uso, licenças, compras, responsabilidades sobre conteúdo importado e informações de contato.",
        keywords:
          "Retropa termos,termos de serviço,jurídico iOS,responsabilidade do usuário,licenças",
        ogType: "article",
        ogTitle: "Termos de serviço do Retropa",
        ogDescription: "Termos oficiais para o app iOS e o site do Retropa.",
        twitterTitle: "Termos de serviço do Retropa",
        twitterDescription: "Termos oficiais para o app iOS e o site do Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Política de privacidade do Retropa · Declaração oficial",
        description:
          "Leia a Política de privacidade do Retropa: escopo das informações, tratamento, armazenamento, compartilhamento e direitos do usuário para o app iOS e o site oficial.",
        keywords:
          "Retropa privacidade,política de privacidade,tratamento de dados,direitos do usuário,privacidade iOS",
        ogType: "article",
        ogTitle: "Política de privacidade do Retropa",
        ogDescription: "Declaração oficial de privacidade para o app iOS e o site do Retropa.",
        twitterTitle: "Política de privacidade do Retropa",
        twitterDescription: "Declaração oficial de privacidade para o app iOS e o site do Retropa.",
        jsonLd: {},
      },
    },
  },
  vi: {
    shared: {
      brand: {
        logoAlt: "Logo trang web Retropa",
        tagline: "Studio retro cho iOS",
        homepageAriaLabel: "Trang chủ Retropa",
      },
      nav: {
        home: "Trang chủ",
        cores: "Core",
        terms: "Điều khoản",
        privacy: "Quyền riêng tư",
      },
      headerDownloadLabel: "Tải về",
      footer: {
        description:
          "Retropa kết hợp giả lập đa core, tùy biến skin nâng cao, tinh chỉnh rung theo waveform, các gói bộ lọc và gói bản địa hóa thành một trải nghiệm iOS được trau chuốt.",
        legalSupportHeading: "Pháp lý và hỗ trợ",
        emulatorCores: "Core giả lập",
        terms: "Điều khoản dịch vụ",
        privacy: "Chính sách quyền riêng tư",
        rightsReserved: "Mọi quyền được bảo lưu.",
      },
      language: {
        menuLabel: "Ngôn ngữ",
        openMenuLabel: "Mở menu ngôn ngữ",
      },
      theme: {
        menuLabel: "Chủ đề",
        openMenuLabel: "Mở menu chủ đề",
        options: {
          system: "Hệ thống",
          light: "Sáng",
          dark: "Tối",
        },
      },
      legalDocument: {
        badge: "Pháp lý",
        effectiveDateLabel: "Ngày có hiệu lực",
        onThisPageLabel: "Trong trang này",
      },
    },
    terms: {
      title: "Điều khoản dịch vụ",
      subtitle:
        "Các điều khoản này quy định việc bạn sử dụng Retropa, bao gồm truy cập ứng dụng, mua hàng và trách nhiệm của người dùng đối với nội dung được nhập.",
    },
    privacy: {
      title: "Chính sách quyền riêng tư",
      subtitle:
        "Chính sách này giải thích Retropa xử lý những thông tin nào, cách chúng tôi bảo vệ chúng và các quyền bạn có thể thực hiện đối với dữ liệu của mình.",
    },
    home: {
      heroBadge: "Danh cho nhung nguoi van quan tam game cam nhu the nao",
      heroTitleLines: ["Mot mai nha tot hon", "cho nhung tua game", "da nuoi lon chung ta."],
      heroDescription:
        "Retropa khong phai la noi nho de trang tri. Day la ky thuat duoc chau chuot cho nhung nguoi choi nho ro timing, cam giac va thao tac bang tri nho co bap. Moi frame, bo loc va diem cham deu duoc thiet ke de giu nguyen dieu lam nen gia tri cua nhung tro choi nay.",
      readCompatibilityPromise: "Doc cam ket tuong thich",
      downloadForIOSLabel: "Tai cho iOS",
      compatibilityCardKicker: "Cam ket tuong thich",
      compatibilityCardTitleLines: ["Hai cam ket", "khong thoa hiep."],
      compatibilityPillars: [
        {
          title: "Ngan xep bo loc RetroArch: ho tro day du",
          description:
            "Chay tron ven chuoi shader RetroArch voi preset .slang / .slangp: thu tu multi-pass, dieu khien tham so va chuyen doi on dinh ngay trong luc chay.",
        },
        {
          title: "Goi skin Delta: tuong thich hoan toan",
          description:
            "Nhap truc tiep goi .deltaskin cua Delta, giu dung y do bo cuc va dam bao nut bam nhay trong khi chuyen doc/ngang.",
        },
      ],
      runtimeIntegrityTitle: "Xay tren hanh vi runtime that",
      runtimeIntegrityDescription:
        "Nhung dieu chung toi noi tren trang nay gan voi code path san xuat, khong phai mo phong danh cho marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "pipeline bo loc day du" },
        { value: "Delta .deltaskin", label: "tuong thich hoan toan" },
        { value: "8 core runtime", label: "chuyen doi theo he may" },
      ],
      compatibilitySectionKicker: "Tuong thich truoc, trang tri sau",
      compatibilitySectionTitleLines: ["Xay de tin tuong,", "khong phai de tich o."],
      logosSectionKicker: "Logo core va he may",
      logosSectionTitle: "Tai san chinh thong dang chay",
      logosSectionDescription:
        "Logo core va console duoc lay tu kho chinh thuc cua du an va Wikimedia, sau do chuan hoa thanh PNG an toan ve hieu nang de trang render muot ma.",
      coreShowcaseTitle: "Trinh dien core gia lap",
      systemShowcaseTitle: "Trinh dien he may",
      capabilitySectionKicker: "Nang luc that",
      capabilitySectionTitleLines: ["Cam giac cao cap bat dau tu", "noi luc dang tin."],
      spotlightFeatures: [
        {
          title: "Ghi nho theo he may, dung thoi quen cua ban",
          description:
            "Retropa nho core ua thich, che do skin va bo cuc dieu khien cho tung he console, de ban quay lai dung noi cam thay thoai mai nhat.",
        },
        {
          title: "Gan nut voi do sau cap studio",
          description:
            "Nhieu tay cam vat ly co the chay song song voi mapping slot doc lap, luu profile va remap truc tiep trong luc choi.",
        },
        {
          title: "Haptics duoc can chinh bang y do",
          description:
            "Waveform pack ho tro mau nhan/tha theo hanh dong va co che fallback, giup phan hoi xuc giac luon co chu y tren moi thiet bi.",
        },
        {
          title: "Doi core khong cat dut mach choi",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis va Ares duoc ket noi trong mot mo hinh runtime thong nhat voi hanh vi mach lac.",
        },
        {
          title: "Goi ngon ngu duoc lam co nghe",
          description:
            "Language pack hot-load ngay lap tuc voi fallback namespace dang tin, de cap nhat khu vuc hoac cong dong cam thay tu nhien, khong nhu dan va.",
        },
        {
          title: "He sinh thai pack voi kiem dinh nghiem ngat",
          description:
            "Pack hinh anh, shader, ngon ngu, am thanh va tai lieu dung chung mot pipeline nhap voi kiem tra toan ven truoc khi kich hoat.",
        },
      ],
      systemCoreMatrixTitle: "Ma tran he may - core",
      systemCoreMatrixSubtitle: "Ban do dinh tuyen day dac · nho core ua thich theo he",
      autoBadge: "Tu dong",
      romClarityTitle: "Ro rang dinh dang ROM",
      romClaritySubtitle: "Ma tran duoi file · hanh vi import nhat quan",
      bottomCtaKicker: "Tai Retropa",
      bottomCtaTitleLines: ["Giu lai kinh dien,", "giu lai cam giac."],
      bottomCtaDescription:
        "Neu ban coi trong tinh xac thuc cung nhu do chau chuot hien dai, Retropa duoc tao ra cho viec choi moi ngay, khong chi de chup anh.",
      bottomCtaDownloadLabel: "Tai ngay",
      inspectCoreCatalogLabel: "Xem danh muc core",
    },
    cores: {
      heroBadge: "Danh muc core gia lap",
      heroTitleLines: ["Dong doi core,", "ma tran he may,", "va nguon goc ro rang."],
      heroDescription:
        "Trang nay cho thay chinh xac core nao van hanh Retropa, moi core phuc vu he console nao, va noi moi du an dang song tren GitHub. Khong tu mo, khong chu thich an.",
      downloadForIOSLabel: "Tai cho iOS",
      backToHomepageLabel: "Ve trang chu",
      standardsTitle: "Tieu chuan tuong thich",
      standardsRetroArchTitle: "Ho tro chuoi bo loc RetroArch",
      standardsRetroArchDescription:
        "Ho tro day du pipeline .slang / .slangp duoc ky vong trong hanh vi runtime va duoc phan anh trong cach mo ta tinh nang san pham.",
      standardsDeltaTitle: "Tuong thich skin Delta",
      standardsDeltaDescription:
        "Tuong thich goi skin Delta duoc duy tri nhu mot cam ket hang dau, bao gom ca hanh vi fallback an toan cho bo cuc.",
      standardsTraceabilityTitle: "Truy xuat nguon",
      standardsTraceabilityDescription:
        "Logo core va logo he may duoc lay va quan ly phien ban voi ho so nguon goc ro rang.",
      coreLogoShowcaseTitle: "Trinh dien logo core",
      systemLogoShowcaseTitle: "Trinh dien logo he may",
      coreCardsKicker: "The core",
      coreCardsTitle: "Moi core, duoc map va gan link",
      romExtensionsLabel: "Duoi ROM",
      systemMatrixKicker: "Ma tran he may",
      systemMatrixTitle: "Ho console va do phu ROM",
      availableCoresLabel: "Core hien co",
      romCoverageLabel: "Do phu ROM",
    },
    seo: {
      home: {
        title: "Retropa cho iOS · Skin, bộ lọc, haptic, giả lập đa core",
        description:
          "Trang web chính thức Retropa cho iOS: trình giả lập retro cao cấp với tương thích skin Delta, tùy biến nút bấm, bộ lọc librashader, chuyển core, gán tay cầm và gói bản địa hóa.",
        keywords:
          "Retropa,giả lập iOS,game retro,skin Delta,deltaskin,librashader,slangp,gán tay cầm,haptic,ROM,đa core",
        ogType: "website",
        ogTitle: "Retropa cho iOS · Skin, bộ lọc, haptic, giả lập đa core",
        ogDescription:
          "Khám phá trải nghiệm premium trên iOS: skin Delta, gói bộ lọc, tinh chỉnh haptic và chuyển core theo hệ máy.",
        twitterTitle: "Retropa cho iOS",
        twitterDescription:
          "Trải nghiệm retro premium trên iOS với skin, bộ lọc, haptic, gán tay cầm và gói bản địa hóa.",
        jsonLd: {
          featureList: [
            "Tương thích skin Delta (.deltaskin)",
            "Render skin Flat2D / SVG2D / 3D",
            "Gán slot tay cầm và hồ sơ theo hệ máy",
            "Gói waveform Core Haptics và tùy biến theo hành động",
            "Pipeline bộ lọc librashader với preset .slangp",
            "Gói bản địa hóa với làm mới khi chạy",
          ],
        },
      },
      cores: {
        title: "Danh mục core giả lập Retropa · Hệ máy & ROM",
        description:
          "Xem danh sách core giả lập Retropa, hệ máy được hỗ trợ, ma trận đuôi file ROM và các kho upstream trên GitHub ngay trên trang iOS chính thức.",
        keywords:
          "core Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,hệ máy",
        ogType: "website",
        ogTitle: "Danh mục core Retropa",
        ogDescription:
          "Core, ma trận hệ máy, độ phủ ROM và liên kết upstream GitHub mà Retropa sử dụng - gói gọn trong một trang.",
        twitterTitle: "Danh mục core Retropa",
        twitterDescription:
          "Trang chính thức về core, hệ máy hỗ trợ, loại ROM và kho nguồn.",
        jsonLd: {
          name: "Core giả lập Retropa",
        },
      },
      terms: {
        title: "Điều khoản dịch vụ Retropa · Trang pháp lý chính thức",
        description:
          "Đọc Điều khoản dịch vụ Retropa cho ứng dụng iOS: cách sử dụng, giấy phép, mua hàng, trách nhiệm với nội dung nhập vào và thông tin liên hệ.",
        keywords:
          "Retropa điều khoản,điều khoản dịch vụ,pháp lý iOS,trách nhiệm người dùng,giấy phép",
        ogType: "article",
        ogTitle: "Điều khoản dịch vụ Retropa",
        ogDescription: "Điều khoản chính thức cho ứng dụng iOS và trang web Retropa.",
        twitterTitle: "Điều khoản dịch vụ Retropa",
        twitterDescription: "Điều khoản chính thức cho ứng dụng iOS và trang web Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Chính sách quyền riêng tư Retropa · Tuyên bố chính thức",
        description:
          "Đọc Chính sách quyền riêng tư Retropa: phạm vi thông tin, xử lý, lưu trữ, chia sẻ và các quyền người dùng cho ứng dụng iOS và trang web chính thức.",
        keywords:
          "Retropa riêng tư,chính sách quyền riêng tư,xử lý dữ liệu,quyền người dùng,riêng tư iOS",
        ogType: "article",
        ogTitle: "Chính sách quyền riêng tư Retropa",
        ogDescription: "Tuyên bố quyền riêng tư chính thức cho ứng dụng iOS và trang web Retropa.",
        twitterTitle: "Chính sách quyền riêng tư Retropa",
        twitterDescription: "Tuyên bố quyền riêng tư chính thức cho ứng dụng iOS và trang web Retropa.",
        jsonLd: {},
      },
    },
  },
  id: {
    shared: {
      brand: {
        logoAlt: "Logo situs Retropa",
        tagline: "Studio retro untuk iOS",
        homepageAriaLabel: "Beranda Retropa",
      },
      nav: {
        home: "Beranda",
        cores: "Inti",
        terms: "Ketentuan",
        privacy: "Privasi",
      },
      headerDownloadLabel: "Unduh",
      footer: {
        description:
          "Retropa menggabungkan emulasi multi-core, kustomisasi skin tingkat lanjut, penyetelan haptics berbasis waveform, paket filter, dan paket lokalisasi dalam pengalaman iOS yang rapi.",
        legalSupportHeading: "Hukum dan dukungan",
        emulatorCores: "Inti emulator",
        terms: "Ketentuan Layanan",
        privacy: "Kebijakan Privasi",
        rightsReserved: "Semua hak dilindungi.",
      },
      language: {
        menuLabel: "Bahasa",
        openMenuLabel: "Buka menu bahasa",
      },
      theme: {
        menuLabel: "Tema",
        openMenuLabel: "Buka menu tema",
        options: {
          system: "Sistem",
          light: "Terang",
          dark: "Gelap",
        },
      },
      legalDocument: {
        badge: "Hukum",
        effectiveDateLabel: "Tanggal berlaku",
        onThisPageLabel: "Di halaman ini",
      },
    },
    terms: {
      title: "Ketentuan Layanan",
      subtitle:
        "Ketentuan ini mengatur penggunaan Retropa, termasuk akses aplikasi, pembelian, dan tanggung jawab pengguna atas konten yang diimpor.",
    },
    privacy: {
      title: "Kebijakan Privasi",
      subtitle:
        "Kebijakan ini menjelaskan informasi apa yang diproses Retropa, bagaimana kami melindunginya, dan hak apa yang dapat Anda gunakan terkait data Anda.",
    },
    home: {
      heroBadge: "Dibuat untuk orang yang masih peduli rasa permainan",
      heroTitleLines: ["Rumah yang lebih baik", "untuk game", "yang membesarkan kita."],
      heroDescription:
        "Retropa bukan nostalgia sebagai dekorasi. Ini adalah rekayasa yang rapi untuk pemain yang hafal timing, tekstur, dan memori kontrol. Setiap frame, filter, dan target sentuh dirancang untuk menjaga apa yang membuat game-game ini berarti.",
      readCompatibilityPromise: "Baca janji kompatibilitas",
      downloadForIOSLabel: "Unduh untuk iOS",
      compatibilityCardKicker: "Janji kompatibilitas",
      compatibilityCardTitleLines: ["Dua komitmen", "yang tidak bisa ditawar."],
      compatibilityPillars: [
        {
          title: "Stack filter RetroArch: dukungan penuh",
          description:
            "Jalankan rantai shader RetroArch lengkap dengan preset .slang / .slangp, urutan multi-pass, kontrol parameter, dan switching yang stabil saat runtime.",
        },
        {
          title: "Paket skin Delta: kompatibilitas penuh",
          description:
            "Impor paket .deltaskin Delta langsung, pertahankan niat layout, dan jaga kontrol tetap responsif saat berpindah portrait dan landscape.",
        },
      ],
      runtimeIntegrityTitle: "Dibangun dari perilaku runtime yang nyata",
      runtimeIntegrityDescription:
        "Apa yang kami klaim di halaman ini terikat ke jalur kode produksi, bukan mock perilaku khusus marketing.",
      highlights: [
        { value: "RetroArch .slangp", label: "pipeline filter lengkap" },
        { value: "Delta .deltaskin", label: "kompatibilitas penuh" },
        { value: "8 core runtime", label: "switch sesuai sistem" },
      ],
      compatibilitySectionKicker: "Kompatibilitas sebelum kosmetik",
      compatibilitySectionTitleLines: ["Dibuat untuk percaya diri,", "bukan marketing centang."],
      logosSectionKicker: "Logo core dan sistem",
      logosSectionTitle: "Aset resmi yang bergerak",
      logosSectionDescription:
        "Logo core dan konsol diambil dari repo resmi proyek dan Wikimedia, lalu dinormalisasi menjadi aset PNG yang aman untuk performa agar halaman dirender mulus.",
      coreShowcaseTitle: "Pameran core emulator",
      systemShowcaseTitle: "Pameran sistem",
      capabilitySectionKicker: "Kemampuan yang nyata",
      capabilitySectionTitleLines: ["Rasa premium dimulai dari", "bagian dalam yang andal."],
      spotlightFeatures: [
        {
          title: "Memori per sistem yang menghormati kebiasaanmu",
          description:
            "Retropa mengingat core pilihan, mode skin, dan layout kontrol untuk tiap sistem konsol, jadi kamu kembali tepat di titik nyaman.",
        },
        {
          title: "Pemetaan controller dengan kedalaman level studio",
          description:
            "Beberapa controller fisik bisa berjalan paralel dengan mapping slot independen, simpan profil, dan remap langsung saat bermain.",
        },
        {
          title: "Haptics dituning dengan niat, bukan kebetulan",
          description:
            "Paket waveform mendukung pola tekan/lepas per aksi dan fallback, agar umpan balik taktil terasa disengaja di tiap perangkat.",
        },
        {
          title: "Switch core tanpa memutus flow",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, dan Ares terhubung dalam satu model runtime dengan perilaku yang konsisten.",
        },
        {
          title: "Paket lokalisasi yang dibuat dengan craft",
          description:
            "Language pack hot-load seketika dengan fallback namespace yang andal, membuat update komunitas/region terasa native, bukan tempelan.",
        },
        {
          title: "Ekosistem pack dengan validasi ketat",
          description:
            "Pack visual, shader, lokalisasi, audio, dan dokumen mengikuti satu pipeline impor dengan pemeriksaan integritas sebelum aktif di runtime.",
        },
      ],
      systemCoreMatrixTitle: "Matriks sistem ke core",
      systemCoreMatrixSubtitle: "Peta routing padat · memori core pilihan per sistem",
      autoBadge: "Otomatis",
      romClarityTitle: "Kejelasan format ROM",
      romClaritySubtitle: "Matriks ekstensi · perilaku impor deterministik",
      bottomCtaKicker: "Unduh Retropa",
      bottomCtaTitleLines: ["Jaga yang klasik,", "jaga rasanya."],
      bottomCtaDescription:
        "Jika autentisitas sama pentingnya dengan polish modern, Retropa dibuat untuk main setiap hari, bukan hanya untuk screenshot.",
      bottomCtaDownloadLabel: "Unduh sekarang",
      inspectCoreCatalogLabel: "Lihat katalog core",
    },
    cores: {
      heroBadge: "Katalog core emulator",
      heroTitleLines: ["Asal-usul core,", "matriks sistem,", "dan sumber yang jelas."],
      heroDescription:
        "Halaman ini menunjukkan core emulator yang dipakai Retropa, konsol apa yang dilayani tiap core, dan di mana tiap proyek berada di GitHub. Tanpa klaim kabur, tanpa catatan kaki tersembunyi.",
      downloadForIOSLabel: "Unduh untuk iOS",
      backToHomepageLabel: "Kembali ke beranda",
      standardsTitle: "Standar kompatibilitas",
      standardsRetroArchTitle: "Dukungan rantai filter RetroArch",
      standardsRetroArchDescription:
        "Dukungan penuh pipeline .slang / .slangp diharapkan sebagai perilaku runtime dan tercermin dalam komunikasi kemampuan produk.",
      standardsDeltaTitle: "Kompatibilitas skin Delta",
      standardsDeltaDescription:
        "Kompatibilitas paket skin Delta dipertahankan sebagai kontrak kelas satu, termasuk fallback yang aman untuk layout.",
      standardsTraceabilityTitle: "Keterlacakan sumber",
      standardsTraceabilityDescription:
        "Logo core dan logo sistem bersumber dan diberi versi dengan catatan asal yang eksplisit.",
      coreLogoShowcaseTitle: "Pameran logo core",
      systemLogoShowcaseTitle: "Pameran logo sistem",
      coreCardsKicker: "Kartu core",
      coreCardsTitle: "Setiap core, dipetakan dan ditautkan",
      romExtensionsLabel: "Ekstensi ROM",
      systemMatrixKicker: "Matriks sistem",
      systemMatrixTitle: "Keluarga konsol dan cakupan ROM",
      availableCoresLabel: "Core tersedia",
      romCoverageLabel: "Cakupan ROM",
    },
    seo: {
      home: {
        title: "Retropa untuk iOS · Skin, filter, haptics, emulator multi-core",
        description:
          "Situs resmi Retropa untuk iOS: emulator retro premium dengan kompatibilitas skin Delta, gaya tombol yang dapat disesuaikan, filter librashader, switching multi-core, mapping controller, dan paket lokalisasi.",
        keywords:
          "Retropa,emulator iOS,game retro,skin Delta,deltaskin,librashader,slangp,mapping controller,haptics,ROM,multi-core",
        ogType: "website",
        ogTitle: "Retropa untuk iOS · Skin, filter, haptics, emulator multi-core",
        ogDescription:
          "Jelajahi pengalaman premium di iOS: kompatibilitas skin Delta, paket filter, kustomisasi haptics, dan switching core per sistem.",
        twitterTitle: "Retropa untuk iOS",
        twitterDescription:
          "Retro premium di iOS dengan skin, filter, haptics, mapping controller, dan paket lokalisasi.",
        jsonLd: {
          featureList: [
            "Kompatibilitas skin Delta (.deltaskin)",
            "Rendering skin Flat2D / SVG2D / 3D",
            "Mapping slot controller dan profil per sistem",
            "Paket waveform Core Haptics dan kustomisasi per aksi",
            "Pipeline filter librashader dengan preset .slangp",
            "Paket lokalisasi dengan refresh saat runtime",
          ],
        },
      },
      cores: {
        title: "Core emulasi Retropa · Katalog sistem dan dukungan ROM",
        description:
          "Lihat core emulasi Retropa, sistem yang didukung, matriks ekstensi ROM, dan repo upstream di GitHub pada situs resmi iOS.",
        keywords:
          "core Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,sistem",
        ogType: "website",
        ogTitle: "Katalog core Retropa",
        ogDescription:
          "Core, matriks sistem, cakupan ROM, dan tautan upstream GitHub yang digunakan Retropa - semuanya di satu halaman.",
        twitterTitle: "Katalog core Retropa",
        twitterDescription:
          "Halaman resmi tentang core, sistem yang didukung, tipe ROM, dan repo sumber.",
        jsonLd: {
          name: "Core emulasi Retropa",
        },
      },
      terms: {
        title: "Ketentuan Layanan Retropa · Halaman legal resmi",
        description:
          "Baca Ketentuan Layanan Retropa untuk aplikasi iOS: penggunaan, lisensi, pembelian, tanggung jawab konten yang diimpor, dan informasi kontak.",
        keywords:
          "Retropa ketentuan,ketentuan layanan,legal iOS,tanggung jawab pengguna,lisensi",
        ogType: "article",
        ogTitle: "Ketentuan Layanan Retropa",
        ogDescription: "Ketentuan resmi untuk aplikasi iOS dan situs Retropa.",
        twitterTitle: "Ketentuan Layanan Retropa",
        twitterDescription: "Ketentuan resmi untuk aplikasi iOS dan situs Retropa.",
        jsonLd: {},
      },
      privacy: {
        title: "Kebijakan Privasi Retropa · Pernyataan resmi",
        description:
          "Baca Kebijakan Privasi Retropa: cakupan informasi, pemrosesan, penyimpanan, berbagi, dan hak pengguna untuk aplikasi iOS dan situs resmi.",
        keywords:
          "Retropa privasi,kebijakan privasi,pemrosesan data,hak pengguna,privasi iOS",
        ogType: "article",
        ogTitle: "Kebijakan Privasi Retropa",
        ogDescription: "Pernyataan privasi resmi untuk aplikasi iOS dan situs Retropa.",
        twitterTitle: "Kebijakan Privasi Retropa",
        twitterDescription: "Pernyataan privasi resmi untuk aplikasi iOS dan situs Retropa.",
        jsonLd: {},
      },
    },
  },
  th: {
    shared: {
      brand: {
        logoAlt: "โลโก้เว็บไซต์ Retropa",
        tagline: "สตูดิโอเรโทรสำหรับ iOS",
        homepageAriaLabel: "หน้าแรก Retropa",
      },
      nav: {
        home: "หน้าแรก",
        cores: "คอร์",
        terms: "ข้อกำหนด",
        privacy: "ความเป็นส่วนตัว",
      },
      headerDownloadLabel: "ดาวน์โหลด",
      footer: {
        description:
          "Retropa ผสานการจำลองแบบหลายคอร์ การปรับแต่งสกินขั้นสูง การจูนฮัปติกแบบเวฟฟอร์ม แพ็กฟิลเตอร์ และแพ็กภาษา ให้เป็นประสบการณ์ iOS ที่ขัดเงาแล้ว",
        legalSupportHeading: "กฎหมายและการสนับสนุน",
        emulatorCores: "คอร์อีมูเลเตอร์",
        terms: "ข้อกำหนดการใช้บริการ",
        privacy: "นโยบายความเป็นส่วนตัว",
        rightsReserved: "สงวนลิขสิทธิ์",
      },
      language: {
        menuLabel: "ภาษา",
        openMenuLabel: "เปิดเมนูภาษา",
      },
      theme: {
        menuLabel: "ธีม",
        openMenuLabel: "เปิดเมนูธีม",
        options: {
          system: "ระบบ",
          light: "สว่าง",
          dark: "มืด",
        },
      },
      legalDocument: {
        badge: "กฎหมาย",
        effectiveDateLabel: "วันที่มีผล",
        onThisPageLabel: "ในหน้านี้",
      },
    },
    terms: {
      title: "ข้อกำหนดการใช้บริการ",
      subtitle:
        "ข้อกำหนดนี้ควบคุมการใช้งาน Retropa ของคุณ รวมถึงการเข้าถึงแอป การซื้อ และความรับผิดชอบของผู้ใช้ต่อเนื้อหาที่นำเข้า",
    },
    privacy: {
      title: "นโยบายความเป็นส่วนตัว",
      subtitle:
        "นโยบายนี้อธิบายว่า Retropa ประมวลผลข้อมูลอะไร เราปกป้องอย่างไร และสิทธิที่คุณสามารถใช้เกี่ยวกับข้อมูลของคุณ",
    },
    home: {
      heroBadge: "เพื่อคนที่ยังแคร์ว่าเกมรู้สึกยังไง",
      heroTitleLines: ["บ้านที่ดีกว่า", "สำหรับเกม", "ที่เลี้ยงเรามา"],
      heroDescription:
        "Retropa ไม่ได้เอาความคิดถึงมาทำเป็นของประดับ แต่มันคือวิศวกรรมที่ตั้งใจสำหรับคนเล่นที่รู้จักจังหวะ ผิวสัมผัส และความจำของการควบคุมอย่างลึกซึ้ง ทุกเฟรม ทุกฟิลเตอร์ และทุกจุดสัมผัสถูกออกแบบเพื่อรักษาสิ่งที่ทำให้เกมเหล่านี้มีความหมายตั้งแต่แรก",
      readCompatibilityPromise: "อ่านคำมั่นด้านความเข้ากันได้",
      downloadForIOSLabel: "ดาวน์โหลดสำหรับ iOS",
      compatibilityCardKicker: "คำมั่นด้านความเข้ากันได้",
      compatibilityCardTitleLines: ["สองข้อที่เรา", "ไม่ยอมต่อรอง"],
      compatibilityPillars: [
        {
          title: "สแต็กฟิลเตอร์ RetroArch: รองรับเต็มรูปแบบ",
          description:
            "รันเชนเชดเดอร์ RetroArch แบบเต็มด้วยพรีเซ็ต .slang / .slangp รองรับลำดับ multi-pass การปรับพารามิเตอร์ และการสลับแบบเสถียรระหว่างรันไทม์",
        },
        {
          title: "แพ็กสกิน Delta: เข้ากันได้เต็มรูปแบบ",
          description:
            "นำเข้าแพ็ก .deltaskin ของ Delta ได้โดยตรง รักษาเจตนาของเลย์เอาต์ และคงความตอบสนองของปุ่มทั้งแนวตั้งและแนวนอน",
        },
      ],
      runtimeIntegrityTitle: "สร้างจากพฤติกรรมรันไทม์จริง",
      runtimeIntegrityDescription:
        "สิ่งที่เราพูดบนหน้านี้ผูกกับโค้ดเส้นทางโปรดักชัน ไม่ใช่พฤติกรรมจำลองเพื่อการตลาด",
      highlights: [
        { value: "RetroArch .slangp", label: "พายป์ไลน์ฟิลเตอร์เต็มรูปแบบ" },
        { value: "Delta .deltaskin", label: "เข้ากันได้เต็ม" },
        { value: "8 คอร์รันไทม์", label: "สลับตามระบบ" },
      ],
      compatibilitySectionKicker: "เข้ากันได้ก่อนสวย",
      compatibilitySectionTitleLines: ["สร้างเพื่อความมั่นใจ,", "ไม่ใช่เพื่อทำเช็กลิสต์"],
      logosSectionKicker: "โลโก้คอร์และระบบ",
      logosSectionTitle: "แอสเซ็ตทางการที่เคลื่อนไหวลื่น",
      logosSectionDescription:
        "โลโก้คอร์และคอนโซลมาจากรีโปทางการของโปรเจกต์และ Wikimedia แล้วถูกปรับให้เป็นไฟล์ PNG ที่ปลอดภัยต่อประสิทธิภาพ เพื่อให้เรนเดอร์หน้าเว็บลื่นและสะอาด",
      coreShowcaseTitle: "โชว์เคสคอร์อีมูเลเตอร์",
      systemShowcaseTitle: "โชว์เคสระบบ",
      capabilitySectionKicker: "ไฮไลต์ที่ใช่จริง",
      capabilitySectionTitleLines: ["ความพรีเมียมเริ่มจาก", "ภายในที่ไว้ใจได้"],
      spotlightFeatures: [
        {
          title: "ความจำต่อระบบที่เคารพนิสัยคุณ",
          description:
            "Retropa จำคอร์ที่ชอบ โหมดสกิน และเลย์เอาต์ปุ่มแยกตามแต่ละระบบคอนโซล ให้คุณกลับมาเริ่มตรงจุดที่สบายที่สุดได้ทันที",
        },
        {
          title: "แมปคอนโทรลเลอร์ระดับสตูดิโอ",
          description:
            "ใช้คอนโทรลเลอร์จริงได้หลายตัวพร้อมกัน พร้อมการแมปสล็อตแยกอิสระ การบันทึกโปรไฟล์ และรีแมประหว่างเล่นแบบเรียลไทม์",
        },
        {
          title: "สั่นที่ปรับด้วยเจตนา ไม่ใช่ดวง",
          description:
            "แพ็ก waveform รองรับแพตเทิร์นกด/ปล่อยรายแอ็กชันและพฤติกรรม fallback เพื่อให้ฟีดแบ็กสัมผัสรู้สึกตั้งใจบนทุกอุปกรณ์",
        },
        {
          title: "สลับคอร์โดยไม่สะดุด",
          description:
            "mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis และ Ares ถูกต่อเข้ากับโมเดลรันไทม์เดียวที่ทำงานสอดคล้องกัน",
        },
        {
          title: "แพ็กภาษาแบบมีงานฝีมือ",
          description:
            "แพ็กภาษาโหลดได้ทันทีพร้อม fallback ของเนมสเปซที่ไว้ใจได้ ทำให้อัปเดตจากชุมชนหรือภูมิภาครู้สึกเป็นเนทีฟ ไม่ใช่แปะทับ",
        },
        {
          title: "อีโคซิสเต็มแพ็กที่ตรวจเข้ม",
          description:
            "แพ็กภาพ เชดเดอร์ ภาษา เสียง และเอกสาร ใช้พายป์ไลน์นำเข้าเดียว พร้อมเช็กความถูกต้องก่อนเปิดใช้ในรันไทม์",
        },
      ],
      systemCoreMatrixTitle: "เมทริกซ์ระบบต่อคอร์",
      systemCoreMatrixSubtitle: "แผนที่การแมปหนาแน่น · จำคอร์ที่ชอบแยกตามระบบ",
      autoBadge: "อัตโนมัติ",
      romClarityTitle: "ความชัดเจนของรูปแบบ ROM",
      romClaritySubtitle: "เมทริกซ์นามสกุล · พฤติกรรมการนำเข้าที่แน่นอน",
      bottomCtaKicker: "ดาวน์โหลด Retropa",
      bottomCtaTitleLines: ["เก็บคลาสสิกไว้,", "เก็บความรู้สึกไว้"],
      bottomCtaDescription:
        "ถ้าคุณแคร์ความแท้พอๆ กับความพรีเมียมแบบยุคใหม่ Retropa ถูกสร้างมาเพื่อการเล่นทุกวัน ไม่ใช่แค่เพื่อภาพสวย",
      bottomCtaDownloadLabel: "ดาวน์โหลดเลย",
      inspectCoreCatalogLabel: "ดูแคตตาล็อกคอร์",
    },
    cores: {
      heroBadge: "แคตตาล็อกคอร์อีมูเลเตอร์",
      heroTitleLines: ["สายเลือดคอร์,", "เมทริกซ์ระบบ,", "และที่มาชัดเจน"],
      heroDescription:
        "หน้านี้แสดงชัดเจนว่ามีคอร์อีมูเลเตอร์ใดบ้างที่ขับเคลื่อน Retropa แต่ละคอร์รองรับคอนโซลอะไร และโปรเจกต์ต้นน้ำอยู่ที่ไหนบน GitHub ไม่มีคำอธิบายลอยๆ และไม่มีเชิงอรรถซ่อน",
      downloadForIOSLabel: "ดาวน์โหลดสำหรับ iOS",
      backToHomepageLabel: "กลับหน้าแรก",
      standardsTitle: "มาตรฐานความเข้ากันได้",
      standardsRetroArchTitle: "รองรับเชนฟิลเตอร์ RetroArch",
      standardsRetroArchDescription:
        "คาดหวังการรองรับพายป์ไลน์ .slang / .slangp แบบเต็มในพฤติกรรมรันไทม์ และสะท้อนตรงกับการสื่อสารความสามารถของสินค้า",
      standardsDeltaTitle: "เข้ากันได้กับสกิน Delta",
      standardsDeltaDescription:
        "ความเข้ากันได้กับแพ็กสกิน Delta ถูกดูแลเป็นสัญญาหลัก รวมถึงพฤติกรรม fallback ที่ปลอดภัยต่อเลย์เอาต์",
      standardsTraceabilityTitle: "ตรวจสอบที่มาได้",
      standardsTraceabilityDescription:
        "โลโก้คอร์และโลโก้ระบบถูกเก็บและเวอร์ชันพร้อมบันทึกแหล่งที่มาอย่างชัดเจน",
      coreLogoShowcaseTitle: "โชว์เคสโลโก้คอร์",
      systemLogoShowcaseTitle: "โชว์เคสโลโก้ระบบ",
      coreCardsKicker: "การ์ดคอร์",
      coreCardsTitle: "ทุกคอร์ มีทั้งแมปและลิงก์",
      romExtensionsLabel: "นามสกุล ROM",
      systemMatrixKicker: "เมทริกซ์ระบบ",
      systemMatrixTitle: "ตระกูลคอนโซลและความครอบคลุม ROM",
      availableCoresLabel: "คอร์ที่มี",
      romCoverageLabel: "ความครอบคลุม ROM",
    },
    seo: {
      home: {
        title: "Retropa สำหรับ iOS · สกิน ฟิลเตอร์ ฮัปติก อีมูเลเตอร์หลายคอร์",
        description:
          "เว็บไซต์ทางการของ Retropa สำหรับ iOS: อีมูเลเตอร์เรโทรระดับพรีเมียม พร้อมรองรับสกิน Delta ปรับสไตล์ปุ่ม ฟิลเตอร์ librashader สลับคอร์แบบหลายคอร์ แมปคอนโทรลเลอร์ และแพ็กภาษา",
        keywords:
          "Retropa,อีมูเลเตอร์ iOS,เกมเรโทร,สกิน Delta,deltaskin,librashader,slangp,แมปคอนโทรลเลอร์,ฮัปติก,ROM,หลายคอร์",
        ogType: "website",
        ogTitle: "Retropa สำหรับ iOS · สกิน ฟิลเตอร์ ฮัปติก อีมูเลเตอร์หลายคอร์",
        ogDescription:
          "สำรวจประสบการณ์พรีเมียมบน iOS: รองรับสกิน Delta แพ็กฟิลเตอร์ ปรับฮัปติก และสลับคอร์ตามระบบ",
        twitterTitle: "Retropa สำหรับ iOS",
        twitterDescription:
          "เรโทรพรีเมียมบน iOS พร้อมสกิน ฟิลเตอร์ ฮัปติก แมปคอนโทรลเลอร์ และแพ็กภาษา",
        jsonLd: {
          featureList: [
            "รองรับสกิน Delta (.deltaskin)",
            "เรนเดอร์สกิน Flat2D / SVG2D / 3D",
            "แมปสล็อตคอนโทรลเลอร์และโปรไฟล์แยกตามระบบ",
            "แพ็ก waveform ของ Core Haptics และปรับต่อแอ็กชัน",
            "พายป์ไลน์ฟิลเตอร์ librashader พร้อมพรีเซ็ต .slangp",
            "แพ็กภาษาอัปเดตได้ขณะรัน",
          ],
        },
      },
      cores: {
        title: "คอร์อีมูเลเตอร์ Retropa · แคตตาล็อกระบบและ ROM",
        description:
          "ดูคอร์อีมูเลเตอร์ที่ Retropa ใช้ ระบบที่รองรับ เมทริกซ์นามสกุล ROM และรีโป upstream บน GitHub ได้จากหน้าอย่างเป็นทางการ",
        keywords:
          "คอร์ Retropa,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,ระบบที่รองรับ",
        ogType: "website",
        ogTitle: "แคตตาล็อกคอร์ Retropa",
        ogDescription:
          "รวมคอร์ เมทริกซ์ระบบ ความครอบคลุม ROM และลิงก์ upstream GitHub ที่ Retropa ใช้ไว้ในหน้าเดียว",
        twitterTitle: "แคตตาล็อกคอร์ Retropa",
        twitterDescription:
          "หน้าอย่างเป็นทางการสำหรับคอร์ ระบบที่รองรับ ชนิด ROM และรีโปซอร์ส",
        jsonLd: {
          name: "คอร์อีมูเลเตอร์ Retropa",
        },
      },
      terms: {
        title: "ข้อกำหนดการใช้บริการ Retropa · หน้ากฎหมายทางการ",
        description:
          "อ่านข้อกำหนดการใช้บริการ Retropa สำหรับแอป iOS: การใช้งาน ใบอนุญาต การซื้อ ความรับผิดชอบต่อเนื้อหาที่นำเข้า และข้อมูลติดต่อ",
        keywords:
          "Retropa ข้อกำหนด,ข้อกำหนดการใช้บริการ,กฎหมาย iOS,ความรับผิดชอบผู้ใช้,ใบอนุญาต",
        ogType: "article",
        ogTitle: "ข้อกำหนดการใช้บริการ Retropa",
        ogDescription: "ข้อกำหนดอย่างเป็นทางการสำหรับแอป iOS และเว็บไซต์ Retropa",
        twitterTitle: "ข้อกำหนดการใช้บริการ Retropa",
        twitterDescription: "ข้อกำหนดอย่างเป็นทางการสำหรับแอป iOS และเว็บไซต์ Retropa",
        jsonLd: {},
      },
      privacy: {
        title: "นโยบายความเป็นส่วนตัว Retropa · แถลงการณ์ทางการ",
        description:
          "อ่านนโยบายความเป็นส่วนตัว Retropa: ขอบเขตข้อมูล การประมวลผล การจัดเก็บ การแชร์ และสิทธิของผู้ใช้สำหรับแอป iOS และเว็บไซต์ทางการ",
        keywords:
          "Retropa ความเป็นส่วนตัว,นโยบายความเป็นส่วนตัว,การประมวลผลข้อมูล,สิทธิผู้ใช้,ความเป็นส่วนตัว iOS",
        ogType: "article",
        ogTitle: "นโยบายความเป็นส่วนตัว Retropa",
        ogDescription: "แถลงการณ์ความเป็นส่วนตัวอย่างเป็นทางการสำหรับแอป iOS และเว็บไซต์ Retropa",
        twitterTitle: "นโยบายความเป็นส่วนตัว Retropa",
        twitterDescription: "แถลงการณ์ความเป็นส่วนตัวอย่างเป็นทางการสำหรับแอป iOS และเว็บไซต์ Retropa",
        jsonLd: {},
      },
    },
  },
  "zh-Hans": {
    shared: {
      brand: {
        logoAlt: "Retropa 官网 Logo",
        tagline: "iOS 复古工作室",
        homepageAriaLabel: "Retropa 首页",
      },
      nav: {
        home: "首页",
        cores: "核心",
        terms: "条款",
        privacy: "隐私",
      },
      headerDownloadLabel: "下载",
      footer: {
        description:
          "Retropa 将多核心模拟、高级皮肤自定义、触感波形调校、滤镜包与本地化语言包融合为一套打磨过的 iOS 体验。",
        legalSupportHeading: "法务与支持",
        emulatorCores: "模拟器核心",
        terms: "服务条款",
        privacy: "隐私政策",
        rightsReserved: "保留所有权利。",
      },
      language: {
        menuLabel: "语言",
        openMenuLabel: "打开语言菜单",
      },
      theme: {
        menuLabel: "主题",
        openMenuLabel: "打开主题菜单",
        options: {
          system: "系统",
          light: "浅色",
          dark: "深色",
        },
      },
      legalDocument: {
        badge: "法务",
        effectiveDateLabel: "生效日期",
        onThisPageLabel: "本页内容",
      },
    },
    terms: {
      title: "服务条款",
      subtitle:
        "这些条款规范你对 Retropa 的使用，包括应用访问、购买，以及对导入内容的用户责任。",
    },
    privacy: {
      title: "隐私政策",
      subtitle:
        "本政策说明 Retropa 会处理哪些信息、我们如何保护它们，以及你可以对自己的数据行使哪些权利。",
    },
    home: {
      heroBadge: "为仍在意手感的玩家而做",
      heroTitleLines: ["一个更好的家", "给养大我们的游戏", "把感觉留住。"],
      heroDescription:
        "Retropa 不是把怀旧当装饰。它是给懂节奏、懂质感、懂操作肌肉记忆的玩家做的精细工程。每一帧、每一层滤镜、每一个触控目标，都为了保住这些游戏最初让人着迷的东西。",
      readCompatibilityPromise: "查看兼容性承诺",
      downloadForIOSLabel: "下载 iOS 版",
      compatibilityCardKicker: "兼容性承诺",
      compatibilityCardTitleLines: ["两条承诺", "我们绝不妥协。"],
      compatibilityPillars: [
        {
          title: "RetroArch 滤镜栈：完整支持",
          description:
            "完整运行 RetroArch shader 链与 .slang / .slangp 预设：多通道顺序、参数控制，以及稳定的运行时切换。",
        },
        {
          title: "Delta 皮肤包：完全兼容",
          description:
            "直接导入 Delta .deltaskin 包，保留布局意图，并确保竖屏/横屏切换时依然响应迅速。",
        },
      ],
      runtimeIntegrityTitle: "基于真实运行时行为",
      runtimeIntegrityDescription:
        "我们在这页写的每一句，都对应生产代码路径，而不是营销用的演示行为。",
      highlights: [
        { value: "RetroArch .slangp", label: "完整滤镜管线" },
        { value: "Delta .deltaskin", label: "完全兼容" },
        { value: "8 个运行时核心", label: "按系统智能切换" },
      ],
      compatibilitySectionKicker: "兼容优先于外观",
      compatibilitySectionTitleLines: ["为安心而做，", "不是为打勾营销。"],
      logosSectionKicker: "核心与系统 Logo",
      logosSectionTitle: "官方资产，稳定呈现",
      logosSectionDescription:
        "核心与主机 Logo 来自官方项目仓库与 Wikimedia，随后统一规范为性能安全的 PNG 资源，保证页面渲染流畅、观感干净。",
      coreShowcaseTitle: "模拟器核心展示",
      systemShowcaseTitle: "系统展示",
      capabilitySectionKicker: "真实能力亮点",
      capabilitySectionTitleLines: ["高级质感，", "从可靠内核开始。"],
      spotlightFeatures: [
        {
          title: "按系统记住你的习惯",
          description:
            "Retropa 会为每个主机系统记住你偏好的核心、皮肤模式与控制布局，让你每次回来都从最舒服的位置开始。",
        },
        {
          title: "控制器映射，深到像录音棚",
          description:
            "多手柄可并行运行，支持独立槽位映射、配置保存，并可在游戏过程中实时重映射。",
        },
        {
          title: "触觉反馈按意图调教",
          description:
            "Waveform 包支持按动作定义按下/抬起节奏与回退策略，让每台设备上的触感都像是专门调过的。",
        },
        {
          title: "切核不打断节奏",
          description:
            "mGBA、SkyEmu、SameBoy、RusticoNES、TetaNES、LakeSnes、JGenesis 与 Ares 被接入同一运行时模型，行为一致、切换顺滑。",
        },
        {
          title: "本地化包也讲究",
          description:
            "语言包可即时热加载，命名空间回退可靠，让社区或地区更新像系统自带，而不是后期打补丁。",
        },
        {
          title: "统一导入管线，严格校验",
          description:
            "视觉、滤镜、本地化、音频与文档包共用一条导入管线，运行时启用前先做完整性校验。",
        },
      ],
      systemCoreMatrixTitle: "系统-核心矩阵",
      systemCoreMatrixSubtitle: "密集路由图 · 按系统记住首选核心",
      autoBadge: "自动",
      romClarityTitle: "ROM 格式一目了然",
      romClaritySubtitle: "扩展名矩阵 · 可预期的导入行为",
      bottomCtaKicker: "下载 Retropa",
      bottomCtaTitleLines: ["把经典留下，", "把感觉留下。"],
      bottomCtaDescription:
        "如果你在意真实性，也在意现代的打磨质感，Retropa 是为日常游玩而生，不是为截图而生。",
      bottomCtaDownloadLabel: "立即下载",
      inspectCoreCatalogLabel: "查看核心目录",
    },
    cores: {
      heroBadge: "模拟器核心目录",
      heroTitleLines: ["核心谱系，", "系统矩阵，", "以及源头。"],
      heroDescription:
        "这个页面会明确告诉你：Retropa 使用哪些模拟器核心、每个核心服务哪些主机系统、以及每个项目在 GitHub 的上游位置。没有模糊话术，也没有隐藏脚注。",
      downloadForIOSLabel: "下载 iOS 版",
      backToHomepageLabel: "返回首页",
      standardsTitle: "兼容性标准",
      standardsRetroArchTitle: "RetroArch 滤镜链支持",
      standardsRetroArchDescription:
        "完整的 .slang / .slangp 管线支持应体现在真实运行时行为中，并同步反映在产品能力描述里。",
      standardsDeltaTitle: "Delta 皮肤兼容",
      standardsDeltaDescription:
        "Delta 皮肤包兼容性被视为一等契约，包括对布局安全的回退行为。",
      standardsTraceabilityTitle: "来源可追溯",
      standardsTraceabilityDescription:
        "核心 Logo 与系统 Logo 均带明确来源记录，并进行版本化管理。",
      coreLogoShowcaseTitle: "核心 Logo 展示",
      systemLogoShowcaseTitle: "系统 Logo 展示",
      coreCardsKicker: "核心卡片",
      coreCardsTitle: "每个核心，都有映射与链接",
      romExtensionsLabel: "ROM 扩展名",
      systemMatrixKicker: "系统矩阵",
      systemMatrixTitle: "主机家族与 ROM 覆盖",
      availableCoresLabel: "可用核心",
      romCoverageLabel: "ROM 覆盖",
    },
    seo: {
      home: {
        title: "Retropa iOS · 皮肤/滤镜/触感/多核心模拟器",
        description:
          "Retropa iOS 官方网站：支持 Delta 皮肤、按钮样式自定义、librashader 滤镜、多核心切换、手柄映射与本地化语言包的高级复古模拟体验。",
        keywords:
          "Retropa,iOS 模拟器,复古游戏,Delta 皮肤,deltaskin,librashader,slangp,手柄映射,触感,ROM,多核心",
        ogType: "website",
        ogTitle: "Retropa iOS · 皮肤/滤镜/触感/多核心模拟器",
        ogDescription:
          "在 iOS 上获得更讲究的复古体验：Delta 皮肤兼容、滤镜包、触感调校与按系统切核。",
        twitterTitle: "Retropa iOS",
        twitterDescription:
          "iOS 高级复古模拟：皮肤、滤镜、触感、手柄映射与语言包，一次到位。",
        jsonLd: {
          featureList: [
            "Delta 皮肤兼容（.deltaskin）",
            "Flat2D / SVG2D / 3D 皮肤渲染",
            "按系统保存手柄槽位映射与配置",
            "Core Haptics 触感波形包，按动作调校",
            "librashader 滤镜管线（.slangp 预设）",
            "语言包热更新（运行时刷新）",
          ],
        },
      },
      cores: {
        title: "Retropa 模拟器核心 · 系统/ROM 支持目录",
        description:
          "查看 Retropa 使用的模拟器核心、每个核心支持的主机系统、ROM 扩展名矩阵，以及各项目在 GitHub 的上游位置。",
        keywords:
          "Retropa 核心,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,系统支持",
        ogType: "website",
        ogTitle: "Retropa 核心目录",
        ogDescription:
          "核心列表、系统矩阵、ROM 覆盖、上游 GitHub 链接：一页看清 Retropa 的能力边界。",
        twitterTitle: "Retropa 核心目录",
        twitterDescription:
          "官方核心目录页：支持系统、ROM 类型与源项目仓库一并列出。",
        jsonLd: {
          name: "Retropa 模拟器核心",
        },
      },
      terms: {
        title: "Retropa 服务条款 · 官方法务页面",
        description:
          "阅读 Retropa 服务条款（iOS 应用）：使用规则、许可与购买、导入内容的用户责任，以及联系信息。",
        keywords:
          "Retropa 条款,服务条款,iOS 法务,用户责任,许可",
        ogType: "article",
        ogTitle: "Retropa 服务条款",
        ogDescription: "Retropa iOS 应用与官网的官方服务条款。",
        twitterTitle: "Retropa 服务条款",
        twitterDescription: "Retropa iOS 应用与官网的官方服务条款。",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa 隐私政策 · 官方数据声明",
        description:
          "阅读 Retropa 隐私政策：信息范围、处理与存储、共享方式，以及你可对数据行使的权利（iOS 应用与官网）。",
        keywords:
          "Retropa 隐私,隐私政策,数据处理,用户权利,iOS 隐私",
        ogType: "article",
        ogTitle: "Retropa 隐私政策",
        ogDescription: "Retropa iOS 应用与官网的官方隐私声明。",
        twitterTitle: "Retropa 隐私政策",
        twitterDescription: "Retropa iOS 应用与官网的官方隐私声明。",
        jsonLd: {},
      },
    },
  },
  "zh-Hant": {
    shared: {
      brand: {
        logoAlt: "Retropa 官網 Logo",
        tagline: "iOS 復古工作室",
        homepageAriaLabel: "Retropa 首頁",
      },
      nav: {
        home: "首頁",
        cores: "核心",
        terms: "條款",
        privacy: "隱私",
      },
      headerDownloadLabel: "下載",
      footer: {
        description:
          "Retropa 將多核心模擬、高級皮膚自訂、觸覺波形調校、濾鏡包與在地化語言包整合成一套打磨過的 iOS 體驗。",
        legalSupportHeading: "法務與支援",
        emulatorCores: "模擬器核心",
        terms: "服務條款",
        privacy: "隱私權政策",
        rightsReserved: "保留所有權利。",
      },
      language: {
        menuLabel: "語言",
        openMenuLabel: "開啟語言選單",
      },
      theme: {
        menuLabel: "主題",
        openMenuLabel: "開啟主題選單",
        options: {
          system: "系統",
          light: "淺色",
          dark: "深色",
        },
      },
      legalDocument: {
        badge: "法務",
        effectiveDateLabel: "生效日期",
        onThisPageLabel: "本頁內容",
      },
    },
    terms: {
      title: "服務條款",
      subtitle:
        "這些條款規範你對 Retropa 的使用，包括應用存取、購買，以及對匯入內容的使用者責任。",
    },
    privacy: {
      title: "隱私權政策",
      subtitle:
        "本政策說明 Retropa 會處理哪些資訊、我們如何保護它們，以及你可以對自己的資料行使哪些權利。",
    },
    home: {
      heroBadge: "為仍在意手感的玩家而做",
      heroTitleLines: ["一個更好的家", "給養大我們的遊戲", "把感覺留住。"],
      heroDescription:
        "Retropa 不是把懷舊當裝飾。它是給懂節奏、懂質感、懂操作肌肉記憶的玩家做的精細工程。每一幀、每一層濾鏡、每一個觸控目標，都為了保住這些遊戲最初讓人著迷的東西。",
      readCompatibilityPromise: "查看相容性承諾",
      downloadForIOSLabel: "下載 iOS 版",
      compatibilityCardKicker: "相容性承諾",
      compatibilityCardTitleLines: ["兩條承諾", "我們絕不妥協。"],
      compatibilityPillars: [
        {
          title: "RetroArch 濾鏡棧：完整支援",
          description:
            "完整執行 RetroArch shader 鏈與 .slang / .slangp 預設：多通道順序、參數控制，以及穩定的執行時切換。",
        },
        {
          title: "Delta 皮膚包：完全相容",
          description:
            "直接匯入 Delta .deltaskin 包，保留版面意圖，並確保直向/橫向切換時依然反應迅速。",
        },
      ],
      runtimeIntegrityTitle: "基於真實執行時行為",
      runtimeIntegrityDescription:
        "我們在這頁寫的每一句，都對應正式環境的程式碼路徑，而不是行銷用的示範行為。",
      highlights: [
        { value: "RetroArch .slangp", label: "完整濾鏡管線" },
        { value: "Delta .deltaskin", label: "完全相容" },
        { value: "8 個執行時核心", label: "依系統智慧切換" },
      ],
      compatibilitySectionKicker: "相容優先於外觀",
      compatibilitySectionTitleLines: ["為安心而做，", "不是為打勾行銷。"],
      logosSectionKicker: "核心與系統 Logo",
      logosSectionTitle: "官方資產，穩定呈現",
      logosSectionDescription:
        "核心與主機 Logo 來自官方專案倉庫與 Wikimedia，隨後統一規範為效能安全的 PNG 資源，讓頁面渲染流暢、觀感乾淨。",
      coreShowcaseTitle: "模擬器核心展示",
      systemShowcaseTitle: "系統展示",
      capabilitySectionKicker: "真實能力亮點",
      capabilitySectionTitleLines: ["高級質感，", "從可靠內核開始。"],
      spotlightFeatures: [
        {
          title: "依系統記住你的習慣",
          description:
            "Retropa 會為每個主機系統記住你偏好的核心、皮膚模式與控制版面，讓你每次回來都從最舒服的位置開始。",
        },
        {
          title: "控制器映射，深到像錄音室",
          description:
            "多手把可並行運作，支援獨立插槽映射、設定檔保存，並可在遊戲過程中即時重映射。",
        },
        {
          title: "觸覺回饋按意圖調教",
          description:
            "Waveform 包支援依動作定義按下/抬起節奏與回退策略，讓每台裝置上的觸感都像是專門調過的。",
        },
        {
          title: "切核不打斷節奏",
          description:
            "mGBA、SkyEmu、SameBoy、RusticoNES、TetaNES、LakeSnes、JGenesis 與 Ares 被接入同一執行時模型，行為一致、切換順滑。",
        },
        {
          title: "在地化包也講究",
          description:
            "語言包可即時熱載入，命名空間回退可靠，讓社群或地區更新像系統內建，而不是後補丁。",
        },
        {
          title: "統一匯入管線，嚴格校驗",
          description:
            "視覺、濾鏡、在地化、音訊與文件包共用一條匯入管線，啟用前先做完整性校驗。",
        },
      ],
      systemCoreMatrixTitle: "系統-核心矩陣",
      systemCoreMatrixSubtitle: "密集路由圖 · 依系統記住首選核心",
      autoBadge: "自動",
      romClarityTitle: "ROM 格式一目了然",
      romClaritySubtitle: "副檔名矩陣 · 可預期的匯入行為",
      bottomCtaKicker: "下載 Retropa",
      bottomCtaTitleLines: ["把經典留下，", "把感覺留下。"],
      bottomCtaDescription:
        "如果你在意真實性，也在意現代的打磨質感，Retropa 是為日常遊玩而生，不是為截圖而生。",
      bottomCtaDownloadLabel: "立即下載",
      inspectCoreCatalogLabel: "查看核心目錄",
    },
    cores: {
      heroBadge: "模擬器核心目錄",
      heroTitleLines: ["核心譜系，", "系統矩陣，", "以及源頭。"],
      heroDescription:
        "這個頁面會明確告訴你：Retropa 使用哪些模擬器核心、每個核心服務哪些主機系統、以及每個專案在 GitHub 的上游位置。沒有模糊話術，也沒有隱藏腳註。",
      downloadForIOSLabel: "下載 iOS 版",
      backToHomepageLabel: "返回首頁",
      standardsTitle: "相容性標準",
      standardsRetroArchTitle: "RetroArch 濾鏡鏈支援",
      standardsRetroArchDescription:
        "完整的 .slang / .slangp 管線支援應體現在真實執行時行為中，並同步反映在產品能力描述裡。",
      standardsDeltaTitle: "Delta 皮膚相容",
      standardsDeltaDescription:
        "Delta 皮膚包相容性被視為一等契約，包括對版面安全的回退行為。",
      standardsTraceabilityTitle: "來源可追溯",
      standardsTraceabilityDescription:
        "核心 Logo 與系統 Logo 均帶明確來源記錄，並進行版本化管理。",
      coreLogoShowcaseTitle: "核心 Logo 展示",
      systemLogoShowcaseTitle: "系統 Logo 展示",
      coreCardsKicker: "核心卡片",
      coreCardsTitle: "每個核心，都有映射與連結",
      romExtensionsLabel: "ROM 副檔名",
      systemMatrixKicker: "系統矩陣",
      systemMatrixTitle: "主機家族與 ROM 覆蓋",
      availableCoresLabel: "可用核心",
      romCoverageLabel: "ROM 覆蓋",
    },
    seo: {
      home: {
        title: "Retropa iOS · 皮膚/濾鏡/觸感/多核心模擬器",
        description:
          "Retropa iOS 官方網站：支援 Delta 皮膚、按鈕樣式自訂、librashader 濾鏡、多核心切換、手把映射與在地化語言包的高級復古模擬體驗。",
        keywords:
          "Retropa,iOS 模擬器,復古遊戲,Delta 皮膚,deltaskin,librashader,slangp,手把映射,觸感,ROM,多核心",
        ogType: "website",
        ogTitle: "Retropa iOS · 皮膚/濾鏡/觸感/多核心模擬器",
        ogDescription:
          "在 iOS 上獲得更講究的復古體驗：Delta 皮膚相容、濾鏡包、觸感調校與依系統切核。",
        twitterTitle: "Retropa iOS",
        twitterDescription:
          "iOS 高級復古模擬：皮膚、濾鏡、觸感、手把映射與語言包，一次到位。",
        jsonLd: {
          featureList: [
            "Delta 皮膚相容（.deltaskin）",
            "Flat2D / SVG2D / 3D 皮膚渲染",
            "依系統保存手把槽位映射與配置",
            "Core Haptics 觸感波形包，依動作調校",
            "librashader 濾鏡管線（.slangp 預設）",
            "語言包熱更新（執行時刷新）",
          ],
        },
      },
      cores: {
        title: "Retropa 模擬器核心 · 系統/ROM 支援目錄",
        description:
          "查看 Retropa 使用的模擬器核心、每個核心支援的主機系統、ROM 副檔名矩陣，以及各專案在 GitHub 的上游位置。",
        keywords:
          "Retropa 核心,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,系統支援",
        ogType: "website",
        ogTitle: "Retropa 核心目錄",
        ogDescription:
          "核心列表、系統矩陣、ROM 覆蓋、上游 GitHub 連結：一頁看清 Retropa 的能力邊界。",
        twitterTitle: "Retropa 核心目錄",
        twitterDescription:
          "官方核心目錄頁：支援系統、ROM 類型與源專案倉庫一併列出。",
        jsonLd: {
          name: "Retropa 模擬器核心",
        },
      },
      terms: {
        title: "Retropa 服務條款 · 官方法務頁面",
        description:
          "閱讀 Retropa 服務條款（iOS 應用）：使用規則、許可與購買、匯入內容的使用者責任，以及聯絡資訊。",
        keywords:
          "Retropa 條款,服務條款,iOS 法務,使用者責任,許可",
        ogType: "article",
        ogTitle: "Retropa 服務條款",
        ogDescription: "Retropa iOS 應用與官網的官方服務條款。",
        twitterTitle: "Retropa 服務條款",
        twitterDescription: "Retropa iOS 應用與官網的官方服務條款。",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa 隱私權政策 · 官方資料聲明",
        description:
          "閱讀 Retropa 隱私權政策：資訊範圍、處理與儲存、共享方式，以及你可對資料行使的權利（iOS 應用與官網）。",
        keywords:
          "Retropa 隱私,隱私權政策,資料處理,使用者權利,iOS 隱私",
        ogType: "article",
        ogTitle: "Retropa 隱私權政策",
        ogDescription: "Retropa iOS 應用與官網的官方隱私聲明。",
        twitterTitle: "Retropa 隱私權政策",
        twitterDescription: "Retropa iOS 應用與官網的官方隱私聲明。",
        jsonLd: {},
      },
    },
  },
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function deepClone<T>(input: T): T {
  if (Array.isArray(input)) {
    return input.map((item) => deepClone(item)) as T
  }

  if (isRecord(input)) {
    const output: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(input)) {
      output[key] = deepClone(value)
    }
    return output as T
  }

  return input
}

function mergeDeep<T>(base: T, override?: DeepPartial<T>): T {
  if (!override) {
    return deepClone(base)
  }

  const output = deepClone(base)

  if (!isRecord(output) || !isRecord(override)) {
    return output
  }

  const mutableOutput: Record<string, unknown> = output

  for (const [key, value] of Object.entries(override)) {
    const current = mutableOutput[key]

    if (value === undefined) {
      continue
    }

    if (Array.isArray(value)) {
      mutableOutput[key] = deepClone(value)
      continue
    }

    if (isRecord(current) && isRecord(value)) {
      mutableOutput[key] = mergeDeep(current, value)
      continue
    }

    mutableOutput[key] = value
  }

  return output as T
}

function applyLocaleAwareSeo(
  locale: Locale,
  messages: LocaleMessages,
  overrides?: DeepPartial<LocaleMessages>
): LocaleMessages {
  // If a locale ships explicit SEO copy, keep it verbatim.
  if (locale === defaultLocale || overrides?.seo) {
    return messages
  }

  const next = deepClone(messages)
  const pageLabelByKey: Record<PageKey, string> = {
    home: next.shared.nav.home,
    cores: next.shared.nav.cores,
    terms: next.terms.title,
    privacy: next.privacy.title,
  }

  ;(["home", "cores", "terms", "privacy"] as const).forEach((pageKey) => {
    const currentPageSeo = next.seo[pageKey]
    const pageLabel = pageLabelByKey[pageKey]
    const localizedDescription = `${pageLabel} · ${currentPageSeo.description}`
    const localizedTitle = `${next.shared.brand.name} · ${pageLabel}`

    next.seo[pageKey] = {
      ...currentPageSeo,
      title: localizedTitle,
      description: localizedDescription,
      ogTitle: localizedTitle,
      ogDescription: localizedDescription,
      twitterTitle: localizedTitle,
      twitterDescription: localizedDescription,
      keywords: `${currentPageSeo.keywords},${locale}`,
    }
  })

  return next
}

const messagesByLocale: Record<Locale, LocaleMessages> = supportedLocales.reduce(
  (accumulator, locale) => {
    const overrides = localeOverrides[locale]
    const merged = mergeDeep(enMessages, overrides)
    accumulator[locale] = applyLocaleAwareSeo(locale, merged, overrides)
    return accumulator
  },
  {} as Record<Locale, LocaleMessages>
)

export function getMessages(locale: Locale): LocaleMessages {
  return messagesByLocale[locale] ?? messagesByLocale[defaultLocale]
}
