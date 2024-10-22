import Image from "next/image";

export function LogoWimoov() {
  return (
    <Image
      src="/partenaires/Wimoov.jpg"
      alt="Logo de Wimoov"
      width={591}
      style={{ width: "200px" }}
      height={591}
      priority
    />
  );
}
