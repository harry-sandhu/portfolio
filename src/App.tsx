import { useEffect, useState } from 'react';
import {
  aboutNarrative,
  aboutPillars,
  buildingEntries,
  chapterLinks,
  chapterMetrics,
  experienceJourney,
  journalProfile,
  selectedProjects,
  thinkingEntries,
} from './data/journal';

type InterfaceMode = 'ui' | 'dev';

type ChapterPreviewProps = {
  id: string;
  number: string;
  title: string;
  lead: string;
  children: React.ReactNode;
};

function ChapterPreview({ id, number, title, lead, children }: ChapterPreviewProps) {
  return (
    <section id={id} data-reveal className="journal-shell journal-chapter reveal-section">
      <div>
        <p className="chapter-kicker">Chapter {number}</p>
      </div>

      <div>
        <h2 className="chapter-heading">{title}</h2>
        <p className="chapter-lead mt-5">{lead}</p>
        <div className="mt-8 journal-body">{children}</div>
      </div>
    </section>
  );
}

function App() {
  const [mode, setMode] = useState<InterfaceMode>('ui');
  const cvUrl = `${import.meta.env.BASE_URL}Harcharan-Singh-CV.md`;

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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

        <div className="journal-shell pb-6">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="who-i-am"
          number="01"
          title="Who I Am"
          lead="An engineer focused on systems that need to be understandable, dependable, and ready for real operating conditions."
        >
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              {aboutNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-6">
              <section className="paper-panel p-6">
                <p className="chapter-kicker">Focus Areas</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {aboutPillars.map((pillar) => (
                    <article key={pillar.title}>
                      <h3 className="font-[var(--journal-serif)] text-2xl text-[var(--journal-ink)]">{pillar.title}</h3>
                      <p className="mt-3 text-[rgba(102,54,53,0.76)]">{pillar.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="chapter-metrics">
                {chapterMetrics.map((metric) => (
                  <article key={metric.label}>
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </ChapterPreview>

        <div className="journal-shell py-3">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="experience"
          number="02"
          title="Experience"
          lead="A progression from product ownership to enterprise workflow rigor to distributed systems work, presented as one continuous engineering path."
        >
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="timeline">
                {experienceJourney.map((entry) => (
                  <article key={entry.company} className="timeline-entry">
                    <p className="timeline-period">{entry.period}</p>
                    <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <h3 className="font-[var(--journal-serif)] text-3xl text-[var(--journal-ink)]">{entry.company}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-[rgba(102,54,53,0.58)]">{entry.role}</p>
                    </div>
                    <p className="mt-2 text-sm text-[rgba(102,54,53,0.62)]">{entry.location}</p>
                    <p className="mt-5">{entry.summary}</p>
                    <ul className="technical-list mt-5">
                      {entry.focus.map((point) => (
                        <li key={point}>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {experienceJourney.map((entry) => (
                <section key={entry.company} className="paper-panel p-6">
                  <p className="chapter-kicker">Systems touched · {entry.company}</p>
                  <div className="tag-row mt-5">
                    {entry.systems.map((system) => (
                      <span key={system} className="tag-chip">
                        {system}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </ChapterPreview>

        <div className="journal-shell py-3">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="selected-projects"
          number="03"
          title="Selected Projects"
          lead="A set of case studies centered on system design, architecture judgment, and the operational realities behind the finished product."
        >
          <div>
            {selectedProjects.map((project) => (
              <article key={project.name} className="project-case first:border-t-0 first:pt-0">
                <div className="project-meta">
                  <p className="chapter-kicker">{project.year}</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-[rgba(102,54,53,0.6)]">{project.label}</p>
                  <h3 className="project-name">{project.name}</h3>
                </div>

                <div className="space-y-8">
                  <p className="text-lg leading-8 text-[rgba(102,54,53,0.84)]">{project.summary}</p>

                  <div className="project-grid">
                    <div className="space-y-7">
                      <section>
                        <p className="detail-label">Problem</p>
                        <p className="mt-3">{project.problem}</p>
                      </section>

                      <section>
                        <p className="detail-label">Architecture</p>
                        <ul className="technical-list mt-4">
                          {project.architecture.map((item) => (
                            <li key={item}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <aside className="paper-panel paper-panel-strong p-6">
                      <p className="detail-label">Architecture sketch</p>
                      <div className="project-diagram mt-5">
                        {project.diagram.map((node) => (
                          <div key={node} className="project-node">
                            {node}
                          </div>
                        ))}
                      </div>
                    </aside>
                  </div>

                  <div className="project-detail-grid">
                    <section className="paper-panel p-5">
                      <p className="detail-label">Technologies</p>
                      <div className="tag-row mt-4">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="tag-chip">
                            {technology}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="paper-panel p-5">
                      <p className="detail-label">Key challenges</p>
                      <ul className="technical-list mt-4">
                        {project.challenges.map((challenge) => (
                          <li key={challenge}>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="paper-panel p-5 xl:col-span-2">
                      <p className="detail-label">Outcomes</p>
                      <ul className="technical-list mt-4">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome}>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ChapterPreview>

        <div className="journal-shell py-3">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="building"
          number="04"
          title="Hackathons & Building"
          lead="This chapter will highlight execution under pressure — not trophies, but repeated proof of shipping complex systems quickly."
        >
          <ul className="technical-list">
            {buildingEntries.map((entry) => (
              <li key={entry.title}>
                <div>
                  <p className="font-[var(--journal-serif)] text-2xl text-[var(--journal-ink)]">
                    {entry.title} · {entry.event}
                  </p>
                  <p className="mt-2 text-[rgba(102,54,53,0.76)]">{entry.angle}</p>
                </div>
              </li>
            ))}
          </ul>
        </ChapterPreview>

        <div className="journal-shell py-3">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="thinking"
          number="05"
          title="Thinking"
          lead="A space for engineering principles, architecture notes, operational reflections, and the ideas behind the systems."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {thinkingEntries.map((entry) => (
              <article key={entry.title} className="paper-panel p-5">
                <p className="chapter-kicker">{entry.kind}</p>
                <h3 className="mt-3 font-[var(--journal-serif)] text-2xl text-[var(--journal-ink)]">{entry.title}</h3>
                <p className="mt-3 text-[rgba(102,54,53,0.76)]">{entry.excerpt}</p>
              </article>
            ))}
          </div>

          {mode === 'dev' ? (
            <div className="paper-panel mt-8 p-5 text-sm text-[rgba(102,54,53,0.78)]">
              Dev Mode is reserved for the terminal overlay and query system, which will be introduced after the core
              narrative chapters are fully built.
            </div>
          ) : null}
        </ChapterPreview>
      </main>

      <footer className="journal-shell flex flex-col gap-3 border-t border-[rgba(222,179,173,0.75)] py-8 text-sm text-[rgba(102,54,53,0.7)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {journalProfile.location} · <a href={`mailto:${journalProfile.email}`}>{journalProfile.email}</a>
        </p>
        <p>Phase 4 establishes the chapter-based scroll structure and story rhythm.</p>
      </footer>
    </div>
  );
}

export default App;
