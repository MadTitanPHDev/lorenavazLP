import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { BigQuote } from "@/components/BigQuote";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { HealthAxes } from "@/components/HealthAxes";
import { publicFileExists } from "@/lib/public-file";
import { SCREEN, screenAttrs } from "@/lib/screen";

const heroVideo = publicFileExists("/videos/hero.mp4")
  ? "/videos/hero.mp4"
  : null;
const portrait = publicFileExists("/images/lorena.webp")
  ? "/images/lorena.webp"
  : null;

export default function Home() {
  return (
    <main {...screenAttrs(SCREEN.inicio)} className="min-w-0">
      <Hero videoSrc={heroVideo} />
      <Marquee name={SCREEN.faixaConvite} />
      <HorizontalScroll />
      <BigQuote />
      <About portraitSrc={portrait} />
      <Testimonials />
      <HealthAxes />
    </main>
  );
}
