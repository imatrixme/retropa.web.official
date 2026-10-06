import { isPublishedLocale, type Locale, type PublishedLocale } from "@/i18n/locales"

/**
 * The App version the website describes, and the release history it publishes.
 *
 * The site never describes or teases an unreleased version: chapters, media and
 * notes tied to a newer release stay out of the build until `shippedVersion`
 * reaches that release. Release day is this one value changing; a preview build
 * sets `VITE_APP_VERSION=2.4.0` instead. Build evidence records the value as
 * `appVersion`.
 *
 * The Bun build scripts import this module, so it must not import modules that
 * use `import.meta.glob` (such as `@/content/media`).
 *
 * Notes are curated from each version's App Store "What's New" text: no prices,
 * trial durations or plan tiers, and no product names the site cannot claim.
 */
const releasedVersion = "2.3.2"

type Text = Record<PublishedLocale, string>
type Lines = Record<PublishedLocale, string[]>

type Release = {
  version: string
  /** Month the build was sent to the App Store ("YYYY-MM"); the release can follow a few days later. */
  month: string
  /** One line for a maintenance release; feature releases list each change. */
  changes: Lines
  /** A caveat the store notes carry, such as which features need Retropa Plus. */
  note?: Text
  /** The page that covers this release in depth. */
  page?: string
  anchor?: string
}

/** What each minor line was about, newest first. */
const lines: Record<string, Text> = {
  "2.4": { en: "Looks", "zh-Hans": "主机外观", ja: "本体デザイン" },
  "2.3": { en: "Display filters", "zh-Hans": "显示滤镜", ja: "画面フィルター" },
  "2.2": { en: "Medals", "zh-Hans": "勋章", ja: "メダル" },
  "2.1": { en: "Quick actions", "zh-Hans": "快捷操作", ja: "クイックアクション" },
  "2.0": { en: "Arcade", "zh-Hans": "街机", ja: "アーケード" },
  "1.4": { en: "Skins and iCloud", "zh-Hans": "皮肤与 iCloud", ja: "スキンと iCloud" },
  "1.3": { en: "An easier start", "zh-Hans": "更轻松地开始", ja: "はじめやすく" },
  "1.2": { en: "Console Mode", "zh-Hans": "主机模式", ja: "コンソールモード" },
  "1.1": { en: "Filters and highlights", "zh-Hans": "滤镜与高光片段", ja: "フィルターとハイライト" },
  "1.0": { en: "First release", "zh-Hans": "首个版本", ja: "最初のバージョン" },
}

const releases: Release[] = [
  {
    version: "2.4.0", month: "2026-10", page: "home", anchor: "looks",
    changes: {
      en: [
        "44 console shells in eight families, from classic plastic, translucent and metal to walnut, marble, cork, croc leather, denim and faux fur.",
        "Texture and gloss dials tune the material of every shell.",
        "PRO key kits: smoked resin, amethyst chrome, bronze relief and classic matte. Keys sit in molded wells and sink when pressed.",
        "Games without a custom skin now play inside a full console shell.",
        "Apply a look to every system or just one, and restore the defaults at any time without losing your saved skins.",
        "Shell, screen and keys stay together through rotation.",
        "Arcade games show only the face keys they use: two, four or six.",
        "Adaptive touch: face keys reach into the free space around them, and a touch on the D-pad keeps steering until you lift your finger.",
        "Highlight clips stay in sync through pauses and fast-forward, and fast-forwarded play is saved at the speed you played it.",
        "Smoother filter browsing and lower memory use.",
      ],
      "zh-Hans": [
        "8 大系列共 44 款主机外壳：从经典塑料、半透明、金属，到胡桃木、大理石、软木、鳄鱼纹皮革、牛仔布和仿毛绒。",
        "纹理和光泽旋钮，每款外壳的材质都能微调。",
        "PRO 键帽套件：烟熏树脂、紫晶镀铬、青铜浮雕、经典哑光；按键嵌入外壳凹槽，按下会下沉。",
        "没有定制皮肤的游戏，现在也在完整的主机外壳中游玩。",
        "外观可应用到全部平台或单个平台；随时恢复默认，已保存的皮肤不会丢失。",
        "旋转屏幕时，外壳、画面和按键始终保持一体。",
        "街机游戏只显示这款游戏用到的动作键：2 个、4 个或 6 个。",
        "自适应触控：动作键的触控范围会延伸到周围的空白处；按住方向键后，手指不抬起就一直由方向键控制。",
        "高光片段在暂停和快进时也保持音画同步，快进的部分按你实际游玩的速度保存。",
        "滤镜浏览更流畅，内存占用更低。",
      ],
      ja: [
        "44 種類の本体シェルを 8 シリーズで。クラシックなプラスチック、スケルトン、メタルから、ウォールナット、大理石、コルク、クロコ調レザー、デニム、フェイクファーまで。",
        "質感とツヤのダイヤルで、どのシェルも素材感を調整できます。",
        "PRO キーキット：スモークレジン、アメジストクローム、ブロンズレリーフ、クラシックマット。キーはシェルのくぼみに収まり、押すと沈みます。",
        "カスタムスキンのないゲームも、本体シェルの中でプレイできるようになりました。",
        "すべての機種にも、1 機種だけにも適用可能。保存したスキンを残したまま、いつでも初期設定に戻せます。",
        "画面を回転しても、シェル・画面・キーが一体のまま動きます。",
        "アーケードゲームでは、そのゲームが使うボタンだけを表示します（2、4、6 個）。",
        "アダプティブタッチ：ボタンの判定が周りの空いたスペースまで広がり、方向キーは指を離すまで操作が続きます。",
        "ハイライトは一時停止や早送りをしても映像と音がずれません。早送りした場面は、プレイした速さのまま保存されます。",
        "フィルター選びがなめらかになり、メモリ使用量も減りました。",
      ],
    },
    note: { en: "Some finishes and features require Retropa Plus.", "zh-Hans": "部分外观和功能需要 Retropa Plus。", ja: "一部のデザインと機能には Retropa Plus が必要です。" },
  },
  {
    version: "2.3.2", month: "2026-09",
    changes: { en: ["Better performance and a smoother experience on iOS 27."], "zh-Hans": ["优化了在 iOS 27 上的性能与体验。"], ja: ["iOS 27 でのパフォーマンスと使い勝手を改善しました。"] },
  },
  {
    version: "2.3.1", month: "2026-09",
    changes: {
      en: ["Arcade games can be tried before you subscribe.", "A new landscape mode with transparent controls, and a choice of fit or fill.", "Steadier arcade loading and audio playback.", "A more compact Retropa Plus page that is easier to read."],
      "zh-Hans": ["街机游戏可以先试玩，再决定是否订阅。", "横屏新增透明按键模式，可选择完整显示或等比铺满画面。", "街机加载与音频播放更稳定。", "会员页面更紧凑，权益展示更清楚。"],
      ja: ["サブスクリプションの前に、アーケードゲームをお試しいただけるようになりました。", "透明な操作ボタンの横画面モードを追加。画面全体を表示するか、画面いっぱいに拡大するかを選べます。", "アーケードゲームの読み込みと音声再生の安定性を改善しました。", "メンバーシップ画面をコンパクトにし、特典を確認しやすくしました。"],
    },
  },
  {
    version: "2.3.0", month: "2026-07", page: "crt-filters",
    changes: {
      en: ["64 new Retropa-designed Metal filters in three collections: CRT, analog and handheld displays; a display museum; and an experimental visual lab."],
      "zh-Hans": ["64 款由 Retropa 设计的全新 Metal 滤镜，分为三组：CRT、模拟信号与掌机显示，显示技术博物馆，以及实验视觉工坊。"],
      ja: ["Retropa が設計した 64 種類の新しい Metal フィルター。CRT・アナログ・携帯機ディスプレイ、ディスプレイ・ミュージアム、実験的ビジュアルラボの 3 つのグループで届けます。"],
    },
  },
  {
    version: "2.2.0", month: "2026-07",
    changes: {
      en: ["A new medal system turns your play history into milestones worth collecting.", "Fixes for loading issues that could occur in some situations."],
      "zh-Hans": ["全新勋章体系，让每一次游玩都沉淀为值得收藏的里程碑。", "修复了部分场景下可能出现的加载问题。"],
      ja: ["新しいメダルシステムで、プレイの歩みを集めたくなる記録として残せます。", "特定の状況で発生することがあった読み込みの問題を修正しました。"],
    },
  },
  {
    version: "2.1.0", month: "2026-07",
    changes: {
      en: ["3D Touch quick actions take you from the Home Screen straight into common Retropa actions."],
      "zh-Hans": ["新增 3D Touch 快捷菜单，从主屏幕更快进入 Retropa 的常用操作。"],
      ja: ["3D Touch クイックアクションに対応し、ホーム画面から Retropa のよく使う操作をすばやく開けるようになりました。"],
    },
  },
  {
    version: "2.0.4", month: "2026-06",
    changes: { en: ["Stability fixes."], "zh-Hans": ["修复了一些已知的稳定性问题。"], ja: ["既知の安定性に関する問題を修正しました。"] },
  },
  {
    version: "2.0.3", month: "2026-06",
    changes: { en: ["Fixes for known issues and steadier performance."], "zh-Hans": ["修复了一些已知问题，提高了运行稳定性。"], ja: ["いくつかの既知の問題を修正し、動作の安定性を向上しました。"] },
  },
  {
    version: "2.0.2", month: "2026-06",
    changes: {
      en: ["More reliable ROM import: files that were not recognized in some edge cases are now detected, and adding files and browsing the library are smoother."],
      "zh-Hans": ["ROM 导入更可靠：修复了部分情况下游戏文件无法正确识别的问题，添加文件和浏览游戏库也更顺畅。"],
      ja: ["ROM のインポートがより確実に。一部の条件でゲームファイルが認識されない問題を修正し、ファイルの追加やライブラリの移動もスムーズになりました。"],
    },
  },
  {
    version: "2.0.1", month: "2026-06",
    changes: {
      en: ["BIOS files load more consistently, and opening, viewing and renaming games in the library feels smoother."],
      "zh-Hans": ["BIOS 文件加载更稳定；进入游戏详情、查看信息和重命名更顺畅。"],
      ja: ["BIOS ファイルの読み込みを安定させ、ゲームライブラリの詳細表示や名前の変更をよりなめらかにしました。"],
    },
  },
  {
    version: "2.0.0", month: "2026-06", page: "arcade",
    changes: {
      en: ["Arcade support for CPS I/II/III, Neo Geo, PGM, Irem M92 and Midway T/W boards, with the saves, rewind, controllers and TV play you already use.", "Retropa's own HD skin system, with richer layouts, more modes and a feel closer to a real handheld."],
      "zh-Hans": ["新增街机核心，支持 CPS I/II/III、Neo Geo、PGM、Irem M92 和 Midway T/W 等基板，即时存档、快速回退、手柄和电视游玩照常可用。", "Retropa 专属高清定制皮肤系统上线：布局更丰富、模式更多，触控更接近实体掌机。"],
      ja: ["Arcade コアを追加。CPS I/II/III、Neo Geo、PGM、Irem M92、Midway T/W などの基板に対応し、セーブ、巻き戻し、コントローラー、TV プレイもこれまで通り使えます。", "Retropa 専用の HD カスタムスキンシステムを追加。より豊かなレイアウトと多くのモードで、実機の携帯機に近い手触りに。"],
    },
    note: { en: "No games or BIOS files are included.", "zh-Hans": "Retropa 不附带任何游戏或 BIOS 文件。", ja: "Retropa にはゲームや BIOS ファイルは含まれません。" },
  },
  {
    version: "1.4.0", month: "2026-05",
    changes: {
      en: ["The Skin Download Center: browse, download and manage handheld-style skins in one place.", "iCloud sync carries your saves and progress between iPhone and iPad.", "Better NES compatibility across more classic 8-bit games.", "Fixes and faster everyday performance across the library and playback."],
      "zh-Hans": ["全新皮肤下载中心：在一个地方浏览、下载和管理掌机风格皮肤。", "iCloud 云同步：存档和游玩进度在 iPhone 和 iPad 之间同步。", "NES 兼容性升级，更多经典 8-bit 游戏运行更稳定。", "修复问题并优化日常性能，包括游戏库处理和播放稳定性。"],
      ja: ["新しいスキンダウンロードセンター。携帯ゲーム機風スキンの閲覧、ダウンロード、管理をひとつの場所で。", "iCloud 同期に対応。セーブデータとプレイの進行状況を iPhone と iPad の間で引き継げます。", "NES 互換性を向上し、より多くのクラシックな 8-bit ゲームが安定して動きます。", "ライブラリ処理や再生の安定性を中心に、修正とパフォーマンス改善を行いました。"],
    },
  },
  {
    version: "1.3.0", month: "2026-05",
    changes: {
      en: ["A first launch that walks you through importing your games.", "A library that is easier to scan, with favorites, downloads and saved highlights where you expect them.", "Skins, filters, controllers, touch controls, save states and rewind are quicker to reach."],
      "zh-Hans": ["首次打开时跟着引导走，就能把游戏导入进来。", "游戏库更容易浏览，收藏、下载内容和保存的高光片段放得更清楚。", "皮肤、滤镜、手柄、触控、即时存档和快速回退都更容易找到。"],
      ja: ["初めて開いたときの案内に沿って、ゲームを取り込みやすくなりました。", "ライブラリが見やすくなり、お気に入り、ダウンロード、保存した名場面をすぐ見つけられます。", "スキン、フィルター、コントローラー、タッチ操作、セーブ、巻き戻しにすぐ手が届きます。"],
    },
  },
  {
    version: "1.2.0", month: "2026-04",
    changes: {
      en: ["Console Mode: play on the TV, use your iPhone as the controller, or connect a gamepad and sit back."],
      "zh-Hans": ["主机模式：投屏到电视玩大屏，手机直接变成手柄；也可以连上实体手柄。"],
      ja: ["コンソールモード。テレビに映して大画面で遊べ、iPhone をそのままコントローラーとして使えます。物理ゲームパッドもつなげます。"],
    },
  },
  {
    version: "1.1.4", month: "2026-04",
    changes: { en: ["Performance and stability improvements."], "zh-Hans": ["增强性能与稳定性。"], ja: ["パフォーマンスと安定性を向上しました。"] },
  },
  {
    version: "1.1.3", month: "2026-04",
    changes: { en: ["Fixes and better stability."], "zh-Hans": ["修复了一些问题并提升了稳定性。"], ja: ["いくつかの問題を修正し、安定性を向上しました。"] },
  },
  {
    version: "1.1.2", month: "2026-04",
    changes: {
      en: ["Better filters, interaction details and homebrew integration, and a faster, smoother game library."],
      "zh-Hans": ["滤镜、交互细节和 homebrew 集成进一步优化，游戏库更快、更顺。"],
      ja: ["フィルター、操作まわり、homebrew 連携を改善し、ゲームライブラリもより速く、なめらかになりました。"],
    },
  },
  {
    version: "1.1.1", month: "2026-03",
    changes: { en: ["Better performance and higher-quality highlight recording."], "zh-Hans": ["优化性能和高光片段录制效果。"], ja: ["パフォーマンスとハイライト録画の品質を改善しました。"] },
  },
  {
    version: "1.1.0", month: "2026-03",
    changes: {
      en: ["Exclusive CRT, DMG and TFT filters give every game the screen feel you want.", "Faster, more reliable highlight recording."],
      "zh-Hans": ["独家 CRT、DMG 和 TFT 滤镜，给每款游戏换上想要的屏幕质感。", "高光片段录制更快、更稳。"],
      ja: ["独自の CRT・DMG・TFT フィルターで、ゲームごとに好みの画面らしさに切り替えられます。", "ハイライト録画がより速く、安定しました。"],
    },
  },
  {
    version: "1.0.2", month: "2026-03",
    changes: { en: ["Better cover fetching and import, and smoother highlight recording and export."], "zh-Hans": ["优化封面抓取与导入，并改进高光片段的录制与导出。"], ja: ["カバー取得とインポートを改善し、ハイライトの録画と書き出しもより快適になりました。"] },
  },
  {
    version: "1.0.1", month: "2026-03",
    changes: { en: ["Day-one polish."], "zh-Hans": ["首日补丁：细节打磨。"], ja: ["初日パッチ：細部を磨き込みました。"] },
  },
  {
    version: "1.0.0", month: "2026-03",
    changes: { en: ["Retropa arrives on the App Store for iPhone and iPad."], "zh-Hans": ["Retropa 登陆 App Store，支持 iPhone 和 iPad。"], ja: ["Retropa が App Store に登場。iPhone と iPad に対応しました。"] },
  },
]

const versionPattern = /^\d+\.\d+\.\d+$/
const parts = (version: string) => version.split(".").map(Number)

export function compareVersions(a: string, b: string): number {
  const [x, y] = [parts(a), parts(b)]
  for (let index = 0; index < 3; index++) if (x[index] !== y[index]) return x[index] - y[index]
  return 0
}

function resolveShippedVersion(): string {
  const configured = import.meta.env.VITE_APP_VERSION
  if (configured === undefined || configured === "") return releasedVersion
  // A typo here must not quietly publish the wrong version, so it stops the build.
  if (typeof configured !== "string" || !versionPattern.test(configured)) throw new Error(`VITE_APP_VERSION must look like 2.4.0, got "${String(configured)}"`)
  if (!releases.some((release) => release.version === configured)) throw new Error(`VITE_APP_VERSION ${configured} has no release notes; add them to src/content/releases.ts first`)
  return configured
}

export const shippedVersion = resolveShippedVersion()

/** Whether content tied to `version` may publish. */
export const isShipped = (version: string) => compareVersions(version, shippedVersion) <= 0

const minor = (version: string) => version.split(".").slice(0, 2).join(".")
const textLocale = (locale: Locale): PublishedLocale => (isPublishedLocale(locale) ? locale : "en")

export type ReleaseEntry = { version: string; month: string; changes: string[]; note?: string; page?: string; anchor?: string }
export type ReleaseLine = { id: string; title: string; releases: ReleaseEntry[] }

/** Shipped releases, newest first, grouped by minor line. */
export function releaseHistory(locale: Locale): ReleaseLine[] {
  const language = textLocale(locale)
  const groups = new Map<string, ReleaseLine>()
  for (const release of releases.filter((entry) => isShipped(entry.version))) {
    const id = minor(release.version)
    const group = groups.get(id) ?? { id, title: lines[id]?.[language] ?? id, releases: [] }
    group.releases.push({ version: release.version, month: release.month, changes: release.changes[language], note: release.note?.[language], page: release.page, anchor: release.anchor })
    groups.set(id, group)
  }
  return [...groups.values()]
}

/** Release month in the reader's language ("September 2026", "2026年9月"). */
export function releaseMonth(month: string, locale: Locale): string {
  const [year, number] = month.split("-").map(Number)
  return new Intl.DateTimeFormat(textLocale(locale), { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(Date.UTC(year, number - 1, 15)))
}

export type ChangelogCopy = {
  metaTitle: string
  description: string
  breadcrumb: string
  eyebrow: string
  title: string
  intro: string
  current: string
  version: string
  months: string
  more: string
  plus: string
  /** Homepage link to this page; `{version}` is the shipped version. */
  whatsNew: string
}

const copy: Record<PublishedLocale, ChangelogCopy> = {
  en: {
    metaTitle: "Retropa Changelog: What's New in Every Version",
    description: "Every Retropa release for iPhone and iPad, newest first: the arcade, display filters, skins, Console Mode and the fixes in between, since the first version in March 2026.",
    breadcrumb: "Changelog",
    eyebrow: "CHANGELOG",
    title: "What's new in Retropa",
    intro: "Every version on the App Store, newest first. Feature releases list what they added; maintenance releases take one line.",
    current: "Current version",
    version: "Version",
    months: "Months are approximate: they come from when each build was sent to the App Store, and the release itself can follow a few days later.",
    more: "Read more",
    plus: "What is free and what needs Retropa Plus",
    whatsNew: "What's new in {version}",
  },
  "zh-Hans": {
    metaTitle: "Retropa 更新日志：每个版本的新功能",
    description: "Retropa iPhone 与 iPad 版的全部更新，从新到旧：街机、显示滤镜、皮肤、主机模式，以及其间的每一次修复。首个版本于 2026 年 3 月上架。",
    breadcrumb: "更新日志",
    eyebrow: "更新日志",
    title: "Retropa 的每一次更新",
    intro: "App Store 上的每个版本，从新到旧排列。功能更新列出新增内容，维护更新只写一行。",
    current: "当前版本",
    version: "版本",
    months: "月份为大致时间：取自每个版本提交到 App Store 的时间，正式上架可能晚几天。",
    more: "了解详情",
    plus: "哪些免费，哪些需要 Retropa Plus",
    whatsNew: "{version} 版更新内容",
  },
  ja: {
    metaTitle: "Retropa アップデート履歴：各バージョンの新機能",
    description: "iPhone・iPad 版 Retropa のすべてのアップデートを新しい順に。アーケード、画面フィルター、スキン、コンソールモード、その間の修正まで。最初のバージョンは 2026 年 3 月に公開しました。",
    breadcrumb: "アップデート履歴",
    eyebrow: "アップデート履歴",
    title: "Retropa のアップデート",
    intro: "App Store で公開したすべてのバージョンを新しい順に並べました。機能の追加は一覧で、修正だけのアップデートは一行でまとめています。",
    current: "現在のバージョン",
    version: "バージョン",
    months: "月はおおよその目安です。各ビルドを App Store に提出した月を記載しており、実際の公開は数日後になることがあります。",
    more: "詳しく見る",
    plus: "無料の機能と Retropa Plus の機能",
    whatsNew: "バージョン {version} の新機能",
  },
}

export const hasChangelogContent = (locale: Locale): boolean => isPublishedLocale(locale)
export const changelogContent = (locale: Locale): ChangelogCopy => copy[textLocale(locale)]
