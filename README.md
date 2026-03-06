# UCI Lira Website Demo — Astro + Tailwind + TypeScript

A modern, elegant, and professional frontend demo for **Uganda Christian Institute School of Nursing and Midwifery, Lira**.

This project is intentionally **frontend-only** for quick review, smooth Netlify deployment, and easy iteration during client testing.

## Why this version fixes the earlier errors

The earlier package failed because it mixed:

- **Astro 4**
- with a **Netlify adapter version meant for newer Astro**

This rebuilt version avoids that dependency conflict by using a **static Astro setup** for Netlify testing.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- Static output for Netlify

## Features included

- Modern homepage with bold, premium presentation
- Fully responsive layout
- Home, About, Programmes, Admissions, Gallery, News, Contact
- Official institute visual pack (curated from UCI channels) in `public/images` as optimized `.webp`
- Reusable Astro components
- Clean data-driven content structure in `src/data/site.ts`
- Smoke test validation via `npm test` for routes, links, and local image usage
- Netlify-ready config

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Run smoke checks

```bash
npm test
```

## Deploy to Netlify

Recommended settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

This repo already includes `netlify.toml`.

## Project structure

```text
uci-lira-site-v2/
├── public/
│   ├── assets/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tsconfig.json
└── README.md
```

## Notes on assets

The project includes a local image pack so the demo runs immediately after extraction.

You can later replace any image by swapping files in:

```text
public/images/
```

without changing component logic.

## Recommended next phase

After client approval, the next upgrades can include:

- official school photography
- refined programme detail pages
- markdown or CMS-powered news
- enquiry form backend
- downloadable prospectus pages
- staff and leadership profiles
