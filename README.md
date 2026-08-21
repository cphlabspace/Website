# CPH Lab Space — Website

Marketing website for **CPH Lab Space**, a members' studio and hardware lab in Copenhagen.
Built with [Vite](https://vite.dev), [React](https://react.dev), and TypeScript.

## Prerequisites

- Node.js 20+ (the project is developed against Node 22)
- npm 10+

## Getting started

```bash
npm ci        # install pinned dependencies (use `npm install` to refresh the lockfile)
npm run dev   # start the Vite dev server on http://localhost:5173
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement. |
| `npm run build` | Type-check and produce a production build in `dist/`. |
| `npm run preview` | Serve the production build locally on port 4173. |
| `npm run lint` | Run ESLint over the project. |
| `npm run typecheck` | Run the TypeScript compiler in no-emit mode. |

## Project structure

```
.
├── index.html            # App entry HTML
├── public/               # Static assets served as-is
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Landing page + waitlist form
│   ├── App.css           # Component styles
│   └── index.css         # Global styles / design tokens
├── vite.config.ts        # Vite configuration
└── .cursor/environment.json  # Cloud Agent development environment
```

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:

- `install` runs `npm ci` to install pinned dependencies.
- A `dev` terminal runs `npm run dev` so the site is available on port 5173.
