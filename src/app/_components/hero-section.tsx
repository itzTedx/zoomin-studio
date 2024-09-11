import GlowButton from "@/components/glow-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextHoverEffect } from "@/components/ui/text-hover-reveal";
import HeroSlider from "./hero-slider";
import SparklesText from "@/components/magicui/sparkles-text";

export default function Hero() {
  return (
    <section className="mt-24 text-center">
      <SparklesText
        sparklesCount={5}
        colors={{ first: "#eab308", second: "#eab308" }}
        text={"Capturing Moments,"}
        className="font-bold text-green"
      />
      <SparklesText
        sparklesCount={5}
        colors={{ first: "#2dd4bf", second: "#eab308" }}
        text={"Crafting Memories"}
        className="font-bold text-green"
      />
      {/* <h1 className="text-6xl font-bold text-green">
        Capturing Moments,
        <br />
        Crafting Memories
      </h1> */}
      <p className="mt-4 text-lg font-light text-muted-foreground">
        In a lens, we see,
        <br />
        The beauty of love unfold,
        <br />
        Grace in every shot.
      </p>
      <GlowButton className="mx-auto mt-8 w-fit font-bold" href="/gallery" icon>
        Explore Our Portfolio
      </GlowButton>

      <div className="relative mx-auto">
        <TextHoverEffect text="ZOOMIN" />
        <div className="relative mx-auto -mt-16 aspect-video max-w-2xl md:-mt-4 lg:-mt-72">
          <HeroSlider />
          <span className="absolute left-1/2 top-0 -z-50 size-40 -translate-x-1/2 rounded-full bg-green-600 blur-[120px] md:blur-[200px]" />
        </div>
        <div className="mt-3 flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="relative h-40 w-[40rem]">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
            <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="h-full w-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
