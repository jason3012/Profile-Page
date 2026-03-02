export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  highlights: string[];
  tech: string[];
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
  featured: boolean;
  images: string[];
  metrics?: Record<string, string>;
}

export const projects: Project[] = [
  {
    slug: "greenprint",
    name: "GreenPrint",
    tagline: "Eco-fintech that turns your spending into a carbon footprint.",
    summary:
      "An eco-fintech app built at Columbia DivHacks 2025 that processes bank transactions and maps each purchase to a CO₂e footprint — giving users carbon budgets, category breakdowns, and actionable reduction tips.",
    description: [
      "GreenPrint integrates with the Capital One Nessie API to pull real transaction data and pipes each entry through a spend-to-CO₂e model powered by Merit Echo AI. MCC (Merchant Category Code) normalization ensures consistent classification across merchants.",
      "The backend proxies all Nessie calls to eliminate CORS and sandbox issues, and includes a 7-entity PostgreSQL/Prisma schema tracking users, transactions, carbon entries, and budgets. A CI pipeline keeps the system reliable across deploys.",
    ],
    highlights: [
      "Processed 1,000+ transactions with a 7-entity Postgres/Prisma schema",
      "Built a spend-to-CO₂e pipeline with Echo AI, MCC normalization, and transaction lineage",
      "Delivered category breakdowns and carbon budgets projecting 65% monthly CO₂e reductions",
      "Hardened ingestion by proxying Nessie calls through the backend, fixing CORS/sandbox issues by 80%",
      "Added CI pipeline for reliable deployments",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Merit Echo AI", "Capital One Nessie API"],
    links: {
      github: "https://github.com/jason3012",
    },
    featured: true,
    images: [],
    metrics: {
      "Transactions Processed": "1,000+",
      "CO₂e Reduction Projected": "65% monthly",
      "CORS Issues Fixed": "80%",
      "Schema Entities": "7",
    },
  },
  {
    slug: "tableenable",
    name: "TableEnable",
    tagline: "Real-time study space occupancy via computer vision.",
    summary:
      "A real-time occupancy system built at BC Hack the Heights 2025 that uses YOLOv8 and polygon zone detection to show live seat availability across campus study spaces — serving 50–200+ students per day.",
    description: [
      "TableEnable uses a YOLOv8 object detection model to count occupants within configurable polygon zones in camera frames. Debounced state changes prevent jitter from brief detection gaps, giving students a reliable availability signal.",
      "A lightweight JSON endpoint powers the React dashboard with sub-2 second refresh cycles. The config-driven rollout system lets new rooms be added in minutes — no core-code changes required.",
    ],
    highlights: [
      "Live availability for 50–200+ students/day across 1–4 camera-equipped study spaces",
      "Polygon zone detection + debounced state changes improving accuracy by 90%",
      "Sub-2s UI refreshes via lightweight JSON endpoint",
      "Config-driven rollout to 25+ rooms, cutting setup time from hours to minutes",
    ],
    tech: ["Python", "YOLOv8", "React", "Vite"],
    links: {
      github: "https://github.com/jason3012",
    },
    featured: true,
    images: [],
    metrics: {
      "Daily Active Students": "50–200+",
      "Availability Accuracy Improvement": "90%",
      "UI Refresh Time": "<2s",
      "Rooms Supported": "25+",
    },
  },
  {
    slug: "degreeplanner",
    name: "DegreePlanner",
    tagline: "Automated degree audit and graduation tracker for BC students.",
    summary:
      "A full-stack degree planner with a graduation audit dashboard built with Django and Google OAuth — parsing uploaded transcripts and tracking core/major requirements through a YAML-driven rules engine.",
    description: [
      "DegreePlanner lets Boston College students upload their unofficial transcript PDF, which is parsed to auto-populate requirement statuses. A Gemini AI assistant answers audit questions and generates detailed reports.",
      "The YAML-driven rules engine evaluates 50+ degree requirements declaratively, making rule updates a config change rather than a code change. CSV import/export enables batch operations and reporting.",
    ],
    highlights: [
      "Graduation audit dashboard with Google OAuth, tracking core and major progress in one place",
      "PDF audit parser to extract courses and credits, auto-populating requirement status",
      "YAML-driven rules engine evaluating 50+ degree requirements, cutting rule updates by 80%",
      "CSV import/export and Gemini assistant generating 1,000+ row reports",
      "Reduced audit questions by 62% with automated status tracking",
    ],
    tech: ["Python", "Django", "SQLite", "Google OAuth", "Gemini API"],
    links: {
      github: "https://github.com/jason3012",
    },
    featured: true,
    images: [],
    metrics: {
      "Degree Requirements Evaluated": "50+",
      "Rule Update Reduction": "80%",
      "Audit Questions Reduced": "62%",
      "Report Rows Generated": "1,000+",
    },
  },
];
