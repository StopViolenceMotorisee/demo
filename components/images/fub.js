import Image from "next/image";

export function LogoFUB() {
  return (
    <Image
      src="/partenaires/FUB_quadri_basse_def.jpg"
      alt="Logo de la FUB"
      width={591}
      style={{ width: "200px" }}
      height={591}
      priority
    />
  );
}
