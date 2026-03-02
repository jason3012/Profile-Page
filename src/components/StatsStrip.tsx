import { profile } from "@/content/profile";

export function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {profile.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-4 text-center"
        >
          <div className="text-2xl font-bold text-[var(--sand)] leading-none mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-white/50 leading-tight">{stat.label}</div>
          {stat.subtext && (
            <div className="text-[10px] text-white/30 mt-0.5 leading-tight">{stat.subtext}</div>
          )}
        </div>
      ))}
    </div>
  );
}
