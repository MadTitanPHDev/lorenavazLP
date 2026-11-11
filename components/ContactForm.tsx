"use client";

import { FormEvent, useState } from "react";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import {
  buildMailto,
  buildWhatsappUrl,
  contactBody,
  validateContact,
  whatsappMessageFromContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact";
import { SCREEN, screenAttrs } from "@/lib/screen";
import { SITE } from "@/lib/site";

const FIELDS = [
  { id: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { id: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
] as const;

const EMPTY: ContactInput = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};

type SendStatus = "idle" | "opened" | "fallback";

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<SendStatus>("idle");
  const [copied, setCopied] = useState(false);

  const draft = contactBody(values);
  const whatsappHref = buildWhatsappUrl(
    status === "idle" ? SITE.whatsappMessage : whatsappMessageFromContact(values),
  );

  function updateField(id: keyof ContactInput, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    setErrors((current) => {
      if (!current[id]) return current;
      const next = { ...current };
      delete next[id];
      return next;
    });
    if (status !== "idle") setStatus("idle");
    setCopied(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setCopied(false);

    const firstInvalid = (Object.keys(nextErrors) as Array<keyof ContactInput>)[0];
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const href = buildMailto(values);
    if (!href || href.length > 1800) {
      setStatus("fallback");
      return;
    }

    try {
      window.location.assign(href);
      setStatus("opened");
    } catch {
      setStatus("fallback");
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <FadeUpReveal delay={0.12}>
      <form
        {...screenAttrs(SCREEN.contatoFormulario)}
        noValidate
        onSubmit={handleSubmit}
        className="mt-4 space-y-10"
      >
        {FIELDS.map((field) => {
          const error = errors[field.id];
          const errorId = `${field.id}-error`;
          return (
            <label key={field.id} className="block">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink/70">
                {field.label}
              </span>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                inputMode={field.id === "telefone" ? "tel" : undefined}
                value={values[field.id]}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                onChange={(event) => updateField(field.id, event.target.value)}
                className="mt-3 w-full border-0 border-b border-sand bg-transparent py-3 font-serif text-xl text-ink outline-none transition-colors focus:border-ink"
              />
              {error ? (
                <span id={errorId} role="alert" className="mt-2 block text-sm text-clay">
                  {error}
                </span>
              ) : null}
            </label>
          );
        })}

        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink/70">
            Mensagem
          </span>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            value={values.mensagem}
            aria-invalid={Boolean(errors.mensagem)}
            aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
            onChange={(event) => updateField("mensagem", event.target.value)}
            className="mt-3 w-full resize-none border-0 border-b border-sand bg-transparent py-3 font-serif text-xl text-ink outline-none transition-colors focus:border-ink"
          />
          {errors.mensagem ? (
            <span id="mensagem-error" role="alert" className="mt-2 block text-sm text-clay">
              {errors.mensagem}
            </span>
          ) : null}
        </label>

        <div className="flex flex-col items-start gap-6">
          <button
            type="submit"
            className="group relative text-[11px] font-medium uppercase tracking-[0.28em]"
          >
            Enviar o pedido
            <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-100 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-0" />
          </button>

          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[11px] font-medium uppercase tracking-[0.28em]"
            >
              Falar pelo WhatsApp
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          ) : null}
        </div>
      </form>

      {status !== "idle" ? (
        <div
          role="status"
          className="mt-10 border border-sand bg-cream p-6 md:p-8"
        >
          <p className="font-serif text-2xl leading-snug">
            {status === "opened"
              ? "Se o aplicativo de e-mail não abriu, use uma das opções abaixo."
              : "Não foi possível abrir o e-mail neste navegador."}
          </p>
          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-ink/75">
            Destino configurado:{" "}
            <a className="underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <pre className="mt-6 max-w-full overflow-x-auto whitespace-pre-wrap border-t border-sand pt-6 font-sans text-sm leading-relaxed text-ink/80">
            {draft}
          </pre>
          <div className="mt-6 flex flex-col items-start gap-4">
            <button
              type="button"
              onClick={copyMessage}
              className="group relative text-[11px] font-medium uppercase tracking-[0.22em]"
            >
              {copied ? "Mensagem copiada" : "Copiar a mensagem"}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </button>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[11px] font-medium uppercase tracking-[0.22em]"
              >
                Continuar no WhatsApp
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </FadeUpReveal>
  );
}
