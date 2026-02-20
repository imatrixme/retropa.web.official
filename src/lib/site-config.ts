export const siteConfig = {
  name: "Retropa",
  siteUrl: "https://retropa.com",
  tagline: "A premium retro gaming studio for iPhone and iPad.",
  description:
    "Retropa blends multi-core emulation, advanced skin customization, haptic waveform tuning, filter packs, and localization packs into a polished iOS experience.",
  appStoreUrl: "https://apps.apple.com/",
  supportEmail: "support@retropa.com",
  legalEffectiveDateISO: "2026-02-08",
  socialImage: "/brand/retropa-site-logo-512.png",
} as const

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
}
