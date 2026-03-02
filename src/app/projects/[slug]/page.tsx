import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />

      <main className="pb-24">
        {/* ── Back link ── */}
        <div className="border-b border-[var(--border)]">
          <Container>
            <div className="py-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Menu
              </Link>
            </div>
          </Container>
        </div>

        {/* ── Hero ── */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-12">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                {project.name}
              </h1>
              <p className="text-lg text-[var(--sand)] mb-4 font-medium">
                {project.tagline}
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-8">
                {project.summary}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-[var(--border)] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--sand)]/30 transition-colors"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[var(--caramel)] border border-[var(--caramel)] px-4 py-2 text-sm text-white hover:bg-[var(--caramel)]/80 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
                {project.links.writeup && (
                  <a
                    href={project.links.writeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-[var(--border)] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--sand)]/30 transition-colors"
                  >
                    <FileText size={15} />
                    Write-up
                  </a>
                )}
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <div className="max-w-3xl space-y-12">
            {/* Divider */}
            <hr className="border-[var(--border)]" />

            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold text-white mb-4">
                Overview
              </h2>
              <div className="space-y-4">
                {project.description.map((para, i) => (
                  <p key={i} className="text-white/65 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-xl font-semibold text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-white/65 leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--caramel)]" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Metrics */}
            {project.metrics && Object.keys(project.metrics).length > 0 && (
              <section aria-labelledby="metrics-heading">
                <h2 id="metrics-heading" className="text-xl font-semibold text-white mb-4">
                  Results & Metrics
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Object.entries(project.metrics).map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-bold text-[var(--sand)] leading-none mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-white/45 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            {(project.links.github || project.links.demo || project.links.writeup) && (
              <section aria-labelledby="links-heading">
                <h2 id="links-heading" className="text-xl font-semibold text-white mb-4">
                  Links
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--sand)] hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      GitHub Repository
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--sand)] hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.links.writeup && (
                    <a
                      href={project.links.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--sand)] hover:text-white transition-colors"
                    >
                      <FileText size={14} />
                      Write-up / Devpost
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
