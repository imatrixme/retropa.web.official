# Retropa Official Website

Premium marketing website for Retropa iOS app, built with Vite + React + TypeScript + shadcn/ui.

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui components
- React Router (`/`, `/terms`, `/privacy`)

## Run Locally

```bash
npm install
npm run dev
```

Local preview: `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Official landing page with product narrative and download CTA
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy

## Brand Assets

- App-consistent logo asset: `public/brand/retropa-app-logo.png`
- Source: `retropa/resources/Assets.xcassets/AppIcon.appiconset/复古游戏手柄融合图.png`

## Deployment Notes

This project uses client-side routing. Configure static hosting rewrites so all unknown paths fallback to `index.html`.
