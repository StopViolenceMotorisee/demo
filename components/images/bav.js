import Image from "next/image";

export function LogoBAV() {
  return (
    <Image
      src="/partenaires/Boîtes_à_vélo.png"
      alt="Logo de Boîtes à vélo"
      width={591}
      style={{ height: "155px" }}
      height={591}
      priority
    />
  );
}
