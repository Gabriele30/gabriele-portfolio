export type ServiceIcon =
  | "website"
  | "landing"
  | "app"
  | "java"
  | "management"
  | "refresh"
  | "deploy"
  | "maintenance"
  | "linux";

export type ServiceCategory = {
  title: string;
  description: string;
  icon: ServiceIcon;
  technicalLabel: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Siti web vetrina moderni",
    description: "Siti eleganti, responsive e veloci per professionisti, attivita' locali e piccoli brand.",
    icon: "website",
    technicalLabel: "Responsive UI"
  },
  {
    title: "Landing page professionali",
    description: "Pagine ottimizzate per presentare un servizio, raccogliere contatti o promuovere un prodotto.",
    icon: "landing",
    technicalLabel: "Conversion focused"
  },
  {
    title: "Web app full-stack",
    description: "Applicazioni web con interfaccia moderna, logica applicativa e integrazione con backend e database.",
    icon: "app",
    technicalLabel: "Frontend + backend"
  },
  {
    title: "Backend Java/Spring Boot",
    description: "API REST, autenticazione, gestione dati, sicurezza applicativa e architetture backend scalabili.",
    icon: "java",
    technicalLabel: "REST API"
  },
  {
    title: "Software gestionali",
    description: "Soluzioni su misura per organizzare clienti, attivita', prodotti, interventi, preventivi e processi interni.",
    icon: "management",
    technicalLabel: "Process automation"
  },
  {
    title: "Restyling siti esistenti",
    description: "Modernizzazione grafica e tecnica di siti datati, con miglioramento di struttura, responsive design e usabilita'.",
    icon: "refresh",
    technicalLabel: "UX refresh"
  },
  {
    title: "Setup hosting e deploy",
    description: "Configurazione base di repository, hosting, deploy, dominio e pubblicazione online del progetto.",
    icon: "deploy",
    technicalLabel: "Hosting setup"
  },
  {
    title: "Manutenzione tecnica",
    description: "Aggiornamenti, piccole modifiche, correzione bug, miglioramenti grafici e supporto tecnico.",
    icon: "maintenance",
    technicalLabel: "Bug fix"
  },
  {
    title: "Consulenza Linux/IT base",
    description: "Supporto su configurazioni, troubleshooting, ambienti Linux, strumenti di sviluppo e workflow tecnico.",
    icon: "linux",
    technicalLabel: "Linux workflow"
  }
];

export const serviceTypes = serviceCategories.map((service) => service.title);

export const serviceRequestTypes = [
  "Sito web vetrina",
  "Landing page",
  "Web app full-stack",
  "Backend Java/Spring Boot",
  "Software gestionale",
  "Restyling sito esistente",
  "Manutenzione tecnica",
  "Consulenza Linux/IT",
  "Altro"
];

export const serviceBudgetOptions = [
  "Da definire",
  "Meno di 300€",
  "300€ - 600€",
  "600€ - 1000€",
  "Oltre 1000€"
];

export const budgetOptions = serviceBudgetOptions;
