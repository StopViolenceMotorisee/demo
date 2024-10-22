import Image from "next/image";

export function LogoRAC() {
  return (
    <Image
      src="/partenaires/Réseau Action Climat.png"
      alt="Logo de Réseau Action Climat"
      width={591}
      height={591}
      style={{ height: "150px" }}
      priority
    />
  );
}
