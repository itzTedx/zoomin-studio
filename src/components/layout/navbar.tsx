import { NAV } from "@/constants/nav";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="sticky top-3 z-50 mx-auto w-fit pt-2">
      <nav className="rounded-full bg-green-900/20 px-9 py-3 backdrop-blur-md md:px-16">
        <ul className="flex gap-4 sm:gap-16">
          {NAV.map((nav) => (
            <li key={nav.title}>
              <Link href={nav.href}>
                {nav.title === "Home" ? <Logo /> : nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={
          "-z-40 flex justify-center transition-opacity duration-500 ease-in-out"
        }
      >
        <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>
    </header>
  );
}
