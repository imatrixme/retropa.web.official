import type { Locale } from "@/i18n/locales"

/**
 * Homepage chapters for feel (touch, haptics, controllers, sound) and for
 * bringing games in. Facts follow the product baseline in the OpenSpec change
 * `add-official-website-feel-and-import` (App 2.3.2). Only published languages
 * are written; other locales fall back to English.
 */
export type TouchStyle = { name: string; fit: string }
export type ImportRoute = { id: "files" | "portal" | "browser" | "homebrew"; title: string; body: string }

export type FeelCopy = {
  eyebrow: string; title: string; body: string
  lab: {
    fixed: string; adaptive: string; replay: string; reset: string; hint: string; note: string
    registered: string; missed: string; fixedCaption: string; adaptiveCaption: string; padLabel: string
  }
  styles: { title: string; body: string; items: TouchStyle[]; perGame: string }
  haptics: { title: string; body: string; packs: string; note: string }
  controllers: { title: string; body: string; turbo: string }
  sound: { title: string; body: string }
  shotAlt: { hotzone: string; curve: string; turbo: string; audio: string }
  link: string
}

export type BringCopy = {
  eyebrow: string; title: string; body: string
  routes: ImportRoute[]
  formats: string
  portalAlt: string; importAlt: string; biosAlt: string
  missing: { title: string; body: string; arcade: string; covers: string }
  link: string
}

const styleNames = ["Platformer", "Shooter", "Fighting", "Action", "Rhythm"]

const feel: Partial<Record<Locale, FeelCopy>> = {
  en: {
    eyebrow: "Feel", title: "Made for thumbs.",
    body: "Glass has no edges. Thumbs drift, and presses land between buttons. Retropa's adaptive hot zones fill those gaps and follow where your thumbs actually land — and every button can have a click you feel.",
    lab: {
      fixed: "Fixed", adaptive: "Adaptive", replay: "Replay a thumb", reset: "Reset",
      hint: "Tap the pad — try the gaps between buttons.",
      note: "An illustration of the idea, not a frame-by-frame copy of the in-app engine.",
      registered: "Registered", missed: "Missed — no button",
      fixedCaption: "Fixed hitboxes are crisp and predictable, but a press in the gap does nothing.",
      adaptiveCaption: "Adaptive zones fill the gaps and drift toward your thumb, within limits. The last button holds on for a moment when you hesitate between two.",
      padLabel: "Touch hit-zone demonstration",
    },
    styles: {
      title: "A touch style for how you play.",
      body: "Five styles tune the adaptive engine for a genre. Use one everywhere, or give each game its own.",
      items: [
        { name: styleNames[0], fit: "Precise movement and jump timing." },
        { name: styleNames[1], fit: "Quick direction swaps and reliable hold shots." },
        { name: styleNames[2], fit: "Smooth edge forgiveness through chained inputs." },
        { name: styleNames[3], fit: "Snap-in speed without losing a held button." },
        { name: styleNames[4], fit: "Rapid repeated taps with a steady tempo." },
      ],
      perGame: "Per game",
    },
    haptics: {
      title: "A click you can feel.",
      body: "Waveform haptics give every button its own press and release. Game Boy, Game Boy Color, GBA, NES and Super NES each come with four packs, and Curve Studio lets you shape intensity and sharpness button by button.",
      packs: "Classic · Best · Soft · Retropa",
      note: "Haptics are felt on iPhone, not in a browser.",
    },
    controllers: {
      title: "Pick up a controller. It's already mapped.",
      body: "Retropa recognizes Xbox, DualSense and DualShock, Nintendo and 8BitDo layouts and applies a matching template. Each controller keeps its slot and profile, reconnects without setup, and rumbles where the controller can.",
      turbo: "Turbo, set per system, per button and per game.",
    },
    sound: {
      title: "Sounds right, even at 2×.",
      body: "Fast-forward without the chipmunk pitch. Then add a GBA SP speaker model, a headphone spatializer, tape warmth — seventeen effects in all.",
    },
    shotAlt: {
      hotzone: "Retropa's Hotzone Profiles screen with Adaptive Touch Hotzone selected and the Shooter touch style",
      curve: "Curve Studio editing the intensity curve of a haptic preset",
      turbo: "Turbo Fire Buttons for NES with A and B enabled",
      audio: "Audio settings with fast-forward pitch preservation and audio effects",
    },
    link: "Everything about controls",
  },
  "zh-Hans": {
    eyebrow: "手感", title: "为拇指而生。",
    body: "玻璃屏没有按键边缘，拇指会漂，按下去常常落在两个键之间。Retropa 的自适应热区会补上这些缝隙，跟着你拇指真正落下的位置走；每个键还能有一下摸得到的「咔哒」。",
    lab: {
      fixed: "固定", adaptive: "自适应", replay: "回放一段拇指", reset: "重置",
      hint: "点一点面板，专点按键之间的缝隙试试。",
      note: "这是原理演示，不是 App 内算法的逐帧复刻。",
      registered: "触发", missed: "落空，没有按到键",
      fixedCaption: "固定判定清晰可预期，但按在缝隙里就什么也不会发生。",
      adaptiveCaption: "自适应热区会填满缝隙，并在有限范围内向你的拇指偏移；在两个键之间犹豫时，刚按过的键会多保持一瞬。",
      padLabel: "触控热区演示",
    },
    styles: {
      title: "按你的玩法，选一种手感。",
      body: "五种手感风格按游戏类型调校自适应引擎。可以全局统一，也可以每个游戏各用各的。",
      items: [
        { name: styleNames[0], fit: "平台跳跃：走位精确，起跳时机准。" },
        { name: styleNames[1], fit: "射击：快速换向，按住连射不丢。" },
        { name: styleNames[2], fit: "格斗：连续搓招时边缘更宽容。" },
        { name: styleNames[3], fit: "动作：吸附要快，按住也要稳。" },
        { name: styleNames[4], fit: "节奏：高频连点，节拍稳定。" },
      ],
      perGame: "按游戏设置",
    },
    haptics: {
      title: "摸得到的「咔哒」。",
      body: "波形触感让每个键都有自己的按下与松开。Game Boy、Game Boy Color、GBA、NES 和超级任天堂各带四套触感包，Curve Studio 还能逐键调整强度与锐度曲线。",
      packs: "Classic · Best · Soft · Retropa",
      note: "触感要在 iPhone 上感受，浏览器里没有。",
    },
    controllers: {
      title: "拿起手柄，键位已经配好。",
      body: "Retropa 能识别 Xbox、DualSense 与 DualShock、任天堂和 8BitDo 的布局，自动套用对应模板。每个手柄记住自己的位置和配置，重新连上不用再设，手柄支持的话还有震动。",
      turbo: "连发：按主机、按键、按游戏分别设置。",
    },
    sound: {
      title: "开到 2 倍速，声音也不变调。",
      body: "快进时保持音调，不再是花栗鼠嗓音。还能加上 GBA SP 扬声器模型、耳机空间化、磁带温暖感等，一共十七种效果。",
    },
    shotAlt: {
      hotzone: "Retropa 热区配置页，已选择自适应触控热区与 Shooter 手感风格",
      curve: "Curve Studio 正在编辑触感预设的强度曲线",
      turbo: "NES 连发按键设置，A 和 B 已开启",
      audio: "音频设置：快进保持音调与音频效果",
    },
    link: "关于操控的一切",
  },
  ja: {
    eyebrow: "操作感", title: "親指のために。",
    body: "ガラスの画面にはボタンの縁がありません。親指はずれ、押したつもりがボタンの間に落ちる。Retropa のアダプティブ・ホットゾーンはその隙間を埋め、親指が実際に触れる位置についていきます。ボタンごとに、指で感じる「カチッ」も。",
    lab: {
      fixed: "固定", adaptive: "アダプティブ", replay: "親指を再生", reset: "リセット",
      hint: "パッドをタップ。ボタンの隙間を狙ってみてください。",
      note: "考え方を示すデモで、アプリ内エンジンをそのまま再現したものではありません。",
      registered: "入力", missed: "空振り（ボタンなし）",
      fixedCaption: "固定の当たり判定は明快で予測しやすい一方、隙間を押しても何も起きません。",
      adaptiveCaption: "アダプティブは隙間を埋め、決まった範囲内で親指の位置へ寄っていきます。2つのボタンで迷ったときは、直前のボタンが一瞬保持されます。",
      padLabel: "タッチ判定のデモ",
    },
    styles: {
      title: "遊び方に合わせたタッチスタイル。",
      body: "5つのスタイルが、ジャンルに合わせてアダプティブエンジンを調整します。全体で1つに統一しても、ゲームごとに変えてもかまいません。",
      items: [
        { name: styleNames[0], fit: "プラットフォーマー：正確な移動とジャンプのタイミング。" },
        { name: styleNames[1], fit: "シューティング：素早い方向転換と安定した押しっぱなし。" },
        { name: styleNames[2], fit: "格闘：連続入力でも縁がなめらかに受け止める。" },
        { name: styleNames[3], fit: "アクション：吸い付く速さと押し続ける安定感。" },
        { name: styleNames[4], fit: "リズム：連打のテンポを一定に。" },
      ],
      perGame: "ゲームごと",
    },
    haptics: {
      title: "指で感じる「カチッ」。",
      body: "波形ハプティクスで、ボタンごとに押したときと離したときの感触が変わります。ゲームボーイ、ゲームボーイカラー、GBA、ファミコン（NES）、スーパーファミコンにはそれぞれ4つのパックを用意。Curve Studio で強さと鋭さをボタン単位で調整できます。",
      packs: "Classic · Best · Soft · Retropa",
      note: "触覚は iPhone で感じるもので、ブラウザでは再現できません。",
    },
    controllers: {
      title: "コントローラーを手に取れば、もう割り当て済み。",
      body: "Retropa は Xbox、DualSense・DualShock、Nintendo、8BitDo の配置を認識し、対応するテンプレートを自動で適用します。コントローラーごとにスロットと設定を保持し、再接続しても設定し直す必要はありません。対応機種では振動も。",
      turbo: "連射は機種・ボタン・ゲームごとに設定。",
    },
    sound: {
      title: "2倍速でも、音は正しく。",
      body: "早送りしても音程が変わりません。さらに GBA SP のスピーカーモデル、ヘッドホン向け空間化、テープの温かみなど、全部で17種類のエフェクト。",
    },
    shotAlt: {
      hotzone: "アダプティブ・タッチホットゾーンと Shooter スタイルを選択した Retropa のホットゾーン設定画面",
      curve: "ハプティクスのプリセットの強さカーブを編集している Curve Studio",
      turbo: "A と B を有効にした NES の連射ボタン設定",
      audio: "早送り時の音程保持とオーディオエフェクトの設定",
    },
    link: "操作のすべて",
  },
}

const bring: Partial<Record<Locale, BringCopy>> = {
  en: {
    eyebrow: "Bring your games", title: "Four ways in.",
    body: "Retropa ships without games or BIOS files. Getting your own in takes seconds, wherever they live.",
    routes: [
      { id: "files", title: "Files and AirDrop", body: "Pick one file or many from the Files app — .gba, .nds, .zip, .7z and more than thirty other formats. Game Boy, GBA, NES, Super NES, ZIP and 7Z files also open straight into Retropa from AirDrop or another app." },
      { id: "portal", title: "Wi‑Fi from your computer", body: "Start the Portal, open the address it shows in any browser on the same Wi‑Fi, and drag games and packs straight in. Add BIOS files and tidy up your library from the big screen, too." },
      { id: "browser", title: "The built-in browser", body: "Download a file in Retropa's browser and it goes straight to import. Temporary downloads clean up after themselves." },
      { id: "homebrew", title: "The Homebrew catalog", body: "No games yet? Pick a free, legally distributed homebrew game and play it a moment later." },
    ],
    formats: "Accepted formats",
    portalAlt: "The Retropa Portal library open in a desktop browser, showing homebrew games with cover art",
    importAlt: "Retropa's Import Center listing the supported import formats",
    biosAlt: "BIOS Management in Retropa, grouped by emulator core, each entry marked Missing",
    missing: {
      title: "Something missing? It says what.",
      body: "BIOS files are grouped by the core that uses them, each marked present or missing. When a game needs one, the launch screen takes you straight to the right place.",
      arcade: "When an arcade set is incomplete, Retropa names the exact files that are missing — and keeps BIOS parts such as QSound separate from the game's own files.",
      covers: "Covers are matched from the file itself, so your library shows box art instead of file names.",
    },
    link: "The complete import guide",
  },
  "zh-Hans": {
    eyebrow: "把游戏带进来", title: "四条路，都很快。",
    body: "Retropa 不内置任何游戏和 BIOS。把你自己的游戏放进来只需要几秒，不管它们存在哪里。",
    routes: [
      { id: "files", title: "「文件」与隔空投送", body: "在「文件」App 里一次选一个或一批，支持 .gba、.nds、.zip、.7z 等三十多种格式。Game Boy、GBA、NES、超级任天堂以及 ZIP、7Z 文件，还能通过隔空投送或其他 App 直接用 Retropa 打开。" },
      { id: "portal", title: "从电脑用 Wi‑Fi 传", body: "打开 Portal，用同一 Wi‑Fi 下任意电脑的浏览器访问它显示的地址，把游戏和资源包直接拖进去。添加 BIOS、整理游戏库，也都能在大屏上完成。" },
      { id: "browser", title: "内置浏览器", body: "在 Retropa 的浏览器里下载，文件直接进入导入流程，临时文件会自动清理。" },
      { id: "homebrew", title: "Homebrew 目录", body: "手头还没有游戏？挑一款免费、合法发行的独立游戏，马上就能玩。" },
    ],
    formats: "支持的格式",
    portalAlt: "在桌面浏览器中打开的 Retropa Portal 游戏库，显示带封面的 Homebrew 游戏",
    importAlt: "Retropa 导入中心，列出支持导入的文件格式",
    biosAlt: "Retropa 的 BIOS 管理页，按模拟核心分组，每项显示缺失状态",
    missing: {
      title: "缺了什么，它会直接告诉你。",
      body: "BIOS 按使用它的核心分组，每一项都标明已安装或缺失。游戏需要 BIOS 时，启动界面会直接带你去对应的位置。",
      arcade: "街机包不完整时，Retropa 会列出具体缺少哪些文件，并把 QSound 这类 BIOS 素材和游戏本身的文件分开说明。",
      covers: "封面根据文件本身自动匹配，游戏库里看到的是封面，而不是一串文件名。",
    },
    link: "完整的导入指南",
  },
  ja: {
    eyebrow: "ゲームを持ってこよう", title: "入口は4つ。",
    body: "Retropa にはゲームも BIOS も含まれていません。手持ちのゲームは、どこに保存してあっても数秒で取り込めます。",
    routes: [
      { id: "files", title: "ファイルと AirDrop", body: "「ファイル」アプリから1本でもまとめてでも選べます。.gba、.nds、.zip、.7z など30種類以上の形式に対応。ゲームボーイ、GBA、ファミコン、スーパーファミコン、ZIP、7Z は AirDrop や他のアプリからそのまま Retropa で開けます。" },
      { id: "portal", title: "パソコンから Wi‑Fi で", body: "Portal を起動し、同じ Wi‑Fi のパソコンのブラウザで表示されたアドレスを開けば、ゲームやパックをドラッグで転送できます。BIOS の追加やライブラリの整理も大きな画面で。" },
      { id: "browser", title: "内蔵ブラウザ", body: "Retropa のブラウザでダウンロードしたファイルは、そのまま取り込みへ。一時ファイルは自動で片付きます。" },
      { id: "homebrew", title: "Homebrew カタログ", body: "まだゲームがなくても大丈夫。無料で合法に配布されている Homebrew ゲームを選べば、すぐに遊べます。" },
    ],
    formats: "対応形式",
    portalAlt: "デスクトップのブラウザで開いた Retropa Portal のライブラリ。カバー付きの Homebrew ゲームが並ぶ",
    importAlt: "対応する取り込み形式を一覧表示した Retropa のインポートセンター",
    biosAlt: "エミュレータコアごとにまとめられ、各項目が未登録と表示された Retropa の BIOS 管理画面",
    missing: {
      title: "足りないものは、はっきり教えてくれる。",
      body: "BIOS は使用するコアごとにまとめられ、それぞれ登録済みか未登録かが分かります。ゲームに BIOS が必要なときは、起動画面から該当する場所へ直接移動できます。",
      arcade: "アーケードのセットが不完全なときは、足りないファイル名を具体的に表示。QSound のような BIOS 素材は、ゲーム本体のファイルと分けて案内します。",
      covers: "カバーはファイルそのものから照合されるので、ライブラリにはファイル名ではなくパッケージ画像が並びます。",
    },
    link: "取り込みガイドを読む",
  },
}

export const feelCopy = (locale: Locale): FeelCopy => feel[locale] ?? feel.en!
export const bringCopy = (locale: Locale): BringCopy => bring[locale] ?? bring.en!
export const importFormats = [".gba", ".nds", ".gb", ".gbc", ".nes", ".fds", ".unf", ".unif", ".sfc", ".smc", ".swc", ".fig", ".bs", ".st", ".md", ".gen", ".smd", ".sms", ".gg", ".ws", ".wsc", ".ngp", ".ngpc", ".ngc", ".nsf", ".nsfe", ".cps1", ".zip", ".7z", ".retropack", ".retropaskin"]
