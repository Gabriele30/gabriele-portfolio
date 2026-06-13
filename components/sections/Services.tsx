"use client";

import { motion } from "framer-motion";
import {
  Code2,
  DatabaseZap,
  Globe2,
  Hammer,
  Layers3,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  ServerCog,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { serviceCategories, type ServiceIcon } from "@/data/services";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  website: MonitorSmartphone,
  landing: Rocket,
  app: Layers3,
  java: Code2,
  management: DatabaseZap,
  refresh: RefreshCw,
  deploy: Globe2,
  maintenance: Hammer,
  linux: ServerCog
};

export function Services() {
  return (
    <section id="servizi" className="relative overflow-hidden border-y border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(57,167,255,0.12),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(53,242,154,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:56px_56px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold text-terminal"
          >
            Cosa posso realizzare
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Servizi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 text-base leading-7 text-white/68 sm:text-lg"
          >
            Dalla landing page al software gestionale: progetto soluzioni digitali moderne,
            tecniche e scalabili.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.45, delay: index * 0.045 }}
              >
                <GlassCard
                  as="article"
                  className="group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/45 hover:bg-white/[0.07] hover:shadow-glow"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent transition group-hover:via-electric/70" />

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric transition duration-300 group-hover:border-terminal/50 group-hover:bg-terminal/10 group-hover:text-terminal">
                      <Icon size={22} aria-hidden />
                    </div>
                    <span className="rounded-md border border-terminal/20 bg-terminal/10 px-2.5 py-1 text-[11px] font-semibold text-terminal/90">
                      {service.technicalLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64">{service.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-soft backdrop-blur-md sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 flex size-11 items-center justify-center rounded-md border border-terminal/30 bg-terminal/10 text-terminal">
                <Sparkles size={20} aria-hidden />
              </div>
              <h3 className="text-2xl font-semibold text-white">Hai un progetto in mente?</h3>
              <p className="mt-3 text-sm leading-6 text-white/64 sm:text-base">
                Raccontami cosa vuoi realizzare: posso aiutarti a trasformare un'idea in un sito,
                una web app o un gestionale funzionante.
              </p>
            </div>

            <ButtonLink href="#richiedi" className="shrink-0 sm:min-w-52">
              Richiedi un servizio
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
