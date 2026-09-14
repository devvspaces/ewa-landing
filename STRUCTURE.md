# Repo structure

TanStack Start (file-based routing + SSR) on Vite + React + TypeScript +
Tailwind v4. Routes live in `src/routes/` — this is a framework requirement,
not a stylistic choice; see `src/routes/README.md`.

- `src/routes/` — one file per URL (`index.tsx` → `/`, `pros.tsx` → `/pros`),
  plus `__root.tsx` (app shell, `<html>/<head>/<body>`, 404 and error states).
  Each route file is a thin composition of section components — it doesn't
  hold layout/markup itself.
- `src/components/marketing/` — the section components that make up the two
  marketing pages (Nav, Footer, Hero, ProsHero, ModeToggle, HowItWorks,
  TrustPin, ProsBand, ProsFeatures, FoundingPerks, FinalCta, WaitlistCapture,
  ProApplication, CalendarCard, ChipSelect, Eyebrow, Logomark).
- `src/components/ui/` — the shadcn/Radix primitive library from Lovable's
  scaffold (`components.json`). Not all of it is used by the marketing pages
  today; kept as-is since it's the project's component-generation target for
  future work, not dead code.
- `src/lib/` — `utm.ts` (reads `utm_*`/`ref` from the URL) and `waitlist.ts`
  (`submitWaitlist` / `submitProApplication`, currently console.log stubs —
  see the TODOs for wiring up the real endpoint). Also holds pre-existing
  Lovable error-reporting/capture helpers and the `cn()` class-merge util.
- `src/hooks/` — `use-mobile`, used internally by `components/ui/sidebar`.
- `src/assets/` — page imagery (currently empty; the marketing pages use
  CSS-drawn illustrations, no bitmap assets).
- `src/styles.css` — Tailwind v4 CSS-based theme (`@theme`/`:root`, no
  `tailwind.config.*`). Brand tokens (`midnight`, `midnight-2`, `orange`,
  `creamy`, `paper`) and the `fade-up`/`draw` animations added here, extending
  the existing design-system tokens rather than replacing them.

## Deviations from a generic Vite+React brief

- **Routing**: uses the repo's existing TanStack Router (file-based, SSR),
  not react-router-dom — adding a second router would conflict with the
  SSR setup already in place.
- **Tailwind config**: Tailwind v4 configures via CSS (`@theme` in
  `styles.css`), so brand tokens were added there instead of a
  `tailwind.config.ts` (none exists in this project).
- **Pros page sections**: the brief's component list covered the landing
  page; `ProsHero`, `ProsFeatures`, and `FoundingPerks` were added to cover
  `/pros`'s own hero/features/perks sections (distinct from `ProsBand`, which
  is the dark pros-teaser band embedded in the landing page).
