import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[1];

export const metadata: Metadata = {
  title: "Terapias manuais — Lorena Vaz",
  description: service.lead,
};

export default function TerapiasManuaisPage() {
  return (
    <main {...screenAttrs("pagina-terapias-manuais")}>
      <ServiceView service={service} />
    </main>
  );
}
