import { Pause, Play, ArrowRight, MoveHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useId, useRef, useState, type PointerEvent } from "react"
import { useI18n } from "@/i18n/context"
import { localizedPath } from "@/lib/routes"
import { track } from "@/lib/analytics"
import { displayCopy, displayModes, initialDisplayMode } from "@/content/display-study"
import { CRTTelevision } from "@/components/crt-television"
import { DownloadLink } from "@/components/download-link"

type Settings = { mode: number; divider: number; playing: boolean }

export function DisplayStudy({ linked = true }: { linked?: boolean }) {
  const { locale } = useI18n()
  const zh = locale.startsWith("zh")
  const copy = displayCopy(zh)
  const canvas = useRef<HTMLCanvasElement>(null)
  const runtime = useRef<{ update: (settings: Settings) => void } | null>(null)
  const [mode, setMode] = useState<number>(initialDisplayMode)
  const [divider, setDivider] = useState(0)
  const [displayWidth, setDisplayWidth] = useState(100)
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
    const intersection = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting
      element.dispatchEvent(new Event("study-visibility"))
      if (!visible || initialized) return
      initialized = true
      import("@/lib/display-renderer").then(({ createDisplayRenderer }) => {
        if (disposed) return
        const renderer = createDisplayRenderer(element)
        let settings: Settings = { mode: initialDisplayMode, divider: 0, playing: false }
        let frame = 48
        let last = 0
        let animation = 0
        const reduced = matchMedia("(prefers-reduced-motion: reduce)")
        let lastWidth = 0
        const draw = () => {
          renderer.draw(Math.floor(frame), settings.mode, settings.divider / 100)
          if (element.width !== lastWidth) {
            lastWidth = element.width
            setOutput({ width: element.width, height: element.height })
          }
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
        element.addEventListener("study-visibility", schedule)
        element.addEventListener("webglcontextlost", lost)
        document.addEventListener("visibilitychange", schedule)
        reduced.addEventListener("change", preference)
        stop = () => {
          cancelAnimationFrame(animation); resize.disconnect(); renderer.dispose(); runtime.current = null
          element.removeEventListener("study-visibility", schedule); element.removeEventListener("webglcontextlost", lost)
          document.removeEventListener("visibilitychange", schedule); reduced.removeEventListener("change", preference)
        }
        draw(); setStatus("ready"); setPlaying(!reduced.matches)
      }).catch(() => { if (!disposed) setStatus("fallback") })
    }, { threshold: 0 })
    intersection.observe(element)
    return () => { disposed = true; intersection.disconnect(); stop?.() }
  }, [])

  useEffect(() => { runtime.current?.update({ mode, divider, playing }) }, [mode, divider, playing, status])

  const compareAtPointer = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setDivider(Math.round(Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) * 100))
  }

  const selectMode = (next: number) => {
    setMode(next)
    track("web_filter_preview_changed", { feature_id: "filters", display_mode: displayModes[next].name })
  }
  const selected = displayModes[mode]
  const controls = <>
    <button className="tv-dial" type="button" disabled={status !== "ready"} aria-label={playing ? copy.pause : copy.play} title={playing ? copy.pause : copy.play} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={21} /> : <Play size={21} />}</button>
    <div className="tv-channel-controls"><button type="button" disabled={status !== "ready"} aria-label={copy.previous} title={copy.previous} onClick={() => selectMode((mode + displayModes.length - 1) % displayModes.length)}><ChevronLeft size={17} /></button><button type="button" disabled={status !== "ready"} aria-label={copy.next} title={copy.next} onClick={() => selectMode((mode + 1) % displayModes.length)}><ChevronRight size={17} /></button></div>
  </>

  return <section id="display-study" className="display-study" lang={zh ? "zh-Hans" : "en"} aria-labelledby={`${id}-title`} data-feature="filters">
    <header className="study-heading"><div><p className="eyebrow">{copy.eyebrow}</p><h2 id={`${id}-title`}>{copy.title}</h2></div><p>{copy.intro}</p></header>
    <div className="study-workspace" data-preview-status={status}>
    <CRTTelevision width={displayWidth} playing={playing} controls={controls} label={status === "ready" ? selected.name : copy.source}>
    <div className="study-surface" data-comparing={status === "ready" && mode !== 0} onPointerDown={event => {
      if (status !== "ready" || mode === 0 || event.button !== 0) return
      event.currentTarget.setPointerCapture(event.pointerId); compareAtPointer(event)
    }} onPointerMove={event => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) compareAtPointer(event)
    }}>
      <img className="study-fallback" src="/product/homebrew-preview.png" alt={zh ? "Retropa 自有动态预览场景：像素人物与夜景" : "Retropa-owned pixel scene with a character and night landscape"} width="960" height="720" hidden={status === "ready"} loading="lazy" />
      <canvas ref={canvas} className="study-canvas" width="960" height="720" aria-label={zh ? "原始画面与滤镜效果对照" : "Original and filtered picture comparison"} style={{ opacity: status === "ready" ? 1 : 0 }} />
      <div className="tv-glass" aria-hidden="true" />
      {status === "ready" && mode !== 0 && divider > 0 && divider < 100 && <div className="study-divider" style={{ left: `${divider}%` }} aria-hidden="true"><span><MoveHorizontal size={18} /></span></div>}
    </div>
    </CRTTelevision>
    <div className="study-selection">
      {[{ label: copy.premium, items: displayModes.slice(4) }, { label: copy.basic, items: displayModes.slice(0, 4) }].map(group => <div className="study-mode-group" key={group.label}><span>{group.label}</span><div className="display-modes" role="group" aria-label={group.label}>{group.items.map(item => <button key={item.name} type="button" aria-pressed={mode === item.id} disabled={status !== "ready"} onClick={() => selectMode(item.id)}>{item.title[zh ? 1 : 0]}</button>)}</div></div>)}
    </div>
    <div className="study-mode-description" aria-live="polite"><strong>{status === "ready" ? selected.name : copy.source}</strong><p>{status === "fallback" ? copy.fallback : status === "loading" ? copy.loading : selected.detail[zh ? 1 : 0]}</p><span>{copy.preview}</span></div>
    <div className="study-toolbar">
      <label className="study-range" htmlFor={`${id}-size`}><span>{copy.size}</span><input id={`${id}-size`} type="range" min="72" max="100" value={displayWidth} onChange={event => setDisplayWidth(Number(event.target.value))} /><output>{displayWidth}%</output></label>
      <label className="study-range" htmlFor={`${id}-compare`}><span>{copy.compare}</span><input id={`${id}-compare`} type="range" min="0" max="100" value={divider} disabled={status !== "ready" || mode === 0} onChange={event => setDivider(Number(event.target.value))} /><output>{divider}%</output></label>
    </div>
    <div className="study-caption"><p>{copy.note}</p><span className="study-resolution">{copy.output} {output.width ? `${output.width} × ${output.height} · ${(output.width / 320).toFixed(2)}x` : "—"}</span></div>
    </div>
    <div className="study-benefit"><div><h3>{copy.benefitTitle}</h3><p>{copy.benefit}</p></div><dl>{copy.comparison.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl></div>
    <p className="study-boundary">{copy.boundary}</p>
    <div className="study-footer"><div><DownloadLink placement="filters" /><p className="fine-print">{copy.plus}</p></div>{linked && <a className="inline-link" href={localizedPath("crt-filters", locale)}>{copy.link}<ArrowRight size={16} /></a>}</div>
  </section>
}
