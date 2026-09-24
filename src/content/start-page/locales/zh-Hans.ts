import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  metaTitle: "Retropa 游戏导入指南 | GBA、DS 与街机",
  description: "在 iPhone 和 iPad 上导入 GBA、DS 与街机游戏。了解 ROM、BIOS、Delta 皮肤、手柄、存档、Plus 与无需整数倍缩放的高级滤镜。",
  "title": "在 Retropa 开始第一局。",
  "intro": "从你拥有的游戏文件开始。先选择一个支持的掌机系统，成功运行后，再慢慢调整按键、皮肤和画面。",
  "steps": [
    [
      "下载 Retropa",
      "在运行 iOS 18 或更新版本的 iPhone、iPad 上，从 App Store 下载 Retropa。App 免费下载，部分功能需要 Plus。"
    ],
    [
      "导入游戏文件",
      "从游戏库打开导入入口，在“文件”中选择支持的 ROM。GBA 使用 .gba 文件，DS 使用 .nds 文件。请保留原文件作为备份。Retropa 不提供 ROM 或 BIOS。"
    ],
    [
      "从游戏库开始游玩",
      "选择刚导入的游戏，先确认画面和默认按键正常，再调整皮肤和滤镜。如果无法启动，请检查系统、文件格式及必要的 BIOS。"
    ]
  ],
  "faqTitle": "开始前，你可能想知道",
  "systems": "查看支持的系统",
  "support": "需要帮助？",
  "faqs": [
    {
      "id": "devices",
      "question": "哪些 iPhone 和 iPad 可以运行 Retropa？",
      "answer": "Retropa 可通过 App Store 安装在运行 iOS 18 或更新版本的 iPhone 和 iPad 上，具体设备兼容性请查看商店页面。复杂街机核心和多阶段显示滤镜可能比简单掌机游戏需要更多性能。"
    },
    {
      "id": "systems",
      "question": "Retropa 支持 GBA、Nintendo DS 和街机游戏吗？",
      "answer": "Retropa 支持 GBA、DS 及目录中列出的其他掌机、主机系统，也支持 CPS、PGM、M92 等街机家族。实际兼容性取决于安装的 App、核心与游戏格式，支持一个系统不代表任意游戏或压缩包都能运行。",
      "link": "cores",
      "linkLabel": "查看支持系统与文件格式"
    },
    {
      "id": "games",
      "question": "Retropa 自带游戏或提供 ROM 下载吗？",
      "answer": "不提供。Retropa 是模拟器，不是商业游戏订阅或 ROM 商店。请使用你有权使用的内容，例如自己的作品或经作者授权分发的自制游戏。App 不附带商业游戏 ROM 或 BIOS。"
    },
    {
      "id": "import",
      "question": "如何在 iPhone 上导入 GBA 或 DS 游戏？",
      "answer": "先把游戏文件保存在 iOS“文件”App 可访问的位置，再从 Retropa 游戏库打开导入入口，选择受支持的文件。导入完成后从游戏库启动。GBA 使用 .gba，DS 使用 .nds；修改其他文件的后缀并不能转换游戏格式。",
      "link": "import",
      "linkLabel": "查看全部导入方式"
    },
    {
      "id": "bios",
      "question": "使用 Retropa 需要 BIOS 文件吗？",
      "answer": "是否需要 BIOS 取决于系统和核心。如果 Retropa 提示缺少 BIOS，请核对该系统的要求，并通过 App 支持的流程提供正确文件。其他系统的 BIOS 不能替代，Retropa 也不提供 BIOS 下载。",
      "link": "cores",
      "linkLabel": "核对系统要求"
    },
    {
      "id": "arcade-zip",
      "question": "为什么街机 ZIP 或 ROM set 无法运行？",
      "answer": "街机文件需要匹配核心要求的基板和 ROM set。部分游戏还依赖父集或 BIOS，单独的克隆集可能不完整。除非 App 要求解压，否则保留压缩包原样。运行街机还需要 Plus，但购买会员不能修复缺失或不兼容的 ROM 数据。"
    },
    {
      "id": "missing-file",
      "question": "为什么在“文件”里看得到游戏，却无法导入？",
      "answer": "先确认文件已实际下载到本机，而不只是云端占位，再核对格式是否对应受支持的系统，并查看 Retropa 显示的错误。排查时保留原文件，不要把改名后的 ZIP 或未下载完整的内容当成有效 ROM。"
    },
    {
      "id": "offline",
      "question": "本地游戏需要通过云端串流才能玩吗？",
      "answer": "不需要通过云模拟器串流画面，Retropa 在设备上运行受支持的游戏文件。先准备好需要的游戏和 BIOS。下载资源、获取在线信息及使用云功能仍需要各自的网络连接。"
    },
    {
      "id": "delta-skins",
      "question": "Retropa 可以使用 Delta 皮肤吗？",
      "answer": "Retropa 支持导入完整的 .deltaskin 包。请为对应系统选择皮肤，并检查横竖屏布局。支持格式不代表每款第三方皮肤都适配所有 iPhone。Delta 兼容指文件格式支持，不代表与 Delta 项目存在关联。",
      "link": "delta-skins",
      "linkLabel": "阅读 Delta 皮肤导入指南"
    },
    {
      "id": "controllers",
      "question": "Retropa 支持蓝牙或外接游戏手柄吗？",
      "answer": "支持兼容的外接手柄与自定义按键映射。先通过 iOS 连接，再到 Retropa 中检查按键；街机游戏还需确认投币和开始键。具体兼容性取决于手柄及 iOS 的支持情况。",
      "link": "controls",
      "linkLabel": "了解操控与手柄"
    },
    {
      "id": "saves",
      "question": "游戏内存档和模拟器即时存档有什么区别？",
      "answer": "游戏内存档由游戏自身创建，即时存档则记录模拟器运行状态。即时存档可能依赖具体核心与版本，不能默认在不同 App 或核心间通用。迁移或替换存档前，请保留原文件与备份。"
    },
    {
      "id": "plus",
      "question": "Retropa 免费吗？Plus 解锁哪些功能？",
      "answer": "Retropa 免费下载，街机核心、高级皮肤与高级滤镜需要 Plus。购买前可在 App 内查看当前方案、地区价格和购买条款。免费下载不代表所有核心或资源都免费。"
    },
    {
      "id": "restore",
      "question": "如何恢复之前购买的 Retropa Plus？",
      "answer": "使用原购买所用的 Apple 账户，在 App 内执行恢复购买，并确认购买或订阅仍有效。恢复权益不会找回缺失的 ROM 或游戏存档。联系支持时提供 App 版本及购买问题，不要发送账户密码。"
    },
    {
      "id": "advanced-filters",
      "question": "Retropa 高级滤镜与普通 CRT 滤镜有什么不同？",
      "answer": "简单滤镜通常直接叠加采样扫描线或像素网格。Retropa CRT V4、Trinitron 等高级预设通过输出像素积分或带限滤波处理电子束与荧光结构；DMG 则包含液晶像素单元积分和反射基底。它们模拟的是显示设备特征，不只是换一种色调。",
      "link": "crt-filters",
      "linkLabel": "对比高级显示滤镜"
    },
    {
      "id": "integer-scaling",
      "question": "Retropa 高级滤镜必须使用整数倍缩放吗？",
      "answer": "不需要。高级滤镜会考虑实际输出尺寸，无需把画面固定在 2 倍、3 倍等整数倍率。你可以更自由地利用手机、横竖屏或不同皮肤中的游戏区域，并保留原始宽高比。最终效果仍与预设和设备有关，滤镜不会增加游戏源分辨率。",
      "link": "crt-filters",
      "linkLabel": "了解非整数倍率显示"
    },
    {
      "id": "shader-import",
      "question": "Retropa 支持 RetroArch 的 .slang 和 .slangp 滤镜吗？",
      "answer": "支持相应着色器工作流。.slangp 可能引用多个阶段或纹理，导入时请保留完整依赖。不能保证所有第三方预设都兼容；加载失败时先检查资源文件和兼容性，不要通过改后缀或更换游戏来处理。",
      "link": "crt-filters",
      "linkLabel": "阅读着色器兼容说明"
    },
    {
      "id": "performance",
      "question": "高级滤镜会影响帧率或耗电吗？",
      "answer": "可能会。多阶段渲染通常比原始画面需要更多 GPU 工作，实际成本与预设、输出尺寸、设备及模拟器核心有关。遇到卡顿时可对比原始画面，再尝试轻量滤镜。无需整数倍缩放是显示品质能力，不代表无限的 GPU 性能。"
    },
    {
      "id": "packages",
      "question": "在哪里获取 Retropa 皮肤和滤镜资源？",
      "answer": "可在 PackHub 浏览皮肤和着色器资源包，并在 App 内核对系统、格式及 Plus 要求。导入资源不会绕过权益检查。需要帮助时可提供 App 版本、资源名称与错误内容，但请不要发送商业 ROM 或 BIOS。"
    }
  ]
}
