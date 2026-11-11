import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[1];

export const metadata: Metadata = {
  title: "Massagem Abhyanga — Lorena Vaz",
  description: service.lead,
};

export default function MassagemPage() {
  return (
    <main {...screenAttrs("pagina-massagem")}>
      <ServiceView service={service} />
    </main>
  );
}
