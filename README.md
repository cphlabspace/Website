# CPH Labspace

Boutique AI strategy, Copenhagen. This repository holds the CPH Labspace site —
a small static page. We advise the C-suite on Claude, then put agents on
prospecting and Amazon.

## Prerequisites

- Node.js 20+ (developed against Node 22)
- npm 10+

## Getting started

```bash
npm ci        # install pinned dependencies (use `npm install` to refresh the lockfile)
npm run dev   # start the Vite dev server on http://localhost:5173
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload. |
| `npm run build` | Produce a static production build in `dist/`. |
| `npm run preview` | Serve the production build locally on port 4173. |

## Structure

```
.
├── index.html            # The page (all copy lives here)
├── src/styles.css        # Editorial styles + design tokens
├── public/favicon.svg    # Monogram favicon
├── vite.config.js        # Static-site build config
└── .cursor/environment.json  # Cloud Agent development environment
```

## Notes

- Static site. No framework, no client-side JavaScript.
- Paper `#efe8dc`, ink `#161412`. Typeset in Instrument Serif and Inter Tight
  (loaded from Google Fonts).
- Partner portraits are typographic monograms; no photographs are used yet.
