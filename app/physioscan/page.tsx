import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";
import { screenAttrs } from "@/lib/screen";

const service = SERVICES[2];

export const metadata: Metadata = {
  title: "Physioscan — Lorena Vaz",
  description: service.lead,
};

export default function PhysioscanPage() {
  return (
    <main {...screenAttrs("pagina-physioscan")}>
      <ServiceView service={service} />
    </main>
  );
}
