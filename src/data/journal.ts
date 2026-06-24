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

export type ProjectTagId =
  | 'featured'
  | 'ai'
  | 'realtime'
  | 'platform'
  | 'systems'
  | 'fintech'
  | 'web3'
  | 'education'
  | 'agritech';

export type ProjectTag = {
  id: ProjectTagId;
  label: string;
  description: string;
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
  tags: ProjectTagId[];
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
  { id: 'selected-projects', number: '03', title: 'Projects' },
  { id: 'building', number: '04', title: 'Hackathons & Building' },
  { id: 'thinking', number: '05', title: 'Thinking' },
];

export const journalProfile: JournalProfile = {
  name: 'Harry Sandhu',
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
  'Harry Sandhu is an engineer focused on backend systems, distributed architectures, AI infrastructure, developer tooling, realtime systems, and product engineering.',
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

export const projectTags: ProjectTag[] = [
  {
    id: 'featured',
    label: 'Featured',
    description: 'The clearest signal projects: flagship work across architecture, AI, product systems, and operational depth.',
  },
  {
    id: 'ai',
    label: 'AI Systems',
    description: 'Retrieval, recommendations, agents, evaluation loops, and AI infrastructure built as real product systems.',
  },
  {
    id: 'realtime',
    label: 'Realtime',
    description: 'Presence, multiplayer state, collaboration, and low-latency delivery where ordering and trust matter.',
  },
  {
    id: 'platform',
    label: 'Platform Ops',
    description: 'Backoffice tooling, workflow orchestration, operator visibility, and backend systems that support live operations.',
  },
  {
    id: 'systems',
    label: 'Systems Design',
    description: 'Runtime boundaries, distributed workers, orchestration layers, and architecture decisions under real constraints.',
  },
  {
    id: 'fintech',
    label: 'Fintech',
    description: 'Ledgers, money movement, lending workflows, audit trails, and operational trust in financial systems.',
  },
  {
    id: 'web3',
    label: 'Web3',
    description: 'Wallet-connected flows, blockchain integrations, treasury operations, and decentralized product surfaces.',
  },
  {
    id: 'education',
    label: 'Education',
    description: 'Learning systems, recommendations, retrieval-backed knowledge delivery, and adaptive user flows.',
  },
  {
    id: 'agritech',
    label: 'Agritech',
    description: 'Farm operations, agricultural intelligence, field data processing, and product workflows for real users.',
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
    tags: ['featured', 'ai', 'realtime', 'systems'],
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
    tags: ['featured', 'ai', 'platform'],
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
    tags: ['featured', 'realtime', 'platform', 'fintech', 'web3'],
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
    tags: ['featured', 'systems'],
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
    tags: ['featured', 'ai', 'education'],
  },
  {
    name: 'Hectare',
    label: 'Agritech intelligence',
    year: '2024',
    summary:
      'A multimodal agricultural intelligence system combining farm signals, model outputs, and operator workflows into one usable product surface.',
    problem:
      'Agricultural recommendations are only useful when imagery, weather, field data, and agronomy signals can be turned into practical decisions for both farmers and internal teams.',
    architecture: [
      'Data pipelines normalized imagery, telemetry, weather inputs, and field reports into a common feature layer.',
      'Inference services translated multimodal signals into disease, nutrient, and intervention recommendations.',
      'Dashboards and advisory interfaces surfaced results in forms operators could inspect and act on quickly.',
    ],
    diagram: ['Field Signals', 'Feature Pipeline', 'Inference Layer', 'Ops Dashboard', 'Advisory Engine'],
    technologies: ['Python', 'FastAPI', 'React', 'Computer Vision', 'Azure', 'AWS'],
    challenges: [
      'Combining heterogeneous data sources without losing traceability.',
      'Turning model output into workflows real operators could trust.',
      'Balancing experimentation with production delivery constraints.',
    ],
    outcomes: [
      'Established a stronger base for AI-assisted agricultural decisions and field-level monitoring.',
      'Reported disease-detection performance reaching up to 98% in multimodal evaluation workflows.',
    ],
    tags: ['ai', 'platform', 'agritech'],
  },
  {
    name: 'CreditKuber',
    label: 'Lending operations platform',
    year: '2024',
    summary:
      'An AI-assisted lending and workflow platform built around onboarding, risk support, repayment operations, and audit-ready internal tooling.',
    problem:
      'Lending teams need far more than application forms. They need backend control over underwriting, collections, reporting, access control, and operator visibility.',
    architecture: [
      'Workflow services handled onboarding, underwriting support, repayment stages, and collection operations.',
      'Background jobs processed notifications, risk signals, and reporting workflows without blocking operator activity.',
      'RBAC-aware admin tooling exposed audit trails, exceptions, and operational state across the lending lifecycle.',
    ],
    diagram: ['Applicant Flow', 'Risk Engine', 'Ops Console', 'Background Jobs', 'Reporting'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RBAC', 'Background Jobs'],
    challenges: [
      'Keeping workflow state and operator visibility aligned across long-running financial flows.',
      'Designing internal tooling that supported exceptions instead of only ideal happy paths.',
      'Maintaining product speed while preserving compliance-oriented auditability.',
    ],
    outcomes: [
      'Created a more inspectable operational platform for lending workflows and internal teams.',
      'Strengthened judgment around workflow automation, financial state handling, and admin tooling.',
    ],
    tags: ['ai', 'platform', 'fintech'],
  },
  {
    name: 'CraftMy.World',
    label: 'Distributed worker orchestration',
    year: '2025',
    summary:
      'A distributed execution platform for planning, coordinating, and monitoring many workers across long-running automation workflows.',
    problem:
      'Once many agents or workers must coordinate over long tasks, simple queue processing stops being enough. The system needs ownership, heartbeats, recovery, and progress visibility.',
    architecture: [
      'Planning services broke requested work into executable tasks with dependency-aware scheduling.',
      'Worker coordinators handled assignment, heartbeats, stale-worker detection, and recovery flows.',
      'Operational dashboards surfaced execution state, throughput, and failure context for live control.',
    ],
    diagram: ['Planner', 'Task Queue', 'Worker Mesh', 'State Store', 'Ops Dashboard'],
    technologies: ['Node.js', 'Redis', 'WebSockets', 'Worker Orchestration', 'Telemetry'],
    challenges: [
      'Recovering cleanly from stale workers and partially completed work.',
      'Making long-running distributed execution observable to operators.',
      'Keeping orchestration logic flexible as task complexity grew.',
    ],
    outcomes: [
      'Produced a clearer model for ownership, recovery, and large-scale worker coordination.',
      'Strengthened distributed-systems thinking around orchestration and live operational control.',
    ],
    tags: ['realtime', 'platform', 'systems'],
  },
  {
    name: 'The Dilemma Protocol',
    label: 'Realtime multiplayer systems',
    year: '2024',
    summary:
      'A multiplayer architecture study focused on synchronized sessions, authoritative validation, reconnect handling, and fair realtime state transitions.',
    problem:
      'Realtime multiplayer products become fragile when timing, reconnects, and state validation are treated as afterthoughts. This project focused on trust and fairness under gameplay pressure.',
    architecture: [
      'An authoritative game server owned timing, validation, and synchronized state transitions.',
      'Session-recovery flows handled reconnects, replay generation, and user continuity during interruptions.',
      'Automated tests verified gameplay rules, edge cases, timing logic, and state integrity.',
    ],
    diagram: ['Clients', 'Authoritative Server', 'Session Recovery', 'Replay Pipeline', 'Leaderboard'],
    technologies: ['Node.js', 'Socket.IO', 'Redis', 'Testing', 'Realtime State'],
    challenges: [
      'Keeping multiplayer state fair and deterministic under reconnects and timing pressure.',
      'Building enough test coverage for user-visible synchronization rules.',
      'Balancing responsiveness with authoritative backend control.',
    ],
    outcomes: [
      'Improved judgment around realtime authority models, recovery flows, and fairness-oriented systems.',
      'Created a stronger architecture pattern for multiplayer reliability and session continuity.',
    ],
    tags: ['realtime', 'systems'],
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
