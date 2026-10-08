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
  imageWidth?: number;
  imageHeight?: number;
};

export type ThinkingEntry = {
  title: string;
  kind: string;
  excerpt: string;
};

export type BuildEntry = {
  title: string;
  event: string;
  window: string;
  angle: string;
  evidence: string[];
};

export const chapterLinks: ChapterLink[] = [
  { id: 'who-i-am', number: '01', title: 'Who I Am' },
  { id: 'experience', number: '02', title: 'Experience' },
  { id: 'selected-projects', number: '03', title: 'Projects' },
  { id: 'building', number: '04', title: 'Hackathons & Building' },
  { id: 'thinking', number: '05', title: 'Thinking' },
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
  'Harry Sandhu builds backend systems, full-stack products, and developer tooling.',
  'Most of the work lives where reliability and speed collide: services that stay calm under load, stay legible to whoever reads them next, and hold up once they hit production.',
  'The common thread across startups, enterprise work, and personal projects isn’t a tech stack. It’s that the architecture is explainable, and the docs don’t pretend something works when it doesn’t.',
];

export const aboutPillars: AboutPillar[] = [
  {
    title: 'Backend Systems',
    body: 'Service boundaries, typed APIs, queues, storage. The unglamorous stuff that has to be correct.',
  },
  {
    title: 'Full-Stack Delivery',
    body: 'Comfortable on both sides of the wire: React/Next.js frontends, backends that survive contact with real users.',
  },
  {
    title: 'Developer Tooling',
    body: 'Internal tools and CLIs built to cut friction for whoever uses them next, usually that’s future me.',
  },
  {
    title: 'Systems Thinking',
    body: 'A size budget, a permission model, a compatibility rule: treating the constraint itself as the design problem.',
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
    description: 'Projects where the constraint (size, performance, correctness) is the actual design problem.',
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
      'A browser-first runtime that turns tagged UI into something a voice or text command can act on. It builds a graph of the app, resolves intent locally against that graph, and only reaches for an AI fallback when it has to.',
    problem:
      'Commands like “open reports” or “filter by district” usually mean stitching together speech recognition, intent parsing, context handling, dispatch, and an AI fallback as separate systems. Cinder folds all of that into one local-first runtime instead.',
    architecture: [
      'A semantic scanner reads tagged UI elements and builds a route/context-aware application graph of actions, fields, filters, and data nodes.',
      'A graph query and intent layer normalizes text or speech input and prefers deterministic local resolution over cloud inference.',
      'A DOM-native dispatcher executes the resolved command against the real interface, with an optional fallback service used only when local confidence is weak.',
    ],
    diagram: ['Tagged UI', 'Semantic Scanner', 'Application Graph', 'Intent Engine', 'DOM Dispatch'],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Fastify', 'npm workspaces', 'Web Speech API'],
    challenges: [
      'Getting local resolution deterministic enough that common commands never need to touch the network.',
      'Modeling rendered DOM state and not-yet-rendered routes through the same graph without the two falling out of sync.',
      'Keeping the AI fallback on a short leash, so the system reads as a semantic runtime and not a chatbot with extra steps.',
    ],
    outcomes: [
      'A working monorepo: browser SDK, a shared contracts package, an inference fallback server, and a docs site that runs on its own runtime.',
      'An internal validation suite that actually exercises scanning, graph construction, dispatch, and the fallback paths.',
      'Still private startup work. This is the case-study version; source and internal architecture stay off the public record.',
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
      'A drone-building tool that won’t let you pick parts that don’t fit together. Motor, frame, ESC, and battery compatibility is encoded into a typed API instead of living in someone’s head.',
    problem:
      'Normally you figure out compatible drone parts by trial and error across forums and spec sheets. ROTOR puts that logic in the stack so a bad configuration can’t even reach the screen.',
    architecture: [
      'A Bun/TypeScript monorepo (Turborepo) across API, web, and a shared typed-contracts package.',
      'Fastify + Drizzle ORM + PostgreSQL + Zod for a type-safe compatibility API.',
      'A Next.js guided builder with seeded demo data and admin tooling for managing products and specs.',
    ],
    diagram: ['Component Catalog', 'Compatibility Engine', 'Typed Contracts', 'Guided Builder UI', 'Admin Spec Tools'],
    technologies: ['TypeScript', 'Bun', 'Turborepo', 'Fastify', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'Next.js', 'Vitest'],
    challenges: [
      'Modeling compatibility as data instead of a pile of conditionals, so a new component type doesn’t mean touching five files.',
      'Sharing validation logic end-to-end between the API and web client through one typed contracts package, instead of duplicating it on both sides.',
      'Writing the architecture down well enough that picking the project back up later doesn’t mean re-deriving it from scratch.',
    ],
    outcomes: [
      'A compatibility engine that actually runs, with seed data and demo accounts documented for anyone trying it.',
      'A docs/ folder that holds up (principles, stack, an index) instead of knowledge that only lives in my head.',
      'One typed contracts package that the backend and frontend both build against.',
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
      'An internal, Jira-shaped ticketing system (groups, tickets, subtasks, boards, an audit log) built around permissions that are actually granular instead of a single admin/user switch.',
    problem:
      'Most internal tools skip access control or bolt on exactly one permission level. Campfire needed per-group, per-role rules that could be reasoned about, and tested, not just trusted.',
    architecture: [
      'An Express + MongoDB backend with refresh-token auth and a documented access-control model.',
      'A Next.js frontend for boards, tickets, and reporting.',
      'An OpenAPI reference endpoint documenting the API surface, plus webhook support for external integrations.',
    ],
    diagram: ['Groups & Roles', 'Tickets & Subtasks', 'Boards', 'Audit Log', 'Webhooks'],
    technologies: ['TypeScript', 'Express', 'MongoDB', 'Next.js', 'Playwright', 'OpenAPI'],
    challenges: [
      'Making the permission model granular enough to mean something, without making it impossible to document.',
      'Covering the access-control rules with real integration tests and Playwright end-to-end runs, not just manual poking.',
      'Writing down what’s deliberately not built yet instead of letting the scope quietly blur.',
    ],
    outcomes: [
      'A working ticket system backed by both integration and end-to-end test coverage.',
      'A documented “not yet” list (email, attachments, 2FA) instead of a README that implies it’s all done.',
      'A permission model that’s actually testable, not just an admin flag.',
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
      'A 2D roguelite built for 2P Game Arcade’s 1.44MB Game Development Contest. The whole game, engine included, has to fit in 1,474,560 bytes, the size of an actual floppy disk. Submitted September 2026.',
    problem:
      'Game dev today assumes a budget of megabytes you don’t have to think about. This project removes that assumption entirely: no engine, no external libraries, a software-rendered framebuffer, content generated procedurally instead of shipped as assets.',
    architecture: [
      'Raw Win32 API, with no game engine or external libraries.',
      'A software-rendered framebuffer and sprite-sheet renderer written directly against it.',
      'Procedurally generated terrain, dungeons, and enemy encounters, plus a synthesized audio engine (waveOut-based SFX, MCI-based looping music).',
    ],
    diagram: ['Win32 Window', 'Software Framebuffer', 'Procedural Content', 'Audio Synthesis', 'Build Size Budget'],
    technologies: ['C++20', 'Win32 API', 'CMake', 'Ninja / MinGW'],
    challenges: [
      'Fitting an entire game in a hard 1.44MB cap with nothing off-the-shelf to lean on.',
      'Generating audio and content in code instead of paying for it in bytes as binary assets.',
      'Still shipping real features (audio, a renderer, a pause screen) while the build sits at a fraction of the budget.',
    ],
    outcomes: [
      'A playable, still-growing roguelite using a small slice of the available 1.44MB.',
      'A procedural audio engine and sprite renderer, written directly on top of the raw framebuffer.',
      'A README that states the constraint and the reasoning plainly, instead of hiding the trade-offs made to hit it.',
    ],
    tags: ['featured', 'systems'],
  },
  {
    name: 'website-auditor',
    label: 'Website security & quality auditor',
    year: '2026',
    visibility: 'private',
    visibilityLabel: 'Private',
    summary:
      'A CLI that opens a real browser on a site and runs SEO, accessibility, performance, and security checks together (CORS, header hardening, and exposure testing included), and writes it all up as a structured report.',
    problem:
      '“Check my site” tools usually either read static HTML and miss anything client-rendered, or only check one category at a time. This one drives an actual browser and checks several categories from a single crawl.',
    architecture: [
      'A Playwright-driven crawler that captures real rendered pages, not just raw HTML.',
      'A modular audit engine: SEO, accessibility, and performance checks alongside dedicated security modules for CORS, HTTP methods, SRI, email security, and exposure/hardening.',
      'An optional visual/layout audit with an AI-assisted design review, plus JSON/HTML/PDF report output.',
    ],
    diagram: ['Browser Crawl', 'Audit Modules', 'Visual / AI Review (optional)', 'Report Generation'],
    technologies: ['Python', 'Playwright', 'BeautifulSoup', 'Pillow', 'dnspython', 'pytest'],
    challenges: [
      'Keeping security checks read-only by default, with anything more active gated behind an explicit flag.',
      'Splitting audit categories into independent modules so adding a check doesn’t risk breaking an unrelated one.',
      'Actually testing the newly added hardening and exposure modules instead of shipping them on faith.',
    ],
    outcomes: [
      'A CLI with a growing set of audit modules that can each be tested on their own.',
      'A new security-hardening and exposure layer, backed by a full passing test suite.',
      'JSON/HTML/PDF output: something you can hand to someone, not just terminal scrollback.',
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
      'A small, self-hosted email-open tracker. It shows opens on a dashboard and, unlike most tools in this category, says plainly what the data can and can’t prove.',
    problem:
      'Open-tracking tools are usually a black-box SaaS with vague privacy practices, or a bare pixel with no rate limiting, no origin checks, and raw IPs sitting in a database. This is the version that doesn’t skip those details.',
    architecture: [
      'A Next.js (App Router) application backed by MongoDB Atlas.',
      'HMAC-hashed IPs instead of raw IP storage, with origin checks on mutating requests.',
      'Rate limiting designed for a serverless deployment, plus Resend integration for first-open notifications.',
    ],
    diagram: ['Tracking Pixel', 'Open Event', 'Rate Limit + Origin Check', 'Dashboard', 'Notification'],
    technologies: ['TypeScript', 'Next.js', 'MongoDB', 'Resend', 'Vitest'],
    challenges: [
      'Rate limiting properly in a serverless environment with no persistent process to hold state in memory.',
      'Hashing IPs by default instead of treating it as a nice-to-have, fixed later.',
      'Saying out loud, in the product itself, that an “open” is a signal and not proof.',
    ],
    outcomes: [
      'A small tool that’s actually finished and tested, instead of a bigger one that isn’t.',
      'A “Limitations” section that tells you exactly how far to trust the numbers.',
      'Hashed IPs, origin checks, and rate limiting as defaults, not afterthoughts.',
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
      'A strategy-game prototype about hidden networks and ideological manipulation, carried by an AI engine that was actually iterated, not a single scripted opponent dressed up as “AI.”',
    problem:
      'Game AI tends to be either scripted or dressed-up randomness. This one got a real scoring and lookahead system, developed across more than twenty documented phases, with AI-vs-AI runs used to tune balance.',
    architecture: [
      'A React + Vite client with an Express + TypeScript server.',
      'A scoring engine evaluating actions across competing signals (trust, aggression, virality, ideology) instead of one win condition.',
      'A lookahead simulator used both for AI decision-making and for AI-vs-AI balance testing, developed across a long, phase-tracked commit history.',
    ],
    diagram: ['Game State', 'Action Scorer', 'Lookahead Simulator', 'AI-vs-AI Simulation', 'Balance Tuning'],
    technologies: ['TypeScript', 'React', 'Vite', 'Express'],
    challenges: [
      'Scoring actions across several competing signals instead of one win condition.',
      'Using AI-vs-AI simulation as an actual balance-testing tool instead of just playtesting by hand.',
      'Keeping 20+ phases of iteration systematic and documented instead of tuning numbers at random.',
    ],
    outcomes: [
      'A simulation engine with 100+ commits of genuinely systematic, phase-tracked work behind it.',
      'AI-vs-AI simulation reports used as a real tool, not a demo gimmick.',
      'A game-AI system with real depth to it, not a surface-level pass.',
    ],
    tags: ['featured', 'ai', 'systems'],
  },
];

export const buildingEntries: BuildEntry[] = [
  {
    title: 'Haithe',
    event: 'Metis HyperHack 2024',
    window: 'Team project',
    angle: 'Backend and wallet-identity work: Sign-In with Ethereum, JWT auth, and EVM tooling built with Bun, Hono, and Drizzle ORM.',
    evidence: ['Tier 3 winner ($500).', 'Still a real, active project: github.com/hetairoi-labs/haithe'],
  },
  {
    title: 'Nest',
    event: 'Avalanche Frontier Hackathon 2024',
    window: 'Team project, two developers',
    angle: 'Backend and Solidity development.',
    evidence: ['Won, among 150+ projects.'],
  },
  {
    title: 'JustInsure',
    event: 'HackaTRON Season 7, 2024',
    window: 'Team project (“The Aresians”)',
    angle: 'Backend API tooling and smart-contract development.',
    evidence: ['3rd place, DeFi Track, among 1,300+ participants.'],
  },
  {
    title: 'AgroSurance',
    event: 'Chainlink Spring Hackathon 2023',
    window: 'Team project',
    angle: 'Debugging support and tooling assistance.',
    evidence: ['2nd place, Tech for Good category, $5,000.'],
  },
  {
    title: 'Echo',
    event: 'Open Campus EduChain Hackathon 2024',
    window: 'Team project',
    angle: 'Infrastructure design and backend development.',
    evidence: ['Built during a hackathon series that drew 4,500+ participants.'],
  },
  {
    title: 'PumpFaxt',
    event: 'Fraxtal Hackathon',
    window: 'Team project',
    angle: 'Smart contracts and testing.',
    evidence: ['Built as part of a team hackathon submission.'],
  },
];

export const thinkingEntries: ThinkingEntry[] = [
  {
    title: 'Interfaces should reveal system intent',
    kind: 'Principle',
    excerpt:
      'A good interface makes the hidden complexity legible. An API, a dashboard, an internal tool should show you where control actually lives and where it can break.',
  },
  {
    title: 'Reliability is a product feature',
    kind: 'Architecture note',
    excerpt:
      'Retries, idempotency, observability: none of that is infrastructure theater. It’s the difference between a user trusting the product and not.',
  },
  {
    title: 'Documentation should admit what isn’t finished',
    kind: 'Practice',
    excerpt:
      'A README with a real “known gaps” section is more useful, and more believable, than one that quietly implies everything works.',
  },
  {
    title: 'Developer tooling changes team speed structurally',
    kind: 'Tooling',
    excerpt:
      'Tooling is the quiet multiplier. Make debugging and releases less painful, and everything downstream gets faster too.',
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
