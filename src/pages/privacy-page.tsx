import { LegalDocument } from "@/components/legal-document"
import { useI18n } from "@/i18n/context"
import { siteConfig } from "@/lib/site-config"

export function PrivacyPage() {
  const { locale, messages } = useI18n()
  const [year, month, day] = siteConfig.legalEffectiveDateISO.split("-").map(Number)
  const effectiveDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)))

  return (
    <><LegalDocument
      title={messages.privacy.title}
      subtitle={messages.privacy.subtitle}
      effectiveDate={effectiveDate}
      sections={messages.privacy.sections}
    /><section id="website-analytics" className="website-privacy" lang={locale.startsWith("zh") ? "zh-Hans" : "en"}>
      <h2>{locale.startsWith("zh") ? "官网使用统计" : "Website analytics"}</h2>
      <p>{locale.startsWith("zh") ? "官网仅在你允许后加载 Google Analytics。它使用 Cookie 统计页面访问、功能浏览与下载按钮点击，并会处理浏览器和网络请求信息。自定义事件不包含 ROM 名称、完整来源网址、任意查询参数或支付信息。" : "The website loads Google Analytics only after you allow it. It uses cookies to measure page visits, feature views and download clicks, and processes browser and network request information. Custom events exclude ROM names, full referrer URLs, arbitrary query parameters and payment details."}</p>
      <p>{locale.startsWith("zh") ? "你可以在页脚的隐私设置中拒绝或撤回许可。许可选择与主题设置保存在本机；下载无需同意统计。App Store campaign 数据仅用于汇总分析，不代表能够识别同一个网站访客与 App 用户。Google Analytics 的保存期限按项目后台配置执行；隐私请求请联系 support@retropa.com。" : "Decline or withdraw permission in the footer's Privacy settings. Consent and theme preferences are stored locally; downloading never requires analytics. App Store campaign data is aggregate evidence, not a way to identify the same person across the website and app. Analytics retention follows the property configuration. Contact support@retropa.com for privacy requests."}</p>
    </section></>
  )
}
