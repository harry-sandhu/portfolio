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
};

export type BuildEntry = {
  title: string;
  event: string;
  window: string;
  angle: string;
  evidence: string[];
};

export type ThinkingEntry = {
  title: string;
  kind: string;
  excerpt: string;
};

export const chapterLinks: ChapterLink[] = [
  { id: 'who-i-am', number: '01', title: 'Who I Am' },
  { id: 'experience', number: '02', title: 'Experience' },
  { id: 'selected-projects', number: '03', title: 'Selected Projects' },
  { id: 'building', number: '04', title: 'Hackathons & Building' },
  { id: 'thinking', number: '05', title: 'Thinking' },
];

export const journalProfile: JournalProfile = {
  name: 'Harcharan Singh',
  role: 'Software Engineer',
  supportLine: 'Backend Systems, Applied AI, Realtime Platforms, Developer Tooling',
  preface: 'A technical journal of systems, products, and engineering decisions.',
  location: 'Mumbai, India',
  email: 'singh.harcharan2003@gmail.com',
  phone: '+91 844-505-0264',
  github: 'https://github.com/harry-sandhu',
  linkedin: 'https://www.linkedin.com/in/harcharan-singh-5789b625a',
};

export const aboutNarrative = [
  'Harcharan Singh is an engineer focused on backend systems, distributed architectures, AI infrastructure, developer tooling, realtime systems, and product engineering.',
  'His work sits at the intersection of reliability and velocity: building services that are operationally calm, technically legible, and ready for production constraints.',
  'Across startups, enterprise systems, and fast-moving prototypes, the through-line is the same: clear architecture, strong ownership, and software that continues to hold together after launch.',
];

export const aboutPillars: AboutPillar[] = [
  {
    title: 'Backend Systems',
    body: 'Service boundaries, APIs, queues, storage workflows, resilience, and operational correctness.',
  },
  {
    title: 'Applied AI',
    body: 'Retrieval pipelines, agents, evaluation loops, observability, and product-aware AI infrastructure.',
  },
  {
    title: 'Realtime Platforms',
    body: 'Presence, event streams, synchronization, and systems that must remain responsive under change.',
  },
  {
    title: 'Developer Tooling',
    body: 'Interfaces and internal systems that reduce friction for teams shipping quickly and repeatedly.',
  },
];

export const chapterMetrics = [
  { label: 'Production users', value: '30k+' },
  { label: 'Enterprise workflow effort reduced', value: '30%' },
  { label: 'Primary focus', value: 'Systems + AI' },
];

export const experienceJourney: ExperienceEntry[] = [
  {
    company: 'WetAcre',
    role: 'Founding Developer',
    period: 'Jul 2023 — May 2025',
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
    period: 'Jun 2025 — Jan 2026',
    location: 'Hyderabad, India',
    summary:
      'Worked inside enterprise delivery environments, improving workflow automation, deployment quality, and backend reliability for CRM-adjacent systems.',
    focus: [
      'Built validation tooling, backend services, dashboards, and operational workflows for enterprise teams.',
      'Implemented CI/CD and release improvements that reduced manual effort by 30%.',
      'Improved production debugging, visibility, and repeatability across system changes and deployments.',
    ],
    systems: ['Automation', 'CI/CD', 'Validation tooling', 'Operational dashboards', 'Enterprise workflows'],
  },
  {
    company: 'Trinitum',
    role: 'Software Engineer · Backend / Systems',
    period: 'Jan 2026 — Present',
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

export const selectedProjects: ProjectCaseStudy[] = [
  {
    name: 'Beacon',
    label: 'Realtime collaboration',
    year: '2025',
    summary:
      'A collaborative, AI-assisted workspace designed around low-latency presence, session state synchronization, and event-driven orchestration.',
    problem:
      'Collaboration products often feel fast in demos but collapse under concurrent editing, background processing, and long-lived sessions. Beacon was designed to make collaboration operationally trustworthy.',
    architecture: [
      'Session clients streamed intent and presence updates into a sync gateway responsible for ordering and fan-out.',
      'Background workers handled AI enrichments, transcript processing, and deferred tasks without blocking active sessions.',
      'Operational traces and activity streams made it possible to debug user-visible sync issues from event history.',
    ],
    diagram: ['Client Sessions', 'Sync Gateway', 'Presence Store', 'Worker Mesh', 'AI Tools'],
    technologies: ['React', 'FastAPI', 'Node.js', 'GraphQL', 'Redis', 'WebSockets'],
    challenges: [
      'Maintaining coherent state across concurrent participants.',
      'Separating user-facing latency from asynchronous AI work.',
      'Making realtime failures debuggable without guesswork.',
    ],
    outcomes: [
      'Created a stable foundation for presence, activity streams, and collaborative workflows.',
      'Improved confidence in session recovery and observability during active usage.',
    ],
  },
  {
    name: 'Atlas',
    label: 'Knowledge infrastructure',
    year: '2025',
    summary:
      'A retrieval and reasoning platform for document-heavy workflows, designed as infrastructure rather than a thin LLM wrapper.',
    problem:
      'Teams needed more than chat over documents; they needed ingestion, retrieval, grounding, evaluation, and system visibility that could hold up in production.',
    architecture: [
      'Document pipelines handled ingestion, chunking, metadata normalization, and retrieval indexing.',
      'Hybrid search combined structured retrieval, semantic ranking, and citation-aware answer assembly.',
      'Evaluation loops and instrumentation closed the gap between prototype behavior and production reliability.',
    ],
    diagram: ['Ingestion', 'Indexing', 'Retrieval', 'Reranking', 'Answer Layer'],
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'pgvector', 'React'],
    challenges: [
      'Balancing retrieval quality, latency, and explainability.',
      'Creating an architecture that could evolve as prompts, models, and ranking strategies changed.',
      'Surfacing failures early through evaluation and traceability.',
    ],
    outcomes: [
      'Turned AI functionality into an inspectable product system rather than a black box.',
      'Established reusable infrastructure for search, answer generation, and evaluation.',
    ],
  },
  {
    name: 'Noble',
    label: 'Wallet and operations platform',
    year: '2024',
    summary:
      'A financial operations and gaming backend where realtime state, ledgers, and operator trust all mattered at once.',
    problem:
      'Wallet-connected experiences require more than front-end interaction. They need backend guarantees, operator tooling, ledger visibility, and state transitions that users can trust.',
    architecture: [
      'Backend services managed wallets, treasury actions, ledgers, and synchronized user-facing state.',
      'Admin tooling exposed withdrawals, queue states, and audit trails for operational review.',
      'Realtime channels kept participants aligned while preserving backend control over critical flows.',
    ],
    diagram: ['Wallet Layer', 'Ledger Core', 'Ops Console', 'State Sync', 'Treasury Queue'],
    technologies: ['Next.js', 'FastAPI', 'Redis', 'SQLite', 'Solana'],
    challenges: [
      'Maintaining consistency between ledger actions and live user state.',
      'Building operator visibility into asynchronous financial flows.',
      'Reducing ambiguity around audits and irreversible actions.',
    ],
    outcomes: [
      'Produced a backend architecture that supported both product speed and operational trust.',
      'Made financial flows inspectable for both users and internal operators.',
    ],
  },
  {
    name: 'Kairos',
    label: 'Runtime architecture study',
    year: '2024',
    summary:
      'A systems-oriented exploration into modular runtime behavior, deterministic execution, and plugin-friendly architecture.',
    problem:
      'Many extensible systems become difficult to reason about once plugins, configuration, and runtime scheduling begin to interact. Kairos focused on making those boundaries clearer.',
    architecture: [
      'Runtime modules were separated around lifecycle hooks, execution ownership, and extension loading.',
      'Configuration and plugin boundaries were treated as explicit contracts rather than implicit conventions.',
      'Native performance concerns were balanced with developer ergonomics and debuggability.',
    ],
    diagram: ['Core Runtime', 'Plugin API', 'Scheduler', 'Config Layer', 'Diagnostics'],
    technologies: ['C', 'C++', 'Build Tooling', 'Plugin Systems', 'Runtime Diagnostics'],
    challenges: [
      'Avoiding fragile coupling between plugin behavior and core execution.',
      'Keeping low-level control without making iteration painful.',
      'Preserving determinism while adding extensibility.',
    ],
    outcomes: [
      'Clarified how systems-level interfaces can remain extensible without becoming opaque.',
      'Strengthened judgment around runtime boundaries and developer-facing architecture.',
    ],
  },
  {
    name: 'Pantha',
    label: 'Adaptive learning system',
    year: '2025',
    summary:
      'A learning platform structured around retrieval, recommendations, and fast delivery of context-aware educational flows.',
    problem:
      'Learning products often store content well but fail to adapt retrieval, pacing, and recommendations to the actual user context. Pantha aimed to make the backend genuinely adaptive.',
    architecture: [
      'Content pipelines generated embeddings, semantic indexes, and recommendation primitives.',
      'Retrieval services handled relevance, fallback behavior, and response streaming for low-latency delivery.',
      'Recommendation and agent layers translated system knowledge into user-specific paths and interventions.',
    ],
    diagram: ['Content Base', 'Embedding Pipeline', 'Retrieval Service', 'Recommendation Engine', 'Learner Flow'],
    technologies: ['Embeddings', 'Vector Retrieval', 'Redis', 'SSE', 'Recommendation Systems'],
    challenges: [
      'Combining adaptive behavior with predictable delivery speed.',
      'Designing retrieval that remained useful across varied learner intent.',
      'Making AI assistance support pedagogy instead of distract from it.',
    ],
    outcomes: [
      'Created a stronger backend basis for adaptive learning experiences.',
      'Linked retrieval, recommendations, and low-latency delivery into one coherent system.',
    ],
  },
];

export const buildingEntries: BuildEntry[] = [
  {
    title: 'Loxel',
    event: 'EthOxford 2024',
    window: 'Hackathon delivery',
    angle: 'Built as infrastructure under time pressure, with clear ownership of backend architecture and system composition.',
    evidence: [
      'Main track winner plus sponsor prizes.',
      'Worked across coordination logic, architecture decisions, and a concise delivery window.',
      'Strong signal for shipping complex ideas quickly.',
    ],
  },
  {
    title: 'Haithe',
    event: 'Metis HyperHack 2024',
    window: 'Rapid MVP cycle',
    angle: 'Combined marketplace logic with AI-assisted workflows while still treating system behavior seriously.',
    evidence: [
      'Winner in a competitive environment.',
      'Balanced prototyping speed with architecture clarity.',
      'Demonstrated product judgment rather than feature accumulation.',
    ],
  },
  {
    title: 'Nest',
    event: 'Avalanche Frontier Hackathon 2024',
    window: 'Short-form build sprint',
    angle: 'Focused on coordination systems and workflow automation instead of shallow presentation polish.',
    evidence: [
      'Winner-level execution under tight constraints.',
      'Technical ownership across system definition and delivery.',
      'Strong example of building under ambiguity.',
    ],
  },
  {
    title: 'More build proof',
    event: 'HackaTRON · Chainlink · EduChain · Fraxtal',
    window: 'Repeated shipping cycles',
    angle: 'A pattern of entering complex technical environments, learning fast, and still shipping working systems.',
    evidence: [
      'Breadth across AI, coordination, fintech, and web3 environments.',
      'Repeated evidence of speed, adaptability, and follow-through.',
      'Shows execution stamina, not just isolated wins.',
    ],
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
    title: 'AI systems need operating models, not just prompts',
    kind: 'Applied AI',
    excerpt:
      'Useful AI products depend on ingestion, evaluation, traceability, and fallback behavior. Model output is only one small part of the system.',
  },
  {
    title: 'Developer tooling changes team speed structurally',
    kind: 'Tooling',
    excerpt:
      'Internal tooling is often the quiet multiplier. When debugging, release handling, and inspection become easier, product delivery improves everywhere else.',
  },
];

export const stackFootprint = [
  'Node.js / TypeScript',
  'FastAPI / Python',
  'PostgreSQL / Redis / SQLite',
  'WebSockets / SSE / GraphQL',
  'AWS / Azure / Docker / CI/CD',
  'RAG / Embeddings / Vector Retrieval / Agents',
];

export const devModeSamples = ['help', 'projects', 'project atlas', 'experience', 'stack', 'thinking', 'contact'];
