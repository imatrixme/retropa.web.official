import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Emulador de GBA para iPhone y iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Trae tus propios archivos .gba a Retropa. Empieza con un juego que funcione, luego elige una skin de consola, asigna un mando y encuentra el tratamiento de pantalla que mejor te vaya.",
    "imageAlt": "Ilustración de producto de Retropa con distribuciones de controles de consola en vertical y horizontal",
    "sections": [
      {
        "title": "Empieza con un archivo de juego .gba",
        "body": "Retropa ejecuta juegos de GBA compatibles en iPhone y iPad con iOS 18 o posterior. La app es gratis, pero no incluye juegos ni archivos BIOS. Usa un archivo de juego que tengas derecho a utilizar y conserva el original fuera de la app como copia de seguridad.",
        "points": [
          "Un juego de GBA suele usar la extensión .gba.",
          "Un archivo .gb o .gbc pertenece a GB o GBC, no a GBA.",
          "Cambiar la extensión de un archivo no convierte un juego a otro sistema."
        ]
      },
      {
        "title": "Importa desde la app Archivos",
        "body": "Comprueba que el archivo esté disponible localmente en Archivos y no solo como marcador en la nube. Abre la entrada de importación en la biblioteca de Retropa y selecciona el juego. Cuando aparezca en la biblioteca, ábrelo y confirma que la imagen, el sonido y los controles predeterminados funcionan antes de personalizar la distribución."
      },
      {
        "title": "Elige la distribución de consola adecuada",
        "body": "Una distribución de GBA necesita espacio para la cruceta, A y B, los botones superiores, Start y Select. Prueba los botones además del aspecto visual. Retropa admite la importación de .deltaskin, pero una skin de DS no sustituye a una distribución de GBA. Comprueba que el paquete admita la orientación de tu dispositivo.",
        "points": [
          "Mantén la pantalla del juego despejada en las dos orientaciones que uses.",
          "Empareja mandos físicos compatibles en iOS y después revisa su asignación en Retropa.",
          "Las skins premium y los filtros avanzados requieren Plus; importar un archivo no desbloquea funciones de pago."
        ]
      },
      {
        "title": "¿Carácter LCD o píxeles nítidos?",
        "body": "Empieza con la imagen original. Un tratamiento LCD ligero puede recordar a la pantalla de una consola portátil, mientras que un tratamiento CRT crea una presentación distinta. Los filtros avanzados de Retropa tienen en cuenta el área de salida real sin exigir un escalado entero. Los filtros cambian la imagen, no la resolución del juego ni la compatibilidad de archivos."
      },
      {
        "title": "Cuando una importación o una partida guardada no funciona",
        "body": "Revisa primero la extensión del archivo, el sistema seleccionado y el error exacto. Si Archivos no puede abrir o descargar el original, termina ese paso antes de volver a importar. Para los errores de BIOS, sigue lo que pida el núcleo seleccionado; un neogeo.zip de arcade no es una BIOS de GBA. La partida guardada del propio juego y un estado guardado del emulador son artefactos distintos: no renombres uno para convertirlo en el otro y conserva copias antes de cambiar de núcleo o de app.",
        "points": [
          "Prueba la skin predeterminada y un filtro sencillo cuando aísles un problema de control o de imagen.",
          "Anota la versión de la app, el sistema, el núcleo y el error para el soporte.",
          "No adjuntes ROMs comerciales ni archivos BIOS a una solicitud de soporte."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Ver archivos compatibles y núcleos de GBA"
  },
  "ds-emulator": {
    "title": "Emulador de DS para iPhone y iPad",
    "label": "DS",
    "image": "library",
    "summary": "Importa tus juegos .nds a Retropa y haz sitio para las dos pantallas. Comprueba la entrada táctil, los controles y los requisitos de archivo antes de elegir una distribución o un filtro nuevos.",
    "imageAlt": "Ilustración de producto de Retropa con la biblioteca de juegos y los ajustes en iPhone",
    "sections": [
      {
        "title": "Prepara un juego .nds",
        "body": "DS y GBA son sistemas distintos. Retropa admite archivos .nds para DS en iPhone y iPad con iOS 18 o posterior. Usa archivos que tengas derecho a utilizar y conserva una copia aparte. La app no ofrece descargas de ROM ni de BIOS, y un archivo .gba no se convierte en un juego de DS por cambiarle el nombre."
      },
      {
        "title": "Importa y comprueba las dos pantallas",
        "body": "Descarga el archivo del juego localmente en Archivos y después selecciónalo desde la entrada de importación de la biblioteca en Retropa. Abre el juego importado con la distribución predeterminada. Revisa las dos áreas de visualización y prueba la entrada táctil en una parte del juego que la utilice. Una pantalla de título por sí sola no basta para verificar que todas las entradas necesarias sean accesibles.",
        "points": [
          "Empieza con el sistema detectado o seleccionado para el archivo .nds.",
          "Sigue cualquier requisito de BIOS o firmware que indique el núcleo instalado.",
          "Guarda una copia del archivo original mientras diagnosticas errores."
        ]
      },
      {
        "title": "Dale suficiente espacio a la pantalla táctil",
        "body": "Dos pantallas necesitan una distribución distinta de la de una consola de una sola pantalla. Elige una skin de DS que muestre ambas pantallas y los controles necesarios. La orientación vertical puede dar a las pantallas una disposición natural; la compatibilidad con la horizontal depende de la skin elegida. Revisa los objetivos táctiles pequeños en el tamaño con el que juegas realmente, sobre todo en un iPhone más pequeño."
      },
      {
        "title": "Los mandos no sustituyen todas las acciones táctiles",
        "body": "Retropa admite mandos externos compatibles y la asignación de botones. Empareja el mando con iOS y confirma sus asignaciones en la app. Una cruceta física y unos botones de acción no sustituyen automáticamente las interacciones táctiles de un juego. Comprueba esas interacciones antes de decidirte por una configuración solo con mando."
      },
      {
        "title": "Mantén sencilla la primera sesión",
        "body": "Confirma la compatibilidad del juego y de la entrada antes de aplicar una cadena de shaders compleja. Si la imagen o la fluidez de fotogramas cambia tras seleccionar un filtro, vuelve a un ajuste sencillo y compara. El dispositivo, el núcleo y el tamaño de salida influyen en el rendimiento; la compatibilidad con DS no promete resultados idénticos para todos los juegos y todos los teléfonos.",
        "points": [
          "Las skins premium y los filtros avanzados requieren Retropa Plus.",
          "Mantén copias de las partidas originales y de los estados guardados; no son formatos de archivo intercambiables.",
          "Para el soporte, incluye la versión de la app, el núcleo seleccionado y el error exacto, no los archivos de juego ni de BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Ver archivos compatibles y núcleos de DS"
  },
  "arcade": {
    "title": "Emulador de arcade para iPhone y iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Juega con archivos arcade compatibles de CPS, Neo Geo, PGM y M92 en Retropa, con controles táctiles, mandos externos y filtros CRT. Los juegos arcade requieren Plus; no se incluyen juegos ni archivos BIOS.",
    "imageAlt": "Ilustración de producto de Retropa con la biblioteca de juegos y los ajustes",
    "sections": [
      {
        "title": "CPS, Neo Geo y la placa arcade",
        "body": "Retropa admite familias arcade como CPS I, CPS II, CPS III, Neo Geo, PGM y M92. Haz que tu juego coincida con la placa arcade y el conjunto de ROM que espera el núcleo instalado. La compatibilidad con una familia no garantiza que se ejecute cualquier archivo.",
        "points": [
          "Confirma el sistema en la app antes de elegir un archivo.",
          "La ejecución de arcade requiere Retropa Plus.",
          "Retropa no incluye ROMs comerciales ni archivos BIOS."
        ]
      },
      {
        "title": "Neo Geo arcade no es Neo Geo Pocket",
        "body": "Los juegos arcade de Neo Geo y los juegos de consola portátil de Neo Geo Pocket usan sistemas y archivos distintos. Si un juego arcade indica que falta la BIOS de Neo Geo, abre Arcade BIOS en Retropa e importa el paquete neogeo.zip necesario, y vuelve a probar el juego. Una ROM de Pocket o un ZIP renombrado no sirven como sustituto.",
        "points": [
          "Usa archivos BIOS que tengas derecho a utilizar; Retropa no ofrece descargas.",
          "Un paquete de BIOS no sustituye los datos de ROM que falten del juego, del conjunto principal o del clon.",
          "Revisa el error exacto y conserva el archivo original antes de hacer cambios."
        ]
      },
      {
        "title": "Por qué un ZIP de arcade es distinto",
        "body": "Una ROM de consola portátil suele ser una única imagen de juego. Un conjunto arcade puede contener varios chips de ROM y depender de un conjunto principal o de una BIOS. Renombrar un archivo no relacionado a .zip no lo hace compatible. Mantén intacto el archivo que te hayan facilitado, salvo que el proceso de importación pida expresamente descomprimirlo."
      },
      {
        "title": "Cuando un juego no arranca",
        "body": "Revisa primero la placa seleccionada y el error que muestra Retropa. Después comprueba si tu conjunto está completo y si están disponibles los archivos de BIOS o del conjunto principal que necesita. Un archivo de clon por sí solo puede no incluir todos los archivos que requiere un núcleo. Cambiar de filtro o comprar otra skin no puede arreglar datos de ROM que falten.",
        "points": [
          "Conserva tus archivos originales mientras diagnosticas una importación.",
          "Anota la versión de la app, el sistema y el error mostrado cuando contactes con el soporte.",
          "No envíes archivos de ROM comerciales ni de BIOS con una solicitud de soporte."
        ]
      },
      {
        "title": "Prepara la primera sesión",
        "body": "Cuando el juego arranque, identifica los controles de moneda, inicio y acciones. Con un mando externo, revisa la asignación además de las etiquetas en pantalla. Empieza con un ajuste de imagen sencillo; elige un tratamiento CRT después de confirmar que el juego y los controles funcionan correctamente."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Consultar el catálogo de sistemas y núcleos"
  },
  "delta-skins": {
    "title": "Importar skins de Delta en iPhone y iPad",
    "label": "Diseños",
    "image": "material",
    "summary": "Cambia los controles que rodean tu juego, no solo el fondo. Retropa importa paquetes .deltaskin y ofrece su propia colección de skins para iPhone y iPad.",
    "imageAlt": "Ilustración de producto de Retropa con skins de controles en vertical y horizontal y distintos materiales",
    "sections": [
      {
        "title": "Una skin es una distribución de controles",
        "body": "La pantalla del juego, la cruceta, los botones de acción y los controles de menú necesitan espacio. Una skin define dónde se sitúan estos elementos. Elige una para el sistema con el que juegas y la orientación que usas, en lugar de decidir solo por el color.",
        "points": [
          "Comprueba el sistema previsto antes de importar un paquete.",
          "La compatibilidad con vertical y horizontal depende de las distribuciones que incluya la skin.",
          "Un formato de paquete admitido no garantiza que toda distribución de terceros encaje en cualquier dispositivo."
        ]
      },
      {
        "title": "Importa un paquete .deltaskin",
        "body": "Conserva el archivo original de la skin, abre la entrada de importación de skins de Retropa y selecciona el paquete desde Archivos. Después de importarlo, selecciónalo para el sistema correspondiente. Inicia un juego y revisa el área de pantalla, los controles de dirección y cada botón de acción antes de convertirlo en tu distribución habitual.",
        "points": [
          "Usa el paquete .deltaskin completo, no una captura de pantalla de una skin.",
          "Si el paquete falla, revisa su formato y el sistema previsto antes de probar otra distribución.",
          "Vuelve a una skin que funcione si los controles esenciales quedan ocultos."
        ]
      },
      {
        "title": "Controles táctiles y mandos físicos",
        "body": "Retropa también admite mandos externos compatibles y una asignación de botones configurable. Empareja primero el mando con iOS y después revisa su asignación en Retropa. Una skin visual y un perfil de mando cumplen funciones distintas: cambiar el aspecto no sustituye a revisar la asignación de tus botones físicos."
      },
      {
        "title": "Paquetes y límites de compra",
        "body": "PackHub es el lugar donde explorar paquetes de skins de Retropa. Las skins premium requieren Plus; los paquetes importados no evitan las comprobaciones de licencia. Consulta el plan actual y los requisitos del paquete en la app antes de comprar. La compatibilidad con Delta describe un formato de archivo, no una vinculación con el proyecto Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Explorar skins en PackHub"
  },
  "crt-filters": {
    "title": "Filtros CRT para emuladores de iPhone y iPad",
    "label": "Filtros",
    "image": "filter",
    "summary": "Los filtros CRT y LCD avanzados de Retropa se adaptan a tu área de visualización real sin exigir un escalado entero. Conserva el carácter de una pantalla retro en todos los tamaños de iPhone, distribuciones de iPad y orientaciones.",
    "imageAlt": "Ilustración de producto de Retropa con la selección de filtros y los tratamientos de pantalla CRT",
    "sections": [
      {
        "title": "Elige la pantalla y después la intensidad",
        "body": "La presentación de píxel más cercano mantiene nítidos los límites originales de los píxeles. Los tratamientos CRT usan líneas de barrido, máscaras y sombreado de bordes; los tratamientos LCD añaden una estructura de píxeles o subpíxeles. Estas decisiones cambian la presentación, no la resolución subyacente del juego.",
        "points": [
          "Empieza con la imagen sin filtro como referencia.",
          "Revisa el texto pequeño, los bordes brillantes y las zonas oscuras, no solo la pantalla de título.",
          "Valora el resultado en el tamaño y la orientación con los que juegas realmente."
        ]
      },
      {
        "title": "Sin requisito de escalado entero",
        "body": "El escalado entero asigna cada píxel del juego a un número entero de píxeles de pantalla. Puede ser útil para una salida nítida de píxel más cercano, pero puede dejar espacio sin usar. Los filtros avanzados de Retropa tienen en cuenta el área de salida real, así que su estructura de imagen no se limita a un múltiplo de 2, de 3 u otro número entero. Puedes conservar la relación de aspecto del juego y usar a la vez un área de visualización que encaje en tu teléfono o tu skin.",
        "points": [
          "CRT V4 reconstruye la cobertura del haz y filtra analíticamente la estructura de fósforo usando la huella de los píxeles de salida.",
          "Trinitron usa haces de barrido integrados y armónicos de rejilla de apertura con ancho de banda limitado.",
          "DMG integra la cobertura de las celdas de cristal líquido en lugar de muestrear una rejilla punto por punto."
        ]
      },
      {
        "title": "Más que una capa de líneas de barrido",
        "body": "Los ajustes sencillos CRT Lite, LCD Grid y Scanline ofrecen tratamientos de pantalla más ligeros. Los ajustes avanzados modelan más partes de la propia pantalla: la anchura del haz, la transmisión del fósforo o el material reflectante de cristal líquido. Las rejillas muestreadas directamente pueden volverse irregulares con escalas fraccionarias; la integración consciente de la salida ayuda a que el detalle no resuelto se funda con naturalidad. Esto no afirma que todos los filtros convencionales necesiten un escalado entero ni que todos los dispositivos y ajustes vayan a quedar libres de artefactos."
      },
      {
        "title": "Qué muestra la comparación del navegador",
        "body": "La vista previa del televisor muestra los filtros básicos y también CRT V4, Trinitron V1 y DMG con base nativa. Los modos avanzados adaptan fórmulas nativas seleccionadas, incluida la integración de la huella de píxel, con una curva de presentación compartida. El renderizador web omite la persistencia temporal, la cadena completa de bloom en varias pasadas y la gestión de color nativa. Demuestra características de pantalla, no una salida Metal idéntica píxel a píxel ni imágenes reales de juego."
      },
      {
        "title": "Importa ajustes de shaders de RetroArch",
        "body": "Un ajuste .slangp puede hacer referencia a varias pasadas de shader, texturas y valores de parámetros. Mantén juntas esas dependencias al importar. Un archivo de ajuste por sí solo puede estar incompleto; un archivo .slang describe un shader y no una colección completa.",
        "points": [
          "Usa paquetes pensados para el flujo de trabajo de shaders admitido.",
          "Si un ajuste no carga, revisa los archivos referenciados y la compatibilidad antes de cambiar el juego.",
          "Prueba un ajuste más ligero si una cadena compleja afecta a la fluidez de fotogramas o al consumo de batería."
        ]
      },
      {
        "title": "La calidad de imagen tiene un coste de rendimiento",
        "body": "Un filtro de varias pasadas puede necesitar más trabajo de GPU que una salida de píxel más cercano. El rendimiento depende del dispositivo, del núcleo del emulador, de la resolución de salida y del ajuste. Retropa no promete que todos los shaders importados funcionen igual de bien en cualquier iPhone. Los filtros avanzados requieren Plus; consulta las opciones disponibles en la app."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Explorar filtros en PackHub"
  }
}
