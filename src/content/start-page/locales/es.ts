import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Cómo importar ROMs en Retropa | Guía para iPhone y iPad",
  "description": "Importa juegos de GBA, DS y arcade en iPhone y iPad. Respuestas sobre ROMs, BIOS, skins de Delta, mandos, partidas guardadas, Plus y filtros avanzados sin escalado entero.",
  "title": "Tu primer juego en Retropa.",
  "intro": "De un archivo que es tuyo a un juego que puedes jugar. Empieza con un sistema portátil compatible y después haz tuyos los controles y la imagen.",
  "steps": [
    [
      "Consigue Retropa",
      "Instala Retropa desde el App Store en un iPhone o iPad con iOS 18 o posterior. La app es gratis; algunas funciones requieren Plus."
    ],
    [
      "Importa tu juego",
      "Abre la entrada de importación en tu biblioteca y elige una ROM compatible desde Archivos. Para GBA, usa un archivo .gba; para DS, un archivo .nds. Conserva el archivo original como copia de seguridad. No se incluyen ROMs ni archivos BIOS."
    ],
    [
      "Ábrelo desde tu biblioteca",
      "Selecciona el juego importado y empieza a jugar. Revisa los controles en pantalla antes de cambiar skins o filtros. Si un juego no arranca, revisa su sistema, su formato de archivo y cualquier BIOS necesaria."
    ]
  ],
  "faqTitle": "Antes de empezar",
  "systems": "Ver sistemas compatibles",
  "support": "¿Necesitas ayuda?",
  "faqs": [
    {
      "id": "devices",
      "question": "¿Qué iPhone y iPad pueden ejecutar Retropa?",
      "answer": "Retropa está disponible en el App Store para iPhone y iPad con iOS 18 o posterior. Consulta la sección de compatibilidad del App Store para tu dispositivo. Los núcleos arcade más exigentes y los filtros de pantalla de varias pasadas pueden necesitar más rendimiento que un juego de consola portátil sencillo."
    },
    {
      "id": "systems",
      "question": "¿Puede Retropa ejecutar juegos de GBA, Nintendo DS y arcade?",
      "answer": "Retropa admite GBA, DS y otros sistemas portátiles y de sobremesa de la lista, junto con familias arcade compatibles como CPS, PGM y M92. La compatibilidad depende de la app instalada, del núcleo y del formato del juego; no significa que todos los juegos o archivos arcade sean compatibles.",
      "link": "cores",
      "linkLabel": "Ver sistemas y formatos de archivo compatibles"
    },
    {
      "id": "games",
      "question": "¿Incluye Retropa juegos o ROMs descargables?",
      "answer": "No. Retropa es un emulador, no una suscripción comercial de juegos ni una tienda de ROMs. Aporta contenido que tengas derecho a utilizar, como tus propios proyectos o homebrew distribuido con permiso. No se incluyen ROMs comerciales ni archivos BIOS."
    },
    {
      "id": "import",
      "question": "¿Cómo importo una ROM de GBA o DS en el iPhone?",
      "answer": "Guarda el archivo del juego en una ubicación accesible desde la app Archivos de iOS. Abre la entrada de importación en la biblioteca de Retropa, selecciona el archivo compatible y abre el juego importado desde la biblioteca. GBA usa .gba y DS usa .nds. Cambiar el nombre de otro tipo de archivo no convierte un juego al formato correcto."
    },
    {
      "id": "bios",
      "question": "¿Necesito un archivo BIOS para Retropa?",
      "answer": "Los requisitos de BIOS varían según el sistema y el núcleo. Si Retropa indica que falta una BIOS, consulta el requisito de ese sistema y facilita el archivo correcto mediante el flujo de trabajo admitido por la app. Una BIOS de otro sistema no sirve como sustituto. Retropa no ofrece descargas de BIOS.",
      "link": "cores",
      "linkLabel": "Consultar los requisitos del sistema"
    },
    {
      "id": "arcade-zip",
      "question": "¿Por qué no arranca mi ZIP o conjunto de ROM de arcade?",
      "answer": "Un archivo arcade debe coincidir con la placa y el conjunto de ROM que espera su núcleo. Algunos conjuntos dependen además de un conjunto principal o de una BIOS, así que un ZIP de clon por sí solo puede estar incompleto. Mantén el archivo intacto salvo que la app pida descomprimirlo. La ejecución de arcade también requiere Plus; una suscripción no puede reparar datos de ROM que falten o sean incompatibles."
    },
    {
      "id": "missing-file",
      "question": "¿Por qué veo un juego en Archivos pero no puedo importarlo?",
      "answer": "Comprueba que el archivo real esté disponible localmente y no solo como marcador en la nube, y que su formato corresponda a un sistema compatible. Revisa cualquier error que muestre Retropa. Guarda una copia del original mientras diagnosticas la importación y no des por hecho que un ZIP renombrado o una descarga incompleta sea una ROM válida."
    },
    {
      "id": "offline",
      "question": "¿Puedo jugar a juegos guardados localmente sin transmitirlos?",
      "answer": "Retropa ejecuta los archivos de juego compatibles en tu dispositivo en lugar de transmitir la partida desde un emulador en la nube. Importa primero los archivos de juego y de BIOS necesarios. Descargar paquetes, consultar información en línea y usar funciones en la nube siguen necesitando su propio acceso a la red."
    },
    {
      "id": "delta-skins",
      "question": "¿Puedo usar skins de Delta en Retropa?",
      "answer": "Retropa admite la importación de paquetes .deltaskin. Usa el paquete completo, elige una distribución para el sistema correspondiente y comprueba su compatibilidad con vertical u horizontal. Que se admita el formato no garantiza que todas las skins de terceros encajen en cualquier iPhone. La compatibilidad con Delta describe un formato de archivo, no una vinculación.",
      "link": "delta-skins",
      "linkLabel": "Leer la guía de importación de skins de Delta"
    },
    {
      "id": "controllers",
      "question": "¿Admite Retropa mandos Bluetooth o externos?",
      "answer": "Retropa admite mandos externos compatibles y una asignación de botones configurable. Conecta el mando primero a través de iOS y después revisa su asignación en Retropa. En los juegos arcade, comprueba la asignación de moneda e inicio además de los botones de acción. La compatibilidad depende del mando y del soporte de iOS."
    },
    {
      "id": "saves",
      "question": "¿Son lo mismo las partidas guardadas del juego y los estados guardados del emulador?",
      "answer": "No. Una partida guardada la crea el juego; un estado guardado captura la ejecución del emulador. Los estados guardados pueden depender del núcleo y la versión exactos, así que no des por hecho que sean portables entre apps o núcleos. Conserva tus archivos originales y tus copias antes de mover o sustituir partidas guardadas."
    },
    {
      "id": "plus",
      "question": "¿Es gratis Retropa y qué desbloquea Plus?",
      "answer": "Retropa es gratis. Los núcleos arcade, las skins premium y los filtros avanzados requieren Retropa Plus. Los planes actuales, los precios regionales y las condiciones de compra se muestran dentro de la app antes de comprar. Una descarga gratuita no significa que se incluya cada núcleo o recurso."
    },
    {
      "id": "restore",
      "question": "¿Cómo restauro una compra anterior de Retropa Plus?",
      "answer": "Usa la acción de restaurar compras de la app con el Apple Account que utilizaste en la compra original. Comprueba que la compra o la suscripción siga siendo válida. Restaurar una licencia no restaura archivos ROM ni partidas guardadas que falten. Contacta con el soporte con la versión de la app y el problema de compra, no con contraseñas de la cuenta."
    },
    {
      "id": "advanced-filters",
      "question": "¿En qué se diferencian los filtros avanzados de Retropa de los filtros CRT normales?",
      "answer": "Los filtros de pantalla sencillos suelen superponer líneas de barrido o rejillas de píxeles muestreadas. Los ajustes avanzados de Retropa, como CRT V4 y Trinitron, modelan la estructura del haz y del fósforo con integración de los píxeles de salida o filtrado de ancho de banda limitado. DMG incluye celdas de cristal líquido integradas y un sustrato reflectante. Son modelos de pantalla, no solo un tinte de color.",
      "link": "crt-filters",
      "linkLabel": "Comparar los filtros de pantalla avanzados"
    },
    {
      "id": "integer-scaling",
      "question": "¿Necesitan los filtros avanzados de Retropa un escalado entero?",
      "answer": "No. Los filtros avanzados de Retropa tienen en cuenta el tamaño de salida real en lugar de exigir una escala de 2, de 3 u otro número entero. Eso te da más libertad para encajar un juego en el área de visualización de tu teléfono, tu orientación o la skin elegida. La relación de aspecto original puede mantenerse intacta. Los resultados siguen dependiendo del ajuste y del dispositivo; los filtros no crean resolución de origen adicional.",
      "link": "crt-filters",
      "linkLabel": "Más información sobre el renderizado con escalas fraccionarias"
    },
    {
      "id": "shader-import",
      "question": "¿Puede Retropa importar shaders .slang y .slangp de RetroArch?",
      "answer": "Retropa admite los flujos de trabajo de shaders con .slang y .slangp. Un ajuste puede hacer referencia a varias pasadas o texturas; mantén juntas esas dependencias al importar. No se garantiza que funcione cualquier ajuste de terceros. Si uno falla, revisa sus archivos y su compatibilidad en lugar de renombrarlo o cambiar el juego.",
      "link": "crt-filters",
      "linkLabel": "Leer sobre la compatibilidad de shaders"
    },
    {
      "id": "performance",
      "question": "¿Afectan los filtros avanzados a la tasa de fotogramas o a la batería?",
      "answer": "Pueden afectar. El renderizado de varias pasadas necesita más trabajo de GPU que una imagen sin filtrar, y el coste varía según el ajuste, el tamaño de salida, el dispositivo y el núcleo del emulador. Compara con la imagen original si notas ralentizaciones y prueba entonces un filtro más ligero. El escalado sin múltiplos enteros es una función de calidad de imagen, no una promesa de rendimiento ilimitado de la GPU."
    },
    {
      "id": "packages",
      "question": "¿Dónde consigo skins y paquetes de filtros para Retropa?",
      "answer": "Explora PackHub para encontrar paquetes de skins y shaders. Revisa en la app el sistema, el formato y los requisitos de Plus del paquete. Los recursos importados no evitan las comprobaciones de licencia. Si necesitas ayuda, incluye la versión de la app, el nombre del paquete y el mensaje de error, pero no envíes ROMs comerciales ni archivos BIOS."
    }
  ]
}
