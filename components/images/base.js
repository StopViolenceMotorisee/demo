import Image from "next/image";

export function LogoBase(props) {
  return (
    <Image
      src={`/partenaires/${props.file}`}
      alt={`Logo ${props.name}`}
      width={591}
      style={props.style}
      height={591}
      priority
    />
  );
}
