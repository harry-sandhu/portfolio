# Project Improvement Plan

## Current State
React + TypeScript + Vite + Tailwind single-page portfolio site. Deployed via a GitHub Actions workflow to GitHub Pages. Content/presentation split: `src/data/journal.ts` (data) and `src/App.tsx` (presentation). Repo is public.

## What Is Already Good
- Clear content/data separation (`src/data/journal.ts`) from presentation (`src/App.tsx`, `src/index.css`).
- A real, functional Dev Mode terminal that queries the same structured data as the UI, not a decorative gimmick.
- Distinct editorial visual identity (warm paper palette, serif headings) rather than a generic template.
- GitHub Actions workflow for Pages deploy already included.

## Issues Found (resolved this pass)
- **P0 dependency issue — resolved.** The working tree had an uncommitted change adding `@cinder/shared` and `cinder` as local `file:` tarball dependencies. The committed `package.json` on `main` never actually had these — they were stray uncommitted lines from a local experiment, and no source file in this repo ever imports either package. Discarded the uncommitted change and verified a clean `rm -rf node_modules && npm install && npm run build` succeeds standalone.
- **Unverifiable/overclaimed project content — resolved.** Several featured case studies (Beacon, Atlas, Noble, Pantha, Hectare, CreditKuber, The Dilemma Protocol) described work that doesn't match the state of the underlying local repositories (e.g. "Beacon" described a built collaborative DAW; the actual `BeaconDAW` repo is an unmodified upstream Ardour import with zero original code). Replaced the featured project list with seven case studies that are verified against the actual repositories: Cinder, ROTOR, Campfire, FloppyRogue, website-auditor, EmailTracker, The Last Incentive.
- **Unverifiable hackathon claims — resolved.** The "Hackathons & Building" chapter listed specific wins/placements (EthOxford, Metis HyperHack, Avalanche Frontier, HackaTRON, etc.). A web check found no public record of several of these, and one date didn't match public results. Removed the chapter rather than publish unverifiable claims; it can come back if backed by links to official results pages.
- **No visibility labeling — resolved.** None of the seven featured projects are public GitHub repos today. Each case study now carries an explicit `visibilityLabel` ("Private Startup Project" for Cinder, "Private" for the rest) and only renders a GitHub/demo link when one is actually set and verified — none are set right now, since none of the seven are public.

## Documentation
README's local-dev note was stale (referenced the already-resolved dependency issue) — removed.

## Code Quality
No other issues found in `App.tsx`/`journal.ts` beyond the content accuracy problems above.

## Testing
No automated test suite. For a single-page marketing/portfolio site this is a reasonable P2, not a blocker.

## Security
Scanned for API keys, tokens, localhost URLs, and private repo references — none found.

## Architecture
Standard Vite + React + TS app, now genuinely dependency-clean (previous "architectural wrinkle" is gone, not just documented around).

## UX / UI
Removed the unverifiable hackathons chapter rather than leaving a placeholder; chapter numbering and the "Four chapters" hero label updated to match.

## Performance
Production bundle is small (~180KB JS / ~20KB CSS before gzip) with no images and no external font loading — nothing to optimize here right now.

## DevOps / Deployment
GitHub Pages deploy workflow unchanged, already documented in README.

## GitHub / Open Source Presentation
Public repo. SEO metadata improved this pass: added `robots`, canonical URL, Open Graph, and Twitter card tags (using the real deployed URL and the existing favicon — no fabricated social-preview image).

## Screenshots / Visual Assets
None exist. The site is text/CSS-driven with no `<img>` usage, so there's nothing broken, but a project-specific screenshot or short demo clip (especially for FloppyRogue, which is visual/playable) would strengthen the case studies. Not added here — no such asset exists yet to add honestly.

## Priority Roadmap

### P0 — Critical
None remaining.

### P1 — Important
- If any of the seven featured private repos (ROTOR, Campfire, FloppyRogue, website-auditor, EmailTracker, The Last Incentive) are made public later, add the real `githubUrl` to that project's entry in `journal.ts` so the "View source" link appears automatically — it is already wired up, just unpopulated.
- If verifiable hackathon results (official results page or Devpost project link) become available, the "Hackathons & Building" chapter can be reinstated with those links cited directly.

### P2 — Nice to Have
- Add a demo screenshot/GIF for FloppyRogue once a build is available to capture.
- Add a minimal CI check (typecheck + build) on push/PR.

## Recommended Next Steps
1. Decide which (if any) of the seven featured private repos should go public, and add verified GitHub links once they do.
2. If hackathon results can be verified with links, reinstate that chapter with citations.
3. Optionally add a build/typecheck CI workflow.
