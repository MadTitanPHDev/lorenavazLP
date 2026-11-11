import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Reflexologia plantar — Lorena Vaz",
  description: service.lead,
};

export default function ReflexologiaPage() {
  return (
    <main {...screenAttrs("pagina-reflexologia")}>
      <ServiceView service={service} />
    </main>
  );
}
