import Image from "next/image";

export function LogoMobin() {
  return (
    <Image
      src="/partenaires/Mobin.png"
      alt="Logo de Mobin"
      width={591}
      height={591}
      style={{ height: "150px" }}
      priority
    />
  );
}
