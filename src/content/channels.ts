/**
 * Channels are the site's organizing metaphor: each system family is a TV
 * channel with its own signal/shell colors (see `styles/global.css`). Names use
 * what players actually search for; the official website may use full names
 * (openspec: official-website-discovery-pages "System naming on website landing pages").
 */
export type ChannelId = "gba" | "nds" | "gb" | "nes" | "snes" | "genesis" | "handheld-alt" | "arcade"

export type Channel = {
  id: ChannelId
  number: string
  name: string
  short: string
  /** Landing page that best represents the channel. */
  page: string
  /** Every landing page that belongs to this channel. */
  pages: readonly string[]
  formats: string
  /** Native size of the channel's footage, so display filters see one texel per game pixel.
   *  The Genesis channel currently shows a Master System title (256×192). */
  native: [number, number]
}

export const channels: readonly Channel[] = [
  { id: "gba", number: "01", name: "Game Boy Advance", short: "GBA", page: "gba-emulator", pages: ["gba-emulator", "mgba-core", "skyemu-core"], formats: ".gba", native: [240, 160] },
  { id: "nds", number: "02", name: "Nintendo DS", short: "DS", page: "ds-emulator", pages: ["ds-emulator"], formats: ".nds", native: [256, 384] },
  { id: "gb", number: "03", name: "Game Boy · Color", short: "GB / GBC", page: "gb-emulator", pages: ["gb-emulator", "gbc-emulator", "sameboy-core"], formats: ".gb .gbc", native: [160, 144] },
  { id: "nes", number: "04", name: "NES", short: "NES", page: "nes-emulator", pages: ["nes-emulator", "rusticones-core", "tetanes-core"], formats: ".nes .fds .unf", native: [256, 240] },
  { id: "snes", number: "05", name: "Super NES", short: "SNES", page: "snes-emulator", pages: ["snes-emulator", "lakesnes-core"], formats: ".sfc .smc", native: [256, 224] },
  { id: "genesis", number: "06", name: "Genesis · Mega Drive", short: "MD / SMS / GG", page: "sega-genesis-emulator", pages: ["sega-genesis-emulator", "master-system-emulator", "game-gear-emulator", "jgenesis-core"], formats: ".md .gen .sms .gg", native: [256, 192] },
  { id: "handheld-alt", number: "07", name: "WonderSwan · Neo Geo Pocket", short: "WS / NGP", page: "wonderswan-emulator", pages: ["wonderswan-emulator", "neogeo-pocket-emulator", "ares-core"], formats: ".ws .wsc .ngp .ngc", native: [224, 144] },
  { id: "arcade", number: "08", name: "Arcade", short: "CPS · Neo Geo · PGM", page: "arcade", pages: ["arcade", "neogeo-emulator"], formats: ".zip .7z", native: [384, 224] },
]

/** Localized channel names where the market searches a different name. */
const localizedNames: Partial<Record<string, Partial<Record<ChannelId, string>>>> = {
  ja: {
    gba: "ゲームボーイアドバンス", nds: "ニンテンドーDS", gb: "ゲームボーイ · カラー", nes: "ファミコン · NES",
    snes: "スーパーファミコン", genesis: "メガドライブ · マスターシステム", "handheld-alt": "ワンダースワン · ネオジオポケット", arcade: "アーケード",
  },
  "zh-Hans": { arcade: "街机" },
}
export const channelName = (channel: Channel, locale: string) => localizedNames[locale]?.[channel.id] ?? channel.name

export function channelForPage(page: string): ChannelId | "brand" {
  return channels.find((channel) => channel.pages.includes(page))?.id ?? "brand"
}
