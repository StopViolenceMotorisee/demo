import Image from "next/image";

export function LogoECF() {
  return (
    <Image
      src="/partenaires/ECF.png"
      alt="Logo de ECF"
      width={591}
      style={{ width: "170px" }}
      height={591}
      priority
    />
  );
}
