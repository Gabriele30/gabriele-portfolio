"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, MonitorSmartphone, ShieldCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

type Highlight = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Formazione tecnica",
    text: "Laurea in Ingegneria Informatica e magistrale in Cybersicurezza in corso.",
    icon: GraduationCap
  },
  {
    title: "Sviluppo software",
    text: "Esperienza con Java, Spring Boot, TypeScript, Angular, Kotlin, SQL e Docker.",
    icon: Code2
  },
  {
    title: "Siti e web app",
    text: "Realizzazione di siti web, landing page, web app full-stack e interfacce moderne.",
    icon: MonitorSmartphone
  },
  {
    title: "Mentalità security-aware",
    text: "Attenzione ad autenticazione, sicurezza applicativa, reti, Linux e buone pratiche tecniche.",
    icon: ShieldCheck
  }
];

export function About() {
  return (
    <section id="chi-sono" className="relative scroll-mt-20 overflow-hidden border-y border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(57,167,255,0.12),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(53,242,154,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-white/[0.018]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-sm font-semibold text-terminal"
            >
              Profilo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: 0.04 }}
              className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
            >
              Chi sono
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 space-y-5 text-base leading-8 text-white/72 sm:text-lg"
            >
              <p>
                Sono un Ingegnere Informatico e studente magistrale in Cybersicurezza presso
                l’Università degli Studi di Palermo. Mi occupo di sviluppo software, siti web, web
                app, backend Java/Spring Boot, database, sistemi Linux e sicurezza applicativa.
              </p>
              <p>
                Mi piace costruire soluzioni digitali chiare, robuste e utili: dal sito web
                professionale per presentare un’attività, fino a web app e software gestionali
                pensati per organizzare processi reali.
              </p>
              <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-white/68 backdrop-blur-md">
                Il mio approccio unisce basi ingegneristiche, attenzione all’architettura software e
                cura dell’esperienza utente. Ogni progetto viene pensato per essere responsive,
                mantenibile, ordinato e pronto per evolvere nel tempo.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlassCard
                    as="article"
                    className="group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/45 hover:bg-white/[0.07] hover:shadow-glow sm:p-6"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent transition group-hover:via-terminal/70" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(57,167,255,0.08),transparent_42%,rgba(53,242,154,0.06))] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-5 flex size-12 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric transition group-hover:border-terminal/45 group-hover:bg-terminal/10 group-hover:text-terminal">
                        <Icon size={22} aria-hidden />
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-white">{highlight.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/64">{highlight.text}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
