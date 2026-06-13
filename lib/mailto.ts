export const CONTACT_EMAIL = "gabrielebaiamonte30@gmail.com";

export type ServiceRequestPayload = {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  message: string;
};

export function createServiceRequestMailto(payload: ServiceRequestPayload) {
  const subject = "Richiesta servizio dal portfolio";
  const body = [
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    `Tipo di servizio: ${payload.serviceType}`,
    `Budget indicativo: ${payload.budget}`,
    "",
    "Messaggio:",
    payload.message
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
