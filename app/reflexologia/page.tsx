import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { SERVICES } from "@/lib/content";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Reflexologia plantar — Lorena Vaz",
  description: service.lead,
};

export default function ReflexologiaPage() {
  return (
    <main>
      <ServiceView service={service} />
    </main>
  );
}
