import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { BigQuote } from "@/components/BigQuote";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { HealthAxes } from "@/components/HealthAxes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <HorizontalScroll />
      <BigQuote />
      <About />
      <Testimonials />
      <HealthAxes />
    </main>
  );
}
