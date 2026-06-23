# Harcharan Singh Portfolio

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
- `public/Harcharan-Singh-CV.md` — downloadable CV
