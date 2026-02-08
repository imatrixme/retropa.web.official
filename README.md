# Retropa Official Website

Static marketing website for the Retropa iOS app.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Static multi-page build (`/`, `/terms/`, `/privacy/`)

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
- `/terms/` → Terms of Service
- `/privacy/` → Privacy Policy

## Static SEO Assets

- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`
- Page-level canonical + OpenGraph + Twitter + JSON-LD metadata in each HTML entry

## Brand Assets

- Website logo: `public/brand/retropa-app-logo.png`
- Source asset: `retropa/resources/Assets.xcassets/AppIcon.appiconset/复古游戏手柄融合图.png`

## Notes

- The project is static and deployable on CDN/object storage.
- If your production domain is not `https://retropa.app`, update canonical URLs and sitemap locations.
