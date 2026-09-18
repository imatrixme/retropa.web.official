import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/i18n/context"
import { acquisitionCopy } from "@/content/acquisition"
import { discoveryCopy } from "@/content/discovery"
import { track } from "@/lib/analytics"
import { detailLinkLabel, productDetail } from "@/content/product-details"
import { guideLocale, localizedPath } from "@/lib/routes"

export function ProductShowcase() {
  const { locale } = useI18n()
  const copy = acquisitionCopy(locale)
  const discovery = discoveryCopy(locale)
  const skins = productDetail("delta-skins", locale)
  return <div className="showcase">
    <article className="skin-feature" id="skins" data-feature="skins">
      <div className="skin-feature-copy">
        <p className="eyebrow"><span className="section-marker" />{copy.styles}</p>
        <h2>{discovery.skins}</h2>
        <p>{discovery.skinNote}</p>
        <a className="inline-link" href={localizedPath("delta-skins", locale)} hrefLang={guideLocale(locale)} onClick={() => track("web_feature_selected", { feature_id: "skins" })}>{detailLinkLabel("delta-skins", locale)}<ArrowRight size={18} /></a>
        <div className="skin-compatibility"><span className="mono">.deltaskin</span><span>iPhone / iPad</span></div>
      </div>
      <a className="skin-feature-art" href="/product/material.webp" target="_blank" rel="noopener" aria-label={skins.imageAlt} title={discovery.original}>
        <img src="/product/material-controls.webp" width="720" height="620" alt={skins.imageAlt} loading="lazy" />
        <span className="artwork-open"><ArrowUpRight size={20} /></span>
      </a>
    </article>
    <article className="library-feature" id="library" data-feature="library">
      <div className="library-feature-art"><img src="/product/library-detail.webp" width="720" height="1060" alt={productDetail("arcade", locale).imageAlt} loading="lazy" /></div>
      <div className="library-feature-copy"><p className="eyebrow"><span className="section-marker" />{copy.library}</p><h2>{discovery.library}</h2><p>{discovery.libraryNote}</p><a className="inline-link" href={localizedPath("start", locale)} hrefLang={guideLocale(locale)} onClick={() => track("web_guide_opened")}>{copy.start}{guideLocale(locale) === "en" && locale !== "en" && <small className="link-language" lang="en">EN</small>}<ArrowRight size={18} /></a><p className="fine-print">{copy.noRoms}</p></div>
    </article>
  </div>
}
