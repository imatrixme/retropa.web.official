import { isPublishedLocale, type Locale, type PublishedLocale } from "@/i18n/locales"

/**
 * The 2.4 looks chapter and brand film: shell families, shell names and copy.
 *
 * Families and their order mirror the app (`FallbackShellFinish.Family` and
 * `shellTemplates` in FallbackPaletteStore+Shells.swift). Classic plastic is the
 * free family; every other family is a Plus finish, as `requiresPlus` says.
 * Shells are named by family and material only: no name alludes to a
 * manufacturer's console, so the app's internal ids stay internal.
 */
type Text = Record<PublishedLocale, string>

export type ShellFamilyId = "classic" | "translucent" | "metal" | "bronze" | "console" | "special" | "natural" | "textile"
type Family = { id: ShellFamilyId; name: Text; shells: { id: string; name: Text }[] }

const families: Family[] = [
  {
    id: "classic", name: { en: "Classic plastic", "zh-Hans": "经典塑料", ja: "クラシック" },
    shells: [
      { id: "warm-grey-handheld", name: { en: "Warm grey", "zh-Hans": "暖灰", ja: "ウォームグレー" } },
      { id: "indigo-handheld", name: { en: "Indigo", "zh-Hans": "靛蓝", ja: "インディゴ" } },
      { id: "lilac-grey-16bit", name: { en: "Lilac grey", "zh-Hans": "丁香灰", ja: "ライラックグレー" } },
      { id: "indigo-cube", name: { en: "Violet", "zh-Hans": "紫罗兰", ja: "バイオレット" } },
      { id: "soft-touch-charcoal", name: { en: "Soft-touch charcoal", "zh-Hans": "亲肤炭黑", ja: "ソフトタッチ・チャコール" } },
      { id: "soft-touch-sage", name: { en: "Soft-touch sage", "zh-Hans": "亲肤灰绿", ja: "ソフトタッチ・セージ" } },
      { id: "milk-white", name: { en: "Milk white", "zh-Hans": "牛奶白", ja: "ミルクホワイト" } },
      { id: "milk-tea", name: { en: "Milk tea", "zh-Hans": "奶茶", ja: "ミルクティー" } },
    ],
  },
  {
    id: "translucent", name: { en: "Translucent", "zh-Hans": "半透明", ja: "スケルトン" },
    shells: [
      { id: "atomic-purple", name: { en: "Clear purple", "zh-Hans": "透明紫", ja: "クリアパープル" } },
      { id: "ice-clear", name: { en: "Ice clear", "zh-Hans": "冰透", ja: "アイスクリア" } },
      { id: "smoke-black", name: { en: "Smoke black", "zh-Hans": "烟熏黑", ja: "スモークブラック" } },
      { id: "jungle-green", name: { en: "Clear green", "zh-Hans": "透明绿", ja: "クリアグリーン" } },
      { id: "frosted-ice", name: { en: "Frosted ice", "zh-Hans": "磨砂冰白", ja: "フロストアイス" } },
      { id: "frosted-mint", name: { en: "Frosted mint", "zh-Hans": "磨砂薄荷", ja: "フロストミント" } },
    ],
  },
  {
    id: "metal", name: { en: "Metal", "zh-Hans": "金属", ja: "メタル" },
    shells: [
      { id: "prototype-aluminum", name: { en: "Sandblasted aluminum", "zh-Hans": "喷砂铝", ja: "サンドブラスト・アルミ" } },
      { id: "titanium-smoke", name: { en: "Brushed titanium", "zh-Hans": "拉丝钛", ja: "ヘアライン・チタン" } },
      { id: "gunmetal-anodized", name: { en: "Anodized gunmetal", "zh-Hans": "阳极氧化枪灰", ja: "アルマイト・ガンメタル" } },
      { id: "carbon-twill", name: { en: "Carbon twill", "zh-Hans": "斜纹碳纤维", ja: "カーボンツイル" } },
      { id: "blue-carbon", name: { en: "Blue carbon", "zh-Hans": "蓝色碳纤维", ja: "ブルーカーボン" } },
    ],
  },
  {
    id: "bronze", name: { en: "Bronze", "zh-Hans": "青铜", ja: "ブロンズ" },
    shells: [
      { id: "bronze-lotus", name: { en: "Bronze lotus", "zh-Hans": "青铜莲纹", ja: "ブロンズ・ロータス" } },
      { id: "verdigris", name: { en: "Verdigris", "zh-Hans": "铜绿", ja: "緑青" } },
    ],
  },
  {
    id: "console", name: { en: "Console finishes", "zh-Hans": "主机涂装", ja: "コンソール仕上げ" },
    shells: [
      { id: "red-cream-8bit", name: { en: "Red and cream", "zh-Hans": "红白双色", ja: "レッド＆クリーム" } },
      { id: "piano-black-portable", name: { en: "Piano black", "zh-Hans": "钢琴黑", ja: "ピアノブラック" } },
      { id: "pearl-white-portable", name: { en: "Pearl white gloss", "zh-Hans": "珍珠白亮面", ja: "パールホワイト・グロス" } },
      { id: "charcoal-64", name: { en: "Charcoal", "zh-Hans": "炭灰", ja: "チャコール" } },
      { id: "grey-disc-console", name: { en: "Grey two-tone", "zh-Hans": "灰色双拼", ja: "グレー・ツートン" } },
    ],
  },
  {
    id: "special", name: { en: "Special editions", "zh-Hans": "特别版", ja: "スペシャル" },
    shells: [
      { id: "starlight-glitter", name: { en: "Starlight glitter", "zh-Hans": "星光闪粉", ja: "スターライト・グリッター" } },
      { id: "rose-gold-glitter", name: { en: "Rose gold glitter", "zh-Hans": "玫瑰金闪粉", ja: "ローズゴールド・グリッター" } },
      { id: "pearl-white", name: { en: "Pearl white", "zh-Hans": "珍珠白", ja: "パールホワイト" } },
      { id: "lilac-pearl", name: { en: "Lilac pearl", "zh-Hans": "丁香珠光", ja: "ライラックパール" } },
    ],
  },
  {
    id: "natural", name: { en: "Wood and stone", "zh-Hans": "木与石", ja: "ウッド＆ストーン" },
    shells: [
      { id: "american-walnut", name: { en: "American walnut", "zh-Hans": "美国黑胡桃木", ja: "アメリカンウォールナット" } },
      { id: "light-walnut", name: { en: "Light walnut", "zh-Hans": "浅色胡桃木", ja: "ライトウォールナット" } },
      { id: "oak-table", name: { en: "Oak", "zh-Hans": "橡木", ja: "オーク" } },
      { id: "farmhouse-pine", name: { en: "Farmhouse pine", "zh-Hans": "松木", ja: "パイン" } },
      { id: "carrara-marble", name: { en: "Carrara marble", "zh-Hans": "卡拉拉白大理石", ja: "カララ大理石" } },
      { id: "nero-marquina", name: { en: "Black marble", "zh-Hans": "黑白根大理石", ja: "ブラックマーブル" } },
      { id: "natural-cork", name: { en: "Natural cork", "zh-Hans": "原色软木", ja: "ナチュラルコルク" } },
      { id: "smoked-cork", name: { en: "Smoked cork", "zh-Hans": "烟熏软木", ja: "スモークコルク" } },
    ],
  },
  {
    id: "textile", name: { en: "Leather and textile", "zh-Hans": "皮革与织物", ja: "レザー＆テキスタイル" },
    shells: [
      { id: "black-croc", name: { en: "Black croc leather", "zh-Hans": "黑色鳄鱼纹皮革", ja: "ブラック・クロコレザー" } },
      { id: "cognac-croc", name: { en: "Cognac croc leather", "zh-Hans": "干邑色鳄鱼纹皮革", ja: "コニャック・クロコレザー" } },
      { id: "snow-fox", name: { en: "Snow faux fur", "zh-Hans": "雪白仿毛绒", ja: "スノー・フェイクファー" } },
      { id: "tabby-brown", name: { en: "Tabby faux fur", "zh-Hans": "虎斑仿毛绒", ja: "タビー・フェイクファー" } },
      { id: "raw-indigo", name: { en: "Raw indigo denim", "zh-Hans": "原色靛蓝牛仔布", ja: "ロウ・インディゴデニム" } },
      { id: "stonewash-denim", name: { en: "Stonewash denim", "zh-Hans": "石洗牛仔布", ja: "ストーンウォッシュ・デニム" } },
    ],
  },
]

/** The shell the chapter opens on, and the one its texture and gloss comparison shows. */
export const featuredShell = "cognac-croc"

/** PRO key kits with their face, D-pad and pill colors (FallbackControlStyleStore+ProKits.swift). */
export const keyKits = [
  { id: "smoked-resin", colors: ["#4d3375", "#1a1a1c", "#a8abb0"] },
  { id: "amethyst-chrome", colors: ["#451f75", "#6b6b73", "#9999a1"] },
  { id: "bronze-relief", colors: ["#4d2175", "#785933", "#806138"] },
  { id: "classic-matte", colors: ["#8c214d", "#29292e", "#66666e"] },
] as const

export type LooksCopy = {
  eyebrow: string
  title: string
  body: string
  pick: string
  free: string
  /** Alternative text for a shell rendering: `{name}` and `{family}`. */
  shellAlt: string
  plusNote: string
  dialsTitle: string
  dialsBody: string
  dialsAlt: string
  axes: [string, string]
  texture: [string, string, string]
  gloss: [string, string, string]
  keysTitle: string
  keysBody: string
  kits: [string, string, string, string]
  apply: string
}

export type FilmCopy = { eyebrow: string; title: string; body: string; play: string; note: string }

const looks: Record<PublishedLocale, LooksCopy> = {
  en: {
    eyebrow: "New in 2.4 · Looks",
    title: "Back inside a console.",
    body: "44 shells in eight families, from classic plastic, translucent and metal to walnut, marble, cork, croc leather, denim and faux fur. Games without a custom skin now play inside a full console shell, and shell, screen and keys turn together when you rotate.",
    pick: "Choose a shell",
    free: "Free",
    shellAlt: "{name} shell ({family}) rendered by Retropa",
    plusNote: "Classic plastic is free. The other seven families, and some other finishes and features, require Retropa Plus.",
    dialsTitle: "Texture and gloss, on every shell.",
    dialsBody: "Two dials tune the material: texture from smooth to deep relief, gloss from matte to polished. Shown here on cognac croc leather.",
    dialsAlt: "Nine samples of cognac croc leather: texture rises down the rows, gloss across the columns",
    axes: ["Texture", "Gloss"],
    texture: ["Smooth", "Textured", "Deep relief"],
    gloss: ["Matte", "Satin", "Polished"],
    keysTitle: "PRO key kits",
    keysBody: "Keys sit in molded wells and sink when pressed.",
    kits: ["Smoked resin", "Amethyst chrome", "Bronze relief", "Classic matte"],
    apply: "Apply a look to every system or just one, and restore the defaults at any time without losing your saved skins.",
  },
  "zh-Hans": {
    eyebrow: "2.4 新增 · 主机外观",
    title: "把游戏，装回一台主机。",
    body: "8 大系列共 44 款外壳：从经典塑料、半透明、金属，到胡桃木、大理石、软木、鳄鱼纹皮革、牛仔布和仿毛绒。没有定制皮肤的游戏，现在也在完整的主机外壳中游玩；旋转屏幕时，外壳、画面和按键始终保持一体。",
    pick: "挑一款外壳",
    free: "免费",
    shellAlt: "Retropa 渲染的{name}外壳（{family}）",
    plusNote: "经典塑料系列免费。其余 7 个系列，以及部分外观和功能，需要 Retropa Plus。",
    dialsTitle: "每款外壳，都能调纹理和光泽。",
    dialsBody: "两个旋钮微调材质：纹理从平滑到深浮雕，光泽从哑光到抛光。图中是干邑色鳄鱼纹皮革。",
    dialsAlt: "干邑色鳄鱼纹皮革的九个样本：自上而下纹理加深，自左向右光泽增强",
    axes: ["纹理", "光泽"],
    texture: ["平滑", "细纹", "深浮雕"],
    gloss: ["哑光", "缎面", "抛光"],
    keysTitle: "PRO 键帽套件",
    keysBody: "按键嵌入外壳凹槽，按下会下沉。",
    kits: ["烟熏树脂", "紫晶镀铬", "青铜浮雕", "经典哑光"],
    apply: "外观可应用到全部平台或单个平台；随时恢复默认，已保存的皮肤不会丢失。",
  },
  ja: {
    eyebrow: "2.4 の新機能 · 本体デザイン",
    title: "ゲームを、もう一度本体の中へ。",
    body: "8 シリーズ、44 種類のシェル。クラシックなプラスチック、スケルトン、メタルから、ウォールナット、大理石、コルク、クロコ調レザー、デニム、フェイクファーまで。カスタムスキンのないゲームも本体シェルの中でプレイでき、画面を回転してもシェル・画面・キーが一体のまま動きます。",
    pick: "シェルを選ぶ",
    free: "無料",
    shellAlt: "Retropa でレンダリングした{name}のシェル（{family}）",
    plusNote: "クラシックシリーズは無料です。ほかの 7 シリーズと、一部のデザインと機能には Retropa Plus が必要です。",
    dialsTitle: "すべてのシェルに、質感とツヤ。",
    dialsBody: "2 つのダイヤルで素材感を調整。質感はなめらかから深いレリーフまで、ツヤはマットから鏡面まで。写真はコニャックのクロコ調レザーです。",
    dialsAlt: "コニャックのクロコ調レザーの 9 つのサンプル。下の段ほど質感が深く、右の列ほどツヤが強くなります",
    axes: ["質感", "ツヤ"],
    texture: ["なめらか", "ほどよく", "深いレリーフ"],
    gloss: ["マット", "サテン", "鏡面"],
    keysTitle: "PRO キーキット",
    keysBody: "キーはシェルのくぼみに収まり、押すと沈みます。",
    kits: ["スモークレジン", "アメジストクローム", "ブロンズレリーフ", "クラシックマット"],
    apply: "すべての機種にも、1 機種だけにも適用でき、保存したスキンを残したまま、いつでも初期設定に戻せます。",
  },
}

const film: Record<PublishedLocale, FilmCopy> = {
  en: { eyebrow: "Film", title: "After lights out", body: "A 42-second film without words: what the toy box gets up to once the lights go off.", play: "Play the film", note: "Some features shown in the film require Retropa Plus." },
  "zh-Hans": { eyebrow: "短片", title: "关灯以后的玩具箱", body: "一部 42 秒、没有台词的短片：灯一关，玩具箱里的事。", play: "播放短片", note: "片中部分功能需要 Retropa Plus。" },
  ja: { eyebrow: "フィルム", title: "消灯後のおもちゃ箱", body: "セリフのない 42 秒のショートフィルム。明かりが消えたあとの、おもちゃ箱の中のできごと。", play: "フィルムを再生", note: "フィルムに登場する一部の機能には Retropa Plus が必要です。" },
}

const textLocale = (locale: Locale): PublishedLocale => (isPublishedLocale(locale) ? locale : "en")

export type ShellFamily = { id: ShellFamilyId; name: string; plus: boolean; shells: { id: string; name: string }[] }

export function shellFamilies(locale: Locale): ShellFamily[] {
  const language = textLocale(locale)
  return families.map((family) => ({
    id: family.id, name: family.name[language], plus: family.id !== "classic",
    shells: family.shells.map((shell) => ({ id: shell.id, name: shell.name[language] })),
  }))
}

export const looksCopy = (locale: Locale): LooksCopy => looks[textLocale(locale)]
export const filmCopy = (locale: Locale): FilmCopy => film[textLocale(locale)]
