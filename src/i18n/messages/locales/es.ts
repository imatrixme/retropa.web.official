export const esMessages = {
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
      heroTitleLines: ["Los clásicos de siempre,", "ahora con acabado premium", "en iPhone y iPad."],
      heroDescription:
        "Retropa le da a los juegos de siempre un hogar familiar y refinado. Inicia rápido, controla con precisión y conserva su esencia en iPhone y iPad.",
      readCompatibilityPromise: "Ver detalles de compatibilidad",
      downloadForIOSLabel: "Descargar para iOS",
      compatibilityCardKicker: "Por qué los jugadores confían en Retropa",
      compatibilityCardTitleLines: ["Compatibilidad que se nota,", "calidad que se mantiene."],
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
      runtimeIntegrityTitle: "Diseñado para jugar todos los días",
      runtimeIntegrityDescription:
        "Retropa prioriza estabilidad, controles responsivos y compatibilidad fiable en todos los sistemas compatibles.",
      highlights: [
        { value: "RetroArch .slangp", label: "tuberia de filtros completa" },
        { value: "Delta .deltaskin", label: "compatibilidad total" },
        { value: "8 cores en runtime", label: "cambio segun el sistema" },
      ],
      compatibilitySectionKicker: "Compatibilidad antes que cosmetica",
      compatibilitySectionTitleLines: ["Hecho para sesiones fluidas,", "desde abrir la app hasta jugar largo."],
      logosSectionKicker: "Logos de core y sistema",
      logosSectionTitle: "Activos oficiales en movimiento",
      logosSectionDescription:
        "Los logos de cores y consolas se toman de repositorios oficiales y Wikimedia, y luego se normalizan a PNG seguros para rendimiento, para que la pagina renderice suave y limpia.",
      coreShowcaseTitle: "Muestra de cores del emulador",
      systemShowcaseTitle: "Muestra de sistemas",
      capabilitySectionKicker: "Capacidades reales",
      capabilitySectionTitleLines: ["Comodidad en tus manos,", "confianza en cada sesión."],
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
      bottomCtaTitleLines: ["Vuelven los clásicos,", "con sensación premium."],
      bottomCtaDescription:
        "Si te importa la autenticidad tanto como el pulido moderno, Retropa esta hecho para jugar cada dia, no solo para capturas.",
      bottomCtaDownloadLabel: "Descargar ahora",
      inspectCoreCatalogLabel: "Ver catalogo de cores",
    },
    cores: {
      heroBadge: "Catalogo de cores del emulador",
      heroTitleLines: ["Qué cores impulsan Retropa,", "qué sistemas cubre cada uno,", "y dónde vive cada proyecto."],
      heroDescription:
        "Aquí ves los cores de Retropa, los sistemas que cubre cada uno y enlaces directos a sus proyectos de origen, todo en un solo lugar.",
      downloadForIOSLabel: "Descargar para iOS",
      backToHomepageLabel: "Volver al inicio",
      standardsTitle: "Estandares de compatibilidad",
      standardsRetroArchTitle: "Soporte de cadena de filtros RetroArch",
      standardsRetroArchDescription:
        "Se espera soporte completo del pipeline .slang / .slangp en el comportamiento en runtime, y se refleja en la comunicacion de capacidades del producto.",
      standardsDeltaTitle: "Compatibilidad con skins de Delta",
      standardsDeltaDescription:
        "La compatibilidad con paquetes de skins Delta se mantiene como contrato de primera clase, incluyendo fallback seguro para el layout.",
      standardsTraceabilityTitle: "Créditos de origen confiables",
      standardsTraceabilityDescription:
        "Los logos de cores y sistemas se acreditan a sus proyectos originales y fuentes de referencia.",
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
  }
