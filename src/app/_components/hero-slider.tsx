"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSlider() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Carousel plugins={[plugin.current]} className="w-full max-w-2xl">
        <CarouselContent>
          <CarouselItem>
            <Card className="border-none">
              <CardContent className="relative flex aspect-video items-center justify-center p-6">
                <Image
                  src="/images/hero-image.jpg"
                  fill
                  alt=""
                  className="rounded-xl bg-green-800 object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border-none">
              <CardContent className="relative flex aspect-video items-center justify-center p-6">
                <Image
                  src="/images/hero-image.jpg"
                  fill
                  alt=""
                  className="rounded-xl bg-green-800 object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border-none">
              <CardContent className="relative flex aspect-video items-center justify-center p-6">
                <Image
                  src="/images/hero-image.jpg"
                  fill
                  alt=""
                  className="rounded-xl bg-green-800 object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <ArrowLeft className="absolute -left-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" />
      <Image
        src="/images/hero-image.jpg"
        fill
        alt=""
        className="rounded-xl bg-green-800 object-cover"
      />
      <ArrowRight className="absolute -right-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" /> */}
    </motion.div>
  );
}
