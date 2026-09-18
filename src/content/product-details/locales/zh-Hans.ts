import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "iPhone 与 iPad 的 GBA 模拟器",
    "label": "GBA",
    "image": "material",
    "summary": "把你拥有的 .gba 文件导入 Retropa。先运行游戏，再挑选掌机皮肤、连接手柄，找到记忆里的屏幕观感。",
    "imageAlt": "Retropa 产品展示图：横屏与竖屏掌机操作布局",
    "sections": [
      {
        "title": "从一个 .gba 文件开始",
        "body": "Retropa 可在 iOS 18 或更新版本的 iPhone、iPad 上运行受支持的 GBA 游戏。App 免费下载，但不附带游戏和 BIOS。请使用你有权使用的文件，并在 App 外保留原始备份。",
        "points": [
          "GBA 游戏通常使用 .gba 扩展名。",
          ".gb、.gbc 分别属于 GB、GBC，不是 GBA 文件。",
          "修改后缀不会把游戏转换成另一个系统。"
        ]
      },
      {
        "title": "从“文件”导入到游戏库",
        "body": "先确认文件已下载到本机，而不只是云盘中的占位条目。从 Retropa 游戏库打开导入入口，选中游戏文件。导入后直接打开，先确认画面、声音和默认按键正常，再调整个性化布局。"
      },
      {
        "title": "选一套适合 GBA 的操作布局",
        "body": "GBA 需要方向键、A/B、肩键、Start 和 Select。选皮肤时，除了看材质，也要实际检查每个按键。Retropa 支持导入 .deltaskin，但 DS 皮肤不能代替 GBA 布局，横竖屏支持也取决于资源包本身。",
        "points": [
          "在常用方向下确认游戏视窗没有被遮挡。",
          "实体手柄先在 iOS 配对，再到 Retropa 核对映射。",
          "高级皮肤与高级滤镜需要 Plus，导入文件不会解锁付费功能。"
        ]
      },
      {
        "title": "清晰像素，还是掌机液晶的质感",
        "body": "先用原始画面作参照。轻量 LCD 效果可以带回掌机屏幕的感觉，CRT 则是另一种显示风格。Retropa 高级滤镜会适应实际输出区域，不要求固定整数倍缩放。滤镜改变显示方式，不改变游戏原始分辨率，也不能修复文件兼容问题。"
      },
      {
        "title": "导入或存档失败时先检查什么",
        "body": "先核对文件后缀、游戏系统和具体错误。如果“文件”尚未下载完原始资源，先完成下载再重试。BIOS 要求以选中核心的提示为准，街机 neogeo.zip 不能用作 GBA BIOS。游戏自身存档与模拟器即时存档是不同制品，不要靠改后缀互相转换；切换核心或 App 前保留备份。",
        "points": [
          "排查操作或显示问题时，先回到默认皮肤和轻量滤镜。",
          "联系支持时提供 App 版本、系统、核心和错误信息。",
          "不要附带商业 ROM 或 BIOS 文件。"
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "查看 GBA 核心与支持的文件"
  },
  "ds-emulator": {
    "title": "iPhone 与 iPad 的 DS 模拟器",
    "label": "DS",
    "image": "library",
    "summary": "将你拥有的 .nds 游戏导入 Retropa，为上下双屏留出舒适的位置。先检查触控、按键和文件要求，再选择皮肤与滤镜。",
    "imageAlt": "Retropa 产品展示图：iPhone 上的游戏库与设置",
    "sections": [
      {
        "title": "准备好 .nds 游戏文件",
        "body": "DS 与 GBA 是不同系统。Retropa 在 iOS 18 或更新版本的 iPhone、iPad 上支持 DS 的 .nds 文件。请仅使用你有权使用的文件，并保留独立备份。App 不提供 ROM 或 BIOS 下载，也不能通过改名把 .gba 转换成 DS 游戏。"
      },
      {
        "title": "导入后，检查两个屏幕",
        "body": "先在“文件”中把游戏下载到本机，再通过 Retropa 游戏库的导入入口选择它。用默认布局打开游戏，确认两块显示区域都可见，并在需要触控的游戏环节实际操作。只看到标题画面，并不能证明每种输入都可用。",
        "points": [
          "确认 .nds 文件对应的系统识别或选择正确。",
          "如果当前核心提示 BIOS 或固件要求，按该提示准备。",
          "排查过程中始终保留原始文件。"
        ]
      },
      {
        "title": "给触摸屏留下足够的位置",
        "body": "双屏需要不同于单屏掌机的布局。选择能完整显示两块屏幕与必要按键的 DS 皮肤。竖屏适合自然上下排列，横屏是否可用取决于皮肤提供的布局。在实际游玩的尺寸下检查小触控目标，尤其是屏幕较小的 iPhone。"
      },
      {
        "title": "实体手柄不等于所有触控输入",
        "body": "Retropa 支持兼容的外接手柄与按键映射。先在 iOS 配对，再到 App 核对操作分配。实体方向键和动作键不会自动替代游戏中的触摸屏交互，决定仅用手柄游玩前，先确认这些环节如何完成。"
      },
      {
        "title": "先让第一局简单地跑起来",
        "body": "确认游戏与输入兼容后，再应用复杂着色器。如果选择滤镜后画面或帧节奏发生变化，先退回轻量预设进行对比。设备、核心和输出尺寸都会影响表现；支持 DS 不代表所有游戏与手机都有完全相同的效果。",
        "points": [
          "高级皮肤与高级滤镜需要 Retropa Plus。",
          "保留游戏存档与即时存档备份，它们不是可随意互换的格式。",
          "联系支持时提供 App 版本、核心与具体错误，不发送游戏或 BIOS 文件。"
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "查看 DS 核心与支持的文件"
  },
  "arcade": {
    "title": "iPhone 与 iPad 街机模拟器",
    "label": "街机",
    "image": "library",
    "summary": "在 Retropa 重玩受支持的 CPS、Neo Geo、PGM 与 M92 街机，搭配触控、实体手柄与 CRT 滤镜。运行街机需要 Plus；App 不附带游戏或 BIOS。",
    "imageAlt": "Retropa 产品展示图：游戏库与设置界面",
    "sections": [
      {
        "title": "CPS、Neo Geo 与街机基板",
        "body": "Retropa 支持的街机家族包括 CPS I、CPS II、CPS III、Neo Geo、PGM 和 M92。请按游戏匹配已安装核心所需的基板与 ROM set；支持一个家族，不代表任意压缩包都能运行。",
        "points": [
          "先在 App 内确认系统，再选择文件。",
          "运行街机需要 Retropa Plus。",
          "Retropa 不提供商业游戏 ROM 或 BIOS。"
        ]
      },
      {
        "title": "Neo Geo 街机与 Neo Geo Pocket 不同",
        "body": "Neo Geo 街机与 Neo Geo Pocket 掌机是不同系统，不能混用游戏文件。如果街机游戏提示缺少 Neo Geo BIOS，可在 Retropa 的街机 BIOS 管理中导入所需的 neogeo.zip，再尝试启动。Pocket ROM 或改名后的 ZIP 不能替代它。",
        "points": [
          "仅使用你有权使用的 BIOS，Retropa 不提供下载。",
          "BIOS 不能补齐缺失的游戏、父集或克隆集数据。",
          "先核对具体错误，修改文件前保留原始压缩包。"
        ]
      },
      {
        "title": "街机 ZIP 与单个掌机 ROM 不同",
        "body": "掌机 ROM 通常是一个游戏镜像，街机 set 可能由多个芯片文件组成，还可能依赖父集或 BIOS。把无关文件改成 .zip 后缀不会获得兼容性。除非导入流程明确要求解压，否则保留压缩包原样。"
      },
      {
        "title": "无法启动时先查什么",
        "body": "先查看选中的基板和 Retropa 给出的错误，再核对 set 是否完整、需要的 BIOS 或父集是否存在。单独的克隆集可能不含核心需要的全部文件。缺少 ROM 数据时，换滤镜或皮肤无法解决问题。",
        "points": [
          "排查时保留原文件。",
          "联系支持时提供 App 版本、系统与错误内容。",
          "不要在支持请求中发送商业 ROM 或 BIOS。"
        ]
      },
      {
        "title": "把第一局的操作检查完整",
        "body": "启动成功后，确认投币、开始和动作键的位置。使用外接手柄时，同时检查映射与屏幕提示。先用简单的显示预设确认游戏和输入正常，再选择喜欢的 CRT 观感。"
      }
    ],
    "link": "/cores/",
    "linkLabel": "查看系统与核心目录"
  },
  "delta-skins": {
    "title": "在 iPhone 与 iPad 上导入 Delta 皮肤",
    "label": "皮肤",
    "image": "material",
    "summary": "不只是换一张背景。Retropa 支持导入 .deltaskin，也提供自己的皮肤资源，让游戏画面、方向键与操作按钮一起适应你的 iPhone 和 iPad。",
    "imageAlt": "Retropa 产品展示图：不同材质的横屏与竖屏掌机控制布局",
    "sections": [
      {
        "title": "皮肤也是一套操作布局",
        "body": "游戏视窗、方向键、动作键和菜单入口都需要位置。选皮肤时，先看它适用的系统与屏幕方向，再看颜色和材质。布局合适，才不会在游玩时遮挡画面或找不到按键。",
        "points": [
          "导入前确认皮肤面向的游戏系统。",
          "是否支持横竖屏，取决于资源包提供的布局。",
          "支持文件格式，不代表每款第三方皮肤都适配所有设备。"
        ]
      },
      {
        "title": "导入 .deltaskin 资源包",
        "body": "保留原始文件，从 Retropa 的皮肤导入入口打开“文件”，选择完整的 .deltaskin 包。导入后，为对应系统选择皮肤。先运行一款游戏，检查画面位置、方向键及动作键，再决定是否长期使用。",
        "points": [
          "需要的是完整资源包，不是一张皮肤截图。",
          "导入失败时先检查格式和目标系统，再尝试其他布局。",
          "关键按键被挡住时，先切回可用皮肤。"
        ]
      },
      {
        "title": "触控布局与实体手柄各有分工",
        "body": "Retropa 支持兼容的外接手柄和按键映射。先在 iOS 中完成配对，再到 App 内核对操作。皮肤解决屏幕上的布局与观感，手柄配置解决实体按键的对应关系，换一张皮肤不能代替映射检查。"
      },
      {
        "title": "资源与付费边界",
        "body": "可在 PackHub 浏览 Retropa 皮肤资源。高级皮肤需要 Plus，导入资源包不会绕过权益检查。购买前请以 App 内的方案和资源要求为准。Delta 兼容指文件格式支持，不代表与 Delta 项目存在关联。"
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "在 PackHub 浏览皮肤"
  },
  "crt-filters": {
    "title": "iPhone 与 iPad 模拟器的 CRT 滤镜",
    "label": "滤镜",
    "image": "filter",
    "summary": "Retropa 高级 CRT 与 LCD 滤镜适应实际显示区域，无需整数倍缩放。不同尺寸的 iPhone、iPad、横竖屏与皮肤布局，都可以保留复古屏幕的细腻观感。",
    "imageAlt": "Retropa 产品展示图：滤镜选择界面与 CRT 显示效果",
    "sections": [
      {
        "title": "先选屏幕特征，再调画面",
        "body": "最近邻保留清晰的像素边界；CRT 效果通过扫描线、荫罩和边缘明暗塑造观感；LCD 效果强调像素与子像素结构。它们改变的是显示方式，不会增加游戏原本的分辨率。",
        "points": [
          "先用原始画面作为参照。",
          "除了标题画面，也看看小字、亮边和暗部。",
          "在实际游玩的方向和画面尺寸下判断效果。"
        ]
      },
      {
        "title": "不必锁定整数倍缩放",
        "body": "整数倍缩放让一个游戏像素对应整数个显示像素，适合追求整齐的最近邻像素边界，但也可能留下更多空白。Retropa 高级滤镜会考虑实际输出区域，其显示结构不要求固定在 2 倍、3 倍等整数倍率。你可以保留游戏宽高比，同时选择更适合手机或皮肤的视窗大小。",
        "points": [
          "CRT V4 结合输出像素覆盖范围重建电子束，并对荧光结构进行解析滤波。",
          "Trinitron 使用积分扫描束与带限阴栅谐波。",
          "DMG 对液晶像素单元覆盖范围积分，而不是简单采样一层网格。"
        ]
      },
      {
        "title": "不只是叠一层扫描线",
        "body": "CRT Lite、LCD Grid、Scanline 提供轻量显示处理；高级预设则模拟更多显示设备特征，如电子束宽度、荧光透射或反射式液晶材质。直接采样的网格在非整数倍率下可能出现不均匀纹理，按输出像素积分有助于让难以分辨的细节自然融合。这不代表所有常规滤镜都必须整数缩放，也不承诺每种设备与预设永远没有显示伪影。"
      },
      {
        "title": "网页电视展示了什么",
        "body": "电视中可比较基础滤镜，以及基于原生公式的 CRT V4、Trinitron V1、DMG。高级模式移植了输出像素积分等部分公式，并共用一致的展示曲面。网页省略时序残影、完整多阶段光晕及原生色彩管理，用于展示显示特征，不是 Metal 输出的逐像素复刻，也不是真实游玩实录。"
      },
      {
        "title": "导入 RetroArch 着色器预设",
        "body": ".slangp 可能引用多个着色阶段、纹理和参数，导入时需要保留这些依赖。一个预设文件不一定是完整资源包；.slang 则描述着色器本身，而不是整个滤镜集合。",
        "points": [
          "使用面向受支持工作流的资源包。",
          "无法加载时先检查依赖文件与兼容性，不要先更换游戏。",
          "复杂滤镜影响帧率或耗电时，先试更轻的预设。"
        ]
      },
      {
        "title": "画面细节也有运行成本",
        "body": "多阶段滤镜通常比最近邻显示需要更多 GPU 工作。实际表现取决于设备、模拟器核心、输出尺寸和预设，不能保证每个导入滤镜在所有 iPhone 上表现相同。高级滤镜需要 Plus，可用选项以 App 内为准。"
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "在 PackHub 浏览滤镜"
  }
}
