# KashPass

Landing page for KashPass — a rewards pass that turns game time into cash rewards.

Built with React 19 + Vite. Styling is plain CSS in a single stylesheet
([`src/index.css`](src/index.css)) driven by custom properties.

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR    |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint over `**/*.{js,jsx}`       |

## Deploying

Static build: `npm run build` outputs to `dist/`. Node is pinned by `.nvmrc`
(also declared in `engines`) because Vite 8 requires >= 20.19. Cache and security
headers live in `public/_headers`.

## Structure

```
src/
  App.jsx              page assembly
  index.css            design tokens + all component styles
  components/
    SiteHeader.jsx     logo bar
    Hero.jsx           purple hero section
    PassCard.jsx       the KashPass card mockup
    HowItWorks.jsx     first light content section
```

## Design system

Brand colors come from the KashKick palette and live as custom properties on
`:root` in `src/index.css`:

- `--kp-purple` `#5f1c8c` — brand, headline accents, light-section CTAs
- `--kp-purple-light` `#7629a2` — hover states, gradient highlights
- `--kp-green` `#0c7a20` — readable success/reward text on light surfaces
- `--kp-green-bright` `#39d667` — primary CTAs and reward highlights on purple
- `--kp-purple-deep` `#320b4d` — dark surfaces and card depth
- `--kp-bg` `#faf9fb` — light section background

The page alternates deep-purple and light sections. Any purple band gets the
`purple-section` class, which applies `--kp-purple-gradient` and white text;
everything else inherits the light defaults from `body`.
