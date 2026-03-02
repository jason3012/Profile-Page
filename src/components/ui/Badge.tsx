import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "sand" | "leafy";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
        variant === "default" && "border-[var(--border)] text-[var(--sand)] bg-white/5",
        variant === "sand" && "border-[var(--sand)]/30 text-[var(--espresso)] bg-[var(--sand)]",
        variant === "leafy" && "border-[var(--leafy)]/30 text-white bg-[var(--leafy)]/20",
        className
      )}
    >
      {children}
    </span>
  );
}
