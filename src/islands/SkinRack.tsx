import { useEffect, useState } from "react"
import { track } from "@/lib/analytics"

export type RackSkin = {
  id: string; name: string; src: string; thumb: string; width: number; height: number; premium: boolean; channel: string
  rect: { x: number; y: number; width: number; height: number }
  video?: { mp4?: string; webm?: string; poster?: string }
}

/** Skin rack: choose a skin and see it on the device, gameplay running in its screen. */
export default function SkinRack({ skins, copy }: { skins: RackSkin[]; copy: { pick: string; plus: string; free: string } }) {
  const [index, setIndex] = useState(0)
  // False in server HTML and during hydration; footage and controls that must
  // not exist in static HTML (e.g. autoplaying video) render only afterwards.
  const [hydrated, setHydrated] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot post-hydration flag
  useEffect(() => setHydrated(true), [])
  const skin = skins[index]
  if (!skin) return null
  const screen = { left: `${skin.rect.x / skin.width * 100}%`, top: `${skin.rect.y / skin.height * 100}%`, width: `${skin.rect.width / skin.width * 100}%`, height: `${skin.rect.height / skin.height * 100}%` }
  const choose = (next: number) => { setIndex(next); track("web_feature_selected", { feature_id: "skin_rack" }) }

  return <div className="rack" data-channel={skin.channel}>
    <div className="rack-stage">
      <div className="rack-halo" aria-hidden="true" />
      <div className="rack-device">
        <div className="rack-inner" style={{ aspectRatio: `${skin.width} / ${skin.height}` }}>
        <img key={skin.id} className="rack-skin" src={skin.src} width={skin.width} height={skin.height} alt={skin.name} loading="lazy" />
        <div className="rack-screen" style={screen}>
          {hydrated && (skin.video?.mp4 || skin.video?.webm)
            ? <video key={`${skin.id}-v`} autoPlay muted loop playsInline preload="none" poster={skin.video.poster} aria-hidden="true">
                {skin.video.webm && <source src={skin.video.webm} type="video/webm" />}
                {skin.video.mp4 && <source src={skin.video.mp4} type='video/mp4; codecs="hvc1"' />}
              </video>
            : skin.video?.poster && <img src={skin.video.poster} alt="" aria-hidden="true" loading="lazy" />}
        </div>
        </div>
      </div>
      <p className="rack-name"><strong>{skin.name}</strong>{skin.premium ? <span className="plus-tag">Plus</span> : <span className="free-tag">{copy.free}</span>}</p>
    </div>
    <div className="rack-shelf" role="group" aria-label={copy.pick}>
      {skins.map((item, position) => <button key={item.id} type="button" aria-pressed={position === index} aria-label={item.name} title={item.name} onClick={() => choose(position)} data-channel={item.channel}>
        <img src={item.thumb} width={144} height={Math.round(144 * item.height / item.width)} alt="" aria-hidden="true" loading="lazy" />
        {item.premium && <span className="rack-gold" aria-hidden="true" />}
      </button>)}
    </div>
  </div>
}
