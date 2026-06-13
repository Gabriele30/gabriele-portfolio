import { Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL } from "@/lib/mailto";

const githubUrl = "https://github.com/Gabriele30";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/45 to-transparent" />
      <Container>
        <div className="flex flex-col gap-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">
              Sito progettato e sviluppato da Gabriele Baiamonte
            </p>
            <p className="mt-2 text-white/45">
              Copyright {currentYear} Gabriele Baiamonte. Tutti i diritti riservati.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-electric"
            >
              <Github size={16} aria-hidden />
              GitHub
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 transition hover:text-terminal"
            >
              <Mail size={16} aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
