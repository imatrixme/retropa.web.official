import type { ProductDetail } from "@/content/product-details"

export const englishSystemGuides = {
  "gba-emulator": {
    title: "GBA emulator for iPhone and iPad", label: "GBA", image: "material",
    summary: "Bring your own .gba files to Retropa. Start with a working game, then choose a handheld skin, map a controller and find the screen treatment that feels right.",
    imageAlt: "Retropa product artwork with portrait and landscape handheld control layouts",
    sections: [
      { title: "Start with a .gba game file", body: "Retropa runs supported GBA games on iPhone and iPad with iOS 18 or later. The app is free to download, but it does not include games or BIOS files. Use a game file you have the right to use, and keep the original outside the app as a backup.", points: ["A GBA game normally uses the .gba extension.", "A .gb or .gbc file belongs to GB or GBC, not GBA.", "Changing a file extension does not convert a game to another system."] },
      { title: "Import from the Files app", body: "Make sure the file is available locally in Files, rather than only visible as a cloud placeholder. Open the import entry in Retropa's library and select the game. Once it appears in the library, open it and confirm that the picture, sound and default controls work before customizing the layout." },
      { title: "Choose the right handheld layout", body: "A GBA layout needs room for the directional pad, A and B, shoulder buttons, Start and Select. Try the buttons as well as the artwork. Retropa supports .deltaskin import, but a DS skin is not a substitute for a GBA layout. Check that the package supports your device orientation.", points: ["Keep the game screen unobstructed in both orientations you use.", "Pair compatible physical controllers in iOS, then check their mapping in Retropa.", "Premium skins and advanced filters require Plus; importing a file does not unlock paid features."] },
      { title: "LCD character or clean pixels?", body: "Begin with the original picture. A light LCD treatment can recall a handheld screen, while a CRT treatment creates a different presentation. Retropa's advanced filters account for the actual output area without an integer-scale requirement. Filters change the picture, not the game's resolution or file compatibility." },
      { title: "When an import or a save will not work", body: "Check the file extension, selected system and the exact error first. If Files cannot open or download the original, finish that step before importing again. For BIOS errors, follow the selected core's requirement; an arcade neogeo.zip is not a GBA BIOS. A game's own save data and an emulator save state are different artifacts: do not rename one into the other, and retain backups before moving between cores or apps.", points: ["Try the default skin and a simple filter when isolating a control or display issue.", "Record the app version, system, core and error for support.", "Do not attach commercial ROMs or BIOS files to a support request."] },
    ], link: "/cores/", linkLabel: "See supported files and GBA cores",
  },
  "ds-emulator": {
    title: "DS emulator for iPhone and iPad", label: "DS", image: "library",
    summary: "Import your .nds games into Retropa and make space for both screens. Check touch input, controls and file requirements before choosing a new layout or filter.",
    imageAlt: "Retropa product artwork showing the game library and settings on iPhone",
    sections: [
      { title: "Prepare a .nds game", body: "DS and GBA are different systems. Retropa supports .nds files for DS on iPhone and iPad with iOS 18 or later. Use files you have the right to use and retain a separate backup. The app does not provide ROM or BIOS downloads, and a .gba file cannot become a DS game by renaming it." },
      { title: "Import and check both screens", body: "Download the game file locally in Files, then select it from the library import entry in Retropa. Open the imported game with the default layout. Check both display areas and test touch input in a part of the game that uses it. A title screen alone is not enough to verify that every required input is reachable.", points: ["Start with the system detected or selected for the .nds file.", "Follow any BIOS or firmware requirement reported by the installed core.", "Keep a copy of the original file while diagnosing errors."] },
      { title: "Give the touch screen enough room", body: "Two displays need a different layout from a single-screen handheld. Choose a DS skin that exposes both screens and the required controls. Portrait can give the screens a natural vertical arrangement; landscape support depends on the selected skin. Check small touch targets at the size you actually play, especially on a smaller iPhone." },
      { title: "Controllers do not replace every touch action", body: "Retropa supports compatible external controllers and button mapping. Pair the controller with iOS and confirm its assignments in the app. A physical D-pad and action buttons do not automatically replace a game's touch-screen interactions. Verify those interactions before settling on a controller-only setup." },
      { title: "Keep the first session simple", body: "Confirm game and input compatibility before applying a complex shader chain. If the picture or frame pacing changes after selecting a filter, return to a simple preset and compare. Device, core and output size all affect performance; support for DS is not a promise of identical results for every game and phone.", points: ["Premium skins and advanced filters require Retropa Plus.", "Keep original saves and save states backed up; they are not interchangeable file formats.", "For support, include app version, selected core and the exact error, not the game or BIOS files."] },
    ], link: "/cores/", linkLabel: "See supported files and DS cores",
  },
} satisfies Record<string, ProductDetail>

export const chineseSystemGuides = {
  "gba-emulator": {
    title: "iPhone 与 iPad 的 GBA 模拟器", label: "GBA", image: "material",
    summary: "把你拥有的 .gba 文件导入 Retropa。先运行游戏，再挑选掌机皮肤、连接手柄，找到记忆里的屏幕观感。",
    imageAlt: "Retropa 产品展示图：横屏与竖屏掌机操作布局",
    sections: [
      { title: "从一个 .gba 文件开始", body: "Retropa 可在 iOS 18 或更新版本的 iPhone、iPad 上运行受支持的 GBA 游戏。App 免费下载，但不附带游戏和 BIOS。请使用你有权使用的文件，并在 App 外保留原始备份。", points: ["GBA 游戏通常使用 .gba 扩展名。", ".gb、.gbc 分别属于 GB、GBC，不是 GBA 文件。", "修改后缀不会把游戏转换成另一个系统。"] },
      { title: "从“文件”导入到游戏库", body: "先确认文件已下载到本机，而不只是云盘中的占位条目。从 Retropa 游戏库打开导入入口，选中游戏文件。导入后直接打开，先确认画面、声音和默认按键正常，再调整个性化布局。" },
      { title: "选一套适合 GBA 的操作布局", body: "GBA 需要方向键、A/B、肩键、Start 和 Select。选皮肤时，除了看材质，也要实际检查每个按键。Retropa 支持导入 .deltaskin，但 DS 皮肤不能代替 GBA 布局，横竖屏支持也取决于资源包本身。", points: ["在常用方向下确认游戏视窗没有被遮挡。", "实体手柄先在 iOS 配对，再到 Retropa 核对映射。", "高级皮肤与高级滤镜需要 Plus，导入文件不会解锁付费功能。"] },
      { title: "清晰像素，还是掌机液晶的质感", body: "先用原始画面作参照。轻量 LCD 效果可以带回掌机屏幕的感觉，CRT 则是另一种显示风格。Retropa 高级滤镜会适应实际输出区域，不要求固定整数倍缩放。滤镜改变显示方式，不改变游戏原始分辨率，也不能修复文件兼容问题。" },
      { title: "导入或存档失败时先检查什么", body: "先核对文件后缀、游戏系统和具体错误。如果“文件”尚未下载完原始资源，先完成下载再重试。BIOS 要求以选中核心的提示为准，街机 neogeo.zip 不能用作 GBA BIOS。游戏自身存档与模拟器即时存档是不同制品，不要靠改后缀互相转换；切换核心或 App 前保留备份。", points: ["排查操作或显示问题时，先回到默认皮肤和轻量滤镜。", "联系支持时提供 App 版本、系统、核心和错误信息。", "不要附带商业 ROM 或 BIOS 文件。"] },
    ], link: "/cores/", linkLabel: "查看 GBA 核心与支持的文件",
  },
  "ds-emulator": {
    title: "iPhone 与 iPad 的 DS 模拟器", label: "DS", image: "library",
    summary: "将你拥有的 .nds 游戏导入 Retropa，为上下双屏留出舒适的位置。先检查触控、按键和文件要求，再选择皮肤与滤镜。",
    imageAlt: "Retropa 产品展示图：iPhone 上的游戏库与设置",
    sections: [
      { title: "准备好 .nds 游戏文件", body: "DS 与 GBA 是不同系统。Retropa 在 iOS 18 或更新版本的 iPhone、iPad 上支持 DS 的 .nds 文件。请仅使用你有权使用的文件，并保留独立备份。App 不提供 ROM 或 BIOS 下载，也不能通过改名把 .gba 转换成 DS 游戏。" },
      { title: "导入后，检查两个屏幕", body: "先在“文件”中把游戏下载到本机，再通过 Retropa 游戏库的导入入口选择它。用默认布局打开游戏，确认两块显示区域都可见，并在需要触控的游戏环节实际操作。只看到标题画面，并不能证明每种输入都可用。", points: ["确认 .nds 文件对应的系统识别或选择正确。", "如果当前核心提示 BIOS 或固件要求，按该提示准备。", "排查过程中始终保留原始文件。"] },
      { title: "给触摸屏留下足够的位置", body: "双屏需要不同于单屏掌机的布局。选择能完整显示两块屏幕与必要按键的 DS 皮肤。竖屏适合自然上下排列，横屏是否可用取决于皮肤提供的布局。在实际游玩的尺寸下检查小触控目标，尤其是屏幕较小的 iPhone。" },
      { title: "实体手柄不等于所有触控输入", body: "Retropa 支持兼容的外接手柄与按键映射。先在 iOS 配对，再到 App 核对操作分配。实体方向键和动作键不会自动替代游戏中的触摸屏交互，决定仅用手柄游玩前，先确认这些环节如何完成。" },
      { title: "先让第一局简单地跑起来", body: "确认游戏与输入兼容后，再应用复杂着色器。如果选择滤镜后画面或帧节奏发生变化，先退回轻量预设进行对比。设备、核心和输出尺寸都会影响表现；支持 DS 不代表所有游戏与手机都有完全相同的效果。", points: ["高级皮肤与高级滤镜需要 Retropa Plus。", "保留游戏存档与即时存档备份，它们不是可随意互换的格式。", "联系支持时提供 App 版本、核心与具体错误，不发送游戏或 BIOS 文件。"] },
    ], link: "/cores/", linkLabel: "查看 DS 核心与支持的文件",
  },
} satisfies Record<string, ProductDetail>
