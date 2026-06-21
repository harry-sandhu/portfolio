export type ProjectCategory = 'ai' | 'platform' | 'product';

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectItem = {
  name: string;
  kind: string;
  stack: string;
  description: string;
  badges: string[];
  categories: ProjectCategory[];
};

export const profile = {
  name: 'Harcharan Singh',
  location: 'Mumbai, India',
  email: 'singh.harcharan2003@gmail.com',
  phone: '+91 844-505-0264',
  linkedin: 'https://www.linkedin.com/in/harcharan-singh-5789b625a',
  github: 'https://github.com/harry-sandhu',
  oneLiner:
    'Backend, systems, full-stack, and applied AI engineer building production software across APIs, infrastructure, orchestration systems, realtime collaboration, admin platforms, wallet-connected products, media pipelines, multimodal ML, and AI-native workflows.',
};

export const stats = [
  { value: '30k+', label: 'users supported in production' },
  { value: '98%', label: 'disease detection accuracy on Hectare' },
  { value: '30%', label: 'manual effort reduced at Forsys' },
  { value: 'AI + Systems', label: 'strongest fit across backend, platform, and applied AI' },
];

export const strengths = [
  'Designing practical backend systems end to end',
  'Owning implementation through deployment and production support',
  'Building APIs, auth, RBAC, workflows, and internal tools',
  'Handling distributed workers, queues, retries, and operational resilience',
  'Shipping AI-native products with retrieval, agents, evaluation, and observability',
  'Operating across backend, infrastructure, dashboards, and real product needs',
];

export const roleFit = [
  'Backend Engineer',
  'Software Engineer',
  'Platform Engineer',
  'Backend Systems Engineer',
  'AI Backend Engineer',
  'Applied AI Engineer',
];

export const experience: ExperienceItem[] = [
  {
    company: 'Trinitum Software Labs',
    role: 'Software Engineer · Backend / Systems',
    period: 'Jan 2026 — Present',
    location: 'Mumbai, India',
    points: [
      'Architecting distributed microservices for secure storage, file lifecycle management, and service orchestration.',
      'Implemented client-side encryption, S3-compatible integrations, and security-first access workflows.',
      'Designed authentication and authorization services with resilience-focused backend boundaries.',
    ],
  },
  {
    company: 'Forsys Inc.',
    role: 'Software Engineer · Backend / CRM Systems',
    period: 'Jun 2025 — Jan 2026',
    location: 'Hyderabad, India',
    points: [
      'Built enterprise workflow automation systems, backend services, validation tooling, and operational dashboards.',
      'Implemented CI/CD and release workflows that reduced manual effort by 30%.',
      'Improved deployment reliability, production debugging, and monitoring across enterprise delivery workflows.',
    ],
  },
  {
    company: 'WetAcre (Krishiyan)',
    role: 'Founding Developer',
    period: 'Jul 2023 — May 2025',
    location: 'Remote',
    points: [
      'Led full-stack ownership of an agritech platform serving 30,000+ users across product and operational workflows.',
      'Built backend APIs, admin dashboards, notifications, OTP flows, data ingestion, and async processing.',
      'Worked across AWS, Azure, deployment, production monitoring, and day-to-day debugging for live systems.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'Atlas',
    kind: 'AI platform',
    stack: 'FastAPI · PostgreSQL · Redis · pgvector · React',
    description:
      'Production-grade knowledge intelligence platform with document ingestion, hybrid retrieval, reranking, citation-aware answers, tool-calling agents, evaluation pipelines, and realtime dashboards.',
    badges: ['RAG', 'Semantic search', 'AI agents', 'Observability'],
    categories: ['ai', 'platform', 'product'],
  },
  {
    name: 'Beacon',
    kind: 'Realtime collaboration',
    stack: 'React · FastAPI · Node.js · GraphQL · Redis',
    description:
      'AI-native collaborative DAW with WebSocket sync, presence, activity streams, RAG-backed workflows, event-driven workers, and full observability.',
    badges: ['WebSockets', 'Distributed systems', 'RAG', 'Full-stack'],
    categories: ['ai', 'platform', 'product'],
  },
  {
    name: 'CraftMy.World',
    kind: 'Worker orchestration',
    stack: 'Queues · Event-driven systems · Realtime dashboards',
    description:
      'Distributed worker orchestration platform with heartbeat monitoring, stale-worker recovery, fault tolerance, execution tracking, and live operational dashboards.',
    badges: ['Queues', 'Fault tolerance', 'Realtime ops'],
    categories: ['platform', 'product'],
  },
  {
    name: 'Noble by Nyria Lab',
    kind: 'Fintech / gaming ops',
    stack: 'Next.js · FastAPI · Redis · SQLite · Solana',
    description:
      'Wallet-connected gaming and financial operations platform with live state sync, ledgers, audit trails, treasury workflows, withdrawal queues, and admin backoffice tooling.',
    badges: ['Ledgers', 'Payments', 'WebSockets', 'Admin ops'],
    categories: ['platform', 'product'],
  },
  {
    name: 'Hectare',
    kind: 'Multimodal AI',
    stack: 'Computer vision · Predictive modeling · Dashboards',
    description:
      'Agriculture intelligence platform combining drone imagery, LiDAR, weather, soil, and sensor data into disease detection, recommendations, and farmer-facing analytics.',
    badges: ['Multimodal ML', 'Computer vision', '98% accuracy'],
    categories: ['ai', 'product'],
  },
  {
    name: 'Pantha',
    kind: 'AI learning systems',
    stack: 'Embeddings · Vector retrieval · Redis · SSE',
    description:
      'RAG-based learning platform with embedding pipelines, semantic retrieval, recommendation systems, AI agents, evaluation, and low-latency content delivery.',
    badges: ['RAG', 'Recommendations', 'Adaptive learning'],
    categories: ['ai', 'product'],
  },
];

export const archiveProjects = [
  'CreditKuber — AI-assisted lending, RBAC, audit trails, reporting',
  'Haithedtoi — JWT auth, SIWE, sessions, protected APIs',
  'Filosign — decentralized signatures, auditability, trust systems',
  'The Dilemma Protocol — Socket.IO multiplayer backend and reconnect logic',
  'ASMorphia Studio — interactive frontend, rendering, export pipelines',
  '20sBrainTest — automation, FFmpeg workflows, browser-driven exports',
  'Migrate2West — bookings, payments, PDFs, dashboards, deployment',
  'Kairos — C/C++ runtime architecture and plugin systems',
  'Lung Malignancy Research — healthcare AI evaluation, multimodal analysis, AUC-ROC 0.92',
];

export const skillGroups = [
  {
    title: 'Backend & APIs',
    body: 'Node.js, FastAPI, Express, Fastify, Hono, REST, GraphQL, WebSockets, Socket.IO, SSE, JWT auth, RBAC, background jobs.',
  },
  {
    title: 'AI & Retrieval',
    body: 'Azure OpenAI, RAG, embeddings, vector databases, pgvector, reranking, tool calling, AI agents, evaluation pipelines, multimodal ML.',
  },
  {
    title: 'Data & Storage',
    body: 'PostgreSQL, Redis, MongoDB, SQLite, Prisma, Drizzle, Mongoose, semantic retrieval, caching, indexing, ingestion pipelines.',
  },
  {
    title: 'Frontend & Product',
    body: 'React, Next.js, TypeScript, Vite, Tailwind CSS, Zustand, React Query, dashboards, admin tooling, collaborative interfaces.',
  },
  {
    title: 'Cloud & Ops',
    body: 'AWS, Azure, Docker, Nginx, PM2, CI/CD, Vercel, object storage, Prometheus, Grafana, OpenTelemetry, production debugging.',
  },
  {
    title: 'Systems & Security',
    body: 'Linux, Bash, Arch Linux, distributed workers, queues, event-driven systems, SIWE, EIP-712, wallet integrations, storage workflows.',
  },
];

export const hackathons = [
  {
    title: 'Metis HyperHack 2024',
    body: 'Winner — built Haithe, a decentralized marketplace architecture with AI workflow integration.',
  },
  {
    title: 'EthOxford 2024',
    body: 'Main Track Winner — built Loxel, a blockchain infrastructure system; also won Solana and Bitso sponsor prizes.',
  },
  {
    title: 'Avalanche Frontier Hackathon 2024',
    body: 'Winner — built Nest, a platform-architecture project focused on coordination systems and workflow automation.',
  },
  {
    title: 'More notable results',
    body: 'HackaTRON, Chainlink Spring Hackathon, Open Campus EduChain, and Fraxtal — strong proof of speed, adaptability, and systems thinking.',
  },
];

export const education = 'B.Tech in Computer Science — ABV IIITM Gwalior (May 2025)';
