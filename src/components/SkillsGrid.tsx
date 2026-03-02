import { skills } from "@/content/skills";
import { Badge } from "@/components/ui/Badge";

export function SkillsGrid() {
  return (
    <div className="space-y-5">
      {skills.map((category) => (
        <div key={category.name}>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--sand)]/60">
            {category.name}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
