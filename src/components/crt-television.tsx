import { useId, type CSSProperties, type ReactNode } from "react"

type Props = { children: ReactNode; controls: ReactNode; width: number; playing: boolean; label: string }

export function CRTTelevision({ children, controls, width, playing, label }: Props) {
  const glassId = `crt-glass-${useId().replace(/:/g, "")}`
  return <div className="tv-stage">
    <svg className="tv-geometry" aria-hidden="true" width="0" height="0"><defs><clipPath id={glassId} clipPathUnits="objectBoundingBox"><path d="M .15 .025 C .36 -.008 .64 -.008 .85 .025 Q .956 .035 .975 .15 C 1.008 .36 1.008 .64 .975 .85 Q .956 .965 .85 .975 C .64 1.008 .36 1.008 .15 .975 Q .044 .965 .025 .85 C -.008 .64 -.008 .36 .025 .15 Q .044 .035 .15 .025 Z" /></clipPath></defs></svg>
    <div className="crt-television" style={{ "--tv-width": `${width}%`, "--tv-contour": `url(#${glassId})` } as CSSProperties}>
      <div className="tv-front">
        <div className="tv-bezel">{children}</div>
        <div className="tv-console">
          <span className="tv-model" aria-hidden="true">RETROPA<br />COLOR MONITOR</span>
          <div className="tv-speaker" aria-hidden="true" />
          <div className="tv-controls">{controls}</div>
          <span className="tv-indicator" data-active={playing} aria-hidden="true" />
        </div>
        <div className="tv-chin"><span className="tv-wordmark" aria-hidden="true">Retropa<span>.</span></span><span className="tv-caption">{label}</span></div>
      </div>
      <div className="tv-foot" aria-hidden="true" />
    </div>
  </div>
}
