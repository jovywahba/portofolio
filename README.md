# Jovany Wahba — Portfolio

Personal portfolio of **Jovany Raafat Wahba**, Systems & Software Engineer (Cairo, Egypt).

A single-page React application presenting selected production work — booking
platforms, clinic management software and SaaS products — alongside the
engineering competencies behind them.

**Live:** https://portofolio-jovywahbas-projects.vercel.app _(update to the custom domain once configured)_

## Tech stack

| Area       | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | React 18                                      |
| Build tool | Vite 5                                        |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`, no config file) |
| Routing    | React Router 7                                |
| Icons      | lucide-react                                  |
| UI         | Radix Toast                                   |
| Contact    | EmailJS                                       |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your EmailJS keys
npm run dev
```

The dev server runs at http://localhost:5173.

| Script            | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server             |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | ESLint over `js`/`jsx` (zero warnings) |

## Environment variables

The contact form posts through EmailJS. Copy `.env.example` to `.env` and set:

| Variable                   | Where to find it                    |
| -------------------------- | ----------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS dashboard → Email Services   |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates  |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS dashboard → Account          |

`.env` is git-ignored. These values ship in the client bundle by design, so
treat them as public identifiers and rely on EmailJS's allowed-origins setting
to stop abuse — never put a private key here.

## Project structure

```
src/
├─ components/          Section components + ui/ primitives
├─ data/
│  ├─ projects.js       All portfolio entries (single source of truth)
│  └─ skills.js         Skills grouped by competency area
├─ hooks/               use-toast
├─ lib/                 cn() class helper
├─ pages/               Home, NotFound
└─ index.css            Design tokens, keyframes and custom utilities
public/
├─ projects/            Project screenshots (WebP)
├─ favicon.svg
└─ Jovany_Raafat_Wahba_CV.pdf
```

### Adding a project

Add one object to the `projects` array in [`src/data/projects.js`](src/data/projects.js)
and drop a `1440×900` WebP into `public/projects/`. The schema is documented at
the top of that file. `featured: true` renders it under **Selected Work**;
everything else falls under **Earlier Projects**, ordered by `order`.

Only put a technology in `stack` if it is actually verified. Anything still
unconfirmed belongs in `unverified`, which is not rendered.

## Design system

Theme tokens are HSL triples on `:root` and `.dark` in `src/index.css`, exposed
to Tailwind through `@theme`. Custom utilities: `cosmic-button`, `card-hover`,
`gradient-border`, `text-glow`, `text-gradient`, `tag-chip`, `star`, `meteor`.

Dark mode is the default and persists in `localStorage` under `theme`.

## Deployment

Built as a static site; `vercel.json` rewrites all routes to `index.html` so
client-side routing works on direct navigation.

```bash
npm run build   # output in dist/
```

## License

Source is available for reference. Content, copy, screenshots and CV are
© Jovany Raafat Wahba.
