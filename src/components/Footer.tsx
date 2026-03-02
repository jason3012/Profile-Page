import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white/70 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
