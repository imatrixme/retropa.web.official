import { privacySections as privacySectionsEn, termsSections as termsSectionsEn } from "@/content/legal"
import type { LocaleMessages } from "@/i18n/messages/types"

export const enMessages: LocaleMessages = {
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
        "Retropa brings classic handheld games to iPhone and iPad with thoughtful skins, responsive controls, and trusted multi-core compatibility.",
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
    heroBadge: "Made for players who remember every frame",
    heroTitleLines: ["Play the classics", "with modern polish", "on iPhone and iPad."],
    heroDescription:
      "Retropa gives timeless games a home that feels both familiar and refined. Launch faster, control with confidence, and keep the look and feel you love on modern iOS hardware.",
    readCompatibilityPromise: "Explore compatibility details",
    downloadForIOSLabel: "Download for iOS",
    compatibilityCardKicker: "Why players trust Retropa",
    compatibilityCardTitleLines: ["Compatibility you can feel,", "quality you can keep."],
    compatibilityPillars: [
      {
        title: "RetroArch Filter Support",
        description:
          "Use complete RetroArch shader chains, including .slang and .slangp presets, with stable switching during play.",
      },
      {
        title: "Delta Skin Compatibility",
        description:
          "Import Delta .deltaskin packages directly and keep layouts responsive across portrait and landscape play.",
      },
    ],
    runtimeIntegrityTitle: "Designed for everyday play",
    runtimeIntegrityDescription:
      "Retropa focuses on stable performance, responsive controls, and dependable compatibility across supported systems.",
    highlights: [
      { value: "RetroArch .slangp", label: "shader preset support" },
      { value: "Delta .deltaskin", label: "skin package compatibility" },
      { value: "8 emulator cores", label: "system-aware switching" },
    ],
    compatibilitySectionKicker: "Trust comes first",
    compatibilitySectionTitleLines: ["Built for smooth sessions,", "from launch to long play."],
    logosSectionKicker: "Core and console heritage",
    logosSectionTitle: "Official logos, responsibly prepared",
    logosSectionDescription:
      "Core and console logos come from official project sources and Wikimedia, then are normalized for smooth rendering across devices.",
    coreShowcaseTitle: "Emulator core lineup",
    systemShowcaseTitle: "Supported systems",
    capabilitySectionKicker: "Product highlights",
    capabilitySectionTitleLines: ["Comfort in your hands,", "confidence in every session."],
    spotlightFeatures: [
      {
        title: "Per-system preferences that remember your style",
        description:
          "Retropa remembers your preferred core, skin mode, and control layout per system so every return session feels instantly familiar.",
      },
      {
        title: "Controller mapping that stays out of your way",
        description:
          "Use multiple controllers with independent slot mapping, saved profiles, and live remap while you play.",
      },
      {
        title: "Haptics tuned for game feel",
        description:
          "Customize press and release vibration patterns so touch feedback feels intentional on every supported iPhone and iPad.",
      },
      {
        title: "Core switching without breaking momentum",
        description:
          "Switch across mGBA, SkyEmu, SameBoy, RusticoNES, TetaNES, LakeSnes, JGenesis, and Ares in one consistent experience.",
      },
      {
        title: "Localization packs for global players",
        description:
          "Language packs refresh at runtime with dependable fallback behavior, so updates feel native instead of patched in.",
      },
      {
        title: "A pack ecosystem with clear quality checks",
        description:
          "Visual, shader, localization, audio, and document packs share one import flow with integrity checks before activation.",
      },
    ],
    systemCoreMatrixTitle: "System-to-core guide",
    systemCoreMatrixSubtitle: "At-a-glance coverage with remembered core preferences",
    autoBadge: "Auto",
    romClarityTitle: "ROM support clarity",
    romClaritySubtitle: "Clear extensions, predictable imports",
    bottomCtaKicker: "Start with Retropa",
    bottomCtaTitleLines: ["Bring back your favorites,", "without giving up polish."],
    bottomCtaDescription:
      "If classic gameplay matters to you, Retropa is built for everyday play, not just for screenshots.",
    bottomCtaDownloadLabel: "Download for iOS",
    inspectCoreCatalogLabel: "View core catalog",
  },
  cores: {
    heroBadge: "Core catalog",
    heroTitleLines: ["What powers Retropa,", "what each core supports,", "and where it comes from."],
    heroDescription:
      "Explore the emulator cores behind Retropa, the systems each one supports, and direct links to their upstream projects, all in one place.",
    downloadForIOSLabel: "Download for iOS",
    backToHomepageLabel: "Back to homepage",
    standardsTitle: "Compatibility commitments",
    standardsRetroArchTitle: "RetroArch shader compatibility",
    standardsRetroArchDescription:
      "Retropa supports .slang and .slangp workflows so your filter presets carry over with confidence.",
    standardsDeltaTitle: "Delta skin compatibility",
    standardsDeltaDescription:
      "Delta skin package support is treated as a product guarantee, including layout-safe fallback behavior.",
    standardsTraceabilityTitle: "Trusted source credits",
    standardsTraceabilityDescription:
      "Core and system logos are credited to their original projects and reference sources.",
    coreLogoShowcaseTitle: "Core logos",
    systemLogoShowcaseTitle: "System logos",
    coreCardsKicker: "Core reference",
    coreCardsTitle: "Each core, with clear support details",
    romExtensionsLabel: "Supported ROM extensions",
    systemMatrixKicker: "Coverage matrix",
    systemMatrixTitle: "System families and format coverage",
    availableCoresLabel: "Available cores",
    romCoverageLabel: "ROM formats",
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
      title: "Retropa for iOS · Premium Retro Play with Skins, Filters, and Multi-Core Support",
      description:
        "Retropa is a premium iOS retro gaming app with Delta skin compatibility, RetroArch shader support, controller mapping, haptics tuning, and reliable multi-core coverage.",
      keywords:
        "Retropa,iOS retro gaming,Delta skin,RetroArch shader,controller mapping,haptics,multi-core emulator,ROM support",
      ogType: "website",
      ogTitle: "Retropa for iOS · Premium Retro Play with Skins, Filters, and Multi-Core Support",
      ogDescription:
        "Discover a polished retro experience on iOS with trusted compatibility, expressive skins, and modern controls.",
      twitterTitle: "Retropa for iOS",
      twitterDescription:
        "Premium retro play on iOS with skins, shaders, haptics, and multi-core compatibility.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Retropa",
        applicationCategory: "GameApplication",
        operatingSystem: "iOS",
        url: "https://retropa.com/",
        downloadUrl: "https://apps.apple.com/us/app/retropa/id6758859845",
        image: "https://retropa.com/brand/retropa-site-logo-512.png",
        description:
          "Premium iOS retro gaming app with multi-core compatibility, advanced skins, controller mapping, filter support, and localization packs.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Delta skin compatibility (.deltaskin)",
          "Flat2D / SVG2D / 3D skin rendering",
          "Controller mapping with per-system profiles",
          "Core Haptics waveform customization",
          "RetroArch shader pipeline with .slangp presets",
          "Localization packs with runtime refresh",
        ],
      },
    },
    cores: {
      title: "Retropa Core Catalog · Systems, ROM Formats, and Source Links",
      description:
        "Browse Retropa emulator cores, supported systems, ROM extension coverage, and upstream project links in one official catalog.",
      keywords:
        "Retropa core catalog,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM support",
      ogType: "website",
      ogTitle: "Retropa Core Catalog",
      ogDescription:
        "View core support, system coverage, ROM formats, and upstream links used by Retropa.",
      twitterTitle: "Retropa Core Catalog",
      twitterDescription:
        "Official catalog for Retropa cores, supported systems, ROM formats, and source repositories.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Retropa Emulator Cores",
        url: "https://retropa.com/cores/",
        description:
          "Official catalog of emulator cores, supported systems, ROM extensions, and source repositories used in Retropa.",
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
