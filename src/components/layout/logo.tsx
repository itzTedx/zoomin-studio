import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo/logo-dark.svg"
      height={40}
      width={112}
      alt="Zoomin Studio Logo"
      className="h-8 w-32 shrink-0"
    />
  );
}
