export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    name: "Web & Frameworks",
    items: ["Next.js", "React", "Django", "FastAPI", "Flask", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    name: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "OpenAI API", "RAG", "YOLOv8", "pandas", "NumPy"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Oracle", "Prisma"],
  },
  {
    name: "DevOps & Tools",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "REST APIs", "Jupyter"],
  },
];
