import Image from "next/image";
import { LogoFFV } from "@/components/images/ffv.js";
import { LogoFVM } from "@/components/images/fvm.js";
import { LogoLHC } from "@/components/images/lhc.js";
import { LogoMobin } from "@/components/images/mobin.js";
import { LogoRAC } from "@/components/images/rac.js";
import { LogoWimoov } from "@/components/images/wimoov.js";

export function Images() {
  return (
    <div className="images">
      <LogoFFV />
      <LogoFVM />
      <LogoLHC />
      <LogoMobin />
      <LogoRAC />
      <LogoWimoov />
    </div>
  );
}
