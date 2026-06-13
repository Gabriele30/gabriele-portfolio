"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectedProjectIndex = selectedProject
    ? projects.findIndex((project) => project.title === selectedProject.title)
    : -1;

  return (
    <section id="progetti" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(57,167,255,0.13),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(53,242,154,0.10),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-electric/35 to-transparent" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold text-terminal"
          >
            Portfolio tecnico
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Progetti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 text-base leading-7 text-white/68 sm:text-lg"
          >
            Una selezione di progetti software, web app e soluzioni tecniche sviluppate in ambito
            personale, universitario e professionale.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.52, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard
                project={project}
                isFeatured={index < 3}
                onDetails={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </Container>

      <ProjectModal
        project={selectedProject}
        isFeatured={selectedProjectIndex >= 0 && selectedProjectIndex < 3}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
