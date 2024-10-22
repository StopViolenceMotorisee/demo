import Image from "next/image";

export function LogoFVM() {
  return (
    <Image
      src="/partenaires/Forum Vies Mobiles.png"
      alt="Logo de Forum Vies Mobiles"
      width={591}
      style={{ width: "300px" }}
      height={591}
      priority
    />
  );
}
