import { useId, useState, type PointerEvent } from "react"
import { track } from "@/lib/analytics"

export type CompareMode = { id: string; name: string; detail: string; filtered: string; original: string }
type Copy = { original: string; compare: string; picker: string }

/**
 * Original versus filtered stills rendered offline by the native Metal filters.
 * Only pictures reach the browser; no filter code does. The stage keeps a fixed
 * aspect ratio and the description slot is sized to its longest entry, so
 * switching filters never moves the layout.
 */
export default function FilterCompare({ modes, copy }: { modes: CompareMode[]; copy: Copy }) {
  const [index, setIndex] = useState(0)
  const [divider, setDivider] = useState(50)
  const id = useId()
  const mode = modes[index]
  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setDivider(Math.round(Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) * 100))
  }
  const choose = (next: number) => { setIndex(next); track("web_filter_preview_changed", { feature_id: "filters" }) }

  return <div className="fc">
    <div className="fc-stage"
      onPointerDown={event => { if (event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); drag(event) }}
      onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) drag(event) }}>
      <img className="fc-img" src={mode.original} alt="" aria-hidden="true" width="960" height="640" loading="lazy" decoding="async" />
      <div className="fc-clip" style={{ clipPath: `inset(0 0 0 ${divider}%)` }}>
        {modes.map((item, i) => <img key={item.id} className="fc-img" src={item.filtered} alt={item.name} width="960" height="640" loading="lazy" decoding="async" hidden={i !== index} />)}
      </div>
      <span className="fc-tag fc-left">{copy.original}</span>
      <span className="fc-tag fc-right">{mode.name}</span>
      <div className="fc-divider" style={{ left: `${divider}%` }} aria-hidden="true"><span /></div>
    </div>
    <div className="fc-panel">
      <label className="fc-range" htmlFor={`${id}-divider`}><span className="hud">{copy.compare}</span>
        <input id={`${id}-divider`} type="range" min="0" max="100" value={divider} onInput={event => setDivider(Number((event.currentTarget as HTMLInputElement).value))} />
      </label>
      <div className="fc-modes" role="group" aria-label={copy.picker}>
        {modes.map((item, i) => <button key={item.id} type="button" aria-pressed={i === index} onClick={() => choose(i)}>{item.name.replace(/^Retropa /, "")}</button>)}
      </div>
      <div className="fc-detail" aria-live="polite">
        {modes.map((item, i) => <p key={item.id} aria-hidden={i !== index} className={i === index ? "is-on" : undefined}><strong>{item.name}</strong>{item.detail}</p>)}
      </div>
    </div>
  </div>
}
