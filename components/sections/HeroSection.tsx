"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, FolderGit2, Github, Mail, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DeveloperTerminal } from "@/components/ui/Terminal";

const skillBadges = [
  "Java/Spring Boot",
  "Web Development",
  "Linux",
  "Cybersecurity",
  "Software Gestionali",
  "Database"
];

const githubUrl = "https://github.com/Gabriele30";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const cvUrl = `${basePath}/cv.pdf`;

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(53,242,154,0.06)_1px,transparent_1px)] bg-[length:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(57,167,255,0.18),transparent_32%,rgba(53,242,154,0.12)_68%,transparent)]" />
        <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-electric/45 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-terminal/30 to-transparent" />
      </div>

      <Container className="pb-16 sm:pb-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.82fr)] lg:items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2 rounded-md border border-terminal/35 bg-terminal/10 px-3 py-2 text-sm font-semibold text-terminal shadow-[0_0_28px_rgba(53,242,154,0.12)]"
            >
              <ShieldCheck size={16} aria-hidden />
              Ingegnere Informatico
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="mb-4 text-base font-semibold text-electric sm:text-lg"
            >
              Software Developer & Cybersecurity Student
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            >
              Gabriele Baiamonte
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            >
              Sviluppo siti web moderni, web app full-stack, backend scalabili e soluzioni software
              orientate a problemi reali.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {skillBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold text-white/70 backdrop-blur-md transition hover:border-terminal/35 hover:text-white"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <ButtonLink
                href="#progetti"
                className="sm:min-w-48"
              >
                <FolderGit2 size={18} aria-hidden />
                Vedi i miei progetti
              </ButtonLink>
              <ButtonLink href="#richiedi" variant="secondary" className="sm:min-w-48">
                <Mail size={18} aria-hidden />
                Richiedi un servizio
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-5 flex flex-wrap items-center gap-3 text-sm"
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md px-2 font-semibold text-white/66 transition hover:bg-white/[0.055] hover:text-white"
              >
                <Github size={17} aria-hidden />
                GitHub
              </a>
              <a
                href={cvUrl}
                download="CV-Gabriele-Baiamonte.pdf"
                className="inline-flex min-h-10 items-center gap-2 rounded-md px-2 font-semibold text-white/66 transition hover:bg-white/[0.055] hover:text-white"
              >
                <ArrowDownToLine size={17} aria-hidden />
                Scarica CV
              </a>
              <a
                href="#competenze"
                className="inline-flex min-h-10 items-center gap-2 rounded-md px-2 font-semibold text-white/66 transition hover:bg-white/[0.055] hover:text-white"
              >
                Competenze e servizi
                <ArrowRight size={16} aria-hidden />
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-lg border border-electric/10 bg-[linear-gradient(135deg,rgba(57,167,255,0.12),transparent_45%,rgba(53,242,154,0.10))] blur-sm" />
            <DeveloperTerminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
