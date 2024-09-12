"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

export const Services = () => {
  return (
    <section className="mt-20 md:p-8">
      <h2 className="my-4 font-mdn text-5xl tracking-wide text-green">
        What we do?
      </h2>
      <p className="mb-4 font-light text-muted-foreground md:mb-12">
        Discover our exclusive services designed to turn moments into lasting
        memories.
      </p>
      <div className="mx-auto divide-y">
        <Link
          heading={`Candid\xa0Shoots`}
          subheading="Freeze the moment as it is"
          imgSrc="/images/hero-image.jpg"
          href="#"
        />
        <Link
          heading={`Traditional\xa0Shoots`}
          subheading="We work with great people"
          imgSrc="/images/hero-image.jpg"
          href="#"
        />
        <Link
          heading={`Pre/Post\xa0Weddings`}
          subheading="Our work speaks for itself"
          imgSrc="/images/hero-image.jpg"
          href="#"
        />
        <Link
          heading={`Ad\xa0Shoots`}
          subheading="We want cool people"
          imgSrc="/images/hero-image.jpg"
          href="#"
        />
        <Link
          heading={`Short\xa0Films`}
          subheading="Incase you're bored"
          imgSrc="/images/hero-image.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between py-4 transition-colors duration-300 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -6 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-4xl md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 5 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 block text-sm text-muted-foreground/60 transition-colors duration-500 group-hover:text-foreground sm:mt-2 sm:text-base">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRight className="text-5xl text-primary" />
      </motion.div>
    </motion.a>
  );
};
