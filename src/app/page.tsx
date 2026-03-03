import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsStrip } from "@/components/StatsStrip";
import { MenuProjectItem } from "@/components/MenuProjectItem";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero Header ── */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-[var(--sand)] mb-3 font-medium">
                {profile.headline}
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-8 max-w-xl">
                {profile.bioShort}
              </p>

              {/* Quick links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-[var(--border)] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--sand)]/30 transition-colors"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-[var(--border)] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--sand)]/30 transition-colors"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href={profile.socials.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-[var(--border)] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--sand)]/30 transition-colors"
                >
                  <FileText size={15} />
                  Resume
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Stats Strip ──
        <section className="pb-16" aria-label="Quick stats">
          <Container>
            <StatsStrip />
          </Container>
        </section> */}

        {/* ── Project Menu ── */}
        <section className="pb-20" aria-labelledby="projects-heading">
          <Container>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <h2
                id="projects-heading"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]/50"
              >
                Projects
              </h2>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="space-y-4">
              {projects.map((project, i) => (
                <MenuProjectItem key={project.slug} project={project} index={i} />
              ))}
            </div>
          </Container>
        </section>

        {/* ── Experience + Skills ── */}
        <section className="pb-24" aria-label="Experience and skills">
          <Container>
            <div className="grid gap-16 md:grid-cols-[1fr_340px]">
              {/* Experience */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]/50 mb-8">
                  Experience
                </h2>
                <ExperienceTimeline />
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]/50 mb-8">
                  Skills
                </h2>
                <SkillsGrid />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
