import Image from "next/image";
import { LogoBAV } from "@/components/images/bav.js";
import { LogoECF } from "@/components/images/ecf.js";
import { LogoFFC } from "@/components/images/ffc.js";
import { LogoFFV } from "@/components/images/ffv.js";
import { LogoFVM } from "@/components/images/fvm.js";
import { LogoLHC } from "@/components/images/lhc.js";
import { LogoMobin } from "@/components/images/mobin.js";
import { LogoRAC } from "@/components/images/rac.js";
import { LogoWimoov } from "@/components/images/wimoov.js";
import { LogoBase } from "@/components/images/base.js";

export function Images() {
  return (
    <div className="images">
      <LogoFFV />
      <LogoFVM />
      <LogoLHC />
      <LogoMobin />
      <LogoRAC />
      <LogoWimoov />
      <LogoFFC />
      <LogoBAV />
      <LogoECF />
      <LogoBase file="apic.png" name="de APIC" style={{ height: "180px" }} />
      <LogoBase file="CVTCM.png" name="de CVTCM" style={{ width: "160px" }} />
      <LogoBase
        file="Fietsersbond.png"
        name="de Fietsersbond"
        style={{ width: "150px" }}
      />
      <LogoBase file="FNE.png" name="de FNE" style={{ width: "150px" }} />
      <LogoBase
        file="VeT.png"
        name="de vélo et territoires"
        style={{ width: "150px" }}
      />
      <LogoBase file="MVUV.png" name="de MVUV" style={{ width: "140px" }} />
    </div>
  );
}
