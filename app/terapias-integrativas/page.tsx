import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[2];

export const metadata: Metadata = {
  title: "Terapias integrativas — Lorena Vaz",
  description: service.lead,
};

export default function TerapiasIntegrativasPage() {
  return (
    <main {...screenAttrs("pagina-terapias-integrativas")}>
      <ServiceView service={service} />
    </main>
  );
}
