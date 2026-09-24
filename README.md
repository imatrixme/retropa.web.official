# Retropa Official Website

Static site for [retropa.com](https://retropa.com): Astro 7 static output, with interactive islands written against the React API and run on `preact/compat`. Tailwind CSS 4. Bun drives the build, preview and verification scripts. English, Simplified Chinese and Japanese (108 indexable pages). The 12 retired languages 308-redirect to their fallback (`src/lib/legacy-locale.ts`, `deploy/legacy-locales.conf`); their content modules remain in `src/content` for later reuse.

The spec is the OpenSpec change `rebuild-official-website-astro-experience` in the parent repository (`openspec/changes/…`). Its visual system is "Channel Surf". Earlier release notes are in `docs/releases/`, and the keyword evidence plan is in `docs/KEYWORD_PLAN.md`.

## Commands

```bash
bun install --frozen-lockfile
bun run dev            # astro dev on :4321
bun run build          # astro build → font subsets → sitemap/evidence → media + integrity gates
bun run preview        # dist/ on :4178 with real 404, 308 legacy-locale redirects and gzip
bun run lint           # eslint + astro check
bun run snapshot       # compare dist/ routes, canonicals and hreflang with the v8 baseline
bun run evidence       # static page evidence
bun run evidence:http --base http://127.0.0.1:4178
```

A build fails on any of the following:
- a media file without a provenance entry (`scripts/verify-media.ts`);
- an integrity finding (`scripts/verify-integrity.ts`), which covers metadata, hreflang, alt text, English residue, capability claims and pricing.

## Layout

| Path | Role |
| --- | --- |
| `src/pages/[...slug].astro` | Emits every published page/locale pair from the route registry (`src/lib/page-families.ts`) |
| `src/layouts/Base.astro` | Head metadata, structured data, header, footer, site script |
| `src/components/templates/` | Home, system/core/compare (search), product, guides, start, cores, legal |
| `src/components/sections/` | Display comparison, Console Mode scroll scene |
| `src/islands/` | `ChannelPlayer` (hero), `SkinRack`, `DisplayCompare`, `AnalyticsConsent` |
| `src/content/` | Locale-scoped copy; `home.ts` and `chrome.ts` hold homepage and chrome copy; `channels.ts`, `media.ts` |
| `src/lib/display-*.ts` | WebGL2 approximations of the native Metal display filters; the hero applies CRT V4 to video frames at native resolution |
| `src/lib/analytics.ts` | Consent-aware client events; reads page identity from the document |
| `src/lib/app-store-link.ts` | Build-time App Store campaign links |
| `src/styles/global.css` | Tokens, channel colours, fonts |
| `public/media/` | Published product media and `manifest.json` (source, license, capture details) |
| `fonts-src/` | Smiley Sans source; subset at build time into `smiley-zh-hans*.woff2` |
| `deploy/` | Nginx reference config and the legacy-locale map |

## Media

- **Gameplay footage:** in-app captures of Homebrew titles from the Retropa catalog, each with an explicit open license. Credits are rendered on the homepage.
- **Skins:** Retropa's first-party Pro skins.
- **Raw captures:** kept outside the repo in `~/.retropa/official-website/media-src/`.
- **Adding media:** every new file needs a manifest entry, or the build fails. Do not publish commercial game content or manufacturer logos.

## Analytics

The event contract is unchanged from v8. `.env.local` may define only public identifiers:

```dotenv
VITE_GA4_MEASUREMENT_ID=G-YOURSTREAM
VITE_ASC_PROVIDER_TOKEN=YOUR_PROVIDER_TOKEN
```

- Without a Measurement ID, no SDK or consent UI loads.
- Download links always carry `ct` and `mt=8`.

## Deploy

- Publish all of `dist/` as a new release directory and switch the site symlink atomically. See `docs/releases/2026-09-v9.md` for the current procedure and paths.
- Include `deploy/legacy-locales.conf` at the `http {}` level.
- Unknown paths must return 404; do not add an SPA fallback.
- Live release: `releases/20260924-v9-8d07b87`. Rollback target: `releases/20260919-v8-5a1db97d`.
