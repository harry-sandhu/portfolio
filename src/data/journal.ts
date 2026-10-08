export type ChapterLink = {
  id: string;
  number: string;
  title: string;
};

export type JournalProfile = {
  name: string;
  role: string;
  supportLine: string;
  preface: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
};

export type AboutPillar = {
  title: string;
  body: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  focus: string[];
  systems: string[];
};

export type ProjectTagId = 'featured' | 'ai' | 'platform' | 'systems';

export type ProjectTag = {
  id: ProjectTagId;
  label: string;
  description: string;
};

export type ProjectVisibility = 'private-startup' | 'private';

export type ProjectCaseStudy = {
  name: string;
  label: string;
  year: string;
  summary: string;
  problem: string;
  architecture: string[];
  diagram: string[];
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  tags: ProjectTagId[];
  visibility: ProjectVisibility;
  visibilityLabel: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type ThinkingEntry = {
  title: string;
  kind: string;
  excerpt: string;
};

export const chapterLinks: ChapterLink[] = [
  { id: 'who-i-am', number: '01', title: 'Who I Am' },
  { id: 'experience', number: '02', title: 'Experience' },
  { id: 'selected-projects', number: '03', title: 'Projects' },
  { id: 'thinking', number: '04', title: 'Thinking' },
];

export const journalProfile: JournalProfile = {
  name: 'Harry Sandhu',
  role: 'Software Engineer',
  supportLine: 'Backend Systems, Full-Stack Delivery, Developer Tooling',
  preface: 'A technical journal of systems, products, and engineering decisions.',
  location: 'Mumbai, India',
  email: 'singh.harcharan2003@gmail.com',
  phone: '+91 844-505-0264',
  github: 'https://github.com/harry-sandhu',
  linkedin: 'https://www.linkedin.com/in/harcharan-singh-5789b625a',
};

export const aboutNarrative = [
  'Harry Sandhu is an engineer focused on backend systems, full-stack delivery, and developer tooling.',
  'His work sits at the intersection of reliability and velocity: building services that are operationally calm, technically legible, and ready for production constraints.',
  'Across startups, enterprise systems, and self-directed projects, the through-line is the same: clear architecture, strong ownership, and documentation that tells the truth about what is and isn’t finished.',
];

export const aboutPillars: AboutPillar[] = [
  {
    title: 'Backend Systems',
    body: 'Service boundaries, typed APIs, queues, storage workflows, and operational correctness.',
  },
  {
    title: 'Full-Stack Delivery',
    body: 'Shipping both sides of a product — React/Next.js frontends paired with backends that hold up under real use.',
  },
  {
    title: 'Developer Tooling',
    body: 'Internal tools, CLIs, and runtimes that reduce friction for whoever uses them next, including future me.',
  },
  {
    title: 'Systems Thinking',
    body: 'Treating constraints — a size budget, a permission model, a compatibility rule — as the design problem itself.',
  },
];

export const chapterMetrics = [
  { label: 'Primary focus', value: 'Backend & Systems' },
  { label: 'Also ships', value: 'Full-stack products' },
  { label: 'Currently exploring', value: 'Developer tooling + AI' },
];

export const experienceJourney: ExperienceEntry[] = [
  {
    company: 'WetAcre',
    role: 'Founding Developer',
    period: 'Jul 2023 - May 2025',
    location: 'Remote',
    summary:
      'Owned product and engineering foundations for an agritech platform serving farmers, operators, and internal teams across live production workflows.',
    focus: [
      'Built backend APIs, admin interfaces, OTP flows, notifications, and asynchronous operational pipelines.',
      'Worked across AWS, Azure, deployment setup, monitoring, debugging, and day-to-day production reliability.',
      'Shipped features under real user pressure while balancing product iteration with backend maintainability.',
    ],
    systems: ['APIs', 'Admin tooling', 'Notifications', 'Async jobs', 'Cloud deployment'],
  },
  {
    company: 'Forsys',
    role: 'Software Engineer · Backend / CRM Systems',
    period: 'Jun 2025 - Jan 2026',
    location: 'Hyderabad, India',
    summary:
      'Worked inside enterprise delivery environments, improving workflow automation, deployment quality, and backend reliability for CRM-adjacent systems.',
    focus: [
      'Built validation tooling, backend services, dashboards, and operational workflows for enterprise teams.',
      'Worked on CI/CD and release-process improvements for enterprise delivery pipelines.',
      'Improved production debugging, visibility, and repeatability across system changes and deployments.',
    ],
    systems: ['Automation', 'CI/CD', 'Validation tooling', 'Operational dashboards', 'Enterprise workflows'],
  },
  {
    company: 'Trinitum',
    role: 'Software Engineer · Backend / Systems',
    period: 'Jan 2026 - Present',
    location: 'Mumbai, India',
    summary:
      'Building security-conscious distributed systems focused on storage orchestration, encryption, service boundaries, and resilient backend design.',
    focus: [
      'Architecting microservices for secure storage, lifecycle management, and service orchestration.',
      'Implemented client-side encryption, S3-compatible integrations, and access control workflows.',
      'Designed authentication and authorization services with clear boundaries and resilience in mind.',
    ],
    systems: ['Distributed services', 'Storage workflows', 'Encryption', 'AuthN/AuthZ', 'Resilience'],
  },
];

export const projectTags: ProjectTag[] = [
  {
    id: 'featured',
    label: 'Featured',
    description: 'A deliberately small set of case studies, chosen for the engineering story rather than the tech-stack size.',
  },
  {
    id: 'ai',
    label: 'AI / Simulation',
    description: 'Runtimes, scoring engines, and decision systems built as real systems rather than prompt wrappers.',
  },
  {
    id: 'platform',
    label: 'Platform',
    description: 'Backend platforms and internal tools with typed APIs, access control, and operational thinking.',
  },
  {
    id: 'systems',
    label: 'Systems',
    description: 'Projects where the constraint — size, performance, correctness — is the actual design problem.',
  },
];

export const selectedProjects: ProjectCaseStudy[] = [
  {
    name: 'Cinder',
    label: 'Semantic runtime / browser SDK',
    year: '2026',
    visibility: 'private-startup',
    visibilityLabel: 'Private Startup Project',
    summary:
      'A browser-first semantic runtime that turns tagged web application UI into a graph-aware command layer, resolving voice and text commands locally against the DOM before using optional fallback inference.',
    problem:
      'Supporting commands like “open reports”, “save changes”, or “filter by district” usually forces teams to stitch together speech recognition, intent parsing, context handling, action dispatch, and AI fallback as separate systems. Cinder packages that into one local-first runtime.',
    architecture: [
      'A semantic scanner reads tagged UI elements and builds a route/context-aware application graph of actions, fields, filters, and data nodes.',
      'A graph query and intent layer normalizes text or speech input and prefers deterministic local resolution over cloud inference.',
      'A DOM-native dispatcher executes the resolved command against the real interface, with an optional fallback service used only when local confidence is weak.',
    ],
    diagram: ['Tagged UI', 'Semantic Scanner', 'Application Graph', 'Intent Engine', 'DOM Dispatch'],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Fastify', 'npm workspaces', 'Web Speech API'],
    challenges: [
      'Designing deterministic local resolution so common commands do not depend on cloud-first inference.',
      'Modeling both rendered DOM state and not-yet-rendered routes through a hybrid graph without losing execution clarity.',
      'Keeping the AI fallback bounded and normalized so the system behaves like a semantic runtime instead of a thin chatbot wrapper.',
    ],
    outcomes: [
      'A working monorepo — browser SDK, shared contracts package, inference fallback server, and a docs site that exercises the runtime.',
      'An internal validation suite covering semantic scanning, graph construction, dispatch behavior, and fallback paths.',
      'Private startup work — presented here as a case study, not as open-source; source and internal architecture are not public.',
    ],
    tags: ['featured', 'ai', 'platform', 'systems'],
    demoUrl: 'https://www.usecinder.dev/',
  },
  {
    name: 'ROTOR',
    label: 'Compatibility-first drone platform',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A guided drone-building platform that encodes real component-compatibility rules — motors, frames, ESCs, batteries — into a typed API, so invalid configurations can’t reach the user in the first place.',
    problem:
      'Picking compatible drone components is normally trial-and-error across forums and spec sheets. ROTOR moves that logic into the stack itself instead of leaving it to the buyer.',
    architecture: [
      'A Bun/TypeScript monorepo (Turborepo) across API, web, and a shared typed-contracts package.',
      'Fastify + Drizzle ORM + PostgreSQL + Zod for a type-safe compatibility API.',
      'A Next.js guided builder with seeded demo data and admin tooling for managing products and specs.',
    ],
    diagram: ['Component Catalog', 'Compatibility Engine', 'Typed Contracts', 'Guided Builder UI', 'Admin Spec Tools'],
    technologies: ['TypeScript', 'Bun', 'Turborepo', 'Fastify', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'Next.js', 'Vitest'],
    challenges: [
      'Modeling compatibility as data rather than scattered conditionals, so new component types stay addable.',
      'Keeping validation logic shared and typed end-to-end between the API and the web client instead of duplicating it.',
      'Documenting the architecture and open next steps clearly enough that the project is pick-up-able later.',
    ],
    outcomes: [
      'A working compatibility engine with seed data and documented demo accounts.',
      'A documented architecture — principles, stack, and a maintained docs index — rather than tribal knowledge.',
      'A typed contracts package shared end-to-end between the backend and web client.',
    ],
    tags: ['featured', 'platform', 'systems'],
  },
  {
    name: 'Campfire',
    label: 'Internal ticketing system',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A Jira-style internal ticket-management system — groups, tickets, subtasks, milestones, boards, and an audit log — built around a deliberately granular, testable permission model.',
    problem:
      'Small internal tools usually either skip access control or bolt on a single admin/user split. Campfire needed per-group, per-role permissions that could be reasoned about and verified, not just assumed.',
    architecture: [
      'An Express + MongoDB backend with refresh-token auth and a documented access-control model.',
      'A Next.js frontend for boards, tickets, and reporting.',
      'An OpenAPI reference endpoint documenting the API surface, plus webhook support for external integrations.',
    ],
    diagram: ['Groups & Roles', 'Tickets & Subtasks', 'Boards', 'Audit Log', 'Webhooks'],
    technologies: ['TypeScript', 'Express', 'MongoDB', 'Next.js', 'Playwright', 'OpenAPI'],
    challenges: [
      'Designing a permission model granular enough to be real, but simple enough to document and test.',
      'Covering the access-control rules with both integration tests and Playwright end-to-end tests.',
      'Being explicit about what is deliberately out of scope rather than letting scope creep in silently.',
    ],
    outcomes: [
      'A working ticket system with integration and end-to-end test coverage.',
      'An explicit, documented “not included yet” list (email, attachments, 2FA) instead of implied completeness.',
      'A granular, testable permission model instead of a single admin/user split.',
    ],
    tags: ['featured', 'platform'],
  },
  {
    name: 'FloppyRogue',
    label: '1.44MB game engine from scratch',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A 2D roguelite built for 2P Game Arcade’s 1.44MB Game Development Contest — the entire game, engine, and assets must fit inside 1,474,560 bytes, the capacity of a 1.44MB floppy disk. Submitted September 2026.',
    problem:
      'Modern game development assumes megabytes of runtime and asset budget are free. This project inverts that: no engine, no external libraries, software-rendered graphics, and procedurally generated content instead of shipped assets.',
    architecture: [
      'Raw Win32 API, with no game engine or external libraries.',
      'A software-rendered framebuffer and sprite-sheet renderer written directly against it.',
      'Procedurally generated terrain, dungeons, and enemy encounters, plus a synthesized audio engine (waveOut-based SFX, MCI-based looping music).',
    ],
    diagram: ['Win32 Window', 'Software Framebuffer', 'Procedural Content', 'Audio Synthesis', 'Build Size Budget'],
    technologies: ['C++20', 'Win32 API', 'CMake', 'Ninja / MinGW'],
    challenges: [
      'Fitting an entire game inside a hard 1.44MB byte budget with no engine to lean on.',
      'Generating content and audio procedurally in code instead of shipping binary assets.',
      'Keeping the current build around a small fraction of the size budget while still adding real features.',
    ],
    outcomes: [
      'A playable, actively developed roguelite currently using only a small fraction of the available size budget.',
      'A working procedural audio engine and sprite renderer, built directly on top of the raw framebuffer.',
      'A README that documents the exact constraint and the reasoning behind it, rather than hiding the trade-offs.',
    ],
    tags: ['featured', 'systems'],
    imageUrl: `${import.meta.env.BASE_URL}floppyrogue-title.png`,
    imageAlt: 'FloppyRogue title card',
  },
  {
    name: 'website-auditor',
    label: 'Website security & quality auditor',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A CLI that crawls a site with a real browser and runs SEO, accessibility, performance, and security checks — including CORS, header hardening, and exposure testing — producing structured reports.',
    problem:
      'Most site-checking tools either only look at static markup, missing anything rendered client-side, or only check one category at a time. This drives an actual browser and checks multiple categories from a single crawl.',
    architecture: [
      'A Playwright-driven crawler that captures real rendered pages, not just raw HTML.',
      'A modular audit engine: SEO, accessibility, and performance checks alongside dedicated security modules for CORS, HTTP methods, SRI, email security, and exposure/hardening.',
      'An optional visual/layout audit with an AI-assisted design review, plus JSON/HTML/PDF report output.',
    ],
    diagram: ['Browser Crawl', 'Audit Modules', 'Visual / AI Review (optional)', 'Report Generation'],
    technologies: ['Python', 'Playwright', 'BeautifulSoup', 'Pillow', 'dnspython', 'pytest'],
    challenges: [
      'Keeping security checks read-only by default, with active/aggressive testing as an explicit opt-in.',
      'Structuring audit categories as independent modules so new checks can be added without touching unrelated ones.',
      'Covering newly added hardening and exposure-testing modules with a real, passing test suite rather than shipping them unverified.',
    ],
    outcomes: [
      'A working CLI with an independently testable, growing set of audit modules.',
      'A security-hardening and exposure-testing layer added and verified against a full passing test suite.',
      'Structured JSON/HTML/PDF output suitable for sharing a report, not just console text.',
    ],
    tags: ['featured', 'systems'],
  },
  {
    name: 'EmailTracker',
    label: 'Privacy-conscious email open tracker',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A small, self-hosted email-open tracker — issues tracking pixels, shows opens on a dashboard, and is explicit about what the data can and can’t actually prove.',
    problem:
      'Open-tracking is usually either a black-box SaaS with vague privacy practices, or a naive pixel with no rate limiting, no origin checks, and raw IP logging. This is a minimal version built around the details that are usually skipped.',
    architecture: [
      'A Next.js (App Router) application backed by MongoDB Atlas.',
      'HMAC-hashed IPs instead of raw IP storage, with origin checks on mutating requests.',
      'Rate limiting designed for a serverless deployment, plus Resend integration for first-open notifications.',
    ],
    diagram: ['Tracking Pixel', 'Open Event', 'Rate Limit + Origin Check', 'Dashboard', 'Notification'],
    technologies: ['TypeScript', 'Next.js', 'MongoDB', 'Resend', 'Vitest'],
    challenges: [
      'Rate limiting correctly in a serverless environment without a persistent in-memory store.',
      'Choosing to hash IPs instead of storing them raw, as a default rather than an afterthought.',
      'Being explicit in the product itself that open-tracking data is a signal, not proof.',
    ],
    outcomes: [
      'A small, fully tested, deployed tool rather than a larger, unfinished one.',
      'A documented “Limitations” section that tells users exactly how much to trust the data.',
      'Security-conscious defaults — hashed IPs, origin checks, rate limiting — instead of the common naive implementation.',
    ],
    tags: ['featured', 'systems'],
  },
  {
    name: 'The Last Incentive',
    label: 'AI strategy simulation',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A strategy-game prototype about hidden networks and ideological manipulation, built around a genuinely iterated AI decision-making engine rather than a single scripted opponent.',
    problem:
      'Game AI is often either scripted or a thin wrapper around randomness. This project iterated an actual scoring and lookahead system through more than twenty documented phases, including AI-vs-AI simulation runs used to tune balance.',
    architecture: [
      'A React + Vite client with an Express + TypeScript server.',
      'A scoring engine evaluating actions across competing signals — trust, aggression, virality, ideology — instead of one win condition.',
      'A lookahead simulator used both for AI decision-making and for AI-vs-AI balance testing, developed across a long, phase-tracked commit history.',
    ],
    diagram: ['Game State', 'Action Scorer', 'Lookahead Simulator', 'AI-vs-AI Simulation', 'Balance Tuning'],
    technologies: ['TypeScript', 'React', 'Vite', 'Express'],
    challenges: [
      'Scoring actions along multiple competing axes instead of a single win condition.',
      'Using AI-vs-AI simulation runs as an actual balance-testing tool rather than relying only on manual playtesting.',
      'Keeping the engine’s iteration systematic and documented across 20+ phases instead of ad hoc tuning.',
    ],
    outcomes: [
      'A working simulation engine with over 100 commits of systematic, phase-tracked iteration.',
      'AI-vs-AI simulation reporting used as a real balance-testing tool.',
      'A genuinely deep, well-iterated game-AI system rather than a surface-level demo.',
    ],
    tags: ['featured', 'ai', 'systems'],
  },
];

export const thinkingEntries: ThinkingEntry[] = [
  {
    title: 'Interfaces should reveal system intent',
    kind: 'Principle',
    excerpt:
      'The best engineering interfaces make hidden complexity legible. APIs, dashboards, and internal tools should expose where control lives and where failure can happen.',
  },
  {
    title: 'Reliability is a product feature',
    kind: 'Architecture note',
    excerpt:
      'Resilience work matters most when it improves operator calm and user trust. Retries, idempotency, and observability are not infrastructure theater; they shape the product experience.',
  },
  {
    title: 'Documentation should admit what isn’t finished',
    kind: 'Practice',
    excerpt:
      'A README that lists known gaps alongside what works is more useful — and more credible — than one that implies everything is done.',
  },
  {
    title: 'Developer tooling changes team speed structurally',
    kind: 'Tooling',
    excerpt:
      'Internal tooling is often the quiet multiplier. When debugging, release handling, and inspection become easier, product delivery improves everywhere else.',
  },
];

export const stackFootprint = [
  'Node.js / TypeScript / Bun',
  'PostgreSQL / MongoDB / Redis',
  'Fastify / Express / Next.js',
  'React / Vite / Tailwind CSS',
  'C / C++ (systems-level work)',
  'Docker / CI deployment workflows',
];

export const devModeSamples = ['help', 'projects', 'project cinder', 'project rotor', 'experience', 'stack', 'thinking', 'contact'];
