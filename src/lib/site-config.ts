export const siteConfig = {
  name: "Retropa",
  siteUrl: "https://retropa.com",
  tagline: "A premium retro gaming studio for iPhone and iPad.",
  description:
    "Retropa blends multi-core emulation, advanced skin customization, haptic waveform tuning, filter packs, and localization packs into a polished iOS experience.",
  appStoreUrl: "https://apps.apple.com/app/retropa/id6758859845",
  supportEmail: "support@retropa.com",
  legalEffectiveDateISO: "2026-02-08",
  socialImage: "/brand/retropa-site-logo-512.png",
} as const

/**
 * Agent-readable layer: an index.md beside every page, /llms.txt, the page
 * links that announce them, Markdown negotiation and the robots.txt Content
 * Signals. On since v22 (2026-11-01), with the rules from
 * deploy/nginx-agent-readable.conf.example merged on the host. Turning it off is
 * this value plus removing those rules in the same deploy.
 */
export const agentReadable: boolean = true

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
  link?: { href: string; label: string }
}
