"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
  type LucideIcon
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  skillCategories,
  technicalApproach,
  type SkillCategoryIcon
} from "@/data/skills";

const iconMap: Record<SkillCategoryIcon, LucideIcon> = {
  software: GitBranch,
  backend: Server,
  database: Database,
  systems: Terminal,
  security: ShieldCheck,
  web: Globe2,
  lowLevel: Cpu,
  mobile: Smartphone
};

const approachIcons = [Code2, Wrench, Network];

export function Skills() {
  return (
    <section
      id="competenze"
      className="relative overflow-hidden border-y border-white/10 py-20 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(57,167,255,0.14),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(53,242,154,0.11),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(360px,0.54fr)] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.4 }}
              className="mb-3 inline-flex items-center gap-2 rounded-md border border-terminal/25 bg-terminal/10 px-3 py-2 text-sm font-semibold text-terminal"
            >
              <Network size={16} aria-hidden />
              Stack applicato
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: 0.04 }}
              className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Competenze tecniche & aree di specializzazione
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-base leading-7 text-white/68 sm:text-lg"
          >
            Non solo linguaggi e framework: competenze applicate in progettazione software,
            backend engineering, sistemi, database, sicurezza, Linux e troubleshooting
            hardware/software.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-soft backdrop-blur-md"
        >
          <div className="border-b border-white/10 px-5 py-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terminal/90">
              Approccio tecnico
            </p>
          </div>
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {technicalApproach.map((item, index) => {
              const Icon = approachIcons[index] ?? Code2;

              return (
                <div key={item.title} className="relative p-5 sm:p-6">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-md border border-electric/25 bg-electric/10 text-electric">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <GlassCard
                  as="article"
                  className="group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/45 hover:bg-white/[0.065] hover:shadow-[0_0_44px_rgba(57,167,255,0.16)] sm:p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent transition group-hover:via-terminal/70" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(57,167,255,0.08),transparent_38%,rgba(53,242,154,0.06))] opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric transition group-hover:border-terminal/45 group-hover:bg-terminal/10 group-hover:text-terminal">
                          <Icon size={22} aria-hidden />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
                            Area {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold leading-snug text-white">
                            {category.title}
                          </h3>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-md border border-terminal/25 bg-terminal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-terminal">
                        {category.label}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-white/64 sm:text-[15px]">
                      {category.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs font-semibold text-white/66 transition group-hover:border-white/15 group-hover:bg-white/[0.055] group-hover:text-white/84"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
