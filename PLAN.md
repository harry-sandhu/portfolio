# Project Improvement Plan

## Current State
React + TypeScript + Vite + Tailwind single-page portfolio site. 17 commits on `main`, deployed via a GitHub Actions workflow to GitHub Pages. README.md documents setup, Pages deployment, and main file locations. Repo is public.

## What Is Already Good
- README is concise, accurate, and covers local dev, production build, and GitHub Pages setup steps.
- GitHub Actions workflow for Pages deploy is already included (`.github/workflows/deploy.yml`).
- Clear content/data separation (`src/data/journal.ts`) from presentation (`src/App.tsx`, `src/index.css`).
- Commit history shows an incremental, phase-based build process (phase 1–10 commits), which is good narrative/engineering signal for a portfolio repo.

## Issues Found
- **Broken fresh-clone install (P0, see below).**
- Working tree has several modified tracked files (`package-lock.json`, `package.json`, `src/App.tsx`, `src/data/journal.ts`, `src/index.css`) and an untracked `docs/cinder-red-hat-review.md` — pre-existing in-progress work, left untouched by this documentation pass.

## Documentation
README was already good; added one small, surgical "Known limitation" note under Local development pointing at the `file:` tarball dependency issue (see P0) rather than rewriting the file.

## Code Quality
N/A — not reviewed as part of this documentation-only pass.

## Testing
No automated test suite currently present in this repo.

## Security
No secrets observed in README, package.json dependency names, or commit history reviewed. Nothing flagged.

## Architecture
Standard Vite + React + TS app. The one architectural wrinkle is the out-of-repo dependency described below — a packaging/vendoring decision, not a code-structure issue.

## UX / UI
N/A for this pass (not reviewed).

## Performance
N/A for this pass (not reviewed).

## DevOps / Deployment
GitHub Pages deploy workflow already exists and is documented in README. No changes needed here.

## GitHub / Open Source Presentation
Public repo, used as a live personal portfolio — the broken-install issue below is the main risk to a recruiter or visitor who clones and tries to build it.

## Screenshots / Visual Assets
N/A — not assessed in this pass.

## README
Already solid at 34 lines; left mostly intact, with one new "Known limitation" callout added under the Local development section (see root README.md).

## Priority Roadmap

### P0 — Critical
- `package.json` depends on local, unpublished path dependencies (`@cinder/shared`, `cinder`) via `file:../../AI/Cinder/packages/...` tarballs. A fresh clone of this public repo cannot `npm install` without also having the sibling `AI/Cinder` project checked out at that exact relative path. This will break builds for anyone (including recruiters) who clones this repo standalone. Not fixed as part of this documentation pass — this is an architecture/packaging decision for Harry (e.g. vendor the dependency, publish it, or inline the needed code) rather than a docs fix.

### P1 — Important
- Decide and implement a resolution for the P0 dependency issue (vendor the package into this repo, publish it to a registry, or remove/inline the functionality it provides) so the public repo is self-contained.
- Once resolved, verify a true fresh-clone `npm install && npm run build` succeeds in a clean environment (e.g. CI or a scratch directory) before relying on the README note alone.

### P2 — Nice to Have
- Add a minimal CI check (lint/build) on push/PR to catch install breakage automatically going forward.
- Consider a short CONTRIBUTING or "why this exists" note if the repo is meant to double as a portfolio showcase beyond the README's current scope.

## Recommended Next Steps
1. Resolve the `@cinder/shared` / `cinder` tarball dependency (vendor, publish, or inline) — this is the only blocking issue.
2. Validate a clean clone installs and builds successfully.
3. Optionally add a basic CI workflow to guard against this class of regression in the future.
