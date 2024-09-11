import Image from "next/image";
import React from "react";

export default function HeroGrid() {
  return (
    <>
      <Image
        src="/hero-grid.svg"
        alt=""
        width={710}
        height={511}
        className="absolute -left-8 -top-8 -z-10 opacity-50"
        aria-hidden
        priority
      />
      <span className="absolute right-0 top-0 size-40 rounded-full bg-green-700 blur-[200px]" />
    </>
  );
}
