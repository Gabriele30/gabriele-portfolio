export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  details?: string;
  technologies: string[];
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Gestionale riparazioni - Backend Spring Boot",
    year: "2026 - in corso",
    category: "Backend / Gestionale",
    description:
      "Backend gestionale per laboratorio di riparazione computer e vendita articoli informatici.",
    details:
      "Progetto backend orientato alla gestione operativa di un laboratorio tecnico: riparazioni, articoli informatici, dati applicativi e logiche di sicurezza. L'obiettivo è costruire una base scalabile e manutenibile con API REST, autenticazione JWT, migrazioni database e containerizzazione.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "Spring Security",
      "JWT",
      "Docker",
      "Maven",
      "Git"
    ],
    repoUrl: "https://github.com/Gabriele30/Gestionale-riparazioni"
  },
  {
    title: "Social Web App - Applicazione full-stack",
    year: "2025",
    category: "Full-stack Web App",
    description:
      "Piattaforma social con autenticazione utenti, gestione profili, pubblicazione contenuti e interazione tra utenti.",
    details:
      "Applicazione web full-stack sviluppata per gestire flussi tipici di una piattaforma social: autenticazione, profili, contenuti e interazioni. Il progetto integra backend Spring Boot, sicurezza applicativa e interfacce server-rendered con Thymeleaf.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "HTML", "CSS", "SQL", "Git"],
    repoUrl: "https://github.com/Gabriele30/textpaz"
  },
  {
    title: "Software gestionale sportivo",
    year: "2024",
    category: "Software Engineering",
    description:
      "Sistema gestionale sviluppato in team per un progetto di Ingegneria del Software.",
    details:
      "Progetto universitario sviluppato in team con attenzione al processo di ingegneria del software: analisi, modellazione, organizzazione del lavoro, versionamento e implementazione di un sistema gestionale per contesto sportivo.",
    technologies: ["Java", "Git", "GitHub", "UML", "Agile"],
    repoUrl: "https://github.com/Gabriele30/onpoint-sports-manager"
  },
  {
    title: "Riduzione del rumore in segnali audio",
    year: "2025",
    category: "Data / MATLAB",
    description:
      "Progetto basato su metodi numerici per il denoising di segnali audio con implementazione e validazione sperimentale.",
    details:
      "Studio applicato al trattamento di segnali audio rumorosi, con implementazione di tecniche numeriche e validazione dei risultati in MATLAB. Il lavoro mette insieme modellazione, sperimentazione e analisi del comportamento degli algoritmi.",
    technologies: ["MATLAB", "Metodi numerici", "Elaborazione segnali"]
  },
  {
    title: "App nativa Android",
    year: "2024",
    category: "Mobile Development",
    description: "Applicazione Android nativa sviluppata con Kotlin e Android Studio.",
    details:
      "Applicazione mobile nativa realizzata in ambiente Android Studio, con focus su struttura del progetto, componenti Android, interfaccia utente e logica applicativa in Kotlin.",
    technologies: ["Kotlin", "Android Studio", "Android SDK"]
  },
  {
    title: "Sito web vetrina full-stack",
    year: "2024",
    category: "Web Development",
    description: "Web app con frontend Angular e integrazione con componenti backend.",
    details:
      "Progetto web orientato alla realizzazione di un sito vetrina con architettura full-stack, frontend Angular e componenti backend. Il focus è su struttura dell'interfaccia, componentizzazione e integrazione tecnica.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Sistema di controllo per treno a levitazione magnetica",
    year: "2023",
    category: "Control Systems",
    description:
      "Progetto di Controlli Automatici basato sulla modellazione di un sistema dinamico e sulla progettazione di una strategia di controllo.",
    details:
      "Progetto di modellazione e controllo di un sistema dinamico ispirato a un treno a levitazione magnetica. Include analisi del modello, progettazione della strategia di controllo e simulazione del comportamento del sistema.",
    technologies: ["MATLAB", "Simulink", "Controlli automatici", "Modellazione"]
  }
];
