"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#progetti", label: "Progetti" },
  { href: "#competenze", label: "Competenze" },
  { href: "#percorso", label: "Percorso" }
];

const requestLink = { href: "#richiedi", label: "Richiedi un servizio" };

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/76 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold text-white"
            aria-label="Torna alla homepage"
            onClick={closeMenu}
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-terminal/20 bg-terminal/[0.035] shadow-[0_0_24px_rgba(53,242,154,0.12)] transition group-hover:border-electric/40 group-hover:bg-electric/[0.04] group-hover:shadow-[0_0_32px_rgba(53,242,154,0.22)]">
              <img
                src="/logoultimale-clean.png"
                alt=""
                aria-hidden="true"
                className="size-[3.4rem] object-contain drop-shadow-[0_0_12px_rgba(53,242,154,0.35)]"
              />
            </span>
            <span className="hidden leading-tight sm:flex sm:flex-col">
              <span>Gabriele Baiamonte</span>
              <span className="text-[11px] font-medium text-white/48">Software Developer</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/[0.055] hover:text-white focus:outline-none focus:ring-2 focus:ring-electric/70 focus:ring-offset-2 focus:ring-offset-background"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={requestLink.href}
              className="rounded-md border border-terminal/40 bg-terminal/10 px-4 py-2 text-sm font-semibold text-terminal shadow-[0_0_24px_rgba(53,242,154,0.10)] transition hover:bg-terminal hover:text-black hover:shadow-[0_0_34px_rgba(53,242,154,0.22)] focus:outline-none focus:ring-2 focus:ring-terminal/70 focus:ring-offset-2 focus:ring-offset-background"
            >
              {requestLink.label}
            </a>
          </div>

          <IconButton
            label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </IconButton>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-white/10 bg-background/96 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden"
          >
            <Container className="py-3">
              <nav className="flex flex-col gap-1" aria-label="Navigazione mobile">
                {[...navItems, requestLink].map((item) => {
                  const isCta = item.href === requestLink.href;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-electric/70 focus:ring-offset-2 focus:ring-offset-background",
                        isCta
                          ? "mt-2 border border-terminal/40 bg-terminal/10 text-terminal hover:bg-terminal hover:text-black"
                          : "text-white/72 hover:bg-white/[0.055] hover:text-white"
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
