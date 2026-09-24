import type { FeatureContent, FeaturePage } from "@/content/feature-pages/types"

/** 操控与导入参考页。事实以 App 2.3.2 为准。 */
export const pages: Record<FeaturePage, FeatureContent> = {
  controls: {
    metaTitle: "Retropa 操控：自适应触控、触感、手柄与连发",
    description: "Retropa 如何让触屏按得准：自适应热区、五种手感风格、按游戏单独设置、波形触感、手柄模板、连发、快进与音效。",
    label: "操控",
    eyebrow: "操控",
    title: "按下去，就落在拇指该落的地方。",
    intro: "触屏没有可以摸到的按键边缘，所以在手机上玩模拟器，难点不是性能，而是按在两个键之间的那一下。这一页讲 Retropa 怎样判定每一次触摸、按下去是什么手感，以及手柄、连发和声音。",
    sections: [
      {
        id: "adaptive-touch", plus: true, lab: true,
        title: "固定热区，还是自适应热区",
        body: "屏幕上的每个按键都有一块热区，也就是算作按下的范围。传统热区是固定的判定框，清晰稳定，但按在两个键之间的缝隙里就什么也不会发生。自适应触控热区会重新规划热区，把缝隙补上；把你这次按的位置和刚才正在按的键结合起来判断，并随时间让结果保持稳定。热区会在有限范围内向你拇指真正落下的位置偏移，停下不玩后再慢慢回到默认布局。",
        points: [
          "皮肤的画面不会移动，变的只是触摸被判定成哪个键。",
          "十字键把斜方向判定为扇形区域，向下方向留出更大的余量；和面键重叠时，优先让给面键。",
          "想要完全确定的判定框，可以随时换回固定热区。",
        ],
        shot: { name: "hotzone-adaptive", alt: "热区配置页，已选择自适应触控热区与 Shooter 手感风格" },
      },
      {
        id: "touch-styles", plus: true,
        title: "五种手感风格，还能按游戏单独设置",
        body: "手感风格按游戏类型的玩法调校自适应引擎。可以所有游戏共用一种，也可以在游戏内菜单的 Control 里，给某一个游戏单独设置热区模式和风格。",
        table: {
          head: ["风格", "适合"],
          rows: [
            ["Platformer", "平台跳跃：走位精确、起跳时机要准"],
            ["Shooter", "射击与跑射：需要快速换向、按住连射不丢"],
            ["Fighting", "格斗：连续搓招时需要更宽容的边缘"],
            ["Action", "高压动作游戏：吸附要快，按住也要稳"],
            ["Rhythm", "节奏类：高频连点、节拍稳定"],
          ],
        },
        points: ["进阶玩家还能自由组合手感基底和辅助风格，比如用 Cliff Plateau 得到硬边界，或用 Contact Dilation 让捕获范围随按压面积扩大。"],
        shot: { name: "hotzone-fighting", alt: "热区配置页，显示 Fighting 手感风格" },
      },
      {
        id: "haptics", plus: true,
        title: "逐键调校的触感",
        body: "打开波形模式后，每个键在按下和松开时都会播放自己的 Core Haptics 波形。Game Boy、Game Boy Color、GBA、NES 和超级任天堂各带四套触感包：Classic、Best、Soft 和 Retropa。Curve Studio 可以调整一次按压在时间上的强度与锐度，按键级覆盖还能让某一个键的手感和其他键不同。",
        points: [
          "不开波形模式时，使用简单触感。",
          "支持的设备上可以开启音频触感同步。",
          "iPad 没有触感引擎，触感是 iPhone 上的体验。",
        ],
        shot: { name: "haptics-curve", alt: "Curve Studio 正在编辑触感预设的强度曲线" },
      },
      {
        id: "controllers",
        title: "手柄：还没开口，键位已经配好",
        body: "在 iOS 设置里配对手柄后，Retropa 会识别它、显示对应的手柄图，并套用 Xbox、DualSense 或 DualShock、任天堂或 8BitDo 布局的内置模板。每个受管手柄都有自己的位置和映射配置，重新连上不用再设。映射中心会在你按下实体按键时实时高亮，任何键位都可以改。",
        points: [
          "手柄支持时会有震动；DualSense 在可用时会使用自适应扳机。",
          "多个手柄各用各的配置需要 Retropa Plus。",
          "Console Mode 下，画面送到电视或显示器，iPhone 继续当手柄用。",
        ],
        shot: { name: "gamepads", alt: "手柄页，列出一个受管手柄及其位置" },
      },
      {
        id: "turbo", plus: true,
        title: "连发，只开在你想要的地方",
        body: "连发有一个总开关，并能为每个主机的每个键单独开关。单个游戏还可以覆盖主机的设置，比如射击游戏只给 B 开连发，其他按键保持单发。",
        shot: { name: "turbo", alt: "NES 连发按键设置，A 和 B 已开启" },
      },
      {
        id: "buttons",
        title: "十字键与按键行为",
        body: "按键设置里可以选择十字键的方向模式和按键行为，设置会一直保留。皮肤没有某个主机或方向的布局时，Retropa 会绘制备用按键，布局和样式都可以选。",
      },
      {
        id: "speed-and-sound",
        title: "快进与声音",
        body: "按住快进键可以临时加速，倍率在模拟设置里调整。开启「快进时保持音调」，节奏加快时人声和音乐也不会变调。",
        points: [
          "十七种音频效果需要 Retropa Plus：Auto Gain、Chorus、Crunch、Frequency Shifter、Headphone Spatializer、Limiter、Slew Rate Limiter、Noise Floor Injector、Channel Crosstalk、DC Offset + Asymmetric Clipping、BitCrusher、Haas Widener、Bass Mono-izer、Tape Saturation、Psychoacoustic Bass、Reverb 和 GBA SP Speaker Model。",
          "效果按你设定的顺序，在声音送到扬声器之前处理。",
        ],
        shot: { name: "audio", alt: "音频设置：快进保持音调与音频效果" },
      },
    ],
    faqTitle: "操控常见问题",
    faqs: [
      { id: "adaptive-moves-buttons", question: "自适应触控会移动屏幕上的按键吗？", answer: "不会。皮肤完全按设计绘制。自适应触控改变的是一次触摸被算成哪个键：补上按键之间的缝隙，并跟随你拇指习惯落下的位置。" },
      { id: "per-game", question: "能让某个游戏用和其他游戏不同的操控吗？", answer: "可以。在游戏内菜单打开 Control，就能只为这个游戏选择固定或自适应热区，以及连发按键。其他游戏继续使用全局设置。" },
      { id: "which-controllers", question: "哪些手柄可以用？", answer: "iOS 游戏手柄框架支持的手柄都可以，包括 Xbox、DualSense 与 DualShock、任天堂和 8BitDo 的型号。先在 iOS 里配对，Retropa 会套用对应模板，你也可以在映射中心修改。" },
      { id: "ipad-haptics", question: "为什么 iPad 上感觉不到触感？", answer: "iPad 没有触感引擎。波形触感、触感包和 Curve Studio 都是为 iPhone 设计的。" },
      { id: "free-vs-plus", question: "哪些操控功能需要 Retropa Plus？", answer: "固定热区、手柄支持与键位映射、按键设置和快进都免费。自适应触控与手感风格、自定义触感、连发、多手柄配置和音频效果需要 Retropa Plus。方案与价格以 App 内显示为准。" },
    ],
    related: "继续阅读",
  },
  import: {
    metaTitle: "把游戏带进 Retropa：文件、Wi‑Fi Portal、BIOS 与街机包",
    description: "把自己的游戏放进 Retropa 的所有方法：「文件」App、隔空投送、Wi‑Fi Portal、内置浏览器与 Homebrew 目录，以及各系统格式、BIOS、街机包、存档与封面。",
    label: "导入",
    eyebrow: "导入",
    title: "把游戏带进来，四条路。",
    intro: "Retropa 不内置任何游戏，也不提供 BIOS。这一页讲清楚把自己的游戏放进来的每一种方法、每个系统接受哪些文件，以及游戏提示缺东西时该怎么办。",
    sections: [
      {
        id: "files",
        title: "从「文件」App、隔空投送或其他 App",
        body: "在游戏内菜单打开 Importer，选择 Select Files。可以一次选一个或多个文件，ZIP 包和 Retropa 资源包也可以。每次导入都会生成结果卡片，写明新增、跳过或被拒绝了什么；失败时会给出下一步。",
        points: [
          "Game Boy、GBA、NES、超级任天堂以及 ZIP、7Z 文件，还能从隔空投送或其他 App 的分享菜单直接用 Retropa 打开。",
          "文件在 iCloud 云盘里时，先等它下载完成；只有占位符的文件无法导入。",
          "改扩展名不会改变文件属于哪个系统。",
        ],
        shot: { name: "import-center", alt: "Retropa 导入中心，列出支持的格式" },
      },
      {
        id: "portal",
        title: "用电脑通过 Wi‑Fi 传",
        body: "在游戏内菜单选择 Portal 并启动，Retropa 会显示一个局域网地址。用同一 Wi‑Fi 下任意电脑的浏览器打开它，把游戏、ZIP 包、7Z 街机包、Retropa 资源包和皮肤拖进 Import 页即可，混在一起选也没问题。Portal 还能在大屏上管理游戏库、BIOS、存储空间、皮肤和设置。",
        points: [
          "Portal 只响应局域网内的设备。用完记得停止。",
          "传输时请让 Retropa 保持在前台；进入后台后 iOS 可能会挂起 Portal。",
        ],
        shot: { name: "portal-library", alt: "在桌面浏览器中打开的 Retropa Portal 游戏库" },
      },
      {
        id: "browser",
        title: "用内置浏览器",
        body: "在菜单里打开 Browser，访问提供你有权下载的文件的网站，照常下载即可。Retropa 会接管 ROM 和 ZIP 下载，送进导入流程，然后删除临时文件。常用网站可以收藏，下载进度在下载中心查看。",
      },
      {
        id: "homebrew",
        title: "从 Homebrew 目录",
        body: "目录里是 Retropa 支持的各个系统上的 Homebrew、公有领域和可再分发的演示游戏。选一款，它会自己下载并导入。在导入自己的游戏库之前，这是试皮肤、滤镜和手感的最快方式。",
      },
      {
        id: "formats",
        title: "各系统的文件格式",
        body: "每个系统接受各自的文件类型。掌机和主机游戏也可以装在 ZIP 或 7Z 压缩包里导入；街机包保持原样压缩，不要解压。",
        table: {
          head: ["系统", "文件"],
          rows: [
            ["Game Boy Advance", ".gba"],
            ["Game Boy · Game Boy Color", ".gb .gbc"],
            ["Nintendo DS（Beta）", ".nds"],
            ["NES", ".nes .fds .unf .unif .nsf .nsfe"],
            ["超级任天堂", ".sfc .smc .swc .fig .bs .st"],
            ["Genesis · Mega Drive", ".md .gen .smd"],
            ["Master System · Game Gear", ".sms .gg"],
            ["WonderSwan · Color", ".ws .wsc"],
            ["Neo Geo Pocket · Color", ".ngp .ngpc .ngc"],
            ["街机", ".zip .7z（.cps1）"],
            ["Retropa 资源包与皮肤", ".retropack .retropaskin"],
          ],
        },
      },
      {
        id: "bios",
        title: "BIOS 文件",
        body: "Game Boy、GBA、NES 和超级任天堂的默认核心不需要 BIOS，一部分备选核心和系统会用到。设置 › 模拟 › 核心 › BIOS 管理按使用它的核心列出每个 BIOS，并标明已安装或缺失。游戏需要你还没添加的文件时，Retropa 会在启动时停下，直接带你去对应的条目。",
        table: {
          head: ["BIOS", "使用者", "文件"],
          rows: [
            ["GBA BIOS", "JGenesis、ares（GBA 备选核心）", ".bin .rom .bios"],
            ["Neo Geo Pocket · Color BIOS", "ares", ".bin .rom .bios"],
            ["NDS BIOS", "SkyEmu", ".bin .rom"],
            ["GB · GBC 启动 ROM（可选）", "SameBoy", ".bin .rom"],
            ["街机 BIOS", "街机，例如 QSound、Neo Geo 或 PGM", "压缩包或 ROM 文件"],
          ],
        },
        points: ["一个系统的 BIOS 不能代替另一个系统的 BIOS。", "Retropa 不提供 BIOS 文件。"],
        shot: { name: "bios", alt: "BIOS 管理页，按核心分组，每项显示缺失" },
      },
      {
        id: "arcade",
        title: "街机包",
        body: "街机游戏以 ZIP 或 7Z 压缩包的形式导入，文件名就是游戏的包名。克隆版可能还需要它的父版本，一些基板还需要共享的 BIOS 包。请保持压缩包完整，不要解压。",
        points: [
          "包不完整时，Retropa 会列出具体缺少的文件名，提示你把它们补进正确的压缩包后重新导入。",
          "dl-1425.bin、qsound.bin 这类 QSound 文件按街机 BIOS 处理，和游戏本身的文件分开。",
          "CPS III 使用 NO-CD 包。运行街机游戏需要 Retropa Plus。",
        ],
      },
      {
        id: "saves-and-covers",
        title: "存档与封面",
        body: "游戏内存档和即时存档都跟着各自的游戏。即时存档属于生成它的核心，切换核心后它们仍在磁盘上，但在另一个核心里看不到。云存档可以用 iCloud 云盘备份和恢复存档数据，存档文件也可以导入导出。",
        points: [
          "封面按文件本身的哈希值在离线游戏数据库里匹配，大多数游戏库会自己补齐。",
          "Cover Harvester（Retropa Plus）可以从网页上挑选封面，Portal 里还能修改标题和元数据。",
        ],
      },
    ],
    faqTitle: "导入常见问题",
    faqs: [
      { id: "many-files", question: "能一次导入很多游戏吗？", answer: "可以。「文件」选择器支持多选，Portal 也接受游戏、ZIP 包、7Z 街机包和资源包混在一起拖入。" },
      { id: "unzip", question: "导入前需要解压吗？", answer: "不需要。Retropa 可以导入 ZIP 和 7Z 压缩包。街机包请保持原样。" },
      { id: "files-not-importing", question: "为什么「文件」里能看到游戏，却导入不了？", answer: "通常是 iCloud 占位文件还没下载完，或者是另一个系统的格式。等下载完成，对照上面的表格检查扩展名，再看结果卡片里写的具体原因。" },
      { id: "bios-where", question: "BIOS 文件放在哪里？", answer: "设置 › 模拟 › 核心 › BIOS 管理，或 Portal 的 BIOS 页。每个文件都会按使用它的核心校验。" },
      { id: "portal-safety", question: "谁能访问 Wi‑Fi Portal？", answer: "只有同一局域网内的设备。来自局域网外的请求会被拒绝。传完文件后请停止 Portal。" },
      { id: "where-games", question: "Retropa 自带游戏或 BIOS 吗？", answer: "不带。请只导入你有权使用的文件，或者先从 Homebrew 目录里免费、合法发行的游戏开始。" },
    ],
    related: "继续阅读",
  },
}
