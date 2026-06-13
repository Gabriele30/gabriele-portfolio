"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, GraduationCap, MapPin, Route, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { timelineItems, type TimelineType } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeIconMap: Record<TimelineType, LucideIcon> = {
  Formazione: GraduationCap,
  Esperienza: BriefcaseBusiness
};

const typeClassMap: Record<TimelineType, string> = {
  Formazione: "border-electric/25 bg-electric/10 text-electric",
  Esperienza: "border-terminal/25 bg-terminal/10 text-terminal"
};

export function Timeline() {
  return (
    <section id="percorso" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(57,167,255,0.12),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(53,242,154,0.10),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-terminal/30 to-transparent" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-terminal"
          >
            <Route size={16} aria-hidden />
            Formazione ed esperienza
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Percorso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 text-base leading-7 text-white/68 sm:text-lg"
          >
            Formazione universitaria, esperienza tecnica e progetti che hanno costruito il mio
            profilo da software developer.
          </motion.p>
        </div>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-electric/10 via-terminal/55 to-electric/10 shadow-[0_0_26px_rgba(53,242,154,0.22)] lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-6">
            {timelineItems.map((item, index) => {
              const Icon = typeIconMap[item.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, y: 24, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-4 pl-12 lg:grid-cols-[1fr_64px_1fr] lg:items-center lg:gap-0 lg:pl-0"
                >
                  <div
                    className={cn(
                      "absolute left-5 top-7 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-md border bg-background shadow-glow lg:static lg:col-start-2 lg:mx-auto lg:translate-x-0",
                      typeClassMap[item.type]
                    )}
                  >
                    <Icon size={19} aria-hidden />
                  </div>

                  <div
                    className={cn(
                      "lg:row-start-1",
                      isLeft ? "lg:col-start-1 lg:pr-6" : "lg:col-start-3 lg:pl-6"
                    )}
                  >
                    <GlassCard
                      as="article"
                      className="group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.07] hover:shadow-glow sm:p-6"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent transition group-hover:via-terminal/70" />
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold", typeClassMap[item.type])}>
                          <Icon size={13} aria-hidden />
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-electric/25 bg-electric/10 px-2.5 py-1 text-xs font-semibold text-electric">
                          <CalendarDays size={13} aria-hidden />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold leading-snug text-white">{item.title}</h3>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/58">
                        <MapPin size={15} className="shrink-0 text-terminal" aria-hidden />
                        {item.place}
                      </p>
                      {item.description ? (
                        <p className="mt-4 text-sm leading-6 text-white/64">{item.description}</p>
                      ) : null}
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
