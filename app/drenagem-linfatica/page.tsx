import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Drenagem linfática — Lorena Vaz",
  description: service.lead,
};

export default function DrenagemLinfaticaPage() {
  return (
    <main {...screenAttrs("pagina-drenagem-linfatica")}>
      <ServiceView service={service} />
    </main>
  );
}
