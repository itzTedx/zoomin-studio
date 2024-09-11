import GlowButton from "@/components/glow-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Cta() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto flex h-36 max-w-5xl items-end justify-end rounded-3xl bg-green-100/10 p-6 px-9 backdrop-blur-xl sm:h-48 md:h-64">
          <ArrowRight className="absolute -left-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" />
          <h5 className="font-mdn absolute left-8 text-6xl font-black leading-[0.75] text-green sm:text-7xl md:text-9xl">
            START <br />
            YOUR <br />
            JOURNEY!
          </h5>
          <GlowButton href="/contact" className="shrink-0 max-sm:!hidden" icon>
            Book us now
          </GlowButton>
        </div>
        <Image
          src="/png/camera.png"
          height={400}
          width={400}
          alt=""
          aria-hidden
          className="absolute bottom-1/2 left-1/2 -z-50 translate-y-4 max-md:size-60 max-sm:-scale-x-100 md:translate-y-9"
        />
      </section>
      <GlowButton
        href="/contact"
        className="mt-4 w-full text-center sm:!hidden"
        icon
      >
        Book us now
      </GlowButton>
    </>
  );
}
