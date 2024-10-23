import Image from "next/image";

export function LogoWimoov() {
  return (
    <Image
      src="/partenaires/Wimoov.png"
      alt="Logo de Wimoov"
      width={591}
      style={{ height: "150px" }}
      height={591}
      priority
    />
  );
}
