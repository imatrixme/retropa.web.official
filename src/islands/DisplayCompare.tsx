import { useEffect, useId, useRef, useState, type PointerEvent } from "react"
import { track } from "@/lib/analytics"
import type { DisplayModeName } from "@/content/display-study"

type Mode = { id: number; name: DisplayModeName; title: string; detail: string; label: string }
type Copy = {
  premium: string; basic: string; compare: string; size: string; pause: string; play: string
  preview: string; source: string; output: string; loading: string; fallback: string; fallbackAlt: string; canvasLabel: string
}
type Settings = { mode: number; divider: number; playing: boolean }

/**
 * Interactive display comparison. The WebGL renderer adapts the native Metal
 * filter formulas (see src/lib/display-*.ts); it loads only once the stage is
 * near the viewport and stops drawing offscreen, in hidden tabs and when
 * reduced motion is requested. Without WebGL2 a still image remains.
 */
export default function DisplayCompare({ modes, copy, initial }: { modes: Mode[]; copy: Copy; initial: number }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const runtime = useRef<{ update: (settings: Settings) => void } | null>(null)
  const [mode, setMode] = useState(initial)
  const [divider, setDivider] = useState(50)
  const [size, setSize] = useState(100)
  const [output, setOutput] = useState({ width: 0, height: 0 })
  const [playing, setPlaying] = useState(false)
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading")
  const id = useId()

  useEffect(() => {
    const element = canvas.current!
    let disposed = false
    let initialized = false
    let visible = false
    let stop: (() => void) | undefined
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting
      element.dispatchEvent(new Event("compare-visibility"))
      if (!visible || initialized) return
      initialized = true
      import("@/lib/display-renderer").then(({ createDisplayRenderer }) => {
        if (disposed) return
        const renderer = createDisplayRenderer(element)
        let settings: Settings = { mode: initial, divider: 50, playing: false }
        let frame = 48
        let last = 0
        let animation = 0
        let lastWidth = 0
        const reduced = matchMedia("(prefers-reduced-motion: reduce)")
        const draw = () => {
          renderer.draw(Math.floor(frame), settings.mode, settings.mode === 0 ? 1 : settings.divider / 100)
          if (element.width !== lastWidth) { lastWidth = element.width; setOutput({ width: element.width, height: element.height }) }
        }
        const tick = (time: number) => {
          animation = 0
          if (!visible || document.hidden || !settings.playing) { last = 0; return }
          if (!last) last = time
          if (time - last >= 1000 / 30) { frame += Math.min(time - last, 100) * .06; last = time; draw() }
          animation = requestAnimationFrame(tick)
        }
        const schedule = () => {
          cancelAnimationFrame(animation); animation = 0; last = 0
          if (visible && !document.hidden) { draw(); if (settings.playing) animation = requestAnimationFrame(tick) }
        }
        runtime.current = { update(next) { settings = next; schedule() } }
        const resize = new ResizeObserver(schedule)
        resize.observe(element)
        const preference = () => { if (reduced.matches) setPlaying(false) }
        const lost = (event: Event) => { event.preventDefault(); stop?.(); setStatus("fallback"); setPlaying(false) }
        element.addEventListener("compare-visibility", schedule)
        element.addEventListener("webglcontextlost", lost)
        document.addEventListener("visibilitychange", schedule)
        reduced.addEventListener("change", preference)
        stop = () => {
          cancelAnimationFrame(animation); resize.disconnect(); renderer.dispose(); runtime.current = null
          element.removeEventListener("compare-visibility", schedule); element.removeEventListener("webglcontextlost", lost)
          document.removeEventListener("visibilitychange", schedule); reduced.removeEventListener("change", preference)
        }
        draw(); setStatus("ready"); setPlaying(!reduced.matches)
      }).catch(() => { if (!disposed) setStatus("fallback") })
    }, { rootMargin: "200px 0px" })
    intersection.observe(element)
    return () => { disposed = true; intersection.disconnect(); stop?.() }
  }, [initial])

  useEffect(() => { runtime.current?.update({ mode, divider, playing }) }, [mode, divider, playing, status])

  const dragTo = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setDivider(Math.round(Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) * 100))
  }
  const select = (next: number) => {
    setMode(next)
    track("web_filter_preview_changed", { feature_id: "filters", display_mode: modes[next].name })
  }
  const selected = modes[mode]
  const ready = status === "ready"
  const comparing = ready && mode !== 0

  return <div className="dc" data-status={status}>
    <div className="dc-stage-wrap" style={{ width: `${size}%` }}>
      <div className="dc-stage" data-comparing={comparing}
        onPointerDown={(event) => { if (!comparing || event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); dragTo(event) }}
        onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) dragTo(event) }}>
        <img className="dc-fallback" src="/product/homebrew-preview.png" alt={copy.fallbackAlt} width="960" height="720" hidden={ready} loading="lazy" />
        <canvas ref={canvas} className="dc-canvas" width="960" height="720" aria-label={copy.canvasLabel} style={{ opacity: ready ? 1 : 0 }} />
        {comparing && <>
          <span className="dc-tag dc-tag-left">{copy.source}</span>
          <span className="dc-tag dc-tag-right">{selected.label}</span>
          <div className="dc-divider" style={{ left: `${divider}%` }} aria-hidden="true"><span /></div>
        </>}
        <div className="dc-vignette" aria-hidden="true" />
      </div>
    </div>
    <div className="dc-panel">
      {[{ label: copy.premium, items: modes.slice(4) }, { label: copy.basic, items: modes.slice(0, 4) }].map(group => <div className="dc-group" key={group.label}>
        <span className="hud">{group.label}</span>
        <div className="dc-modes" role="group" aria-label={group.label}>
          {group.items.map(item => <button key={item.name} type="button" aria-pressed={mode === item.id} disabled={!ready} onClick={() => select(item.id)}>{item.title}</button>)}
        </div>
      </div>)}
      <div className="dc-detail" aria-live="polite">
        <strong>{ready ? selected.label : copy.source}</strong>
        <p>{status === "fallback" ? copy.fallback : status === "loading" ? copy.loading : selected.detail}</p>
      </div>
      <div className="dc-controls">
        <button type="button" className="dc-play" disabled={!ready} aria-label={playing ? copy.pause : copy.play} title={playing ? copy.pause : copy.play} onClick={() => setPlaying(!playing)}>
          {playing ? <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg> : <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>}
        </button>
        <label htmlFor={`${id}-compare`}><span className="hud">{copy.compare}</span><input id={`${id}-compare`} type="range" min="0" max="100" value={divider} disabled={!comparing} onInput={(event) => setDivider(Number((event.currentTarget as HTMLInputElement).value))} /></label>
        <label htmlFor={`${id}-size`}><span className="hud">{copy.size}</span><input id={`${id}-size`} type="range" min="72" max="100" value={size} onInput={(event) => setSize(Number((event.currentTarget as HTMLInputElement).value))} /></label>
      </div>
      <p className="dc-output hud">{copy.preview} · {copy.output} {output.width ? `${output.width} × ${output.height} · ${(output.width / 320).toFixed(2)}×` : "—"}</p>
    </div>
  </div>
}
