import { useState, useSyncExternalStore } from "react"
import { analyticsConfig, readConsent, setConsent } from "@/lib/analytics"
import { useI18n } from "@/i18n/context"
import { localizedPath } from "@/lib/routes"

const subscribe = (callback: () => void) => {
  window.addEventListener("retropa-consent", callback)
  return () => window.removeEventListener("retropa-consent", callback)
}

export function AnalyticsConsent() {
  const { locale } = useI18n()
  const consent = useSyncExternalStore(subscribe, readConsent, () => "unknown")
  const [expanded, setExpanded] = useState(false)
  const chinese = locale.startsWith("zh")
  if (!/^G-[A-Z0-9]+$/.test(analyticsConfig.measurementId)) return null
  return <div className="analytics-preference" lang={chinese ? "zh-Hans" : "en"}>
    <button className="text-button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{chinese ? "隐私设置" : "Privacy settings"}</button>
    {(expanded || consent === "unknown") && <div className="consent-panel" role="region" aria-label={chinese ? "隐私设置" : "Privacy settings"}>
      <strong>{chinese ? "允许使用统计？" : "Allow usage analytics?"}</strong>
      <p>{chinese ? "可选。Google Analytics 会使用 Cookie 统计页面访问和下载点击。不影响浏览或下载。" : "Optional. Google Analytics uses cookies to measure page visits and download clicks. Browsing and downloads work without it."}</p>
      <a href={`${localizedPath("privacy", locale)}#website-analytics`}>{chinese ? "数据使用说明" : "How data is used"}</a>
      <div className="consent-actions">
        <button onClick={() => { setConsent("denied"); setExpanded(false) }}>{chinese ? "不允许" : "Decline"}</button>
        <button onClick={() => { setConsent("granted"); setExpanded(false) }}>{chinese ? "允许" : "Allow"}</button>
      </div>
    </div>}
  </div>
}
