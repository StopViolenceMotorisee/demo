import Image from "next/image";

export function LogoRAC() {
  return (
    <Image
      src="/partenaires/Réseau Action Climat.png"
      alt="Logo de Réseau Action Climat"
      width={591}
      style={{ width: "300px" }}
      height={591}
      priority
    />
  );
}
