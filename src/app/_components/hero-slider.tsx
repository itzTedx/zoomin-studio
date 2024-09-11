"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="relative aspect-video max-w-2xl"
    >
      <ArrowLeft className="absolute -left-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" />
      <Image
        src="/images/hero-image.jpg"
        fill
        alt=""
        className="rounded-xl bg-green-800 object-cover"
      />
      <ArrowRight className="absolute -right-4 top-1/2 z-10 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-green-950 p-2 text-green backdrop-blur-md transition-colors hover:bg-green-900/50" />
    </motion.div>
  );
}
