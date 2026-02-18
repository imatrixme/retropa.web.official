# Retropa Official Website

Static marketing website for the Retropa iOS app.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Static multi-page build (`/`, `/cores/`, `/terms/`, `/privacy/`)

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Routes

- `/` → Product landing page with download CTA and feature highlights
- `/cores/` → Emulator core catalog, system matrix, and ROM support wall
- `/terms/` → Terms of Service
- `/privacy/` → Privacy Policy

## Static SEO Assets

- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`
- Page-level canonical + OpenGraph + Twitter + JSON-LD metadata in each HTML entry

## Brand Assets

- Website logo (derived from app icon): `public/brand/retropa-site-logo.png`
- PWA icons (derived from app icon): `public/brand/retropa-site-logo-192.png`, `public/brand/retropa-site-logo-512.png`
- Source app icon: `public/brand/retropa-app-logo.png`
- Logo-wall source trace: `public/logo-wall/sources.json`
- System hardware photos (Wikimedia, normalized to 512×512 transparent PNG): `public/logo-wall/system-photos/*.png`

## Notes

- The project is static and deployable on CDN/object storage.
- If your production domain is not `https://retropa.com`, update canonical URLs and sitemap locations.
