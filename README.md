# Harcharan Singh Portfolio

React + TypeScript + Tailwind portfolio, ready for GitHub Pages.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions for GitHub Pages deploy

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

In GitHub repo settings:
- go to **Settings → Pages**
- set **Source** to **GitHub Actions**

Then every push to `main` will deploy the site.

## Notes

- `docs/CV.md` is the source CV
- `public/Harcharan-Singh-CV.md` is the downloadable copy used by the site
- `vite.config.ts` automatically uses the repo name as the base path on GitHub Actions
