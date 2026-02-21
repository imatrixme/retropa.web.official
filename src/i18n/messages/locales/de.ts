export const deMessages = {
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
      heroTitleLines: ["Klassiker neu erleben,", "mit moderner Präzision", "auf iPhone und iPad."],
      heroDescription:
        "Retropa bringt zeitlose Spiele in ein Zuhause, das vertraut wirkt und modern reagiert. Schnell starten, präzise steuern und den Charakter der Klassiker auf iPhone und iPad bewahren.",
      readCompatibilityPromise: "Kompatibilitätsdetails ansehen",
      downloadForIOSLabel: "Für iOS laden",
      compatibilityCardKicker: "Warum Spieler Retropa vertrauen",
      compatibilityCardTitleLines: ["Kompatibilität, die man spürt,", "Qualität, die bleibt."],
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
      runtimeIntegrityTitle: "Für den täglichen Einsatz gemacht",
      runtimeIntegrityDescription:
        "Retropa steht für stabile Leistung, reaktionsschnelle Steuerung und verlässliche Kompatibilität über alle unterstützten Systeme.",
      highlights: [
        { value: "RetroArch .slangp", label: "vollständige Filter-Pipeline" },
        { value: "Delta .deltaskin", label: "volle Kompatibilität" },
        { value: "8 Runtime-Cores", label: "systembewusstes Umschalten" },
      ],
      compatibilitySectionKicker: "Kompatibilität vor Kosmetik",
      compatibilitySectionTitleLines: ["Für ruhige Sessions gebaut,", "vom Start bis zur langen Spielrunde."],
      logosSectionKicker: "Core- und System-Logos",
      logosSectionTitle: "Offizielle Assets in Bewegung",
      logosSectionDescription:
        "Core- und Konsolenlogos stammen aus offiziellen Projekt-Repositories und von Wikimedia und werden anschließend zu performance-sicheren PNG-Assets normalisiert, damit die Seite sauber und flüssig rendert.",
      coreShowcaseTitle: "Emulator-Core-Showcase",
      systemShowcaseTitle: "System-Showcase",
      capabilitySectionKicker: "Echte Capability-Highlights",
      capabilitySectionTitleLines: ["Komfort in den Händen,", "Vertrauen in jeder Session."],
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
      bottomCtaTitleLines: ["Klassiker bewahren,", "Spielgefühl behalten."],
      bottomCtaDescription:
        "Wenn dir Authentizität genauso wichtig ist wie moderner Feinschliff, ist Retropa für dein tägliches Spielen gebaut, nicht nur für Screenshots.",
      bottomCtaDownloadLabel: "Jetzt laden",
      inspectCoreCatalogLabel: "Core-Katalog ansehen",
    },
    cores: {
      heroBadge: "Emulator-Core-Katalog",
      heroTitleLines: ["Welche Cores Retropa antreiben,", "welche Systeme sie abdecken,", "und wo ihre Projekte zuhause sind."],
      heroDescription:
        "Hier findest du die Emulator-Cores hinter Retropa, die unterstützten Systeme und direkte Links zu den Upstream-Projekten - übersichtlich an einem Ort.",
      downloadForIOSLabel: "Für iOS laden",
      backToHomepageLabel: "Zur Startseite",
      standardsTitle: "Kompatibilitätsstandards",
      standardsRetroArchTitle: "RetroArch-Filterketten-Support",
      standardsRetroArchDescription:
        "Volle .slang / .slangp-Pipeline-Unterstützung wird im Runtime-Verhalten erwartet und in der Kommunikation der Produktfähigkeiten entsprechend abgebildet.",
      standardsDeltaTitle: "Delta-Skin-Kompatibilität",
      standardsDeltaDescription:
        "Kompatibilität mit Delta-Skin-Paketen ist ein Vertrag erster Klasse, inklusive layout-sicherem Fallback-Verhalten.",
      standardsTraceabilityTitle: "Verlässliche Quellenangaben",
      standardsTraceabilityDescription:
        "Core- und Systemlogos werden ihren Originalprojekten und Referenzquellen klar zugeordnet.",
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
  }
