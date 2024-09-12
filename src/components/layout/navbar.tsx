"use client";

import { NAV } from "@/constants/nav";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import useScroll from "@/hooks/useScroll";
import Logo from "./logo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { RevealText } from "../magicui/reveal-text";

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScroll(100);
  return (
    <>
      <header className="container sticky top-3 z-50 mx-auto flex justify-between pt-2">
        <Link href="/">
          <Logo />
        </Link>
        <nav
          className={cn(
            "hidden rounded-full px-5 py-3 transition-all duration-500 ease-in-out md:block",
            isScrolled
              ? "bg-background/50 backdrop-blur-md"
              : "bg-transparent backdrop-blur-0",
          )}
          style={{
            transitionProperty: "background-color, backdrop-filter, margin-top",
          }}
        >
          <div
            className={cn(
              "-z-40 flex justify-center transition-opacity duration-500 ease-in-out",
              isScrolled ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 h-1 w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-lg" />
          </div>
          <menu className="flex w-full flex-row items-center bg-transparent">
            {NAV.map((link, i) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={"relative flex items-center gap-1.5 px-4"}
                    aria-label={`Visit ${link.title} page`}
                  >
                    <RevealText>{link.title}</RevealText>
                    {isActive ? <Span /> : null}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "ml-3 bg-transparent",
                )}
              >
                <RevealText>{`Book\xa0Now!`}</RevealText>
              </Link>
            </li>
          </menu>
        </nav>
        <div className="hidden md:block">
          <Link
            href="tel:+919176473121"
            aria-label="Call me now. Click to open Phone App"
            className="hover:bg-foreground-50 flex shrink-0 scale-100 gap-2 rounded-lg px-2 py-2 transition active:scale-95"
          >
            <div className="relative h-9 w-9">
              <Image
                fill
                src="/icons/phone.svg"
                alt="Call me"
                title="Call me"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] lg:text-[10px]">Call us now</span>
              <span className="text-primary-800 text-sm font-bold lg:text-base">
                91764 73121
              </span>
            </div>
          </Link>
        </div>
        <span
          className={cn(
            "absolute -top-3 -z-50 h-[150%] w-full bg-gradient-to-b from-background/80 to-transparent transition-opacity duration-500 ease-in-out lg:inset-x-14",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        />
      </header>
    </>
  );
}

const Span = () => {
  return (
    <motion.span
      layoutId="pill-tab"
      transition={{ type: "spring", duration: 0.5 }}
      className={cn(
        "absolute -bottom-4 left-1/2 z-0 mr-1 size-2 -translate-x-1/2 rounded-full bg-primary bg-gradient-to-b",
      )}
    />
  );
};
