import type { Locale } from "@/i18n/locales"

/**
 * Homepage copy for the Channel Surf experience. Every claim describes a
 * capability shipped in the current App release (see the OpenSpec change
 * `rebuild-official-website-astro-experience`, "Product fact baseline").
 * No prices, plan tiers or trial durations appear here.
 */
export type HomeCopy = {
  hero: { title: string; lead: string; trust: [string, string, string]; channels: string; pause: string; play: string; live: string }
  systems: { eyebrow: string; title: string; body: string; all: string }
  skins: { eyebrow: string; title: string; body: string; free: string; plus: string; pick: string; link: string }
  console: { eyebrow: string; title: string; body: string; steps: [string, string][]; illustrative: string }
  feel: { eyebrow: string; title: string; cards: { id: "controllers" | "haptics" | "time" | "speed"; title: string; body: string; plus?: boolean }[] }
  collection: { eyebrow: string; title: string; cards: { id: "library" | "honor" | "highlights" | "cloud"; title: string; body: string }[] }
  arcade: { eyebrow: string; title: string; body: string; link: string }
  start: { eyebrow: string; title: string; steps: [string, string][]; homebrew: string }
  plus: { eyebrow: string; title: string; freeTitle: string; free: string[]; plusTitle: string; plus: string[]; note: string }
  credits: { eyebrow: string; title: string; body: string; privacyTitle: string; privacy: string; footage: string }
  faq: { title: string; more: string }
}

const en: HomeCopy = {
  hero: {
    title: "Play it again.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Genesis and the arcade — on the iPhone and iPad you already carry. Skins that feel like the real thing. Screens that look the way you remember.",
    trust: ["iPhone & iPad", "14 systems + arcade", "Free download"],
    channels: "Change channel", pause: "Pause channel surfing", play: "Resume channel surfing", live: "Now playing",
  },
  systems: {
    eyebrow: "Every system you grew up with", title: "Fourteen systems. One pocket.",
    body: "Eight open-source emulator cores, tuned for iPhone and iPad. Pick a channel, bring your own games, and pick up exactly where you left off.",
    all: "All systems & cores",
  },
  skins: {
    eyebrow: "Skins", title: "Wear it.",
    body: "The controller on your screen is a surface you can redesign. Pick a shell, a material and a layout, in portrait or landscape, and the buttons you know by heart feel new again.",
    free: "Delta skins import free", plus: "Premium skins with Retropa Plus", pick: "Try a skin", link: "How skins work",
  },
  console: {
    eyebrow: "Console Mode", title: "Your TV is the screen. Your iPhone is the controller.",
    body: "Send the game to a TV or external display and keep playing on the phone in your hands — or pair a controller and sit back.",
    steps: [["Connect", "Hook up a TV or display to your iPhone."], ["Play big", "The game takes over the big screen, filter and all."], ["Hold the controls", "Your iPhone becomes the controller."]],
    illustrative: "Illustration",
  },
  feel: {
    eyebrow: "Feel", title: "It plays like it should.",
    cards: [
      { id: "controllers", title: "Bring a controller", body: "Pair a game controller that works with iPhone and remap every button the way you like." },
      { id: "haptics", title: "Buttons you can feel", body: "Custom haptics give every press a click, a thump or nothing at all.", plus: true },
      { id: "time", title: "Rewind the mistake", body: "Save anywhere, browse a timeline of save states, and rewind on supported systems." },
      { id: "speed", title: "Skip the grind", body: "Fast-forward through the slow parts, or hold to boost for a moment." },
    ],
  },
  collection: {
    eyebrow: "Your collection", title: "Everything you play, beautifully kept.",
    cards: [
      { id: "library", title: "A library with covers", body: "Your games, sorted into collections with cover art instead of file names." },
      { id: "honor", title: "Medals worth earning", body: "Honor turns milestones into 3D medals you can turn in your hand." },
      { id: "highlights", title: "Save the moment", body: "Clip the last few seconds of play and share it from Photos." },
      { id: "cloud", title: "Saves in iCloud", body: "Back up and restore your save states with iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Channel 08 · Arcade", title: "Insert coin.",
    body: "CPS I, II and III, Neo Geo, PGM, Irem M92 and Midway boards, with cabinet-sized skins built for them. Arcade play is part of Retropa Plus — try it in the app before you decide.",
    link: "Arcade on iPhone and iPad",
  },
  start: {
    eyebrow: "Start in three steps", title: "Three steps to your first game.",
    steps: [["Download", "Get Retropa free from the App Store."], ["Add a game", "Import your own files from Files or over Wi-Fi, or pick a free homebrew game from the built-in catalog."], ["Press start", "Choose a skin and a screen, then play."]],
    homebrew: "No games of your own yet? The built-in Homebrew catalog has free, independently made games to start with.",
  },
  plus: {
    eyebrow: "Free & Plus", title: "Free to play. Plus for the feel.",
    freeTitle: "Free", free: ["All fourteen handheld and console systems", "Import from Files, the Wi‑Fi Portal, the browser or the Homebrew catalog", "BIOS management that names what is missing", "Game controllers with ready-made templates", "Delta skin import", "Save states and rewind"],
    plusTitle: "Retropa Plus", plus: ["Adaptive touch with five touch styles", "Custom haptics and Curve Studio", "Turbo and multiple controller setups", "Arcade boards", "Console Mode on your TV", "Premium skins and advanced CRT filters", "Seventeen audio effects", "More save slots and longer highlight clips"],
    note: "Plans and local prices are shown in the app.",
  },
  credits: {
    eyebrow: "Built on open source", title: "Standing on the shoulders of emulators.",
    body: "Retropa runs mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico and TetaNES — the work of open-source communities we're grateful for.",
    privacyTitle: "Your games stay yours.", privacy: "Your files stay on your device, and you don't need an account to play.",
    footage: "Gameplay footage",
  },
  faq: { title: "Questions, answered.", more: "All questions" },
}

const zhHans: HomeCopy = {
  hero: {
    title: "再玩一次。",
    lead: "Game Boy Advance、Nintendo DS、SNES、Genesis，还有街机——就在你每天带着的 iPhone 和 iPad 上。皮肤握起来像真机，画面看起来像记忆里的样子。",
    trust: ["iPhone 与 iPad", "14 个系统 + 街机", "免费下载"],
    channels: "换台", pause: "暂停自动换台", play: "继续自动换台", live: "正在播放",
  },
  systems: {
    eyebrow: "陪你长大的每一台主机", title: "十四个系统，一个口袋。",
    body: "八个开源模拟器核心，为 iPhone 和 iPad 调校。选一个频道，导入你自己的游戏，从上次停下的地方接着玩。",
    all: "所有系统与核心",
  },
  skins: {
    eyebrow: "皮肤", title: "换上它。",
    body: "屏幕上的手柄，是一块可以重新设计的面板。换外壳、换材质、换布局，竖屏横屏都行——闭着眼都能按到的键，又有了新手感。",
    free: "Delta 皮肤免费导入", plus: "高级皮肤随 Retropa Plus 提供", pick: "试一款皮肤", link: "了解皮肤",
  },
  console: {
    eyebrow: "Console Mode 主机模式", title: "电视是屏幕，iPhone 是手柄。",
    body: "把游戏投到电视或外接显示器上，手里的 iPhone 继续当手柄——也可以连上游戏手柄，往沙发上一靠。",
    steps: [["连接", "把电视或显示器接到 iPhone。"], ["大屏开玩", "游戏占满大屏幕，滤镜效果一起带过去。"], ["握住手柄", "iPhone 变成你的手柄。"]],
    illustrative: "示意图",
  },
  feel: {
    eyebrow: "手感", title: "玩起来，就该是这个感觉。",
    cards: [
      { id: "controllers", title: "接上手柄", body: "连接支持 iPhone 的游戏手柄，每个按键都能按你的习惯重新映射。" },
      { id: "haptics", title: "按得到的反馈", body: "自定义触感，让每一次按键是清脆一响、沉稳一震，或者干脆安静。", plus: true },
      { id: "time", title: "失误，倒回去", body: "随时存档，在存档时间轴里挑一个回去；支持的系统还能直接倒带。" },
      { id: "speed", title: "跳过枯燥", body: "慢的地方快进过去，或者按住临时加速。" },
    ],
  },
  collection: {
    eyebrow: "你的收藏", title: "玩过的每一款，都好好收着。",
    cards: [
      { id: "library", title: "有封面的游戏库", body: "游戏按合集整理，看到的是封面，不是文件名。" },
      { id: "honor", title: "值得拿的勋章", body: "Honor 把里程碑变成可以转着看的 3D 勋章。" },
      { id: "highlights", title: "留住高光", body: "把刚才几秒的精彩剪下来，从相册分享出去。" },
      { id: "cloud", title: "存档放进 iCloud", body: "用 iCloud 云盘备份和恢复你的即时存档。" },
    ],
  },
  arcade: {
    eyebrow: "第 08 频道 · 街机", title: "投币，开始。",
    body: "CPS I、II、III，Neo Geo，PGM，Irem M92 和 Midway 基板，配上为它们量身做的街机皮肤。街机属于 Retropa Plus——可以先在 App 里试玩再决定。",
    link: "iPhone 与 iPad 上的街机",
  },
  start: {
    eyebrow: "三步开始", title: "三步，玩上第一局。",
    steps: [["下载", "在 App Store 免费获取 Retropa。"], ["添加游戏", "从“文件”或通过 Wi-Fi 导入你自己的游戏，或在内置目录里挑一款免费的自制游戏。"], ["按下开始", "选好皮肤和画面，开玩。"]],
    homebrew: "手头还没有游戏？内置的 Homebrew 目录里有独立开发者制作的免费游戏，可以先玩起来。",
  },
  plus: {
    eyebrow: "免费与 Plus", title: "免费就能玩，Plus 买的是手感。",
    freeTitle: "免费", free: ["全部十四个掌机与主机系统", "从「文件」、Wi‑Fi Portal、浏览器或 Homebrew 目录导入", "BIOS 管理，缺什么直接告诉你", "游戏手柄与现成的键位模板", "导入 Delta 皮肤", "即时存档与倒带"],
    plusTitle: "Retropa Plus", plus: ["自适应触控与五种手感风格", "自定义触感与 Curve Studio", "连发与多手柄配置", "街机基板", "在电视上用 Console Mode", "高级皮肤与高级 CRT 滤镜", "十七种音频效果", "更多存档位与更长的高光片段"],
    note: "具体方案与当地价格以 App 内显示为准。",
  },
  credits: {
    eyebrow: "基于开源", title: "站在模拟器前辈的肩膀上。",
    body: "Retropa 运行 mGBA、SkyEmu、SameBoy、ares、jgenesis、LakeSnes、Rustico 和 TetaNES——感谢这些开源社区的工作。",
    privacyTitle: "你的游戏，只属于你。", privacy: "文件留在你的设备上，玩游戏不需要注册账号。",
    footage: "游戏画面来源",
  },
  faq: { title: "你可能想问。", more: "全部问题" },
}

const zhHant: HomeCopy = {
  hero: {
    title: "再玩一次。",
    lead: "Game Boy Advance、Nintendo DS、SNES、Genesis，還有街機——就在你每天帶著的 iPhone 和 iPad 上。外觀握起來像真機，畫面看起來像記憶中的樣子。",
    trust: ["iPhone 與 iPad", "14 個系統 + 街機", "免費下載"],
    channels: "轉台", pause: "暫停自動轉台", play: "繼續自動轉台", live: "正在播放",
  },
  systems: {
    eyebrow: "陪你長大的每一台主機", title: "十四個系統，一個口袋。",
    body: "八個開源模擬器核心，為 iPhone 和 iPad 調校。選一個頻道，匯入你自己的遊戲，從上次停下的地方接著玩。",
    all: "所有系統與核心",
  },
  skins: {
    eyebrow: "外觀", title: "換上它。",
    body: "螢幕上的手把，是一塊可以重新設計的面板。換外殼、換材質、換配置，直向橫向都行——熟悉的按鍵，又有了新手感。",
    free: "Delta 外觀免費匯入", plus: "進階外觀隨 Retropa Plus 提供", pick: "試一款外觀", link: "了解外觀",
  },
  console: {
    eyebrow: "Console Mode 主機模式", title: "電視是螢幕，iPhone 是手把。",
    body: "把遊戲投到電視或外接顯示器上，手中的 iPhone 繼續當手把——也可以連接遊戲控制器，往沙發一靠。",
    steps: [["連接", "把電視或顯示器接上 iPhone。"], ["大螢幕開玩", "遊戲佔滿大螢幕，濾鏡效果一起帶過去。"], ["握住手把", "iPhone 變成你的手把。"]],
    illustrative: "示意圖",
  },
  feel: {
    eyebrow: "手感", title: "玩起來，就該是這個感覺。",
    cards: [
      { id: "controllers", title: "接上控制器", body: "連接支援 iPhone 的遊戲控制器，每個按鍵都能依你的習慣重新對應。" },
      { id: "haptics", title: "按得到的回饋", body: "自訂觸覺回饋，讓每一次按鍵清脆一響、沉穩一震，或乾脆安靜。", plus: true },
      { id: "time", title: "失誤，倒回去", body: "隨時存檔，在存檔時間軸挑一個回去；支援的系統還能直接倒帶。" },
      { id: "speed", title: "跳過枯燥", body: "慢的地方快轉過去，或按住暫時加速。" },
    ],
  },
  collection: {
    eyebrow: "你的收藏", title: "玩過的每一款，都好好收著。",
    cards: [
      { id: "library", title: "有封面的遊戲庫", body: "遊戲依合集整理，看到的是封面，不是檔名。" },
      { id: "honor", title: "值得拿的勳章", body: "Honor 把里程碑變成可以轉著看的 3D 勳章。" },
      { id: "highlights", title: "留住精彩", body: "把剛才幾秒的精彩剪下來，從照片分享出去。" },
      { id: "cloud", title: "存檔放進 iCloud", body: "用 iCloud 雲碟備份與還原你的即時存檔。" },
    ],
  },
  arcade: {
    eyebrow: "第 08 頻道 · 街機", title: "投幣，開始。",
    body: "CPS I、II、III，Neo Geo，PGM，Irem M92 與 Midway 基板，搭配為它們量身打造的街機外觀。街機屬於 Retropa Plus——可以先在 App 內試玩再決定。",
    link: "iPhone 與 iPad 上的街機",
  },
  start: {
    eyebrow: "三步開始", title: "三步，玩上第一局。",
    steps: [["下載", "在 App Store 免費取得 Retropa。"], ["加入遊戲", "從「檔案」或透過 Wi-Fi 匯入你自己的遊戲，或在內建目錄挑一款免費的自製遊戲。"], ["按下開始", "選好外觀和畫面，開玩。"]],
    homebrew: "手邊還沒有遊戲？內建的 Homebrew 目錄有獨立開發者製作的免費遊戲，可以先玩起來。",
  },
  plus: {
    eyebrow: "免費與 Plus", title: "免費就能玩，Plus 玩得更遠。",
    freeTitle: "免費", free: ["全部十四個掌機與主機系統", "匯入你自己的遊戲", "匯入 Delta 外觀", "即時存檔與倒帶", "遊戲控制器"],
    plusTitle: "Retropa Plus", plus: ["街機基板", "進階外觀與進階 CRT 濾鏡", "在電視上使用 Console Mode", "自訂觸覺回饋與連發", "更多存檔位與更長的精彩片段"],
    note: "方案與當地價格以 App 內顯示為準。",
  },
  credits: {
    eyebrow: "基於開源", title: "站在模擬器前輩的肩膀上。",
    body: "Retropa 執行 mGBA、SkyEmu、SameBoy、ares、jgenesis、LakeSnes、Rustico 與 TetaNES——感謝這些開源社群的付出。",
    privacyTitle: "你的遊戲，只屬於你。", privacy: "檔案留在你的裝置上，玩遊戲不需要註冊帳號。",
    footage: "遊戲畫面來源",
  },
  faq: { title: "你可能想問。", more: "全部問題" },
}

const ja: HomeCopy = {
  hero: {
    title: "もう一度、遊ぼう。",
    lead: "ゲームボーイアドバンス、ニンテンドーDS、スーパーファミコン、メガドライブ、そしてアーケード。いつも持ち歩く iPhone と iPad で。本物のように手になじむスキンと、記憶のままの画面で。",
    trust: ["iPhone・iPad 対応", "14 システム + アーケード", "無料ダウンロード"],
    channels: "チャンネルを変える", pause: "チャンネル切り替えを一時停止", play: "チャンネル切り替えを再開", live: "放送中",
  },
  systems: {
    eyebrow: "一緒に育ったすべてのゲーム機", title: "14 のシステムを、ポケットに。",
    body: "iPhone と iPad 向けに調整した 8 つのオープンソースエミュレータコア。チャンネルを選び、自分のゲームを読み込んで、続きから遊べます。",
    all: "すべてのシステムとコア",
  },
  skins: {
    eyebrow: "スキン", title: "着せ替えよう。",
    body: "画面上のコントローラーは、デザインし直せるパネルです。外装、素材、レイアウトを縦でも横でも選べば、指が覚えているボタンがまた新鮮に。",
    free: "Delta スキンは無料で読み込み", plus: "プレミアムスキンは Retropa Plus で", pick: "スキンを試す", link: "スキンについて",
  },
  console: {
    eyebrow: "Console Mode", title: "テレビが画面に。iPhone がコントローラーに。",
    body: "ゲームをテレビや外部ディスプレイに映し、手元の iPhone でそのまま操作。コントローラーをつないで、ソファでくつろいでも。",
    steps: [["つなぐ", "テレビやディスプレイを iPhone に接続。"], ["大画面で遊ぶ", "フィルターもそのまま、大画面いっぱいに。"], ["手元で操作", "iPhone がコントローラーになります。"]],
    illustrative: "イメージ",
  },
  feel: {
    eyebrow: "操作感", title: "遊び心地に、妥協なし。",
    cards: [
      { id: "controllers", title: "コントローラーをつなぐ", body: "iPhone 対応のゲームコントローラーを接続し、すべてのボタンを好みに割り当て。" },
      { id: "haptics", title: "指で感じるボタン", body: "カスタム触覚フィードバックで、押すたびにカチッと、ズシッと、または静かに。", plus: true },
      { id: "time", title: "ミスは巻き戻す", body: "どこでもセーブして、ステートセーブのタイムラインから戻れます。対応システムでは巻き戻しも。" },
      { id: "speed", title: "退屈は早送り", body: "ゆっくりな場面は早送り。長押しで一時的に加速。" },
    ],
  },
  collection: {
    eyebrow: "コレクション", title: "遊んだすべてを、美しく。",
    cards: [
      { id: "library", title: "カバー付きライブラリ", body: "ファイル名ではなくカバーアートで、コレクションごとに整理。" },
      { id: "honor", title: "手にしたくなるメダル", body: "Honor が節目を、手の中で回せる 3D メダルに変えます。" },
      { id: "highlights", title: "名場面を残す", body: "直前の数秒をクリップして、写真アプリから共有。" },
      { id: "cloud", title: "セーブを iCloud に", body: "iCloud Drive でステートセーブをバックアップ・復元。" },
    ],
  },
  arcade: {
    eyebrow: "チャンネル 08 · アーケード", title: "コインを入れて。",
    body: "CPS I・II・III、ネオジオ、PGM、アイレム M92、Midway の基板に、専用の筐体サイズのスキン。アーケードは Retropa Plus の機能です。アプリで試してから決められます。",
    link: "iPhone と iPad でアーケード",
  },
  start: {
    eyebrow: "3 ステップで始める", title: "最初の 1 本まで、3 ステップ。",
    steps: [["ダウンロード", "App Store から Retropa を無料で入手。"], ["ゲームを追加", "ファイルや Wi-Fi 経由で自分のゲームを読み込むか、内蔵カタログから無料の自作ゲームを選択。"], ["スタートを押す", "スキンと画面を選んで、プレイ。"]],
    homebrew: "まだ手元にゲームがない？内蔵の Homebrew カタログには、インディー開発者による無料ゲームがあります。",
  },
  plus: {
    eyebrow: "無料と Plus", title: "無料で遊べる。Plus は手ざわりのために。",
    freeTitle: "無料", free: ["14 の携帯機・家庭用システムすべて", "ファイル、Wi‑Fi Portal、ブラウザ、Homebrew カタログから取り込み", "足りないものを教えてくれる BIOS 管理", "テンプレートが用意されたゲームコントローラー", "Delta スキンの読み込み", "ステートセーブと巻き戻し"],
    plusTitle: "Retropa Plus", plus: ["アダプティブタッチと5つのタッチスタイル", "カスタムハプティクスと Curve Studio", "連射と複数コントローラーの設定", "アーケード基板", "テレビで Console Mode", "プレミアムスキンと高度な CRT フィルター", "17種類のオーディオエフェクト", "セーブ枠の追加と長いハイライトクリップ"],
    note: "プランと現地価格はアプリ内で表示されます。",
  },
  credits: {
    eyebrow: "オープンソースとともに", title: "先駆者たちへの敬意とともに。",
    body: "Retropa は mGBA、SkyEmu、SameBoy、ares、jgenesis、LakeSnes、Rustico、TetaNES で動いています。オープンソースコミュニティに感謝を。",
    privacyTitle: "あなたのゲームは、あなたのもの。", privacy: "ファイルはデバイスに保存され、遊ぶのにアカウントは不要です。",
    footage: "ゲーム映像の出典",
  },
  faq: { title: "よくある質問。", more: "すべての質問" },
}

const ko: HomeCopy = {
  hero: {
    title: "다시 한 판.",
    lead: "게임보이 어드밴스, 닌텐도 DS, 슈퍼 패미컴, 메가 드라이브, 그리고 아케이드까지. 늘 들고 다니는 iPhone과 iPad에서. 진짜 같은 손맛의 스킨, 기억 속 그대로의 화면으로.",
    trust: ["iPhone 및 iPad", "14개 시스템 + 아케이드", "무료 다운로드"],
    channels: "채널 변경", pause: "채널 자동 전환 일시정지", play: "채널 자동 전환 재개", live: "방송 중",
  },
  systems: {
    eyebrow: "함께 자란 모든 게임기", title: "14개 시스템, 주머니 하나.",
    body: "iPhone과 iPad에 맞춰 조율한 8개의 오픈 소스 에뮬레이터 코어. 채널을 고르고, 내 게임을 가져와, 멈춘 곳에서 이어서 즐기세요.",
    all: "모든 시스템 및 코어",
  },
  skins: {
    eyebrow: "스킨", title: "입혀 보세요.",
    body: "화면 속 컨트롤러는 다시 디자인할 수 있는 패널입니다. 외관, 소재, 레이아웃을 세로든 가로든 골라 보세요. 손이 기억하는 버튼이 새롭게 느껴집니다.",
    free: "Delta 스킨 무료 가져오기", plus: "프리미엄 스킨은 Retropa Plus로", pick: "스킨 체험", link: "스킨 알아보기",
  },
  console: {
    eyebrow: "Console Mode", title: "TV는 화면, iPhone은 컨트롤러.",
    body: "게임을 TV나 외부 디스플레이로 보내고 손에 든 iPhone으로 계속 플레이하세요. 컨트롤러를 연결하고 소파에 기대도 좋습니다.",
    steps: [["연결", "TV나 디스플레이를 iPhone에 연결합니다."], ["큰 화면으로", "필터까지 그대로, 큰 화면 가득."], ["손에 쥐고", "iPhone이 컨트롤러가 됩니다."]],
    illustrative: "예시 이미지",
  },
  feel: {
    eyebrow: "손맛", title: "제대로 된 플레이감.",
    cards: [
      { id: "controllers", title: "컨트롤러 연결", body: "iPhone용 게임 컨트롤러를 연결하고 모든 버튼을 원하는 대로 매핑하세요." },
      { id: "haptics", title: "느껴지는 버튼", body: "맞춤 햅틱으로 누를 때마다 딸깍, 묵직하게, 혹은 조용하게.", plus: true },
      { id: "time", title: "실수는 되감기", body: "어디서든 저장하고 세이브 스테이트 타임라인에서 돌아가세요. 지원 시스템에서는 되감기도 가능합니다." },
      { id: "speed", title: "지루함은 건너뛰기", body: "느린 구간은 빨리 감고, 길게 눌러 잠시 가속하세요." },
    ],
  },
  collection: {
    eyebrow: "나의 컬렉션", title: "플레이한 모든 게임을, 멋지게.",
    cards: [
      { id: "library", title: "커버가 있는 라이브러리", body: "파일 이름 대신 커버 아트로, 컬렉션별로 정리합니다." },
      { id: "honor", title: "갖고 싶은 메달", body: "Honor는 이정표를 손으로 돌려 볼 수 있는 3D 메달로 바꿉니다." },
      { id: "highlights", title: "순간을 저장", body: "방금 몇 초를 클립으로 저장하고 사진 앱에서 공유하세요." },
      { id: "cloud", title: "iCloud에 저장", body: "iCloud Drive로 세이브 스테이트를 백업하고 복원합니다." },
    ],
  },
  arcade: {
    eyebrow: "채널 08 · 아케이드", title: "코인을 넣으세요.",
    body: "CPS I·II·III, 네오지오, PGM, 아이렘 M92, Midway 기판과 전용 캐비닛 스킨. 아케이드는 Retropa Plus 기능이며, 앱에서 먼저 체험해 볼 수 있습니다.",
    link: "iPhone과 iPad의 아케이드",
  },
  start: {
    eyebrow: "3단계로 시작", title: "첫 게임까지 3단계.",
    steps: [["다운로드", "App Store에서 Retropa를 무료로 받으세요."], ["게임 추가", "파일 앱이나 Wi-Fi로 내 게임을 가져오거나, 내장 카탈로그에서 무료 홈브루 게임을 고르세요."], ["시작 버튼", "스킨과 화면을 고르고 플레이."]],
    homebrew: "아직 게임이 없나요? 내장 Homebrew 카탈로그에 인디 개발자들이 만든 무료 게임이 있습니다.",
  },
  plus: {
    eyebrow: "무료와 Plus", title: "무료로 즐기고, Plus로 더 멀리.",
    freeTitle: "무료", free: ["14개 휴대용·거치형 시스템 전체", "내 게임 가져오기", "Delta 스킨 가져오기", "세이브 스테이트와 되감기", "게임 컨트롤러"],
    plusTitle: "Retropa Plus", plus: ["아케이드 기판", "프리미엄 스킨과 고급 CRT 필터", "TV에서 Console Mode", "맞춤 햅틱과 연사", "더 많은 저장 슬롯과 긴 하이라이트 클립"],
    note: "플랜과 현지 가격은 앱에서 확인할 수 있습니다.",
  },
  credits: {
    eyebrow: "오픈 소스 기반", title: "에뮬레이터 선배들의 어깨 위에서.",
    body: "Retropa는 mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico, TetaNES로 구동됩니다. 오픈 소스 커뮤니티에 감사드립니다.",
    privacyTitle: "내 게임은 나의 것.", privacy: "파일은 기기에 머물고, 플레이하는 데 계정이 필요 없습니다.",
    footage: "게임 영상 출처",
  },
  faq: { title: "자주 묻는 질문.", more: "모든 질문" },
}

const de: HomeCopy = {
  hero: {
    title: "Noch eine Runde.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Mega Drive und die Spielhalle – auf dem iPhone und iPad, das du ohnehin dabeihast. Skins, die sich echt anfühlen. Bilder, wie du sie in Erinnerung hast.",
    trust: ["iPhone & iPad", "14 Systeme + Arcade", "Kostenloser Download"],
    channels: "Kanal wechseln", pause: "Kanalwechsel pausieren", play: "Kanalwechsel fortsetzen", live: "Läuft gerade",
  },
  systems: {
    eyebrow: "Jede Konsole deiner Kindheit", title: "Vierzehn Systeme. Eine Hosentasche.",
    body: "Acht Open-Source-Emulatorkerne, abgestimmt auf iPhone und iPad. Kanal wählen, eigene Spiele mitbringen und genau dort weitermachen, wo du aufgehört hast.",
    all: "Alle Systeme & Kerne",
  },
  skins: {
    eyebrow: "Skins", title: "Zieh es an.",
    body: "Der Controller auf deinem Bildschirm ist eine Fläche, die du neu gestalten kannst. Gehäuse, Material und Layout wählen, hochkant oder quer – und vertraute Tasten fühlen sich wieder neu an.",
    free: "Delta-Skins kostenlos importieren", plus: "Premium-Skins mit Retropa Plus", pick: "Skin ausprobieren", link: "So funktionieren Skins",
  },
  console: {
    eyebrow: "Console Mode", title: "Dein Fernseher ist der Bildschirm. Dein iPhone der Controller.",
    body: "Schick das Spiel auf einen Fernseher oder externen Bildschirm und spiel mit dem iPhone in der Hand weiter – oder verbinde einen Controller und lehn dich zurück.",
    steps: [["Verbinden", "Schließ einen Fernseher oder Monitor an dein iPhone an."], ["Groß spielen", "Das Spiel füllt den großen Bildschirm, samt Filter."], ["Steuern", "Dein iPhone wird zum Controller."]],
    illustrative: "Illustration",
  },
  feel: {
    eyebrow: "Spielgefühl", title: "Es spielt sich, wie es soll.",
    cards: [
      { id: "controllers", title: "Controller verbinden", body: "Verbinde einen iPhone-kompatiblen Controller und belege jede Taste nach deinem Geschmack." },
      { id: "haptics", title: "Tasten, die man spürt", body: "Eigene Haptik gibt jedem Druck ein Klicken, ein Wummern oder gar nichts.", plus: true },
      { id: "time", title: "Fehler zurückspulen", body: "Überall speichern, durch eine Zeitleiste von Spielständen blättern und auf unterstützten Systemen zurückspulen." },
      { id: "speed", title: "Langeweile überspringen", body: "Langsame Passagen vorspulen oder gedrückt halten für einen kurzen Boost." },
    ],
  },
  collection: {
    eyebrow: "Deine Sammlung", title: "Alles, was du spielst, schön aufgehoben.",
    cards: [
      { id: "library", title: "Bibliothek mit Covern", body: "Deine Spiele in Sammlungen, mit Coverbildern statt Dateinamen." },
      { id: "honor", title: "Medaillen, die sich lohnen", body: "Honor macht Meilensteine zu 3D-Medaillen, die du in der Hand drehen kannst." },
      { id: "highlights", title: "Den Moment festhalten", body: "Die letzten Sekunden als Clip sichern und aus Fotos teilen." },
      { id: "cloud", title: "Spielstände in iCloud", body: "Sichere und stelle Spielstände mit iCloud Drive wieder her." },
    ],
  },
  arcade: {
    eyebrow: "Kanal 08 · Arcade", title: "Münze einwerfen.",
    body: "CPS I, II und III, Neo Geo, PGM, Irem M92 und Midway-Boards, mit Automaten-Skins, die dafür gebaut sind. Arcade gehört zu Retropa Plus – probier es in der App aus, bevor du dich entscheidest.",
    link: "Arcade auf iPhone und iPad",
  },
  start: {
    eyebrow: "In drei Schritten", title: "Drei Schritte zum ersten Spiel.",
    steps: [["Laden", "Hol dir Retropa kostenlos im App Store."], ["Spiel hinzufügen", "Importiere eigene Dateien über Dateien oder WLAN, oder wähle ein kostenloses Homebrew-Spiel aus dem integrierten Katalog."], ["Start drücken", "Skin und Bild wählen, dann losspielen."]],
    homebrew: "Noch keine eigenen Spiele? Der integrierte Homebrew-Katalog bietet kostenlose Spiele unabhängiger Entwickler zum Einstieg.",
  },
  plus: {
    eyebrow: "Gratis & Plus", title: "Gratis spielen. Mit Plus weiter gehen.",
    freeTitle: "Gratis", free: ["Alle vierzehn Handheld- und Konsolensysteme", "Eigene Spiele importieren", "Delta-Skins importieren", "Spielstände und Zurückspulen", "Game-Controller"],
    plusTitle: "Retropa Plus", plus: ["Arcade-Boards", "Premium-Skins und erweiterte CRT-Filter", "Console Mode auf dem Fernseher", "Eigene Haptik und Turbo", "Mehr Speicherplätze und längere Highlight-Clips"],
    note: "Angebote und lokale Preise siehst du in der App.",
  },
  credits: {
    eyebrow: "Auf Open Source gebaut", title: "Auf den Schultern der Emulatoren.",
    body: "Retropa läuft mit mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico und TetaNES – der Arbeit von Open-Source-Communities, denen wir dankbar sind.",
    privacyTitle: "Deine Spiele bleiben deine.", privacy: "Deine Dateien bleiben auf deinem Gerät, und zum Spielen brauchst du kein Konto.",
    footage: "Spielszenen",
  },
  faq: { title: "Fragen und Antworten.", more: "Alle Fragen" },
}

const es: HomeCopy = {
  hero: {
    title: "Otra partida.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Genesis y los arcades, en el iPhone y el iPad que ya llevas contigo. Diseños que se sienten reales. Imágenes como las recuerdas.",
    trust: ["iPhone y iPad", "14 sistemas + arcade", "Descarga gratuita"],
    channels: "Cambiar de canal", pause: "Pausar el cambio de canal", play: "Reanudar el cambio de canal", live: "En emisión",
  },
  systems: {
    eyebrow: "Cada consola con la que creciste", title: "Catorce sistemas. Un bolsillo.",
    body: "Ocho núcleos de emulación de código abierto, ajustados para iPhone y iPad. Elige un canal, trae tus propios juegos y sigue justo donde lo dejaste.",
    all: "Todos los sistemas y núcleos",
  },
  skins: {
    eyebrow: "Diseños", title: "Vístelo.",
    body: "El control en tu pantalla es una superficie que puedes rediseñar. Elige carcasa, material y distribución, en vertical u horizontal, y los botones de siempre se sentirán nuevos.",
    free: "Importa diseños de Delta gratis", plus: "Diseños premium con Retropa Plus", pick: "Prueba un diseño", link: "Cómo funcionan los diseños",
  },
  console: {
    eyebrow: "Console Mode", title: "Tu tele es la pantalla. Tu iPhone es el control.",
    body: "Envía el juego a una tele o pantalla externa y sigue jugando con el iPhone en la mano, o conecta un control y relájate.",
    steps: [["Conecta", "Conecta una tele o pantalla a tu iPhone."], ["Juega en grande", "El juego ocupa la pantalla grande, con su filtro."], ["Toma el control", "Tu iPhone se convierte en el control."]],
    illustrative: "Ilustración",
  },
  feel: {
    eyebrow: "Sensación", title: "Se juega como debe.",
    cards: [
      { id: "controllers", title: "Conecta un control", body: "Vincula un control compatible con iPhone y reasigna cada botón a tu gusto." },
      { id: "haptics", title: "Botones que se sienten", body: "La respuesta háptica personalizada da a cada pulsación un clic, un golpe o silencio.", plus: true },
      { id: "time", title: "Rebobina el error", body: "Guarda en cualquier lugar, recorre una línea de tiempo de estados guardados y rebobina en los sistemas compatibles." },
      { id: "speed", title: "Salta lo aburrido", body: "Avanza rápido por las partes lentas o mantén pulsado para acelerar un momento." },
    ],
  },
  collection: {
    eyebrow: "Tu colección", title: "Todo lo que juegas, bien guardado.",
    cards: [
      { id: "library", title: "Biblioteca con portadas", body: "Tus juegos en colecciones, con portadas en lugar de nombres de archivo." },
      { id: "honor", title: "Medallas que valen la pena", body: "Honor convierte tus logros en medallas 3D que puedes girar en la mano." },
      { id: "highlights", title: "Guarda el momento", body: "Recorta los últimos segundos de juego y compártelos desde Fotos." },
      { id: "cloud", title: "Partidas en iCloud", body: "Respalda y restaura tus estados guardados con iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Canal 08 · Arcade", title: "Inserta moneda.",
    body: "Placas CPS I, II y III, Neo Geo, PGM, Irem M92 y Midway, con diseños de gabinete creados para ellas. Los arcades forman parte de Retropa Plus; pruébalos en la app antes de decidir.",
    link: "Arcade en iPhone y iPad",
  },
  start: {
    eyebrow: "Empieza en tres pasos", title: "Tres pasos hasta tu primera partida.",
    steps: [["Descarga", "Consigue Retropa gratis en el App Store."], ["Añade un juego", "Importa tus propios archivos desde Archivos o por Wi-Fi, o elige un juego homebrew gratuito del catálogo integrado."], ["Pulsa start", "Elige un diseño y una pantalla, y a jugar."]],
    homebrew: "¿Aún no tienes juegos? El catálogo Homebrew integrado tiene juegos gratuitos de creadores independientes para empezar.",
  },
  plus: {
    eyebrow: "Gratis y Plus", title: "Gratis para jugar. Plus para ir más lejos.",
    freeTitle: "Gratis", free: ["Los catorce sistemas portátiles y de sobremesa", "Importa tus propios juegos", "Importación de diseños de Delta", "Estados guardados y rebobinado", "Controles de juego"],
    plusTitle: "Retropa Plus", plus: ["Placas arcade", "Diseños premium y filtros CRT avanzados", "Console Mode en tu tele", "Háptica personalizada y turbo", "Más ranuras de guardado y clips más largos"],
    note: "Los planes y precios locales se muestran en la app.",
  },
  credits: {
    eyebrow: "Hecho con código abierto", title: "A hombros de los emuladores.",
    body: "Retropa funciona con mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico y TetaNES, el trabajo de comunidades de código abierto a las que agradecemos.",
    privacyTitle: "Tus juegos siguen siendo tuyos.", privacy: "Tus archivos se quedan en tu dispositivo y no necesitas una cuenta para jugar.",
    footage: "Imágenes de juego",
  },
  faq: { title: "Preguntas frecuentes.", more: "Todas las preguntas" },
}

const fr: HomeCopy = {
  hero: {
    title: "Encore une partie.",
    lead: "Game Boy Advance, Nintendo DS, Super Nintendo, Mega Drive et les bornes d'arcade, sur l'iPhone et l'iPad que vous avez déjà. Des habillages qu'on croirait réels. Des images comme dans vos souvenirs.",
    trust: ["iPhone et iPad", "14 systèmes + arcade", "Téléchargement gratuit"],
    channels: "Changer de chaîne", pause: "Mettre en pause le zapping", play: "Reprendre le zapping", live: "À l'antenne",
  },
  systems: {
    eyebrow: "Toutes les consoles de votre enfance", title: "Quatorze systèmes. Une poche.",
    body: "Huit cœurs d'émulation open source, réglés pour iPhone et iPad. Choisissez une chaîne, apportez vos propres jeux et reprenez là où vous vous étiez arrêté.",
    all: "Tous les systèmes et cœurs",
  },
  skins: {
    eyebrow: "Habillages", title: "Habillez-la.",
    body: "La manette à l'écran est une surface que vous pouvez redessiner. Choisissez coque, matière et disposition, en portrait ou en paysage, et les boutons que vous connaissez par cœur retrouvent leur fraîcheur.",
    free: "Import gratuit des habillages Delta", plus: "Habillages premium avec Retropa Plus", pick: "Essayer un habillage", link: "Comprendre les habillages",
  },
  console: {
    eyebrow: "Console Mode", title: "Votre téléviseur devient l'écran. Votre iPhone, la manette.",
    body: "Envoyez le jeu sur un téléviseur ou un écran externe et continuez à jouer avec l'iPhone en main, ou connectez une manette et installez-vous.",
    steps: [["Connecter", "Reliez un téléviseur ou un écran à votre iPhone."], ["Jouer en grand", "Le jeu occupe le grand écran, filtre compris."], ["Prendre en main", "Votre iPhone devient la manette."]],
    illustrative: "Illustration",
  },
  feel: {
    eyebrow: "Sensations", title: "Ça se joue comme il faut.",
    cards: [
      { id: "controllers", title: "Branchez une manette", body: "Associez une manette compatible iPhone et réattribuez chaque bouton à votre goût." },
      { id: "haptics", title: "Des boutons qu'on sent", body: "Les retours haptiques personnalisés donnent à chaque pression un clic, un choc sourd ou rien du tout.", plus: true },
      { id: "time", title: "Rembobinez l'erreur", body: "Sauvegardez n'importe où, parcourez une frise de sauvegardes d'état et rembobinez sur les systèmes compatibles." },
      { id: "speed", title: "Passez les longueurs", body: "Avancez rapidement dans les passages lents, ou maintenez pour accélérer un instant." },
    ],
  },
  collection: {
    eyebrow: "Votre collection", title: "Tout ce que vous jouez, bien rangé.",
    cards: [
      { id: "library", title: "Une ludothèque illustrée", body: "Vos jeux en collections, avec des jaquettes plutôt que des noms de fichier." },
      { id: "honor", title: "Des médailles à gagner", body: "Honor transforme vos étapes en médailles 3D à faire tourner du bout des doigts." },
      { id: "highlights", title: "Gardez le moment", body: "Enregistrez les dernières secondes de jeu en clip et partagez-les depuis Photos." },
      { id: "cloud", title: "Sauvegardes dans iCloud", body: "Sauvegardez et restaurez vos états de jeu avec iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Chaîne 08 · Arcade", title: "Insérez une pièce.",
    body: "Cartes CPS I, II et III, Neo Geo, PGM, Irem M92 et Midway, avec des habillages de borne conçus pour elles. L'arcade fait partie de Retropa Plus : essayez-la dans l'app avant de vous décider.",
    link: "L'arcade sur iPhone et iPad",
  },
  start: {
    eyebrow: "Trois étapes", title: "Trois étapes jusqu'à votre première partie.",
    steps: [["Télécharger", "Obtenez Retropa gratuitement sur l'App Store."], ["Ajouter un jeu", "Importez vos propres fichiers depuis Fichiers ou en Wi-Fi, ou choisissez un jeu homebrew gratuit dans le catalogue intégré."], ["Appuyer sur Start", "Choisissez un habillage et un écran, puis jouez."]],
    homebrew: "Pas encore de jeux ? Le catalogue Homebrew intégré propose des jeux gratuits de créateurs indépendants pour commencer.",
  },
  plus: {
    eyebrow: "Gratuit et Plus", title: "Gratuit pour jouer. Plus pour aller plus loin.",
    freeTitle: "Gratuit", free: ["Les quatorze systèmes portables et de salon", "Vos propres jeux importés", "Import des habillages Delta", "Sauvegardes d'état et rembobinage", "Manettes de jeu"],
    plusTitle: "Retropa Plus", plus: ["Cartes arcade", "Habillages premium et filtres CRT avancés", "Console Mode sur votre téléviseur", "Haptique personnalisée et turbo", "Plus d'emplacements de sauvegarde et des clips plus longs"],
    note: "Les offres et prix locaux sont indiqués dans l'app.",
  },
  credits: {
    eyebrow: "Bâti sur l'open source", title: "Sur les épaules des émulateurs.",
    body: "Retropa s'appuie sur mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico et TetaNES, le travail de communautés open source que nous remercions.",
    privacyTitle: "Vos jeux restent les vôtres.", privacy: "Vos fichiers restent sur votre appareil et aucun compte n'est nécessaire pour jouer.",
    footage: "Séquences de jeu",
  },
  faq: { title: "Vos questions.", more: "Toutes les questions" },
}

const it: HomeCopy = {
  hero: {
    title: "Ancora una partita.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Mega Drive e i cabinati arcade, sull'iPhone e sull'iPad che hai già con te. Skin che sembrano vere. Immagini come te le ricordi.",
    trust: ["iPhone e iPad", "14 sistemi + arcade", "Download gratuito"],
    channels: "Cambia canale", pause: "Metti in pausa lo zapping", play: "Riprendi lo zapping", live: "In onda",
  },
  systems: {
    eyebrow: "Ogni console con cui sei cresciuto", title: "Quattordici sistemi. Una tasca.",
    body: "Otto core di emulazione open source, ottimizzati per iPhone e iPad. Scegli un canale, porta i tuoi giochi e riprendi esattamente da dove avevi lasciato.",
    all: "Tutti i sistemi e i core",
  },
  skins: {
    eyebrow: "Skin", title: "Indossala.",
    body: "Il controller sullo schermo è una superficie da ridisegnare. Scegli scocca, materiale e layout, in verticale o in orizzontale, e i tasti che conosci a memoria sembrano nuovi.",
    free: "Importa le skin di Delta gratis", plus: "Skin premium con Retropa Plus", pick: "Prova una skin", link: "Come funzionano le skin",
  },
  console: {
    eyebrow: "Console Mode", title: "La TV è lo schermo. L'iPhone è il controller.",
    body: "Invia il gioco a una TV o a un display esterno e continua a giocare con l'iPhone in mano, oppure collega un controller e mettiti comodo.",
    steps: [["Collega", "Collega una TV o un display al tuo iPhone."], ["Gioca in grande", "Il gioco riempie il grande schermo, filtro compreso."], ["Impugna", "L'iPhone diventa il controller."]],
    illustrative: "Illustrazione",
  },
  feel: {
    eyebrow: "Sensazioni", title: "Si gioca come si deve.",
    cards: [
      { id: "controllers", title: "Collega un controller", body: "Abbina un controller compatibile con iPhone e rimappa ogni tasto come preferisci." },
      { id: "haptics", title: "Tasti che si sentono", body: "Il feedback aptico personalizzato dà a ogni pressione un clic, un colpo sordo o il silenzio.", plus: true },
      { id: "time", title: "Riavvolgi l'errore", body: "Salva ovunque, scorri una timeline di stati salvati e riavvolgi sui sistemi supportati." },
      { id: "speed", title: "Salta le attese", body: "Manda avanti veloce le parti lente, o tieni premuto per una spinta." },
    ],
  },
  collection: {
    eyebrow: "La tua collezione", title: "Tutto ciò che giochi, custodito bene.",
    cards: [
      { id: "library", title: "Una libreria con copertine", body: "I tuoi giochi in raccolte, con copertine invece di nomi di file." },
      { id: "honor", title: "Medaglie da conquistare", body: "Honor trasforma i traguardi in medaglie 3D da far girare tra le dita." },
      { id: "highlights", title: "Salva il momento", body: "Ritaglia gli ultimi secondi di gioco e condividili da Foto." },
      { id: "cloud", title: "Salvataggi su iCloud", body: "Esegui backup e ripristino degli stati salvati con iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Canale 08 · Arcade", title: "Inserisci un gettone.",
    body: "Schede CPS I, II e III, Neo Geo, PGM, Irem M92 e Midway, con skin da cabinato create apposta. L'arcade fa parte di Retropa Plus: provalo nell'app prima di decidere.",
    link: "Arcade su iPhone e iPad",
  },
  start: {
    eyebrow: "Inizia in tre passi", title: "Tre passi alla prima partita.",
    steps: [["Scarica", "Ottieni Retropa gratis dall'App Store."], ["Aggiungi un gioco", "Importa i tuoi file da File o via Wi-Fi, oppure scegli un gioco homebrew gratuito dal catalogo integrato."], ["Premi Start", "Scegli una skin e uno schermo, poi gioca."]],
    homebrew: "Non hai ancora giochi? Il catalogo Homebrew integrato offre giochi gratuiti di sviluppatori indipendenti per iniziare.",
  },
  plus: {
    eyebrow: "Gratis e Plus", title: "Gratis per giocare. Plus per andare oltre.",
    freeTitle: "Gratis", free: ["Tutti e quattordici i sistemi portatili e da casa", "I tuoi giochi, importati", "Importazione skin di Delta", "Stati salvati e riavvolgimento", "Controller di gioco"],
    plusTitle: "Retropa Plus", plus: ["Schede arcade", "Skin premium e filtri CRT avanzati", "Console Mode sulla TV", "Aptica personalizzata e turbo", "Più slot di salvataggio e clip più lunghe"],
    note: "Piani e prezzi locali sono indicati nell'app.",
  },
  credits: {
    eyebrow: "Costruito sull'open source", title: "Sulle spalle degli emulatori.",
    body: "Retropa funziona grazie a mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico e TetaNES, il lavoro di comunità open source a cui siamo grati.",
    privacyTitle: "I tuoi giochi restano tuoi.", privacy: "I tuoi file restano sul dispositivo e non serve un account per giocare.",
    footage: "Filmati di gioco",
  },
  faq: { title: "Domande frequenti.", more: "Tutte le domande" },
}

const ptBR: HomeCopy = {
  hero: {
    title: "Mais uma partida.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Mega Drive e os fliperamas, no iPhone e no iPad que você já carrega. Temas que parecem de verdade. Imagens do jeito que você lembra.",
    trust: ["iPhone e iPad", "14 sistemas + arcade", "Download gratuito"],
    channels: "Mudar de canal", pause: "Pausar a troca de canais", play: "Retomar a troca de canais", live: "No ar",
  },
  systems: {
    eyebrow: "Cada console da sua infância", title: "Catorze sistemas. Um bolso.",
    body: "Oito núcleos de emulação de código aberto, ajustados para iPhone e iPad. Escolha um canal, traga seus próprios jogos e continue exatamente de onde parou.",
    all: "Todos os sistemas e núcleos",
  },
  skins: {
    eyebrow: "Temas", title: "Vista.",
    body: "O controle na sua tela é uma superfície que dá para redesenhar. Escolha carcaça, material e layout, na vertical ou na horizontal, e os botões que você conhece de cor parecem novos de novo.",
    free: "Importe temas do Delta de graça", plus: "Temas premium com Retropa Plus", pick: "Experimente um tema", link: "Como os temas funcionam",
  },
  console: {
    eyebrow: "Console Mode", title: "Sua TV é a tela. Seu iPhone é o controle.",
    body: "Mande o jogo para uma TV ou tela externa e continue jogando com o iPhone na mão, ou conecte um controle e relaxe.",
    steps: [["Conecte", "Ligue uma TV ou tela ao seu iPhone."], ["Jogue grande", "O jogo ocupa a tela grande, com filtro e tudo."], ["Segure o controle", "Seu iPhone vira o controle."]],
    illustrative: "Ilustração",
  },
  feel: {
    eyebrow: "Sensação", title: "Joga como deve jogar.",
    cards: [
      { id: "controllers", title: "Conecte um controle", body: "Pareie um controle compatível com iPhone e remapeie cada botão do seu jeito." },
      { id: "haptics", title: "Botões que você sente", body: "A resposta tátil personalizada dá a cada toque um clique, uma batida ou nada.", plus: true },
      { id: "time", title: "Volte o erro", body: "Salve em qualquer lugar, navegue por uma linha do tempo de estados salvos e volte no tempo nos sistemas compatíveis." },
      { id: "speed", title: "Pule a parte chata", body: "Acelere as partes lentas ou segure para um impulso rápido." },
    ],
  },
  collection: {
    eyebrow: "Sua coleção", title: "Tudo o que você joga, bem guardado.",
    cards: [
      { id: "library", title: "Biblioteca com capas", body: "Seus jogos em coleções, com capas em vez de nomes de arquivo." },
      { id: "honor", title: "Medalhas que valem a pena", body: "O Honor transforma conquistas em medalhas 3D para girar na mão." },
      { id: "highlights", title: "Guarde o momento", body: "Recorte os últimos segundos de jogo e compartilhe pelo Fotos." },
      { id: "cloud", title: "Saves no iCloud", body: "Faça backup e restaure seus estados salvos com o iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Canal 08 · Arcade", title: "Insira a ficha.",
    body: "Placas CPS I, II e III, Neo Geo, PGM, Irem M92 e Midway, com temas de gabinete feitos para elas. O arcade faz parte do Retropa Plus; experimente no app antes de decidir.",
    link: "Arcade no iPhone e iPad",
  },
  start: {
    eyebrow: "Comece em três passos", title: "Três passos até o primeiro jogo.",
    steps: [["Baixe", "Pegue o Retropa grátis na App Store."], ["Adicione um jogo", "Importe seus próprios arquivos pelo app Arquivos ou por Wi-Fi, ou escolha um jogo homebrew gratuito no catálogo integrado."], ["Aperte start", "Escolha um tema e uma tela, e jogue."]],
    homebrew: "Ainda não tem jogos? O catálogo Homebrew integrado tem jogos gratuitos de criadores independentes para começar.",
  },
  plus: {
    eyebrow: "Grátis e Plus", title: "Grátis para jogar. Plus para ir além.",
    freeTitle: "Grátis", free: ["Todos os catorze sistemas portáteis e de mesa", "Seus próprios jogos, importados", "Importação de temas do Delta", "Estados salvos e retrocesso", "Controles de jogo"],
    plusTitle: "Retropa Plus", plus: ["Placas arcade", "Temas premium e filtros CRT avançados", "Console Mode na sua TV", "Resposta tátil personalizada e turbo", "Mais espaços de save e clipes mais longos"],
    note: "Planos e preços locais aparecem no app.",
  },
  credits: {
    eyebrow: "Feito com código aberto", title: "Nos ombros dos emuladores.",
    body: "O Retropa roda mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico e TetaNES, o trabalho de comunidades de código aberto às quais somos gratos.",
    privacyTitle: "Seus jogos continuam seus.", privacy: "Seus arquivos ficam no seu dispositivo, e você não precisa de conta para jogar.",
    footage: "Cenas de jogo",
  },
  faq: { title: "Perguntas frequentes.", more: "Todas as perguntas" },
}

const ru: HomeCopy = {
  hero: {
    title: "Сыграем ещё раз.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Sega Mega Drive и аркадные автоматы — на iPhone и iPad, которые и так всегда с вами. Скины, которые ощущаются как настоящие. Картинка — такая, как вы помните.",
    trust: ["iPhone и iPad", "14 систем + аркады", "Бесплатно"],
    channels: "Переключить канал", pause: "Приостановить переключение каналов", play: "Продолжить переключение каналов", live: "В эфире",
  },
  systems: {
    eyebrow: "Все приставки вашего детства", title: "Четырнадцать систем. Один карман.",
    body: "Восемь эмуляторных ядер с открытым кодом, настроенных для iPhone и iPad. Выберите канал, добавьте свои игры и продолжайте с того места, где остановились.",
    all: "Все системы и ядра",
  },
  skins: {
    eyebrow: "Скины", title: "Примерьте.",
    body: "Контроллер на экране — это поверхность, которую можно переделать. Выберите корпус, материал и раскладку, вертикально или горизонтально, — и знакомые кнопки ощущаются по-новому.",
    free: "Скины Delta импортируются бесплатно", plus: "Премиальные скины — в Retropa Plus", pick: "Примерить скин", link: "Как работают скины",
  },
  console: {
    eyebrow: "Console Mode", title: "Телевизор — экран. iPhone — контроллер.",
    body: "Выведите игру на телевизор или внешний дисплей и продолжайте играть с iPhone в руках — или подключите геймпад и устраивайтесь поудобнее.",
    steps: [["Подключите", "Подключите телевизор или дисплей к iPhone."], ["Играйте на большом", "Игра занимает большой экран вместе с фильтром."], ["Держите управление", "iPhone становится контроллером."]],
    illustrative: "Иллюстрация",
  },
  feel: {
    eyebrow: "Ощущения", title: "Играется так, как должно.",
    cards: [
      { id: "controllers", title: "Подключите геймпад", body: "Подключите геймпад, совместимый с iPhone, и переназначьте любую кнопку." },
      { id: "haptics", title: "Кнопки, которые чувствуешь", body: "Настраиваемая виброотдача: щелчок, глухой удар или тишина при каждом нажатии.", plus: true },
      { id: "time", title: "Отмотайте ошибку", body: "Сохраняйтесь где угодно, листайте ленту сохранений и перематывайте назад на поддерживаемых системах." },
      { id: "speed", title: "Пропустите скучное", body: "Ускоряйте медленные моменты или удерживайте для короткого ускорения." },
    ],
  },
  collection: {
    eyebrow: "Ваша коллекция", title: "Всё, во что вы играете, — в порядке.",
    cards: [
      { id: "library", title: "Библиотека с обложками", body: "Игры в коллекциях, с обложками вместо имён файлов." },
      { id: "honor", title: "Медали, которые хочется получить", body: "Honor превращает достижения в 3D-медали, которые можно покрутить в руках." },
      { id: "highlights", title: "Сохраните момент", body: "Сохраните последние секунды игры в клип и поделитесь им из «Фото»." },
      { id: "cloud", title: "Сохранения в iCloud", body: "Создавайте резервные копии сохранений и восстанавливайте их через iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Канал 08 · Аркады", title: "Бросьте монетку.",
    body: "Платы CPS I, II и III, Neo Geo, PGM, Irem M92 и Midway со скинами-автоматами, созданными специально для них. Аркады входят в Retropa Plus — попробуйте в приложении, прежде чем решать.",
    link: "Аркады на iPhone и iPad",
  },
  start: {
    eyebrow: "Три шага", title: "Три шага до первой игры.",
    steps: [["Загрузите", "Скачайте Retropa бесплатно в App Store."], ["Добавьте игру", "Импортируйте свои файлы через «Файлы» или по Wi-Fi либо выберите бесплатную homebrew-игру во встроенном каталоге."], ["Нажмите Start", "Выберите скин и экран — и играйте."]],
    homebrew: "Своих игр пока нет? Во встроенном каталоге Homebrew есть бесплатные игры независимых разработчиков.",
  },
  plus: {
    eyebrow: "Бесплатно и Plus", title: "Играйте бесплатно. С Plus — дальше.",
    freeTitle: "Бесплатно", free: ["Все четырнадцать портативных и домашних систем", "Импорт собственных игр", "Импорт скинов Delta", "Сохранения и перемотка", "Геймпады"],
    plusTitle: "Retropa Plus", plus: ["Аркадные платы", "Премиальные скины и продвинутые CRT-фильтры", "Console Mode на телевизоре", "Настраиваемая виброотдача и турбо", "Больше слотов сохранений и длинные клипы"],
    note: "Тарифы и местные цены указаны в приложении.",
  },
  credits: {
    eyebrow: "На открытом коде", title: "На плечах эмуляторов.",
    body: "Retropa работает на mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico и TetaNES — это труд open-source-сообществ, которым мы благодарны.",
    privacyTitle: "Ваши игры остаются вашими.", privacy: "Файлы хранятся на вашем устройстве, и для игры не нужна учётная запись.",
    footage: "Игровые кадры",
  },
  faq: { title: "Вопросы и ответы.", more: "Все вопросы" },
}

const tr: HomeCopy = {
  hero: {
    title: "Bir el daha.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Sega Genesis ve atari salonları; zaten yanında taşıdığın iPhone ve iPad'de. Gerçeği gibi hissettiren temalar. Hatırladığın gibi görüntüler.",
    trust: ["iPhone ve iPad", "14 sistem + arcade", "Ücretsiz indirme"],
    channels: "Kanal değiştir", pause: "Kanal geçişini duraklat", play: "Kanal geçişini sürdür", live: "Yayında",
  },
  systems: {
    eyebrow: "Büyürken oynadığın her konsol", title: "On dört sistem. Tek cep.",
    body: "iPhone ve iPad için ayarlanmış sekiz açık kaynaklı emülatör çekirdeği. Bir kanal seç, kendi oyunlarını getir ve kaldığın yerden devam et.",
    all: "Tüm sistemler ve çekirdekler",
  },
  skins: {
    eyebrow: "Temalar", title: "Giydir.",
    body: "Ekrandaki kontrolcü, yeniden tasarlayabileceğin bir yüzey. Kasa, malzeme ve düzen seç, dikey ya da yatay; ezbere bildiğin tuşlar yeniden taze hissettirsin.",
    free: "Delta temaları ücretsiz içe aktarılır", plus: "Premium temalar Retropa Plus ile", pick: "Bir tema dene", link: "Temalar nasıl çalışır",
  },
  console: {
    eyebrow: "Console Mode", title: "Televizyonun ekran. iPhone'un kontrolcü.",
    body: "Oyunu bir televizyona ya da harici ekrana gönder, elindeki iPhone ile oynamaya devam et; ya da bir kontrolcü bağla ve arkana yaslan.",
    steps: [["Bağla", "iPhone'una bir televizyon ya da ekran bağla."], ["Büyük oyna", "Oyun, filtresiyle birlikte büyük ekranı doldurur."], ["Kontrolü al", "iPhone'un kontrolcüye dönüşür."]],
    illustrative: "Çizim",
  },
  feel: {
    eyebrow: "His", title: "Olması gerektiği gibi oynanır.",
    cards: [
      { id: "controllers", title: "Kontrolcü bağla", body: "iPhone ile uyumlu bir kontrolcü eşle ve her tuşu istediğin gibi yeniden ata." },
      { id: "haptics", title: "Hissedilen tuşlar", body: "Özel dokunsal geri bildirim her basışa bir tık, bir tok ses ya da sessizlik verir.", plus: true },
      { id: "time", title: "Hatayı geri sar", body: "Her yerde kaydet, kayıt zaman çizelgesinde gez ve desteklenen sistemlerde geri sar." },
      { id: "speed", title: "Sıkıcı kısmı atla", body: "Yavaş bölümleri hızlı geç ya da kısa bir hızlanma için basılı tut." },
    ],
  },
  collection: {
    eyebrow: "Koleksiyonun", title: "Oynadığın her şey, özenle saklı.",
    cards: [
      { id: "library", title: "Kapaklı kütüphane", body: "Oyunların dosya adlarıyla değil, kapak görselleriyle koleksiyonlarda." },
      { id: "honor", title: "Kazanmaya değer madalyalar", body: "Honor, dönüm noktalarını elinde çevirebileceğin 3D madalyalara dönüştürür." },
      { id: "highlights", title: "Anı kaydet", body: "Son birkaç saniyeyi klip olarak kaydet ve Fotoğraflar'dan paylaş." },
      { id: "cloud", title: "Kayıtlar iCloud'da", body: "Oyun kayıtlarını iCloud Drive ile yedekle ve geri yükle." },
    ],
  },
  arcade: {
    eyebrow: "Kanal 08 · Arcade", title: "Jeton at.",
    body: "CPS I, II ve III, Neo Geo, PGM, Irem M92 ve Midway kartları; onlar için tasarlanmış salon makinesi temalarıyla. Arcade, Retropa Plus'ın bir parçası; karar vermeden önce uygulamada dene.",
    link: "iPhone ve iPad'de arcade",
  },
  start: {
    eyebrow: "Üç adımda başla", title: "İlk oyununa üç adım.",
    steps: [["İndir", "Retropa'yı App Store'dan ücretsiz al."], ["Oyun ekle", "Kendi dosyalarını Dosyalar'dan ya da Wi-Fi ile içe aktar veya yerleşik katalogdan ücretsiz bir homebrew oyun seç."], ["Start'a bas", "Bir tema ve ekran seç, oynamaya başla."]],
    homebrew: "Henüz oyunun yok mu? Yerleşik Homebrew kataloğunda bağımsız geliştiricilerin ücretsiz oyunları var.",
  },
  plus: {
    eyebrow: "Ücretsiz ve Plus", title: "Ücretsiz oyna. Plus ile daha ileri git.",
    freeTitle: "Ücretsiz", free: ["On dört el ve ev konsolu sisteminin tamamı", "Kendi oyunlarını içe aktarma", "Delta teması içe aktarma", "Oyun kayıtları ve geri sarma", "Oyun kontrolcüleri"],
    plusTitle: "Retropa Plus", plus: ["Arcade kartları", "Premium temalar ve gelişmiş CRT filtreleri", "Televizyonda Console Mode", "Özel dokunsal geri bildirim ve turbo", "Daha fazla kayıt yuvası ve daha uzun klipler"],
    note: "Planlar ve yerel fiyatlar uygulamada gösterilir.",
  },
  credits: {
    eyebrow: "Açık kaynak üzerine", title: "Emülatörlerin omuzlarında.",
    body: "Retropa; mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico ve TetaNES ile çalışır. Bu açık kaynak topluluklarına teşekkür ederiz.",
    privacyTitle: "Oyunların senin kalır.", privacy: "Dosyaların cihazında kalır ve oynamak için hesap gerekmez.",
    footage: "Oyun görüntüleri",
  },
  faq: { title: "Sık sorulanlar.", more: "Tüm sorular" },
}

const id: HomeCopy = {
  hero: {
    title: "Main sekali lagi.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Sega Genesis, dan mesin arcade — di iPhone dan iPad yang selalu kamu bawa. Skin yang terasa seperti aslinya. Tampilan persis seperti yang kamu ingat.",
    trust: ["iPhone & iPad", "14 sistem + arcade", "Unduh gratis"],
    channels: "Ganti saluran", pause: "Jeda pergantian saluran", play: "Lanjutkan pergantian saluran", live: "Sedang tayang",
  },
  systems: {
    eyebrow: "Setiap konsol masa kecilmu", title: "Empat belas sistem. Satu saku.",
    body: "Delapan core emulator open source, disetel untuk iPhone dan iPad. Pilih saluran, bawa game milikmu sendiri, dan lanjutkan tepat dari tempat kamu berhenti.",
    all: "Semua sistem & core",
  },
  skins: {
    eyebrow: "Skin", title: "Pakai gayamu.",
    body: "Kontroler di layarmu adalah permukaan yang bisa didesain ulang. Pilih cangkang, bahan, dan tata letak, tegak atau mendatar, dan tombol yang sudah kamu hafal terasa baru lagi.",
    free: "Impor skin Delta gratis", plus: "Skin premium dengan Retropa Plus", pick: "Coba skin", link: "Cara kerja skin",
  },
  console: {
    eyebrow: "Console Mode", title: "TV jadi layar. iPhone jadi kontroler.",
    body: "Kirim game ke TV atau layar eksternal dan terus bermain dengan iPhone di tangan — atau sambungkan kontroler dan bersantai.",
    steps: [["Sambungkan", "Hubungkan TV atau layar ke iPhone."], ["Main di layar besar", "Game memenuhi layar besar, lengkap dengan filternya."], ["Pegang kendali", "iPhone-mu menjadi kontroler."]],
    illustrative: "Ilustrasi",
  },
  feel: {
    eyebrow: "Rasa", title: "Dimainkan sebagaimana mestinya.",
    cards: [
      { id: "controllers", title: "Sambungkan kontroler", body: "Pasangkan kontroler yang mendukung iPhone dan atur ulang setiap tombol sesukamu." },
      { id: "haptics", title: "Tombol yang terasa", body: "Haptik kustom memberi setiap tekanan bunyi klik, hentakan, atau tanpa apa pun.", plus: true },
      { id: "time", title: "Putar balik kesalahan", body: "Simpan di mana saja, telusuri linimasa save state, dan putar mundur di sistem yang didukung." },
      { id: "speed", title: "Lewati yang membosankan", body: "Percepat bagian yang lambat, atau tahan untuk dorongan sesaat." },
    ],
  },
  collection: {
    eyebrow: "Koleksimu", title: "Semua yang kamu mainkan, tersimpan rapi.",
    cards: [
      { id: "library", title: "Pustaka bersampul", body: "Game-mu dalam koleksi, dengan gambar sampul, bukan nama file." },
      { id: "honor", title: "Medali yang layak dikejar", body: "Honor mengubah pencapaian menjadi medali 3D yang bisa kamu putar di tangan." },
      { id: "highlights", title: "Simpan momennya", body: "Potong beberapa detik terakhir permainan dan bagikan dari Foto." },
      { id: "cloud", title: "Save di iCloud", body: "Cadangkan dan pulihkan save state dengan iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Saluran 08 · Arcade", title: "Masukkan koin.",
    body: "Papan CPS I, II, dan III, Neo Geo, PGM, Irem M92, dan Midway, dengan skin kabinet yang dibuat khusus. Arcade termasuk dalam Retropa Plus — coba dulu di aplikasi sebelum memutuskan.",
    link: "Arcade di iPhone dan iPad",
  },
  start: {
    eyebrow: "Mulai dalam tiga langkah", title: "Tiga langkah ke game pertamamu.",
    steps: [["Unduh", "Dapatkan Retropa gratis di App Store."], ["Tambah game", "Impor file milikmu dari Files atau lewat Wi-Fi, atau pilih game homebrew gratis dari katalog bawaan."], ["Tekan start", "Pilih skin dan layar, lalu main."]],
    homebrew: "Belum punya game? Katalog Homebrew bawaan berisi game gratis dari pembuat independen untuk memulai.",
  },
  plus: {
    eyebrow: "Gratis & Plus", title: "Gratis untuk bermain. Plus untuk melangkah lebih jauh.",
    freeTitle: "Gratis", free: ["Keempat belas sistem genggam dan konsol", "Impor game milikmu sendiri", "Impor skin Delta", "Save state dan putar mundur", "Kontroler game"],
    plusTitle: "Retropa Plus", plus: ["Papan arcade", "Skin premium dan filter CRT lanjutan", "Console Mode di TV", "Haptik kustom dan turbo", "Slot save lebih banyak dan klip lebih panjang"],
    note: "Paket dan harga lokal ditampilkan di aplikasi.",
  },
  credits: {
    eyebrow: "Dibangun di atas open source", title: "Berdiri di pundak para emulator.",
    body: "Retropa menjalankan mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico, dan TetaNES — karya komunitas open source yang kami syukuri.",
    privacyTitle: "Game-mu tetap milikmu.", privacy: "File tetap di perangkatmu, dan kamu tidak perlu akun untuk bermain.",
    footage: "Cuplikan permainan",
  },
  faq: { title: "Pertanyaan umum.", more: "Semua pertanyaan" },
}

const th: HomeCopy = {
  hero: {
    title: "เล่นอีกสักตา",
    lead: "Game Boy Advance, Nintendo DS, SNES, Sega Genesis และตู้อาร์เคด บน iPhone และ iPad ที่คุณพกอยู่แล้ว สกินที่รู้สึกเหมือนของจริง ภาพที่เหมือนในความทรงจำ",
    trust: ["iPhone และ iPad", "14 ระบบ + อาร์เคด", "ดาวน์โหลดฟรี"],
    channels: "เปลี่ยนช่อง", pause: "หยุดเปลี่ยนช่องอัตโนมัติ", play: "เปลี่ยนช่องอัตโนมัติต่อ", live: "กำลังออกอากาศ",
  },
  systems: {
    eyebrow: "ทุกเครื่องที่เติบโตมาด้วยกัน", title: "สิบสี่ระบบ ในกระเป๋าเดียว",
    body: "คอร์อีมูเลเตอร์โอเพนซอร์สแปดตัว ปรับจูนมาเพื่อ iPhone และ iPad เลือกช่อง นำเกมของคุณเข้ามา แล้วเล่นต่อจากจุดที่ค้างไว้",
    all: "ระบบและคอร์ทั้งหมด",
  },
  skins: {
    eyebrow: "สกิน", title: "แต่งให้เป็นของคุณ",
    body: "คอนโทรลเลอร์บนหน้าจอคือพื้นผิวที่ออกแบบใหม่ได้ เลือกบอดี้ วัสดุ และเลย์เอาต์ ทั้งแนวตั้งและแนวนอน แล้วปุ่มที่คุ้นมือจะรู้สึกใหม่อีกครั้ง",
    free: "นำเข้าสกิน Delta ได้ฟรี", plus: "สกินพรีเมียมกับ Retropa Plus", pick: "ลองสกิน", link: "สกินทำงานอย่างไร",
  },
  console: {
    eyebrow: "Console Mode", title: "ทีวีคือจอ iPhone คือจอยเกม",
    body: "ส่งเกมขึ้นทีวีหรือจอภายนอก แล้วเล่นต่อด้วย iPhone ในมือ หรือเชื่อมจอยเกมแล้วนั่งพิงโซฟาสบาย ๆ",
    steps: [["เชื่อมต่อ", "ต่อทีวีหรือจอเข้ากับ iPhone"], ["เล่นจอใหญ่", "เกมเต็มจอใหญ่ พร้อมฟิลเตอร์"], ["ถือการควบคุม", "iPhone กลายเป็นจอยเกม"]],
    illustrative: "ภาพประกอบ",
  },
  feel: {
    eyebrow: "สัมผัส", title: "เล่นได้อย่างที่ควรเป็น",
    cards: [
      { id: "controllers", title: "ต่อจอยเกม", body: "จับคู่จอยเกมที่รองรับ iPhone แล้วกำหนดทุกปุ่มใหม่ได้ตามใจ" },
      { id: "haptics", title: "ปุ่มที่สัมผัสได้", body: "การสั่นแบบกำหนดเองให้ทุกการกดเป็นเสียงคลิก แรงกระแทก หรือเงียบสนิท", plus: true },
      { id: "time", title: "ย้อนความผิดพลาด", body: "เซฟได้ทุกที่ ดูไทม์ไลน์ของเซฟสเตต และย้อนเวลาได้ในระบบที่รองรับ" },
      { id: "speed", title: "ข้ามช่วงน่าเบื่อ", body: "เร่งผ่านช่วงที่ช้า หรือกดค้างเพื่อเร่งชั่วครู่" },
    ],
  },
  collection: {
    eyebrow: "คอลเลกชันของคุณ", title: "ทุกเกมที่เล่น เก็บไว้อย่างสวยงาม",
    cards: [
      { id: "library", title: "คลังเกมพร้อมปก", body: "เกมของคุณจัดเป็นคอลเลกชัน แสดงภาพปกแทนชื่อไฟล์" },
      { id: "honor", title: "เหรียญที่อยากได้", body: "Honor เปลี่ยนความสำเร็จเป็นเหรียญ 3D ที่หมุนดูได้ในมือ" },
      { id: "highlights", title: "เก็บช่วงเวลา", body: "ตัดคลิปไม่กี่วินาทีล่าสุดแล้วแชร์จากแอปรูปภาพ" },
      { id: "cloud", title: "เซฟใน iCloud", body: "สำรองและกู้คืนเซฟสเตตด้วย iCloud Drive" },
    ],
  },
  arcade: {
    eyebrow: "ช่อง 08 · อาร์เคด", title: "หยอดเหรียญ",
    body: "บอร์ด CPS I, II และ III, Neo Geo, PGM, Irem M92 และ Midway พร้อมสกินตู้เกมที่ออกแบบมาโดยเฉพาะ อาร์เคดเป็นส่วนหนึ่งของ Retropa Plus ลองเล่นในแอปก่อนตัดสินใจได้",
    link: "อาร์เคดบน iPhone และ iPad",
  },
  start: {
    eyebrow: "เริ่มใน 3 ขั้นตอน", title: "สามขั้นตอนสู่เกมแรก",
    steps: [["ดาวน์โหลด", "รับ Retropa ฟรีจาก App Store"], ["เพิ่มเกม", "นำเข้าไฟล์ของคุณจากแอปไฟล์หรือผ่าน Wi-Fi หรือเลือกเกมโฮมบรูว์ฟรีจากแคตตาล็อกในตัว"], ["กดเริ่ม", "เลือกสกินและหน้าจอ แล้วเล่นเลย"]],
    homebrew: "ยังไม่มีเกม? แคตตาล็อก Homebrew ในตัวมีเกมฟรีจากนักพัฒนาอิสระให้เริ่มเล่น",
  },
  plus: {
    eyebrow: "ฟรีและ Plus", title: "เล่นฟรี ไปได้ไกลกว่ากับ Plus",
    freeTitle: "ฟรี", free: ["ระบบพกพาและคอนโซลทั้งสิบสี่ระบบ", "นำเข้าเกมของคุณเอง", "นำเข้าสกิน Delta", "เซฟสเตตและย้อนเวลา", "จอยเกม"],
    plusTitle: "Retropa Plus", plus: ["บอร์ดอาร์เคด", "สกินพรีเมียมและฟิลเตอร์ CRT ขั้นสูง", "Console Mode บนทีวี", "การสั่นแบบกำหนดเองและเทอร์โบ", "ช่องเซฟเพิ่มและคลิปไฮไลต์ที่ยาวขึ้น"],
    note: "แผนและราคาท้องถิ่นแสดงอยู่ในแอป",
  },
  credits: {
    eyebrow: "สร้างบนโอเพนซอร์ส", title: "ยืนบนไหล่ของอีมูเลเตอร์รุ่นก่อน",
    body: "Retropa ทำงานด้วย mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico และ TetaNES ผลงานของชุมชนโอเพนซอร์สที่เราขอบคุณ",
    privacyTitle: "เกมของคุณเป็นของคุณ", privacy: "ไฟล์อยู่บนอุปกรณ์ของคุณ และไม่ต้องมีบัญชีเพื่อเล่น",
    footage: "ที่มาของภาพเกม",
  },
  faq: { title: "คำถามที่พบบ่อย", more: "คำถามทั้งหมด" },
}

const vi: HomeCopy = {
  hero: {
    title: "Chơi thêm ván nữa.",
    lead: "Game Boy Advance, Nintendo DS, SNES, Sega Genesis và máy arcade — trên chiếc iPhone và iPad bạn luôn mang theo. Giao diện cảm giác như máy thật. Hình ảnh đúng như trong ký ức.",
    trust: ["iPhone & iPad", "14 hệ máy + arcade", "Tải miễn phí"],
    channels: "Đổi kênh", pause: "Tạm dừng tự đổi kênh", play: "Tiếp tục tự đổi kênh", live: "Đang phát",
  },
  systems: {
    eyebrow: "Mọi hệ máy tuổi thơ", title: "Mười bốn hệ máy. Một chiếc túi.",
    body: "Tám lõi giả lập mã nguồn mở, tinh chỉnh cho iPhone và iPad. Chọn một kênh, mang trò chơi của bạn vào và chơi tiếp đúng chỗ bạn dừng.",
    all: "Tất cả hệ máy & lõi",
  },
  skins: {
    eyebrow: "Giao diện", title: "Khoác lên.",
    body: "Tay cầm trên màn hình là một bề mặt bạn có thể thiết kế lại. Chọn vỏ, chất liệu và bố cục, dọc hoặc ngang, và những nút bạn thuộc lòng lại có cảm giác mới.",
    free: "Nhập giao diện Delta miễn phí", plus: "Giao diện cao cấp với Retropa Plus", pick: "Thử một giao diện", link: "Cách giao diện hoạt động",
  },
  console: {
    eyebrow: "Console Mode", title: "TV là màn hình. iPhone là tay cầm.",
    body: "Đưa trò chơi lên TV hoặc màn hình ngoài và tiếp tục chơi với iPhone trên tay — hoặc kết nối tay cầm và ngả lưng thư giãn.",
    steps: [["Kết nối", "Nối TV hoặc màn hình với iPhone."], ["Chơi màn lớn", "Trò chơi phủ kín màn hình lớn, giữ nguyên bộ lọc."], ["Cầm điều khiển", "iPhone trở thành tay cầm."]],
    illustrative: "Hình minh họa",
  },
  feel: {
    eyebrow: "Cảm giác", title: "Chơi đúng như nó phải thế.",
    cards: [
      { id: "controllers", title: "Kết nối tay cầm", body: "Ghép tay cầm tương thích iPhone và gán lại mọi nút theo ý bạn." },
      { id: "haptics", title: "Nút bấm có cảm giác", body: "Rung phản hồi tùy chỉnh cho mỗi lần bấm một tiếng tách, một cú nảy hoặc im lặng.", plus: true },
      { id: "time", title: "Tua lại sai lầm", body: "Lưu ở bất kỳ đâu, xem dòng thời gian các bản lưu trạng thái và tua lại trên hệ máy được hỗ trợ." },
      { id: "speed", title: "Bỏ qua đoạn chán", body: "Tua nhanh các đoạn chậm, hoặc giữ để tăng tốc trong chốc lát." },
    ],
  },
  collection: {
    eyebrow: "Bộ sưu tập của bạn", title: "Mọi trò bạn chơi, được giữ gìn đẹp đẽ.",
    cards: [
      { id: "library", title: "Thư viện có ảnh bìa", body: "Trò chơi được xếp theo bộ sưu tập, hiện ảnh bìa thay vì tên tệp." },
      { id: "honor", title: "Huy chương đáng giành", body: "Honor biến các cột mốc thành huy chương 3D bạn có thể xoay trên tay." },
      { id: "highlights", title: "Lưu khoảnh khắc", body: "Cắt vài giây vừa chơi thành clip và chia sẻ từ Ảnh." },
      { id: "cloud", title: "Bản lưu trên iCloud", body: "Sao lưu và khôi phục bản lưu trạng thái bằng iCloud Drive." },
    ],
  },
  arcade: {
    eyebrow: "Kênh 08 · Arcade", title: "Bỏ xu vào.",
    body: "Bo mạch CPS I, II và III, Neo Geo, PGM, Irem M92 và Midway, cùng giao diện tủ máy được làm riêng. Arcade thuộc Retropa Plus — hãy chơi thử trong ứng dụng trước khi quyết định.",
    link: "Arcade trên iPhone và iPad",
  },
  start: {
    eyebrow: "Bắt đầu với ba bước", title: "Ba bước đến ván đầu tiên.",
    steps: [["Tải về", "Nhận Retropa miễn phí trên App Store."], ["Thêm trò chơi", "Nhập tệp của bạn từ Tệp hoặc qua Wi-Fi, hoặc chọn một trò homebrew miễn phí trong danh mục có sẵn."], ["Nhấn start", "Chọn giao diện và màn hình, rồi chơi."]],
    homebrew: "Chưa có trò chơi? Danh mục Homebrew có sẵn gồm các trò miễn phí của nhà phát triển độc lập để bạn bắt đầu.",
  },
  plus: {
    eyebrow: "Miễn phí & Plus", title: "Chơi miễn phí. Đi xa hơn với Plus.",
    freeTitle: "Miễn phí", free: ["Cả mười bốn hệ máy cầm tay và máy chơi game", "Nhập trò chơi của chính bạn", "Nhập giao diện Delta", "Lưu trạng thái và tua lại", "Tay cầm chơi game"],
    plusTitle: "Retropa Plus", plus: ["Bo mạch arcade", "Giao diện cao cấp và bộ lọc CRT nâng cao", "Console Mode trên TV", "Rung tùy chỉnh và turbo", "Thêm ô lưu và clip nổi bật dài hơn"],
    note: "Gói và giá tại địa phương được hiển thị trong ứng dụng.",
  },
  credits: {
    eyebrow: "Xây trên mã nguồn mở", title: "Đứng trên vai các trình giả lập.",
    body: "Retropa chạy mGBA, SkyEmu, SameBoy, ares, jgenesis, LakeSnes, Rustico và TetaNES — thành quả của các cộng đồng mã nguồn mở mà chúng tôi biết ơn.",
    privacyTitle: "Trò chơi của bạn vẫn là của bạn.", privacy: "Tệp nằm trên thiết bị của bạn và bạn không cần tài khoản để chơi.",
    footage: "Nguồn hình ảnh trò chơi",
  },
  faq: { title: "Câu hỏi thường gặp.", more: "Tất cả câu hỏi" },
}

const copy: Record<Locale, HomeCopy> = { en, "zh-Hans": zhHans, "zh-Hant": zhHant, ja, ko, de, es, fr, it, "pt-BR": ptBR, ru, tr, id, th, vi }

export const homeCopy = (locale: Locale): HomeCopy => copy[locale]

/** FAQ entries surfaced on the homepage; full answers live on /start/. */
export const homeFaqIds = ["games", "import", "delta-skins", "controllers", "plus", "devices"] as const

/** Hero poster preloaded as the LCP element. */
export const homePreload: string[] = []
