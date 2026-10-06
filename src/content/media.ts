import type { ChannelId } from "@/content/channels"
import { isShipped } from "@/content/releases"

/**
 * Product media registry. Every published media file must have an entry in
 * `public/media/manifest.json` recording its source, license and capture
 * details; the build fails on untracked media (scripts/verify-media.ts).
 */
export type MediaEntry = {
  id: string
  kind: "video" | "image" | "skin"
  path: string
  source?: string
  license?: string
  attribution?: string
  title?: string
  author?: string
  sourceURL?: string
  licenseURL?: string
  appVersion?: string
  device?: string
  capturedAt?: string
  derivedFrom?: string
  notes?: string
  system?: string
  orientation?: "portrait" | "landscape"
  width?: number
  height?: number
  screenRect?: { x: number; y: number; width: number; height: number }
  /** Aspect-fit game picture inside screenRect; preferred for overlaying footage. */
  gameRect?: { x: number; y: number; width: number; height: number }
  pro?: boolean
  name?: string
  premium?: boolean
  channel?: ChannelId
  /** The App release this file shows; it publishes only once that release ships. */
  release?: string
  /** Games whose picture appears inside this file (a film's in-scene screens), each with its license. */
  gameplay?: { title: string; author?: string; license?: string; sourceURL?: string; licenseURL?: string }[]
}

const files = import.meta.glob<{ default: MediaEntry[] | { entries: MediaEntry[] } }>("/public/media/manifest.json", { eager: true })
const raw = Object.values(files)[0]?.default
// Media of an unreleased App version is invisible to every page; the build also
// removes those files from dist (scripts/build.ts).
export const mediaManifest: MediaEntry[] = (Array.isArray(raw) ? raw : raw?.entries ?? []).filter((entry) => !entry.release || isShipped(entry.release))

const byPath = new Map(mediaManifest.map((entry) => [entry.path.replace(/^\.?\//, ""), entry]))
export const media = (path: string) => byPath.get(path)
export const mediaUrl = (path: string) => `/media/${path}`

export type ChannelMedia = { mp4?: string; webm?: string; poster?: string; credit?: MediaEntry }

export function channelMedia(id: ChannelId): ChannelMedia | null {
  const base = `channels/${id}`
  const mp4 = media(`${base}/loop.mp4`)
  const webm = media(`${base}/loop.webm`)
  const poster = media(`${base}/poster.png`) ?? media(`${base}/poster.webp`) ?? media(`${base}/poster.jpg`)
  if (!mp4 && !webm && !poster) return null
  return {
    mp4: mp4 && mediaUrl(mp4.path), webm: webm && mediaUrl(webm.path), poster: poster && mediaUrl(poster.path),
    credit: mp4 ?? webm ?? poster,
  }
}

const systemChannel: Record<string, ChannelId> = {
  gba: "gba", nds: "nds", ds: "nds", gb: "gb", gbc: "gb", nes: "nes", fds: "nes", snes: "snes",
  md: "genesis", gen: "genesis", genesis: "genesis", sms: "genesis", gg: "genesis",
  ws: "handheld-alt", wsc: "handheld-alt", ngp: "handheld-alt", ngpc: "handheld-alt", arcade: "arcade",
}

const skinFamilies: Record<string, string> = { "prototype-01": "Prototype 01", "purple-smoke-titanium": "Purple Smoke Titanium", "yao-lian-hu": "Yao Lian Hu" }
const systemLabels: Record<string, string> = { gba: "GBA", gbc: "GBC", gb: "GB", nes: "NES", snes: "SNES", md: "Mega Drive", gg: "Game Gear", nds: "DS" }
function skinName(id: string) {
  const family = Object.keys(skinFamilies).find((key) => id.startsWith(key))
  const system = id.split("-").find((part) => systemLabels[part])
  return family ? `${skinFamilies[family]}${system ? ` · ${systemLabels[system]}` : ""}` : id
}

export type Skin = { id: string; name: string; src: string; thumb: string; width: number; height: number; rect: { x: number; y: number; width: number; height: number }; channel: ChannelId; premium: boolean; orientation: "portrait" | "landscape" }

export const skins: Skin[] = mediaManifest.flatMap((entry) => {
  const rect = entry.gameRect ?? entry.screenRect
  if (entry.kind !== "skin" || !rect || !entry.width || !entry.height) return []
  const channel = entry.channel ?? systemChannel[(entry.system ?? "").toLowerCase()]
  if (!channel) return []
  return [{
    id: entry.id, name: entry.name ?? entry.title ?? skinName(entry.id), src: mediaUrl(entry.path), thumb: mediaUrl(media(entry.path.replace(/\.webp$/, "-thumb.webp"))?.path ?? entry.path), width: entry.width, height: entry.height,
    rect, channel, premium: Boolean(entry.premium ?? entry.pro), orientation: entry.orientation ?? "portrait",
  }]
})

export const skinFor = (channel: ChannelId, orientation: "portrait" | "landscape" = "portrait") =>
  skins.find((skin) => skin.channel === channel && skin.orientation === orientation)

export const uiShot = (name: string) => {
  const entry = media(`ui/${name}.png`) ?? media(`ui/${name}.webp`) ?? media(`ui/${name}.jpg`)
  return entry ? { src: mediaUrl(entry.path), width: entry.width ?? 1179, height: entry.height ?? 2556, entry } : null
}

export type FootageCredit = Pick<MediaEntry, "title" | "author" | "license" | "sourceURL" | "licenseURL">

/**
 * Homebrew titles credited for footage shown on the site: each gameplay clip,
 * and each game a film shows on its in-scene screens.
 */
export const footageCredits = () => {
  const seen = new Map<string, FootageCredit>()
  for (const entry of mediaManifest) {
    if (entry.kind !== "video") continue
    for (const credit of entry.gameplay ?? (entry.title ? [entry] : [])) if (credit.title && !seen.has(credit.title)) seen.set(credit.title, credit)
  }
  return [...seen.values()]
}

/** Generated hardware artwork for a channel (see manifest `hardware-*` entries). */
export const hardwareArt = (channel: ChannelId) => {
  const full = media(`hardware/${channel}.webp`)
  const small = media(`hardware/${channel}-sm.webp`)
  return full && small ? { src: mediaUrl(full.path), small: mediaUrl(small.path), width: full.width ?? 1200, height: full.height ?? 800 } : null
}
