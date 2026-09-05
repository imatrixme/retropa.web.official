import { ArrowRight, ChevronDown } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { DownloadLink } from "@/components/download-link"
import { acquisitionCopy } from "@/content/acquisition"
import { localizedPath } from "@/lib/routes"
import { productPages, productDetail } from "@/content/product-details"
import { startFAQ } from "@/content/start-faq"

const guides = {
  en: {
    title: "Your first game in Retropa.", intro: "From a file you own to a game you can play. Start with a supported handheld system, then make the controls and picture your own.",
    steps: [
      ["Get Retropa", "Install Retropa from the App Store on an iPhone or iPad running iOS 18 or later. The app is free to download; some features require Plus."],
      ["Import your game", "Open the import entry in your library and choose a supported ROM from Files. For GBA, use a .gba file; for DS, a .nds file. Keep the original file as a backup. ROMs and BIOS files are not supplied."],
      ["Open it from your library", "Select the imported game and start playing. Check the on-screen controls before changing skins or filters. If a game cannot start, check its system, file format and any required BIOS."],
    ],
    faqTitle: "Before you start",
    systems: "Check supported systems", support: "Need help?",
  },
  "zh-Hans": {
    title: "在 Retropa 开始第一局。", intro: "从你拥有的游戏文件开始。先选择一个支持的掌机系统，成功运行后，再慢慢调整按键、皮肤和画面。",
    steps: [
      ["下载 Retropa", "在运行 iOS 18 或更新版本的 iPhone、iPad 上，从 App Store 下载 Retropa。App 免费下载，部分功能需要 Plus。"],
      ["导入游戏文件", "从游戏库打开导入入口，在“文件”中选择支持的 ROM。GBA 使用 .gba 文件，DS 使用 .nds 文件。请保留原文件作为备份。Retropa 不提供 ROM 或 BIOS。"],
      ["从游戏库开始游玩", "选择刚导入的游戏，先确认画面和默认按键正常，再调整皮肤和滤镜。如果无法启动，请检查系统、文件格式及必要的 BIOS。"],
    ],
    faqTitle: "开始前，你可能想知道",
    systems: "查看支持的系统", support: "需要帮助？",
  },
} as const

export function StartPage() {
  const { locale } = useI18n()
  const guide = locale === "zh-Hans" ? guides["zh-Hans"] : guides.en
  const copy = acquisitionCopy(locale)
  return <article className="guide-page wrap">
    <header className="page-heading"><p className="eyebrow">RETROPA / {copy.start}</p><h1>{guide.title}</h1><p>{guide.intro}</p><DownloadLink placement="guide" /></header>
    <div className="guide-steps">{guide.steps.map(([title, body], index) => <section key={title}><span className="step-number">0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div>
    <a className="inline-link" href={localizedPath("cores", locale)}>{guide.systems}<ArrowRight size={18} /></a>
    <section className="faq-section" id="before-you-start"><h2>{guide.faqTitle}</h2>{startFAQ(locale === "zh-Hans").map(item => <details id={`faq-${item.id}`} key={item.id} open={["games", "integer-scaling"].includes(item.id)}><summary>{item.question}<ChevronDown size={19} /></summary><p>{item.answer}</p>{item.link && <a className="inline-link faq-related" href={localizedPath(item.link, locale)}>{item.linkLabel}<ArrowRight size={16} /></a>}</details>)}</section>
    <p>{guide.support} <a className="inline-link" href="mailto:support@retropa.com">support@retropa.com</a></p>
    <nav className="related-reading" aria-label={copy.start}>{productPages.map(page => <a key={page} href={localizedPath(page, locale)}>{productDetail(page, locale).title}<ArrowRight size={18} /></a>)}</nav>
  </article>
}
