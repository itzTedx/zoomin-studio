import HeroGrid from "@/components/gradient";
import Line from "@/components/ui/line";
import Cta from "./_components/cta";
import Hero from "./_components/hero-section";
import Services from "./_components/services-test";
import { Features } from "./_components/features";

export default function Home() {
  return (
    <main className="bg-dot container w-screen overflow-hidden pb-40">
      <HeroGrid />
      <Hero />

      <Features />
      <Line>
        <Services />
      </Line>
      <Cta />
    </main>
  );
}
