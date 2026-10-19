# Muzhda Ahmadi — Portfolio

Personal portfolio of **Muzhda Ahmadi** — Frontend Developer and Web Development
Student. Originally built as a static multi-page HTML/CSS site, now rebuilt as a
React single-page app with the same design and content.

## Stack

- React 19 + React Router DOM 7
- Vite 6
- Plain CSS (the original `css/style.css`, kept verbatim)

## Pages

| Page | Route |
| --- | --- |
| Home | `/` |
| Work | `/work` |
| About | `/about` |
| Education | `/education` |
| Contact | `/contact` |
| Project details | `/projects/dreamhome`, `/projects/ecommerce`, `/projects/form`, `/projects/fig`, `/projects/card-design` |

Old static URLs (`/work.html`, `/projects/fig.html`, …) still work — they redirect
to the matching React route.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deploy

Pushing to `main` builds and publishes the site to GitHub Pages through
`.github/workflows/deploy.yml`. The build uses `VITE_BASE=/my-portfolio/` so the
app is served from the repository sub-path; locally the base stays `/`.

`public/404.html` + the small restore script in `index.html` make direct links
such as `/my-portfolio/about` work on GitHub Pages.

## What changed vs. the static version

- Components and data separated (`src/components`, `src/data/projects.js`) —
  project text lives in one place and is reused by the Home cards, Work list and
  project detail pages.
- Client behaviour from `js/script.js` (menu, scroll reveal, magnetic buttons,
  count-up stats, sticky nav shadow) ported into React hooks/components.
- Per-page document titles, meta description, Open Graph tags and a favicon.
- Accessibility: real buttons for the FAQ (with `aria-expanded`), Escape closes
  the menu, skip-to-content link, visible keyboard focus, `loading="lazy"` images.
- 404 page for unknown routes.
