import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react"
import { track } from "@/lib/analytics"

export type PlayerChannel = {
  id: string; native: [number, number]; number: string; name: string; short: string; href: string; hreflang: string
  video?: { mp4?: string; webm?: string; poster?: string }
  skin?: { src: string; width: number; height: number; rect: { x: number; y: number; width: number; height: number } }
}
type Copy = { channels: string; pause: string; play: string; live: string }

const DWELL = 7000
/** The channel's gameplay loop. Display filters are shown as native-rendered stills elsewhere; no filter code runs here. */
function ChannelVideo({ video }: { video: NonNullable<PlayerChannel["video"]> }) {
  return <video className="cp-video" autoPlay muted loop playsInline preload="auto" poster={video.poster} aria-hidden="true">
    {video.webm && <source src={video.webm} type="video/webm" />}
    {video.mp4 && <source src={video.mp4} type='video/mp4; codecs="hvc1"' />}
  </video>
}
const STATIC_MS = 260
/**
 * The hero "channel surf" player. Server output is a static poster with channel
 * links; after hydration the channel links switch the picture in place and the
 * player auto-advances only while motion is allowed, the hero is visible, the
 * tab is shown and the visitor is not hovering or focusing the selector.
 */
export default function ChannelPlayer({ channels, copy }: { channels: PlayerChannel[]; copy: Copy }) {
  const root = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  // False in server HTML and during hydration; footage and controls that must
  // not exist in static HTML (e.g. autoplaying video) render only afterwards.
  const [hydrated, setHydrated] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot post-hydration flag
  useEffect(() => setHydrated(true), [])
  const [surfing, setSurfing] = useState(true)
  const [staticOn, setStaticOn] = useState(false)
  const [held, setHeld] = useState(false)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)
  const channel = channels[index]
  // Footage starts only after the page has loaded and the browser is idle, and
  // never on Save-Data connections, so the poster stays the largest paint.
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (connection?.saveData) return
    let idle = 0
    const start = () => { idle = window.setTimeout(() => setReady(true), 1200) }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => { window.clearTimeout(idle); window.removeEventListener("load", start) }
  }, [])

  const tune = useCallback((next: number, manual: boolean) => {
    setStaticOn(true)
    window.setTimeout(() => setIndex(next), STATIC_MS / 2)
    window.setTimeout(() => setStaticOn(false), STATIC_MS)
    if (manual) track("web_feature_selected", { feature_id: "channel" })
  }, [])

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotion = () => { setReduced(motion.matches); if (motion.matches) setSurfing(false) }
    syncMotion()
    motion.addEventListener("change", syncMotion)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 })
    if (root.current) observer.observe(root.current)
    const onVisibility = () => setVisible(!document.hidden)
    document.addEventListener("visibilitychange", onVisibility)
    return () => { motion.removeEventListener("change", syncMotion); observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility) }
  }, [])

  // Paint the whole hero in the active channel's colors.
  useEffect(() => {
    const hero = root.current?.closest<HTMLElement>("[data-hero]")
    if (hero) hero.dataset.channel = channel.id
  }, [channel.id])

  useEffect(() => {
    if (!surfing || held || !visible || reduced) return
    const timer = window.setTimeout(() => tune((index + 1) % channels.length, false), DWELL)
    return () => window.clearTimeout(timer)
  }, [surfing, held, visible, reduced, index, channels.length, tune])

  const select = (event: MouseEvent<HTMLAnchorElement>, next: number) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    if (next !== index) tune(next, true)
  }

  const screen = channel.skin
    ? { left: `${channel.skin.rect.x / channel.skin.width * 100}%`, top: `${channel.skin.rect.y / channel.skin.height * 100}%`, width: `${channel.skin.rect.width / channel.skin.width * 100}%`, height: `${channel.skin.rect.height / channel.skin.height * 100}%` }
    : undefined
  const playVideo = ready && !reduced && visible && channel.video && (channel.video.mp4 || channel.video.webm)

  return <div className="cp" ref={root} onPointerEnter={() => setHeld(true)} onPointerLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}>
    <div className="cp-marquee display" aria-hidden="true"><span key={channel.id}>{channel.name}</span></div>
    <div className="cp-stage">
      <div className="cp-glow" aria-hidden="true" />
      <div className="cp-device">
        <div className="cp-screen">
          {channel.skin && <img className="cp-skin" src={channel.skin.src} width={channel.skin.width} height={channel.skin.height} alt="" aria-hidden="true" fetchPriority="low" decoding="async" />}
          <div className={`cp-game${channel.skin ? "" : " is-full"}`} style={screen}>
            {playVideo
              ? <ChannelVideo key={channel.id} video={channel.video!} />
              : channel.video?.poster ? <img className="cp-video" src={channel.video.poster} alt="" aria-hidden="true" fetchPriority="low" decoding="async" />
              : <div className="cp-nosignal hud">{channel.short}</div>}
            <div className="cp-scan" aria-hidden="true" />
          </div>
          <div className={`cp-static${staticOn ? " is-on" : ""}`} aria-hidden="true" />
          <div className="cp-island" aria-hidden="true" />
        </div>
      </div>
      <p className="cp-caption hud" aria-live="polite"><span className="cp-dot" />{copy.live} · CH {channel.number} · <a href={channel.href} hrefLang={channel.hreflang}>{channel.name}</a></p>
    </div>
    <nav className="cp-dial" aria-label={copy.channels}>
      <span className="cp-dial-label hud">{copy.channels}</span>
      <ul role="list">
        {channels.map((item, position) => <li key={item.id}>
          <a href={item.href} hrefLang={item.hreflang} data-channel={item.id} aria-current={position === index ? "true" : undefined} onClick={(event) => select(event, position)}>
            <span className="hud">{item.number}</span><span className="cp-dial-name">{item.short}</span>
          </a>
        </li>)}
      </ul>
      {hydrated && !reduced && <button type="button" className="cp-toggle" aria-pressed={!surfing} aria-label={surfing ? copy.pause : copy.play} title={surfing ? copy.pause : copy.play} onClick={() => setSurfing(!surfing)}>
        {surfing ? <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg> : <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>}
        {surfing && !held && visible && <span className="cp-progress" key={index} />}
      </button>}
    </nav>
  </div>
}
