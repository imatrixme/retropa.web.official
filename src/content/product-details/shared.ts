import type { Locale } from "@/i18n/locales"
import type { ProductPage } from "@/content/product-details/types"
import { pages as en } from "@/content/product-details/locales/en"
import { pages as zh } from "@/content/product-details/locales/zh-Hans"

/**
 * Per-locale overlay for text that surrounds a product page rather than living in
 * its body: link titles, image alternatives and the arcade summary shown on the
 * homepage and core catalog. These are short, high-visibility strings worth
 * translating even while a long body is still English, which is why every
 * supported locale carries them.
 */
export type SharedProductCopy = {
  titles: Record<ProductPage, string>
  materialAlt: string
  libraryAlt: string
  arcadeSummary: string
}

export const sharedProductCopy: Record<Locale, SharedProductCopy> = {
  en: {
    titles: { "gba-emulator": en["gba-emulator"].title, "ds-emulator": en["ds-emulator"].title, arcade: en.arcade.title, "delta-skins": en["delta-skins"].title, "crt-filters": en["crt-filters"].title },
    materialAlt: en["delta-skins"].imageAlt, libraryAlt: en.arcade.imageAlt, arcadeSummary: en.arcade.summary,
  },
  "zh-Hans": {
    titles: { "gba-emulator": zh["gba-emulator"].title, "ds-emulator": zh["ds-emulator"].title, arcade: zh.arcade.title, "delta-skins": zh["delta-skins"].title, "crt-filters": zh["crt-filters"].title },
    materialAlt: zh["delta-skins"].imageAlt, libraryAlt: zh.arcade.imageAlt, arcadeSummary: zh.arcade.summary,
  },
  "zh-Hant": {
    titles: { "gba-emulator": "iPhone 與 iPad 的 GBA 模擬器", "ds-emulator": "iPhone 與 iPad 的 DS 模擬器", arcade: "iPhone 與 iPad 街機模擬器", "delta-skins": "在 iPhone 與 iPad 上匯入 Delta 外觀", "crt-filters": "iPhone 與 iPad 模擬器的 CRT 濾鏡" },
    materialAlt: "Retropa 產品展示圖：不同材質的橫向與直向掌機控制配置", libraryAlt: "Retropa 產品展示圖：遊戲庫與設定介面",
    arcadeSummary: "在 Retropa 重玩受支援的 CPS、Neo Geo、PGM 與 M92 街機，搭配觸控、實體控制器與 CRT 濾鏡。執行街機需要 Plus；App 不附帶遊戲或 BIOS。",
  },
  de: {
    titles: { "gba-emulator": "GBA-Emulator für iPhone und iPad", "ds-emulator": "DS-Emulator für iPhone und iPad", arcade: "Arcade-Emulator für iPhone und iPad", "delta-skins": "Delta-Skins auf iPhone und iPad importieren", "crt-filters": "CRT-Filter für Emulatoren auf iPhone und iPad" },
    materialAlt: "Retropa-Produktbild mit Controller-Skins aus verschiedenen Materialien im Hoch- und Querformat", libraryAlt: "Retropa-Produktbild mit Spielesammlung und Einstellungen",
    arcadeSummary: "Spiele unterstützte CPS-, Neo-Geo-, PGM- und M92-Arcade-Dateien in Retropa mit Touch-Steuerung, externen Controllern und CRT-Filtern. Arcade-Spiele benötigen Plus; Spiele und BIOS-Dateien sind nicht enthalten.",
  },
  es: {
    titles: { "gba-emulator": "Emulador de GBA para iPhone y iPad", "ds-emulator": "Emulador de DS para iPhone y iPad", arcade: "Emulador de arcade para iPhone y iPad", "delta-skins": "Importar diseños Delta en iPhone y iPad", "crt-filters": "Filtros CRT para emuladores de iPhone y iPad" },
    materialAlt: "Imagen de producto de Retropa con diseños de controles verticales y horizontales en distintos materiales", libraryAlt: "Imagen de producto de Retropa que muestra la biblioteca de juegos y los ajustes",
    arcadeSummary: "Juega con archivos arcade compatibles de CPS, Neo Geo, PGM y M92 en Retropa, con controles táctiles, mandos externos y filtros CRT. Los juegos arcade requieren Plus; no se incluyen juegos ni archivos BIOS.",
  },
  fr: {
    titles: { "gba-emulator": "Émulateur GBA pour iPhone et iPad", "ds-emulator": "Émulateur DS pour iPhone et iPad", arcade: "Émulateur arcade pour iPhone et iPad", "delta-skins": "Importer des habillages Delta sur iPhone et iPad", "crt-filters": "Filtres CRT pour les émulateurs sur iPhone et iPad" },
    materialAlt: "Visuel Retropa présentant des habillages de commandes en portrait et paysage dans différents matériaux", libraryAlt: "Visuel Retropa montrant la bibliothèque de jeux et les réglages",
    arcadeSummary: "Jouez avec vos fichiers arcade CPS, Neo Geo, PGM et M92 compatibles dans Retropa, avec commandes tactiles, manettes externes et filtres CRT. Les jeux arcade nécessitent Plus ; les jeux et fichiers BIOS ne sont pas inclus.",
  },
  it: {
    titles: { "gba-emulator": "Emulatore GBA per iPhone e iPad", "ds-emulator": "Emulatore DS per iPhone e iPad", arcade: "Emulatore arcade per iPhone e iPad", "delta-skins": "Importare skin Delta su iPhone e iPad", "crt-filters": "Filtri CRT per emulatori su iPhone e iPad" },
    materialAlt: "Immagine del prodotto Retropa con skin dei controlli verticali e orizzontali in diversi materiali", libraryAlt: "Immagine del prodotto Retropa con la libreria di giochi e le impostazioni",
    arcadeSummary: "Gioca con i file arcade CPS, Neo Geo, PGM e M92 supportati in Retropa, con controlli touch, controller esterni e filtri CRT. I giochi arcade richiedono Plus; giochi e file BIOS non sono inclusi.",
  },
  ja: {
    titles: { "gba-emulator": "iPhone と iPad 用 GBA エミュレータ", "ds-emulator": "iPhone と iPad 用 DS エミュレータ", arcade: "iPhone と iPad 用アーケードエミュレータ", "delta-skins": "iPhone と iPad に Delta スキンを読み込む", "crt-filters": "iPhone と iPad のエミュレータ用 CRT フィルター" },
    materialAlt: "さまざまな素材の縦向き・横向きコントローラースキンを紹介する Retropa 製品画像", libraryAlt: "ゲームライブラリと設定画面を紹介する Retropa 製品画像",
    arcadeSummary: "Retropa で対応する CPS、Neo Geo、PGM、M92 のアーケードファイルを、タッチ操作、外部コントローラー、CRT フィルターで楽しめます。アーケードのプレイには Plus が必要です。ゲームや BIOS ファイルは含まれません。",
  },
  ko: {
    titles: { "gba-emulator": "iPhone 및 iPad용 GBA 에뮬레이터", "ds-emulator": "iPhone 및 iPad용 DS 에뮬레이터", arcade: "iPhone 및 iPad용 아케이드 에뮬레이터", "delta-skins": "iPhone 및 iPad에서 Delta 스킨 가져오기", "crt-filters": "iPhone 및 iPad 에뮬레이터용 CRT 필터" },
    materialAlt: "다양한 소재의 세로 및 가로 컨트롤러 스킨을 보여 주는 Retropa 제품 이미지", libraryAlt: "게임 라이브러리와 설정 화면을 보여 주는 Retropa 제품 이미지",
    arcadeSummary: "Retropa에서 지원되는 CPS, Neo Geo, PGM, M92 아케이드 파일을 터치 조작, 외부 컨트롤러, CRT 필터로 즐기세요. 아케이드 플레이에는 Plus가 필요하며, 게임과 BIOS 파일은 포함되지 않습니다.",
  },
  ru: {
    titles: { "gba-emulator": "Эмулятор GBA для iPhone и iPad", "ds-emulator": "Эмулятор DS для iPhone и iPad", arcade: "Эмулятор аркад для iPhone и iPad", "delta-skins": "Импорт скинов Delta на iPhone и iPad", "crt-filters": "ЭЛТ-фильтры для эмуляторов на iPhone и iPad" },
    materialAlt: "Изображение Retropa со скинами управления из разных материалов в вертикальной и горизонтальной ориентации", libraryAlt: "Изображение Retropa с библиотекой игр и настройками",
    arcadeSummary: "Запускайте поддерживаемые аркадные файлы CPS, Neo Geo, PGM и M92 в Retropa с сенсорным управлением, внешними контроллерами и ЭЛТ-фильтрами. Для аркад требуется Plus; игры и файлы BIOS не включены.",
  },
  tr: {
    titles: { "gba-emulator": "iPhone ve iPad için GBA emülatörü", "ds-emulator": "iPhone ve iPad için DS emülatörü", arcade: "iPhone ve iPad için arcade emülatörü", "delta-skins": "iPhone ve iPad’de Delta temalarını içe aktarın", "crt-filters": "iPhone ve iPad emülatörleri için CRT filtreleri" },
    materialAlt: "Farklı malzemelerde dikey ve yatay kontrol temalarını gösteren Retropa ürün görseli", libraryAlt: "Oyun kitaplığını ve ayarları gösteren Retropa ürün görseli",
    arcadeSummary: "Desteklenen CPS, Neo Geo, PGM ve M92 arcade dosyalarını Retropa’da dokunmatik kontroller, harici kontrolcüler ve CRT filtreleriyle oynayın. Arcade oyunları Plus gerektirir; oyunlar ve BIOS dosyaları dahil değildir.",
  },
  "pt-BR": {
    titles: { "gba-emulator": "Emulador de GBA para iPhone e iPad", "ds-emulator": "Emulador de DS para iPhone e iPad", arcade: "Emulador de arcade para iPhone e iPad", "delta-skins": "Importe Skins do Delta no iPhone e iPad", "crt-filters": "Filtros CRT para emuladores no iPhone e iPad" },
    materialAlt: "Imagem do produto Retropa com Skins de controles na vertical e horizontal em diferentes materiais", libraryAlt: "Imagem do produto Retropa mostrando a biblioteca de jogos e as configurações",
    arcadeSummary: "Jogue com arquivos arcade compatíveis de CPS, Neo Geo, PGM e M92 no Retropa, com controles por toque, controles externos e filtros CRT. Os jogos arcade exigem Plus; jogos e arquivos BIOS não estão incluídos.",
  },
  vi: {
    titles: { "gba-emulator": "Trình giả lập GBA cho iPhone và iPad", "ds-emulator": "Trình giả lập DS cho iPhone và iPad", arcade: "Trình giả lập arcade cho iPhone và iPad", "delta-skins": "Nhập giao diện Delta trên iPhone và iPad", "crt-filters": "Bộ lọc CRT cho trình giả lập trên iPhone và iPad" },
    materialAlt: "Hình ảnh sản phẩm Retropa với giao diện điều khiển dọc và ngang bằng nhiều chất liệu", libraryAlt: "Hình ảnh sản phẩm Retropa hiển thị thư viện trò chơi và phần cài đặt",
    arcadeSummary: "Chơi các tệp arcade CPS, Neo Geo, PGM và M92 được hỗ trợ trong Retropa với điều khiển cảm ứng, tay cầm ngoài và bộ lọc CRT. Chơi arcade cần Plus; không bao gồm trò chơi và tệp BIOS.",
  },
  id: {
    titles: { "gba-emulator": "Emulator GBA untuk iPhone dan iPad", "ds-emulator": "Emulator DS untuk iPhone dan iPad", arcade: "Emulator arcade untuk iPhone dan iPad", "delta-skins": "Impor skin Delta di iPhone dan iPad", "crt-filters": "Filter CRT untuk emulator iPhone dan iPad" },
    materialAlt: "Gambar produk Retropa dengan skin kontrol tegak dan mendatar dalam berbagai bahan", libraryAlt: "Gambar produk Retropa yang menampilkan pustaka game dan pengaturan",
    arcadeSummary: "Mainkan file arcade CPS, Neo Geo, PGM, dan M92 yang didukung di Retropa dengan kontrol sentuh, kontroler eksternal, dan filter CRT. Bermain arcade memerlukan Plus; game dan file BIOS tidak disertakan.",
  },
  th: {
    titles: { "gba-emulator": "อีมูเลเตอร์ GBA สำหรับ iPhone และ iPad", "ds-emulator": "อีมูเลเตอร์ DS สำหรับ iPhone และ iPad", arcade: "อีมูเลเตอร์อาร์เคดสำหรับ iPhone และ iPad", "delta-skins": "นำเข้าสกิน Delta บน iPhone และ iPad", "crt-filters": "ฟิลเตอร์ CRT สำหรับอีมูเลเตอร์บน iPhone และ iPad" },
    materialAlt: "ภาพผลิตภัณฑ์ Retropa แสดงสกินควบคุมแนวตั้งและแนวนอนในวัสดุหลากหลาย", libraryAlt: "ภาพผลิตภัณฑ์ Retropa แสดงคลังเกมและการตั้งค่า",
    arcadeSummary: "เล่นไฟล์อาร์เคด CPS, Neo Geo, PGM และ M92 ที่รองรับใน Retropa พร้อมการควบคุมแบบสัมผัส จอยภายนอก และฟิลเตอร์ CRT การเล่นอาร์เคดต้องใช้ Plus ไม่มีเกมและไฟล์ BIOS รวมอยู่",
  },
}
