import Image from "next/image";

export function LogoCLER() {
  return (
    <Image
      src="/partenaires/cler.png"
      alt="Logo de Réseau CLER"
      width={591}
      height={591}
      style={{ width: "150px" }}
      priority
    />
  );
}
