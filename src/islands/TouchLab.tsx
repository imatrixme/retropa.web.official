import { useEffect, useRef, useState } from "react"
import { track } from "@/lib/analytics"

/**
 * Touch Lab: an illustration of fixed versus adaptive hit zones on a stylized
 * control pad. It mirrors the ideas of the app's adaptive engine (zones that
 * fill the gaps, bounded drift toward where the thumb lands, short hysteresis,
 * D-pad fan sectors with a down lock) but is not the engine itself, and it
 * never reports accuracy figures.
 */

type Mode = "fixed" | "adaptive"
type Button = "up" | "down" | "left" | "right" | "a" | "b"
type Copy = {
  fixed: string; adaptive: string; replay: string; reset: string; hint: string; note: string
  registered: string; missed: string; fixedCaption: string; adaptiveCaption: string; padLabel: string
}
type Tap = { x: number; y: number; hit: Button | null; at: number }

// Pad geometry in pad-width units (height = ASPECT).
const ASPECT = 0.6
const DPAD = { x: 0.24, y: 0.34, arm: 0.1, half: 0.036, reach: 0.19 }
const FACE: Record<"a" | "b", { x: number; y: number }> = { a: { x: 0.8, y: 0.27 }, b: { x: 0.66, y: 0.4 } }
const FACE_R = 0.058
const FACE_REACH = 0.17
const MAX_DRIFT = 0.022
const HOLD_MS = 180
const LABEL: Record<Button, string> = { up: "↑", down: "↓", left: "←", right: "→", a: "A", b: "B" }
const TINT: Record<Button, string> = { up: "#8b5cff", down: "#6d8bff", left: "#a77bff", right: "#7a6bff", a: "#ff5d7a", b: "#ffb347" }
const RGB = Object.fromEntries(Object.entries(TINT).map(([key, hex]) => [key, [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16))])) as Record<Button, number[]>

type Drift = Record<"a" | "b", { x: number; y: number }>
const noDrift = (): Drift => ({ a: { x: 0, y: 0 }, b: { x: 0, y: 0 } })

function hitFixed(x: number, y: number): Button | null {
  for (const key of ["a", "b"] as const) if (Math.hypot(x - FACE[key].x, y - FACE[key].y) <= FACE_R) return key
  const dx = x - DPAD.x, dy = y - DPAD.y
  if (Math.abs(dx) <= DPAD.half && Math.abs(dy) <= DPAD.arm) return dy < -DPAD.half ? "up" : dy > DPAD.half ? "down" : null
  if (Math.abs(dy) <= DPAD.half && Math.abs(dx) <= DPAD.arm) return dx < -DPAD.half ? "left" : dx > DPAD.half ? "right" : null
  return null
}

function hitAdaptive(x: number, y: number, drift: Drift, held: Button | null): Button | null {
  // Face buttons first: the D-pad is lowest priority where regions overlap.
  let best: Button | null = null
  let bestScore = Infinity
  for (const key of ["a", "b"] as const) {
    const cx = FACE[key].x + drift[key].x, cy = FACE[key].y + drift[key].y
    let score = Math.hypot(x - cx, y - cy)
    if (score > FACE_REACH) continue
    if (held === key) score *= 0.82
    if (score < bestScore) { bestScore = score; best = key }
  }
  if (best) return best
  const dx = x - DPAD.x, dy = y - DPAD.y
  const distance = Math.hypot(dx, dy)
  if (distance > DPAD.reach || distance < 0.012) return null
  // Fan sectors: down gets 100°, up 80°, left and right 90° each.
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI
  if (angle >= 40 && angle <= 140) return "down"
  if (angle <= -50 && angle >= -130) return "up"
  return Math.abs(angle) < 90 ? "right" : "left"
}

function roundedCross(inset = 0) {
  const { x, y, arm, half } = DPAD, r = 0.008, a = arm - inset, h = half - inset
  const path = new Path2D()
  const pts: [number, number][] = [[-h, -a], [h, -a], [h, -h], [a, -h], [a, h], [h, h], [h, a], [-h, a], [-h, h], [-a, h], [-a, -h], [-h, -h]]
  path.moveTo(x + (pts[0][0] + pts[1][0]) / 2, y + pts[0][1])
  for (let i = 1; i <= pts.length; i++) {
    const [px, py] = pts[i % pts.length], [nx, ny] = pts[(i + 1) % pts.length]
    path.arcTo(x + px, y + py, x + nx, y + ny, [2, 5, 8, 11].includes(i % 12) ? r * 0.3 : r)
  }
  path.closePath()
  return path
}

function drawPad(context: CanvasRenderingContext2D, lit: Button | null) {
  // Cross pad: soft shadow, moulded gradient, a lit arm and a centre dimple.
  context.save()
  context.shadowColor = "rgba(20,16,30,.35)"; context.shadowBlur = 0.025; context.shadowOffsetY = 0.008
  const body = context.createLinearGradient(0, DPAD.y - DPAD.arm, 0, DPAD.y + DPAD.arm)
  body.addColorStop(0, "#3a3645"); body.addColorStop(0.5, "#221f2a"); body.addColorStop(1, "#15131b")
  context.fillStyle = body; context.fill(roundedCross())
  context.restore()
  if (lit === "up" || lit === "down" || lit === "left" || lit === "right") {
    const dx = lit === "left" ? -1 : lit === "right" ? 1 : 0, dy = lit === "up" ? -1 : lit === "down" ? 1 : 0
    const cx = DPAD.x + dx * DPAD.arm * 0.62, cy = DPAD.y + dy * DPAD.arm * 0.62
    const glow = context.createRadialGradient(cx, cy, 0, cx, cy, DPAD.arm * 0.7)
    glow.addColorStop(0, TINT[lit]); glow.addColorStop(1, "rgba(0,0,0,0)")
    context.save(); context.clip(roundedCross()); context.fillStyle = glow; context.fillRect(DPAD.x - DPAD.arm, DPAD.y - DPAD.arm, DPAD.arm * 2, DPAD.arm * 2); context.restore()
  }
  context.lineWidth = 0.002; context.strokeStyle = "rgba(255,255,255,.14)"; context.stroke(roundedCross(0.004))
  const dimple = context.createRadialGradient(DPAD.x, DPAD.y - 0.004, 0, DPAD.x, DPAD.y, DPAD.half * 0.8)
  dimple.addColorStop(0, "#131118"); dimple.addColorStop(1, "#2a2732")
  context.beginPath(); context.arc(DPAD.x, DPAD.y, DPAD.half * 0.62, 0, Math.PI * 2); context.fillStyle = dimple; context.fill()
  // Arrow nubs.
  context.fillStyle = "rgba(255,255,255,.22)"
  for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
    const cx = DPAD.x + dx * (DPAD.arm - 0.022), cy = DPAD.y + dy * (DPAD.arm - 0.022), s = 0.008
    context.beginPath(); context.moveTo(cx + dx * s, cy + dy * s); context.lineTo(cx - dy * s - dx * s * 0.2, cy + dx * s - dy * s * 0.2); context.lineTo(cx + dy * s - dx * s * 0.2, cy - dx * s - dy * s * 0.2); context.closePath(); context.fill()
  }
  // Face buttons: drop shadow, domed gradient, specular highlight, label.
  for (const key of ["a", "b"] as const) {
    const { x, y } = FACE[key], on = lit === key
    context.save()
    context.shadowColor = on ? TINT[key] : "rgba(20,16,30,.4)"; context.shadowBlur = on ? 0.05 : 0.022; context.shadowOffsetY = on ? 0 : 0.008
    const dome = context.createRadialGradient(x - FACE_R * 0.35, y - FACE_R * 0.45, FACE_R * 0.1, x, y, FACE_R)
    dome.addColorStop(0, on ? "#ffffff" : "#57515f"); dome.addColorStop(0.35, on ? TINT[key] : "#2c2834"); dome.addColorStop(1, on ? TINT[key] : "#15131b")
    context.beginPath(); context.arc(x, y, FACE_R, 0, Math.PI * 2); context.fillStyle = dome; context.fill()
    context.restore()
    const shine = context.createLinearGradient(x, y - FACE_R, x, y)
    shine.addColorStop(0, "rgba(255,255,255,.35)"); shine.addColorStop(1, "rgba(255,255,255,0)")
    context.beginPath(); context.ellipse(x, y - FACE_R * 0.45, FACE_R * 0.62, FACE_R * 0.36, 0, 0, Math.PI * 2); context.fillStyle = shine; context.fill()
    context.fillStyle = on ? "#14121c" : "rgba(244,242,251,.9)"; context.font = "800 0.036px system-ui, sans-serif"; context.textAlign = "center"; context.textBaseline = "middle"
    context.fillText(LABEL[key], x, y + 0.003)
  }
}

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value))

// A thumb that drifts low and to the right, with presses that land in gaps.
const REPLAY: [number, number][] = [
  [0.73, 0.33], [0.72, 0.35], [0.8, 0.34], [0.74, 0.31], [0.6, 0.47], [0.71, 0.36],
  [0.31, 0.43], [0.3, 0.42], [0.25, 0.47], [0.33, 0.33], [0.16, 0.27], [0.69, 0.25],
]

export default function TouchLab({ copy }: { copy: Copy }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [hydrated, setHydrated] = useState(false)
  const [mode, setMode] = useState<Mode>("adaptive")
  const [taps, setTaps] = useState<Tap[]>([])
  const [cursor, setCursor] = useState({ x: 0.73, y: 0.335 })
  const [focused, setFocused] = useState(false)
  const drift = useRef<Drift>(noDrift())
  const held = useRef<{ key: Button | null; at: number }>({ key: null, at: 0 })
  const replayTimer = useRef<number[]>([])
  const reported = useRef(false)
  const regions = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => setHydrated(true), [])

  const press = (x: number, y: number) => {
    const now = performance.now()
    let hit: Button | null
    if (mode === "fixed") hit = hitFixed(x, y)
    else {
      const recent = now - held.current.at < HOLD_MS ? held.current.key : null
      hit = hitAdaptive(x, y, drift.current, recent)
      if (hit === "a" || hit === "b") {
        const d = drift.current[hit], base = FACE[hit]
        d.x = clamp(d.x + (x - (base.x + d.x)) * 0.3, MAX_DRIFT)
        d.y = clamp(d.y + (y - (base.y + d.y)) * 0.3, MAX_DRIFT)
      }
    }
    held.current = { key: hit, at: now }
    setTaps(list => [...list.slice(-11), { x, y, hit, at: now }])
    if (!reported.current) { reported.current = true; track("web_feature_selected", { feature_id: "touch_lab" }) }
  }

  // Idle recovery: drift decays back to the default layout.
  useEffect(() => {
    if (!hydrated) return
    const id = window.setInterval(() => {
      if (performance.now() - held.current.at < 2500) return
      for (const key of ["a", "b"] as const) { drift.current[key].x *= 0.85; drift.current[key].y *= 0.85 }
      setTaps(list => list.filter(tap => performance.now() - tap.at < 6000))
    }, 400)
    return () => window.clearInterval(id)
  }, [hydrated])

  useEffect(() => () => replayTimer.current.forEach(id => window.clearTimeout(id)), [])

  useEffect(() => {
    const element = canvas.current
    if (!element || !hydrated) return
    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = element.clientWidth
      const height = width * ASPECT
      if (element.width !== Math.round(width * ratio)) { element.width = Math.round(width * ratio); element.height = Math.round(height * ratio) }
      const context = element.getContext("2d")
      if (!context) return
      context.setTransform(ratio * width, 0, 0, ratio * width, 0, 0)
      context.clearRect(0, 0, 1, ASPECT)
      // Hit regions: one hit test per pixel of a small buffer, scaled up smoothly.
      const recent = performance.now() - held.current.at < HOLD_MS ? held.current.key : null
      const buffer = regions.current ??= document.createElement("canvas")
      const columns = 360, rows = Math.round(columns * ASPECT)
      buffer.width = columns; buffer.height = rows
      const pixels = buffer.getContext("2d")!.createImageData(columns, rows)
      for (let row = 0; row < rows; row++) for (let column = 0; column < columns; column++) {
        const x = (column + 0.5) / columns, y = ((row + 0.5) / rows) * ASPECT
        const hit = mode === "fixed" ? hitFixed(x, y) : hitAdaptive(x, y, drift.current, recent)
        if (!hit) continue
        const [r, g, b] = RGB[hit], at = (row * columns + column) * 4
        pixels.data[at] = r; pixels.data[at + 1] = g; pixels.data[at + 2] = b; pixels.data[at + 3] = 70
      }
      buffer.getContext("2d")!.putImageData(pixels, 0, 0)
      context.imageSmoothingEnabled = true; context.imageSmoothingQuality = "high"
      context.filter = `blur(${ratio * 1.6}px)`
      context.drawImage(buffer, 0, 0, 1, ASPECT)
      context.filter = "none"
      // Controls: a moulded cross pad and glossy face buttons.
      const last = taps[taps.length - 1]
      const lit = last && performance.now() - last.at < 450 ? last.hit : null
      drawPad(context, lit)
      // Logical centers after drift.
      if (mode === "adaptive") for (const key of ["a", "b"] as const) {
        const d = drift.current[key]
        if (Math.hypot(d.x, d.y) < 0.002) continue
        context.beginPath(); context.arc(FACE[key].x + d.x, FACE[key].y + d.y, 0.006, 0, Math.PI * 2)
        context.fillStyle = TINT[key]; context.fill()
      }
      // Touches.
      const now = performance.now()
      for (const tap of taps) {
        const age = Math.min(1, (now - tap.at) / 5000)
        context.globalAlpha = 1 - age * 0.8
        const ring = context.createRadialGradient(tap.x, tap.y, 0, tap.x, tap.y, 0.016)
        ring.addColorStop(0, tap.hit ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.35)"); ring.addColorStop(1, "rgba(255,255,255,0)")
        context.beginPath(); context.arc(tap.x, tap.y, 0.016, 0, Math.PI * 2); context.fillStyle = ring; context.fill()
        context.beginPath(); context.arc(tap.x, tap.y, 0.011, 0, Math.PI * 2)
        context.lineWidth = 0.0035; context.strokeStyle = tap.hit ? TINT[tap.hit] : "#e5484d"; context.stroke()
        context.globalAlpha = 1
      }
      if (focused) {
        context.beginPath(); context.arc(cursor.x, cursor.y, 0.02, 0, Math.PI * 2)
        context.setLineDash([0.006, 0.005]); context.strokeStyle = "#14121c"; context.lineWidth = 0.003; context.stroke(); context.setLineDash([])
      }
    }
    draw()
    const resize = new ResizeObserver(draw)
    resize.observe(element)
    const fade = window.setTimeout(draw, 500)
    return () => { resize.disconnect(); window.clearTimeout(fade) }
  }, [hydrated, mode, taps, cursor, focused])

  const onPointer = (event: { currentTarget: HTMLCanvasElement; clientX: number; clientY: number; preventDefault: () => void }) => {
    event.preventDefault()
    const bounds = event.currentTarget.getBoundingClientRect()
    press((event.clientX - bounds.left) / bounds.width, ((event.clientY - bounds.top) / bounds.width))
  }
  const onKey = (event: KeyboardEvent) => {
    const move: Record<string, [number, number]> = { ArrowUp: [0, -0.02], ArrowDown: [0, 0.02], ArrowLeft: [-0.02, 0], ArrowRight: [0.02, 0] }
    if (move[event.key]) {
      event.preventDefault()
      setCursor(c => ({ x: Math.max(0, Math.min(1, c.x + move[event.key][0])), y: Math.max(0, Math.min(ASPECT, c.y + move[event.key][1])) }))
    } else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); press(cursor.x, cursor.y) }
  }
  const replay = () => {
    replayTimer.current.forEach(id => window.clearTimeout(id))
    const jitter = () => (Math.random() - 0.5) * 0.012
    replayTimer.current = REPLAY.map(([x, y], i) => window.setTimeout(() => press(x + jitter(), y + jitter()), i * 320))
  }
  const reset = () => { replayTimer.current.forEach(id => window.clearTimeout(id)); drift.current = noDrift(); setTaps([]) }
  const last = taps[taps.length - 1]

  return <div className="tl" data-mode={mode}>
    <div className="tl-bar">
      <div className="tl-modes" role="group" aria-label={copy.padLabel}>
        {(["fixed", "adaptive"] as const).map(value => <button key={value} type="button" aria-pressed={mode === value} onClick={() => { setMode(value); setTaps([]); drift.current = noDrift() }}>{value === "fixed" ? copy.fixed : copy.adaptive}</button>)}
      </div>
      {hydrated && <div className="tl-actions">
        <button type="button" onClick={replay}>{copy.replay}</button>
        <button type="button" onClick={reset}>{copy.reset}</button>
      </div>}
    </div>
    <div className="tl-pad">
      {hydrated
        ? <canvas ref={canvas} tabIndex={0} role="application" aria-label={`${copy.padLabel}. ${copy.hint}`} aria-describedby="tl-status"
            onPointerDown={onPointer} onKeyDown={onKey as never} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        : <StaticPad mode={mode} />}
    </div>
    <p className="tl-status" id="tl-status" aria-live="polite">
      {last ? (last.hit ? <><span className="hud">{copy.registered}</span> <strong>{LABEL[last.hit]}</strong></> : <span className="tl-miss">{copy.missed}</span>) : copy.hint}
    </p>
    <div className="tl-caption">
      <p className={mode === "fixed" ? "is-on" : undefined} aria-hidden={mode !== "fixed"}>{copy.fixedCaption}</p>
      <p className={mode === "adaptive" ? "is-on" : undefined} aria-hidden={mode !== "adaptive"}>{copy.adaptiveCaption}</p>
    </div>
    <p className="tl-note">{copy.note}</p>
  </div>
}

/** Server-rendered picture of the same zones, shown without JavaScript. */
function StaticPad({ mode }: { mode: Mode }) {
  const cells: { x: number; y: number; key: Button }[] = []
  const step = 0.02
  for (let y = step / 2; y < ASPECT; y += step) for (let x = step / 2; x < 1; x += step) {
    const hit = mode === "fixed" ? hitFixed(x, y) : hitAdaptive(x, y, noDrift(), null)
    if (hit) cells.push({ x, y, key: hit })
  }
  return <svg className="tl-static" viewBox={`0 0 1 ${ASPECT}`} role="img" aria-label={mode}>
    {cells.map((cell, i) => <rect key={i} x={cell.x - step / 2} y={cell.y - step / 2} width={step} height={step} fill={TINT[cell.key]} fill-opacity="0.23" />)}
    <path d={`M${DPAD.x - DPAD.half} ${DPAD.y - DPAD.arm}h${DPAD.half * 2}v${DPAD.arm - DPAD.half}h${DPAD.arm - DPAD.half}v${DPAD.half * 2}h${-(DPAD.arm - DPAD.half)}v${DPAD.arm - DPAD.half}h${-DPAD.half * 2}v${-(DPAD.arm - DPAD.half)}h${-(DPAD.arm - DPAD.half)}v${-DPAD.half * 2}h${DPAD.arm - DPAD.half}z`} fill="#1c1a24" />
    {(["a", "b"] as const).map(key => <circle key={key} cx={FACE[key].x} cy={FACE[key].y} r={FACE_R} fill="#1c1a24" />)}
  </svg>
}
