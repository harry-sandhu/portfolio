import { useState } from 'react';
import { chapterLinks, journalProfile } from './data/journal';

type InterfaceMode = 'ui' | 'dev';

function App() {
  const [mode, setMode] = useState<InterfaceMode>('ui');
  const cvUrl = `${import.meta.env.BASE_URL}Harcharan-Singh-CV.md`;

  return (
    <div className="journal-app">
      <header className="sticky top-0 z-40 border-b border-[rgba(222,179,173,0.75)] bg-[rgba(249,241,240,0.82)] backdrop-blur-xl">
        <div className="journal-shell flex items-center justify-between gap-6 py-4">
          <a
            href="#top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--journal-border)] font-semibold tracking-[0.24em] text-[var(--journal-ink)]"
          >
            HS
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {chapterLinks.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`} className="journal-nav-link">
                {chapter.title}
              </a>
            ))}
            <a href={cvUrl} download className="journal-nav-link">
              CV
            </a>
          </nav>

          <div className="mode-switch" aria-label="Interface mode switch">
            <button
              type="button"
              className={mode === 'ui' ? 'is-active' : ''}
              onClick={() => setMode('ui')}
              aria-pressed={mode === 'ui'}
            >
              UI Mode
            </button>
            <button
              type="button"
              className={mode === 'dev' ? 'is-active' : ''}
              onClick={() => setMode('dev')}
              aria-pressed={mode === 'dev'}
            >
              Dev Mode
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="journal-shell flex min-h-[calc(100vh-76px)] items-center justify-center py-16 text-center sm:py-20">
          <div className="max-w-5xl">
            <p className="hero-preface">{journalProfile.preface}</p>
            <h1 className="hero-name mt-8">{journalProfile.name}</h1>
            <p className="hero-role mt-8">{journalProfile.role}</p>
            <p className="hero-support mx-auto mt-8">{journalProfile.supportLine}</p>
          </div>
        </section>

        <section className="journal-shell pb-20">
          <div className="journal-rule" />
          <div className="grid gap-8 py-12 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div>
              <p className="chapter-kicker">Notebook Index</p>
            </div>

            <div className="space-y-6">
              <p className="chapter-lead max-w-4xl">
                The portfolio is being restructured as an editorial walkthrough — less landing page, more technical journal.
                This shell now establishes the interface, tone, and centered opening view.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {chapterLinks.map((chapter) => (
                  <article key={chapter.id} className="paper-panel p-5">
                    <p className="chapter-kicker">{chapter.number}</p>
                    <h2 className="mt-3 font-[var(--journal-serif)] text-2xl text-[var(--journal-ink)]">{chapter.title}</h2>
                  </article>
                ))}
              </div>

              {mode === 'dev' ? (
                <div className="paper-panel p-5 text-sm text-[rgba(102,54,53,0.78)]">
                  Dev Mode is reserved for the terminal overlay and query system, which will be introduced after the core
                  narrative chapters are built.
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="journal-shell flex flex-col gap-3 border-t border-[rgba(222,179,173,0.75)] py-8 text-sm text-[rgba(102,54,53,0.7)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {journalProfile.location} · <a href={`mailto:${journalProfile.email}`}>{journalProfile.email}</a>
        </p>
        <p>Phase 3 establishes the shell, hero, and persistent mode switch.</p>
      </footer>
    </div>
  );
}

export default App;
