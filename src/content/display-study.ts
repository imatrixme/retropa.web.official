export const displayModes = [
  { id: 0, name: "Original", title: ["Original", "原始"], detail: ["Nearest-pixel reference, without a display filter.", "不叠加显示滤镜的最近邻原图参照。"] },
  { id: 1, name: "CRT Lite", title: ["CRT Lite", "CRT Lite"], detail: ["A light scanline and mask treatment with little processing.", "轻量扫描线与网格处理，保留直接的像素观感。"] },
  { id: 2, name: "LCD Grid", title: ["LCD Grid", "LCD Grid"], detail: ["A conventional sampled subpixel grid for an LCD character.", "常规采样子像素网格，带来 LCD 显示特征。"] },
  { id: 3, name: "Scanline", title: ["Scanline", "Scanline"], detail: ["A simple line pattern, without a physical beam model.", "简单扫描线纹理，不模拟完整电子束。"] },
  { id: 4, name: "Retropa CRT V4", title: ["CRT V4", "CRT V4"], detail: ["Pixel-footprint beam reconstruction and an analytically filtered phosphor grille.", "按输出像素覆盖范围重建电子束，并对荧光栅格进行解析滤波。"] },
  { id: 5, name: "Retropa Trinitron V1", title: ["Trinitron V1", "Trinitron V1"], detail: ["Integrated scanline beams and band-limited RGB aperture-grille harmonics.", "积分扫描束与带限 RGB 阴栅谐波，还原更细腻的管面光感。"] },
  { id: 6, name: "Retropa DMG", title: ["DMG", "DMG"], detail: ["Four-tone liquid crystal, a reflective substrate and integrated pixel cells.", "四色液晶、反射基底与像素单元积分，呈现早期掌机屏幕质感。"] },
] as const

export type DisplayModeName = typeof displayModes[number]["name"]
export const initialDisplayMode = 4

export const displayCopy = (zh: boolean) => zh ? {
  eyebrow: "Retropa 高级滤镜", title: "好画面，不必迁就整数倍。",
  intro: "不用把游戏锁在 2 倍、3 倍的窗口里。Retropa 高级滤镜适应实际显示区域，让不同尺寸的 iPhone 与 iPad，都能留住复古画面的细腻。",
  premium: "Retropa 高级", basic: "原始与常规", compare: "原图 / 滤镜", size: "显示尺寸",
  pause: "暂停预览", play: "播放预览", next: "下一个滤镜", previous: "上一个滤镜",
  preview: "网页近似预览", source: "原图", output: "输出", loading: "正在准备预览", fallback: "实时预览不可用，已保留原始静态画面。",
  note: "自有场景 · 基于原生公式的 WebGL 近似，省略时序残影与完整多阶段光晕；实际效果以 iOS App 为准。",
  link: "深入了解高级滤镜", download: "在 iPhone 上体验", plus: "高级滤镜包含于 Retropa Plus。",
  benefitTitle: "适应屏幕，而不是缩小画面。",
  benefit: "整数倍缩放能让一个游戏像素对应整齐的屏幕像素，但也可能留下更多空白。Retropa 的高级滤镜无需锁定这个倍率：它们按实际输出尺寸处理光束、扫描线和像素结构，适应横屏、竖屏以及不同皮肤的游戏视窗。",
  comparison: [
    ["常规网格与扫描线", "直接采样线条或网格，在非整数倍率下可能出现粗细不均、摩尔纹或闪烁；具体表现取决于滤镜。"],
    ["Retropa 高级滤镜", "结合输出像素覆盖范围进行积分或带限处理，让难以分辨的微结构自然融合，而不是强行画出条纹。"],
  ],
  boundary: "滤镜不会增加游戏原始分辨率，也不需要拉伸画面比例。最终观感与性能仍取决于设备、预设和显示尺寸。",
} : {
  eyebrow: "Retropa advanced filters", title: "A great picture. Not just at integer scales.",
  intro: "Your game does not have to fit a 2x or 3x box. Retropa advanced filters adapt to the actual display area, keeping the character of a retro screen across iPhone and iPad sizes.",
  premium: "Retropa advanced", basic: "Original & conventional", compare: "Original / filtered", size: "Display size",
  pause: "Pause preview", play: "Play preview", next: "Next filter", previous: "Previous filter",
  preview: "Approximate web preview", source: "Original", output: "Output", loading: "Preparing preview", fallback: "Live preview is unavailable. The original still image remains visible.",
  note: "Retropa-owned scene. Native-informed WebGL approximations without temporal persistence or the full multi-pass bloom pipeline. The iOS app is the reference.",
  link: "Explore advanced filters", download: "Experience it on iPhone", plus: "Advanced filters are included with Retropa Plus.",
  benefitTitle: "Fit the screen. Keep the picture.",
  benefit: "Integer scaling maps each game pixel to a whole number of display pixels, but can leave more unused space. Retropa advanced filters do not require that fixed multiple: they account for the actual output size when rendering beams, scanlines and pixel structures, across orientations and skin layouts.",
  comparison: [
    ["Conventional grids and scanlines", "Directly sampled lines or grids can become uneven, shimmer or form moire patterns at fractional scales. The result depends on the filter."],
    ["Retropa advanced filters", "Pixel-footprint integration or band-limited rendering lets unresolved fine structure blend naturally, instead of forcing a stripe onto every display pixel."],
  ],
  boundary: "Filters do not add source resolution or require a stretched aspect ratio. Final appearance and performance still depend on the device, preset and display size.",
}
