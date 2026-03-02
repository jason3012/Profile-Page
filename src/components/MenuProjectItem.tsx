"use client";

import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/content/projects";

interface MenuProjectItemProps {
  project: Project;
  index: number;
}

export function MenuProjectItem({ project, index }: MenuProjectItemProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const firstMetric = project.metrics
    ? Object.entries(project.metrics)[0]
    : null;

  function handleClick() {
    if (reduceMotion) {
      router.push(`/projects/${project.slug}`);
      return;
    }
    router.push(`/projects/${project.slug}`);
  }

  return (
    <motion.button
      layoutId={reduceMotion ? undefined : project.slug}
      onClick={handleClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
      whileHover={reduceMotion ? {} : { y: -3 }}
      whileTap={reduceMotion ? {} : { scale: 0.99 }}
      className="group w-full text-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-7
        hover:border-[var(--sand)]/40 hover:shadow-[0_0_24px_rgba(240,218,174,0.08)]
        focus-visible:outline-[var(--ring)] transition-shadow cursor-pointer"
      aria-label={`View ${project.name} project`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left */}
        <div className="flex-1 min-w-0">
          {/* Number + Name */}
          <div className="flex items-baseline gap-3 mb-1.5">
            <span className="text-[var(--sand)]/40 text-sm font-medium tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight truncate">
              {project.name}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-white/60 text-sm md:text-base leading-snug mb-4 line-clamp-1">
            {project.tagline}
          </p>

          {/* Badges row */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {project.tech.slice(0, 6).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
            {firstMetric && (
              <span className="ml-2 text-xs text-[var(--leafy)] font-medium">
                {firstMetric[1]} {firstMetric[0].toLowerCase()}
              </span>
            )}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 mt-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-white/40
            group-hover:border-[var(--sand)]/40 group-hover:text-[var(--sand)] transition-all">
            <motion.span
              animate={reduceMotion ? {} : undefined}
              className="flex"
              style={{ display: "flex" }}
            >
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
