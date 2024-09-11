import GlowButton from "@/components/glow-button";
import FlipText from "@/components/magicui/flip-text";
import WiggleImage from "@/components/magicui/wiggle-image";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <>
      <section className="relative my-60">
        <div className="mx-auto flex h-36 max-w-5xl items-end justify-end rounded-3xl bg-green-100/10 p-6 px-9 backdrop-blur-xl sm:h-48 md:h-64">
          <ArrowRight className="absolute -left-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" />
          <div className="absolute left-8 flex flex-col items-start md:gap-4">
            <FlipText
              delayMultiple={0.06}
              className="font-mdn text-6xl font-black leading-[3rem] tracking-[-0.06em] text-green sm:text-7xl md:text-9xl md:leading-[5rem]"
              word="START"
            />
            <FlipText
              delayMultiple={0.1}
              className="font-mdn text-6xl font-black leading-[3rem] tracking-[-0.06em] text-green sm:text-7xl md:text-9xl md:leading-[5rem]"
              word="YOUR"
            />
            <FlipText
              delayMultiple={0.14}
              className="font-mdn text-6xl font-black leading-[3rem] tracking-[-0.06em] text-green sm:text-7xl md:text-9xl md:leading-[5rem]"
              word="JOURNEY!"
            />
          </div>
          {/* <h5 className="absolute left-8">
            START <br />
            YOUR <br />
            JOURNEY!
          </h5> */}
          <GlowButton
            href="/contact"
            className="shrink-0 text-lg font-bold max-sm:!hidden"
            icon
          >
            Book us now
          </GlowButton>
        </div>
        <div className="absolute bottom-1/2 left-1/2 -z-50 translate-y-4 max-md:size-60 max-sm:-scale-x-100 md:translate-y-9">
          {/* <Image
            src="/png/camera.png"
            height={400}
            width={400}
            alt=""
            aria-hidden
            className=""
          /> */}

          <WiggleImage
            src="/png/camera.png"
            height={400}
            width={400}
            alt=""
            aria-hidden
          />
        </div>
      </section>
      <GlowButton
        href="/contact"
        className="mt-4 w-full justify-center text-lg font-bold sm:!hidden"
        icon
      >
        Book us now
      </GlowButton>
    </>
  );
}
