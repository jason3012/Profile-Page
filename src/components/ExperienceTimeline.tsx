import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/Badge";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
      {experience.map((role, i) => (
        <li key={i} className="relative">
          {/* Dot */}
          <span
            className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--caramel)] bg-[var(--espresso)]"
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-base font-semibold text-white leading-snug">
                {role.title}
              </h3>
              <p className="text-sm text-[var(--sand)]/70">{role.company}</p>
            </div>
            <span className="text-xs text-white/40 shrink-0 sm:text-right">
              {role.start} – {role.end}
              {role.location && (
                <>
                  <br />
                  <span className="text-white/30">{role.location}</span>
                </>
              )}
            </span>
          </div>

          <ul className="space-y-1 mb-3">
            {role.highlights.map((h, j) => (
              <li key={j} className="flex gap-2 text-sm text-white/60 leading-snug">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--caramel)]" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {role.tech.map((t) => (
              <Badge key={t} variant="leafy">{t}</Badge>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
