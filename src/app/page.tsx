import HeroGrid from "@/components/gradient";
import Hero from "./_components/hero-section";
import Cta from "./_components/cta";
import Features from "./_components/features";

export default function Home() {
  return (
    <main className="bg-dot container w-screen overflow-hidden pb-40">
      <HeroGrid />
      <Hero />
      <Features />
      <Cta />
    </main>
  );
}
