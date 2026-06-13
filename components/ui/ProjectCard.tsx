"use client";

import { CalendarDays, Github, Layers3, Sparkles } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  isFeatured?: boolean;
  onDetails: () => void;
};

export function ProjectCard({ project, isFeatured = false, onDetails }: ProjectCardProps) {
  return (
    <GlassCard
      as="article"
      className={cn(
        "group relative flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/45 hover:bg-white/[0.07] hover:shadow-glow sm:p-6",
        isFeatured && "border-electric/25 bg-electric/[0.055]"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent transition group-hover:via-terminal/70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(57,167,255,0.08),transparent_38%,rgba(53,242,154,0.06))] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {isFeatured ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-terminal/30 bg-terminal/10 px-2.5 py-1 text-xs font-semibold text-terminal">
              <Sparkles size={13} aria-hidden />
              Featured
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5 rounded-md border border-electric/25 bg-electric/10 px-2.5 py-1 text-xs font-semibold text-electric">
            <CalendarDays size={13} aria-hidden />
            {project.year}
          </span>
        </div>

        <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-terminal/90">
          <Layers3 size={13} aria-hidden />
          {project.category}
        </p>
        <h3 className="text-xl font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/64">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs font-semibold text-white/62 transition group-hover:border-white/15 group-hover:text-white/78"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Button type="button" onClick={onDetails} className="w-full sm:w-auto">
            Dettagli
          </Button>
          {project.repoUrl ? (
            <ButtonLink
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Github size={18} aria-hidden />
              GitHub
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
