import type { Locale } from "@/i18n/locales"

/** Site chrome copy: header, footer, download handoff and trademark notice. */
export type ChromeCopy = {
  download: string
  scanTitle: string
  scanNote: string
  appStoreAlt: string
  footerSystems: string
  footerFeatures: string
  footerLearn: string
  footerCompany: string
  footerLine: string
  trademark: string
  language: string
  menu: string
}

const copy: Record<Locale, ChromeCopy> = {
  en: {
    download: "Download", scanTitle: "Get it on your iPhone", scanNote: "Scan with the iPhone camera to open the App Store.", appStoreAlt: "Download on the App Store",
    footerSystems: "Systems", footerFeatures: "Features", footerLearn: "Learn", footerCompany: "Retropa", footerLine: "One more game?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo and other product names are trademarks of their respective owners. Retropa is not affiliated with, sponsored or endorsed by them. No games or BIOS files are included.",
    language: "Language", menu: "Menu",
  },
  "zh-Hans": {
    download: "下载", scanTitle: "用 iPhone 扫码下载", scanNote: "用 iPhone 相机扫描，直接打开 App Store。", appStoreAlt: "在 App Store 下载",
    footerSystems: "游戏系统", footerFeatures: "功能", footerLearn: "指南", footerCompany: "Retropa", footerLine: "再来一局？",
    trademark: "Nintendo、Game Boy、Nintendo DS、SNES、SEGA、Genesis、Mega Drive、Game Gear、WonderSwan、Neo Geo 等名称均为其各自所有者的商标。Retropa 与上述公司无关联，也未获其赞助或认可。App 不附带任何游戏或 BIOS 文件。",
    language: "语言", menu: "菜单",
  },
  "zh-Hant": {
    download: "下載", scanTitle: "用 iPhone 掃碼下載", scanNote: "以 iPhone 相機掃描，直接開啟 App Store。", appStoreAlt: "在 App Store 下載",
    footerSystems: "遊戲系統", footerFeatures: "功能", footerLearn: "指南", footerCompany: "Retropa", footerLine: "再來一局？",
    trademark: "Nintendo、Game Boy、Nintendo DS、SNES、SEGA、Genesis、Mega Drive、Game Gear、WonderSwan、Neo Geo 等名稱均為其各自所有者的商標。Retropa 與上述公司無關聯，亦未獲其贊助或認可。App 不附帶任何遊戲或 BIOS 檔案。",
    language: "語言", menu: "選單",
  },
  ja: {
    download: "ダウンロード", scanTitle: "iPhone でダウンロード", scanNote: "iPhone のカメラで読み取ると App Store が開きます。", appStoreAlt: "App Store からダウンロード",
    footerSystems: "システム", footerFeatures: "機能", footerLearn: "ガイド", footerCompany: "Retropa", footerLine: "もう1回だけ？",
    trademark: "Nintendo、Game Boy、Nintendo DS、SNES、SEGA、Genesis、Mega Drive、Game Gear、WonderSwan、Neo Geo などの名称は各社の商標です。Retropa はこれらの企業と提携しておらず、支援や承認も受けていません。ゲームや BIOS ファイルは含まれません。",
    language: "言語", menu: "メニュー",
  },
  ko: {
    download: "다운로드", scanTitle: "iPhone에서 받기", scanNote: "iPhone 카메라로 스캔하면 App Store가 열립니다.", appStoreAlt: "App Store에서 다운로드",
    footerSystems: "시스템", footerFeatures: "기능", footerLearn: "가이드", footerCompany: "Retropa", footerLine: "한 판 더?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo 등의 명칭은 각 소유자의 상표입니다. Retropa는 이들 회사와 제휴하거나 후원 또는 보증을 받지 않았습니다. 게임과 BIOS 파일은 포함되지 않습니다.",
    language: "언어", menu: "메뉴",
  },
  de: {
    download: "Laden", scanTitle: "Aufs iPhone holen", scanNote: "Mit der iPhone-Kamera scannen, um den App Store zu öffnen.", appStoreAlt: "Laden im App Store",
    footerSystems: "Systeme", footerFeatures: "Funktionen", footerLearn: "Anleitungen", footerCompany: "Retropa", footerLine: "Noch ein Spiel?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo und andere Produktnamen sind Marken ihrer jeweiligen Inhaber. Retropa steht in keiner Verbindung zu ihnen und wird von ihnen weder gesponsert noch unterstützt. Spiele und BIOS-Dateien sind nicht enthalten.",
    language: "Sprache", menu: "Menü",
  },
  es: {
    download: "Descargar", scanTitle: "Consíguelo en tu iPhone", scanNote: "Escanea con la cámara del iPhone para abrir el App Store.", appStoreAlt: "Descárgalo en el App Store",
    footerSystems: "Sistemas", footerFeatures: "Funciones", footerLearn: "Guías", footerCompany: "Retropa", footerLine: "¿Una más?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo y otros nombres de productos son marcas de sus respectivos propietarios. Retropa no está afiliada, patrocinada ni respaldada por ellos. No incluye juegos ni archivos BIOS.",
    language: "Idioma", menu: "Menú",
  },
  fr: {
    download: "Télécharger", scanTitle: "Sur votre iPhone", scanNote: "Scannez avec l'appareil photo de l'iPhone pour ouvrir l'App Store.", appStoreAlt: "Télécharger dans l'App Store",
    footerSystems: "Systèmes", footerFeatures: "Fonctions", footerLearn: "Guides", footerCompany: "Retropa", footerLine: "On en refait une ?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo et les autres noms de produits sont des marques de leurs propriétaires respectifs. Retropa n'est ni affiliée, ni sponsorisée, ni approuvée par eux. Aucun jeu ni fichier BIOS n'est inclus.",
    language: "Langue", menu: "Menu",
  },
  it: {
    download: "Scarica", scanTitle: "Scaricalo su iPhone", scanNote: "Inquadra con la fotocamera di iPhone per aprire l'App Store.", appStoreAlt: "Scarica su App Store",
    footerSystems: "Sistemi", footerFeatures: "Funzioni", footerLearn: "Guide", footerCompany: "Retropa", footerLine: "Un'altra?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo e altri nomi di prodotti sono marchi dei rispettivi proprietari. Retropa non è affiliata, sponsorizzata né approvata da loro. Giochi e file BIOS non sono inclusi.",
    language: "Lingua", menu: "Menu",
  },
  "pt-BR": {
    download: "Baixar", scanTitle: "Baixe no seu iPhone", scanNote: "Escaneie com a câmera do iPhone para abrir a App Store.", appStoreAlt: "Baixar na App Store",
    footerSystems: "Sistemas", footerFeatures: "Recursos", footerLearn: "Guias", footerCompany: "Retropa", footerLine: "Só mais uma?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo e outros nomes de produtos são marcas de seus respectivos proprietários. O Retropa não é afiliado, patrocinado nem endossado por eles. Jogos e arquivos BIOS não estão incluídos.",
    language: "Idioma", menu: "Menu",
  },
  ru: {
    download: "Скачать", scanTitle: "Установить на iPhone", scanNote: "Наведите камеру iPhone, чтобы открыть App Store.", appStoreAlt: "Загрузите в App Store",
    footerSystems: "Системы", footerFeatures: "Возможности", footerLearn: "Руководства", footerCompany: "Retropa", footerLine: "Ещё одну?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo и другие названия являются товарными знаками их владельцев. Retropa не связана с ними и не спонсируется и не одобряется ими. Игры и файлы BIOS не входят в комплект.",
    language: "Язык", menu: "Меню",
  },
  tr: {
    download: "İndir", scanTitle: "iPhone'una indir", scanNote: "App Store'u açmak için iPhone kamerasıyla tarayın.", appStoreAlt: "App Store'dan indirin",
    footerSystems: "Sistemler", footerFeatures: "Özellikler", footerLearn: "Rehberler", footerCompany: "Retropa", footerLine: "Bir tane daha?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo ve diğer ürün adları ilgili sahiplerinin ticari markalarıdır. Retropa bu şirketlerle bağlantılı değildir; onlar tarafından desteklenmez veya onaylanmaz. Oyun ve BIOS dosyaları dahil değildir.",
    language: "Dil", menu: "Menü",
  },
  id: {
    download: "Unduh", scanTitle: "Dapatkan di iPhone", scanNote: "Pindai dengan kamera iPhone untuk membuka App Store.", appStoreAlt: "Unduh di App Store",
    footerSystems: "Sistem", footerFeatures: "Fitur", footerLearn: "Panduan", footerCompany: "Retropa", footerLine: "Satu lagi?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo, dan nama produk lainnya adalah merek dagang milik pemiliknya masing-masing. Retropa tidak berafiliasi dengan, disponsori, atau didukung oleh mereka. Game dan file BIOS tidak disertakan.",
    language: "Bahasa", menu: "Menu",
  },
  th: {
    download: "ดาวน์โหลด", scanTitle: "ดาวน์โหลดบน iPhone", scanNote: "สแกนด้วยกล้อง iPhone เพื่อเปิด App Store", appStoreAlt: "ดาวน์โหลดบน App Store",
    footerSystems: "ระบบเกม", footerFeatures: "ฟีเจอร์", footerLearn: "คู่มือ", footerCompany: "Retropa", footerLine: "อีกตาไหม?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo และชื่อผลิตภัณฑ์อื่น ๆ เป็นเครื่องหมายการค้าของเจ้าของแต่ละราย Retropa ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการสนับสนุนหรือรับรองจากบริษัทเหล่านี้ และไม่มีเกมหรือไฟล์ BIOS รวมอยู่ด้วย",
    language: "ภาษา", menu: "เมนู",
  },
  vi: {
    download: "Tải về", scanTitle: "Tải về iPhone", scanNote: "Quét bằng camera iPhone để mở App Store.", appStoreAlt: "Tải về trên App Store",
    footerSystems: "Hệ máy", footerFeatures: "Tính năng", footerLearn: "Hướng dẫn", footerCompany: "Retropa", footerLine: "Thêm ván nữa?",
    trademark: "Nintendo, Game Boy, Nintendo DS, SNES, SEGA, Genesis, Mega Drive, Game Gear, WonderSwan, Neo Geo và các tên sản phẩm khác là thương hiệu của chủ sở hữu tương ứng. Retropa không liên kết, không được tài trợ hay xác nhận bởi họ. Không bao gồm trò chơi hay tệp BIOS.",
    language: "Ngôn ngữ", menu: "Menu",
  },
}

export const chromeCopy = (locale: Locale): ChromeCopy => copy[locale]
