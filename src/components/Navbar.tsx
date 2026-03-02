import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { Github, Linkedin, FileText } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--espresso)]/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Site navigation">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white hover:text-[var(--sand)] transition-colors"
          >
            {profile.name}
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-white/70 hover:border-[var(--sand)]/40 hover:text-white transition-colors"
            >
              <FileText size={13} />
              Resume
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
