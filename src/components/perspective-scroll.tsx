"use client";
import Image from "next/image";
import Pic1 from "../../public/images/hero-image.jpg";
import Pic2 from "../../public/images/hero-image.jpg";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Features from "@/app/_components/features";
import Services from "@/app/_components/services";

export default function PerspectiveScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </section>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex h-screen flex-col items-center justify-center bg-green-950 pb-[10vh]"
    >
      <Features />
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Services />
    </motion.div>
  );
};