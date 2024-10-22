import Image from "next/image";

export function LogoLHC() {
  return (
    <Image
      src="/partenaires/L'Heureux Cyclage.jpg"
      alt="Logo de L'Heureux Cyclage"
      width={591}
      style={{ width: "200px" }}
      height={591}
      priority
    />
  );
}
