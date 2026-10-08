# Harry Sandhu Portfolio

Editorial, systems-first portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Experience goals
- Warm technical-journal aesthetic
- Chapter-based storytelling instead of landing-page blocks
- Architecture-first project case studies
- Terminal-style Dev Mode for querying projects, experience, stack, and decisions

## Local development
```bash
npm install
npm run dev
```

> **Known limitation:** `package.json` currently depends on two local tarball packages (`@cinder/shared` and `cinder`) resolved via `file:` paths that point at a sibling `AI/Cinder` project (e.g. `file:../../AI/Cinder/packages/shared/cinder-shared-0.1.0.tgz`). That project is not part of this repo and isn't published anywhere, so a fresh clone of this repo alone will **not** `npm install` successfully unless you also have `AI/Cinder` checked out at the exact relative path expected. See `PLAN.md` for details.

## Production build
```bash
npm run build
```

## GitHub Pages
A workflow is included at `.github/workflows/deploy.yml`.

In repo settings:
1. Open **Settings → Pages**
2. Set **Source** to **GitHub Actions**

## Main files
- `src/App.tsx` — portfolio experience and Dev Mode overlay
- `src/data/journal.ts` — structured content for chapters, experience, projects, and thinking notes
- `src/index.css` — journal design system and terminal styling
- `docs/portfolio-phase-01-blueprint.md` — content and narrative blueprint
- `public/Harry-Sandhu-CV.md` — downloadable CV
