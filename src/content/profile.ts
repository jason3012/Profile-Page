export const profile = {
  name: "Jason Jung",
  headline: "Software Engineer · CS @ Boston College '27",
  location: "New York, NY",
  email: "jasonjung9711@gmail.com",
  bioShort:
    "Computer Science student at Boston College building full-stack apps, ML pipelines, and developer tools. I love turning ideas into working products — especially at hackathons.",
  socials: {
    github: "https://github.com/jason3012",
    linkedin: "https://www.linkedin.com/in/jason-jung-bb0a62256/",
    email: "jasonjung9711@gmail.com",
    resumeUrl: "/resume.pdf",
  },
  stats: [
    { label: "Graduating", value: "BC '27", subtext: "Computer Science" },
    { label: "Projects Shipped", value: "3+", subtext: "including 2 hackathons" },
    { label: "Transactions Processed", value: "1,000+", subtext: "GreenPrint eco-fintech" },
    { label: "Students Supported", value: "150+", subtext: "as TA @ Boston College" },
    { label: "Query Latency", value: "<700ms", subtext: "RAG pipeline @ Outamation" },
  ],
} as const;
