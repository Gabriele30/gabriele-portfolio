"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Github, Layers3, X } from "lucide-react";
import { useEffect } from "react";
import { ButtonLink, IconButton } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  isFeatured?: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, isFeatured = false, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/72 px-4 py-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/12 bg-[#070b10]/98 p-5 shadow-soft sm:p-6"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal/70 to-transparent" />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                {isFeatured ? (
                  <span className="inline-flex rounded-md border border-terminal/25 bg-terminal/10 px-2.5 py-1 text-xs font-semibold text-terminal">
                    Featured
                  </span>
                ) : null}
                <h3 id="project-modal-title" className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <IconButton label="Chiudi dettagli progetto" onClick={onClose} type="button">
                <X size={18} aria-hidden />
              </IconButton>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-electric/25 bg-electric/10 px-2.5 py-1 text-xs font-semibold text-electric">
                <CalendarDays size={13} aria-hidden />
                {project.year}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-terminal/25 bg-terminal/10 px-2.5 py-1 text-xs font-semibold text-terminal">
                <Layers3 size={13} aria-hidden />
                {project.category}
              </span>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-black/35 p-4">
              <p className="text-sm font-semibold text-white">Descrizione completa</p>
              <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base">
                {project.details ?? project.description}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Tecnologie</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs font-semibold text-white/68"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {project.repoUrl ? (
              <div className="mt-7">
                <ButtonLink href={project.repoUrl} target="_blank" rel="noreferrer" variant="secondary">
                  <Github size={18} aria-hidden />
                  Apri repository GitHub
                </ButtonLink>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
