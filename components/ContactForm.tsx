"use client";

import { FormEvent, useState } from "react";
import { FadeUpReveal } from "@/components/FadeUpReveal";

const FIELDS = [
  { id: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { id: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") ?? "");
    const email = String(data.get("email") ?? "");
    const telefone = String(data.get("telefone") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    const body = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      "",
      mensagem,
    ].join("\n");

    const subject = `Consulta Lorena Vaz — ${nome}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <FadeUpReveal delay={0.12}>
      <form onSubmit={handleSubmit} className="mt-4 space-y-10">
        {FIELDS.map((field) => (
          <label key={field.id} className="block">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
              {field.label}
            </span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.id !== "telefone"}
              className="mt-3 w-full border-0 border-b border-sand bg-transparent py-3 font-serif text-xl outline-none transition-colors focus:border-ink"
            />
          </label>
        ))}

        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
            Mensagem
          </span>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            className="mt-3 w-full resize-none border-0 border-b border-sand bg-transparent py-3 font-serif text-xl outline-none transition-colors focus:border-ink"
          />
        </label>

        <button
          type="submit"
          className="group relative text-[11px] font-medium uppercase tracking-[0.28em]"
        >
          {sent ? "Abrindo o e-mail..." : "Enviar o pedido"}
          <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-100 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-0" />
        </button>
      </form>
    </FadeUpReveal>
  );
}
