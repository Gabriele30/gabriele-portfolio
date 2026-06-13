export type TimelineType = "Formazione" | "Esperienza";

export type TimelineItem = {
  title: string;
  period: string;
  place: string;
  type: TimelineType;
  description?: string;
};

export const timelineItems: TimelineItem[] = [
  {
    title: "Laurea Magistrale in Cybersicurezza",
    period: "Set 2024 - Presente",
    place: "Università degli Studi di Palermo",
    type: "Formazione",
    description:
      "Percorso magistrale focalizzato su cybersecurity, sistemi, reti, sicurezza applicativa e protezione delle infrastrutture digitali."
  },
  {
    title: "Laurea Triennale in Ingegneria Informatica",
    period: "Ott 2021 - Lug 2024",
    place: "Università degli Studi di Palermo",
    type: "Formazione"
  },
  {
    title: "Tecnico Informatico",
    period: "Giu 2021 - Dic 2021",
    place: "Infranet, Palermo",
    type: "Esperienza",
    description:
      "Diagnosi hardware e software, manutenzione e ripristino dispositivi, troubleshooting di sistema, rete e configurazione, collaborazione con il team tecnico."
  },
  {
    title: "Diploma di Maturità Scientifica",
    period: "Diploma",
    place: "Liceo Scientifico Ernesto Basile",
    type: "Formazione"
  }
];
