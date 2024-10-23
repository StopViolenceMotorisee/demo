import Image from "next/image";

export function LogoFFC() {
  return (
    <Image
      src="/partenaires/ffc.png"
      alt="Logo de FF Cyclisme"
      width={591}
      style={{ width: "170px" }}
      height={591}
      priority
    />
  );
}
