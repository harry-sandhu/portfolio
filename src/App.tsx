import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  aboutNarrative,
  aboutPillars,
  buildingEntries,
  chapterLinks,
  chapterMetrics,
  devModeSamples,
  experienceJourney,
  journalProfile,
  selectedProjects,
  stackFootprint,
  thinkingEntries,
} from './data/journal';

type InterfaceMode = 'ui' | 'dev';

type ChapterPreviewProps = {
  id: string;
  number: string;
  title: string;
  lead: string;
  children: ReactNode;
};

type TerminalEntry = {
  id: number;
  prompt: string;
  result: string;
};

type CommandResolution =
  | { type: 'append'; result: string }
  | { type: 'clear' }
  | { type: 'ui' };

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

function formatList(items: string[]) {
  return items.map((item) => `- ${item}`).join('\n');
}

function createInitialTerminalEntries(): TerminalEntry[] {
  return [
    {
      id: Date.now(),
      prompt: 'init',
      result: [
        'Dev Mode indexes the portfolio like a systems console.',
        'Ask about projects, experience, architecture, stack, thinking, building, or contact.',
        `Try: ${devModeSamples.join(' · ')}`,
      ].join('\n'),
    },
  ];
}

function resolveDevCommand(rawCommand: string): CommandResolution {
  const normalized = rawCommand.trim().toLowerCase();

  if (!normalized) {
    return { type: 'append', result: 'Enter a command. Try `help` to inspect the portfolio index.' };
  }

  if (normalized === 'help') {
    return {
      type: 'append',
      result: [
        'Available commands',
        'help',
        'about',
        'projects',
        'project <name>',
        'architecture <name>',
        'experience',
        'stack',
        'thinking',
        'building',
        'contact',
        'clear',
        'ui',
      ].join('\n'),
    };
  }

  if (normalized === 'clear') {
    return { type: 'clear' };
  }

  if (normalized === 'ui' || normalized === 'exit' || normalized === 'close' || normalized === 'mode ui') {
    return { type: 'ui' };
  }

  if (normalized === 'about' || normalized === 'whoami') {
    return {
      type: 'append',
      result: [journalProfile.name, journalProfile.role, '', ...aboutNarrative].join('\n'),
    };
  }

  if (normalized === 'projects') {
    return {
      type: 'append',
      result: selectedProjects
        .map((project) => `${project.name} · ${project.label} · ${project.year}\n${project.summary}`)
        .join('\n\n'),
    };
  }

  if (normalized === 'experience' || normalized === 'timeline') {
    return {
      type: 'append',
      result: experienceJourney
        .map(
          (entry) =>
            `${entry.company} — ${entry.role} (${entry.period})\n${entry.summary}\n${formatList(entry.focus)}`,
        )
        .join('\n\n'),
    };
  }

  if (normalized === 'stack' || normalized === 'skills') {
    return {
      type: 'append',
      result: ['Current working set', formatList(stackFootprint)].join('\n'),
    };
  }

  if (normalized === 'thinking' || normalized === 'notes') {
    return {
      type: 'append',
      result: thinkingEntries
        .map((entry) => `${entry.title} · ${entry.kind}\n${entry.excerpt}`)
        .join('\n\n'),
    };
  }

  if (normalized === 'building' || normalized === 'hackathons') {
    return {
      type: 'append',
      result: buildingEntries
        .map((entry) => `${entry.title} · ${entry.event}\n${entry.angle}\n${formatList(entry.evidence)}`)
        .join('\n\n'),
    };
  }

  if (normalized === 'contact') {
    return {
      type: 'append',
      result: [
        journalProfile.name,
        journalProfile.location,
        journalProfile.email,
        journalProfile.github,
        journalProfile.linkedin,
      ].join('\n'),
    };
  }

  if (normalized.startsWith('project ') || normalized.startsWith('architecture ')) {
    const query = normalized.replace(/^project\s+/, '').replace(/^architecture\s+/, '').trim();
    const project = selectedProjects.find((item) => item.name.toLowerCase() === query || item.name.toLowerCase().includes(query));

    if (!project) {
      return {
        type: 'append',
        result: `No project matched \`${query}\`. Try one of: ${selectedProjects.map((item) => item.name).join(', ')}.`,
      };
    }

    return {
      type: 'append',
      result: [
        `${project.name} · ${project.label} · ${project.year}`,
        '',
        project.summary,
        '',
        'Problem',
        project.problem,
        '',
        'Architecture',
        formatList(project.architecture),
        '',
        'Technologies',
        formatList(project.technologies),
        '',
        'Key challenges',
        formatList(project.challenges),
        '',
        'Outcomes',
        formatList(project.outcomes),
      ].join('\n'),
    };
  }

  return {
    type: 'append',
    result: `Unknown command \`${rawCommand}\`. Try \`help\` for the available portfolio queries.`,
  };
}

function App() {
  const [mode, setMode] = useState<InterfaceMode>('ui');
  const [terminalEntries, setTerminalEntries] = useState<TerminalEntry[]>(() => createInitialTerminalEntries());
  const [terminalCommand, setTerminalCommand] = useState('');
  const terminalInputRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (mode !== 'dev') {
      document.body.style.overflow = '';
      return;
    }

    const timeout = window.setTimeout(() => {
      terminalInputRef.current?.focus();
    }, 80);

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMode('ui');
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(timeout);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mode]);

  function executeCommand(rawCommand: string) {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const resolution = resolveDevCommand(trimmed);

    if (resolution.type === 'clear') {
      setTerminalEntries(createInitialTerminalEntries());
      setTerminalCommand('');
      return;
    }

    if (resolution.type === 'ui') {
      setTerminalCommand('');
      setMode('ui');
      return;
    }

    setTerminalEntries((current) => [
      ...current,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        prompt: trimmed,
        result: resolution.result,
      },
    ]);
    setTerminalCommand('');
  }

  function handleTerminalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    executeCommand(terminalCommand);
  }

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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[0.74rem] uppercase tracking-[0.22em] text-[rgba(102,54,53,0.58)]">
              <span>{journalProfile.location}</span>
              <span>Backend / Systems</span>
              <span>Five chapters</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:hidden">
              {chapterLinks.map((chapter) => (
                <a key={chapter.id} href={`#${chapter.id}`} className="tag-chip">
                  {chapter.number} · {chapter.title}
                </a>
              ))}
            </div>
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
          lead="Evidence of execution under constraint: defining systems quickly, owning technical scope, and still shipping something coherent."
        >
          <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <p>
                These environments are useful because they compress decision-making. They make it obvious whether an engineer
                can define a system, pick the right constraints, divide work, and still deliver in time.
              </p>
              <p>
                The value here is not the headline. It is the repeatability: multiple builds, different technical contexts, and
                consistent evidence of speed, ownership, and architectural clarity.
              </p>

              <section className="paper-panel p-6">
                <p className="detail-label">What this chapter signals</p>
                <ul className="technical-list mt-4">
                  <li>
                    <span>Ability to scope complex ideas into deliverable systems fast.</span>
                  </li>
                  <li>
                    <span>Comfort taking technical ownership when requirements are still moving.</span>
                  </li>
                  <li>
                    <span>Proof that speed does not need to come at the cost of system thinking.</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="building-grid">
              {buildingEntries.map((entry) => (
                <article key={entry.title} className="paper-panel p-6">
                  <p className="detail-label">{entry.event}</p>
                  <h3 className="mt-3 font-[var(--journal-serif)] text-3xl text-[var(--journal-ink)]">{entry.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[rgba(102,54,53,0.58)]">{entry.window}</p>
                  <p className="mt-5 text-[rgba(102,54,53,0.82)]">{entry.angle}</p>
                  <ul className="technical-list mt-5">
                    {entry.evidence.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </ChapterPreview>

        <div className="journal-shell py-3">
          <div className="journal-rule" />
        </div>

        <ChapterPreview
          id="thinking"
          number="05"
          title="Thinking"
          lead="Ideas, engineering principles, architecture notes, and the quieter observations that shape how systems are built."
        >
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p>
                This chapter is meant to feel less like a blog feed and more like margin notes from ongoing engineering work:
                small principles, operating assumptions, and reminders about what actually matters once software meets reality.
              </p>
              <p>
                The writing here should grow over time — around system design, AI infrastructure, developer experience,
                operational clarity, and how engineering decisions influence product trust.
              </p>

              <section className="paper-panel p-6">
                <p className="detail-label">Current working set</p>
                <div className="tag-row mt-4">
                  {stackFootprint.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="thinking-grid">
              {thinkingEntries.map((entry) => (
                <article key={entry.title} className="note-card">
                  <p className="note-kind">{entry.kind}</p>
                  <h3 className="mt-3 font-[var(--journal-serif)] text-2xl text-[var(--journal-ink)]">{entry.title}</h3>
                  <p className="mt-3 text-[rgba(102,54,53,0.76)]">{entry.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </ChapterPreview>
      </main>

      <footer className="journal-shell border-t border-[rgba(222,179,173,0.75)] py-10 text-sm text-[rgba(102,54,53,0.72)]">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="chapter-kicker">Colophon</p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-[rgba(102,54,53,0.78)]">
              Built as a calm technical document — focused on systems, product judgment, and the engineering story behind the
              work.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-left md:text-right">
            <a href={`mailto:${journalProfile.email}`} className="journal-nav-link">
              {journalProfile.email}
            </a>
            <a href={journalProfile.github} target="_blank" rel="noreferrer" className="journal-nav-link">
              GitHub
            </a>
            <a href={journalProfile.linkedin} target="_blank" rel="noreferrer" className="journal-nav-link">
              LinkedIn
            </a>
            <a href={cvUrl} download className="journal-nav-link">
              Download CV
            </a>
          </div>
        </div>
      </footer>

      {mode === 'dev' ? (
        <div className="terminal-overlay" role="dialog" aria-modal="true" aria-label="Dev mode terminal">
          <div className="terminal-window">
            <div className="terminal-chrome">
              <span>Harcharan Singh · Dev Mode</span>
              <button type="button" onClick={() => setMode('ui')} className="journal-nav-link text-left text-[0.72rem] text-white/80">
                Return to UI
              </button>
            </div>

            <div className="terminal-body">
              {terminalEntries.map((entry) => (
                <div key={entry.id} className="terminal-entry">
                  <p className="terminal-prompt">hs@portfolio:~$ {entry.prompt}</p>
                  <pre className="terminal-result">{entry.result}</pre>
                </div>
              ))}
            </div>

            <form className="terminal-form" onSubmit={handleTerminalSubmit}>
              <div className="terminal-input-row">
                <span className="terminal-prompt">$</span>
                <input
                  ref={terminalInputRef}
                  value={terminalCommand}
                  onChange={(event) => setTerminalCommand(event.target.value)}
                  className="terminal-input"
                  placeholder="query projects, architecture, experience, stack..."
                  aria-label="Dev mode command input"
                />
                <button type="submit" className="terminal-submit">
                  Run
                </button>
              </div>

              <div className="terminal-samples">
                {devModeSamples.map((sample) => (
                  <button key={sample} type="button" onClick={() => executeCommand(sample)}>
                    {sample}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
