export interface Experience {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Outamation",
    title: "Externship — AI-Powered Document Insights & Data Extraction",
    location: "Remote",
    start: "May 2025",
    end: "Aug 2025",
    highlights: [
      "Built a RAG pipeline for mortgage docs, ingesting 20–60 page files and unifying text, tables, and scans via OCR and hybrid retrieval",
      "Implemented FAISS & keyword reranking, reducing query latency to <700ms and improving top-hit recall by 2.5×",
      "Integrated Hugging Face & OpenAI for reranking and QA, cutting lookup times by 70%",
      "Added chunking, metadata, and trace logs, improving debuggability 3× and reducing failed extractions 50% in testing",
    ],
    tech: ["Python", "FAISS", "OpenAI", "Hugging Face", "OCR", "RAG"],
  },
  {
    company: "Boston College",
    title: "Teaching Assistant — Computer Organization and Lab",
    location: "Chestnut Hill, MA",
    start: "Jan 2025",
    end: "Aug 2025",
    highlights: [
      "Graded 150+ assignments and exams with rubric-based feedback, improving resubmission quality by 30%",
      "Led weekly labs and office hours answering 20–30 questions per session, improving work efficiency by 40%",
      "Coordinated grading with staff, returning work in <36 hours on average and preventing regrade requests",
      "Built quick-reference checklists for common mistakes, reducing repeat logic and Verilog errors by 25%",
    ],
    tech: ["Verilog", "C", "Assembly", "Digital Logic"],
  },
];
