"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/mailto";
import { cn } from "@/lib/utils";

type DeveloperTerminalProps = {
  className?: string;
};

type TerminalBlock = {
  command: string;
  output: string[];
};

const terminalBlocks: TerminalBlock[] = [
  {
    command: "profile --summary",
    output: [
      "name: Gabriele Baiamonte",
      "role: Software Developer & Cybersecurity Student",
      "focus: backend engineering | web app | gestionali"
    ]
  },
  {
    command: "stack --backend",
    output: [
      "runtime: Java 21 | Spring Boot | Maven",
      "security: Spring Security | JWT | auth flows",
      "data: PostgreSQL | Flyway | SQL modeling"
    ]
  },
  {
    command: "systems --scope",
    output: [
      "linux: shell | servizi | ambienti di sviluppo",
      "delivery: Git | Docker | GitHub Pages",
      "support: troubleshooting hardware/software"
    ]
  },
  {
    command: "services --available",
    output: [
      "websites: siti vetrina | landing page | restyling",
      "software: web app full-stack | backend | gestionali",
      "consulting: Linux/IT base | deploy | manutenzione"
    ]
  },
  {
    command: "contact --email",
    output: [`mailto: ${CONTACT_EMAIL}`]
  }
];

const terminalText = terminalBlocks
  .map((block) => [`$ ${block.command}`, ...block.output].join("\n"))
  .join("\n\n");

function OutputLine({ line }: { line: string }) {
  const separatorIndex = line.indexOf(":");

  if (separatorIndex === -1) {
    return <span className="text-white/72">{line}</span>;
  }

  return (
    <>
      <span className="text-electric/90">{line.slice(0, separatorIndex + 1)}</span>
      <span className="text-white/72">{line.slice(separatorIndex + 1)}</span>
    </>
  );
}

export function DeveloperTerminal({ className }: DeveloperTerminalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [visibleBlocks, setVisibleBlocks] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleBlocks(terminalBlocks.length);
      return;
    }

    setVisibleBlocks(0);

    const timeouts = terminalBlocks.map((_, index) =>
      window.setTimeout(() => {
        setVisibleBlocks(index + 1);
      }, 360 + index * 620)
    );

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [shouldReduceMotion]);

  const visibleTerminalBlocks = useMemo(
    () => terminalBlocks.slice(0, visibleBlocks),
    [visibleBlocks]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-[#050b0d]/96 shadow-soft backdrop-blur-md",
        className
      )}
      aria-label={terminalText}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(57,167,255,0.09),transparent_36%,rgba(53,242,154,0.07)_76%,transparent)]" />
      <div className="pointer-events-none absolute -right-20 top-14 h-48 w-48 rounded-full bg-terminal/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-terminal" />
        </div>
        <div className="flex min-w-0 items-center gap-2 text-xs font-semibold text-white/58">
          <TerminalIcon size={14} aria-hidden />
          <span className="truncate">portfolio-terminal</span>
        </div>
      </div>

      <div className="relative p-4 sm:p-5">
        <div className="rounded-md border border-terminal/18 bg-black/58 p-4 font-mono text-[12px] leading-6 shadow-[inset_0_0_46px_rgba(53,242,154,0.055)] sm:text-[13px]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex min-w-0 items-center gap-2 text-white/62">
              <Activity size={14} aria-hidden className="text-terminal" />
              <span className="truncate">gabriele@portfolio:~</span>
            </div>
            <span className="rounded-md border border-terminal/20 bg-terminal/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-terminal">
              profile online
            </span>
          </div>

          <div className="min-h-[332px] space-y-4 sm:min-h-[372px]">
            {visibleTerminalBlocks.map((block) => (
              <motion.div
                key={block.command}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.26, ease: "easeOut" }}
              >
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <span className="text-terminal">gabriele@portfolio</span>
                  <span className="text-white/36">:</span>
                  <span className="text-electric">~</span>
                  <span className="text-white/42">$</span>
                  <span className="break-words text-white">{block.command}</span>
                </div>

                <div className="mt-2 space-y-1 border-l border-terminal/25 pl-3">
                  {block.output.map((line) => (
                    <p key={line} className="break-words">
                      <OutputLine line={line} />
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {visibleBlocks < terminalBlocks.length ? (
              <div className="flex items-center gap-2 text-white/48">
                <span className="text-terminal">gabriele@portfolio</span>
                <span>$</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block h-4 w-2 bg-electric"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
