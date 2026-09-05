import type { Locale } from "@/i18n/locales"

export const productPages = ["delta-skins", "crt-filters", "arcade"] as const
export type ProductPage = typeof productPages[number]
export const isProductPage = (page: string): page is ProductPage => productPages.some(value => value === page)
type Section = { title: string; body: string; points?: string[] }
export type ProductDetail = {
  title: string; summary: string; label: string; image: "material" | "filter" | "library"
  imageAlt: string; sections: Section[]; link: string; linkLabel: string
}

const en: Record<ProductPage, ProductDetail> = {
  "delta-skins": {
    title: "Delta skins in Retropa", label: "Skins", image: "material",
    summary: "Change the controls around your game, not just the background. Retropa imports .deltaskin packages and offers its own skin collection for iPhone and iPad.",
    imageAlt: "Retropa product artwork showing portrait and landscape controller skins in different materials",
    sections: [
      { title: "A skin is a control layout", body: "The game screen, D-pad, action buttons and menu controls all need space. A skin defines where these elements sit. Choose one for the system you are playing and the orientation you use, rather than choosing by color alone.", points: ["Check the intended system before importing a package.", "Portrait and landscape support depend on the layouts provided by the skin.", "A supported package format does not guarantee that every third-party layout will fit every device."] },
      { title: "Import a .deltaskin package", body: "Keep the original skin file, open Retropa's skin import entry and select the package from Files. After import, select it for the matching system. Start a game and check the screen area, directional controls and every action button before making it your regular layout.", points: ["Use the complete .deltaskin package, not a screenshot of a skin.", "If the package fails, check its format and intended system before trying another layout.", "Switch back to a working skin if essential controls are obscured."] },
      { title: "Touch controls and physical controllers", body: "Retropa also supports compatible external controllers and configurable button mapping. Pair the controller with iOS first, then check its mapping in Retropa. A visual skin and a controller profile serve different purposes: changing the artwork does not replace checking your physical button assignments." },
      { title: "Packages and purchase boundaries", body: "PackHub is the place to browse Retropa skin packages. Premium skins require Plus; imported packages do not bypass entitlement checks. Check the current plan and package requirements in the app before purchasing. Delta compatibility describes a file format, not an affiliation with the Delta project." },
    ], link: "https://hub.retropa.com/skins", linkLabel: "Browse skins on PackHub",
  },
  "crt-filters": {
    title: "CRT and LCD filters for retro games", label: "Filters", image: "filter",
    summary: "Retropa advanced CRT and LCD filters adapt to your actual display area without requiring integer scaling. Keep the character of a retro screen across iPhone sizes, iPad layouts and orientations.",
    imageAlt: "Retropa product artwork showing display filter selection and CRT display treatments",
    sections: [
      { title: "Choose the display, then the strength", body: "Nearest-pixel presentation keeps the original pixel boundaries clear. CRT treatments use scanlines, masks and edge shading; LCD treatments add a pixel or subpixel structure. These choices change the presentation, not the underlying game resolution.", points: ["Start with the unfiltered picture as a reference.", "Check small text, bright edges and dark areas, not only the title screen.", "Judge the result at the size and orientation you actually play."] },
      { title: "No integer-scale requirement", body: "Integer scaling maps each game pixel to a whole number of display pixels. It can be useful for crisp nearest-pixel output, but may leave extra unused space. Retropa advanced filters account for the actual output area, so their display structure is not restricted to a 2x, 3x or other whole-number multiple. You can retain the game's aspect ratio while using a viewport that fits your phone or skin.", points: ["CRT V4 reconstructs beam coverage and analytically filters phosphor structure using the output-pixel footprint.", "Trinitron uses integrated scanline beams and band-limited aperture-grille harmonics.", "DMG integrates liquid-crystal cell coverage instead of simply point-sampling a grid."] },
      { title: "More than a scanline overlay", body: "Basic CRT Lite, LCD Grid and Scanline presets offer lighter display treatments. Advanced presets model more of the display itself: beam width, phosphor transmission or reflective liquid-crystal material. Directly sampled grids can become uneven at fractional scales; output-aware integration helps unresolved detail blend naturally. This is not a claim that every conventional filter needs integer scaling, or that every device and preset will be artifact-free." },
      { title: "What the browser comparison shows", body: "The television previews basic filters plus native-informed CRT V4, Trinitron V1 and DMG. The advanced modes adapt selected native formulas, including pixel-footprint integration, with one shared presentation curve. The web renderer omits temporal persistence, the full multi-pass bloom chain and native color management. It demonstrates display characteristics, not pixel-identical Metal output or real gameplay footage." },
      { title: "Import RetroArch shader presets", body: "A .slangp preset can reference several shader passes, textures and parameter values. Keep those dependencies together when importing. A preset file on its own may be incomplete; a .slang file describes a shader rather than an entire collection.", points: ["Use packages intended for the supported shader workflow.", "If a preset cannot load, check referenced files and compatibility before changing the game.", "Try a lighter preset if a complex chain affects frame pacing or battery use."] },
      { title: "Picture quality has a performance cost", body: "A multi-pass filter can need more GPU work than nearest-pixel output. Performance depends on the device, emulator core, output resolution and preset. Retropa does not promise that every imported shader runs equally well on every iPhone. Advanced filters require Plus; confirm the available choices in the app." },
    ], link: "https://hub.retropa.com/shaders", linkLabel: "Browse filters on PackHub",
  },
  arcade: {
    title: "Arcade emulation on iPhone and iPad", label: "Arcade", image: "library",
    summary: "Bring supported arcade files into Retropa alongside your handheld library. Check the arcade board, ROM set and BIOS requirements before importing.",
    imageAlt: "Retropa product artwork showing its game library and settings",
    sections: [
      { title: "Start with the arcade board", body: "The arcade families presented by Retropa include CPS I, CPS II, CPS III, PGM and M92. A board family is not a guarantee that every archive found online will run. Game support also depends on the specific core and ROM set expected by the installed app.", points: ["Confirm the system in the app before choosing a file.", "Arcade execution requires Retropa Plus.", "Retropa does not include commercial ROMs or BIOS files."] },
      { title: "Why an arcade ZIP is different", body: "A handheld ROM is often a single game image. An arcade set may contain multiple ROM chips and depend on a parent set or BIOS. Renaming an unrelated archive to .zip does not make it compatible. Keep the supplied archive intact unless the import workflow explicitly requests extraction." },
      { title: "When a game will not start", body: "First check the selected board and the error shown by Retropa. Next check whether your set is complete and whether its required BIOS or parent files are available. A clone archive alone may not include all the files a core needs. Changing filters or buying a different skin cannot fix missing ROM data.", points: ["Retain your original files while diagnosing an import.", "Record the app version, system and displayed error when contacting support.", "Do not send commercial ROM or BIOS files with a support request."] },
      { title: "Set up the first session", body: "Once the game starts, identify the coin, start and action controls. With an external controller, check the mapping as well as the on-screen labels. Begin with a simple display preset; choose a CRT treatment after confirming that the game and controls work correctly." },
    ], link: "/cores/", linkLabel: "Check the system and core catalog",
  },
}

const zh: Record<ProductPage, ProductDetail> = {
  "delta-skins": {
    title: "在 Retropa 使用 Delta 皮肤", label: "皮肤", image: "material",
    summary: "不只是换一张背景。Retropa 支持导入 .deltaskin，也提供自己的皮肤资源，让游戏画面、方向键与操作按钮一起适应你的 iPhone 和 iPad。",
    imageAlt: "Retropa 产品展示图：不同材质的横屏与竖屏掌机控制布局",
    sections: [
      { title: "皮肤也是一套操作布局", body: "游戏视窗、方向键、动作键和菜单入口都需要位置。选皮肤时，先看它适用的系统与屏幕方向，再看颜色和材质。布局合适，才不会在游玩时遮挡画面或找不到按键。", points: ["导入前确认皮肤面向的游戏系统。", "是否支持横竖屏，取决于资源包提供的布局。", "支持文件格式，不代表每款第三方皮肤都适配所有设备。"] },
      { title: "导入 .deltaskin 资源包", body: "保留原始文件，从 Retropa 的皮肤导入入口打开“文件”，选择完整的 .deltaskin 包。导入后，为对应系统选择皮肤。先运行一款游戏，检查画面位置、方向键及动作键，再决定是否长期使用。", points: ["需要的是完整资源包，不是一张皮肤截图。", "导入失败时先检查格式和目标系统，再尝试其他布局。", "关键按键被挡住时，先切回可用皮肤。"] },
      { title: "触控布局与实体手柄各有分工", body: "Retropa 支持兼容的外接手柄和按键映射。先在 iOS 中完成配对，再到 App 内核对操作。皮肤解决屏幕上的布局与观感，手柄配置解决实体按键的对应关系，换一张皮肤不能代替映射检查。" },
      { title: "资源与付费边界", body: "可在 PackHub 浏览 Retropa 皮肤资源。高级皮肤需要 Plus，导入资源包不会绕过权益检查。购买前请以 App 内的方案和资源要求为准。Delta 兼容指文件格式支持，不代表与 Delta 项目存在关联。" },
    ], link: "https://hub.retropa.com/skins", linkLabel: "在 PackHub 浏览皮肤",
  },
  "crt-filters": {
    title: "复古游戏的 CRT 与 LCD 滤镜", label: "滤镜", image: "filter",
    summary: "Retropa 高级 CRT 与 LCD 滤镜适应实际显示区域，无需整数倍缩放。不同尺寸的 iPhone、iPad、横竖屏与皮肤布局，都可以保留复古屏幕的细腻观感。",
    imageAlt: "Retropa 产品展示图：滤镜选择界面与 CRT 显示效果",
    sections: [
      { title: "先选屏幕特征，再调画面", body: "最近邻保留清晰的像素边界；CRT 效果通过扫描线、荫罩和边缘明暗塑造观感；LCD 效果强调像素与子像素结构。它们改变的是显示方式，不会增加游戏原本的分辨率。", points: ["先用原始画面作为参照。", "除了标题画面，也看看小字、亮边和暗部。", "在实际游玩的方向和画面尺寸下判断效果。"] },
      { title: "不必锁定整数倍缩放", body: "整数倍缩放让一个游戏像素对应整数个显示像素，适合追求整齐的最近邻像素边界，但也可能留下更多空白。Retropa 高级滤镜会考虑实际输出区域，其显示结构不要求固定在 2 倍、3 倍等整数倍率。你可以保留游戏宽高比，同时选择更适合手机或皮肤的视窗大小。", points: ["CRT V4 结合输出像素覆盖范围重建电子束，并对荧光结构进行解析滤波。", "Trinitron 使用积分扫描束与带限阴栅谐波。", "DMG 对液晶像素单元覆盖范围积分，而不是简单采样一层网格。"] },
      { title: "不只是叠一层扫描线", body: "CRT Lite、LCD Grid、Scanline 提供轻量显示处理；高级预设则模拟更多显示设备特征，如电子束宽度、荧光透射或反射式液晶材质。直接采样的网格在非整数倍率下可能出现不均匀纹理，按输出像素积分有助于让难以分辨的细节自然融合。这不代表所有常规滤镜都必须整数缩放，也不承诺每种设备与预设永远没有显示伪影。" },
      { title: "网页电视展示了什么", body: "电视中可比较基础滤镜，以及基于原生公式的 CRT V4、Trinitron V1、DMG。高级模式移植了输出像素积分等部分公式，并共用一致的展示曲面。网页省略时序残影、完整多阶段光晕及原生色彩管理，用于展示显示特征，不是 Metal 输出的逐像素复刻，也不是真实游玩实录。" },
      { title: "导入 RetroArch 着色器预设", body: ".slangp 可能引用多个着色阶段、纹理和参数，导入时需要保留这些依赖。一个预设文件不一定是完整资源包；.slang 则描述着色器本身，而不是整个滤镜集合。", points: ["使用面向受支持工作流的资源包。", "无法加载时先检查依赖文件与兼容性，不要先更换游戏。", "复杂滤镜影响帧率或耗电时，先试更轻的预设。"] },
      { title: "画面细节也有运行成本", body: "多阶段滤镜通常比最近邻显示需要更多 GPU 工作。实际表现取决于设备、模拟器核心、输出尺寸和预设，不能保证每个导入滤镜在所有 iPhone 上表现相同。高级滤镜需要 Plus，可用选项以 App 内为准。" },
    ], link: "https://hub.retropa.com/shaders", linkLabel: "在 PackHub 浏览滤镜",
  },
  arcade: {
    title: "在 iPhone 与 iPad 上玩街机", label: "街机", image: "library",
    summary: "把受支持的街机文件加入 Retropa，与掌机游戏放在同一个游戏库。导入前，先确认基板、ROM set 和 BIOS 依赖。",
    imageAlt: "Retropa 产品展示图：游戏库与设置界面",
    sections: [
      { title: "先确认街机基板", body: "Retropa 展示的街机家族包括 CPS I、CPS II、CPS III、PGM 和 M92。支持一个基板家族，不代表任意来源的压缩包都能运行；还需匹配已安装 App 的具体核心与 ROM set 要求。", points: ["先在 App 内确认系统，再选择文件。", "运行街机需要 Retropa Plus。", "Retropa 不提供商业游戏 ROM 或 BIOS。"] },
      { title: "街机 ZIP 与单个掌机 ROM 不同", body: "掌机 ROM 通常是一个游戏镜像，街机 set 可能由多个芯片文件组成，还可能依赖父集或 BIOS。把无关文件改成 .zip 后缀不会获得兼容性。除非导入流程明确要求解压，否则保留压缩包原样。" },
      { title: "无法启动时先查什么", body: "先查看选中的基板和 Retropa 给出的错误，再核对 set 是否完整、需要的 BIOS 或父集是否存在。单独的克隆集可能不含核心需要的全部文件。缺少 ROM 数据时，换滤镜或皮肤无法解决问题。", points: ["排查时保留原文件。", "联系支持时提供 App 版本、系统与错误内容。", "不要在支持请求中发送商业 ROM 或 BIOS。"] },
      { title: "把第一局的操作检查完整", body: "启动成功后，确认投币、开始和动作键的位置。使用外接手柄时，同时检查映射与屏幕提示。先用简单的显示预设确认游戏和输入正常，再选择喜欢的 CRT 观感。" },
    ], link: "/cores/", linkLabel: "查看系统与核心目录",
  },
}

export const productDetail = (page: ProductPage, locale: Locale): ProductDetail => (locale.startsWith("zh") ? zh : en)[page]
export const detailLinkLabel = (page: ProductPage, locale: Locale) => `${productDetail(page, locale).title}${!["en", "zh-Hans", "zh-Hant"].includes(locale) ? " (English)" : ""}`
