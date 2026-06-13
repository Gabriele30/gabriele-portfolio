"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { serviceBudgetOptions, serviceRequestTypes } from "@/data/services";
import { CONTACT_EMAIL, createServiceRequestMailto, type ServiceRequestPayload } from "@/lib/mailto";

const githubUrl = "https://github.com/Gabriele30";

const benefits = [
  "Analisi iniziale del progetto",
  "Soluzione tecnica su misura",
  "Design responsive e moderno",
  "Codice ordinato e manutenibile",
  "Possibilità di pubblicazione online",
  "Supporto post-consegna"
];

type FormErrors = Partial<Record<keyof ServiceRequestPayload, string>>;

function getPayload(form: HTMLFormElement): ServiceRequestPayload {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    serviceType: String(formData.get("serviceType") ?? "").trim(),
    budget: String(formData.get("budget") ?? "Da definire").trim(),
    message: String(formData.get("message") ?? "").trim()
  };
}

function validatePayload(payload: ServiceRequestPayload): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!payload.name) {
    errors.name = "Inserisci il tuo nome.";
  }

  if (!payload.email) {
    errors.email = "Inserisci la tua email.";
  } else if (!emailPattern.test(payload.email)) {
    errors.email = "Inserisci un indirizzo email valido.";
  }

  if (!payload.serviceType) {
    errors.serviceType = "Seleziona il tipo di servizio.";
  }

  if (!payload.message) {
    errors.message = "Descrivi brevemente il progetto.";
  }

  return errors;
}

export function ServiceRequest() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = getPayload(event.currentTarget);
    const nextErrors = validatePayload(payload);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Controlla i campi evidenziati e riprova.");
      return;
    }

    setStatus("Apro il client email con la richiesta già compilata.");
    window.location.href = createServiceRequestMailto(payload);
  }

  return (
    <section id="richiedi" className="relative overflow-hidden border-t border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(53,242,154,0.10),transparent_32%),radial-gradient(circle_at_84%_14%,rgba(57,167,255,0.12),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 bg-white/[0.018]" />

      <Container>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold text-terminal"
          >
            Contatto clienti
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Richiedi un servizio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 text-base leading-7 text-white/68 sm:text-lg"
          >
            Hai bisogno di un sito, una web app o un gestionale? Raccontami il progetto e ti
            risponderò con una prima valutazione tecnica.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard className="h-full p-5 sm:p-6">
              <h3 className="text-2xl font-semibold leading-tight text-white">
                Trasformiamo la tua idea in un progetto concreto
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">
                Posso aiutarti a progettare e sviluppare soluzioni digitali moderne: siti web
                professionali, landing page, applicazioni web, backend Java/Spring Boot e software
                gestionali su misura.
              </p>

              <div className="mt-6 grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-terminal" size={18} aria-hidden />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-sm font-semibold text-white">Contatti rapidi</p>
                <div className="grid gap-3 text-sm text-white/66">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-terminal/35 hover:text-white"
                  >
                    <Mail size={17} className="text-terminal" aria-hidden />
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-electric/45 hover:text-white"
                  >
                    <Github size={17} className="text-electric" aria-hidden />
                    github.com/Gabriele30
                  </a>
                  <p className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3">
                    <MapPin size={17} className="text-terminal" aria-hidden />
                    Palermo, Italia
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <GlassCard className="p-5 sm:p-6">
              <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    error={errors.name}
                    label="Nome"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Il tuo nome"
                    required
                  />
                  <Input
                    error={errors.email}
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nome@email.com"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Select
                    error={errors.serviceType}
                    label="Tipo di servizio"
                    name="serviceType"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Seleziona un servizio
                    </option>
                    {serviceRequestTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Select>

                  <Select label="Budget indicativo" name="budget" defaultValue="Da definire">
                    {serviceBudgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </Select>
                </div>

                <Textarea
                  error={errors.message}
                  label="Messaggio"
                  name="message"
                  placeholder="Descrivi obiettivo, tempi, funzionalità richieste o sito attuale."
                  required
                />

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="min-h-5 text-sm text-white/52" aria-live="polite">
                    {status}
                  </p>
                  <Button type="submit" className="shrink-0">
                    <Send size={18} aria-hidden />
                    Invia richiesta
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
