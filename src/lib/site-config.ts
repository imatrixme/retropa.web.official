export const siteConfig = {
  name: "Retropa",
  tagline: "A refined emulator experience for iPhone and iPad.",
  description:
    "Retropa brings premium retro gaming to modern iOS devices with precision emulation, elegant skins, and low-latency controls.",
  appStoreUrl: "https://apps.apple.com/",
  supportEmail: "support@retropa.app",
  legalEffectiveDate: "February 8, 2026",
} as const

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
}
