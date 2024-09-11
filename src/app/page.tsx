import HeroGrid from "@/components/gradient";
import Hero from "./_components/hero-section";
import Cta from "./_components/cta";
import Features from "./_components/features";
import Services from "./_components/services";

export default function Home() {
  return (
    <main className="bg-dot container w-screen overflow-hidden pb-40">
      <HeroGrid />
      <Hero />

      <Features />
      <Services />
      <Cta />
    </main>
  );
}
