import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Social() {
  return (
    <div className="absolute hidden flex-col items-center justify-center gap-4 lg:flex">
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow me on Instagram"
            title="Follow me on Instagram"
            className={cn(
              buttonVariants({
                variant: "outline",
                className:
                  "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50",
              }),
            )}
          >
            <IconBrandInstagram className="size-5 rounded-md text-muted-foreground" />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow me on Instagram"
            title="Follow me on Instagram"
            className={cn(
              buttonVariants({
                variant: "outline",
                className:
                  "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50",
              }),
            )}
          >
            <IconBrandFacebook className="size-5 rounded-md text-muted-foreground" />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow me on Instagram"
            title="Follow me on Instagram"
            className={cn(
              buttonVariants({
                variant: "outline",
                className:
                  "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50",
              }),
            )}
          >
            <IconBrandWhatsapp className="size-5 rounded-md text-muted-foreground" />
          </Link>
        </li>
      </ul>
      <svg width="1" height="32" viewBox="0 0 1 32" fill="none">
        <line
          x1="0.5"
          y1="32"
          x2="0.499999"
          y2="2.18557e-08"
          stroke="#90FF00"
        />
      </svg>

      <p className="mt-9 -rotate-90 text-xs uppercase text-muted-foreground">
        Follow us on
      </p>
    </div>
  );
}
