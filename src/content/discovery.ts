import type { Locale } from "@/i18n/locales"

const navigation = {
  en: ["Systems", "Skins", "Filters", "Start playing"],
  "zh-Hans": ["游戏系统", "皮肤", "滤镜", "开始游玩"],
  "zh-Hant": ["遊戲系統", "外觀", "濾鏡", "開始遊玩"],
  ja: ["システム", "スキン", "フィルター", "始める"],
  ko: ["시스템", "스킨", "필터", "시작하기"],
  fr: ["Systèmes", "Skins", "Filtres", "Bien démarrer"],
  de: ["Systeme", "Skins", "Filter", "Loslegen"],
  es: ["Sistemas", "Skins", "Filtros", "Primeros pasos"],
  it: ["Sistemi", "Skin", "Filtri", "Inizia a giocare"],
  "pt-BR": ["Sistemas", "Skins", "Filtros", "Comece a jogar"],
  ru: ["Системы", "Обложки", "Фильтры", "Начать игру"],
  tr: ["Sistemler", "Temalar", "Filtreler", "Başlayın"],
  id: ["Sistem", "Skin", "Filter", "Mulai bermain"],
  th: ["ระบบ", "สกิน", "ฟิลเตอร์", "เริ่มเล่น"],
  vi: ["Hệ máy", "Giao diện", "Bộ lọc", "Bắt đầu chơi"],
} as const satisfies Record<Locale, readonly [string, string, string, string]>

export const navigationCopy = (locale: Locale) => navigation[locale]

export function discoveryCopy(locale: Locale) {
  return locale.startsWith("zh") ? {
    language: "zh-Hans", index: "游戏，从这里继续。", intro: "GBA、DS 与街机。你熟悉的游戏，在 iPhone 和 iPad 上接着玩。",
    gba: "一台掌机，一整个童年。", ds: "双屏的乐趣，随身带走。", arcade: "投币之后，还是那一局。",
    explore: "选择你的游戏系统", skins: "握在手里的，应该是你的风格。", skinNote: "横屏、竖屏，不同材质。为熟悉的按键，找到新的手感。",
    library: "把想玩的，都放在一起。", libraryNote: "从文件导入到游戏库，从掌机到街机。下一局，不必翻找。",
    more: "所有系统与核心", onThisPage: "本页内容", related: "继续探索", guide: "导入指南", original: "查看完整产品图",
    openMenu: "打开导航", closeMenu: "关闭导航", skip: "跳到正文", home: "首页", included: "游戏与 BIOS 需自行提供。",
  } : {
    language: "en", index: "Pick up where you left off.", intro: "GBA, DS and arcade. The games you remember, on the iPhone and iPad you already carry.",
    gba: "A whole childhood in your pocket.", ds: "Two screens. Twice the memories.", arcade: "Back to your favorite cabinet.",
    explore: "Choose your system", skins: "Make it feel like yours.", skinNote: "Portrait or landscape. Metal, glass, color. A different feel for the buttons you know by heart.",
    library: "Your next game. Right here.", libraryNote: "From your files to your collection. Handhelds and arcade, with everything in its place.",
    more: "All systems & cores", onThisPage: "On this page", related: "Keep exploring", guide: "Import guide", original: "View full product artwork",
    openMenu: "Open navigation", closeMenu: "Close navigation", skip: "Skip to content", home: "Home", included: "Games and BIOS files are not included.",
  }
}
