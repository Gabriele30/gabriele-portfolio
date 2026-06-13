export type SkillCategoryIcon =
  | "software"
  | "backend"
  | "database"
  | "systems"
  | "security"
  | "web"
  | "lowLevel"
  | "mobile";

export type SkillCategory = {
  title: string;
  label: string;
  description: string;
  icon: SkillCategoryIcon;
  skills: string[];
};

export type TechnicalApproach = {
  title: string;
  text: string;
};

export const technicalApproach: TechnicalApproach[] = [
  {
    title: "Progettazione prima del codice",
    text: "Ogni progetto parte da requisiti, struttura dati, architettura e flusso applicativo."
  },
  {
    title: "Sviluppo orientato alla manutenzione",
    text: "Codice ordinato, modulare e pensato per essere esteso nel tempo."
  },
  {
    title: "Visione full-stack e sistemistica",
    text: "Dal frontend al backend, fino ad ambienti Linux, deploy, database e troubleshooting."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Engineering & Progettazione",
    label: "Core",
    icon: "software",
    description:
      "Progettazione e sviluppo di software con attenzione a struttura, manutenibilità, requisiti e collaborazione in team.",
    skills: [
      "Analisi dei requisiti",
      "Progettazione architetturale",
      "UML",
      "Pattern MVC",
      "Metodologie Agile",
      "Modellazione funzionalità",
      "Organizzazione del codice",
      "Versionamento Git"
    ]
  },
  {
    title: "Backend Engineering",
    label: "Backend",
    icon: "backend",
    description:
      "Sviluppo backend orientato a sicurezza, gestione dati, autenticazione e architetture modulari.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST API",
      "JWT",
      "Maven",
      "Flyway",
      "Autenticazione",
      "Autorizzazione",
      "API design"
    ]
  },
  {
    title: "Database & Data Modeling",
    label: "Data",
    icon: "database",
    description:
      "Progettazione e gestione di database relazionali e NoSQL per applicazioni web e software gestionali.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Progettazione schema dati",
      "Query SQL",
      "Migrazioni database",
      "Relazioni tra entità"
    ]
  },
  {
    title: "Linux, Sistemi & Deployment",
    label: "Systems",
    icon: "systems",
    description:
      "Utilizzo di ambienti Linux, containerizzazione e strumenti di sviluppo per configurare, testare e pubblicare applicazioni.",
    skills: [
      "Linux",
      "Shell scripting",
      "Configurazione servizi",
      "Docker",
      "Docker Compose",
      "Troubleshooting",
      "Ambienti di sviluppo",
      "Deploy statico"
    ]
  },
  {
    title: "Cybersecurity & Networking",
    label: "Security",
    icon: "security",
    description:
      "Competenze orientate alla sicurezza applicativa, reti e protezione dei sistemi, in linea con il percorso magistrale in Cybersicurezza.",
    skills: [
      "TCP/IP",
      "Firewall",
      "VPN",
      "Crittografia",
      "Autenticazione",
      "Sicurezza applicativa",
      "Hardening base",
      "Security-aware development"
    ]
  },
  {
    title: "Web Development & UI",
    label: "Web",
    icon: "web",
    description:
      "Sviluppo di interfacce web moderne, responsive e integrate con backend e logica applicativa.",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Thymeleaf",
      "Responsive design",
      "Landing page",
      "Web app",
      "UI componenti"
    ]
  },
  {
    title: "Hardware, Bare Metal & Low-Level Foundations",
    label: "Low-level",
    icon: "lowLevel",
    description:
      "Esperienza pratica su hardware, diagnostica e troubleshooting, con basi low-level utili a comprendere meglio il rapporto tra software, sistema operativo e macchina.",
    skills: [
      "Diagnosi hardware",
      "Assemblaggio e componenti PC",
      "Troubleshooting periferiche",
      "C",
      "C++",
      "Sistemi operativi",
      "Memoria e processi",
      "Interazione software/hardware",
      "Fondamenti low-level"
    ]
  },
  {
    title: "Mobile, Scientific Computing & Automation",
    label: "Applied",
    icon: "mobile",
    description:
      "Esperienze progettuali in sviluppo mobile, calcolo scientifico, simulazione e modellazione di sistemi dinamici.",
    skills: [
      "Kotlin",
      "Android Studio",
      "Android SDK",
      "MATLAB",
      "Simulink",
      "Elaborazione segnali",
      "Modellazione matematica",
      "Controlli automatici"
    ]
  }
];
