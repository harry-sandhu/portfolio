import { useMemo, useState } from 'react';
import {
  archiveProjects,
  education,
  experience,
  hackathons,
  profile,
  projects,
  roleFit,
  skillGroups,
  stats,
  strengths,
  type ProjectCategory,
} from './data/portfolio';

type ProjectFilter = 'all' | ProjectCategory;

const filters: Array<{ label: string; value: ProjectFilter }> = [
  { label: 'All', value: 'all' },
  { label: 'Platform', value: 'platform' },
  { label: 'AI', value: 'ai' },
  { label: 'Product', value: 'product' },
];

function App() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const cvUrl = `${import.meta.env.BASE_URL}Harcharan-Singh-CV.md`;

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute right-0 top-52 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="subtle-grid absolute inset-0 opacity-25" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-white/5 text-sm font-semibold tracking-[0.3em] text-slate-100"
          >
            HS
          </a>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={cvUrl}
            download
            className="inline-flex items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-300/15"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="section-shell grid gap-8 pb-10 pt-16 lg:grid-cols-[1.2fr_0.85fr] lg:items-start lg:pt-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-sky-300">
              Backend · Systems · Full-stack · Applied AI
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name} builds production software that actually ships.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {profile.oneLiner}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-200"
              >
                Explore projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Email me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {[profile.location, profile.email, profile.phone].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-sky-300/30 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-sky-300/30 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/90">Current role</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Software Engineer · Backend / Systems</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Trinitum Software Labs — building secure distributed systems, storage workflows, and resilience-focused backend services.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="text-2xl font-black tracking-tight text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell py-10 sm:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Profile</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Backend-first. Product-aware. Systems-minded.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="glass-card p-6">
              <h3 className="text-xl font-bold text-white">What I’m strongest at</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card p-6">
              <h3 className="text-xl font-bold text-white">Best role fit</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {roleFit.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-slate-100"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-300">
                I work best where product engineering and systems concerns meet: service design, operational tooling, cloud delivery,
                realtime flows, workflow automation, and AI-backed capabilities that need to work reliably in production.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Education</span>
                <span className="mt-2 block">{education}</span>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="section-shell py-10 sm:py-14">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Experience</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Built across secure storage, workflow automation, and product-scale platforms.
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {experience.map((item) => (
              <article key={item.company} className="glass-card grid gap-6 p-6 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm font-semibold text-sky-200">{item.period}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{item.role}</p>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2 w-2 rounded-full bg-fuchsia-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell py-10 sm:py-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Selected work</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Projects across AI infrastructure, realtime systems, fintech, and platform engineering.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = filter.value === activeFilter;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-sky-300 text-slate-950'
                        : 'border border-white/15 bg-white/5 text-slate-200 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.name} className="glass-card p-6 transition hover:-translate-y-1 hover:border-sky-300/25">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/90">{project.kind}</span>
                  <span className="text-sm text-slate-400">{project.stack}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="glass-card mt-4 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Project archive</h3>
                <p className="mt-2 text-slate-300">More systems across security, realtime multiplayer, media automation, and research.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {archiveProjects.map((project) => (
                <div key={project} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm leading-6 text-slate-300">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-10 sm:py-14">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Stack</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Comfortable from API design to cloud deployment to AI workflows.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="glass-card p-6">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{group.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-10 sm:py-14">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Hackathons</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Award-winning rapid execution across AI, fintech, Web3, insurance, and education.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {hackathons.map((item) => (
              <article key={item.title} className="glass-card p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell py-10 sm:py-14">
          <div className="glass-card grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Let’s build</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Looking for backend, systems, platform, or AI-heavy work?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                I’m a strong fit for teams that need practical engineering across APIs, distributed systems, operational tooling,
                realtime workflows, and production-grade AI features.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-2xl border border-sky-300/20 bg-sky-300/10 px-5 py-4 font-semibold text-white transition hover:border-sky-300/40 hover:bg-sky-300/15"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell flex flex-col gap-2 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, TypeScript, Tailwind, and GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;
