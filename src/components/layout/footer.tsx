import { NAV } from "@/constants/nav";
import { TextHoverEffect } from "../ui/text-hover-reveal";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background">
      <TextHoverEffect text="ZOOMIN" />
      <nav className="container pb-12">
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
