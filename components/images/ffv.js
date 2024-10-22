import Image from "next/image";

export function LogoFFV() {
  return (
    <Image
      src="/partenaires/FF Vélo.jpg"
      alt="Logo de FF Vélo"
      width={591}
      style={{ width: "300px" }}
      height={591}
      priority
    />
  );
}
