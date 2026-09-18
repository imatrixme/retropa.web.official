import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "Emulador de Game Boy para iPhone y iPad | Retropa",
    "description": "Ejecuta tus propios archivos .gb en iPhone y iPad con Retropa. Descubre qué núcleo se encarga de GB, cómo importar un juego, cómo ajustar la pantalla y los controles, y qué revisar cuando un archivo no se abre.",
    "summary": "Retropa ejecuta juegos de Game Boy a partir de tus propios archivos .gb en iPhone y iPad, con cuatro núcleos intercambiables, skins de consola portátil, tratamientos LCD y CRT, y asignación de mandos.",
    "sections": [
      {
        "title": "Empieza con un archivo .gb",
        "body": "Retropa reproduce juegos de Game Boy a partir de archivos que ya son tuyos. La app se descarga gratis y no incluye juegos ni archivos BIOS, así que prepara el archivo del juego antes de empezar y guarda una copia intacta fuera de la app como respaldo.",
        "points": [
          ".gb corresponde a un juego de Game Boy; .gbc pertenece a Game Boy Color.",
          "Cambiar la extensión de un archivo no convierte el juego a otro sistema.",
          "Conserva el archivo original hasta que el juego funcione correctamente."
        ]
      },
      {
        "title": "Qué núcleo ejecuta los juegos de Game Boy",
        "body": "Retropa incluye más de un núcleo capaz de ejecutar títulos de Game Boy, y puedes alternar entre ellos juego a juego. mGBA y SkyEmu cubren GB, GBC y GBA, SameBoy se centra específicamente en GB y GBC, y JGenesis cubre GB junto con sus sistemas Sega. Si un núcleo da problemas con un título concreto, prueba otro antes de dar por hecho que el archivo está dañado.",
        "points": [
          "mGBA es una buena primera opción para el día a día.",
          "SameBoy prioriza la precisión en GB y GBC.",
          "El núcleo elegido se recuerda para cada juego."
        ]
      },
      {
        "title": "Importa el juego desde Archivos",
        "body": "Comprueba que el archivo esté descargado en el dispositivo y no sea solo un marcador en la nube dentro de la app Archivos. Abre la opción de importar en la biblioteca de Retropa y selecciona el juego. Cuando aparezca, ábrelo y confirma que la imagen, el sonido y los controles táctiles predeterminados funcionan antes de personalizar nada."
      },
      {
        "title": "Elige una disposición que encaje con la pantalla original",
        "body": "Una disposición de Game Boy necesita una cruceta direccional, A y B, y Start y Select. En vertical, la pantalla queda encima de los controles, lo que favorece el juego con una sola mano; en horizontal, los botones disponen de más espacio. Comprueba que la skin no tape la vista del juego en ninguna de las dos orientaciones y que los seis controles queden a tu alcance.",
        "points": [
          "Revisa todos los botones, no solo el diseño.",
          "Los paquetes .deltaskin de Delta se pueden importar, pero una skin de DS o GBA no es una disposición de GB.",
          "Las skins premium y los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Pantalla verde, rejilla LCD o píxeles limpios",
        "body": "Empieza con la imagen original para tener una referencia. Un ajuste DMG evoca el LCD reflectante de cuatro tonos de la consola original, una rejilla LCD añade una estructura de subpíxeles y un tratamiento CRT ofrece un aspecto completamente distinto. Los filtros avanzados de Retropa se adaptan al área de salida real en lugar de exigir un factor de escala entero, así que la imagen mantiene su proporción en todos los tamaños de iPhone y iPad.",
        "points": [
          "Los filtros cambian la presentación, no la resolución del juego.",
          "Un filtro no soluciona un problema de compatibilidad del archivo.",
          "Compara con la imagen original antes de quedarte con un ajuste."
        ]
      },
      {
        "title": "Cuando falla una importación o un guardado de Game Boy",
        "body": "Comprueba primero la extensión del archivo, el sistema seleccionado y el mensaje de error exacto. Si Archivos aún no ha terminado de descargar el original, completa ese paso antes de volver a importar. Los datos de guardado propios del juego y una partida guardada del emulador son cosas distintas; no renombres uno para convertirlo en el otro y conserva una copia de seguridad antes de mover una partida entre núcleos o apps.",
        "points": [
          "Anota la versión de la app, el sistema, el núcleo y el error para el soporte.",
          "No adjuntes ROMs ni archivos BIOS comerciales a una solicitud de soporte.",
          "Prueba la skin predeterminada y un filtro sencillo cuando intentes aislar un problema."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "¿Retropa incluye juegos de Game Boy?",
        "answer": "No. Retropa es un emulador y no proporciona juegos ni archivos BIOS. Importas los archivos que tienes derecho a usar, y solo esos."
      },
      {
        "id": "bios-needed",
        "question": "¿La emulación de Game Boy necesita un archivo BIOS?",
        "answer": "Por lo general, los títulos de GB y GBC funcionan sin archivo BIOS en los núcleos que incluye Retropa. Si un núcleo indica que necesita una BIOS, sigue el aviso que muestre ese núcleo en lugar de importar un archivo que no corresponde."
      },
      {
        "id": "gb-vs-gbc",
        "question": "¿Puede Retropa abrir un archivo .gbc como juego de Game Boy?",
        "answer": "Un archivo .gbc pertenece a Game Boy Color. Retropa lo ejecuta en el sistema correspondiente, y cambiar la extensión no modifica lo que el archivo es en realidad."
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "Emulador de Game Boy Color para iPhone y iPad | Retropa",
    "description": "Juega a tus propios títulos .gbc en iPhone y iPad. Paletas de color, juegos exclusivos de GBC, elección de núcleo, pasos de importación y comprobaciones para cuando un juego de Game Boy Color no arranca.",
    "summary": "Retropa ejecuta juegos de Game Boy Color a partir de tus propios archivos .gbc, con gestión de paletas, selección de núcleo por juego y tratamientos de pantalla a la altura del panel reflectante original.",
    "sections": [
      {
        "title": "Prepara un archivo .gbc",
        "body": "Los juegos de Game Boy Color usan la extensión .gbc. Retropa no incluye juegos ni archivos BIOS, así que prepara el archivo por tu cuenta, guarda una copia de seguridad aparte e importa solo contenido que tengas derecho a usar.",
        "points": [
          ".gbc corresponde a un juego de Game Boy Color.",
          "Los juegos de Game Boy original usan .gb y también se ejecutan en Retropa.",
          "No cambies la extensión de un archivo .gb a .gbc para forzar el color."
        ]
      },
      {
        "title": "Elección de núcleo para Game Boy Color",
        "body": "SameBoy es el núcleo centrado en GB y GBC, y mGBA y SkyEmu también cubren Game Boy Color. Si un título muestra colores o tiempos incorrectos, cambiar de núcleo es una primera prueba legítima, porque cada núcleo trata el hardware de forma ligeramente distinta.",
        "points": [
          "SameBoy es la primera opción natural para títulos de GBC.",
          "mGBA cubre GB, GBC y GBA en un solo núcleo.",
          "La selección de núcleo se guarda por juego."
        ]
      },
      {
        "title": "Importación y primer arranque",
        "body": "Descarga el archivo al almacenamiento local para que la app Archivos no entregue un marcador y, después, elígelo desde la opción de importar de la biblioteca de Retropa. Abre el juego y verifica el color, el sonido y la disposición táctil predeterminada antes de aplicar skins o filtros, de modo que cualquier problema posterior sea fácil de atribuir.",
        "points": [
          "Prueba una escena con color, no solo la pantalla de título.",
          "Revisa el canal de sonido además de la imagen.",
          "Mantén el archivo original intacto mientras diagnosticas."
        ]
      },
      {
        "title": "Imagen y disposición para una portátil en color",
        "body": "La pantalla de Game Boy Color es pequeña y reflectante. Un ajuste de rejilla LCD añade una estructura de subpíxeles que le sienta bien, mientras que un ajuste DMG evoca a propósito el panel monocromo anterior. Los filtros avanzados de Retropa trabajan sobre el área de salida real y no sobre un múltiplo entero fijo, así que las proporciones se mantienen en todos los tamaños de dispositivo.",
        "points": [
          "Compara cada ajuste con la imagen original.",
          "Los filtros avanzados requieren Retropa Plus.",
          "Comprueba que la skin no obstruya la vista del juego."
        ]
      },
      {
        "title": "Controles y orientación",
        "body": "Una disposición de Game Boy Color necesita una cruceta direccional, A y B, y Start y Select. La orientación vertical va bien para sesiones cortas; la horizontal da más espacio a los botones y puede resultar más cómoda en un iPhone grande. Confirma que todos los controles queden a tu alcance en la orientación con la que juegas de verdad."
      },
      {
        "title": "Cuando un juego de Game Boy Color no arranca",
        "body": "Revisa primero la extensión y el sistema seleccionado, y después lee el error exacto. Si la región o la paleta no son las correctas, compara núcleos antes de cambiar ajustes. Es posible que las partidas guardadas creadas en un núcleo no se lean en otro, así que haz una copia de seguridad antes de cambiar.",
        "points": [
          "Anota la versión de la app, el sistema, el núcleo y el error.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte.",
          "Vuelve a la skin predeterminada y a un filtro sencillo para aislar problemas."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "¿Se incluyen juegos de Game Boy Color?",
        "answer": "No. Retropa es un emulador y no suministra juegos ni archivos BIOS. Importa únicamente archivos que tengas derecho a usar."
      },
      {
        "id": "gb-on-gbc",
        "question": "¿También puedo jugar a juegos de Game Boy original?",
        "answer": "Sí. Los archivos .gb de Game Boy original también se ejecutan en Retropa, con los mismos núcleos que gestionan Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "¿Añade color renombrar un archivo .gb a .gbc?",
        "answer": "No. La extensión no cambia el contenido del archivo, así que renombrarlo no habilita las funciones de Game Boy Color."
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "Emulador de NES para iPhone y iPad | Retropa",
    "description": "Ejecuta tus propios juegos de NES en iPhone y iPad. Formatos compatibles como .nes, .fds y .nsf, selección de núcleo, pasos de importación, asignación del mando y solución de problemas.",
    "summary": "Retropa ejecuta juegos de NES a partir de tus propios archivos, con cobertura de los formatos .nes, .fds y de audio NSF en dos núcleos dedicados, además de asignación de mando y tratamientos CRT.",
    "sections": [
      {
        "title": "Formatos de archivo que Retropa acepta para NES",
        "body": "La compatibilidad con NES en Retropa va más allá de una sola extensión. Además de la imagen de cartucho .nes habitual, los núcleos aceptan imágenes de Famicom Disk System y archivos de sonido NSF, así como las variantes de contenedor iNES simple y unificado.",
        "points": [
          ".nes es la imagen de cartucho estándar de NES.",
          ".fds cubre contenido de Famicom Disk System.",
          ".nsf y .nsfe son archivos de sonido, no juegos con los que se pueda jugar.",
          "Los contenedores ZIP y RetroPack se pueden importar y abrir directamente."
        ]
      },
      {
        "title": "Dos núcleos, un sistema",
        "body": "Retropa incluye RusticoNES y TetaNES para títulos de NES, y JGenesis también cubre el sistema. Probar un segundo núcleo es la forma más rápida de distinguir una ROM problemática de una diferencia real de emulación, y la elección se recuerda para cada juego.",
        "points": [
          "RusticoNES es una opción predeterminada sólida para juegos de cartucho.",
          "TetaNES es la alternativa que probar cuando algo falla.",
          "Los archivos de audio NSF se comportan de forma distinta a los juegos en todos los núcleos."
        ]
      },
      {
        "title": "Importa un juego de NES",
        "body": "Descarga primero el archivo en local para que Archivos no devuelva un marcador y, después, abre la opción de importar de la biblioteca de Retropa. Inicia el juego con la disposición predeterminada y confirma la imagen, el audio y los botones predeterminados antes de cambiar skins o filtros."
      },
      {
        "title": "Cómo manejar un mando de dos botones",
        "body": "El mando de NES es deliberadamente minimalista: una cruceta direccional, A, B, Start y Select. En una pantalla táctil la tentación es acercar los botones entre sí, así que comprueba que la entrada diagonal siga registrándose y que Start y Select no se pulsen por accidente durante la partida. Un mando físico emparejado resuelve casi todo esto.",
        "points": [
          "Empareja el mando primero en iOS y luego revisa su asignación en Retropa.",
          "Verifica las diagonales, no solo las cuatro direcciones básicas.",
          "Comprueba la orientación vertical y la horizontal si juegas en ambas."
        ]
      },
      {
        "title": "Ajustar bien la imagen",
        "body": "La salida de NES está pensada para un televisor de definición estándar, así que un tratamiento CRT suele parecerse más a la experiencia original que una rejilla de píxeles limpia. Hay ajustes de líneas de barrido y de rejilla de apertura, y los filtros avanzados de Retropa se adaptan al área de salida real en lugar de a un múltiplo entero fijo.",
        "points": [
          "Parte de la imagen original como referencia.",
          "Las superposiciones de líneas de barrido convencionales pueden parpadear en escalas fraccionarias.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de NES no carga",
        "body": "Lee el error exacto antes de cambiar nada. Un volcado defectuoso, un mapper no compatible, una imagen sin cabecera o un juego de disco al que le falta la BIOS son problemas distintos. Comprueba la extensión y el sistema seleccionado, y luego prueba el otro núcleo de NES.",
        "points": [
          "Anota la versión de la app, el núcleo y el texto completo del error para el soporte.",
          "Mantén el archivo original intacto mientras diagnosticas.",
          "No adjuntes ROMs ni archivos BIOS comerciales a una solicitud de soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "¿Qué formatos de NES abre Retropa?",
        "answer": "Retropa acepta archivos .nes, .fds, .nsf, .nsfe, .unf y .unif, y también puede abrir contenedores ZIP y RetroPack directamente."
      },
      {
        "id": "nsf",
        "question": "¿Puedo reproducir un archivo .nsf como si fuera un juego?",
        "answer": "No. Los archivos NSF son datos de sonido, así que reproducen audio y no un juego. Usa un archivo .nes o .fds para jugar a un título."
      },
      {
        "id": "gamepad",
        "question": "¿Funciona un mando físico con los juegos de NES?",
        "answer": "Sí. Los mandos compatibles se pueden emparejar con iOS y asignar dentro de Retropa. Revisa la asignación después de emparejarlos, porque el orden de los botones no siempre es el esperado."
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "Emulador de SNES para iPhone y iPad | Retropa",
    "description": "Juega a tus propios juegos de SNES en iPhone y iPad. Formatos .sfc y .smc compatibles, el núcleo LakeSnes, asignación del mando para seis botones y pasos para resolver problemas.",
    "summary": "Retropa ejecuta juegos de SNES a partir de tus propios archivos .sfc y .smc con el núcleo LakeSnes, con asignación de mando para seis botones, partidas guardadas y tratamientos de pantalla CRT.",
    "sections": [
      {
        "title": "Formatos de archivo de SNES",
        "body": "Las imágenes de Super Nintendo suelen distribuirse como .sfc o .smc, y Retropa también acepta varios formatos relacionados de contenedor y de copiador. Si un archivo falla, la extensión es lo primero que conviene verificar, porque una cabecera que no coincide es una causa habitual de que un juego no arranque.",
        "points": [
          ".sfc y .smc son las imágenes estándar de SNES.",
          "Retropa también admite los formatos .fig, .swc, .bs y .st.",
          "Los contenedores ZIP y RetroPack se pueden abrir directamente."
        ]
      },
      {
        "title": "El núcleo LakeSnes",
        "body": "Retropa ejecuta títulos de SNES con LakeSnes, y JGenesis también admite el sistema. Si un juego concreto muestra un problema de sincronización o de gráficos, confirma que el archivo sea una imagen limpia antes de culpar al núcleo, y compara la versión actual de la app con las notas de la versión.",
        "points": [
          "LakeSnes es el núcleo dedicado a SNES.",
          "Algunos títulos dependen de coprocesadores de cartucho concretos.",
          "La selección de núcleo por juego se recuerda."
        ]
      },
      {
        "title": "Importación y primera ejecución",
        "body": "Mantén el archivo en el almacenamiento local en lugar de un marcador en la nube y, después, selecciónalo desde la opción de importar de la biblioteca de Retropa. Abre el juego y verifica la imagen, el audio y los controles táctiles predeterminados antes de cambiar cualquier ajuste de presentación, para que los problemas posteriores tengan una causa clara."
      },
      {
        "title": "Seis botones necesitan espacio real",
        "body": "El mando de SNES añade X, Y, L y R además de la cruceta direccional, A, B, Start y Select, y muchos juegos esperan pulsaciones simultáneas. En una pantalla táctil merece la pena repartir la disposición en horizontal y comprobar cada combinación. Un mando físico emparejado es la opción más fiable para los títulos de acción.",
        "points": [
          "Verifica L y R, que se olvidan con facilidad al asignar botones.",
          "Prueba una diagonal junto con un botón superior al mismo tiempo.",
          "Comprueba que la skin deje despejada la vista del juego."
        ]
      },
      {
        "title": "Elegir un tratamiento de pantalla",
        "body": "Los gráficos de SNES se diseñaron para un CRT, así que los ajustes de líneas de barrido y de rejilla de apertura suelen parecerse más al original que una rejilla de píxeles sin más. Los filtros avanzados de Retropa tienen en cuenta el área de salida real en lugar de exigir un múltiplo entero, algo que importa en móviles, donde la altura disponible rara vez se divide de forma exacta.",
        "points": [
          "Usa la imagen original como referencia.",
          "Las superposiciones de líneas de barrido sencillas pueden parpadear en escalas fraccionarias.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de SNES no arranca",
        "body": "Comprueba la extensión, el sistema seleccionado y el texto exacto del error. Los títulos que dependen de un chip de cartucho especial suelen ser los sospechosos habituales cuando un juego falla y los demás funcionan. Mantén el archivo original intacto durante las pruebas y prueba a cambiar al núcleo alternativo.",
        "points": [
          "Anota la versión de la app, el núcleo y el error para el soporte.",
          "Cambiar el filtro no soluciona un problema de chip de cartucho.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "¿Da igual usar .sfc o .smc?",
        "answer": "Ambos son imágenes estándar de SNES y Retropa acepta cualquiera de los dos. La extensión en sí no cambia el juego."
      },
      {
        "id": "chip-games",
        "question": "¿Por qué falla un juego y los demás funcionan?",
        "answer": "Algunos títulos dependen de hardware adicional del cartucho. Si el archivo es una imagen limpia y otros juegos se ejecutan, esa dependencia es la causa probable, y cambiar de núcleo es la siguiente prueba."
      },
      {
        "id": "saves",
        "question": "¿Se pueden trasladar las partidas guardadas entre núcleos?",
        "answer": "No de forma fiable. Las partidas con batería y las partidas guardadas son artefactos distintos, y una partida escrita por un núcleo puede no cargarse en otro, así que guarda una copia de seguridad antes de cambiar."
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "Emulador de Sega Genesis y Mega Drive para iPhone | Retropa",
    "description": "Juega a tus propios juegos de Sega Genesis y Mega Drive en iPhone y iPad. Formatos .md, .smd y .gen, el núcleo JGenesis, asignación para seis botones y solución de problemas.",
    "summary": "Retropa ejecuta juegos de Sega Genesis y Mega Drive a partir de tus propios archivos con el núcleo JGenesis, con compatibilidad para mandos de seis botones, partidas guardadas y tratamientos de pantalla CRT.",
    "sections": [
      {
        "title": "Genesis y Mega Drive son el mismo sistema",
        "body": "La consola se lanzó como Mega Drive en Europa, Japón y gran parte de Asia, y como Genesis en Norteamérica. El hardware es el mismo, así que un archivo de juego funciona en ambos casos; solo cambia el nombre de la caja. Retropa incluye los dos nombres, y por eso las extensiones de archivo varían ligeramente según la región.",
        "points": [
          ".md y .smd son las imágenes habituales de Mega Drive.",
          ".gen es la extensión más común en Norteamérica.",
          "La extensión no cambia el hardware que el juego espera."
        ]
      },
      {
        "title": "El núcleo JGenesis",
        "body": "Retropa ejecuta títulos de Genesis y Mega Drive con JGenesis, que también cubre Master System, Game Gear y varios sistemas portátiles. Como un mismo núcleo sirve a varias plataformas, el sistema seleccionado para cada juego importa: importar un título de Master System con el sistema configurado como Genesis es una fuente habitual de confusión.",
        "points": [
          "JGenesis cubre MD, GEN, SMS y GG.",
          "Confirma el sistema detectado antes de informar de un problema.",
          "La elección de núcleo y sistema se recuerda para cada juego."
        ]
      },
      {
        "title": "Importa un juego de Mega Drive",
        "body": "Guarda el archivo en local en lugar de dejarlo como marcador en la nube y, después, elígelo desde la opción de importar de la biblioteca de Retropa. Abre el juego y confirma la imagen, el audio y la disposición táctil predeterminada antes de aplicar una skin o un filtro."
      },
      {
        "title": "Asignar un mando de seis botones",
        "body": "Los mandos de Genesis existían en versiones de tres y de seis botones, y algunos juegos se comportan de forma distinta según cuál detecten. En una disposición táctil, confirma que A, B, C y, cuando se ofrezcan, X, Y, Z y Mode estén todos a tu alcance, y prueba una combinación que el juego use de verdad.",
        "points": [
          "Verifica tanto la asignación de tres botones como la de seis.",
          "Revisa Start, que en muchos títulos también hace de pausa.",
          "Un mando físico emparejado evita la mayoría de las pulsaciones erróneas."
        ]
      },
      {
        "title": "Tratamiento de pantalla para una consola de 16 bits",
        "body": "La salida de Mega Drive está pensada para un CRT, así que un ajuste de líneas de barrido o de rejilla de apertura suele quedar más cerca del original que una rejilla de píxeles sin más, sobre todo con el tramado que el televisor habría mezclado. Los filtros avanzados de Retropa trabajan sobre el área de salida real y no sobre un múltiplo entero fijo.",
        "points": [
          "Parte de la imagen original y luego compara.",
          "Los patrones de tramado son una buena prueba para un ajuste de filtro.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de Genesis no arranca",
        "body": "Comprueba la extensión, la selección de sistema y el error exacto. Las discrepancias de región y de sistema son más frecuentes aquí que en sistemas de una sola plataforma, porque un mismo núcleo sirve a varias consolas. Mantén el archivo original intacto y confirma el sistema detectado antes de hacer cambios más profundos.",
        "points": [
          "Anota la versión de la app, el sistema detectado, el núcleo y el error.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte.",
          "Conserva una copia de seguridad aparte antes de mover partidas entre núcleos."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "¿Es lo mismo Mega Drive que Genesis?",
        "answer": "Sí. Es una sola consola con dos nombres regionales, así que un archivo de juego se ejecuta con cualquiera de los dos."
      },
      {
        "id": "six-button",
        "question": "¿Admite Retropa mandos de seis botones?",
        "answer": "La disposición táctil y la asignación de mandos externos cubren los botones adicionales, y algunos juegos cambian de comportamiento según la variante de mando que detecten."
      },
      {
        "id": "system-detect",
        "question": "¿Por qué se trata mi juego como si fuera de otro sistema?",
        "answer": "Un mismo núcleo sirve a varias plataformas de Sega, así que revisa el sistema detectado para ese juego y corrígelo antes de informar de un problema de compatibilidad."
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "Emulador de Game Gear para iPhone y iPad | Retropa",
    "description": "Juega a tus propios juegos .gg de Game Gear en iPhone y iPad. Qué núcleo los ejecuta, cómo importar un archivo, cómo configurar la pantalla y qué revisar cuando un juego falla.",
    "summary": "Retropa ejecuta juegos de Game Gear a partir de tus propios archivos .gg mediante el núcleo JGenesis, con un aspecto de pantalla retroiluminada, skins de consola portátil y asignación completa de controles.",
    "sections": [
      {
        "title": "Prepara un archivo .gg",
        "body": "Los juegos de Game Gear usan la extensión .gg. Retropa no incluye juegos ni archivos BIOS, así que ten el archivo preparado y guarda una copia fuera de la app antes de importarlo.",
        "points": [
          ".gg es la extensión de Game Gear.",
          "Un archivo .sms pertenece a Master System, no a Game Gear.",
          "Renombrar no convierte un archivo de un sistema a otro."
        ]
      },
      {
        "title": "Qué núcleo se encarga de Game Gear",
        "body": "JGenesis cubre Game Gear junto con Mega Drive, Genesis y Master System. Como un mismo núcleo sirve a varias plataformas de Sega, comprueba que el juego se detecte como Game Gear antes de investigar un problema de compatibilidad."
      },
      {
        "title": "Importación y primer arranque",
        "body": "Descarga el archivo en local y, después, selecciónalo desde la opción de importar de la biblioteca de Retropa. Confirma la imagen, el audio y los controles predeterminados antes de aplicar una skin, para que cualquier problema posterior tenga una causa evidente."
      },
      {
        "title": "Una pantalla pequeña y retroiluminada",
        "body": "El panel de Game Gear era retroiluminado y pequeño, así que un tratamiento de rejilla LCD suele sentarle bien, mientras que un ajuste CRT más marcado se verá notablemente más pesado que el hardware original. Los filtros avanzados de Retropa se adaptan al área de salida real en lugar de exigir un múltiplo entero.",
        "points": [
          "Compara cada ajuste con la imagen original.",
          "Los filtros avanzados requieren Retropa Plus.",
          "Comprueba que la skin no tape la vista del juego."
        ]
      },
      {
        "title": "Controles y orientación",
        "body": "El hardware de Game Gear incorporaba una cruceta direccional, dos botones de acción y Start. El reducido número de botones hace que una disposición vertical resulte cómoda, pero comprueba que Start quede a tu alcance sin cambiar el agarre y prueba las diagonales."
      },
      {
        "title": "Cuando un juego de Game Gear no se ejecuta",
        "body": "Confirma la extensión, el sistema detectado y el texto exacto del error. Un archivo de Master System importado como Game Gear, o al contrario, es una causa frecuente. Mantén el archivo original intacto durante las pruebas.",
        "points": [
          "Anota la versión de la app, el sistema detectado, el núcleo y el error.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte.",
          "Guarda una copia de seguridad antes de mover partidas entre núcleos."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "¿Es lo mismo Game Gear que Master System?",
        "answer": "Están muy relacionados, pero son sistemas distintos con extensiones de archivo diferentes. Un mismo núcleo ejecuta ambos, así que comprueba como qué sistema se detecta cada archivo."
      },
      {
        "id": "bios",
        "question": "¿Necesita Game Gear un archivo BIOS?",
        "answer": "No en los núcleos que incluye Retropa. Si un núcleo indica que lo necesita, sigue el aviso de ese núcleo en lugar de importar un archivo que no corresponde."
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "Emulador de Master System para iPhone y iPad | Retropa",
    "description": "Ejecuta tus propios juegos .sms de Sega Master System en iPhone y iPad. Cobertura de núcleos, pasos de importación, disposición de controles y qué revisar cuando un título no arranca.",
    "summary": "Retropa ejecuta juegos de Sega Master System a partir de tus propios archivos .sms con el núcleo JGenesis, con skins de consola portátil, tratamientos de pantalla y asignación de mandos.",
    "sections": [
      {
        "title": "Prepara un archivo .sms",
        "body": "Los juegos de Master System usan la extensión .sms. Retropa no suministra juegos ni archivos BIOS, así que prepara el archivo y guarda una copia de seguridad fuera de la app.",
        "points": [
          ".sms es la extensión de Master System.",
          ".gg pertenece a Game Gear y es un sistema distinto.",
          "Los contenedores ZIP y RetroPack se pueden abrir directamente."
        ]
      },
      {
        "title": "Cobertura de núcleos",
        "body": "JGenesis se encarga de Master System junto con Mega Drive, Genesis y Game Gear. Dado que un mismo núcleo sirve a varias plataformas, confirmar el sistema detectado es el primer paso de diagnóstico cuando un archivo se comporta de forma inesperada."
      },
      {
        "title": "Importar y verificar",
        "body": "Mantén el archivo en el almacenamiento local y, después, elígelo desde la opción de importar de la biblioteca de Retropa. Revisa la imagen, el audio y la disposición predeterminada antes de aplicar una skin o un ajuste de pantalla."
      },
      {
        "title": "Dos botones, una cruceta direccional",
        "body": "Los mandos de Master System usaban una cruceta direccional, dos botones de acción y, en algunos modelos, un botón de pausa en la propia consola. En una disposición táctil merece la pena confirmar que la pausa esté asignada a algún sitio accesible, porque es fácil pasarla por alto."
      },
      {
        "title": "Tratamiento de imagen",
        "body": "Los títulos de Master System están pensados para una pantalla CRT. Los ajustes de líneas de barrido y de rejilla de apertura suelen quedar más cerca del original que una rejilla de píxeles sin más, y los filtros avanzados de Retropa se adaptan al área de salida real en lugar de a un múltiplo entero fijo.",
        "points": [
          "Compara los ajustes con la imagen original.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de Master System no arranca",
        "body": "Comprueba la extensión, el sistema detectado y el error concreto. Las diferencias de región y las confusiones entre Master System y Game Gear son las causas habituales. Mantén el archivo original intacto mientras diagnosticas.",
        "points": [
          "Anota la versión de la app, el sistema detectado, el núcleo y el error.",
          "No adjuntes ROMs ni archivos BIOS comerciales a una solicitud de soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "¿Cómo sé si un archivo es de Master System o de Game Gear?",
        "answer": "Fíjate en la extensión: .sms es Master System y .gg es Game Gear. Retropa muestra el sistema detectado para el juego importado."
      },
      {
        "id": "pause",
        "question": "¿Dónde está el botón de pausa?",
        "answer": "En el hardware original estaba en la consola y no en el mando. En Retropa forma parte de la disposición en pantalla, así que comprueba que esté asignado a una tecla que puedas alcanzar."
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "Emulador de WonderSwan para iPhone y iPad | Retropa",
    "description": "Juega a tus propios juegos .ws de WonderSwan en iPhone y iPad. El núcleo Ares, la orientación vertical, pasos de importación y solución de problemas para una portátil poco común.",
    "summary": "Retropa ejecuta juegos de WonderSwan a partir de tus propios archivos .ws con el núcleo Ares, incluida la orientación vertical para la que se diseñó el hardware.",
    "sections": [
      {
        "title": "Prepara un archivo .ws",
        "body": "Los juegos de WonderSwan usan la extensión .ws, mientras que WonderSwan Color usa .wsc. Retropa no incluye juegos ni archivos BIOS; prepara el archivo y guarda una copia de seguridad.",
        "points": [
          ".ws es WonderSwan; .wsc es WonderSwan Color.",
          "Son dos sistemas distintos con capacidades diferentes.",
          "Renombrar no actualiza un juego al modelo en color."
        ]
      },
      {
        "title": "El núcleo Ares",
        "body": "Ares se encarga de WonderSwan y WonderSwan Color en Retropa, junto con otros sistemas portátiles. Si un título no arranca, confirma que el archivo sea una imagen limpia y que el sistema detectado coincida con la extensión del archivo antes de cambiar ajustes."
      },
      {
        "title": "Importación y primera ejecución",
        "body": "Guarda el archivo en local y, después, selecciónalo desde la opción de importar de la biblioteca de Retropa. Verifica la imagen, el audio y los controles predeterminados antes de aplicar una skin o un ajuste de pantalla."
      },
      {
        "title": "Una portátil pensada para sujetarse en vertical",
        "body": "La WonderSwan se diseñó para funcionar en ambas orientaciones, y muchos títulos se crearon para jugarse en vertical. Retropa admite disposiciones verticales, así que comprueba si el juego que estás usando espera una pantalla girada antes de decidir que la imagen se ve mal.",
        "points": [
          "Prueba la orientación vertical además de la horizontal.",
          "No todos los títulos usan la misma orientación.",
          "Confirma que todos los controles queden a tu alcance en la orientación que elijas."
        ]
      },
      {
        "title": "Tratamiento de pantalla",
        "body": "La WonderSwan usaba un panel monocromo reflectante con una estructura de píxeles característica. Un ajuste de rejilla LCD suele encajar con él, mientras que un ajuste CRT se verá más pesado que el hardware original. Los filtros avanzados se adaptan al área de salida real.",
        "points": [
          "Usa la imagen original como referencia.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de WonderSwan no arranca",
        "body": "Comprueba la extensión, el sistema detectado y el error exacto. Instalar un archivo .wsc como WonderSwan, o al contrario, es una confusión frecuente. Mantén el archivo original intacto durante las pruebas.",
        "points": [
          "Anota la versión de la app, el sistema detectado, el núcleo y el error.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "¿Cambia el archivo según el modelo en color?",
        "answer": "Sí. WonderSwan y WonderSwan Color usan extensiones diferentes, y un título en color puede no comportarse correctamente en el sistema monocromo."
      },
      {
        "id": "orientation",
        "question": "¿Por qué parece que la pantalla está girada?",
        "answer": "Muchos títulos de WonderSwan se diseñaron para jugarse en vertical. Prueba la disposición vertical antes de dar por hecho que la imagen está mal."
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "Emulador de Neo Geo Pocket para iPhone y iPad | Retropa",
    "description": "Ejecuta tus propios juegos .ngp y .ngpc de Neo Geo Pocket en iPhone y iPad. Cobertura de núcleos, los controles tipo joystick y en qué se diferencia del arcade Neo Geo.",
    "summary": "Retropa ejecuta juegos de Neo Geo Pocket y Neo Geo Pocket Color a partir de tus propios archivos con el núcleo Ares, y es independiente de la emulación de arcade Neo Geo.",
    "sections": [
      {
        "title": "Neo Geo Pocket no es el arcade Neo Geo",
        "body": "La Neo Geo Pocket y la Neo Geo Pocket Color son consolas portátiles. Comparten marca con el hardware arcade Neo Geo MVS y AES, pero son sistemas completamente distintos, con archivos y núcleos diferentes. La compatibilidad con arcade de Retropa requiere Plus; la emulación de Pocket, no.",
        "points": [
          ".ngp es Neo Geo Pocket; .ngpc y .ngc son el modelo en color.",
          "Un neogeo.zip de arcade no es un juego de Pocket.",
          "Las bibliotecas de arcade y de Pocket son independientes."
        ]
      },
      {
        "title": "Prepara el archivo correcto",
        "body": "Revisa la extensión antes de importar. Un juego de Pocket es una única imagen de consola portátil, mientras que un conjunto arcade de Neo Geo suele constar de varios archivos de chip y una BIOS opcional. Tratar uno como si fuera el otro es el error más habitual con este sistema."
      },
      {
        "title": "El núcleo Ares",
        "body": "Ares se encarga de Neo Geo Pocket y Neo Geo Pocket Color junto con otras plataformas portátiles en Retropa. Si un juego no arranca, confirma la extensión y el sistema detectado, y plantéate después si el archivo es una imagen limpia."
      },
      {
        "title": "Un joystick de microinterruptores, no una cruceta",
        "body": "La Neo Geo Pocket usaba un joystick con clic de microinterruptores en lugar de una cruceta direccional convencional. En la práctica, esto significa que las diagonales precisas importan más de lo habitual, así que al probar una disposición táctil verifica que la entrada diagonal se registre con claridad en lugar de comprobar solo las cuatro direcciones básicas.",
        "points": [
          "Prueba las diagonales de forma explícita.",
          "Confirma que los dos botones de acción sean cómodos en sesiones largas.",
          "Merece la pena usar un mando físico emparejado para los juegos de lucha."
        ]
      },
      {
        "title": "Tratamiento de pantalla",
        "body": "El panel en color de la Pocket es pequeño y de baja resolución, así que un tratamiento LCD ligero suele sentarle mejor que un ajuste CRT intenso. Los filtros avanzados de Retropa trabajan sobre el área de salida real en lugar de exigir un múltiplo entero.",
        "points": [
          "Compara con la imagen original.",
          "Los filtros avanzados requieren Retropa Plus."
        ]
      },
      {
        "title": "Cuando un juego de Pocket no arranca",
        "body": "Confirma la extensión, el sistema detectado y el error exacto. Si tienes archivos de arcade en la biblioteca, comprueba que no hayas seleccionado uno de ellos. Mantén el archivo original intacto mientras diagnosticas.",
        "points": [
          "Anota la versión de la app, el sistema detectado, el núcleo y el error.",
          "No envíes ROMs ni archivos BIOS comerciales al soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "¿Puedo jugar aquí a juegos de arcade Neo Geo?",
        "answer": "Es un sistema aparte, con sus propios núcleos y archivos. Retropa admite familias de arcade, y esas requieren Retropa Plus; la emulación de Neo Geo Pocket es independiente."
      },
      {
        "id": "neogeo-zip",
        "question": "¿Necesito un neogeo.zip para los juegos de Pocket?",
        "answer": "No. Ese archivo está relacionado con el hardware arcade de Neo Geo. Los juegos de Pocket no lo usan."
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "Emulador de Neo Geo para iPhone y iPad | Retropa",
    "description": "Juega con Retropa a los archivos de arcade Neo Geo MVS compatibles en iPhone y iPad. Estructura del conjunto, requisitos de BIOS, conjuntos principales y derivados, y qué revisar cuando un juego no arranca.",
    "summary": "Retropa ejecuta conjuntos de arcade Neo Geo compatibles en iPhone y iPad con controles táctiles y externos y filtros CRT. El juego de arcade requiere Retropa Plus; no se incluyen juegos ni archivos BIOS.",
    "sections": [
      {
        "title": "El arcade Neo Geo requiere Plus",
        "body": "La emulación de arcade Neo Geo forma parte de la familia de arcade de Retropa, y los núcleos de arcade requieren Retropa Plus. Esto es independiente de Neo Geo Pocket, un sistema portátil cubierto por la compatibilidad estándar de Pocket.",
        "points": [
          "Las familias de arcade requieren Retropa Plus.",
          "Neo Geo Pocket es un sistema portátil distinto.",
          "En ningún caso se incluyen juegos ni archivos BIOS."
        ]
      },
      {
        "title": "Un conjunto de arcade no es un solo archivo",
        "body": "La emulación de consola suele implicar un archivo por juego. El hardware de arcade funciona de otra manera: un juego es un conjunto de archivos de chip, a menudo agrupados en un ZIP, y muchos juegos dependen de un conjunto principal o de una BIOS. Por eso un ZIP de arcade se comporta de forma distinta a una ROM de consola portátil.",
        "points": [
          "Mantén el ZIP intacto salvo que el proceso de importación te pida descomprimirlo.",
          "Puede ser necesario un archivo BIOS aparte.",
          "Puede que un conjunto derivado no contenga todos los archivos que necesita el núcleo."
        ]
      },
      {
        "title": "Importación y primer arranque",
        "body": "Selecciona el conjunto desde la opción de importar de la biblioteca de Retropa y, después, inícialo con la disposición predeterminada. Si el núcleo avisa de que falta un archivo o una BIOS, lee ese mensaje con atención: la falta de un conjunto principal y la de una BIOS requieren soluciones distintas.",
        "points": [
          "Lee el error exacto antes de cambiar nada.",
          "Conserva el archivo original mientras diagnosticas.",
          "Confirma que los controles de insertar moneda e iniciar estén a tu alcance."
        ]
      },
      {
        "title": "Los archivos de Neo Geo Pocket no funcionan aquí",
        "body": "Si tienes archivos .ngp o .ngpc, pertenecen a los sistemas Pocket y no a la familia de arcade. Una ROM de Pocket o un ZIP renombrado no pueden sustituir a un conjunto de arcade, y lo contrario también es cierto.",
        "points": [
          ".ngp y .ngpc son archivos portátiles de Pocket.",
          "Los conjuntos de arcade tienen varios archivos y pueden necesitar una BIOS.",
          "Comprueba el sistema detectado antes de informar de un problema."
        ]
      },
      {
        "title": "Controles y pantalla de arcade",
        "body": "El hardware de arcade espera un joystick y varios botones de acción, y muchos títulos dependen de pulsaciones simultáneas. Retropa admite controles en pantalla y mandos externos compatibles, e incluye tratamientos CRT que encajan con la salida de arcade. Los filtros avanzados requieren Plus.",
        "points": [
          "Empareja el mando en iOS antes de asignarlo.",
          "Prueba una diagonal junto con un botón al mismo tiempo.",
          "Los ajustes CRT suelen encajar mejor con la salida de arcade que una rejilla sin más."
        ]
      },
      {
        "title": "Cuando un juego de Neo Geo no arranca",
        "body": "Comprueba la placa seleccionada, el contenido del conjunto y cualquier requisito de BIOS que indique el núcleo. Un conjunto derivado sin su principal, o un conjunto al que le falta un archivo necesario, no arrancará por mucho filtro o skin que apliques.",
        "points": [
          "Anota la versión de la app, la placa seleccionada, el núcleo y el error exacto.",
          "Cambiar el filtro o la skin no puede arreglar datos de ROM que faltan.",
          "No adjuntes ROMs ni archivos BIOS comerciales a una solicitud de soporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "¿Por qué los núcleos de arcade necesitan Plus?",
        "answer": "Las familias de arcade forman parte del conjunto de funciones de pago, junto con las skins premium y los filtros avanzados. Los sistemas Pocket y los de cartucho no lo requieren."
      },
      {
        "id": "bios",
        "question": "¿Necesito una BIOS de Neo Geo?",
        "answer": "Muchos conjuntos de arcade la esperan, y el núcleo te avisará si falta. Usa una BIOS que tengas derecho a usar; Retropa no ofrece descargas."
      },
      {
        "id": "pocket-confusion",
        "question": "¿Es lo mismo Neo Geo Pocket?",
        "answer": "No. Pocket es una consola portátil con sus propios archivos. Un conjunto de arcade y un juego de Pocket no son intercambiables."
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "Núcleo mGBA en iPhone y iPad | Retropa",
    "description": "Usa mGBA en Retropa para Game Boy, Game Boy Color y Game Boy Advance. Formatos del catálogo, comprobaciones en el primer arranque, precauciones con las partidas guardadas y cambio de núcleo con Plus.",
    "summary": "mGBA cubre la familia de consolas portátiles Game Boy en Retropa. Empieza con la disposición predeterminada y la imagen original y, después, comprueba una escena de juego real antes de cambiar los ajustes de presentación.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de mGBA: https://github.com/mgba-emu/mgba. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Primer arranque en las distintas generaciones portátiles",
        "body": "Descarga tu archivo en local desde Archivos, impórtalo desde la biblioteca de Retropa y confirma el sistema detectado. Un título de Game Boy Color necesita su ruta de hardware en color; cambiar el nombre del archivo no sirve para añadir ni quitar funciones de color. En Game Boy Advance, prueba L y R además de los botones frontales, porque una disposición pensada para las portátiles anteriores puede omitirlos.",
        "points": [
          "Revisa el sonido y la entrada después de la pantalla de título.",
          "Prueba la skin predeterminada antes de importar una disposición personalizada.",
          "Guarda el archivo original fuera de la app."
        ]
      },
      {
        "title": "Separa la emulación de los efectos de imagen",
        "body": "Si una escena se ve mal, compárala primero con los filtros desactivados. Un tratamiento de pantalla verde cambia el color a propósito y una rejilla LCD altera deliberadamente el aspecto de los píxeles. Esos efectos no permiten determinar si mGBA está renderizando mal el juego. Para un problema de audio o de sincronización, anota una escena que puedas repetir y la versión de la app en lugar de juzgar solo el logotipo de inicio."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "mGBA — Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "mGBA — Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "mGBA — Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "Límites del alcance portátil",
        "body": "mGBA no es la vía para Nintendo DS en Retropa. Un archivo de DS necesita el núcleo de DS del catálogo, no una imagen de Game Boy Advance renombrada. Del mismo modo, una partida guardada de otro emulador no es un archivo de juego y no debe importarse como tal. Sigue el aviso sobre la BIOS del sistema seleccionado si aparece; Retropa no suministra firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "¿Puedo cambiar el núcleo solo para un juego?",
        "answer": "Sí, con Retropa Plus. La selección se guarda por juego, pero haz una copia de seguridad de tus partidas antes de cambiarla y no esperes que las partidas guardadas funcionen entre núcleos."
      },
      {
        "id": "display",
        "question": "¿Solucionará otro filtro un problema de compatibilidad?",
        "answer": "No. Prueba primero con la imagen original. Un filtro cambia la presentación, no el hardware emulado ni el contenido del archivo del juego."
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "Núcleo SkyEmu en iPhone y iPad | Retropa",
    "description": "SkyEmu cubre la familia Game Boy y la ruta beta de Nintendo DS en Retropa. Consulta los formatos, los controles táctiles de doble pantalla, las limitaciones y el cambio de núcleo con Plus.",
    "summary": "SkyEmu gestiona la ruta beta de Nintendo DS además de las portátiles Game Boy en Retropa. La compatibilidad con DS depende de cada título y no promete que todos los juegos o interacciones táctiles funcionen correctamente.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de SkyEmu: https://github.com/skylersaleh/SkyEmu. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS con SkyEmu",
        "body": "Trata la compatibilidad con DS como algo específico de cada título. Importa un archivo descargado en local, confirma que se detectó Nintendo DS y prueba más allá de la pantalla inicial. Comprueba una escena con entrada táctil y otra con sonido antes de confiar en una sesión larga. Si un título se bloquea, anota la versión de la app y el fallo exacto; cambiar una skin no puede reparar un problema de compatibilidad del núcleo.",
        "points": [
          "El catálogo solo incluye SkyEmu para Nintendo DS.",
          "El cambio de núcleo con Plus no crea un núcleo alternativo para DS.",
          "Mantén copias de seguridad independientes mientras pruebas títulos de DS."
        ]
      },
      {
        "title": "Dos pantallas y entrada táctil",
        "body": "Elige una disposición que deje visibles ambas pantallas. La orientación vertical puede apilarlas; la horizontal depende de la skin. Prueba los objetivos táctiles pequeños al tamaño con el que juegas de verdad y verifica qué pantalla recibe la entrada táctil. Un mando físico puede encargarse de los botones asignados, pero no sustituye todas las interacciones táctiles.",
        "points": [
          "Prueba ambas pantallas, no solo la vista principal del juego.",
          "Deja los controles táctiles accesibles incluso con un mando externo.",
          "Una skin de portátil de una sola pantalla no es una disposición de DS."
        ]
      },
      {
        "title": "Usar SkyEmu para las portátiles anteriores",
        "body": "La familia Game Boy usa disposiciones de una sola pantalla. Confirma el sistema detectado y usa una skin adecuada antes de investigar problemas de color o de botones que faltan. ZIP y RetroPack son contenedores de importación, no sistemas emulados adicionales; el archivo que contienen debe coincidir igualmente con el catálogo. Renombrar un archivo de Game Boy Advance no lo convierte en un juego de DS."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "SkyEmu — Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "SkyEmu — Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "SkyEmu — Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "¿Qué núcleo ejecuta los juegos de Nintendo DS?",
        "answer": "SkyEmu es el núcleo catalogado de Retropa para Nintendo DS. La compatibilidad depende de cada título y el catálogo no incluye otro núcleo para DS."
      },
      {
        "id": "touch",
        "question": "¿Siguen necesitando entrada táctil los juegos de DS con un mando?",
        "answer": "Sí. Mantén la pantalla táctil accesible en los juegos que la usan; un mando no sustituye todas las acciones táctiles."
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "Núcleo SameBoy en iPhone y iPad | Retropa",
    "description": "SameBoy se centra en Game Boy y Game Boy Color en Retropa. Revisa el comportamiento del color, el alcance de los archivos, los límites de las partidas guardadas y el requisito de Plus para cambiar de núcleo.",
    "summary": "SameBoy se centra en el hardware original de Game Boy monocromo y en color. Su alcance más concreto lo convierte en un buen punto de comparación, no en una garantía de que los demás núcleos sean menos precisos.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de SameBoy: https://github.com/LIJI32/SameBoy. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Comprueba el color sin filtros",
        "body": "Importa el archivo que tienes guardado en local y confirma si Retropa lo identifica como Game Boy o como Game Boy Color. Empieza con la imagen original: un tratamiento DMG puede hacer que un título en color se vea monocromo a propósito. Usa una escena con cambios de color conocidos y compara la misma escena, no dos momentos distintos del juego."
      },
      {
        "title": "Probar la sincronización y la entrada",
        "body": "Usa la skin predeterminada para revisar la cruceta direccional, A, B, Start y Select. Si la sincronización o el sonido parecen fallar, anota exactamente cuándo ocurre y si persiste con los efectos de imagen desactivados. Con Retropa Plus, comparar con otro núcleo compatible puede ayudar a aislar la implementación, pero una diferencia visible por sí sola no demuestra qué núcleo se ajusta al hardware."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "SameBoy — Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "SameBoy — Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "SameBoy — Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "No es un núcleo de Game Boy Advance",
        "body": "SameBoy no cubre Game Boy Advance en Retropa. Usa un núcleo del catálogo compatible con GBA para una imagen de GBA; cambiarle la extensión no la convierte en un juego de Game Boy. Del mismo modo, cambiar a SameBoy no hará que una partida guardada creada por otro núcleo sea portátil. Conserva la partida anterior y prueba por separado una copia de seguridad de la partida del propio juego."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "¿Puede SameBoy ejecutar juegos de Game Boy Advance?",
        "answer": "No. La entrada de SameBoy en el catálogo de Retropa cubre Game Boy y Game Boy Color, no Game Boy Advance."
      },
      {
        "id": "why",
        "question": "¿Cuándo conviene comparar SameBoy con otro núcleo?",
        "answer": "Con Retropa Plus, compara un problema de sincronización, color o sonido que puedas repetir después de revisar el archivo y desactivar los filtros. Haz antes una copia de seguridad de las partidas."
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "Núcleo RusticoNES para NES en iPhone y iPad | Retropa",
    "description": "RusticoNES en Retropa: formatos de cartucho y de disco de NES y Famicom, comprobación de mappers, primer arranque, precauciones con las partidas guardadas y cambio de núcleo con Plus.",
    "summary": "RusticoNES es la vía de ejecución predeterminada para NES en Retropa. Úsala con los formatos de NES y Famicom del catálogo, comprobando los metadatos del cartucho y los requisitos de disco antes de tratar un arranque fallido como un problema de imagen.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de RusticoNES: https://github.com/zeta0134/rustico. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartuchos, UNIF e imágenes de disco",
        "body": "Una imagen de cartucho de NES o Famicom y una imagen de Famicom Disk System son entradas distintas. UNIF es un formato de contenedor de cartucho, no otro nombre para una cabecera iNES. Conserva la cabecera y la extensión originales al importar; renombrar el archivo o quitarle bytes para que parezca otro formato puede descartar información que se usa para identificar su placa.",
        "points": [
          "Guarda una copia aparte de la imagen original.",
          "Lee cualquier aviso sobre la BIOS del sistema de disco; Retropa no proporciona la BIOS.",
          "Los formatos de audio NSF no figuran para RusticoNES; consulta TetaNES en su lugar."
        ]
      },
      {
        "title": "Primer arranque y comprobaciones del mando",
        "body": "Descarga la imagen en local desde Archivos, impórtala a través de la biblioteca de Retropa y confirma que se detectó NES. Empieza con la skin predeterminada y sin efectos de imagen. Prueba la cruceta direccional, A, B, Start y Select, incluidas las diagonales y las pulsaciones simultáneas. Que falte un control en una disposición personalizada no es prueba de que el mapper esté mal."
      },
      {
        "title": "Cuando falla un cartucho y los demás funcionan",
        "body": "Los cartuchos de NES pueden incluir hardware de mapper distinto. Que se reconozca una extensión no demuestra que la placa que usa un juego concreto esté implementada. Anota el error exacto y, si lo conoces por los metadatos de tu propio volcado, el mapper y la región. No modifiques cabeceras al azar ni des por hecho que una BIOS arregla un problema de la placa del cartucho. En los juegos de disco, distingue entre una BIOS que falta y datos de disco que faltan."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "RusticoNES — Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "RusticoNES — Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "RusticoNES — Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "Compara solo los formatos que coinciden",
        "body": "La página del sistema NES muestra la unión de formatos de todos sus núcleos, no la promesa de que cada núcleo acepte todos ellos. Antes de usar Plus para comparar RusticoNES con TetaNES o JGenesis, revisa ambas entradas del catálogo para el formato del archivo original. Mantén la misma escena y los ajustes de imagen predeterminados, para que una skin o un filtro distinto no enturbie el resultado."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "¿Es RusticoNES el núcleo indicado para audio NSF?",
        "answer": "No. El catálogo de Retropa incluye NSF y NSFE bajo TetaNES, no bajo RusticoNES. Los archivos de audio no son juegos de cartucho con los que se pueda jugar."
      },
      {
        "id": "mapper",
        "question": "¿Garantiza una extensión compatible que un juego arranque?",
        "answer": "No. El mapper del cartucho, la integridad del archivo y los posibles requisitos del sistema de disco siguen importando. Anota el error exacto antes de modificar el archivo."
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "Núcleo TetaNES para NES en iPhone y iPad | Retropa",
    "description": "TetaNES en Retropa: juegos de NES y Famicom, imágenes de disco y audio NSF, comprobaciones según el formato, configuración del mando y el requisito de Plus para cambiar de núcleo.",
    "summary": "TetaNES es un núcleo alternativo para NES en Retropa, con cobertura de cartuchos, discos y archivos de música en el catálogo. Comprueba qué tipo de archivo has importado antes de esperar una pantalla de juego con la que jugar.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de TetaNES: https://github.com/lukexor/tetanes. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Los archivos de música no son juegos de cartucho",
        "body": "NSF y NSFE contienen datos musicales de NES. Si has importado uno, que no aparezca un nivel de juego normal no es un fallo en sí mismo. Comprueba la salida de audio y los controles que la app expone realmente; no des por hecho que Retropa incluya una interfaz de reproductor de música como la del proyecto original de escritorio. Para jugar, empieza con una imagen de cartucho o de disco que tengas derecho a usar.",
        "points": [
          "Revisa el volumen del dispositivo y la salida de audio cuando pruebes música.",
          "Renombrar un archivo de audio no puede convertirlo en una imagen de cartucho.",
          "Las extensiones UNIF pertenecen a la entrada de RusticoNES en el catálogo, no a la de TetaNES."
        ]
      },
      {
        "title": "Importa una imagen de cartucho o de disco",
        "body": "Descarga el archivo al dispositivo antes de usar la opción de importar de la biblioteca. Confirma la detección de NES y mantén la imagen original sin cambios. Famicom es el nombre japonés del sistema; Famicom Disk System añade requisitos de disco aparte. Si el núcleo seleccionado informa de un problema de BIOS o de datos de disco, resuelve ese requisito concreto en lugar de sustituir el archivo por una imagen de cartucho que no tiene relación."
      },
      {
        "title": "Prueba la entrada y una escena que puedas repetir",
        "body": "Usa una disposición de NES o Famicom con la cruceta direccional, dos botones de acción, Start y Select. Confirma las diagonales con la skin predeterminada y, después, prueba una escena que muestre el problema. Compara con la imagen original antes de aplicar un efecto CRT: las líneas de barrido pueden cambiar el detalle percibido sin cambiar lo que el núcleo emula."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "TetaNES — Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "TetaNES — Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "TetaNES — Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "Una alternativa no es una reparación universal",
        "body": "TetaNES y RusticoNES tienen listas de formatos e implementaciones diferentes. Cambiar de núcleo puede ayudar a aislar un problema de sincronización o de mapper solo cuando el archivo es válido para ambos; no puede garantizar la compatibilidad con una placa concreta. Las partidas guardadas del núcleo anterior deben seguir guardadas con ese núcleo, en lugar de tratarlas como archivos intercambiables."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "¿Por qué mi archivo NSF no muestra un juego con el que jugar?",
        "answer": "NSF son datos musicales. Prueba el audio en lugar de esperar un nivel de juego normal; usa una imagen de cartucho o de disco para jugar."
      },
      {
        "id": "switch",
        "question": "¿Puedo cambiar un juego de NES a TetaNES gratis?",
        "answer": "Cambiar de núcleo de emulación requiere Retropa Plus. Revisa antes la cobertura de formatos del núcleo de destino y haz una copia de seguridad de tu progreso."
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "Núcleo LakeSnes para SNES en iPhone y iPad | Retropa",
    "description": "LakeSnes en Retropa: formatos de SNES y Super Famicom, limitaciones de los chips de cartucho, controles de seis botones, copias de seguridad de partidas y cambio de núcleo con Plus.",
    "summary": "LakeSnes es el núcleo de Retropa centrado en SNES. Su catálogo incluye varios formatos de imagen y de copiador, pero el reconocimiento del archivo y la compatibilidad con el hardware de cartucho de un juego son cuestiones distintas.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de LakeSnes: https://github.com/dinkc64/LakeSnes. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Mantén intactas la imagen y su cabecera",
        "body": "SNES se conoce como Super Famicom en Japón. Las imágenes de cartucho habituales usan las extensiones SFC o SMC; el catálogo también incluye otros formatos de copiador y relacionados. La extensión por sí sola no demuestra si un archivo tiene una cabecera de copiador o si necesita hardware de cartucho especial. Importa la imagen original guardada en local y conserva una copia de seguridad, en lugar de quitar una cabecera como primer paso de diagnóstico."
      },
      {
        "title": "Revisa el mando completo",
        "body": "Después de importar desde la biblioteca, verifica el sistema detectado y empieza con la disposición predeterminada. SNES añade X, Y, L y R al patrón de dos botones de las portátiles. Prueba los botones superiores, las diagonales y alguna pulsación simultánea que use el juego; una skin vistosa que omita L o R puede hacer que un juego que funciona parezca bloqueado.",
        "points": [
          "Prueba Start y Select además de los seis botones de juego.",
          "Asigna un mando emparejado antes de juzgar las limitaciones de la disposición táctil.",
          "Usa la imagen original para separar los problemas de entrada de los de imagen."
        ]
      },
      {
        "title": "Límites de los chips de cartucho y los formatos especiales",
        "body": "Algunos títulos de SNES dependen de procesadores adicionales en el cartucho u otro hardware. La lista de extensiones del catálogo no es una lista de compatibilidad por chip, y que se reconozca un archivo BS o ST no demuestra que Retropa exponga todo flujo de trabajo con accesorios. Si solo falla un título, anota sus requisitos de hardware cuando los conozcas y el error exacto. No afirmes que un filtro o una extensión renombrada pueden añadir la compatibilidad de hardware que falta."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "Comparar LakeSnes con JGenesis",
        "body": "JGenesis también incluye SNES, pero su cobertura de extensiones para SNES es más limitada que la de LakeSnes. Con Plus, compara solo un formato de archivo que figure en ambas entradas. Vuelve a la misma escena con los mismos controles y sin filtro, y mantén separadas las partidas guardadas de cada núcleo. Que una comparación salga bien con un cartucho no demuestra la compatibilidad con todos los títulos de chip especial."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "¿Puede todo formato de LakeSnes ejecutarse también en JGenesis?",
        "answer": "No lo des por hecho. Consulta la entrada de cada núcleo en el catálogo; los formatos a nivel de sistema combinan la cobertura de varios núcleos."
      },
      {
        "id": "chips",
        "question": "¿Garantiza la lista de formatos la compatibilidad con chips especiales?",
        "answer": "No. El reconocimiento del archivo y la emulación del hardware del cartucho son cuestiones distintas. Revisa el error exacto y el núcleo seleccionado antes de modificar la imagen."
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "Núcleo JGenesis en iPhone y iPad | Retropa",
    "description": "JGenesis en Retropa: sistemas Sega y Nintendo del catálogo, los nombres Genesis y Mega Drive, límites entre formatos, detección del sistema y cambio de núcleo con Plus.",
    "summary": "JGenesis sirve a varios sistemas mediante una misma familia de núcleos en Retropa. El sistema detectado sigue determinando el hardware, los controles y el contexto de guardado; compartir núcleo no hace que los archivos sean intercambiables.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de JGenesis: https://github.com/jsgroth/jgenesis. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "NES / Famicom: .nes",
          "SNES / Super Famicom: .sfc, .smc",
          "Sega Master System: .sms",
          "Game Gear: .gg",
          "Mega Drive: .md, .smd",
          "Genesis: .gen"
        ]
      },
      {
        "title": "Los nombres Genesis y Mega Drive",
        "body": "Genesis es el nombre norteamericano de la consola conocida como Mega Drive en Japón y Europa. El catálogo de Retropa tiene entradas con ambos nombres. Las extensiones de archivo son pistas sobre el formato de la imagen, no identificadores fiables de región: el nombre del archivo por sí solo no indica los requisitos de sincronización o de región del juego. Conserva el archivo original y confirma el sistema detectado en lugar de renombrarlo para elegir un mercado."
      },
      {
        "title": "Importa para el hardware correcto",
        "body": "Descarga tu imagen en local desde Archivos e impórtala a través de la biblioteca. Antes de empezar, distingue Master System de Game Gear, y NES o Famicom de SNES o Super Famicom. Un núcleo multisistema sigue necesitando la ruta de hardware adecuada. Si el sistema detectado no es el esperado, revisa la identidad del archivo antes de cambiar ajustes de imagen o de controles.",
        "points": [
          "Master System y Game Gear son sistemas relacionados, no idénticos.",
          "Una lista de formatos de todo el sistema puede incluir formatos de otros núcleos.",
          "El catálogo de Retropa es el alcance que se trata aquí, no todas las funciones del proyecto original de JGenesis."
        ]
      },
      {
        "title": "Los controles varían según el sistema seleccionado",
        "body": "Para Genesis, prueba A, B, C y cualquier control adicional de seis botones que ofrezca la disposición. Para Game Gear, confirma Start; para Master System, revisa la entrada de pausa. Las disposiciones de SNES necesitan botones superiores que las de NES no tienen. Valida una combinación de mando en una escena real del juego antes de dar por hecho que el núcleo ha perdido una entrada."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "La cobertura de Sega no implica un núcleo alternativo",
        "body": "El catálogo de Retropa incluye JGenesis como único núcleo para sus sistemas Sega de cartucho. Plus desbloquea el cambio de núcleo donde existen alternativas; no añade una implementación que no figure en el catálogo. Tampoco implica que la compatibilidad multisistema del proyecto original haga que el CD, el hardware adicional o todas las opciones de escritorio estén disponibles dentro de Retropa. Usa el catálogo y los avisos reales de la app para establecer la vía compatible."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "¿Demuestra una extensión .gen que un juego es norteamericano?",
        "answer": "No. Genesis y Mega Drive son nombres regionales, pero una extensión no establece de forma fiable la región de un juego ni sus requisitos de sincronización."
      },
      {
        "id": "upstream",
        "question": "¿Expone Retropa todos los sistemas del proyecto original de JGenesis?",
        "answer": "No se ofrece tal garantía. Esta página basa su cobertura en el catálogo propio de Retropa, no en la lista completa de funciones del proyecto original."
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "Núcleo Ares en iPhone y iPad | Retropa",
    "description": "Ares en Retropa: cobertura de GBA, WonderSwan y Neo Geo Pocket en el catálogo, detección del modelo en color, disposiciones giradas, precauciones con las partidas guardadas y cambio de núcleo con Plus.",
    "summary": "Ares cubre varias familias de consolas portátiles en Retropa. Su amplia identidad en el proyecto original no significa que todos sus sistemas o accesorios estén integrados en la app.",
    "sections": [
      {
        "title": "Sistemas y formatos del catálogo",
        "body": "Proyecto original de Ares: https://github.com/ares-emulator/ares. La cobertura que aparece a continuación procede del catálogo de Retropa, no de la lista completa de funciones del proyecto original. Que una extensión figure en la lista no garantiza la compatibilidad con todos los títulos. Retropa no suministra juegos ni archivos BIOS; importa solo archivos que tengas derecho a usar.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Ajusta el modelo monocromo o en color",
        "body": "Importa una imagen descargada en local y comprueba si Retropa detectó la WonderSwan o la WonderSwan Color originales, y la Neo Geo Pocket o la Neo Geo Pocket Color. Los modelos en color tienen capacidades de las que carece el hardware monocromo. Renombrar un archivo no es una conversión y no puede hacer que un título exclusivo de color se ejecute como juego del modelo original.",
        "points": [
          "Conserva la imagen original y una copia de seguridad aparte del progreso.",
          "Revisa el modelo detectado antes de diagnosticar problemas de paleta.",
          "Sigue el aviso de firmware específico del sistema si aparece; no se suministra ninguna BIOS."
        ]
      },
      {
        "title": "La orientación de WonderSwan exige más que ponerlo en vertical",
        "body": "Los juegos de WonderSwan pueden estar diseñados para jugarse en horizontal o en vertical. Comprueba la orientación prevista del juego, ambos grupos de botones direccionales y la disposición de skin disponible. Girar el teléfono a vertical por sí solo no demuestra que la pantalla emulada y todos los controles se hayan rotado de forma adecuada. Si una disposición no puede exponer los controles necesarios, usa otra disposición adecuada en lugar de dar por hecho que el núcleo puede reasignarlos automáticamente."
      },
      {
        "title": "Pocket no es el arcade Neo Geo",
        "body": "Neo Geo Pocket usa imágenes de consola portátil, no los conjuntos de arcade con varios archivos asociados a la Neo Geo MVS. Un archivo BIOS de arcade no puede sustituir a una imagen de Pocket. Prueba las diagonales y ambos botones de acción con la disposición predeterminada. La pantalla original de Pocket es monocroma; solo de Pocket Color cabe esperar que muestre los gráficos del modelo en color. La ejecución de arcade es una capacidad independiente de Plus."
      },
      {
        "title": "Cambio de núcleo y conservación del progreso",
        "body": "Cambiar el núcleo de emulación requiere Retropa Plus, incluso cuando el propio sistema portátil está disponible sin compra. Compara solo núcleos que cubran tanto el sistema como el formato del archivo. La selección se recuerda para cada juego; haz una copia de seguridad de la partida propia del juego y de las partidas guardadas del núcleo original antes de probar la misma escena para comparar sonido, imagen y entrada.",
        "points": [
          "Las partidas guardadas registran el estado interno de un núcleo concreto; no esperes compatibilidad entre núcleos.",
          "Haz copia de seguridad y verifica también las partidas del propio juego; no se garantiza la migración automática.",
          "Cambiar de núcleo no convierte el archivo del juego ni aporta una BIOS que falte."
        ]
      },
      {
        "title": "Dónde hay comparación y dónde no",
        "body": "El catálogo incluye alternativas para Game Boy Advance, pero solo incluye Ares para los modelos WonderSwan y Neo Geo Pocket. El cambio de núcleo con Plus no añade otra implementación para esos sistemas. Ares también tiene un alcance mucho más amplio en el proyecto original que esta integración; usa solo la cobertura de Retropa que se indica aquí en lugar de dar por hecho que otro sistema del proyecto original puede habilitarse cambiando una extensión."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "¿Puede la compatibilidad de Ares con Pocket ejecutar mi conjunto de arcade Neo Geo?",
        "answer": "No. Pocket y el arcade Neo Geo son familias de hardware distintas con requisitos de archivo diferentes. La ejecución de arcade requiere Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "¿Añade Plus otro núcleo para WonderSwan o Pocket?",
        "answer": "No. Esos sistemas solo incluyen Ares en el catálogo de Retropa. El cambio de núcleo se aplica cuando existe una alternativa compatible."
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Alternativa a Delta",
    "title": "Alternativa a Delta para iPhone y iPad | Retropa",
    "description": "¿Buscas una alternativa a Delta en iPhone y iPad? Compara la compatibilidad con arcade, la importación de skins de Delta, los filtros de imagen y el modo consola, incluido en qué aspectos Delta es la mejor opción.",
    "summary": "Retropa es un emulador de arcade y consolas portátiles para iPhone y iPad que importa skins de Delta directamente, añade familias de arcade y filtros de imagen sin escalado entero, y mantiene una interfaz pensada para consolas portátiles.",
    "sections": [
      {
        "title": "Qué se conserva de Delta",
        "body": "Cambiar de emulador solo merece la pena si tu configuración actual sobrevive al cambio. Retropa importa los paquetes .deltaskin de Delta, así que no tienes que rehacer desde cero una disposición que ya habías ajustado. Comprueba que el paquete esté pensado para el sistema y la orientación con los que juegas y, después, confirma que la vista del juego quede despejada.",
        "points": [
          "Los paquetes .deltaskin se importan directamente.",
          "Comprueba el sistema previsto antes de confiar en una skin.",
          "La compatibilidad con horizontal y vertical depende del paquete."
        ]
      },
      {
        "title": "Dónde aporta Retropa algo que Delta no tiene",
        "body": "La diferencia más clara es la compatibilidad con arcade. Retropa ejecuta las familias de arcade compatibles CPS I, CPS II, CPS III, Neo Geo, PGM y M92 junto con los sistemas portátiles, de modo que una sola biblioteca cubre ambos. Los núcleos de arcade requieren Retropa Plus, y no se incluyen juegos ni archivos BIOS.",
        "points": [
          "Familias de arcade en la misma biblioteca que las portátiles.",
          "Se requiere Retropa Plus para los núcleos de arcade.",
          "Los conjuntos de arcade tienen varios archivos y pueden necesitar una BIOS."
        ]
      },
      {
        "title": "Filtros de imagen sin necesidad de escalado entero",
        "body": "Muchos filtros retro dan por hecho que la imagen del juego se corresponde con un número entero de píxeles de pantalla. En un iPhone moderno, el área disponible rara vez se divide de forma exacta, lo que deja espacio sin usar o líneas de barrido irregulares. Los filtros avanzados de Retropa trabajan en cambio sobre el área de salida real, en todas las orientaciones y disposiciones de skin. La app para iOS es la referencia; la vista previa del navegador en este sitio es una aproximación.",
        "points": [
          "Los filtros cambian la presentación, no la resolución del juego.",
          "Los filtros avanzados requieren Retropa Plus.",
          "Las superposiciones de líneas de barrido convencionales pueden parpadear en escalas fraccionarias."
        ]
      },
      {
        "title": "Dónde es Delta la mejor opción",
        "body": "Delta tiene una base de usuarios mucho mayor, más trayectoria en el App Store y una comunidad más amplia de skins publicadas. Si buscas la opción más utilizada, el catálogo de skins existente más completo o la mayor cantidad de tutoriales de terceros, Delta es una elección razonable y esta página no va a fingir lo contrario.",
        "points": [
          "Delta tiene una comunidad mayor y más material de terceros.",
          "Delta se beneficia del efecto red en torno a las skins.",
          "Retropa es un producto más reciente y con un catálogo más pequeño."
        ]
      },
      {
        "title": "Probar los dos no cuesta nada",
        "body": "Las dos apps se descargan gratis y ofrecen compras opcionales dentro de la app. Lo práctico es importar una skin de Delta en Retropa, cargar un juego de consola portátil y un conjunto de arcade, y decidir según cómo se sientan de verdad los controles y la imagen en tu dispositivo.",
        "points": [
          "Las dos se descargan gratis.",
          "En cualquiera de los casos, conserva tus archivos y skins originales.",
          "Juzga en tu propio dispositivo, no con una tabla comparativa."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "¿Puede Retropa importar mis skins actuales de Delta?",
        "answer": "Sí. Retropa importa paquetes .deltaskin. Conserva el archivo del paquete original y comprueba que esté pensado para el sistema y la orientación con los que juegas."
      },
      {
        "id": "free",
        "question": "¿Retropa es gratis?",
        "answer": "Retropa se descarga gratis y ofrece compras opcionales dentro de la app. Los núcleos de arcade, las skins premium y los filtros avanzados requieren Retropa Plus. Los precios se muestran en la app."
      },
      {
        "id": "roms",
        "question": "¿Retropa incluye juegos?",
        "answer": "No. Retropa es un emulador y no proporciona juegos ni archivos BIOS. Importa solo contenido que tengas derecho a usar."
      },
      {
        "id": "which-better",
        "question": "¿Qué emulador es mejor?",
        "answer": "Cada uno optimiza cosas distintas. Delta tiene la comunidad y el catálogo de skins más amplios; Retropa añade familias de arcade, filtros sin escalado entero e importación de skins de Delta. Prueba los dos en tu propio dispositivo."
      }
    ],
    "attribution": "Delta es un producto de terceros. Todos los nombres de productos y empresas mencionados en esta página son marcas de sus respectivos propietarios, y aquí se usan únicamente para identificarlos y compararlos de forma objetiva. Retropa no está afiliada a ninguno de ellos, ni cuenta con su respaldo o patrocinio.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa frente a Delta",
    "title": "Retropa frente a Delta: arcade, filtros y skins comparados",
    "description": "Una comparación directa entre Retropa y Delta en iPhone y iPad: sistemas emulados, compatibilidad con arcade, compatibilidad de skins, filtros de imagen y en qué casos encaja mejor cada uno.",
    "summary": "Retropa y Delta son dos emuladores para iOS, pero optimizan cosas distintas: Delta ofrece la comunidad y el catálogo de skins más amplios, mientras que Retropa añade familias de arcade y filtros de imagen sin escalado entero.",
    "sections": [
      {
        "title": "Sistemas emulados",
        "body": "Las dos apps cubren los sistemas portátiles que busca la mayoría de la gente. Además, Retropa ejecuta las familias de arcade compatibles, que es la mayor diferencia funcional con diferencia. Los núcleos de arcade requieren Retropa Plus; los sistemas portátiles, no.",
        "points": [
          "La cobertura de consolas portátiles se solapa en gran medida.",
          "Las familias de arcade son específicas de Retropa.",
          "Jugar a arcade requiere Plus."
        ]
      },
      {
        "title": "Skins y disposiciones",
        "body": "Retropa importa los paquetes .deltaskin de Delta, así que una disposición que ya uses puede trasladarse. Más allá de eso, el ecosistema de skins publicadas de Delta es más amplio, lo cual importa si explorar un catálogo grande forma parte de lo que buscas.",
        "points": [
          "Retropa importa paquetes .deltaskin.",
          "Delta tiene el catálogo publicado más amplio.",
          "Verifica siempre que un paquete admita tu sistema y tu orientación."
        ]
      },
      {
        "title": "Filtros de imagen",
        "body": "Retropa ofrece filtros CRT y LCD avanzados que se adaptan al área de salida real en lugar de exigir un factor de escala entero, y puede usar cadenas de shaders de RetroArch, incluidos los ajustes .slang y .slangp. Los filtros avanzados requieren Plus. La vista previa de la web es una aproximación; la app para iOS es la referencia.",
        "points": [
          "Los filtros avanzados no exigen escalado entero.",
          "La compatibilidad con cadenas de shaders de RetroArch figura para Retropa.",
          "Los filtros avanzados requieren Plus."
        ]
      },
      {
        "title": "Comunidad, documentación y trayectoria",
        "body": "Delta lleva más tiempo en el App Store, tiene muchos más usuarios y, por tanto, mucha más documentación de la comunidad, respuestas en foros y guías de terceros. Retropa es más reciente y más pequeño. Quien afirme lo contrario no está describiendo el estado actual de ninguno de los dos productos.",
        "points": [
          "Delta tiene más trayectoria en el App Store.",
          "Delta tiene más respuestas de la comunidad disponibles.",
          "Retropa tiene hoy una base de usuarios más pequeña."
        ]
      },
      {
        "title": "Cómo elegir",
        "body": "Si los títulos de arcade te importan, o quieres filtros de imagen que no den por hecho una escala de números enteros, merece la pena instalar Retropa. Si buscas el catálogo de skins más amplio y la mayor cantidad de material de la comunidad, Delta es la opción más segura. Los dos se descargan gratis, así que el consejo honesto es probar ambos con tus propios archivos.",
        "points": [
          "Las dos se descargan gratis.",
          "No hace falta comprometerse para evaluar ninguna de las dos.",
          "En ambos casos debes aportar tus propios archivos de juego."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "¿Admite Delta juegos de arcade?",
        "answer": "Esa comparación no es algo que esta página pueda verificar. Lo que sí puede afirmar es que Retropa ejecuta las familias de arcade compatibles CPS, Neo Geo, PGM y M92, y que los núcleos de arcade requieren Retropa Plus."
      },
      {
        "id": "skins",
        "question": "¿Puedo usar las mismas skins en los dos?",
        "answer": "Retropa importa los paquetes .deltaskin de Delta, así que un paquete que funcione en Delta normalmente se puede importar en Retropa. Comprueba el sistema de destino y la orientación después de importarlo."
      },
      {
        "id": "price",
        "question": "¿Cuánto cuestan?",
        "answer": "Retropa se descarga gratis y ofrece compras opcionales dentro de la app. Retropa Plus es necesario para los núcleos de arcade, las skins premium y los filtros avanzados. Los precios actuales se muestran dentro de la app."
      }
    ],
    "attribution": "Delta es un producto de terceros. Todos los nombres de productos y empresas mencionados en esta página son marcas de sus respectivos propietarios, y aquí se usan únicamente para identificarlos y compararlos de forma objetiva. Retropa no está afiliada a ninguno de ellos, ni cuenta con su respaldo o patrocinio.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Importar juegos",
    "title": "Cómo importar juegos en Retropa para iPhone y iPad",
    "description": "Importa tus propios archivos de juego en Retropa para iPhone y iPad: dónde está la opción de importar, por qué falla un marcador en la nube, qué formatos funcionan y qué hacer cuando se rechaza un archivo.",
    "summary": "Un recorrido paso a paso para importar tus propios archivos de juego en Retropa, incluidos los formatos que funcionan, cómo se comportan los contenedores ZIP y cómo recuperarte de una importación fallida.",
    "sections": [
      {
        "title": "Antes de empezar",
        "body": "Retropa no incluye juegos ni archivos BIOS. Necesitas un archivo de juego que tengas derecho a usar, guardado en el propio dispositivo. Conserva una copia intacta fuera de la app, para que un error durante la importación no te cueste nunca el original.",
        "points": [
          "Importa solo contenido que tengas derecho a usar.",
          "Guarda una copia de seguridad aparte de cada archivo original.",
          "La app se descarga gratis; los juegos no se proporcionan."
        ]
      },
      {
        "title": "Primer paso: llevar el archivo al dispositivo",
        "body": "Descarga el archivo para que resida en el almacenamiento local y no como marcador en la nube. Esta es la causa más habitual de una importación fallida: la app Archivos muestra el elemento, pero los datos aún no están en el dispositivo, así que el emulador no recibe nada utilizable.",
        "points": [
          "Abre el archivo una vez en Archivos para confirmar que está descargado.",
          "Un archivo que aparece atenuado o que pide descargarse es un marcador.",
          "Completa la descarga antes de importar."
        ]
      },
      {
        "title": "Segundo paso: importar desde la biblioteca",
        "body": "Abre la opción de importar en la biblioteca de Retropa y selecciona el archivo. Comprueba que el sistema se detecte correctamente y, después, inicia el juego con la disposición predeterminada antes de cambiar skins o filtros, para que cualquier problema posterior tenga una causa evidente."
      },
      {
        "title": "Qué formatos de archivo funcionan",
        "body": "Retropa acepta los formatos de archivo que coinciden con sus sistemas compatibles y también puede abrir contenedores ZIP y RetroPack directamente. La extensión tiene que coincidir con el sistema: un archivo de Game Boy es .gb, el de Game Boy Color es .gbc, el de Game Boy Advance es .gba y el de DS es .nds.",
        "points": [
          "Cambiar una extensión no convierte un juego de un sistema a otro.",
          "Los contenedores ZIP y RetroPack se pueden abrir sin descomprimirlos.",
          "Los conjuntos de arcade tienen varios archivos y se gestionan de otra manera."
        ]
      },
      {
        "title": "Cuando falla una importación",
        "body": "Lee primero el error exacto y, después, revisa tres cosas por orden: si el archivo está totalmente descargado, si la extensión coincide con el sistema y si el archivo es una imagen limpia en lugar de una descarga parcial. Solo después de esas comprobaciones merece la pena sospechar del núcleo del emulador.",
        "points": [
          "Termina primero cualquier descarga incompleta.",
          "Confirma que la extensión coincide con el sistema.",
          "Prueba el núcleo alternativo para ese sistema antes de darte por vencido."
        ]
      },
      {
        "title": "Archivos, partidas y partidas guardadas",
        "body": "Tu archivo de juego, los datos de guardado propios del juego y una partida guardada del emulador son tres cosas distintas. Renombrar una para convertirla en otra no funciona. Haz copia de seguridad de las tres antes de moverlas entre núcleos o apps, porque los formatos de las partidas guardadas no son portátiles entre todos los núcleos.",
        "points": [
          "Mantén intacto el archivo de juego original.",
          "Guarda por separado las partidas con batería y las partidas guardadas.",
          "No esperes que una partida guardada de un núcleo se cargue en otro."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "¿Retropa viene con juegos?",
        "answer": "No. Retropa es un emulador y no proporciona juegos ni archivos BIOS. Importas los archivos que tienes derecho a usar."
      },
      {
        "id": "cloud",
        "question": "¿Por qué no se importa mi archivo?",
        "answer": "La causa más habitual es que sea un marcador en la nube y no un archivo descargado. Ábrelo en Archivos para forzar la descarga y vuelve a importarlo."
      },
      {
        "id": "zip",
        "question": "¿Puedo importar un archivo ZIP?",
        "answer": "Retropa puede abrir contenedores ZIP y RetroPack directamente, así que normalmente no hace falta descomprimirlos, salvo que un proceso de importación concreto lo pida."
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "Mandos",
    "title": "Conectar un mando a Retropa en iPhone y iPad",
    "description": "Empareja un mando Bluetooth o con cable con iOS y asígnalo dentro de Retropa, además de cómo diagnosticar botones que no responden o asignaciones que cambian según el juego.",
    "summary": "Empareja primero un mando compatible con iOS y, después, verifica la asignación dentro de Retropa para cada sistema y cada juego. Esta guía cubre el orden de emparejamiento, los errores de asignación habituales y las configuraciones con táctil y mando a la vez.",
    "sections": [
      {
        "title": "Empareja con iOS antes de abrir Retropa",
        "body": "El mando tiene que ser conocido primero por iOS. Empareja el mando en los ajustes del sistema, confirma que responde ahí y solo entonces abre Retropa. Un mando que nunca se ha emparejado a nivel de sistema no aparecerá dentro de la app, hagas lo que hagas en sus ajustes.",
        "points": [
          "Empareja primero en los ajustes de iOS.",
          "Confirma que el mando responde en el sistema.",
          "Después, compruébalo dentro de Retropa."
        ]
      },
      {
        "title": "La asignación se revisa por sistema, no una sola vez",
        "body": "Retropa guarda las disposiciones de control por sistema, porque una Game Boy necesita seis controles mientras que un mando de SNES necesita diez. Trata la asignación como una tarea por sistema: después de emparejar una vez, verifica la asignación de cada sistema con el que juegues de verdad.",
        "points": [
          "Game Boy: cruceta direccional, A, B, Start, Select.",
          "SNES añade X, Y, L y R.",
          "Las disposiciones de arcade añaden varios botones de acción."
        ]
      },
      {
        "title": "Los botones que la gente olvida probar",
        "body": "En la práctica, los fallos se concentran en los mismos controles: los botones superiores en mandos de seis botones, Start y Select, que son fáciles de colocar fuera de alcance, y las diagonales, que importan más en sistemas cuyo mando original usaba un joystick de microinterruptores.",
        "points": [
          "Prueba L y R de forma explícita al asignar.",
          "Comprueba que Start y Select estén a tu alcance.",
          "Prueba las diagonales, no solo las cuatro direcciones básicas."
        ]
      },
      {
        "title": "Los controles táctiles y un mando pueden convivir",
        "body": "Algunos juegos necesitan una interacción táctil que un mando físico no puede sustituir, sobre todo en sistemas de doble pantalla. Mantener la disposición en pantalla disponible junto a un mando emparejado suele ser más práctico que ir alternando entre ambos.",
        "points": [
          "No desactives los controles táctiles si un juego usa la pantalla táctil.",
          "Comprueba que las superposiciones no tapen la vista del juego.",
          "La háptica y la disposición táctil se pueden ajustar por separado."
        ]
      },
      {
        "title": "Cuando un botón no responde",
        "body": "Avanza desde el mando hacia fuera: confirma que responde en iOS, después en Retropa y luego en un juego que use ese botón con seguridad. Si la asignación parece correcta pero un juego ignora un control, puede que el juego no use ese control en absoluto, algo habitual en los primeros títulos portátiles.",
        "points": [
          "Verifica primero el mando en los ajustes de iOS.",
          "Revisa la asignación dentro de Retropa.",
          "Confirma que el juego use realmente ese botón."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "¿Qué mandos funcionan?",
        "answer": "Los mandos compatibles con iOS se pueden usar con Retropa. Empareja el mando primero en los ajustes de iOS y, después, revisa la asignación dentro de la app."
      },
      {
        "id": "mapping-lost",
        "question": "¿Por qué ha cambiado mi asignación?",
        "answer": "Las disposiciones se guardan por sistema y por juego, así que una asignación que configures para un sistema no se aplica automáticamente a otro. Revisa la asignación del sistema con el que estés jugando en ese momento."
      },
      {
        "id": "touch",
        "question": "¿Dejan de funcionar los controles táctiles con un mando?",
        "answer": "No. Los controles táctiles siguen disponibles, algo útil en sistemas donde un juego necesita una interacción táctil o de segunda pantalla."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "Partidas guardadas",
    "title": "Partidas guardadas y rebobinado en Retropa | iPhone y iPad",
    "description": "Entiende la diferencia entre las partidas del propio juego, las partidas guardadas del emulador y el rebobinado en Retropa, cómo mover partidas entre núcleos con seguridad y qué revisar cuando una partida no carga.",
    "summary": "Las partidas del propio juego, las partidas guardadas del emulador y el rebobinado son tres mecanismos distintos con una portabilidad diferente. Esta guía explica qué hace cada uno y cómo guardarlos de forma segura.",
    "sections": [
      {
        "title": "Tres cosas distintas llamadas partida",
        "body": "La partida propia de un juego la escribe el propio juego, una partida guardada captura todo el emulador en un instante y el rebobinado reproduce el historial reciente. Se comportan de forma distinta, se almacenan de forma distinta, y renombrar una para convertirla en otra no funciona.",
        "points": [
          "Las partidas del juego las crea el propio juego.",
          "Las partidas guardadas capturan el momento completo del emulador.",
          "El rebobinado depende del historial reciente, no de un archivo almacenado."
        ]
      },
      {
        "title": "Crear y usar una partida guardada",
        "body": "Una partida guardada resulta útil antes de una sección difícil, antes de cambiar de núcleo o antes de aplicar un filtro nuevo, porque te permite volver a un momento que sabes que funcionaba bien. El guardado rápido y la carga rápida están pensados exactamente para ese tipo de punto de control a corto plazo.",
        "points": [
          "Crea una partida guardada antes de cambiar de núcleo.",
          "Las partidas guardadas son la forma más rápida de comparar dos ajustes.",
          "Conserva la partida propia del juego como registro a largo plazo."
        ]
      },
      {
        "title": "Mover una partida entre núcleos",
        "body": "Las partidas guardadas no son portátiles entre todos los núcleos, porque una partida guardada registra el estado interno de una implementación concreta. Las partidas con batería, escritas por el juego, tienen muchas más probabilidades de trasladarse correctamente. Haz copia de seguridad de ambas antes de cambiar el núcleo seleccionado.",
        "points": [
          "Cuenta con que las partidas guardadas son específicas de cada núcleo.",
          "Las partidas con batería se transfieren de forma más fiable.",
          "Haz copia de seguridad antes de cambiar de núcleo."
        ]
      },
      {
        "title": "Cuando una partida no carga",
        "body": "Comprueba si la partida son datos del propio juego o una partida guardada del emulador, si el núcleo ha cambiado desde que se escribió y si la versión de la app ha cambiado. Si falla una partida guardada, carga en su lugar la partida propia del juego, porque esa vía no depende del formato de estado interno del emulador.",
        "points": [
          "Confirma que el núcleo no ha cambiado.",
          "Confirma el tipo de partida.",
          "Recurre a la partida propia del juego siempre que sea posible."
        ]
      },
      {
        "title": "Conservar copias de seguridad duraderas",
        "body": "Guarda el archivo de juego original, la partida propia del juego y las partidas guardadas que te importen en sitios distintos. iCloud o una copia en un ordenador sirven; lo importante es que un fallo en la app o en el dispositivo no elimine todas las copias a la vez.",
        "points": [
          "Haz copia de seguridad del propio archivo de juego, no solo de las partidas.",
          "Mantén las partidas separadas de los archivos de estado.",
          "Guarda al menos una copia fuera del dispositivo."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "¿Cuál es la diferencia entre una partida y una partida guardada?",
        "answer": "Una partida la escribe el juego y representa el progreso en el formato propio del juego. Una partida guardada captura todo el emulador en un momento concreto y es específica del núcleo que la generó."
      },
      {
        "id": "rewind",
        "question": "¿Hasta dónde puedo rebobinar?",
        "answer": "El rebobinado reproduce el historial reciente desde la memoria en lugar de restaurar un archivo almacenado, así que su alcance lo limita el búfer y no un número fijo de ranuras de guardado."
      },
      {
        "id": "transfer",
        "question": "¿Puedo mover una partida a otro emulador?",
        "answer": "La partida propia del juego es el elemento más portable. Las partidas guardadas dependen del formato interno de un núcleo concreto y no cabe esperar que se carguen en otro sitio."
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "Solución de problemas",
    "title": "¿El juego no carga en Retropa? Qué revisar",
    "description": "Un orden de diagnóstico para un juego que no arranca en Retropa: descargas incompletas, extensión incorrecta, sistema detectado equivocado, BIOS que falta, mapper no compatible y problemas específicos del núcleo.",
    "summary": "Sigue un orden fijo de comprobaciones —integridad de la descarga, extensión, sistema detectado, requisito de BIOS y, por último, elección de núcleo— antes de concluir que un archivo no sirve.",
    "sections": [
      {
        "title": "Sigue un orden fijo, no una corazonada",
        "body": "La mayoría de los fallos de carga se deben a un número reducido de causas, y comprobarlas en un orden constante evita perder el tiempo. El orden que aparece a continuación va de la comprobación más barata a la más costosa, así que puedes parar en cuanto encuentres la causa real.",
        "points": [
          "Primero, que la descarga esté completa.",
          "Después, la extensión y el sistema detectado.",
          "Luego, la BIOS y la elección de núcleo."
        ]
      },
      {
        "title": "Comprobación uno: ¿está el archivo realmente en el dispositivo?",
        "body": "Si el archivo es un marcador en la nube, el emulador no recibe nada utilizable aunque el archivo aparezca en la biblioteca. Ábrelo en la app Archivos para forzar la descarga, espera a que termine y vuelve a importarlo.",
        "points": [
          "Un elemento atenuado o pendiente no está descargado.",
          "Completa la descarga antes de reintentarlo.",
          "Esta es la causa más habitual con diferencia."
        ]
      },
      {
        "title": "Comprobación dos: ¿coincide la extensión con el sistema?",
        "body": "Cada sistema tiene su propia extensión, y una discrepancia produce un archivo que el núcleo no puede interpretar. Renombrar una extensión no convierte nada, así que un archivo .gb renombrado a .gba sigue siendo un juego de Game Boy y no se comportará como un título de Game Boy Advance.",
        "points": [
          ".gb, .gbc, .gba y .nds son sistemas distintos.",
          "Renombrar nunca convierte un juego.",
          "Confirma el sistema detectado en la biblioteca."
        ]
      },
      {
        "title": "Comprobación tres: ¿falta una BIOS o un conjunto principal?",
        "body": "Algunos sistemas y familias de arcade necesitan un archivo BIOS adicional, y los conjuntos de arcade pueden depender de un conjunto principal. El núcleo indica qué falta; lee ese mensaje con atención, porque una BIOS que falta y un conjunto principal que falta son problemas distintos con soluciones distintas.",
        "points": [
          "Lee el texto exacto del error.",
          "Un neogeo.zip de arcade no es una BIOS de consola portátil.",
          "Retropa no ofrece descargas de BIOS."
        ]
      },
      {
        "title": "Comprobación cuatro: prueba el otro núcleo",
        "body": "Varios sistemas tienen más de un núcleo disponible. Si un archivo está completo, tiene el nombre correcto y no le falta ninguna dependencia, cambiar de núcleo es la siguiente prueba, porque los núcleos difieren en lo estrictos que son al emular el hardware original.",
        "points": [
          "Anota qué núcleo ha fallado.",
          "Cambia el núcleo y reinténtalo una vez.",
          "Compara con un segundo juego en el mismo núcleo."
        ]
      },
      {
        "title": "Qué incluir en una solicitud de soporte",
        "body": "Si un juego sigue sin arrancar, la información útil es la versión de la app, el sistema, el núcleo seleccionado y el texto exacto del error. No adjuntes archivos de juego ni BIOS comerciales, porque no hacen falta para diagnosticar el problema y no deberías compartirlos.",
        "points": [
          "Versión de la app y sistema.",
          "Núcleo seleccionado y texto del error.",
          "No adjuntes nunca ROMs ni archivos BIOS comerciales."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "El juego se abre con una pantalla negra. ¿Qué significa?",
        "answer": "Normalmente, una descarga incompleta, una variante de archivo no compatible o una dependencia que falta, como una BIOS. Revisa primero la descarga, después la extensión y luego el error exacto que indique el núcleo."
      },
      {
        "id": "worked-before",
        "question": "Un juego funcionaba antes y ahora no. ¿Por qué?",
        "answer": "Comprueba si ha cambiado la versión de la app, el núcleo seleccionado o la ubicación del archivo. Las partidas guardadas son específicas de cada núcleo, así que una partida escrita por otro núcleo puede no cargarse aunque el juego en sí siga funcionando."
      },
      {
        "id": "support",
        "question": "¿Qué debería enviar con una solicitud de soporte?",
        "answer": "La versión de la app, el sistema, el núcleo seleccionado y el texto exacto del error. No adjuntes archivos de juego ni BIOS comerciales."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus: qué es gratis y qué requiere Plus",
    "description": "Qué funciones de Retropa son gratuitas y cuáles requieren Retropa Plus: sistemas portátiles, familias de arcade, skins premium, filtros avanzados y modo consola. Los precios actuales se muestran en la app.",
    "summary": "Retropa se descarga gratis. La emulación de consolas portátiles está disponible sin pagar; las familias de arcade, las skins premium y los filtros de imagen avanzados forman parte de Retropa Plus. Los precios actuales y los planes disponibles se muestran dentro de la app.",
    "sections": [
      {
        "title": "Qué está disponible gratis",
        "body": "Descargar Retropa no cuesta nada, y la emulación de consolas portátiles funciona sin compra. Puedes importar tus propios archivos de juego, usar las skins estándar, usar los ajustes de imagen convencionales y configurar partidas guardadas y la asignación del mando. Importar un archivo nunca activa un pago.",
        "points": [
          "Descarga gratuita.",
          "Sistemas portátiles disponibles sin compra.",
          "Skins estándar y ajustes de imagen convencionales incluidos.",
          "Importar un juego nunca desbloquea ni exige una función de pago."
        ]
      },
      {
        "title": "Qué requiere Retropa Plus",
        "body": "Retropa Plus cubre las familias de arcade, las skins premium y los filtros de imagen avanzados. Son capacidades adicionales y no restricciones sobre lo que ya tenías: el juego en consolas portátiles sigue funcionando tanto si te suscribes como si no.",
        "points": [
          "Familias de arcade: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Skins premium.",
          "Filtros CRT y LCD avanzados.",
          "Modo consola y flujos de guardado avanzados."
        ]
      },
      {
        "title": "Por qué la compatibilidad con arcade forma parte de Plus",
        "body": "La emulación de arcade es un trabajo distinto: varias placas, conjuntos con múltiples archivos, dependencias de BIOS y compatibilidad específica de cada conjunto. Tratarla como una capacidad adicional mantiene sencillo el nivel gratuito y conserva la experiencia de consola portátil disponible para todos sin coste.",
        "points": [
          "El hardware de arcade no es hardware de consola portátil.",
          "Los conjuntos de arcade tienen varios archivos y pueden necesitar una BIOS.",
          "La compatibilidad con consolas portátiles no depende de Plus."
        ]
      },
      {
        "title": "Los juegos y los archivos BIOS nunca están incluidos",
        "body": "Ningún nivel de Retropa proporciona archivos de juego ni archivos BIOS, porque la app es un emulador. Tú aportas el contenido que tienes derecho a usar, y ese requisito no cambia con una compra. Una suscripción desbloquea capacidades del emulador, no contenido.",
        "points": [
          "No se incluye ningún juego en ningún nivel.",
          "No se proporcionan archivos BIOS.",
          "Importa solo contenido que tengas derecho a usar."
        ]
      },
      {
        "title": "Dónde consultar los precios actuales",
        "body": "Los precios, los planes disponibles y cualquier oferta regional se muestran dentro de la app, donde el App Store puede presentarlos en tu moneda local. Esta página no incluye precios a propósito, para que un cambio de precios no la deje desactualizada.",
        "points": [
          "Los precios se muestran en la app.",
          "La disponibilidad puede variar según la región.",
          "El App Store gestiona las compras."
        ]
      },
      {
        "title": "El App Store gestiona las compras",
        "body": "Todas las compras y suscripciones se tramitan a través del App Store. Retropa no procesa pagos en la web, y este sitio web nunca pide datos de tarjeta. El App Store gestiona las renovaciones, las cancelaciones y los reembolsos según sus propias condiciones.",
        "points": [
          "En este sitio web no se cobra ningún pago.",
          "Gestiona o cancela una suscripción en los ajustes del App Store.",
          "Los reembolsos siguen la política del App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "¿Puedo usar Retropa sin pagar?",
        "answer": "Sí. Descargar Retropa es gratis y la emulación de consolas portátiles funciona sin compra. Las familias de arcade, las skins premium y los filtros avanzados requieren Retropa Plus."
      },
      {
        "id": "price",
        "question": "¿Cuánto cuesta Retropa Plus?",
        "answer": "Los precios y los planes disponibles se muestran dentro de la app, donde el App Store puede presentarlos en tu moneda local. Esta página no incluye precios para que los cambios de precios no la dejen desactualizada."
      },
      {
        "id": "buy-here",
        "question": "¿Puedo suscribirme en este sitio web?",
        "answer": "No. Las compras se gestionan por completo a través del App Store. Este sitio web nunca recopila datos de pago."
      },
      {
        "id": "content",
        "question": "¿Incluye Plus juegos?",
        "answer": "No. Ningún nivel de Retropa proporciona archivos de juego ni BIOS. Importas contenido que tienes derecho a usar."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
