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
    "title": "iPhone 与 iPad 上的 Game Boy 模拟器 | Retropa",
    "description": "Retropa 在 iPhone 和 iPad 上跑你自己的 .gb 文件。哪个核心管 Game Boy、游戏怎么导入、画面与按键怎么调、打不开先查哪里，这一页讲完。",
    "summary": "带上自己的 .gb 文件，就能在 iPhone 与 iPad 上玩 Game Boy。四个核心随时可换，配掌机皮肤、LCD 与 CRT 观感，也支持手柄映射。",
    "sections": [
      {
        "title": "先准备一份 .gb 文件",
        "body": "手上得有一份自己的 Game Boy 游戏文件，Retropa 不附带游戏，也不提供 BIOS。文件先落到本机，另外留一份没动过的原始压缩包，后面出问题还能回头。",
        "points": [
          ".gb 是 Game Boy 游戏，.gbc 属于 Game Boy Color。",
          "改后缀不会把游戏变成另一个系统的游戏。",
          "游戏能正常跑起来之前，原始压缩包先别删。"
        ]
      },
      {
        "title": "Game Boy 由哪个核心运行",
        "body": "能跑 Game Boy 的核心一共有四个：mGBA、SkyEmu、SameBoy、JGenesis，默认用 mGBA，多数人不用管它。mGBA 与 SkyEmu 一并覆盖 GB、GBC 和 GBA；SameBoy 只盯 GB 与 GBC；JGenesis 的主场是世嘉，顺手也管 GB。某个游戏在某个核心上表现古怪，先换一个核心，再怀疑文件。",
        "points": [
          "日常玩直接用默认的 mGBA 就行。",
          "SameBoy 的重点是 GB 与 GBC 的还原度。",
          "核心是按游戏分别记住的。"
        ]
      },
      {
        "title": "从「文件」里导入",
        "body": "云端占位条目在列表里和真文件长得一样，导入却会失败，所以先确认文件已经在本机。打开 Retropa 游戏库的导入入口，选中游戏，然后直接启动一次：画面、声音、默认屏幕按键都对，再动手改别的。"
      },
      {
        "title": "挑一套贴合原机屏幕的布局",
        "body": "Game Boy 的键位很固定：方向键、A、B，加上 Start 和 Select。竖屏时屏幕在上、按键在下，单手就能玩；横屏两只拇指更舒展。不管怎么拿，确认皮肤没有压住游戏画面，六颗键每颗都按得到。",
        "points": [
          "别只看皮肤好不好看，一颗一颗试按键。",
          "Delta 的 .deltaskin 可以直接导入，但 DS 或 GBA 皮肤当不了 GB 布局。",
          "高级皮肤和高级滤镜要 Retropa Plus。"
        ]
      },
      {
        "title": "绿屏、液晶网格还是干净像素",
        "body": "先留一份原始画面做参照，才看得出滤镜改了什么。DMG 预设复刻初代掌机的四色反射屏，LCD Grid 在上面加一层子像素结构，CRT 处理则是另一条路。Retropa 的高级滤镜按屏幕实际大小算，不要求整数倍放大，所以换到任何尺寸的 iPhone 或 iPad，比例都不会走样。",
        "points": [
          "滤镜只改画面呈现，不改游戏本身的分辨率。",
          "核心跑不动的文件，滤镜也救不回来。",
          "确定要留某个预设前，先和原始画面比一次。"
        ]
      },
      {
        "title": "导入失败或存档出问题时",
        "body": "先看清楚三样东西：后缀、你选中的系统、报错原文。「文件」里那份还没下载完的话，等它下完再试一次。游戏自己的存档和模拟器的即时存档是两回事，别想着改后缀把一种变成另一种；要把存档搬到别的核心或 App，先备份。",
        "points": [
          "找支持时带上 App 版本、系统版本、核心和报错信息。",
          "不要把商业 ROM 或 BIOS 文件发过去。",
          "排查时先把皮肤和滤镜换回最朴素的状态。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa 自带 Game Boy 游戏吗？",
        "answer": "不带。Retropa 是模拟器，游戏和 BIOS 都要你自己准备，也只能导入你有权使用的文件。"
      },
      {
        "id": "bios-needed",
        "question": "GB 游戏需要 BIOS 吗？",
        "answer": "Retropa 内置的这些核心跑 GB 和 GBC 一般不需要 BIOS。真有核心开口要，就照它自己的提示办，别随手塞个不相干的文件进去。"
      },
      {
        "id": "gb-vs-gbc",
        "question": ".gbc 文件能当 Game Boy 游戏打开吗？",
        "answer": ".gbc 属于 Game Boy Color，Retropa 会在那个系统上打开它。改后缀改不了文件里的东西。"
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
    "title": "iPhone 与 iPad 上的 Game Boy Color 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 .gbc 游戏：颜色怎么调、核心怎么选、导入几步走完，以及游戏起不来时按什么顺序排查。",
    "summary": "用自己的 .gbc 文件玩 Game Boy Color。调色板、按游戏切换核心，还有针对那块反射式小屏做过的画面处理。",
    "sections": [
      {
        "title": "准备好 .gbc 文件",
        "body": "这一代的游戏文件用 .gbc 后缀。Retropa 不带游戏也不带 BIOS，文件要你自己准备，备份另存一份，只导入你有权使用的内容。",
        "points": [
          ".gbc 是 Game Boy Color 的游戏文件。",
          "初代 Game Boy 的 .gb 同样能跑，用的是同一批核心。",
          "把 .gb 改成 .gbc 换不来彩色。"
        ]
      },
      {
        "title": "Game Boy Color 该用哪个核心",
        "body": "SameBoy 是专为 GB 与 GBC 写的核心，mGBA 和 SkyEmu 也一并覆盖 Game Boy Color。要是颜色或时序看着不对，换个核心是最省事的第一步：每个核心对硬件的还原都有些出入。",
        "points": [
          "GBC 游戏可以先从 SameBoy 试起。",
          "mGBA 一个核心就把 GB、GBC、GBA 都包了。",
          "选过的核心会记在这个游戏名下。"
        ]
      },
      {
        "title": "导入和第一次启动",
        "body": "先把游戏下载到本机，否则「文件」只会一直给你占位条目。接着在 Retropa 游戏库的导入入口里选中它。颜色、声音、默认触控布局都确认没问题，再去套皮肤和滤镜，之后真出问题也容易往回找。",
        "points": [
          "找一段真正吃彩色的画面来试，别只盯标题。",
          "听声音和看画面一样重要。",
          "排查的时候别动原始文件。"
        ]
      },
      {
        "title": "彩色掌机的画面与布局",
        "body": "那块小屏是反射式的，当年也说不上亮。LCD Grid 预设加的子像素结构更靠近它原本的样子；DMG 预设反倒是在还原更早的单色面板。Retropa 的高级滤镜量的是真实输出区域，不靠整数倍缩放，什么尺寸的设备上比例都稳。",
        "points": [
          "每换一个预设，都跟原始画面对一次。",
          "高级滤镜要 Retropa Plus。",
          "确认皮肤没有挡住游戏视窗。"
        ]
      },
      {
        "title": "按键与横竖屏",
        "body": "需要的键不多：方向键、A、B、Start、Select。竖屏适合随手玩几分钟；横屏按键摊得更开，大号 iPhone 上手感更好。你平时用哪个方向，就在哪个方向把每颗键按一遍。"
      },
      {
        "title": "Game Boy Color 游戏起不来时",
        "body": "从报错原文看起，再回头确认后缀和你选的系统。如果区域或调色板不对，先拿另一个核心对比，别急着翻设置。一个核心写出来的存档，另一个核心未必读得懂，切换之前记得备份。",
        "points": [
          "记下 App 版本、系统、核心和报错内容。",
          "商业 ROM 和 BIOS 文件不要发给支持。",
          "先用默认皮肤加朴素滤镜，把问题圈出来。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Retropa 包含 Game Boy Color 游戏吗？",
        "answer": "不包含。Retropa 是模拟器，游戏与 BIOS 都不提供，请只导入你有权使用的文件。"
      },
      {
        "id": "gb-on-gbc",
        "question": "初代 Game Boy 的游戏能玩吗？",
        "answer": "能。初代 Game Boy 的 .gb 文件照样在 Retropa 上跑，用的就是跑 Game Boy Color 的那批核心。"
      },
      {
        "id": "force-colour",
        "question": "把 .gb 改名成 .gbc 就会有颜色吗？",
        "answer": "不会。后缀说明不了文件里装的是什么，改名也开不了 Game Boy Color 的特性。"
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
    "title": "iPhone 与 iPad 上的 NES 模拟器 | Retropa",
    "description": "iPhone 和 iPad 上跑你自己的 NES 游戏。.nes、.fds、.nsf 都认，核心怎么选、游戏怎么导入、手柄怎么映射、载入失败怎么查，一并说清。",
    "summary": "用自己的文件跑 NES 游戏，.nes、.fds 和 NSF 音频都在支持范围内。三个核心可选，支持手柄映射，也有 CRT 画面处理。",
    "sections": [
      {
        "title": "Retropa 认哪些 NES 文件",
        "body": "NES 在 Retropa 里不止一种后缀。除了最常见的 .nes 卡带镜像，核心也接受 Famicom 磁碟机镜像和 NSF 声音数据，iNES 容器的普通版本与统一版本都能处理。",
        "points": [
          ".nes 是标准 NES 卡带镜像。",
          ".fds 对应 Famicom 磁碟机的内容。",
          ".nsf 与 .nsfe 装的是声音，不是能玩的游戏。",
          "ZIP 与 RetroPack 容器可以直接导入打开。"
        ]
      },
      {
        "title": "三个核心，各走各的路",
        "body": "能启动 NES 游戏的有三个：RusticoNES、TetaNES 和 JGenesis，默认是 RusticoNES。游戏出了问题，换个核心跑一遍，很快就能分辨是 ROM 本身别扭，还是两个核心的实现有差别。选定的核心记在对应游戏上。",
        "points": [
          "卡带游戏先用默认的 RusticoNES。",
          "游戏表现不对劲时，可以换 TetaNES 试试。",
          "NSF 音频在各核心下的表现和游戏不一样。"
        ]
      },
      {
        "title": "把 NES 游戏导进来",
        "body": "文件要先落到本机，只剩云端占位条目的导入一定失败。从 Retropa 游戏库的导入入口选中它，用默认布局启动，画面、音频和默认按键都正常了，再去换皮肤或滤镜。"
      },
      {
        "title": "只有两个动作键的手柄",
        "body": "NES 手柄简单到有点固执：方向键、A、B、Start、Select。放到触屏上，按键很容易挤成一团，所以要专门试斜方向还能不能触发，游戏里会不会误碰 Start 或 Select。接一个实体手柄，这类麻烦基本就没了。",
        "points": [
          "先在 iOS 里配对手柄，再回 Retropa 核对映射。",
          "四个正方向之外，斜方向也要试。",
          "横屏竖屏都用的话，两边都得过一遍。"
        ]
      },
      {
        "title": "画面怎么调才像当年",
        "body": "这些游戏当年是给标清电视做的，所以 CRT 处理往往比干净像素更对味。App 里有扫描线和阴栅预设，高级滤镜按真实输出区域算，不看整数倍。",
        "points": [
          "原始画面留着当参照。",
          "缩放不是整数倍时，普通扫描线可能会闪。",
          "高级滤镜属于 Retropa Plus。"
        ]
      },
      {
        "title": "NES 游戏载入不了的时候",
        "body": "先读报错原文，再动任何设置。转储损坏、mapper 不支持、文件头缺失、磁碟机游戏少了 BIOS，这是四件不同的事。确认后缀和所选系统之后，换个 NES 核心再跑一次。",
        "points": [
          "反馈问题时记下 App 版本、核心和完整报错。",
          "排查期间别动原始文件。",
          "不要把商业 ROM 或 BIOS 文件发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Retropa 能打开哪些 NES 格式？",
        "answer": ".nes、.fds、.nsf、.nsfe、.unf 和 .unif 都行，ZIP 与 RetroPack 容器也能直接打开。"
      },
      {
        "id": "nsf",
        "question": ".nsf 文件能当游戏玩吗？",
        "answer": "不能。NSF 里是声音数据，播放出来只有音频。想玩游戏请用 .nes 或 .fds。"
      },
      {
        "id": "gamepad",
        "question": "实体手柄能玩 NES 游戏吗？",
        "answer": "可以。兼容手柄先和 iOS 配对，再在 Retropa 里做映射。配好之后核对一遍，按键顺序常常和你想的不一样。"
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
    "title": "在 iPhone 与 iPad 上玩 SNES 游戏 | Retropa",
    "description": "把你自己手上的 SNES 游戏搬到 iPhone 和 iPad 上。.sfc 与 .smc 都能读，由 LakeSnes 核心跑起来，六个按键可以映射，游戏起不来时也有排查步骤。",
    "summary": "Retropa 直接读你的 .sfc 与 .smc 文件，交给 LakeSnes 核心运行。六键手柄映射、即时存档和 CRT 风格的画面处理都是现成的。",
    "sections": [
      {
        "title": "SNES 文件格式",
        "body": "SNES 的镜像大多以 .sfc 或 .smc 发出来，这两种后缀就够覆盖你手上绝大多数文件。Retropa 还认 .fig、.swc、.bs 和 .st，ZIP 与 RetroPack 压缩包也能直接打开。游戏起不来时，先回头看后缀：文件头和内容对不上，是启动失败里很常见的一种。",
        "points": [
          ".sfc 和 .smc 都能直接读，不需要转换。",
          ".fig、.swc、.bs、.st 也在支持列表里。",
          "ZIP 与 RetroPack 压缩包不用先解压。"
        ]
      },
      {
        "title": "LakeSnes 核心",
        "body": "SNES 游戏默认跑在 LakeSnes 上，你不主动换，用的就是它。JGenesis 也认这个系统，不过能读的后缀要少一些。某个游戏时序不对或者画面错乱时，先确认文件本身是干净的镜像，再判断是不是核心的问题，当前版本改了什么可以翻一下发行说明。",
        "points": [
          "LakeSnes 是 SNES 的默认核心。",
          "少数卡带里多了一颗协处理器，游戏因此挑核心。",
          "核心选择按游戏分别记住，互不影响。"
        ]
      },
      {
        "title": "导入与首次运行",
        "body": "把文件落在本机再导入，别停在云端占位条目上。它在列表里和真文件长得一样，可导入那一步还是会失败。从 Retropa 游戏库的导入入口选中它，先跑一遍：画面、声音、默认触控键都正常，再去调显示设置，之后出问题才追得回原因。"
      },
      {
        "title": "六个按键要留够地方",
        "body": "SNES 手柄在十字键、A、B、Start、Select 之外又加了 X、Y、L、R，很多游戏还得同时按下两个。触屏上最好摊成横屏，把常用组合挨个按一遍。动作类游戏，配一只实体手柄还是更踏实。",
        "points": [
          "L 和 R 最容易被漏掉，单独验一遍。",
          "试着把斜向和肩键一起按。",
          "看看皮肤有没有压住游戏画面。"
        ]
      },
      {
        "title": "画面怎么处理",
        "body": "当年 SNES 的美术是照着 CRT 电视画的，扫描线或阴栅这类预设，往往比裸像素网格更接近记忆里的样子。Retropa 的高级滤镜按屏幕实际大小来算，不要求整倍数——手机屏幕的高度很少能被整除，这一点在手机上格外明显。",
        "points": [
          "先留一份未处理的原始画面当参照。",
          "缩放不是整数倍时，简单的扫描线叠加容易闪。",
          "高级滤镜在 Retropa Plus 里。"
        ]
      },
      {
        "title": "SNES 游戏起不来时",
        "body": "三样东西依次查：文件后缀、Retropa 认出来的系统、报错的原话。其他游戏都好、只有某一个不行，多半是这款游戏依赖特殊卡带芯片。测试时原始文件不要动，实在没头绪就换到 LakeSnes 之外的另一个核心试试。",
        "points": [
          "联系支持时，把 App 版本、核心、报错一起带上。",
          "卡带芯片的问题，滤镜换多少遍都没用。",
          "商业 ROM 和 BIOS 文件请不要发给支持。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": ".sfc 和 .smc 到底有没有区别？",
        "answer": "没有。两者都是标准的 SNES 镜像，Retropa 都收。后缀本身不会改变游戏内容。"
      },
      {
        "id": "chip-games",
        "question": "别的游戏都好，为什么只有这一个打不开？",
        "answer": "有几个游戏需要卡带里额外的硬件。如果文件是干净镜像，其他游戏也跑得动，那它就是最可能的原因，下一步换核心再测一次。"
      },
      {
        "id": "saves",
        "question": "即时存档能带到另一个核心上用吗？",
        "answer": "不保证。游戏存档和即时存档是两回事，一个核心写出来的状态，另一个核心未必读得出来，切换之前先备份。"
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
    "title": "iPhone 与 iPad 上的 Genesis 与 Mega Drive 模拟器 | Retropa",
    "description": "在 iPhone 和 iPad 上跑你自己的 Sega Genesis 与 Mega Drive 游戏。.md、.smd、.gen 都能读，核心是 JGenesis，三键与六键手柄都做了映射，起不来时也有排查思路。",
    "summary": "Retropa 用你准备的文件运行 Genesis 与 Mega Drive，由 JGenesis 负责模拟。六键手柄可以映射，即时存档和 CRT 风格滤镜都在。",
    "sections": [
      {
        "title": "Genesis 与 Mega Drive 是同一台主机",
        "body": "同一台机器，日本、欧洲和亚洲大部分地区叫 Mega Drive，北美叫 Genesis。里面的芯片一模一样，文件放哪边都能跑，差别只在盒子上的字。Retropa 两个名字都列，各地文件后缀略有出入也是这个缘故。",
        "points": [
          ".md 与 .smd 是常见的 Mega Drive 镜像。",
          ".gen 在北美更常见。",
          "后缀只是标签，不会换掉游戏想要的硬件。"
        ]
      },
      {
        "title": "JGenesis 核心",
        "body": "管 Genesis 与 Mega Drive 的是 JGenesis，同一个核心顺手把 Master System、Game Gear 和几台世嘉掌机也包了下来。一个核心伺候好几台机器当然方便，代价是每个游戏认成哪个系统变得要紧：系统还停在 Genesis 就导入 Master System 游戏，是这里最常见的乌龙。",
        "points": [
          "JGenesis 覆盖 MD、GEN、SMS 与 GG。",
          "报问题之前，先看一眼识别出的系统。",
          "核心与系统选择都跟着游戏各自记住。"
        ]
      },
      {
        "title": "导入 Mega Drive 游戏",
        "body": "文件先存到本机，别只留一个云端条目。它看着像真的，到导入那一步就会失败。走 Retropa 游戏库的导入入口挑中它，启动一次，画面、声音和默认触控布局都没问题，再往上加皮肤或者滤镜。"
      },
      {
        "title": "映射六键手柄",
        "body": "世嘉出过三键和六键两种手柄，有些游戏会看它认出的是哪一种，然后悄悄换一套操作。触控布局里，A、B、C 要都能按到；游戏用得上 X、Y、Z 和 Mode 的话，也得留在手边。挑一组这个游戏真的会按的键试一下。",
        "points": [
          "三键和六键两套布局都配一遍。",
          "不少游戏里 Start 兼作暂停，别放到够不着的地方。",
          "配一只实体手柄，大部分误按都能省掉。"
        ]
      },
      {
        "title": "16 位主机的画面",
        "body": "Mega Drive 的输出是给 CRT 电视准备的，扫描线或阴栅往往比原始像素网格更对味，尤其是抖动图案——当年的电视会把它混成一片新的色阶。这里的高级滤镜贴着屏幕真实的输出范围来算，而不是套一个固定倍数。",
        "points": [
          "每个预设都跟未处理的画面比一比。",
          "抖动重的场景，最能试出预设的好坏。",
          "高级滤镜是 Retropa Plus 的功能。"
        ]
      },
      {
        "title": "Genesis 游戏起不来时",
        "body": "依次核对后缀、这个游戏显示的系统、以及报错原文。一个核心扛着好几台主机，区域和系统对不上的情况，在这里比单一平台常见得多。深层设置先别碰，把识别到的系统改对，原始文件保持原样。",
        "points": [
          "记下 App 版本、识别到的系统、核心和报错。",
          "支持不需要你附上 ROM 或 BIOS 文件。",
          "把存档挪到别的核心之前，单独备份一次。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive 就是 Genesis 吗？",
        "answer": "是同一台主机的两个地区名字，游戏文件在哪个名字下都能跑。"
      },
      {
        "id": "six-button",
        "question": "六键手柄能用吗？",
        "answer": "触控布局和实体手柄映射都覆盖了多出来的那几个键。要注意，部分游戏会按它认到的柄型切换操作方式。"
      },
      {
        "id": "system-detect",
        "question": "为什么 Retropa 把我的游戏认成了别的系统？",
        "answer": "这里的同一个核心负责好几台世嘉平台。先看这个游戏识别到的系统，改对了，再判断是不是兼容性问题。"
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
    "title": "在 iPhone 与 iPad 上玩 Game Gear | Retropa",
    "description": "在 iPhone 和 iPad 上玩你自己的 .gg 游戏。这一页讲哪个核心负责它、文件怎么导入、那块小屏幕怎么设置，以及游戏起不来时该检查什么。",
    "summary": "Retropa 用你的 .gg 文件跑 Game Gear，核心是 JGenesis。背光液晶的观感、掌机皮肤和完整按键映射都有。",
    "sections": [
      {
        "title": "先备好一个 .gg 文件",
        "body": "Game Gear 游戏是 .gg 后缀。Retropa 不带游戏，也不带 BIOS，文件得自己准备，导入之前再在 App 之外留一份副本。",
        "points": [
          ".gg 是 Game Gear 的后缀。",
          ".sms 属于 Master System，不是 Game Gear。",
          "改后缀并不能把两者换过来。"
        ]
      },
      {
        "title": "Game Gear 归哪个核心管",
        "body": "这一台同样归 JGenesis 管。它在 Mega Drive、Genesis 和 Master System 之外，把 Game Gear 也一起包了。一个核心同时伺候好几台世嘉机器，所以查兼容性问题之前，先确认这个游戏认出来的系统是 Game Gear。"
      },
      {
        "title": "导入与第一次启动",
        "body": "游戏文件先落到本机，再从 Retropa 游戏库的导入入口选中。上皮肤之前，画面、声音和默认按键都要过一遍，这样出了岔子才知道从哪儿查起。"
      },
      {
        "title": "一块小尺寸背光屏",
        "body": "那块屏幕又小又亮，还带背光，所以 LCD Grid 这类处理通常更合身；CRT 预设压上去，会比真机重不少。Retropa 的高级滤镜按屏幕真实尺寸适配，不需要整数倍缩放。",
        "points": [
          "每个预设都跟未处理的画面比一次。",
          "高级滤镜需要 Retropa Plus。",
          "看准皮肤有没有挡住游戏画面。"
        ]
      },
      {
        "title": "按键与方向",
        "body": "真机上只有十字键、两个动作键和 Start，就这么几颗。键少，竖屏布局摆起来舒服，不过还是要确认不用挪手就能按到 Start，斜向也走一遍。"
      },
      {
        "title": "Game Gear 游戏跑不起来时",
        "body": "核对后缀、识别到的系统、报错原文这三样。把 Master System 的文件当 Game Gear 导进去，或者反过来，是最常见的一种。排查的时候，原始文件别去动它。",
        "points": [
          "把 App 版本、识别到的系统、核心、报错备好。",
          "商业 ROM 和 BIOS 文件请不要发给我们。",
          "存档在核心之间搬家前，先做备份。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear 跟 Master System 关系有多近？",
        "answer": "关系很近，但不是同一台机器，文件后缀也不一样。同一个核心能跑两者，所以要看清文件被认成了哪个系统。"
      },
      {
        "id": "bios",
        "question": "玩 Game Gear 要准备 BIOS 吗？",
        "answer": "Retropa 自带的核心不需要。如果某个核心开口要，照它给出的提示做，别随便塞一个无关文件进去。"
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
    "description": "Sega Master System 的 .sms 文件怎么在 iPhone 与 iPad 上跑起来：认准哪个核心、导入怎么做、键位怎么摆，以及游戏不启动时先从哪儿查。",
    "summary": "Master System 游戏交给 JGenesis 核心运行，文件由你自己准备。掌机皮肤、画面滤镜、手柄映射都在，触屏键位也能按习惯挪。",
    "sections": [
      {
        "title": "先找到一个 .sms 文件",
        "body": "Master System 的 ROM 用 .sms 后缀。App 本身不带游戏，也不带 BIOS，文件得你自己准备；动手导入之前，先在 App 之外留一份没动过的副本。",
        "points": [
          ".sms 后缀对应的是 Master System。",
          ".gg 属于 Game Gear，是另一台机器。",
          "ZIP 与 RetroPack 压缩包可以直接打开，不必先解压。"
        ]
      },
      {
        "title": "一个核心，好几台世嘉机器",
        "body": "JGenesis 不只跑 Master System，Mega Drive、Genesis 和 Game Gear 也归它管。一个核心摊开服务好几套硬件，所以文件表现不对劲时，第一件事是看清 App 识别成了哪个系统。"
      },
      {
        "title": "导入完先跑一次",
        "body": "先把文件存到本机，再从游戏库的导入入口选中它。第一次启动别急着套皮肤，先看画面、听声音、按一遍默认键位，都正常了再折腾显示效果。"
      },
      {
        "title": "两颗动作键，一个方向键",
        "body": "原厂手柄只有一个方向键和两颗动作键，暂停键装在主机面板上，不在手柄上。触屏布局里最容易漏的就是它，记得给暂停留一颗按得到的键。"
      },
      {
        "title": "让画面回到 CRT 年代",
        "body": "早期的世嘉游戏是按 CRT 电视画的，扫描线和阴栅预设比裸露的像素格子更接近原机。Retropa 的高级滤镜按屏幕实际大小算，不用凑整数倍缩放。",
        "points": [
          "每个预设都跟原始画面对一对。",
          "高级滤镜属于 Retropa Plus。"
        ]
      },
      {
        "title": "游戏起不来的时候",
        "body": "按顺序看三样：后缀、App 识别出的系统、报错原文。区域对不上，或者把 Master System 文件当 Game Gear 载入，是最常见的两种。排查期间别去动原始文件。",
        "points": [
          "反馈问题时附上 App 版本、识别系统、核心与报错原文。",
          "商业 ROM 和 BIOS 请勿随工单发送。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "手里的文件算 Master System 还是 Game Gear？",
        "answer": "看后缀最快：.sms 是 Master System，.gg 是 Game Gear。游戏导入后，Retropa 也会标出它认出来的系统。"
      },
      {
        "id": "pause",
        "question": "为什么找不到暂停键？",
        "answer": "原机上它长在主机面板，不在手柄上。搬到 Retropa 里，它是屏幕布局的一部分，记得映射到顺手的位置。"
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
    "description": "把自己手里的 .ws WonderSwan 文件拿到 iPhone 与 iPad 上玩。Ares 核心负责运行，竖屏握法照样支持，导入步骤和排障思路都写在这一页。",
    "summary": "WonderSwan 与 WonderSwan Color 由 Ares 核心运行，文件自备。这台掌机本来就能竖着拿，Retropa 的屏幕布局也顺着它来。",
    "sections": [
      {
        "title": "文件后缀先分清楚",
        "body": "黑白机型的游戏是 .ws，彩色机型是 .wsc，后缀不同，能力也不同。App 里没有游戏和 BIOS，请自备一份；导入之前，先另外备份原始文件。",
        "points": [
          ".ws 对应初代 WonderSwan，.wsc 对应 WonderSwan Color。",
          "两套硬件的能力并不一样。",
          "把后缀改成 .wsc，游戏也不会真的变成彩色。"
        ]
      },
      {
        "title": "能跑它的只有 Ares",
        "body": "目录里支持 WonderSwan 的核心只有 Ares 一个，没有第二个可选，所以 Retropa Plus 的核心切换在这里也变不出备选。游戏起不来时，先看镜像是否干净、识别到的系统和后缀是否对得上，再去翻设置。"
      },
      {
        "title": "从导入入口开始",
        "body": "文件先落到本机，再从导入入口把它加进游戏库。画面、声音、默认按键都确认过之后，再换皮肤或挑显示预设。"
      },
      {
        "title": "竖着拿才是原味",
        "body": "这台机器横竖都能拿，但相当一部分游戏是按竖屏做的。画面看着别扭时，先把方向切到竖屏试一局，再判断是不是真的出了问题。",
        "points": [
          "竖屏、横屏各玩一会儿。",
          "不同游戏认的方向并不统一。",
          "选定方向后，确认每颗键都按得到。"
        ]
      },
      {
        "title": "反射屏该配什么滤镜",
        "body": "WonderSwan 用的是反射式单色屏，像素排列跟别家不一样。LCD Grid 预设通常最贴近它，CRT 预设一压上去就比原机沉得多。高级滤镜的量法跟着屏幕实际尺寸走，不必迁就整数倍。",
        "points": [
          "先把原始画面留作参照。",
          "高级滤镜要用到 Retropa Plus。"
        ]
      },
      {
        "title": "启动失败先查什么",
        "body": "后缀、识别到的系统、报错原文，按这个顺序过一遍。彩色游戏当成黑白机导入，或者反过来，是最常踩的坑。排查期间原始文件先别改。",
        "points": [
          "写报告时带上 App 版本、识别系统、核心和报错内容。",
          "商业 ROM 与 BIOS 文件不要发给支持团队。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "换成彩色机型，文件类型也跟着变吗？",
        "answer": "会。WonderSwan 与 WonderSwan Color 用的后缀不一样，彩色游戏放进单色机型，未必能正常显示。"
      },
      {
        "id": "orientation",
        "question": "画面怎么是歪的？",
        "answer": "不少 WonderSwan 游戏本来就是竖屏玩的。先把方向切到竖屏试一局，再判断画面有没有问题。"
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
    "description": "手上的 .ngp 与 .ngpc 文件怎么在 iPhone 与 iPad 上跑：谁负责运行、那颗微动摇杆按起来什么感觉，以及它和 Neo Geo 街机为什么是两回事。",
    "summary": "Neo Geo Pocket 与 Pocket Color 是掌机，由 Ares 核心运行，不需要 Plus；街机那边是另一码事。",
    "sections": [
      {
        "title": "同名，但不是一台机器",
        "body": "两者只共享 Neo Geo 这块招牌。Pocket 是掌机，彩色机型也是；MVS 与 AES 是街机基板，文件格式和核心各走各的。掌机这条线在标准版里就能跑，街机才要 Plus。",
        "points": [
          ".ngp 是初代 Pocket，.ngpc 与 .ngc 属于彩色机型。",
          "街机那头的 neogeo.zip 跟 Pocket 游戏没关系。",
          "街机与 Pocket 的游戏库彼此分开。"
        ]
      },
      {
        "title": "确认后缀再导入",
        "body": "导入之前看一眼后缀。Pocket 游戏就是单个掌机镜像；街机 Neo Geo set 是一堆芯片文件，旁边还可能跟着 BIOS。两者拿来互换，是这个系统上最常见的失误。"
      },
      {
        "title": "Pocket 也归 Ares 管",
        "body": "给这两台 Pocket 的核心，目录里只有 Ares 一个，没有别的可换，也就不存在 Plus 核心切换这回事。跑不起来时，先对照后缀和识别到的系统，再琢磨镜像干不干净。"
      },
      {
        "title": "那颗会咔哒响的摇杆",
        "body": "原机装的是一颗带段落感的微动摇杆，不是普通十字键。真摇杆划斜向时是滚过去的，平的触屏容易漏掉这一下。摆好布局后，专门试几次斜向，别只按上下左右。",
        "points": [
          "斜向要单独测，不能只看四个正方向。",
          "两颗动作键按久了别让手酸。",
          "常打格斗的话，配一只手柄更踏实。"
        ]
      },
      {
        "title": "小彩屏别套重滤镜",
        "body": "Pocket 的彩屏又小分辨率又低，轻轻一层 LCD 处理就够了，压上浓重的 CRT 预设反而过头。高级滤镜照屏幕实际大小铺开，不用凑整数倍。",
        "points": [
          "开滤镜前后放在一起比一比。",
          "高级滤镜要 Plus 才解锁。"
        ]
      },
      {
        "title": "起不来时查这几处",
        "body": "先对后缀，再对识别到的系统，最后看报错文字。要是游戏库里也放着街机 set，确认自己没有点错。查问题的过程中，原始文件保持原样。",
        "points": [
          "记下 App 版本、识别系统、核心和报错文字。",
          "不要把商业 ROM 或 BIOS 文件附在支持请求里。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "街机 Neo Geo 的游戏能在这里跑吗？",
        "answer": "那是另一个系统，核心和文件都不一样，还得开 Retropa Plus。Pocket 走的是标准版，两条线互不影响。"
      },
      {
        "id": "neogeo-zip",
        "question": "Pocket 游戏要准备 neogeo.zip 吗？",
        "answer": "不用。那个压缩包是街机硬件用的，掌机游戏从来不会找它。"
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
    "description": "受支持的 Neo Geo MVS 街机 set 怎么在 iPhone 与 iPad 上运行。这一页讲 set 的内部结构、什么时候要 BIOS、父集和克隆集差在哪，以及启动失败按什么顺序查。",
    "summary": "受支持的 Neo Geo 街机 set 能在 iPhone 与 iPad 上跑，触屏、实体手柄和 CRT 滤镜都可用。街机要开 Retropa Plus；游戏与 BIOS 文件一律自备。",
    "sections": [
      {
        "title": "街机要 Plus，掌机不用",
        "body": "Neo Geo 街机归在 Retropa 的街机家族里，街机核心要 Plus 才能开。这件事跟 Pocket 掌机没有关系，那两台在标准版里就能直接玩。",
        "points": [
          "街机家族统一要 Retropa Plus。",
          "Neo Geo Pocket 属于掌机，是另一套系统。",
          "游戏与 BIOS 文件在任何情况下都不提供。"
        ]
      },
      {
        "title": "一个 set 是一组芯片文件",
        "body": "卡带机是一个游戏一个文件，街机不是这么存的。一个游戏对应一组芯片文件，多半塞在一个 ZIP 里，缺的那几块常常要问父集或 BIOS 要。街机压缩包和掌机 ROM 的脾气，就是这么不一样。",
        "points": [
          "导入流程没让你解压，就把 ZIP 原样留着。",
          "有时还要另外准备一个 BIOS 压缩包。",
          "只有克隆集的话，核心要的文件往往凑不齐。"
        ]
      },
      {
        "title": "导入后先读报错",
        "body": "走导入入口把 set 选进来，先用默认布局启动。核心要是说少了文件或者少了 BIOS，请把那条提示读完——缺父集和缺 BIOS 看着像，补法完全不同。",
        "points": [
          "先看清报错，再谈改设置。",
          "排查过程中原始压缩包别删。",
          "投币和开始这两颗键，确认按得到。"
        ]
      },
      {
        "title": "Pocket 文件放错了地方",
        "body": ".ngp 和 .ngpc 是掌机线的格式，跟街机家族不搭边。把 Pocket ROM 改个名冒充街机压缩包没有用，反过来也一样走不通。",
        "points": [
          ".ngp、.ngpc 都是掌机 Pocket 的格式。",
          "街机 set 由多个文件组成，可能还要配 BIOS。",
          "提交问题之前，先看 App 认出的系统对不对。"
        ]
      },
      {
        "title": "摇杆加一排按键",
        "body": "街机柜上是一根摇杆配一排按键，不少游戏还指望你同时按两颗。屏幕按键和兼容手柄都能用，CRT 处理也按街机输出的样子准备好了。高级滤镜要 Plus。",
        "points": [
          "手柄先在 iOS 里配对，再进 Retropa 做映射。",
          "斜向和按键一起按的组合要试。",
          "街机画面套 CRT 预设，通常比裸像素网格顺眼。"
        ]
      },
      {
        "title": "set 起不来查什么",
        "body": "先看基板选对没有，再对一遍 set 里实际有哪些文件，最后看核心点名要哪个 BIOS。只有克隆集、没带父集，或者 set 本身就不全，换什么滤镜和皮肤都救不回来。",
        "points": [
          "记下 App 版本、所选基板、核心和完整报错。",
          "ROM 数据缺了，改滤镜换皮肤都补不上。",
          "商业 ROM 与 BIOS 文件请留在本机。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "街机核心为什么归在 Plus 里？",
        "answer": "街机家族和高级皮肤、高级滤镜同属 Plus 那一档。掌机和卡带系统不受影响，照常能玩。"
      },
      {
        "id": "bios",
        "question": "到底要不要准备 Neo Geo BIOS？",
        "answer": "很多街机 set 都要，缺了核心会当场点出来。用你有权使用的那份就行，Retropa 不提供下载。"
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket 和它是一回事吗？",
        "answer": "不是。Pocket 是掌机，文件格式和核心都是它自己的。街机压缩包和 Pocket 游戏换不了。"
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
    "description": "mGBA 是 Retropa 里 Game Boy 三代的默认核心。这一页讲它认哪些文件、第一次进游戏该看什么、画面不对劲时先怀疑哪里，以及 Plus 换核心要注意的事。",
    "summary": "Game Boy、Game Boy Color、Game Boy Advance 都归 mGBA 管，而且它本来就是默认选中的那个。多数人其实不用动它：先把游戏跑起来，画面和按键确认没问题，再谈皮肤和滤镜。",
    "sections": [
      {
        "title": "目录里收哪些系统，认哪些后缀",
        "body": "mGBA 来自上游项目 https://github.com/mgba-emu/mgba。下面这份清单是 Retropa 目录实际收录的范围，比上游项目小，也不等于每个游戏都能跑。能不能开，先看后缀对不对，再看游戏本身。游戏和 BIOS 都不随 App 提供，请只导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "第一次进游戏，按代分着看",
        "body": "先把文件下载到本机，再从 Retropa 游戏库导入，让 App 自己认出系统。彩色游戏要走彩色那条路，改后缀加不出硬件功能。Game Boy Advance 多两个肩键，从更早掌机搬来的皮肤常常没做 L 和 R，进游戏后记得按一下。",
        "points": [
          "过了开场画面再听声音、按按键。",
          "先用默认布局，皮肤之后再导入。",
          "原始文件在 App 外留一份。"
        ]
      },
      {
        "title": "画面不对，先分清是滤镜还是核心",
        "body": "觉得画面怪，先把滤镜关掉再看一遍。绿屏和液晶网格都在有意改像素，拿它们判断 mGBA 画得对不对，方向就错了。声音或时序出问题，记下一个能重复的场景和 App 版本；开场 logo 这种地方说明不了什么。"
      },
      {
        "title": "换核心之前，先想清楚为什么要换",
        "body": "mGBA 是这三个系统的默认选择，多数游戏停在默认就好。真要换，得先有 Retropa Plus——系统本身免费玩，换核心不在免费范围里。挑的核心要同时认你的系统和文件格式，选择按游戏保存。动手之前，把游戏存档和原核心的即时存档各备份一份，然后在同一个场景里对比声音、画面和按键。",
        "points": [
          "mGBA 即时存档记的是 mGBA 当时的内部状态，换到别的核心不保证还能读。",
          "游戏存档仍要先备份、先验证；mGBA 不会替你把进度迁到别的核心。",
          "换核心不会转换游戏文件，也补不上缺的 BIOS。"
        ]
      },
      {
        "title": "这条线到 Game Boy Advance 为止",
        "body": "Nintendo DS 不走 mGBA。DS 文件该交给目录里的 DS 核心，把 .gba 改个名不会让它变成 DS 游戏。别的模拟器导出的即时存档也不是游戏文件，别拿它当 ROM 导入。选中系统后如果 App 要 BIOS，自己准备一份，Retropa 不提供 BIOS。"
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "可以只给一个游戏换核心吗？",
        "answer": "可以，得先有 Retropa Plus。选择按游戏记住，但换之前把存档备份好，即时存档别指望跨核心能读。"
      },
      {
        "id": "display",
        "question": "换个滤镜能修好兼容问题吗？",
        "answer": "不能。先退回原始画面看。滤镜改的是显示方式，改不了模拟的硬件，也改不了文件里的内容。"
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
    "description": "SkyEmu 在 Retropa 里既管 Nintendo DS，也管 Game Boy 系列。这一页说清它认的后缀、双屏触控怎么摆、兼容性为什么只能一个个试，以及 Plus 换核心在这里为什么用不上。",
    "summary": "Nintendo DS 在 Retropa 里只有 SkyEmu 一个核心，所以 DS 游戏没有换核心这回事。它顺带也跑 Game Boy 系列。DS 能不能跑，得一个游戏一个游戏试，触控交互更是如此。",
    "sections": [
      {
        "title": "收哪些系统，认哪些后缀",
        "body": "SkyEmu 的源码放在 https://github.com/skylersaleh/SkyEmu。下面列的是 Retropa 目录里的范围，比上游项目支持的要少，别按上游的功能表来期待。后缀在列表里，只代表 App 会试着打开这个文件，不保证某一个游戏能跑起来。游戏和 BIOS 都请自备，App 里没有。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "DS 只有一个核心，这件事改变了什么",
        "body": "DS 的兼容性只能一个个游戏试。文件在本机存好再导入，确认 App 认成 Nintendo DS，然后别停在开场画面——找个用得到触控、有声音的段落再下结论。卡住就记下 App 版本和卡住的准确位置。皮肤救不了核心不支持的游戏，换核心也变不出第二个 DS 核心。",
        "points": [
          "目录里 Nintendo DS 名下只有 SkyEmu。",
          "Plus 的核心切换在这里加不出第二个 DS 核心。",
          "试 DS 游戏时，存档另外留一份备份。"
        ]
      },
      {
        "title": "两块屏幕，一根手指",
        "body": "先挑一个能把上下屏同时看全的布局。竖屏可以上下叠着放，横屏就得看皮肤怎么排。按你真正游玩的尺寸去点那些小的触控目标，也要弄清楚是哪块屏在接收触控。手柄能顶上按键，但代替不了所有触控操作。",
        "points": [
          "两块屏幕都要试，别只看主画面。",
          "接了手柄，触控区域照样留在手边。",
          "单屏掌机的皮肤不等于 DS 布局。"
        ]
      },
      {
        "title": "它跑更早的掌机时",
        "body": "Game Boy 系列用单屏布局。颜色不对或者按键按不出来，先核对 App 认的系统和你套的皮肤。ZIP 和 RetroPack 只是导入用的容器，不是多出来的模拟系统，里面的文件照样得在目录范围内。GBA 文件改成 .nds 也变不成 DS 游戏。"
      },
      {
        "title": "换核心这件事，在 DS 上没什么可换",
        "body": "换模拟核心是 Retropa Plus 的功能，掌机系统本身免费玩并不包含这一项。可对 Nintendo DS 来说，目录里就 SkyEmu 一个，没有第二个可选。真要在别的系统上对比，也得挑同时支持那个系统和文件格式的核心，选择按游戏保存。开始之前，把游戏存档和原核心的即时存档都留一份，再用同一个场景比声音、画面和输入。",
        "points": [
          "SkyEmu 即时存档对应的是 SkyEmu 当时的内部状态，跨核心不保证能用。",
          "游戏存档也要自己备份并试过；DS 这条线没有自动迁移承诺。",
          "换核心不转换游戏文件，缺的 BIOS 也补不了。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Nintendo DS 游戏用哪个核心跑？",
        "answer": "Retropa 目录里给 Nintendo DS 列的就是 SkyEmu。具体游戏跑得怎么样要单独看，也没有第二个 DS 核心可以退回去。"
      },
      {
        "id": "touch",
        "question": "接了手柄，DS 游戏还用触控吗？",
        "answer": "用。用到触屏的游戏，触控区域得留在手边，手柄覆盖不了所有触控操作。"
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
    "description": "SameBoy 在 Retropa 里只管 Game Boy 和 Game Boy Color。这一页讲怎么看颜色、范围到哪为止、即时存档的边界，以及什么情况下才值得掏 Plus 换核心。",
    "summary": "SameBoy 对应的是初代单色和彩色 Game Boy 那两代硬件，范围就这么窄。窄有窄的好处：拿它做对比很顺手。但这也不说明别的核心就一定更不准。",
    "sections": [
      {
        "title": "目录里的系统和格式",
        "body": "SameBoy 的上游项目是 https://github.com/LIJI32/SameBoy。Retropa 只把它接到很窄的一段硬件上，以上游项目的完整功能来推断这里能跑什么，会落空。下面这些后缀只是起点，具体某个游戏能不能跑另说。App 里既没有游戏也没有 BIOS，请只导入你有权使用的文件。",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "把滤镜关掉，再看颜色",
        "body": "先导入本机文件，看 App 认成 Game Boy 还是 Game Boy Color。显示设置保持原始状态，DMG 处理会主动抽掉彩色游戏的色彩。挑一个你确定会变色的场景，两次都看这同一个场景，而不是游戏里的两个不同位置。"
      },
      {
        "title": "时序、声音和那几个键",
        "body": "从默认皮肤开始，方向键、A、B、Start、Select 逐个按一遍。时序或者声音不对，记下发生的确切时刻，再看看关掉显示效果之后还在不在。有 Retropa Plus 的话，可以把游戏摆到另一个兼容核心旁边比一比，找出差异出在哪一段；但看得出不同，并不能证明哪个核心更接近原机。"
      },
      {
        "title": "什么时候才值得换核心",
        "body": "换核心属于 Retropa Plus 的功能，Game Boy 和 Game Boy Color 本身是免费玩的。值得动手的前提是你能说清问题是什么：哪个声音、哪一帧、哪颗键。核心要同时认你的系统和文件格式，对不上就白换。选择按游戏记住，所以开始之前，把游戏存档和原核心留下的即时存档各留一份，再用同一个场景测第二次。",
        "points": [
          "SameBoy 即时存档记的是它自己的内部状态，跨到别的核心能不能读没有保证。",
          "Game Boy 游戏存档也要备份、也要自己验证，SameBoy 不负责自动迁移。",
          "换核心不转换游戏文件，也补不上缺少的 BIOS。"
        ]
      },
      {
        "title": "它是 Game Boy 核心，不是 GBA 核心",
        "body": "GBA 文件不在这个核心的范围内，该交给目录里支持 GBA 的核心；改后缀也不会让 SameBoy 接受它。别的核心写出的即时存档同样过不来。原状态先留着，游戏存档的备份也要单独试过之后才敢用。"
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy 能跑 Game Boy Advance 游戏吗？",
        "answer": "不能。目录把 SameBoy 和 Game Boy、Game Boy Color 配在一起，Game Boy Advance 不在范围内。"
      },
      {
        "id": "why",
        "question": "什么情况下该拿 SameBoy 和其他核心比？",
        "answer": "在核对过文件、关掉滤镜之后，同一个场景上的时序、颜色或声音问题仍然重复出现。先把存档复制出来，另外这种对比需要 Retropa Plus。"
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
    "title": "RusticoNES：iPhone 与 iPad 上的 NES 默认核心 | Retropa",
    "description": "RusticoNES 是 Retropa 默认跑的 NES 核心：卡带与磁盘格式、mapper 检查、首次启动要看什么、存档怎么备份，以及换核心为什么需要 Plus。",
    "summary": "NES 一共三个核心，RusticoNES 是默认那条路，目录覆盖 .nes、.fds、.unf、.unif。启动失败先别怪画面，先看卡带元数据和磁盘游戏的要求。",
    "sections": [
      {
        "title": "目录里列了哪些格式",
        "body": "RusticoNES 的上游项目在 https://github.com/zeta0134/rustico，Retropa 只取了其中一部分，不是它的全部本事。下面这些来自本站的核心目录：扩展名对得上，也不保证某一张卡真能跑起来。游戏和 BIOS 需自备，只导入你有权使用的文件。",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "卡带、UNIF 与磁盘镜像",
        "body": "卡带镜像和 Famicom 磁盘镜像是两种不同的东西，别混着看。UNIF 是卡带容器，不是 iNES 头的别名。导入时把原来的文件头和扩展名留着；为了让文件看起来像别的格式而改名、删字节，会把识别卡板用的信息一起丢掉。",
        "points": [
          "原始镜像另存一份，别只留导入后的那份。",
          "磁盘游戏弹出 BIOS 提示时就照着看：Retropa 不带这个 BIOS。",
          "NSF 音频不在 RusticoNES 名下，去 TetaNES 那条目录找。"
        ]
      },
      {
        "title": "首次启动与按键检查",
        "body": "先把镜像下载到本机再用游戏库导入，『文件』里那些云端条目看着像真文件，字节没落地就导不进来。导入后确认识别为 NES。皮肤先不动，显示效果也先别开。方向键、A、B、Start、Select 都按一遍，斜着按、两个键一起按也要试。自定义布局里少一个键，先怀疑布局，再怀疑 mapper。"
      },
      {
        "title": "只有某个卡带失败而其他正常时",
        "body": "每张 NES 卡带用的 mapper 都可能不同，能认扩展名不等于那块卡板已经实现。把报错原文记下来；如果自己转储的元数据里写了 mapper 和区域，一并记上。随手改文件头很少有用，缺 BIOS 也救不了一块从没实现过的卡板。磁盘游戏要分清：少的是 BIOS，还是磁盘数据。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "换核心要 Retropa Plus，NES 本身能免费玩也不影响这条。对比之前先看对方核心收不收你手里这个格式。核心是每个游戏单独选的，换之前把游戏自身存档和原核心的即时存档都拷出来，再在同一个场景里比声音、画面和操作。",
        "points": [
          "RusticoNES 即时存档存的是它当时的内存，别的 NES 核心通常读不了，别指望通用。",
          "NES 游戏存档也自己备一份；换到 TetaNES 前要在目标核心里实际验证。",
          "换核心不会转换游戏文件，也不会凭空补上缺的 BIOS。"
        ]
      },
      {
        "title": "只对比相互重叠的格式",
        "body": "NES 系统页那张格式表是三个核心的并集，谁也不能照着它全都打开。手上有 Plus 想拿 RusticoNES 跟 TetaNES 或 JGenesis 比，先翻一眼目标核心的目录条目。场景和显示设置都别动，中途换个皮肤或滤镜，就说不清是谁变了。"
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "NSF 音频是记在 RusticoNES 名下的吗？",
        "answer": "不是。目录把 NSF 和 NSFE 放在 TetaNES 那条，音频文件本来也不是能玩的卡带游戏。"
      },
      {
        "id": "mapper",
        "question": "扩展名在列表里，游戏就一定启动得了？",
        "answer": "不一定。卡板的 mapper、文件本身是否完整、磁盘游戏的要求，都会挡住它。动手改文件之前，先把报错原文记下来。"
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
    "title": "TetaNES：iPhone 与 iPad 上的 NES 替代核心 | Retropa",
    "description": "TetaNES 在 Retropa 里多管一条线：NES / Famicom 卡带、磁盘镜像与 NSF 音乐，按格式分开检查，手柄怎么设，换核心为什么要 Plus。",
    "summary": "TetaNES 是 NES 的另一个选择，比只认卡带的核心贪心一些，目录里还收磁盘和音乐文件。导入前先分清手里是哪一类，别指望它一开就是游戏画面。",
    "sections": [
      {
        "title": "目录里这条覆盖了什么",
        "body": "先认识上游：TetaNES 来自 https://github.com/lukexor/tetanes，但 Retropa 只按自己的目录列格式，比那个项目的功能少一截。它管得比一般卡带核心宽，卡带、磁盘、音乐都算：.nes、.fds、.nsf、.nsfe。它同样不带游戏和 BIOS，请只导入你有权使用的文件。",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "音乐文件不是卡带游戏",
        "body": "NSF 和 NSFE 装的是 NES 音乐，导入这类文件后没出现关卡，本身不算故障。先把设备音量、音频输出检查一遍；Retropa 给的是一套 App 自己的操作方式，别指望上游桌面播放器的整套界面。想玩游戏，请从你有权使用的卡带或磁盘镜像开始。",
        "points": [
          "试音乐时先看设备音量和输出有没有问题。",
          "把音频文件改名，它也不会变成卡带镜像。",
          "UNIF 这个扩展名记在 RusticoNES 名下，不在 TetaNES 这儿。"
        ]
      },
      {
        "title": "导入卡带或磁盘镜像",
        "body": "文件先落到设备本机，再走游戏库的导入入口。导完看一眼识别结果是不是 NES，原始镜像不要动。Famicom 是这台机器在日本的叫法，Famicom Disk System 还多一层磁盘要求。如果核心提示 BIOS 或磁盘数据有问题，就按那条提示解决，别拿一张不相干的卡带顶上。"
      },
      {
        "title": "测试输入与可重复的场景",
        "body": "NES / Famicom 手柄就那几个键：方向键、两个动作键、Start、Select。皮肤先保持默认，斜向输入确认一下，然后找一个能重复出现的场景来测。CRT 效果放到后面再开：扫描线会改变观感上的细节，模拟的内容一点没变。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "把 NES 游戏交给 TetaNES，先要过 Retropa Plus 这一关，因为换核心属于 Plus 的功能；玩 NES 本身不用。动手前也问一句：这个格式 TetaNES 收吗？两份格式表对不上，换过去也是白换。核心按游戏记住，下次不用重选。换之前把游戏存档和旧核心的即时存档各存一份，再拿同一个场景在两个核心上比声音、画面和按键。",
        "points": [
          "TetaNES 即时存档记的是它自己的内部状态，RusticoNES 等另一个核心读不出来。",
          "NES 游戏存档也要备份验证，TetaNES 不会自动搬到别的核心。",
          "换核心不转换游戏文件，缺的 BIOS 也不会因此出现。"
        ]
      },
      {
        "title": "替代核心不是万能修复",
        "body": "TetaNES 和 RusticoNES 的格式表、实现都不是一回事。只有你的镜像在两个核心都成立，换过去才有一点信息量，而且它多半只说明时序或 mapper 有差别，不保证某一款卡板被支持。每个核心的即时存档就归它自己，别当成普通文件随便挪。"
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "我的 NSF 文件为什么没有出现能玩的游戏？",
        "answer": "NSF 是音乐数据。你该去听声音，而不是等一个正常关卡；想玩游戏就用卡带或磁盘镜像。"
      },
      {
        "id": "switch",
        "question": "NES 游戏换到 TetaNES 免费吗？",
        "answer": "换模拟核心要 Retropa Plus。动手前先确认目标核心的格式覆盖，并备份好进度。"
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
    "title": "LakeSnes：iPhone 与 iPad 上的 SNES 核心 | Retropa",
    "description": "LakeSnes 负责 Retropa 的 SNES / Super Famicom：镜像与拷贝卡格式、卡带芯片的边界、六键手柄，以及换核心需要的 Plus。",
    "summary": "SNES 这边由 LakeSnes 接手，目录里有好几种镜像和拷贝卡格式。文件认得出，和卡带里那块芯片能不能模拟，是两码事。",
    "sections": [
      {
        "title": "目录里列出的 SNES 格式",
        "body": "LakeSnes 的根在 https://github.com/dinkc64/LakeSnes 这个桌面项目上。Retropa 里能加载什么，以本站目录为准，不是那台电脑上能跑的所有东西。格式在列表里，也不代表某一款游戏就一定正常。App 本身不带游戏和 BIOS，请只导入有权使用的文件。",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "保持镜像与文件头完整",
        "body": "同一台机器在日本叫 Super Famicom，所以文件列表里两个名字都会出现。卡带镜像多是 .sfc 或 .smc，目录里另外几种是拷贝卡格式。光看扩展名，看不出文件前面挂没挂拷贝卡头，也看不出卡带要不要额外硬件。留着你实际下载的那份镜像，另存一份备份，别一上手就削文件头。"
      },
      {
        "title": "检查完整的手柄按键",
        "body": "游戏进了游戏库，先确认 Retropa 认出的系统，再从原装布局开始。两个动作键的掌机到头了，SNES 还有 X、Y、L 和 R 要走。肩键、斜向、游戏要求同时按的组合都试一遍。一个好看却少 L 或 R 的皮肤，能让健康的游戏看着像死机。",
        "points": [
          "六个动作键之外，Start 和 Select 也别漏。",
          "先配一个手柄并映射好，再来判断触控布局行不行。",
          "心里留着原始画面，才分得清是操作问题还是显示问题。"
        ]
      },
      {
        "title": "卡带芯片与特殊格式的边界",
        "body": "不少 SNES 卡带壳里还塞着自己的协处理器或别的芯片。目录那张扩展名表不是按芯片排的兼容表，BS 或 ST 文件被认出来，也不等于 Retropa 里所有相关外设流程都在。碰上单独一款游戏失败，若你知道它要什么硬件就记下来，再把报错原文一起记上。滤镜填不上缺的硬件，改个扩展名也一样。"
      },
      {
        "title": "切换核心与保留进度",
        "body": "SNES 本来就默认走 LakeSnes，大多数人不用打开这个菜单。换核心是 Retropa Plus 的功能，即使玩 SNES 不用付费也一样。真要换，先看对方核心有没有同时列出你的系统和格式，不然这一晚白花。选择按游戏存下来。先拷走游戏存档和旧核心的即时存档，再在两个核心上重放同一段，听声音、看画面、试操作。",
        "points": [
          "即时存档装的是一个核心的内部内存，换个核心打不开。",
          "游戏自己的存档也备份一份，别等人替你搬。",
          "换核心不会转换游戏文件，也不会补上缺失的 BIOS。"
        ]
      },
      {
        "title": "对比 LakeSnes 与 JGenesis",
        "body": "JGenesis 的目录里也写着 SNES，能收的 SNES 格式却比 LakeSnes 少。有 Plus 可以把两边摆一起看，前提是你手里这个格式两个条目都列了。同场景跑两遍，操作一致、别开滤镜，两个核心的即时存档各放各的地方。一次对比里这张卡带表现好，说明不了下一款特殊芯片游戏。"
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "LakeSnes 能跑的格式，JGenesis 都能跑吗？",
        "answer": "别这么假设。每个核心看各自的目录条目；系统级的格式表是好几个核心凑出来的并集。"
      },
      {
        "id": "chips",
        "question": "格式表能保证特殊芯片兼容吗？",
        "answer": "不能。文件被认出来，和卡带里那块芯片能不能模拟，是两件事。先看报错原文和当前选的核心，再考虑动镜像。"
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
    "description": "JGenesis 在 Retropa 里一个人管着 GB、NES 和世嘉几代主机。本页说清目录收哪些格式、Genesis 与 Mega Drive 怎么分、识别错了该看哪里，以及 Plus 解锁的核心切换。",
    "summary": "一个核心，好几代主机。可真正决定硬件、按键和存档上下文的是 Retropa 认出来的那个系统：JGenesis 两边都能跑，不代表文件可以互换。",
    "sections": [
      {
        "title": "目录里收录的系统与格式",
        "body": "JGenesis 的代码来自上游项目 https://github.com/jsgroth/jgenesis，一套桌面端代码，一路长到横跨几代主机；Retropa 只打开目录里列出的那部分。下面的清单写的是这个 App 实际收什么，不是上游 README 的完整功能表。扩展名对得上，只说明文件会被尝试打开，不代表某一款游戏一定跑得起来。游戏和 BIOS 文件都不在 App 里，导入前请确认你有权使用。",
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
        "title": "同一台机器，两个名字",
        "body": "北美叫 Genesis，日本和欧洲叫 Mega Drive，机器本身没差别。Retropa 的目录在两个名字下都有条目，列表里会同时看到。扩展名只能提示镜像格式，当不了地区标签：光看文件名，判断不出游戏对时序或地区有什么要求。原始文件留在原处，先确认识别到的系统，不要靠改名去挑市场。"
      },
      {
        "title": "导入前先认清是哪台机器",
        "body": "先把镜像放进「文件」并等下载完，再从游戏库导入。动手之前分清楚：Master System 不是 Game Gear，NES / Famicom 也不是 SNES / Super Famicom。一个核心覆盖多台机器，底下仍然走各自的硬件路径。识别出来的系统和预期不符，先解决文件的事，再去调画面和按键。",
        "points": [
          "Master System 和 Game Gear 是表亲，不是同一台机器。",
          "一个系统的格式清单，可能是几个核心的格式并在一起。",
          "本页只讲 Retropa 目录的范围，上游 JGenesis 还支持什么不在此列。"
        ]
      },
      {
        "title": "按键跟着系统变",
        "body": "Genesis 要试 A、B、C，布局提供六键的，顺手把 X、Y、Z 也按一遍。Game Gear 看 Start，Master System 别漏了暂停。SNES 布局有肩键，NES 布局没有。要判断核心是不是丢了某颗键，请先在真实游戏场景里把这组组合按出来。"
      },
      {
        "title": "换核心之前，先把进度留下",
        "body": "世嘉卡带这边，Plus 打开的是切换入口，不会凭空造出一个目录里没有的实现。真有替代核心时，它得同时覆盖你的系统和文件格式，对比才算数。核心选择按游戏保存。动手之前，把游戏存档和原核心的即时存档各留一份，再让两个核心跑同一个场景，声音、画面、按键自己听自己看。",
        "points": [
          "即时存档记的是某个核心的内部状态，换个核心读不出来。",
          "游戏存档也要单独备份并验证，没有自动搬家的保证。",
          "换核心不会转换游戏文件，也补不上缺的 BIOS。"
        ]
      },
      {
        "title": "覆盖面广，不等于有第二个核心",
        "body": "目录里这些世嘉卡带系统只列了 JGenesis 一个核心，装了 Plus 也不会多出一个。上游是桌面项目，系统列表比 Retropa 里长得多；它能读光盘镜像或扩展硬件，不等于那些路径已经接进这个 App。以目录里列出的和 App 实际提示的为准。"
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "文件名以 .gen 结尾，就一定是北美版吗？",
        "answer": "不能。Genesis 和 Mega Drive 是同一台主机的两个地区名，扩展名既说明不了游戏来自哪里，也说明不了它怎么对待时序。"
      },
      {
        "id": "upstream",
        "question": "上游 JGenesis 支持的系统，Retropa 都会做吗？",
        "answer": "没有这个保证。本页写的是 Retropa 自己的目录，比上游项目短一截。"
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
    "description": "Ares 在 Retropa 里负责 GBA、WonderSwan 和 Neo Geo Pocket 这几支掌机。本页讲目录收到哪一步、彩色机型怎么认、竖屏布局要注意什么，以及 Plus 解锁的核心切换。",
    "summary": "Ares 在上游是个什么都能跑的模拟器，Retropa 只接进来其中一块。几支掌机家族出现在这里，桌面版那串长长的系统列表并不会跟着过来。",
    "sections": [
      {
        "title": "Retropa 接进来的那部分",
        "body": "Ares 来自 https://github.com/ares-emulator/ares，桌面版能跑的系统远不止这几支掌机。Retropa 只把目录里列出的部分接进来，所以下面这份清单止于扩展名：文件被认出来是一回事，某款游戏跑得好不好是另一回事。App 里没有游戏，也没有 BIOS 文件，只导入你有权使用的文件。",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "单色机型和彩色机型别搞混",
        "body": "镜像先落到本机，再看 Retropa 认出来的是初代 WonderSwan 还是 WonderSwan Color，是普通 Neo Geo Pocket 还是 Pocket Color。彩色机型做得到单色硬件做不到的事。改后缀不是格式转换：只在彩色机上跑得动的游戏，不会因为改了名字就变成初代机型的游戏。",
        "points": [
          "原始镜像留一份，进度另外单独备份。",
          "别急着查调色板，先看识别出来的机型对不对。",
          "出现系统专属的固件提示就按提示处理，BIOS 需要自己准备。"
        ]
      },
      {
        "title": "竖着拿，也只是其中一种方向",
        "body": "WonderSwan 的游戏有的按横向设计，有的按纵向设计，还有的在两者之间切。先弄清这盘游戏想要哪个方向，再看两组方向键和你选的皮肤布局。把手机竖起来，并不等于模拟画面和每一颗键都转对了。布局够不到需要的按键，就换一个布局，别指望核心自己重映射。"
      },
      {
        "title": "Pocket 和 Neo Geo 街机是两码事",
        "body": "Neo Geo Pocket 吃的是掌机镜像，不是 MVS 那种一堆文件的街机套装。街机的 BIOS 压缩包顶不了 Pocket 镜像。用默认布局试斜向和两颗动作键。Pocket 自己的屏幕是单色的，彩色画面只有 Pocket Color 才该有。跑街机是另一项能力，需要 Retropa Plus。"
      },
      {
        "title": "什么时候才值得换核心",
        "body": "GBA 是这里唯一有得挑的系统：默认核心是 mGBA，Ares 是额外选项。切换核心要 Retropa Plus，跟系统本身是不是免费无关。WonderSwan 和 Neo Geo Pocket 的目录里只列了 Ares，没有第二个核心可对比。真要对比，先把游戏存档和当前核心的即时存档备份好，再让两个核心跑同一个场景，声音、画面、按键自己判断。",
        "points": [
          "即时存档属于写下它的那个核心，换到别处打不开。",
          "游戏存档也留一份，没有谁会替你自动迁移。",
          "换核心不会转码游戏镜像，也不会把 BIOS 补给你。"
        ]
      },
      {
        "title": "哪些能对比，哪些只能照原样跑",
        "body": "有替代核心的只有 GBA；WonderSwan 和两款 Neo Geo Pocket，目录里只列了 Ares。Plus 不会为它们补上第二个实现，切换只在已经存在兼容核心时才起作用。Ares 上游的范围比自己在这里宽得多，改个扩展名并不会启用上游的另一个系统。Retropa 里能看到什么，就是能跑什么。"
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Pocket 这一支能跑我的 Neo Geo 街机套装吗？",
        "answer": "不能。Pocket 和 Neo Geo 街机是两套硬件，要的文件也不一样。跑街机需要 Retropa Plus。"
      },
      {
        "id": "alternate",
        "question": "开了 Plus，WonderSwan 或 Pocket 会多出一个核心吗？",
        "answer": "不会。Retropa 的目录在这些系统下只列了 Ares，切换只在已经有兼容的替代实现时才有意义。"
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
    "title": "iPhone 与 iPad 上的 Delta 替代选择 | Retropa",
    "description": "想换掉 Delta？先看清两边各自的长处：街机支持、.deltaskin 皮肤导入、显示滤镜，也写明 Delta 更强的那些地方。",
    "summary": "Retropa 是 iPhone 与 iPad 上的掌机与街机模拟器。现成的 .deltaskin 皮肤包可以直接搬过来，另有街机家族，以及不要求整数倍缩放的显示滤镜；界面始终按掌机来设计。",
    "sections": [
      {
        "title": "从 Delta 带过来的东西",
        "body": "换模拟器值不值，取决于原来的配置能不能接着用。Retropa 读得了 Delta 的 .deltaskin 包，晚上调了半天的布局不用从头再做。导入前先看一眼这个包是给哪个系统、哪个方向做的，进去之后再确认按键有没有挡住游戏画面。",
        "points": [
          ".deltaskin 包可以直接导入，不需要转换。",
          "信任某个皮肤之前，先确认它面向哪个系统。",
          "横屏竖屏支持到什么程度，取决于包本身。"
        ]
      },
      {
        "title": "Retropa 相比 Delta 多出的能力",
        "body": "差别最明显的是街机。除了掌机系统，Retropa 还能跑受支持的 CPS I、CPS II、CPS III、Neo Geo、PGM 和 M92 街机家族，一个游戏库装下两类东西。街机核心要开 Retropa Plus，游戏和 BIOS 文件得自己准备。",
        "points": [
          "街机家族和掌机共用一个游戏库。",
          "街机核心需要 Retropa Plus。",
          "街机 set 是多文件结构，往往还要配 BIOS。"
        ]
      },
      {
        "title": "不要求整数倍缩放的显示滤镜",
        "body": "复古滤镜大多希望游戏画面正好铺满整数个屏幕像素。iPhone 的屏幕尺寸常常除不尽，结果不是留下黑边，就是扫描线忽粗忽细。Retropa 的高级滤镜按屏幕实际大小来算，横竖屏和不同皮肤布局都能撑住。网站上的预览只是近似，以 iOS App 里的画面为准。",
        "points": [
          "滤镜改的是显示方式，不是游戏分辨率。",
          "高级滤镜需要 Retropa Plus。",
          "普通扫描线叠加在非整数倍下可能闪烁。"
        ]
      },
      {
        "title": "Delta 更强的方面",
        "body": "Delta 的用户盘子大得多，在 App Store 上的年头也更长，公开的皮肤攒成了一大片社区资产。想要人最多的方案、最全的现成皮肤，或者碰到问题一搜就有答案，选 Delta 很合理。这一页不会装作不是。",
        "points": [
          "Delta 的社区更大，第三方资料也更多。",
          "皮肤这件事上，Delta 有网络效应。",
          "Retropa 更年轻，现成皮肤没那么多。"
        ]
      },
      {
        "title": "干脆两个都装",
        "body": "两款 App 都能免费下载，内购也都可选。最实在的试法是这样：把一个 Delta 皮肤导进 Retropa，再分别开一局掌机游戏和一个街机 set，按键顺不顺手、画面耐不耐看，让手感自己说话。原始文件和皮肤不管最后留哪一边，都别删。",
        "points": [
          "两个都能免费下载，内购可选。",
          "不管最后选哪个，原始文件和皮肤都留着。",
          "好不好用，在自己的设备上试，别只看对比表。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "我现有的 Delta 皮肤能导进 Retropa 吗？",
        "answer": "能。Retropa 支持 .deltaskin 包。原始资源包留一份，再确认它对应的系统和方向跟你平时玩的一致。"
      },
      {
        "id": "free",
        "question": "Retropa 免费吗？",
        "answer": "下载免费，内购是可选项。街机核心、高级皮肤和高级滤镜要 Retropa Plus，解锁内容以 App 内为准。"
      },
      {
        "id": "roms",
        "question": "Retropa 附带游戏吗？",
        "answer": "不附带。它是模拟器，不带游戏也不带 BIOS 文件。导入的内容得是你有权使用的。"
      },
      {
        "id": "which-better",
        "question": "哪个更好用？",
        "answer": "两边想要的东西不一样。Delta 的社区和现成皮肤更多；Retropa 多了街机家族、不吃整数倍的滤镜，以及 .deltaskin 导入。装到自己设备上各玩一会儿，比看表格准。"
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
    "title": "Retropa 和 Delta 放在一起比：街机、滤镜与皮肤",
    "description": "把 Retropa 与 Delta 并排看：各自能跑哪些系统、街机怎么支持、皮肤能不能互通、滤镜差在哪儿，以及哪一边更适合你。",
    "summary": "两个 iOS 模拟器，侧重不一样。Delta 胜在社区体量和公开皮肤的数量；Retropa 手里的牌是街机家族，以及分数倍缩放也站得住的滤镜。",
    "sections": [
      {
        "title": "能跑哪些系统",
        "body": "掌机这一块，两边重叠得厉害，常玩的机器基本都能覆盖。差别出在街机：Retropa 认一批受支持的街机基板，Delta 那边的情况本页无法核实，不做判断。街机要 Retropa Plus，掌机不用。",
        "points": [
          "掌机覆盖范围两边差不太多。",
          "街机家族是 Retropa 自己添的那部分。",
          "玩街机要 Plus。"
        ]
      },
      {
        "title": "皮肤与布局",
        "body": "你在 Delta 里调顺手的按键布局，可以搬过来——Retropa 认 .deltaskin 这种包。这只是文件格式层面的兼容，不代表两边有什么隶属或背书关系。真到了挑皮肤，Delta 公开的库更大，逛起来选择更多。",
        "points": [
          "Retropa 能读 .deltaskin 包。",
          "Delta 公开的皮肤库更大。",
          "导入之后，确认这个包支持你的系统和方向。"
        ]
      },
      {
        "title": "显示滤镜",
        "body": "画面这头，Retropa 的高级 CRT 与 LCD 滤镜按屏幕实际大小铺开，不要求整数倍，也能吃 RetroArch 的着色器链，包括 .slang 和 .slangp 预设。高级滤镜归 Retropa Plus。预览图毕竟是隔着屏幕看的，成色要到 App 里确认。",
        "points": [
          "高级滤镜不要求整数倍缩放。",
          "Retropa 支持 RetroArch 着色器链。",
          "高级滤镜要 Plus。"
        ]
      },
      {
        "title": "社区、资料与积累",
        "body": "论年头和体量，Delta 在 App Store 上待得更久，用户也多得多，论坛回答和第三方教程自然攒得厚。Retropa 更年轻，用户盘子更小。把这件事说反，对谁都不诚实。",
        "points": [
          "Delta 更早进 App Store。",
          "用户多，社区里能查到的答案就多。",
          "Retropa 目前的用户规模更小。"
        ]
      },
      {
        "title": "怎么选",
        "body": "街机是你要玩的东西，或者滤镜挑整数倍让你受不了，那就给 Retropa 在桌面上留个位置。反过来，皮肤库越大越好、身边能问的人越多越好，Delta 更稳妥。两边都不带游戏和 BIOS，也都免费下载——拿自己的文件各试一局，比任何对比表都算数。",
        "points": [
          "两边都免费下载。",
          "要评估哪个，都不需要先做承诺。",
          "游戏文件各自准备。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta 支持街机吗？",
        "answer": "这一页没法核实。能说的是：Retropa 跑受支持的 CPS、Neo Geo、PGM 与 M92 街机家族，而街机核心要 Retropa Plus。"
      },
      {
        "id": "skins",
        "question": "同一套皮肤，两边都能用吗？",
        "answer": "Retropa 能导入 Delta 的 .deltaskin 包，所以你手上那份通常也能在 Retropa 里用起来。导入之后核对一下目标系统和方向。"
      },
      {
        "id": "price",
        "question": "用 Retropa 要先付费吗？",
        "answer": "不用。下载免费，Plus 是可选项，用来解锁街机核心、高级皮肤和高级滤镜。"
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
    "title": "在 iPhone 与 iPad 上把游戏导入 Retropa",
    "description": "把你自己的游戏文件放进 Retropa：导入入口在哪儿、云端占位条目为什么总是失败、哪些格式能开，以及文件被拒绝时先查什么。",
    "summary": "从「文件」App 把游戏文件搬进 Retropa 游戏库。会说到能开的格式、ZIP 与 RetroPack 容器的脾气，以及导入卡住时该从哪一步查起。",
    "sections": [
      {
        "title": "开始之前",
        "body": "这台模拟器本身不带游戏，也不带 BIOS 文件。你手上那份文件得是你有权使用的，而且已经躺在设备本机。先在 App 外面留一个没动过的副本——导入过程里手滑，最便宜的保险就是它。",
        "points": [
          "只导入你有权使用的内容。",
          "每个原始文件单独留一份备份。",
          "App 免费下载，但不提供游戏。"
        ]
      },
      {
        "title": "第一步：把文件放到设备上",
        "body": "「文件」App 里列出来的东西，不一定真的躺在你手机上。云端占位条目就是这种情况：名字和图标都在，字节还在服务器那头，点导入只会失败。先点开它，等下载完成，再回 Retropa 导入一遍。灰色或者标着需要下载的条目，都是占位。",
        "points": [
          "在「文件」里点开一次，确认已经下载。",
          "显示为灰色或提示需要下载的，就是占位条目。",
          "等下载完成再导入。"
        ]
      },
      {
        "title": "第二步：从游戏库导入",
        "body": "从 Retropa 游戏库的导入入口选中那个文件。让 App 自己判断系统，先用默认布局进去跑一局。皮肤和滤镜留到游戏确实能跑之后再换，出问题时才知道是哪一步动的。"
      },
      {
        "title": "支持哪些文件格式",
        "body": "后缀必须和系统对上：Game Boy 是 .gb，GBC 是 .gbc，GBA 是 .gba，DS 是 .nds。ZIP 和 RetroPack 容器也能不开包直接读。后缀只是给系统看的标签，改掉它并不会把游戏换成另一个系统。",
        "points": [
          "改后缀不会把游戏在系统之间转换。",
          "ZIP 与 RetroPack 容器可以不解压直接打开。",
          "街机 set 是多文件结构，处理方式不一样。"
        ]
      },
      {
        "title": "导入失败时",
        "body": "先看清报错那句话，再按顺序排除三件事：文件是不是下载完整了，后缀跟系统对不对得上，以及它是完整镜像还是下到一半的半成品。这三样都排掉，才轮到怀疑核心。换核心属于 Retropa Plus 的功能，是最后才动的那根杆。",
        "points": [
          "先把没下完的文件补完。",
          "确认后缀和系统对得上。",
          "放弃之前，试试同一个系统下的另一个核心。"
        ]
      },
      {
        "title": "游戏文件、存档与即时存档",
        "body": "这里有三种东西很容易被当成一种：游戏文件本身、游戏自己写出来的游戏存档、模拟器存的即时存档。把其中一个改个后缀，并不会变成另一个。跨核心或者跨 App 搬动之前，三样都备份一遍，因为某个核心写出的即时存档，换一个核心未必读得进去。",
        "points": [
          "原始游戏文件别改，保持原样。",
          "游戏存档和即时存档分开备份。",
          "别指望一个核心的即时存档能在另一个核心里读出来。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa 里自带游戏吗？",
        "answer": "不带。Retropa 是模拟器，不提供游戏，也不提供 BIOS 文件。能导入的只有你有权使用的文件。"
      },
      {
        "id": "cloud",
        "question": "为什么我的文件导入不了？",
        "answer": "多半是它还在云端，没有真正下载到本机。「文件」里点开一次，等下载跑完，再试一次导入。"
      },
      {
        "id": "zip",
        "question": "可以导入 ZIP 文件吗？",
        "answer": "可以。ZIP 和 RetroPack 容器能直接打开，一般不用手动解压，只有某个导入流程明确要求时才需要。"
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
    "title": "给 iPhone 与 iPad 上的 Retropa 接手柄",
    "description": "蓝牙或有线手柄，先在 iOS 里配对，再到 Retropa 里核对映射。按键没反应、映射看着变了，这类问题怎么查，也写在下面。",
    "summary": "顺序不能反：先在 iOS 里配对，再按系统和游戏核对映射。这一页讲配对、最容易漏测的那几颗键，以及触控和手柄怎么一起用。",
    "sections": [
      {
        "title": "先在 iOS 配对，再打开 Retropa",
        "body": "手柄得先被系统认下来，Retropa 才看得见它。到 iOS 设置里完成配对，随手按几下确认它有反应，然后再开 App。没在系统层配过的手柄，在 App 设置里怎么翻都翻不出来。",
        "points": [
          "先在 iOS 设置里配对。",
          "确认手柄在系统里按得动。",
          "再回 Retropa 里核对。"
        ]
      },
      {
        "title": "映射按系统走，不是配一次就完事",
        "body": "每个系统在 Retropa 里都单独存一份布局，这有道理：Game Boy 只要六颗键，SNES 手柄要十颗。配对完成只是开头，你常玩的系统得一个个过一遍布局。",
        "points": [
          "Game Boy：方向键、A、B、Start、Select。",
          "SNES 在这之上多出 X、Y、L、R。",
          "街机的布局还要多出几个动作键。"
        ]
      },
      {
        "title": "最容易漏测的按键",
        "body": "真出问题的地方总是那几处：六键手柄的肩键、位置常常够不着的 Start 与 Select，还有斜向输入——原机用的是微动摇杆，斜向的手感尤其不能糊弄过去。街机又是一种情况：投币键和开始键漏掉任何一个，游戏根本开不起来。",
        "points": [
          "映射时专门按一按 L 和 R。",
          "确认 Start 和 Select 都够得着。",
          "四个正方向之外，斜向也要试。"
        ]
      },
      {
        "title": "触控与手柄可以并存",
        "body": "有几类操作是实体手柄替不掉的，双屏系统尤其明显：下屏该点还得点。让屏幕布局和手柄一起开着，比在两者之间来回切更省事。手柄管按键，手指随时补上那一下触控。",
        "points": [
          "游戏要用触屏时，别把触控关掉。",
          "确认叠加层没有压住游戏画面。",
          "触感反馈和触控布局可以分开调。"
        ]
      },
      {
        "title": "按键没有反应时",
        "body": "从手柄往外一层层查：这颗键在 iOS 里有没有反应，在 Retropa 里有没有反应，最后拿到一款确定会用它的游戏里试。映射看着没问题、游戏还是不理，很可能是这款游戏根本没用那颗键——早期掌机游戏里这事不少见。",
        "points": [
          "先在 iOS 设置里验证手柄。",
          "再到 Retropa 里核对映射。",
          "确认这款游戏确实会用那颗键。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "哪些手柄可以用？",
        "answer": "iOS 支持的手柄，Retropa 都能用。先在 iOS 设置里配对，再进 App 核对映射。"
      },
      {
        "id": "mapping-lost",
        "question": "为什么映射会变？",
        "answer": "布局按系统和游戏分别保存，给一个系统配的映射不会自动跟到另一个系统。核对当下正在玩的那个系统就行。"
      },
      {
        "id": "touch",
        "question": "接上手柄之后，触控还能用吗？",
        "answer": "能。触控照样可用，需要点屏幕或者要用副屏的游戏，尤其离不开它。"
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
    "title": "即时存档、游戏存档与回退：到底差在哪 | Retropa",
    "description": "游戏自己写出的存档、模拟器的即时存档、以及回退，是三套不同的机制。这篇讲清各自能做什么、换核心时哪些带得走，还有读不出来时该先看什么。",
    "summary": "游戏写出的存档、模拟器的即时存档和回退是三回事，能不能搬走也各不相同。这篇说清各自管什么，以及怎么备份才踏实。",
    "sections": [
      {
        "title": "三样东西都被叫「存档」，其实不是一回事",
        "body": "三样东西都被叫做存档，其实不是一回事。游戏存档是游戏自己写出来的；即时存档把某一刻的整台模拟器按了暂停键；回退靠的是刚刚过去的那段过程，它不认识任何文件。存法不同，用法不同，改个后缀也变不成另一种。",
        "points": [
          "游戏存档是游戏自己写出来的。",
          "即时存档把某一刻的整台模拟器按了暂停键。",
          "回退靠的是刚刚过去的那段过程，不是文件。"
        ]
      },
      {
        "title": "什么时候该存、什么时候该退",
        "body": "在难关前面、换核之前、试新滤镜之前，先存一个即时存档，心里就有底。快速保存与快速读取就是给这种短检查点准备的：存一下，闯过去，不行再退回来。长期进度交给游戏存档，它才是一路跟着你的那份。",
        "points": [
          "换核心之前先存一个。",
          "同一场景换不同预设，靠即时存档来回比。",
          "长期进度交给游戏存档。"
        ]
      },
      {
        "title": "换核心之后，存档还认不认",
        "body": "即时存档是跟着实现走的。它记的不是画面，而是某个核心内部的运行状况，换一个核心往往读不出来。游戏存档是自己一套格式，搬家成功率高出不少——动手之前，两样都复制一份。",
        "points": [
          "即时存档通常是核心专属的。",
          "游戏存档搬起来容易得多。",
          "换核之前两样都复制一份。"
        ]
      },
      {
        "title": "读不出来的时候，先分清是哪一种",
        "body": "读取失败时先分清是哪一种。翻出它写出之后核心有没有换、App 有没有更新过。倒不出来的若是即时存档，就回到游戏存档继续玩，那条路不看核心内部长什么样。",
        "points": [
          "确认核心没换过。",
          "确认这是哪一种存档。",
          "能回到游戏存档就回到游戏存档。"
        ]
      },
      {
        "title": "怎么备才丢不了",
        "body": "游戏文件、游戏存档、你在意的即时存档，各放一处。iCloud 也好，电脑上一份也好，别让一次手滑或者一次修手机，把三样同时带走。",
        "points": [
          "游戏文件本身也要备份，不只是存档。",
          "存档与即时存档分开存放。",
          "至少留一份设备之外的副本。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "游戏存档和即时存档是一回事吗？",
        "answer": "不是。游戏存档由游戏自己按它的格式写进度；即时存档记的是某一瞬间整台模拟器的运行状况，并且跟着产生它的那个核心。"
      },
      {
        "id": "rewind",
        "question": "回退最多能退到多久以前？",
        "answer": "回退是在内存里把最近那段过程重放一遍，不是打开某个文件。所以它能退多远，看缓冲区留了多少，跟存档槽位没有关系。"
      },
      {
        "id": "transfer",
        "question": "存档能挪到别的模拟器上去用吗？",
        "answer": "游戏存档好办一些；即时存档依赖具体核心的内部格式，别指望换个地方还能读出来。"
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
    "title": "游戏打不开？从报错原文往下查 | Retropa",
    "description": "游戏打不开时别乱试。先看报错原文，再按顺序确认三件事：文件是不是真的下载完整、后缀跟系统对不对得上、手里的镜像是不是完整，最后才轮到核心。",
    "summary": "打不开的游戏，多数卡在几个固定位置上。按顺序查：文件下没下完、后缀对不对、镜像完不完整，最后再看核心，找到原因就停手。",
    "sections": [
      {
        "title": "先看报错原文，再往下查",
        "body": "载入失败的原因就那么几种。核心报错时给的那句话是最值钱的线索——照着原文读一遍，往往三件事就少查一件。剩下的按顺序走：先查最省事的，再查要动设置的，不用凭感觉乱试。",
        "points": [
          "先看报错原文。",
          "再查下载完整性。",
          "最后才是 BIOS 与核心选择。"
        ]
      },
      {
        "title": "查文件：是不是真的下载完整了",
        "body": "第一步是确认数据真的在本机。iCloud 里没下完的条目，在游戏库里和真文件长得一样，点进去却什么都读不到。去「文件」App 里点开它，等下载跑完，再回 Retropa 重新导入一次。",
        "points": [
          "灰色或带下载角标的条目，就是还没下完。",
          "下载没跑完，重试多少次也一样。",
          "这一条最常见，先排掉它。"
        ]
      },
      {
        "title": "查后缀：跟系统对不对得上",
        "body": "后缀写的是系统，不是标签。.gb、.gbc、.gba、.nds 各属一套系统，对不上的文件，核心只能按一堆它读不懂的字节来处理。把 .gb 改成 .gba，里面装的东西一点没变，它不会因此变成 GBA 游戏。",
        "points": [
          ".gb、.gbc、.gba 与 .nds 分属不同系统。",
          "改后缀不会把游戏变成另一个系统。",
          "在游戏库里看一眼识别到的系统。"
        ]
      },
      {
        "title": "查镜像：是不是完整件",
        "body": "报错原文要照着读。少 BIOS、少父集、镜像本身缺块，是三种毛病，修法完全不同。有些系统要额外的 BIOS 文件，街机 set 还可能挂在父集上。缺 BIOS 跟缺父集，截图里看着像，实际差得远。",
        "points": [
          "照着报错原文读，别猜。",
          "街机的 neogeo.zip 不是掌机 BIOS。",
          "Retropa 不提供 BIOS 下载。"
        ]
      },
      {
        "title": "最后才怀疑核心",
        "body": "前三步都干净，才轮到核心。好几个系统都不止一个核心，它们对原硬件的较真程度也不一样。记下刚才失败的是哪个核心，换一个只跑这一次；手边有同核心能跑的游戏，拿它当对照。",
        "points": [
          "记下失败的是哪个核心。",
          "换核心再跑一次。",
          "用同一个核心下的另一个游戏当对照。"
        ]
      },
      {
        "title": "要提支持请求，附上这几样",
        "body": "真要提支持请求，用这四样东西：App 版本、识别到的系统、你选的核心、报错原文，一字不改地抄过去。商业游戏和 BIOS 文件不要附，排查用不上，也不该往外发。",
        "points": [
          "App 版本与识别到的系统。",
          "所选核心，以及报错原文。",
          "游戏和 BIOS 文件一个字都不用附。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "游戏打开是黑屏，问题出在哪？",
        "answer": "多半是文件没下完、镜像变体不受支持，或者缺了 BIOS 这类依赖。顺序还是那个顺序：先看下载，再看后缀，最后读核心给出的报错原文。"
      },
      {
        "id": "worked-before",
        "question": "昨天还能玩，今天就不行了，怎么回事？",
        "answer": "先看变的是哪一样：App 版本、所选核心，还是文件挪了位置。即时存档跟着核心走，换了核心写出来的状态可能就读不出来——游戏本身往往没事。"
      },
      {
        "id": "support",
        "question": "报问题的时候要带上什么？",
        "answer": "App 版本、识别到的系统、所选核心，加上一字不改的报错原文。商业游戏和 BIOS 文件不用附。"
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
    "title": "Retropa Plus 解锁了什么 | Retropa",
    "description": "掌机模拟本来就是免费的；街机家族、高级皮肤、高级显示滤镜归 Retropa Plus。这篇说清分界线在哪，以及价格为什么只在 App 里看。",
    "summary": "街机家族、高级皮肤、高级显示滤镜，这三样归 Retropa Plus。掌机模拟不归它管。至于价格和可选方案，跟着 App Store 的地区走，App 内显示为准。",
    "sections": [
      {
        "title": "不用 Plus 也能玩的",
        "body": "掌机模拟一直是免费的。Retropa 可以从 App Store 装下来，导入你自己的游戏文件、用标准皮肤和常规显示预设、存即时存档、映射手柄，这些都不需要 Plus。导入文件这个动作本身也不会碰到任何付费入口。",
        "points": [
          "免费下载。",
          "掌机系统无需购买即可使用。",
          "标准皮肤与常规显示预设都在里面。",
          "导入游戏既不会解锁什么，也不会拦你。"
        ]
      },
      {
        "title": "要 Plus 才开的",
        "body": "Plus 解锁的是三样东西：街机家族、高级皮肤、高级显示滤镜。它们是往上加的能力，不是把免费那部分锁起来——不开 Plus，掌机该怎么玩还是怎么玩。",
        "points": [
          "街机家族：CPS I、CPS II、CPS III、Neo Geo、PGM、M92。",
          "高级皮肤。",
          "高级 CRT 与 LCD 滤镜。",
          "电视模式与高级存档工作流。"
        ]
      },
      {
        "title": "街机为什么另算一档",
        "body": "街机模拟是另一摊活。基板种类多，一个游戏常常是一组文件加一块可选 BIOS，兼容性还得逐个 set 看。把它单拎出来做，免费那层就能保持清爽，掌机那边也不必跟着变复杂。",
        "points": [
          "街机硬件跟掌机不是一路。",
          "街机 set 是一组文件，有时还要 BIOS。",
          "掌机能不能玩，跟 Plus 无关。"
        ]
      },
      {
        "title": "游戏和 BIOS 任何档位都不带",
        "body": "这一条跟付费没有关系。Retropa 是一款模拟器，游戏文件与 BIOS 文件从来不随 App 提供，导入的也必须是你有权使用的内容。花钱买到的是模拟能力，不是内容。",
        "points": [
          "任何档位都不附带游戏。",
          "不提供 BIOS 文件。",
          "只导入你有权使用的内容。"
        ]
      },
      {
        "title": "价格在哪里看",
        "body": "价格、可选方案、地区差异，都在 App 里显示。App Store 会按你所在地区的货币和当时的方案来呈现。这一页故意不写价格，就是为了调价之后它也不会过期。",
        "points": [
          "价格在 App 内显示。",
          "不同地区看到的方案可能不一样。",
          "购买由 App Store 处理。"
        ]
      },
      {
        "title": "付款的事，全交给 App Store",
        "body": "本站不碰支付。买不买、续不续、退不退，都在 App Store 里办，条款也是 App Store 那一套。我们这边不处理支付，也不会向你要任何银行卡信息。",
        "points": [
          "本站不收取任何支付信息。",
          "在 App Store 设置里管理或取消。",
          "退款按 App Store 的政策走。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "不买 Plus 能用 Retropa 吗？",
        "answer": "能。下载和掌机模拟都不需要 Plus；街机家族、高级皮肤与高级滤镜才归 Plus。"
      },
      {
        "id": "price",
        "question": "Retropa Plus 要多少钱？",
        "answer": "价格和可选方案都在 App 内显示，App Store 会按你的本地货币呈现。这一页不写价格，免得调价之后这边还是旧数字。"
      },
      {
        "id": "buy-here",
        "question": "能在你们网站上买吗？",
        "answer": "不能。购买全程在 App Store 里完成，本站不收集任何支付信息。"
      },
      {
        "id": "content",
        "question": "Plus 里带游戏吗？",
        "answer": "不带。任何档位都不附带游戏或 BIOS 文件，导入的内容需要你自己准备，并且是你有权使用的。"
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
