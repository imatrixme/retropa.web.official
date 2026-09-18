import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "iPhone 与 iPad 的 Game Boy 模拟器 | Retropa",
    "description": "用 Retropa 在 iPhone 和 iPad 上运行你自己的 .gb 文件。了解哪个核心负责 GB、如何导入游戏、如何调整画面与按键，以及打不开时该检查什么。",
    "summary": "Retropa 用你自己的 .gb 文件在 iPhone 与 iPad 上运行 Game Boy 游戏，提供三个可切换核心、掌机皮肤、LCD 与 CRT 画面处理以及手柄映射。",
    "sections": [
      {
        "title": "先准备一个 .gb 文件",
        "body": "Retropa 播放的是你自己拥有的 Game Boy 游戏文件。App 免费下载，但不附带游戏与 BIOS，请先准备好游戏文件，并在 App 外保留一份未修改的备份。",
        "points": [
          ".gb 是 Game Boy 游戏，.gbc 属于 Game Boy Color。",
          "改后缀不会把游戏变成另一个系统。",
          "在游戏正常运行前，保留原始压缩包。"
        ]
      },
      {
        "title": "哪个核心负责 Game Boy",
        "body": "Retropa 内置多个可以运行 Game Boy 游戏的核心，并且可以逐个游戏切换。mGBA 与 SkyEmu 同时覆盖 GB、GBC 与 GBA，SameBoy 则专门面向 GB 与 GBC。如果某个核心在特定游戏上出现问题，先换一个核心再判断文件是否损坏。",
        "points": [
          "日常游玩可以先从 mGBA 开始。",
          "SameBoy 侧重 GB 与 GBC 的准确性。",
          "所选核心按游戏分别记忆。"
        ]
      },
      {
        "title": "从「文件」导入游戏",
        "body": "先确认文件已经下载到本机，而不只是「文件」App 里的云端占位条目。打开 Retropa 游戏库的导入入口并选中游戏。导入后先直接打开，确认画面、声音和默认屏幕按键正常，再开始个性化调整。"
      },
      {
        "title": "选一套贴合原始屏幕的布局",
        "body": "Game Boy 需要方向键、A/B 键以及 Start 和 Select。竖屏把屏幕放在按键上方，适合单手操作；横屏留给按键的空间更大。请确认两种方向下游戏视窗都没有被皮肤遮挡，并且六个输入都能按到。",
        "points": [
          "不要只看材质，要逐个试按键。",
          "可以导入 Delta 的 .deltaskin 包，但 DS 或 GBA 皮肤不能当 GB 布局用。",
          "高级皮肤与高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "绿屏、液晶网格还是干净像素",
        "body": "先用原始画面作为参照。DMG 预设还原初代掌机的四色反射式液晶，LCD Grid 增加子像素结构，CRT 处理则是另一种观感。Retropa 高级滤镜按实际输出区域处理，不要求固定整数倍缩放，因此在不同尺寸的 iPhone 与 iPad 上都能保持比例。",
        "points": [
          "滤镜改变显示方式，不改变游戏原始分辨率。",
          "滤镜无法修复文件兼容问题。",
          "确定预设前，先与原始画面做对比。"
        ]
      },
      {
        "title": "导入或存档失败时先检查什么",
        "body": "先核对文件后缀、所选系统和具体报错。如果「文件」尚未下载完原始资源，先完成下载再重试。游戏自身存档与模拟器即时存档是两种不同的东西，不要靠改后缀互相转换；在跨核心或跨 App 迁移存档前先做好备份。",
        "points": [
          "联系支持时提供 App 版本、系统、核心和错误信息。",
          "不要附带商业 ROM 或 BIOS 文件。",
          "排查问题时先回到默认皮肤和简单滤镜。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa 附带 Game Boy 游戏吗？",
        "answer": "不附带。Retropa 是模拟器，不提供游戏与 BIOS 文件。你只能导入自己有权使用的文件。"
      },
      {
        "id": "bios-needed",
        "question": "Game Boy 模拟需要 BIOS 文件吗？",
        "answer": "在 Retropa 内置的核心中，GB 与 GBC 游戏通常不需要 BIOS。如果某个核心提示需要 BIOS，请按该核心的提示处理，不要导入无关文件。"
      },
      {
        "id": "gb-vs-gbc",
        "question": "可以把 .gbc 文件当 Game Boy 游戏打开吗？",
        "answer": ".gbc 属于 Game Boy Color。Retropa 会在对应系统上运行它，而改后缀不会改变文件本身的类型。"
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "iPhone 与 iPad 的 Game Boy Color 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 .gbc 游戏。了解色彩表现、GBC 专属游戏、核心选择、导入步骤，以及游戏无法启动时的排查顺序。",
    "summary": "Retropa 用你自己的 .gbc 文件运行 Game Boy Color 游戏，提供色彩处理、按游戏切换核心，以及贴合原始反射式屏幕的画面处理。",
    "sections": [
      {
        "title": "准备一个 .gbc 文件",
        "body": "Game Boy Color 游戏使用 .gbc 后缀。Retropa 不附带游戏与 BIOS，请自行准备文件、单独保留备份，并且只导入你有权使用的内容。",
        "points": [
          ".gbc 是 Game Boy Color 游戏。",
          "初代 Game Boy 游戏使用 .gb，同样可以在 Retropa 上运行。",
          "不要把 .gb 改成 .gbc 来强行获得彩色。"
        ]
      },
      {
        "title": "Game Boy Color 的核心选择",
        "body": "SameBoy 是专注 GB 与 GBC 的核心，mGBA 与 SkyEmu 同样覆盖 Game Boy Color。如果某个游戏出现颜色或时序异常，换核心是一个合理的第一步，因为不同核心对硬件的处理略有差异。",
        "points": [
          "GBC 游戏可以优先试 SameBoy。",
          "mGBA 用一个核心覆盖 GB、GBC 与 GBA。",
          "核心选择按游戏保存。"
        ]
      },
      {
        "title": "导入与首次启动",
        "body": "先把文件下载到本机，避免「文件」App 只提供占位条目，然后从 Retropa 游戏库的导入入口选中它。打开游戏，确认颜色、声音与默认触控布局都正常，再套用皮肤或滤镜，这样后续出现问题更容易定位。",
        "points": [
          "挑一个真正用到彩色的场景测试，不要只看标题画面。",
          "除了画面，也确认声音通道正常。",
          "排查期间保持原始文件不动。"
        ]
      },
      {
        "title": "彩色掌机的画面与布局",
        "body": "Game Boy Color 的屏幕小而偏反射。LCD Grid 预设增加的子像素结构更贴合它，DMG 预设则是刻意还原更早的单色面板。Retropa 高级滤镜基于实际输出区域工作，不依赖固定整数倍，因此在不同设备尺寸下比例保持一致。",
        "points": [
          "每个预设都与原始画面做一次对比。",
          "高级滤镜需要 Retropa Plus。",
          "确认皮肤没有遮挡游戏视窗。"
        ]
      },
      {
        "title": "按键与方向",
        "body": "Game Boy Color 布局需要方向键、A/B 键以及 Start 和 Select。竖屏适合短时间游玩；横屏留给按键的空间更大，在较大的 iPhone 上更顺手。请在你实际使用的方向下确认每个输入都能按到。"
      },
      {
        "title": "Game Boy Color 游戏无法启动时",
        "body": "先核对后缀与所选系统，再阅读具体报错。如果区域或调色板表现异常，先对比不同核心再改设置。某个核心创建的存档未必能被另一个核心读取，切换前请先备份。",
        "points": [
          "记录 App 版本、系统、核心和错误信息。",
          "不要把商业 ROM 或 BIOS 文件发给支持。",
          "回到默认皮肤与简单滤镜来隔离问题。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Retropa 附带 Game Boy Color 游戏吗？",
        "answer": "不附带。Retropa 是模拟器，不提供游戏与 BIOS 文件。请只导入你有权使用的文件。"
      },
      {
        "id": "gb-on-gbc",
        "question": "初代 Game Boy 游戏也能玩吗？",
        "answer": "可以。初代 Game Boy 的 .gb 文件同样能在 Retropa 上运行，使用的核心与 Game Boy Color 相同。"
      },
      {
        "id": "force-colour",
        "question": "把 .gb 改成 .gbc 就能变彩色吗？",
        "answer": "不能。后缀不改变文件内容，改名不会启用 Game Boy Color 特性。"
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "iPhone 与 iPad 的 NES 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上运行你自己的 NES 游戏。支持 .nes、.fds、.nsf 等格式，含核心选择、导入步骤、手柄映射与排障说明。",
    "summary": "Retropa 用你自己的文件运行 NES 游戏，通过两个专属核心支持 .nes、.fds 与 NSF 音频格式，并提供手柄映射和 CRT 画面处理。",
    "sections": [
      {
        "title": "Retropa 支持的 NES 文件格式",
        "body": "Retropa 对 NES 的支持不止一种后缀。除了常见的 .nes 卡带镜像，核心还接受 Famicom 磁碟机镜像与 NSF 声音文件，以及普通与统一格式的 iNES 容器变体。",
        "points": [
          ".nes 是标准 NES 卡带镜像。",
          ".fds 对应 Famicom 磁碟机内容。",
          ".nsf 与 .nsfe 是声音文件，不是可玩的游戏。",
          "可以直接导入并打开 ZIP 与 RetroPack 容器。"
        ]
      },
      {
        "title": "两个核心，同一个系统",
        "body": "Retropa 为 NES 游戏提供 RusticoNES 与 TetaNES，JGenesis 同样覆盖该系统。换一个核心是区分「游戏文件本身有问题」和「核心实现差异」最快的办法，所选核心会按游戏记忆。",
        "points": [
          "卡带游戏可以先从 RusticoNES 开始。",
          "出现异常时，TetaNES 是值得一试的替代核心。",
          "NSF 音频文件在各核心中的表现与游戏不同。"
        ]
      },
      {
        "title": "导入 NES 游戏",
        "body": "先把文件下载到本机，避免「文件」App 返回占位条目，然后打开 Retropa 游戏库的导入入口。用默认布局启动游戏，先确认画面、音频与默认按键正常，再考虑更换皮肤或滤镜。"
      },
      {
        "title": "应对只有两个按键的手柄",
        "body": "NES 手柄按键刻意精简：方向键、A、B、Start 和 Select。在触屏上很容易把按键排得过近，所以要确认斜向输入仍然有效，并且游玩时不会误触 Start 与 Select。使用实体手柄基本可以解决这类问题。",
        "points": [
          "先在 iOS 配对实体手柄，再到 Retropa 核对映射。",
          "除了四个正方向，也要验证斜向。",
          "如果横竖屏都会玩，两种方向都要检查。"
        ]
      },
      {
        "title": "把画面调对",
        "body": "NES 输出面向标清电视，因此 CRT 处理往往比干净的像素网格更接近当年的观感。Retropa 提供扫描线与阴栅预设，高级滤镜基于实际输出区域工作，不依赖固定整数倍。",
        "points": [
          "先以原始画面作为参照。",
          "常规扫描线叠加在非整数倍下可能闪烁。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "NES 游戏无法载入时",
        "body": "先阅读具体报错再改任何设置。转储损坏、mapper 不受支持、缺少文件头、磁碟机游戏缺少 BIOS 是几类不同的问题。核对后缀与所选系统后，换另一个 NES 核心再试。",
        "points": [
          "联系支持时记录 App 版本、核心与完整报错。",
          "排查期间保持原始文件不动。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Retropa 能打开哪些 NES 格式？",
        "answer": "支持 .nes、.fds、.nsf、.nsfe、.unf 与 .unif 文件，也可以直接打开 ZIP 与 RetroPack 容器。"
      },
      {
        "id": "nsf",
        "question": ".nsf 文件能当游戏玩吗？",
        "answer": "不能。NSF 是声音数据，播放的是音频而不是游戏。要玩游戏请使用 .nes 或 .fds 文件。"
      },
      {
        "id": "gamepad",
        "question": "实体手柄可以用于 NES 游戏吗？",
        "answer": "可以。兼容手柄可与 iOS 配对，并在 Retropa 内完成映射。配对后请核对映射，按键顺序未必与预期一致。"
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "iPhone 与 iPad 的 SNES 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 SNES 游戏。支持 .sfc 与 .smc 格式，使用 LakeSnes 核心，含六键手柄映射与排障步骤。",
    "summary": "Retropa 用你自己的 .sfc 与 .smc 文件在 LakeSnes 核心上运行 SNES 游戏，支持六键手柄映射、即时存档与 CRT 画面处理。",
    "sections": [
      {
        "title": "SNES 文件格式",
        "body": "Super Nintendo 镜像通常以 .sfc 或 .smc 分发，Retropa 也接受若干相关的容器与拷贝机格式。如果文件无法运行，第一件要核对的就是后缀，因为文件头不匹配是游戏无法启动的常见原因。",
        "points": [
          ".sfc 与 .smc 是标准 SNES 镜像。",
          "Retropa 同时列出 .fig、.swc、.bs 与 .st 的支持。",
          "可以直接打开 ZIP 与 RetroPack 容器。"
        ]
      },
      {
        "title": "LakeSnes 核心",
        "body": "Retropa 使用 LakeSnes 运行 SNES 游戏，JGenesis 同样列出该系统。如果某个游戏出现时序或图形问题，先确认文件是干净的镜像，再判断是否是核心的问题，并对照发行说明查看当前 App 版本。",
        "points": [
          "LakeSnes 是专用的 SNES 核心。",
          "部分游戏依赖特定的卡带协处理器。",
          "核心选择按游戏分别记忆。"
        ]
      },
      {
        "title": "导入与首次运行",
        "body": "把文件保存在本机而不是云端占位条目，然后从 Retropa 游戏库的导入入口选中它。打开游戏，先确认画面、音频与默认触控按键正常，再去调整显示设置，这样后续问题才有明确的原因。"
      },
      {
        "title": "六个按键需要真正的空间",
        "body": "SNES 手柄在方向键、A、B、Start、Select 之外还增加了 X、Y、L、R，而且很多游戏需要同时按下多个键。在触屏上，把布局摊开到横屏并逐个组合测试是值得的。动作类游戏使用实体手柄更可靠。",
        "points": [
          "映射时容易漏掉 L 与 R，要专门验证。",
          "测试同时按下斜向与肩键。",
          "确认皮肤没有遮挡游戏视窗。"
        ]
      },
      {
        "title": "选择画面处理方式",
        "body": "SNES 美术是为 CRT 设计的，因此扫描线与阴栅预设通常比原始像素网格更接近当年的观感。Retropa 高级滤镜按实际输出区域处理，不要求整数倍，这在手机屏幕上尤其重要，因为可用高度很少能被整除。",
        "points": [
          "以原始画面作为基准。",
          "简单扫描线叠加在非整数倍下可能闪烁。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "SNES 游戏无法启动时",
        "body": "核对后缀、所选系统与具体报错文本。当其他游戏正常而某一个失败时，通常要怀疑依赖特殊卡带芯片的游戏。测试期间保持原始文件不动，并尝试切换到另一个核心。",
        "points": [
          "联系支持时记录 App 版本、核心与报错。",
          "改滤镜无法修复卡带芯片相关的问题。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": ".sfc 和 .smc 有区别吗？",
        "answer": "两者都是标准 SNES 镜像，Retropa 都能接受。后缀本身不改变游戏内容。"
      },
      {
        "id": "chip-games",
        "question": "为什么其他游戏正常，唯独一个失败？",
        "answer": "部分游戏依赖额外的卡带硬件。如果文件是干净镜像且其他游戏能运行，这个依赖就是最可能的原因，下一步是换核心测试。"
      },
      {
        "id": "saves",
        "question": "即时存档能在核心之间通用吗？",
        "answer": "不能保证。电池存档与即时存档是不同制品，某个核心写出的状态未必能被另一个核心读取，切换前请先备份。"
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "iPhone 与 iPad 的 Sega Genesis / Mega Drive 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 Sega Genesis 与 Mega Drive 游戏。支持 .md、.smd、.gen 格式，使用 JGenesis 核心，含六键映射与排障。",
    "summary": "Retropa 用你自己的文件在 JGenesis 核心上运行 Sega Genesis 与 Mega Drive 游戏，支持六键手柄、即时存档与 CRT 画面处理。",
    "sections": [
      {
        "title": "Genesis 与 Mega Drive 是同一台主机",
        "body": "这台主机在欧洲、日本与大部分亚洲地区叫 Mega Drive，在北美叫 Genesis。硬件完全相同，因此游戏文件两边都能用，区别只在包装上的名字。Retropa 同时列出两个名称，这也是不同地区文件后缀略有差异的原因。",
        "points": [
          ".md 与 .smd 是常见的 Mega Drive 镜像。",
          ".gen 是北美常见的后缀。",
          "后缀不改变游戏所期望的硬件。"
        ]
      },
      {
        "title": "JGenesis 核心",
        "body": "Retropa 使用 JGenesis 运行 Genesis 与 Mega Drive 游戏，同一个核心也覆盖 Master System、Game Gear 与若干掌机系统。由于一个核心服务多个平台，每个游戏所选系统就很关键：在系统仍设为 Genesis 时导入 Master System 游戏，是常见的误判来源。",
        "points": [
          "JGenesis 覆盖 MD、GEN、SMS 与 GG。",
          "报告问题前先确认识别到的系统。",
          "核心与系统选择按游戏分别记忆。"
        ]
      },
      {
        "title": "导入 Mega Drive 游戏",
        "body": "把文件保存在本机，不要留作云端占位条目，然后从 Retropa 游戏库的导入入口选中它。打开游戏，先确认画面、音频与默认触控布局正常，再套用皮肤或滤镜。"
      },
      {
        "title": "映射六键手柄",
        "body": "Genesis 手柄有三键与六键两种版本，部分游戏在检测到不同版本时表现不同。在触控布局上，请确认 A、B、C 以及（如果提供）X、Y、Z 与 Mode 都能按到，并用游戏真正会用到的一组组合键进行测试。",
        "points": [
          "三键与六键映射都要验证。",
          "检查 Start，它在很多游戏里同时是暂停键。",
          "配对的实体手柄可以避免大部分误触问题。"
        ]
      },
      {
        "title": "16 位主机的画面处理",
        "body": "Mega Drive 输出面向 CRT，因此扫描线或阴栅预设通常比原始像素网格更接近当年观感，尤其是抖动图案——当年的电视会把它混合掉。Retropa 高级滤镜基于真实输出区域，而不是固定整数倍。",
        "points": [
          "先从原始画面出发，再做对比。",
          "抖动图案是检验滤镜预设的好样本。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "Genesis 游戏无法启动时",
        "body": "核对后缀、系统选择与具体报错。由于一个核心服务多台主机，这里的区域与系统不匹配比单一平台系统更常见。在做更深的改动前，先确认识别到的系统，并保持原始文件不动。",
        "points": [
          "记录 App 版本、识别到的系统、核心与报错。",
          "不要把商业 ROM 或 BIOS 文件发给支持。",
          "在核心之间迁移存档前，先单独备份。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive 和 Genesis 是同一台机器吗？",
        "answer": "是。它是同一台主机的两个地区名称，游戏文件在两种名称下都能运行。"
      },
      {
        "id": "six-button",
        "question": "Retropa 支持六键手柄吗？",
        "answer": "触控布局与实体手柄映射都覆盖了额外按键，部分游戏会根据检测到的柄型改变行为。"
      },
      {
        "id": "system-detect",
        "question": "为什么我的游戏被当成别的系统？",
        "answer": "一个核心服务多个 Sega 平台，请先检查并修正该游戏识别到的系统，再判断是否为兼容性问题。"
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "iPhone 与 iPad 的 Game Gear 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 .gg Game Gear 游戏。了解由哪个核心运行、如何导入、如何设置画面，以及游戏失败时该检查什么。",
    "summary": "Retropa 通过 JGenesis 核心用你自己的 .gg 文件运行 Game Gear 游戏，提供背光液晶观感、掌机皮肤与完整按键映射。",
    "sections": [
      {
        "title": "准备一个 .gg 文件",
        "body": "Game Gear 游戏使用 .gg 后缀。Retropa 不附带游戏与 BIOS，请先准备好文件，并在导入前于 App 外保留一份副本。",
        "points": [
          ".gg 是 Game Gear 的后缀。",
          ".sms 属于 Master System，不是 Game Gear。",
          "改名不能在两者之间转换。"
        ]
      },
      {
        "title": "哪个核心负责 Game Gear",
        "body": "JGenesis 在 Mega Drive、Genesis 与 Master System 之外同样覆盖 Game Gear。由于一个核心服务多个 Sega 平台，在排查兼容性问题前，请先确认游戏被识别为 Game Gear。"
      },
      {
        "title": "导入与首次启动",
        "body": "先把文件下载到本机，再从 Retropa 游戏库的导入入口选中它。套用皮肤前先确认画面、音频与默认按键正常，这样后续问题才有明确原因。"
      },
      {
        "title": "一块小巧的背光屏",
        "body": "Game Gear 屏幕背光且尺寸很小，因此 LCD Grid 处理通常更贴合，而较强的 CRT 预设会明显比原机更重。Retropa 高级滤镜按实际输出区域处理，不要求整数倍。",
        "points": [
          "每个预设都与原始画面做一次对比。",
          "高级滤镜需要 Retropa Plus。",
          "确认皮肤没有遮挡游戏视窗。"
        ]
      },
      {
        "title": "按键与方向",
        "body": "Game Gear 硬件提供方向键、两个动作键和 Start。按键数量少，竖屏布局比较舒适，但仍要确认不必挪动手型就能按到 Start，并测试斜向输入。"
      },
      {
        "title": "Game Gear 游戏无法运行时",
        "body": "核对后缀、识别到的系统与具体报错。把 Master System 文件当 Game Gear 导入（或反过来）是常见原因。测试期间保持原始文件不动。",
        "points": [
          "记录 App 版本、识别系统、核心与报错。",
          "不要把商业 ROM 或 BIOS 文件发给支持。",
          "在核心之间迁移存档前先备份。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear 和 Master System 是同一个系统吗？",
        "answer": "两者关系密切但属于不同系统，文件后缀也不同。同一个核心可以运行两者，请确认文件被识别成哪个系统。"
      },
      {
        "id": "bios",
        "question": "Game Gear 需要 BIOS 文件吗？",
        "answer": "在 Retropa 内置的核心中不需要。如果某个核心提示需要，请按该核心的提示处理，不要导入无关文件。"
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "iPhone 与 iPad 的 Master System 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上运行你自己的 .sms Sega Master System 游戏。含核心覆盖、导入步骤、按键布局与无法启动时的排查。",
    "summary": "Retropa 在 JGenesis 核心上用你自己的 .sms 文件运行 Sega Master System 游戏，提供掌机皮肤、画面处理与手柄映射。",
    "sections": [
      {
        "title": "准备一个 .sms 文件",
        "body": "Master System 游戏使用 .sms 后缀。Retropa 不提供游戏与 BIOS，请自行准备文件并在 App 外保留备份。",
        "points": [
          ".sms 是 Master System 的后缀。",
          ".gg 属于 Game Gear，是另一个系统。",
          "可以直接打开 ZIP 与 RetroPack 容器。"
        ]
      },
      {
        "title": "核心覆盖",
        "body": "JGenesis 在 Mega Drive、Genesis 与 Game Gear 之外同样处理 Master System。由于一个核心服务多个平台，当文件表现异常时，第一步就是确认识别到的系统。"
      },
      {
        "title": "导入与确认",
        "body": "把文件保存在本机，再从 Retropa 游戏库的导入入口选中它。套用皮肤或显示预设前，先确认画面、音频与默认布局正常。"
      },
      {
        "title": "两个按键，一个方向键",
        "body": "Master System 手柄使用方向键与两个动作键，部分机型的暂停键设在主机本体上。在触控布局中，值得确认暂停键映射到了可达的位置，因为它很容易被漏掉。"
      },
      {
        "title": "画面处理",
        "body": "Master System 游戏面向 CRT 显示。扫描线与阴栅预设通常比原始像素网格更接近原机观感，而 Retropa 高级滤镜按真实输出区域处理，不依赖固定整数倍。",
        "points": [
          "把预设与原始画面做对比。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "Master System 游戏无法启动时",
        "body": "核对后缀、识别到的系统与具体报错。区域差异以及 Master System 与 Game Gear 混淆是常见原因。排查期间保持原始文件不动。",
        "points": [
          "记录 App 版本、识别系统、核心与报错。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "怎么判断文件是 Master System 还是 Game Gear？",
        "answer": "看后缀：.sms 是 Master System，.gg 是 Game Gear。Retropa 会显示导入游戏识别到的系统。"
      },
      {
        "id": "pause",
        "question": "暂停键在哪里？",
        "answer": "在原机上它在主机本体而不在手柄上。在 Retropa 中它属于屏幕布局的一部分，请确认它映射到了方便按到的按键。"
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "iPhone 与 iPad 的 WonderSwan 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 .ws WonderSwan 游戏。使用 Ares 核心，支持竖屏方向，含导入步骤与排障说明。",
    "summary": "Retropa 在 Ares 核心上用你自己的 .ws 文件运行 WonderSwan 游戏，包括这台硬件原本就支持的竖屏方向。",
    "sections": [
      {
        "title": "准备一个 .ws 文件",
        "body": "WonderSwan 游戏使用 .ws 后缀，WonderSwan Color 使用 .wsc。Retropa 不附带游戏与 BIOS，请先准备文件并保留备份。",
        "points": [
          ".ws 是 WonderSwan，.wsc 是 WonderSwan Color。",
          "两者是能力不同的两个系统。",
          "改后缀不能把游戏升级成彩色机型。"
        ]
      },
      {
        "title": "Ares 核心",
        "body": "Ares 在 Retropa 中在处理其他掌机系统的同时负责 WonderSwan 与 WonderSwan Color。如果游戏无法启动，先确认文件是干净镜像，并且识别到的系统与后缀一致，再去改设置。"
      },
      {
        "title": "导入与首次运行",
        "body": "把文件保存在本机，再从 Retropa 游戏库的导入入口选中它。套用皮肤或显示预设前，先确认画面、音频与默认按键正常。"
      },
      {
        "title": "一台本就为竖持设计的手掌机",
        "body": "WonderSwan 的设计允许横竖两种方向，而且很多游戏是为竖屏游玩制作的。Retropa 支持竖屏布局，因此在判断画面是否不对之前，先确认你正在玩的游戏是否期望旋转后的屏幕。",
        "points": [
          "竖屏与横屏都试一次。",
          "并非所有游戏使用同一种方向。",
          "确认所选方向下所有输入都能按到。"
        ]
      },
      {
        "title": "画面处理",
        "body": "WonderSwan 使用反射式单色面板，像素结构与众不同。LCD Grid 预设通常更贴合它，而 CRT 预设会明显比原机更重。高级滤镜按实际输出区域处理。",
        "points": [
          "以原始画面作为参照。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "WonderSwan 游戏无法启动时",
        "body": "核对后缀、识别到的系统与具体报错。把 .wsc 文件当 WonderSwan 安装（或反过来）是常见的混淆。测试期间保持原始文件不动。",
        "points": [
          "记录 App 版本、识别系统、核心与报错。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "彩色机型会改变文件类型吗？",
        "answer": "会。WonderSwan 与 WonderSwan Color 使用不同后缀，彩色游戏在单色系统上未必表现正常。"
      },
      {
        "id": "orientation",
        "question": "为什么画面看起来是旋转的？",
        "answer": "很多 WonderSwan 游戏是为竖屏游玩设计的。先试试竖屏布局，再判断画面是否有问题。"
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "iPhone 与 iPad 的 Neo Geo Pocket 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上运行你自己的 .ngp 与 .ngpc Neo Geo Pocket 游戏。含核心覆盖、摇杆式操作，以及它与 Neo Geo 街机的区别。",
    "summary": "Retropa 在 Ares 核心上用你自己的文件运行 Neo Geo Pocket 与 Neo Geo Pocket Color 游戏，与 Neo Geo 街机模拟相互独立。",
    "sections": [
      {
        "title": "Neo Geo Pocket 不是 Neo Geo 街机",
        "body": "Neo Geo Pocket 与 Neo Geo Pocket Color 是掌机。它们与 Neo Geo MVS、AES 街机硬件共享品牌，但属于完全不同的系统，文件与核心都不同。Retropa 的街机支持需要 Plus，Pocket 模拟则不需要。",
        "points": [
          ".ngp 是 Neo Geo Pocket，.ngpc 与 .ngc 是彩色机型。",
          "街机的 neogeo.zip 不是 Pocket 游戏。",
          "街机与 Pocket 的游戏库相互独立。"
        ]
      },
      {
        "title": "准备正确的文件",
        "body": "导入前先核对后缀。Pocket 游戏是单个掌机镜像，而街机 Neo Geo set 通常由多个芯片文件组成，还可能附带 BIOS。把两者混淆是该系统最常见的错误。"
      },
      {
        "title": "Ares 核心",
        "body": "Ares 在 Retropa 中在处理其他掌机平台的同时负责 Neo Geo Pocket 与 Neo Geo Pocket Color。如果游戏无法启动，先核对后缀与识别到的系统，再考虑文件是否为干净镜像。"
      },
      {
        "title": "是微动摇杆，不是十字键",
        "body": "Neo Geo Pocket 使用的是带段落感的微动摇杆，而不是常规十字键。实际影响是斜向精度比通常更重要，因此在测试触控布局时，要专门验证斜向输入是否干净，而不只是检查四个正方向。",
        "points": [
          "专门测试斜向输入。",
          "确认两个动作键适合长时间游玩。",
          "格斗游戏建议使用配对的实体手柄。"
        ]
      },
      {
        "title": "画面处理",
        "body": "Pocket 的彩色面板尺寸小、分辨率低，因此轻量 LCD 处理通常比浓重的 CRT 预设更合适。Retropa 高级滤镜基于真实输出区域，不要求整数倍。",
        "points": [
          "与原始画面做对比。",
          "高级滤镜需要 Retropa Plus。"
        ]
      },
      {
        "title": "Pocket 游戏无法启动时",
        "body": "核对后缀、识别到的系统与具体报错。如果游戏库里有街机文件，请确认没有误选。排查期间保持原始文件不动。",
        "points": [
          "记录 App 版本、识别系统、核心与报错。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "可以在这里玩 Neo Geo 街机游戏吗？",
        "answer": "那是另一个系统，有自己的核心与文件。Retropa 支持街机家族，但需要 Retropa Plus；Neo Geo Pocket 模拟与它相互独立。"
      },
      {
        "id": "neogeo-zip",
        "question": "Pocket 游戏需要 neogeo.zip 吗？",
        "answer": "不需要。那个文件与 Neo Geo 街机硬件相关，Pocket 游戏不会用到它。"
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "iPhone 与 iPad 的 Neo Geo 模拟器 | Retropa",
    "description": "用 Retropa 在 iPhone 和 iPad 上运行受支持的 Neo Geo MVS 街机文件。了解 set 结构、BIOS 需求、父集与克隆集，以及无法启动时的排查顺序。",
    "summary": "Retropa 在 iPhone 与 iPad 上运行受支持的 Neo Geo 街机 set，支持触控与实体手柄以及 CRT 滤镜。街机游玩需要 Retropa Plus，且不附带游戏与 BIOS 文件。",
    "sections": [
      {
        "title": "Neo Geo 街机需要 Plus",
        "body": "Neo Geo 街机模拟属于 Retropa 的街机家族，而街机核心需要 Retropa Plus。这与 Neo Geo Pocket 是两件事——Pocket 是掌机系统，由标准的 Pocket 支持覆盖。",
        "points": [
          "街机家族需要 Retropa Plus。",
          "Neo Geo Pocket 是不同的掌机系统。",
          "任何情况下都不附带游戏与 BIOS 文件。"
        ]
      },
      {
        "title": "街机 set 不是单个文件",
        "body": "主机模拟通常是一个游戏一个文件。街机硬件不同：一个游戏是一组芯片文件，通常打包在 ZIP 里，而且很多游戏依赖父集或 BIOS。这就是街机 ZIP 与掌机 ROM 表现不同的原因。",
        "points": [
          "除非导入流程要求解压，否则保持 ZIP 原样。",
          "可能需要单独的 BIOS 压缩包。",
          "克隆集未必包含核心需要的全部文件。"
        ]
      },
      {
        "title": "导入与首次启动",
        "body": "从 Retropa 游戏库的导入入口选中 set，然后用默认布局启动。如果核心提示缺少文件或 BIOS，请仔细阅读该提示：缺少父集与缺少 BIOS 需要不同的处理方式。",
        "points": [
          "改任何设置前先阅读具体报错。",
          "排查期间保留原始压缩包。",
          "确认投币键与开始键都能按到。"
        ]
      },
      {
        "title": "Neo Geo Pocket 文件在这里不能用",
        "body": "如果你有 .ngp 或 .ngpc 文件，它们属于 Pocket 系统而不是街机家族。Pocket ROM 或改名后的 ZIP 不能替代街机 set，反过来也一样。",
        "points": [
          ".ngp 与 .ngpc 是掌机 Pocket 文件。",
          "街机 set 是多文件结构，且可能需要 BIOS。",
          "报告问题前先确认识别到的系统。"
        ]
      },
      {
        "title": "街机操作与画面",
        "body": "街机硬件期望摇杆加多个动作键，很多游戏依赖同时按下。Retropa 支持屏幕按键与兼容的实体手柄，并内置适合街机输出的 CRT 处理。高级滤镜需要 Plus。",
        "points": [
          "先在 iOS 配对实体手柄，再进行映射。",
          "测试同时按下斜向与按键。",
          "街机输出通常比原始网格更适合 CRT 预设。"
        ]
      },
      {
        "title": "Neo Geo 游戏无法启动时",
        "body": "核对所选基板、set 内容以及核心报告的 BIOS 需求。缺少父集的独立克隆集，或缺文件的 set，无论套用什么滤镜或皮肤都无法启动。",
        "points": [
          "记录 App 版本、基板选择、核心与完整报错。",
          "改滤镜或皮肤无法解决 ROM 数据缺失。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "为什么街机核心需要 Plus？",
        "answer": "街机家族属于付费功能，与高级皮肤、高级滤镜同属一组。掌机与卡带系统不需要。"
      },
      {
        "id": "bios",
        "question": "需要 Neo Geo BIOS 吗？",
        "answer": "很多街机 set 需要，缺少时核心会提示。请使用你有权使用的 BIOS，Retropa 不提供下载。"
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket 是同一个东西吗？",
        "answer": "不是。Pocket 是掌机，有自己的文件。街机 set 与 Pocket 游戏不能互换。"
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "iPhone 与 iPad 上的 mGBA 核心 | Retropa",
    "description": "了解 Retropa 中 mGBA 的 Game Boy 系列覆盖、目录格式、首次运行检查、存档备份，以及需要 Plus 的核心切换。",
    "summary": "mGBA 在 Retropa 中覆盖 Game Boy、Game Boy Color 与 Game Boy Advance。先用默认布局与原始画面确认游戏运行，再调整皮肤与显示效果。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "mGBA 的上游项目：https://github.com/mgba-emu/mgba。以下范围来自 Retropa 核心目录，不代表上游项目的全部功能，也不保证每个游戏都兼容。Retropa 不提供游戏或 BIOS，请仅导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "先确认系统与按键",
        "body": "在「文件」中把游戏下载到本机，再从 Retropa 游戏库导入并确认识别到的系统。改后缀不能开启彩色硬件功能。Game Boy Advance 游戏还需要检查 L 与 R，面向更早掌机的皮肤可能没有这两个按键。",
        "points": [
          "进入实际游戏后检查声音与输入。",
          "先测试默认布局，再导入自定义皮肤。",
          "在 App 外保留原始文件。"
        ]
      },
      {
        "title": "区分核心问题与显示效果",
        "body": "画面异常时先关闭滤镜再对比。绿屏处理会主动改变颜色，液晶网格会主动改变像素外观；这些变化不能证明 mGBA 的模拟有误。声音或时序异常应记录可重复的游戏场景与 App 版本，不要只依据开场画面判断。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；先保留游戏自身存档与原核心即时存档的备份，再用同一个游戏场景验证声音、画面与输入。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "掌机覆盖的边界",
        "body": "mGBA 不是 Retropa 的 Nintendo DS 路径。DS 文件应使用目录中的 DS 核心，而不是改名后的 GBA 镜像。另一个模拟器的即时存档也不是游戏文件；如果所选系统提示需要 BIOS，请按提示核对，Retropa 不提供固件。"
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "可以只给一个游戏换核心吗？",
        "answer": "可以，需要 Retropa Plus。选择按游戏保存，但切换前请备份存档，不要期待即时存档跨核心通用。"
      },
      {
        "id": "display",
        "question": "换滤镜能修复兼容问题吗？",
        "answer": "不能。先用原始画面测试；滤镜改变显示方式，不改变模拟硬件或游戏文件内容。"
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "iPhone 与 iPad 上的 SkyEmu 核心 | Retropa",
    "description": "SkyEmu 在 Retropa 中覆盖 Game Boy 系列与 Nintendo DS 测试版路径。含格式、双屏触控、兼容边界及 Plus 核心切换说明。",
    "summary": "SkyEmu 在 Retropa 中负责 Nintendo DS 测试版路径，同时覆盖 Game Boy 系列。DS 仍属测试版，不保证每个游戏或触控交互均能正常运行。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "SkyEmu 的上游项目：https://github.com/skylersaleh/SkyEmu。以下范围来自 Retropa 核心目录，不代表上游项目的全部功能，也不保证每个游戏都兼容。Retropa 不提供游戏或 BIOS，请仅导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS 仍是测试版路径",
        "body": "DS 兼容性需要逐个游戏确认。导入本机文件并核对识别系统后，不要停留在开场画面：进入需要触控与声音的场景再判断。卡住时记录 App 版本与具体故障；换皮肤不能修复核心兼容问题。",
        "points": [
          "目录仅为 Nintendo DS 列出 SkyEmu。",
          "Plus 核心切换不会增加另一个 DS 核心。",
          "评估测试版表现时，保留独立存档备份。"
        ]
      },
      {
        "title": "双屏与触控输入",
        "body": "选择能同时显示两块屏幕的布局。竖屏可以上下排列，横屏取决于皮肤；按实际游玩尺寸测试小触控目标，并确认是哪块屏幕接收触控。实体手柄可处理已映射按键，但不能替代所有触控交互。",
        "points": [
          "两块屏幕都要测试。",
          "使用手柄时仍保留触控区域。",
          "单屏掌机皮肤不等于 DS 布局。"
        ]
      },
      {
        "title": "用于更早的掌机",
        "body": "Game Boy 系列使用单屏布局。排查颜色与缺失按键前，先核对系统与皮肤。ZIP 与 RetroPack 是导入容器，不是额外的模拟系统；其中的文件仍需符合目录范围。把 GBA 文件改名不能让它变成 DS 游戏。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；先保留游戏自身存档与原核心即时存档的备份，再用同一个游戏场景验证声音、画面与输入。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "哪个核心运行 Nintendo DS 游戏？",
        "answer": "SkyEmu 是 Retropa 目录中的 Nintendo DS 测试版路径。兼容性取决于具体游戏，目录没有列出其他 DS 核心。"
      },
      {
        "id": "touch",
        "question": "接手柄后 DS 游戏还需要触控吗？",
        "answer": "需要。对于使用触屏的游戏，请保留可达的触控区域；手柄不能替代所有触控操作。"
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "iPhone 与 iPad 上的 SameBoy 核心 | Retropa",
    "description": "SameBoy 专注 Retropa 中的 Game Boy 与 Game Boy Color。了解颜色检查、文件范围、即时存档边界及切换核心的 Plus 要求。",
    "summary": "SameBoy 面向初代单色与彩色 Game Boy 硬件。较集中的覆盖范围使它适合作为对比对象，但不代表其他核心一定更不准确。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "SameBoy 的上游项目：https://github.com/LIJI32/SameBoy。以下范围来自 Retropa 核心目录，不代表上游项目的全部功能，也不保证每个游戏都兼容。Retropa 不提供游戏或 BIOS，请仅导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "先关闭滤镜检查颜色",
        "body": "导入本机文件，确认 Retropa 识别为 Game Boy 还是 Game Boy Color。先用原始画面，DMG 处理可能主动把彩色游戏变为单色观感。选一个颜色变化明确的场景，始终对比同一场景而不是游戏的不同位置。"
      },
      {
        "title": "验证时序与输入",
        "body": "使用默认皮肤检查方向键、A、B、Start 与 Select。声音或时序异常时，记录发生位置以及关闭显示效果后是否仍会出现。有 Retropa Plus 时可以换兼容核心隔离实现差异，但仅凭看起来不同，不能证明哪一个更符合原机。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；先保留游戏自身存档与原核心即时存档的备份，再用同一个游戏场景验证声音、画面与输入。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "不是 Game Boy Advance 核心",
        "body": "Retropa 中的 SameBoy 不覆盖 Game Boy Advance。GBA 镜像应使用目录中的 GBA 核心，改后缀不会把它变为 Game Boy 游戏。换成 SameBoy 也不能使其他核心的即时存档通用；请保留原状态，并单独验证游戏自身存档的备份。"
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy 能运行 Game Boy Advance 游戏吗？",
        "answer": "不能。Retropa 目录中的 SameBoy 仅覆盖 Game Boy 与 Game Boy Color，不覆盖 Game Boy Advance。"
      },
      {
        "id": "why",
        "question": "什么时候对比 SameBoy 与其他核心？",
        "answer": "核对文件并关闭滤镜后，如有可重复的时序、颜色或声音问题，可在拥有 Retropa Plus 时进行对比。切换前先备份存档。"
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "iPhone 与 iPad 上用于 NES 的 RusticoNES 核心 | Retropa",
    "description": "Retropa 中的 RusticoNES：NES 与 Famicom 卡带及磁盘格式、mapper 检查、首次启动、存档注意事项，以及需要 Plus 的核心切换。",
    "summary": "RusticoNES 是 Retropa 默认的 NES 运行路径。它适用于目录中列出的 NES / Famicom 格式；在把启动失败当成显示问题之前，先核对卡带元数据与磁盘要求。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "RusticoNES 的上游项目：https://github.com/zeta0134/rustico。以下覆盖范围来自 Retropa 的核心目录，而不是上游项目的完整功能列表。列出的扩展名并不保证每个游戏都能兼容。Retropa 不提供游戏或 BIOS 文件，请仅导入你有权使用的文件。",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "卡带、UNIF 与磁盘镜像",
        "body": "NES / Famicom 卡带镜像与 Famicom Disk System 磁盘镜像是两类不同的输入。UNIF 是一种卡带容器格式，并不是 iNES 头的另一个名字。导入时请保留原始的文件头与扩展名；为了让文件看起来像另一种格式而改名或删减字节，可能丢掉用于识别卡板的信息。",
        "points": [
          "请单独保留一份原始镜像的副本。",
          "仔细阅读磁盘系统的 BIOS 提示；Retropa 不提供该 BIOS。",
          "NSF 音频格式未列在 RusticoNES 下，请改看 TetaNES。"
        ]
      },
      {
        "title": "首次启动与按键检查",
        "body": "先在「文件」中把镜像下载到本机，再通过 Retropa 游戏库导入，并确认识别为 NES。请从默认皮肤、不启用任何显示效果开始。测试方向键、A、B、Start 与 Select，包括斜向输入与同时按键。自定义布局里缺少某个输入，并不能证明 mapper 有问题。"
      },
      {
        "title": "只有某个卡带失败而其他正常时",
        "body": "不同的 NES 卡带可能使用不同的 mapper 硬件。能识别扩展名，并不代表某个游戏所用的卡板已经实现。请记录确切的报错信息；如果从自己转储的元数据中能确认，也一并记录 mapper 与区域。不要随意修改文件头，也不要以为补上 BIOS 就能解决卡板问题。对于磁盘游戏，要区分缺少 BIOS 与缺少磁盘数据这两种情况。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；在同一个场景中对比声音、画面与输入差异之前，先备份游戏自身存档与原核心的即时存档。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "只对比相互重叠的格式",
        "body": "NES 系统页列出的是各核心格式的并集，并不承诺每个核心都接受其中全部格式。在使用 Plus 对比 RusticoNES 与 TetaNES 或 JGenesis 之前，请先查看这两个目录条目是否都支持原始文件的格式。请保持同一个场景与默认显示设置，避免皮肤或滤镜的变化掩盖对比结果。"
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "NSF 音频在目录中归 RusticoNES 吗？",
        "answer": "不归。Retropa 的目录把 NSF 与 NSFE 列在 TetaNES 下，而不是 RusticoNES。音频文件不是可以游玩的卡带游戏。"
      },
      {
        "id": "mapper",
        "question": "扩展名受支持，就一定能启动游戏吗？",
        "answer": "不一定。卡带的 mapper、文件完整性，以及磁盘系统的相关要求仍然会影响结果。在改动文件之前，请先记录确切的报错信息。"
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "iPhone 与 iPad 上用于 NES 的 TetaNES 核心 | Retropa",
    "description": "Retropa 中的 TetaNES：NES / Famicom 游戏、磁盘镜像与 NSF 音频、按格式区分的检查、手柄设置，以及切换核心所需的 Plus。",
    "summary": "TetaNES 是 Retropa 中的另一个 NES 核心，目录覆盖卡带、磁盘与音乐文件。在期待出现可游玩的游戏画面之前，先确认自己导入的是哪一类文件。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "TetaNES 的上游项目：https://github.com/lukexor/tetanes。以下覆盖范围来自 Retropa 的核心目录，而不是上游项目的完整功能列表。列出的扩展名并不保证每个游戏都能兼容。Retropa 不提供游戏或 BIOS 文件，请仅导入你有权使用的文件。",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "音乐文件不是卡带游戏",
        "body": "NSF 与 NSFE 保存的是 NES 音乐数据。如果你导入的是这类文件，那么没有出现正常的游戏关卡本身并不算失败。请检查音频输出以及 App 实际提供的操作方式；不要以为 Retropa 里会有上游桌面音乐播放器的完整界面。要玩游戏，请从你有权使用的卡带或磁盘镜像开始。",
        "points": [
          "测试音乐时请检查设备音量与音频输出。",
          "把音频文件改名并不能让它变成卡带镜像。",
          "UNIF 扩展名属于 RusticoNES 的目录条目，不属于 TetaNES。"
        ]
      },
      {
        "title": "导入卡带或磁盘镜像",
        "body": "使用游戏库的导入入口之前，先把文件下载到设备本机。确认识别为 NES，并保持原始镜像不做改动。Famicom 是这一系统在日本的名称；Famicom Disk System 另有磁盘方面的要求。如果所选核心提示 BIOS 或磁盘数据问题，请针对该具体要求去解决，而不是用一张无关的卡带镜像把它替换掉。"
      },
      {
        "title": "测试输入与可重复的场景",
        "body": "请使用带方向键、两个动作键、Start 与 Select 的 NES / Famicom 布局。先用默认皮肤确认斜向输入，然后找一个能复现问题的场景进行测试。在套用 CRT 效果之前，先对比原始画面：扫描线会改变观感上的细节，但不会改变核心所模拟的内容。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；在同一个场景中对比声音、画面与输入差异之前，先备份游戏自身存档与原核心的即时存档。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "替代核心不是万能修复",
        "body": "TetaNES 与 RusticoNES 的格式列表与实现都不相同。只有当文件对两者都有效时，切换核心才有助于隔离时序或 mapper 问题；它无法保证对某一特定卡板的支持。上一个核心的即时存档应当随该核心一起备份，而不要把它们当作可以互换的文件。"
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "为什么我的 NSF 文件没有出现可游玩的游戏？",
        "answer": "NSF 是音乐数据。请改为测试音频输出，不要期待出现正常的游戏关卡；要玩游戏请使用卡带或磁盘镜像。"
      },
      {
        "id": "switch",
        "question": "可以免费把 NES 游戏切换到 TetaNES 吗？",
        "answer": "切换模拟核心需要 Retropa Plus。请先确认目标核心的格式覆盖范围，并备份好进度。"
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "iPhone 与 iPad 上用于 SNES 的 LakeSnes 核心 | Retropa",
    "description": "Retropa 中的 LakeSnes：SNES / Super Famicom 格式、卡带芯片限制、六键操作、存档备份，以及需要 Plus 的核心切换。",
    "summary": "LakeSnes 是 Retropa 面向 SNES 的核心。它的目录包含多种镜像与拷贝卡格式，但文件能否识别，与游戏所用卡带硬件是否受支持，是两个不同的问题。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "LakeSnes 的上游项目：https://github.com/dinkc64/LakeSnes。以下覆盖范围来自 Retropa 的核心目录，而不是上游项目的完整功能列表。列出的扩展名并不保证每个游戏都能兼容。Retropa 不提供游戏或 BIOS 文件，请仅导入你有权使用的文件。",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "保持镜像与文件头完整",
        "body": "SNES 在日本称为 Super Famicom。常见的卡带镜像使用 SFC 或 SMC 扩展名；目录还列出了其他拷贝卡及相关格式。仅凭扩展名并不能判断文件是否带有拷贝卡头，或是否需要特殊的卡带硬件。请导入存放在本机的原始镜像并保留备份，而不是一上手就删掉文件头。"
      },
      {
        "title": "检查完整的手柄按键",
        "body": "通过游戏库导入后，请核对识别到的系统，并从默认布局开始。相比只有两个动作键的掌机布局，SNES 还多了 X、Y、L 与 R。请测试肩键、斜向输入，以及游戏中会用到的同时按键；一个好看却缺少 L 或 R 的皮肤，可能让本来正常的游戏看起来像卡住了。",
        "points": [
          "除了六个游戏按键，也要测试 Start 与 Select。",
          "在判断触控布局的局限之前，先连接并映射一个手柄试试。",
          "用原始画面来区分输入问题与显示问题。"
        ]
      },
      {
        "title": "卡带芯片与特殊格式的边界",
        "body": "部分 SNES 游戏依赖卡带内额外的处理器或其他硬件。目录中的扩展名列表并不是按芯片划分的兼容列表；能够识别 BS 或 ST 文件，也不代表 Retropa 暴露了所有相关外设流程。如果只有某一个游戏失败，请在你了解的前提下记录它的硬件需求，以及确切的报错信息。不要宣称某个滤镜或改个扩展名就能补上缺失的硬件支持。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；在同一个场景中对比声音、画面与输入差异之前，先备份游戏自身存档与原核心的即时存档。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "对比 LakeSnes 与 JGenesis",
        "body": "JGenesis 也列出了 SNES，但它的 SNES 扩展名覆盖范围比 LakeSnes 窄。拥有 Plus 时，请只对比两个条目都列出的文件格式。回到同一个场景，使用相同的按键操作且不启用滤镜，并把每个核心的即时存档分开保存。某一个卡带对比成功，并不代表所有特殊芯片游戏都能兼容。"
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "LakeSnes 支持的格式都能在 JGenesis 上运行吗？",
        "answer": "不能这样假设。请查阅每个核心各自的目录条目；系统级格式列表是各核心覆盖范围的并集。"
      },
      {
        "id": "chips",
        "question": "格式列表能保证特殊芯片的兼容性吗？",
        "answer": "不能。文件识别与卡带硬件的模拟是两回事。在改动镜像之前，请先确认确切的报错信息与所选核心。"
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "iPhone 与 iPad 上的 JGenesis 核心 | Retropa",
    "description": "Retropa 中的 JGenesis：目录收录的 Sega 与 Nintendo 系统、Genesis 与 Mega Drive 的名称、格式边界、系统识别，以及需要 Plus 的核心切换。",
    "summary": "在 Retropa 中，JGenesis 通过同一套核心家族支持多个系统。但最终决定硬件、操作方式与存档上下文的，仍然是被识别到的系统；共用一个核心并不意味着文件可以互换。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "JGenesis 的上游项目：https://github.com/jsgroth/jgenesis。以下覆盖范围来自 Retropa 的核心目录，而不是上游项目的完整功能列表。列出的扩展名并不保证每个游戏都能兼容。Retropa 不提供游戏或 BIOS 文件，请仅导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "NES / Famicom: .nes",
          "SNES / Super Famicom: .sfc, .smc",
          "Sega Master System: .sms",
          "Game Gear: .gg",
          "Mega Drive: .md, .smd",
          "Genesis: .gen"
        ]
      },
      {
        "title": "Genesis 与 Mega Drive 的名称",
        "body": "Genesis 是这台主机在北美使用的名称，在日本与欧洲则称为 Mega Drive。Retropa 的目录在两种名称下都有条目。文件扩展名是镜像格式的线索，并不是可靠的区域标识：仅凭文件名无法判断游戏对时序或区域的要求。请保留原始文件并确认识别到的系统，不要靠改名来选择市场。"
      },
      {
        "title": "为正确的硬件导入",
        "body": "先在「文件」中把镜像下载到本机，再通过游戏库导入。开始之前，请分清 Master System 与 Game Gear，以及 NES / Famicom 与 SNES / Super Famicom。多系统核心仍然需要走对应的硬件路径。如果识别到的系统与预期不符，请先核对文件本身，再去改动显示或按键设置。",
        "points": [
          "Master System 与 Game Gear 关系密切，但不是同一台主机。",
          "系统级格式列表可能包含来自其他核心的格式。",
          "这里说明的是 Retropa 目录的范围，而不是 JGenesis 上游的全部功能。"
        ]
      },
      {
        "title": "按键随所选系统而变化",
        "body": "对于 Genesis，请测试 A、B、C，以及布局提供的其他六键输入。对于 Game Gear，确认 Start；对于 Master System，检查暂停键。SNES 布局需要肩键，而 NES 布局没有。请在真实的游戏场景中验证手柄组合，再判断是不是核心丢掉了某个输入。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；在同一个场景中对比声音、画面与输入差异之前，先备份游戏自身存档与原核心的即时存档。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "Sega 覆盖范围并不意味着存在替代核心",
        "body": "在 Retropa 的目录中，JGenesis 是它那些 Sega 卡带系统唯一的核心。Plus 能在存在替代实现时解锁切换，但不会新增一个未列入目录的实现。同样，上游支持多系统，也不代表 CD、扩展硬件或桌面版的每一项功能都在 Retropa 内可用。请以目录和 App 的实际提示来确定受支持的路径。"
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": ".gen 扩展名能证明游戏是北美版吗？",
        "answer": "不能。Genesis 与 Mega Drive 是地区名称，但扩展名并不能可靠地确定游戏的区域或时序要求。"
      },
      {
        "id": "upstream",
        "question": "Retropa 会提供 JGenesis 上游的全部系统吗？",
        "answer": "没有这样的保证。本页的覆盖范围来自 Retropa 自己的目录，而不是上游的完整功能列表。"
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "iPhone 与 iPad 上的 Ares 核心 | Retropa",
    "description": "Retropa 中的 Ares：目录收录的 GBA、WonderSwan 与 Neo Geo Pocket 覆盖范围、彩色机型识别、旋转布局、存档注意事项，以及需要 Plus 的核心切换。",
    "summary": "Ares 在 Retropa 中覆盖部分掌机家族。它在上游项目中的广泛身份，并不意味着上游的每个系统或外设都已集成到这个 App 里。",
    "sections": [
      {
        "title": "目录中的系统与格式",
        "body": "Ares 的上游项目：https://github.com/ares-emulator/ares。以下覆盖范围来自 Retropa 的核心目录，而不是上游项目的完整功能列表。列出的扩展名并不保证每个游戏都能兼容。Retropa 不提供游戏或 BIOS 文件，请仅导入你有权使用的文件。",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "区分单色与彩色机型",
        "body": "导入下载到本机的镜像，并确认 Retropa 识别出的是初代 WonderSwan 还是 WonderSwan Color，以及 Neo Geo Pocket 还是 Neo Geo Pocket Color。彩色机型具备单色硬件没有的能力。改文件名并不是格式转换，无法让只在彩色机型上运行的游戏以初代机型的方式运行。",
        "points": [
          "保留原始镜像，并单独保留一份进度备份。",
          "在排查调色板问题之前，先确认识别到的机型。",
          "如果出现系统专属的固件提示，请按提示处理；Retropa 不提供 BIOS。"
        ]
      },
      {
        "title": "WonderSwan 的方向不只是竖屏",
        "body": "WonderSwan 游戏可能按横向或纵向游玩来设计。请确认游戏预期的方向、两组方向键，以及可用的皮肤布局。仅仅把手机转成竖屏，并不能证明模拟画面与所有按键都已经正确旋转。如果某个布局无法提供必要的输入，请换一个合适的布局，而不是假设核心会自动重映射。"
      },
      {
        "title": "Pocket 不是 Neo Geo 街机",
        "body": "Neo Geo Pocket 使用的是掌机镜像，而不是 Neo Geo MVS 那种多文件街机套装。街机 BIOS 压缩包不能替代 Pocket 镜像。请用默认布局测试斜向输入与两个动作键。初代 Pocket 的显示是单色的，只有 Pocket Color 才应期待呈现彩色机型的画面。运行街机是另一项 Plus 能力。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "切换模拟核心需要 Retropa Plus，即使该掌机系统本身可以免费游玩。只有系统与文件格式均受目标核心支持时才适合对比。选择按游戏保存；在同一个场景中对比声音、画面与输入差异之前，先备份游戏自身存档与原核心的即时存档。",
        "points": [
          "即时存档记录特定核心的内部状态，不保证跨核心通用。",
          "游戏自身存档也应先备份并验证，不保证自动迁移。",
          "切换核心不会转换游戏文件，也不能补齐缺失的 BIOS。"
        ]
      },
      {
        "title": "哪些系统可以对比，哪些不可以",
        "body": "目录为 Game Boy Advance 列出了替代核心，但 WonderSwan 与 Neo Geo Pocket 各机型只列出了 Ares。Plus 的核心切换不会为这些系统新增另一个实现。Ares 在上游的范围也比这里的集成广得多；请只使用本页列出的 Retropa 覆盖范围，不要以为改个扩展名就能启用上游的另一个系统。"
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Ares 的 Pocket 支持能运行我的 Neo Geo 街机套装吗？",
        "answer": "不能。Pocket 与 Neo Geo 街机是不同的硬件家族，文件要求也不同。运行街机需要 Retropa Plus。"
      },
      {
        "id": "alternate",
        "question": "Plus 会增加另一个 WonderSwan 或 Pocket 核心吗？",
        "answer": "不会。在 Retropa 的目录中，这些系统目前只列出 Ares。切换只在存在兼容的替代实现时适用。"
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Delta 替代选择",
    "title": "iPhone 与 iPad 上的 Delta 替代方案 | Retropa",
    "description": "在 iPhone 和 iPad 上寻找 Delta 替代方案？对比街机支持、Delta 皮肤导入、显示滤镜与电视模式，也说明 Delta 在哪些方面更强。",
    "summary": "Retropa 是面向 iPhone 与 iPad 的街机与掌机模拟器，可以直接导入 Delta 皮肤，额外支持街机家族与不依赖整数倍缩放的显示滤镜，并保持掌机优先的界面。",
    "sections": [
      {
        "title": "从 Delta 带过来的东西",
        "body": "只有当原有配置能延续时，换模拟器才值得。Retropa 可以直接导入 Delta 的 .deltaskin 包，因此你已经调好的布局不必从头再做。请确认资源包面向的系统与方向与你实际游玩的一致，然后检查游戏视窗是否被遮挡。",
        "points": [
          ".deltaskin 包可直接导入。",
          "依赖某个皮肤前，先确认它面向的系统。",
          "横竖屏支持取决于资源包本身。"
        ]
      },
      {
        "title": "Retropa 相比 Delta 多出的能力",
        "body": "最明显的差异是街机支持。Retropa 在掌机系统之外还运行受支持的 CPS I、CPS II、CPS III、Neo Geo、PGM 与 M92 街机家族，因此一个游戏库可以同时覆盖两类内容。街机核心需要 Retropa Plus，且不附带游戏与 BIOS 文件。",
        "points": [
          "街机家族与掌机共用一个游戏库。",
          "街机核心需要 Retropa Plus。",
          "街机 set 是多文件结构，且可能需要 BIOS。"
        ]
      },
      {
        "title": "不要求整数倍缩放的显示滤镜",
        "body": "很多复古滤镜假设游戏画面能对应整数个屏幕像素。在现代 iPhone 上，可用区域很少能被整除，于是要么留下空白，要么扫描线粗细不均。Retropa 的高级滤镜改为基于实际输出区域工作，适应横竖屏与不同皮肤布局。以 iOS App 为准，本站的浏览器预览只是近似。",
        "points": [
          "滤镜改变显示方式，不改变游戏分辨率。",
          "高级滤镜需要 Retropa Plus。",
          "常规扫描线叠加在非整数倍下可能闪烁。"
        ]
      },
      {
        "title": "Delta 更强的方面",
        "body": "Delta 的用户规模大得多，在 App Store 上的历史更长，公开皮肤社区也更广。如果你想要使用人数最多的方案、最丰富的现成皮肤库，或最多的第三方教程，Delta 是合理的选择——这一页不会假装不是。",
        "points": [
          "Delta 的社区与第三方资料更多。",
          "Delta 在皮肤上享有网络效应。",
          "Retropa 是较新的产品，皮肤数量更少。"
        ]
      },
      {
        "title": "两个都试，成本为零",
        "body": "两款 App 都免费下载、内购可选。实际做法是：把一个 Delta 皮肤导入 Retropa，再分别加载一个掌机游戏和一个街机 set，然后根据按键与画面在你设备上的实际手感来决定。",
        "points": [
          "两边都免费下载。",
          "无论选哪个，都保留好原始文件与皮肤。",
          "在自己的设备上判断，而不是看对比表格。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa 能导入我现有的 Delta 皮肤吗？",
        "answer": "可以。Retropa 支持导入 .deltaskin 包。请保留原始资源包文件，并确认它面向的系统与方向与你的使用方式一致。"
      },
      {
        "id": "free",
        "question": "Retropa 免费吗？",
        "answer": "Retropa 免费下载，提供可选内购。街机核心、高级皮肤与高级滤镜需要 Retropa Plus，价格以 App 内显示为准。"
      },
      {
        "id": "roms",
        "question": "Retropa 附带游戏吗？",
        "answer": "不附带。Retropa 是模拟器，不提供游戏与 BIOS 文件。请仅导入你有权使用的内容。"
      },
      {
        "id": "which-better",
        "question": "哪个模拟器更好？",
        "answer": "两者的优化方向不同。Delta 社区与皮肤库更大；Retropa 增加了街机家族、不依赖整数倍的滤镜以及 Delta 皮肤导入。建议在自己的设备上分别试用。"
      }
    ],
    "attribution": "Delta 为第三方产品。本页提及的所有产品与公司名称均为各自所有者的商标，在此仅用于识别与事实性对比。Retropa 与上述各方不存在隶属、受其背书或赞助的关系。",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa 与 Delta 对比",
    "title": "Retropa 与 Delta 对比：街机、滤镜与皮肤",
    "description": "在 iPhone 和 iPad 上直接对比 Retropa 与 Delta：模拟系统、街机支持、皮肤兼容、显示滤镜，以及各自更适合谁。",
    "summary": "Retropa 与 Delta 都是 iOS 模拟器，但优化方向不同：Delta 的社区与皮肤库更大，Retropa 则增加了街机家族与不依赖整数倍缩放的显示滤镜。",
    "sections": [
      {
        "title": "模拟的系统",
        "body": "两款 App 都覆盖大多数人想要的掌机系统。Retropa 额外运行受支持的街机家族，这是功能上最显著的差异。街机核心需要 Retropa Plus，掌机系统不需要。",
        "points": [
          "掌机覆盖范围高度重叠。",
          "街机家族是 Retropa 特有的。",
          "街机游玩需要 Plus。"
        ]
      },
      {
        "title": "皮肤与布局",
        "body": "Retropa 支持导入 Delta 的 .deltaskin 包，因此你正在使用的布局可以迁移过来。除此之外，Delta 公开的皮肤生态更大——如果你在意能否浏览一个庞大的皮肤库，这一点很重要。",
        "points": [
          "Retropa 支持导入 .deltaskin 包。",
          "Delta 的公开皮肤库更大。",
          "导入后务必确认资源包支持你的系统与方向。"
        ]
      },
      {
        "title": "显示滤镜",
        "body": "Retropa 提供适应实际输出区域的高级 CRT 与 LCD 滤镜，不要求固定整数倍缩放，并且可以使用 RetroArch 着色器链，包括 .slang 与 .slangp 预设。高级滤镜需要 Plus。网站上的预览只是近似，以 iOS App 为准。",
        "points": [
          "高级滤镜不要求整数倍缩放。",
          "Retropa 列出了 RetroArch 着色器链支持。",
          "高级滤镜需要 Plus。"
        ]
      },
      {
        "title": "社区、资料与积累",
        "body": "Delta 在 App Store 上的时间更长、用户多得多，因此社区文档、论坛回答与第三方教程也远多于 Retropa。Retropa 更年轻、用户更少。任何相反的说法都不符合两个产品目前的实际情况。",
        "points": [
          "Delta 在 App Store 上历史更长。",
          "Delta 可查到的社区回答更多。",
          "Retropa 目前的用户规模更小。"
        ]
      },
      {
        "title": "怎么选",
        "body": "如果你在意街机游戏，或者希望显示滤镜不假设整数倍缩放，Retropa 值得装一个。如果你想要最大的皮肤库与最多的社区资料，Delta 是更稳妥的选择。两者都免费下载，所以诚实的建议是：用自己的文件把两个都试一遍。",
        "points": [
          "两边都免费下载。",
          "评估任一产品都不需要承诺。",
          "两者都需要你自己提供游戏文件。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta 支持街机游戏吗？",
        "answer": "这不在本页能够核实。本页能够陈述的是：Retropa 运行受支持的 CPS、Neo Geo、PGM 与 M92 街机家族，并且街机核心需要 Retropa Plus。"
      },
      {
        "id": "skins",
        "question": "两边能用同一套皮肤吗？",
        "answer": "Retropa 支持导入 Delta 的 .deltaskin 包，因此在 Delta 中可用的资源包通常也能导入 Retropa。导入后请确认目标系统与方向。"
      },
      {
        "id": "price",
        "question": "两者价格如何？",
        "answer": "Retropa 免费下载，内购可选。街机核心、高级皮肤与高级滤镜需要 Retropa Plus。当前价格以 App 内显示为准。"
      }
    ],
    "attribution": "Delta 为第三方产品。本页提及的所有产品与公司名称均为各自所有者的商标，在此仅用于识别与事实性对比。Retropa 与上述各方不存在隶属、受其背书或赞助的关系。",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "导入游戏",
    "title": "如何在 iPhone 与 iPad 上向 Retropa 导入游戏",
    "description": "在 iPhone 和 iPad 上把你自己拥有的游戏文件导入 Retropa：导入入口在哪、云端占位条目为什么会失败、支持哪些格式，以及文件被拒绝时该怎么办。",
    "summary": "一步步说明如何把你自己的游戏文件导入 Retropa，包括可用格式、ZIP 容器的行为，以及导入失败后的恢复方式。",
    "sections": [
      {
        "title": "开始之前",
        "body": "Retropa 不附带游戏与 BIOS 文件。你需要一个自己有权使用、并且已经存放在设备本机的游戏文件。请在 App 外保留一份未修改的副本，这样导入过程中的失误不会让你失去原始文件。",
        "points": [
          "只导入你有权使用的内容。",
          "为每个原始文件单独保留备份。",
          "App 免费下载，但不提供游戏。"
        ]
      },
      {
        "title": "第一步：把文件放到设备上",
        "body": "先下载文件，让它真正存在于本机存储，而不是云端占位条目。这是导入失败最常见的原因：「文件」App 里能看到条目，但字节还没落到设备上，模拟器只能拿到一个不可用的东西。",
        "points": [
          "在「文件」里打开一次，确认已经下载。",
          "显示为灰色或需要下载的条目就是占位条目。",
          "下载完成后再导入。"
        ]
      },
      {
        "title": "第二步：从游戏库导入",
        "body": "打开 Retropa 游戏库的导入入口并选中文件。确认系统识别正确，然后先用默认布局启动游戏，再去改皮肤或滤镜——这样后续出现问题才有明确原因。"
      },
      {
        "title": "支持哪些文件格式",
        "body": "Retropa 接受与所支持系统对应的文件格式，也可以直接打开 ZIP 与 RetroPack 容器。后缀必须与系统匹配：Game Boy 是 .gb，Game Boy Color 是 .gbc，Game Boy Advance 是 .gba，DS 是 .nds。",
        "points": [
          "改后缀不会把游戏在系统之间转换。",
          "ZIP 与 RetroPack 容器可以不解压直接打开。",
          "街机 set 是多文件结构，处理方式不同。"
        ]
      },
      {
        "title": "导入失败时",
        "body": "先阅读具体报错，然后按顺序检查三件事：文件是否已完整下载、后缀是否与系统匹配、文件是否是干净镜像而不是未完成的下载。只有排除了这三项，才值得怀疑模拟器核心。",
        "points": [
          "先补完未完成的下载。",
          "确认后缀与系统匹配。",
          "放弃之前，先试该系统下的另一个核心。"
        ]
      },
      {
        "title": "游戏文件、存档与即时存档",
        "body": "游戏文件、游戏自身存档、模拟器即时存档是三样不同的东西，改后缀并不能互相转换。在跨核心或跨 App 迁移之前，三者都要备份，因为即时存档格式并非在所有核心之间通用。",
        "points": [
          "保持原始游戏文件不动。",
          "电池存档与即时存档分别备份。",
          "不要指望某个核心的状态能在另一个核心读取。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa 附带游戏吗？",
        "answer": "不附带。Retropa 是模拟器，不提供游戏与 BIOS 文件。你只能导入自己有权使用的文件。"
      },
      {
        "id": "cloud",
        "question": "为什么我的文件导入不了？",
        "answer": "最常见的原因是它只是云端占位条目，并没有真正下载。在「文件」中打开它触发下载，然后再导入一次。"
      },
      {
        "id": "zip",
        "question": "可以导入 ZIP 文件吗？",
        "answer": "Retropa 可以直接打开 ZIP 与 RetroPack 容器，因此通常不需要手动解压，除非某个导入流程明确要求。"
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "手柄",
    "title": "在 iPhone 与 iPad 上为 Retropa 连接手柄",
    "description": "先把蓝牙或有线手柄与 iOS 配对，再在 Retropa 内完成映射；同时说明按键无效、映射随游戏变化等问题的排查方式。",
    "summary": "先在 iOS 中配对兼容手柄，再在 Retropa 内按系统与游戏核对映射。本指南覆盖配对顺序、常见映射遗漏，以及触控与手柄并用的配置。",
    "sections": [
      {
        "title": "先与 iOS 配对，再打开 Retropa",
        "body": "手柄必须先被 iOS 识别。请先在系统设置中完成配对，确认它在系统里可用，然后再打开 Retropa。从未在系统层配对过的手柄不会出现在 App 内，无论怎么改 App 设置都没有用。",
        "points": [
          "先在 iOS 设置中配对。",
          "确认手柄在系统中能正常响应。",
          "再回到 Retropa 内检查。"
        ]
      },
      {
        "title": "映射是按系统核对的，不是一次性全局设置",
        "body": "Retropa 按系统保存控制布局，因为 Game Boy 只需要六个输入，而 SNES 手柄需要十个。请把映射当作「按系统」的工作：配对一次之后，仍需逐个核对你实际游玩的系统。",
        "points": [
          "Game Boy：方向键、A、B、Start、Select。",
          "SNES 额外增加 X、Y、L、R。",
          "街机布局还要增加多个动作键。"
        ]
      },
      {
        "title": "最容易漏测的按键",
        "body": "实际使用中，问题往往集中在同一批输入上：六键手柄的肩键、容易放在够不到位置的 Start 与 Select，以及斜向输入——在原机使用微动摇杆的系统上，斜向尤其重要。",
        "points": [
          "映射时专门测试 L 与 R。",
          "确认 Start 与 Select 都能按到。",
          "除了四个正方向，也要测斜向。"
        ]
      },
      {
        "title": "触控与手柄可以并存",
        "body": "有些游戏需要实体手柄无法替代的触控操作，双屏系统尤其如此。让屏幕布局与已配对手柄同时可用，通常比在两者之间来回切换更实用。",
        "points": [
          "游戏需要触屏时，不要关掉触控。",
          "确认叠加层没有遮挡游戏视窗。",
          "触感反馈与触控布局可以分别调整。"
        ]
      },
      {
        "title": "按键没有反应时",
        "body": "从手柄往外排查：先在 iOS 中确认它可用，再在 Retropa 中确认，最后用一款确定会用到该按键的游戏测试。如果映射看起来正确但游戏没反应，可能是这款游戏本身根本没有使用该输入——这在早期掌机游戏里很常见。",
        "points": [
          "先在 iOS 设置里验证手柄。",
          "再到 Retropa 内核对映射。",
          "确认游戏确实会用到该按键。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "支持哪些手柄？",
        "answer": "iOS 支持的手柄都可以用于 Retropa。请先在 iOS 设置中配对，再在 App 内核对映射。"
      },
      {
        "id": "mapping-lost",
        "question": "为什么映射变了？",
        "answer": "布局按系统与游戏分别保存，因此为某个系统设置的映射不会自动套用到另一个系统。请核对当前游玩系统对应的映射。"
      },
      {
        "id": "touch",
        "question": "接上手柄后触控会失效吗？",
        "answer": "不会。触控仍然可用，这在需要触屏或副屏操作的游戏上很有用。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "存档",
    "title": "Retropa 的即时存档与回退 | iPhone 与 iPad",
    "description": "理解 Retropa 中游戏存档、即时存档与回退的区别，如何安全地在核心之间迁移存档，以及存档无法读取时该检查什么。",
    "summary": "游戏存档、模拟器即时存档与回退是三种不同机制，可迁移性也各不相同。本指南说明各自的作用以及如何安全备份。",
    "sections": [
      {
        "title": "三样都被叫做「存档」的东西",
        "body": "游戏自身存档由游戏写出；即时存档在某一瞬间记录整个模拟器状态；回退则是重放最近的历史。三者行为不同、存储方式不同，改后缀并不能互相转换。",
        "points": [
          "游戏存档由游戏本身创建。",
          "即时存档记录整个模拟器时刻。",
          "回退依赖近期历史，而不是保存的文件。"
        ]
      },
      {
        "title": "创建与使用即时存档",
        "body": "在难关之前、更换核心之前或套用新滤镜之前，即时存档都很有用，因为它可以让你回到一个确认可用的时刻。快速保存与快速读取正是为这种短期检查点设计的。",
        "points": [
          "更换核心前先存一个状态。",
          "状态是对比两套预设最快的方式。",
          "把游戏自身存档作为长期记录。"
        ]
      },
      {
        "title": "在核心之间迁移存档",
        "body": "即时存档并非在所有核心之间通用，因为状态记录的是某个具体实现的内部状况。由游戏写出的电池存档，迁移成功率要高得多。更换所选核心之前，两者都要备份。",
        "points": [
          "即时存档通常是核心专属的。",
          "电池存档的可迁移性更好。",
          "切换核心前先备份。"
        ]
      },
      {
        "title": "存档无法读取时",
        "body": "先判断它是游戏内数据还是即时存档，再确认自它写出之后核心是否变过、App 版本是否变过。如果状态读取失败，改用游戏自身存档，因为这条路径不依赖模拟器的内部状态格式。",
        "points": [
          "确认核心没有变化。",
          "确认存档类型。",
          "尽量回退到游戏自身存档。"
        ]
      },
      {
        "title": "能真正保住的备份",
        "body": "把原始游戏文件、游戏自身存档，以及你在意的即时存档分别放在不同位置。iCloud 或桌面副本都可以，关键是不要让 App 或设备上的一次故障同时抹掉所有副本。",
        "points": [
          "游戏文件本身也要备份，不只是存档。",
          "存档与状态文件分开保存。",
          "至少保留一份设备之外的副本。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "存档与即时存档有什么区别？",
        "answer": "存档由游戏写出，以游戏自己的格式记录进度。即时存档则完整记录某一刻的模拟器状态，且专属于产生它的核心。"
      },
      {
        "id": "rewind",
        "question": "回退可以退多远？",
        "answer": "回退从内存重放近期历史，而不是恢复已保存的文件，因此它的深度取决于缓冲区，而不是固定的存档槽位数。"
      },
      {
        "id": "transfer",
        "question": "可以把存档迁移到别的模拟器吗？",
        "answer": "游戏自身存档的可迁移性更好。即时存档依赖具体核心的内部格式，不应期待能在别处读取。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "排障",
    "title": "Retropa 里游戏无法载入？先检查这些",
    "description": "Retropa 中游戏无法启动的排查顺序：下载是否完整、后缀是否正确、系统识别是否准确、BIOS 是否缺失、mapper 是否受支持，以及核心相关的问题。",
    "summary": "按固定顺序排查——下载完整性、后缀、识别到的系统、BIOS 需求，最后才是核心选择——再判断文件是否真的不可用。",
    "sections": [
      {
        "title": "按固定顺序排查，而不是靠猜",
        "body": "大多数载入失败都来自少数几种原因，按一致的顺序检查可以避免浪费时间。下面的顺序从成本最低的检查走到成本最高的检查，因此一旦找到真正原因就可以停下。",
        "points": [
          "先查下载完整性。",
          "再查后缀与识别到的系统。",
          "然后才是 BIOS 与核心选择。"
        ]
      },
      {
        "title": "检查一：文件是否真的在设备上",
        "body": "如果文件只是云端占位条目，即使它出现在游戏库里，模拟器也拿不到可用数据。请在「文件」App 中打开它以触发下载，等下载完成后再重新导入。",
        "points": [
          "灰色或待下载的条目并没有下载完成。",
          "重试之前先完成下载。",
          "这是最常见的原因。"
        ]
      },
      {
        "title": "检查二：后缀是否与系统匹配",
        "body": "每个系统有自己的后缀，不匹配会产生核心无法解释的文件。改后缀不会转换任何东西，因此把 .gb 改成 .gba 之后，它仍然是 Game Boy 游戏，不会表现得像 Game Boy Advance 游戏。",
        "points": [
          ".gb、.gbc、.gba 与 .nds 分属不同系统。",
          "改后缀永远不能转换游戏。",
          "在游戏库中确认识别到的系统。"
        ]
      },
      {
        "title": "检查三：是否缺少 BIOS 或父集",
        "body": "部分系统与街机家族需要额外的 BIOS 文件，街机 set 还可能依赖父集。核心会报告缺少什么，请精确阅读该提示，因为缺 BIOS 与缺父集是两个不同的问题，处理方式也不同。",
        "points": [
          "阅读具体的报错文本。",
          "街机的 neogeo.zip 不是掌机 BIOS。",
          "Retropa 不提供 BIOS 下载。"
        ]
      },
      {
        "title": "检查四：换另一个核心",
        "body": "多个系统都提供不止一个核心。如果文件完整、命名正确、也没有缺少依赖，下一步就是更换核心，因为不同核心对原硬件的模拟严格程度不同。",
        "points": [
          "记录失败的是哪个核心。",
          "换核心后重试一次。",
          "用同一核心下的第二个游戏做对照。"
        ]
      },
      {
        "title": "支持请求里该包含什么",
        "body": "如果游戏仍然无法启动，有用的信息是 App 版本、系统、所选核心以及完整的报错文本。不要附带商业游戏或 BIOS 文件——排查并不需要它们，也不应该分享。",
        "points": [
          "App 版本与系统。",
          "所选核心与报错文本。",
          "绝不要附带商业 ROM 或 BIOS 文件。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "游戏打开后是黑屏，说明什么？",
        "answer": "通常是下载未完成、文件变体不受支持，或缺少 BIOS 之类的依赖。请先查下载，再查后缀，最后看核心给出的具体报错。"
      },
      {
        "id": "worked-before",
        "question": "游戏之前能玩，现在不行了，为什么？",
        "answer": "请检查 App 版本、所选核心或文件位置是否变化。即时存档是核心专属的，因此由另一个核心写出的状态可能读取失败，即使游戏本身仍然正常。"
      },
      {
        "id": "support",
        "question": "提交支持请求时应该附上什么？",
        "answer": "App 版本、系统、所选核心与完整报错文本。不要附带商业游戏或 BIOS 文件。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus：哪些免费，哪些需要 Plus",
    "description": "说明 Retropa 的哪些功能免费、哪些需要 Retropa Plus：掌机系统、街机家族、高级皮肤、高级滤镜与电视模式。当前价格以 App 内显示为准。",
    "summary": "Retropa 免费下载。掌机模拟无需付费即可使用；街机家族、高级皮肤与高级显示滤镜属于 Retropa Plus。当前价格与可用方案以 App 内显示为准。",
    "sections": [
      {
        "title": "免费可用的部分",
        "body": "下载 Retropa 不花钱，掌机模拟无需购买即可使用。你可以导入自己的游戏文件、使用标准皮肤与常规显示预设，并设置即时存档与手柄映射。导入文件这个动作本身不会触发任何付费。",
        "points": [
          "免费下载。",
          "掌机系统无需购买即可使用。",
          "包含标准皮肤与常规显示预设。",
          "导入游戏既不会解锁也不会要求付费功能。"
        ]
      },
      {
        "title": "需要 Retropa Plus 的部分",
        "body": "Retropa Plus 覆盖街机家族、高级皮肤与高级显示滤镜。这些属于新增能力，而不是对已有功能的限制：无论是否订阅，掌机游玩都照常可用。",
        "points": [
          "街机家族：CPS I、CPS II、CPS III、Neo Geo、PGM、M92。",
          "高级皮肤。",
          "高级 CRT 与 LCD 滤镜。",
          "电视模式与高级存档工作流。"
        ]
      },
      {
        "title": "为什么街机支持属于 Plus",
        "body": "街机模拟是一项独立的工作：多种基板、多文件 set、BIOS 依赖以及逐个 set 的兼容性。把它作为额外能力处理，可以让免费层保持简单，也让掌机体验对所有人免费开放。",
        "points": [
          "街机硬件与掌机硬件不同。",
          "街机 set 是多文件结构，且可能需要 BIOS。",
          "掌机支持不依赖 Plus。"
        ]
      },
      {
        "title": "任何档位都不附带游戏与 BIOS",
        "body": "Retropa 的任何档位都不提供游戏文件或 BIOS 文件，因为这是一款模拟器。内容需要你自己提供，且必须是你有权使用的内容——这一点不会因为付费而改变。订阅解锁的是模拟器能力，不是内容。",
        "points": [
          "任何档位都不附带游戏。",
          "不提供 BIOS 文件。",
          "只导入你有权使用的内容。"
        ]
      },
      {
        "title": "在哪里查看当前价格",
        "body": "价格、可用方案以及任何地区性优惠都在 App 内显示，由 App Store 以你的本地货币呈现。本页刻意不列出价格，这样调价永远不会让这一页过期。",
        "points": [
          "价格在 App 内显示。",
          "可用情况可能因地区而异。",
          "购买由 App Store 处理。"
        ]
      },
      {
        "title": "购买全部由 App Store 处理",
        "body": "所有购买与订阅都通过 App Store 完成。Retropa 不在网页端处理支付，本站也绝不会索要银行卡信息。续费、取消与退款由 App Store 按其条款管理。",
        "points": [
          "本站不收取任何支付信息。",
          "在 App Store 设置中管理或取消订阅。",
          "退款遵循 App Store 政策。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "不付费可以使用 Retropa 吗？",
        "answer": "可以。下载 Retropa 免费，掌机模拟无需购买即可使用。街机家族、高级皮肤与高级滤镜需要 Retropa Plus。"
      },
      {
        "id": "price",
        "question": "Retropa Plus 多少钱？",
        "answer": "价格与可用方案在 App 内显示，由 App Store 以你的本地货币呈现。本页不列出价格，以免调价后信息过期。"
      },
      {
        "id": "buy-here",
        "question": "可以在本站订阅吗？",
        "answer": "不可以。购买完全通过 App Store 完成，本站不会收集任何支付信息。"
      },
      {
        "id": "content",
        "question": "Plus 包含游戏吗？",
        "answer": "不包含。Retropa 的任何档位都不提供游戏或 BIOS 文件。请导入你有权使用的内容。"
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
