import { SITE } from "@/lib/site";

export type ContactInput = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  const nome = input.nome.trim();
  const email = input.email.trim();
  const telefone = input.telefone.trim();
  const mensagem = input.mensagem.trim();
  const phoneDigits = telefone.replace(/\D/g, "");

  if (nome.length < 2) {
    errors.nome = "Informe seu nome.";
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = "Informe um e-mail válido.";
  }
  if (telefone && phoneDigits.length < 10) {
    errors.telefone = "Informe um telefone com DDD.";
  }
  if (mensagem.length < 10) {
    errors.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }

  return errors;
}

export function isConfiguredEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function contactBody(input: ContactInput): string {
  return [
    `Nome: ${input.nome.trim()}`,
    `E-mail: ${input.email.trim()}`,
    `Telefone: ${input.telefone.trim() || "—"}`,
    "",
    input.mensagem.trim(),
  ].join("\n");
}

export function buildMailto(input: ContactInput): string | null {
  if (!isConfiguredEmail(SITE.email)) return null;

  const subject = `${SITE.contactSubjectPrefix} — ${input.nome.trim()}`;
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(contactBody(input))}`;
  return `mailto:${SITE.email}?${query}`;
}

export function buildWhatsappUrl(message: string): string | null {
  const digits = SITE.whatsapp.replace(/\D/g, "");
  if (digits.length < 12) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function whatsappMessageFromContact(input: ContactInput): string {
  const nome = input.nome.trim();
  const mensagem = input.mensagem.trim();
  if (!nome && !mensagem) return SITE.whatsappMessage;
  return `Olá, Lorena. Meu nome é ${nome || "—"}.\n\n${mensagem || SITE.whatsappMessage}`;
}
