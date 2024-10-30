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
      <LogoFFC />
      <LogoBase
        file="RdA.png"
        name="de Route de l'Avenir"
        style={{ width: "150px" }}
      />
      <LogoBase
        file="FaV.png"
        name="de Femmes à vélo"
        style={{ width: "180px" }}
      />
      <LogoECF />
      <LogoBase file="MCF.png" name="de MCF" style={{ height: "150px" }} />
      <LogoLHC />
      <LogoBase file="MVUV.png" name="de MVUV" style={{ width: "140px" }} />
      <LogoBase
        file="Fietsersbond.png"
        name="de Fietsersbond"
        style={{ width: "150px" }}
      />
      <LogoBAV />
      <LogoBase
        file="VeT.png"
        name="de vélo et territoires"
        style={{ width: "150px" }}
      />
      <LogoBase file="CVTCM.png" name="de CVTCM" style={{ width: "160px" }} />
      <LogoBase file="apic.png" name="de APIC" style={{ height: "180px" }} />
      <LogoRAC />
      <LogoFVM />

      <LogoBase file="FNE.png" name="de FNE" style={{ width: "150px" }} />
      <LogoWimoov />
      <LogoMobin />
      <LogoBase
        file="ATF.png"
        name="de Amis de la Terre"
        style={{ width: "140px" }}
      />
      <LogoBase
        file="VeloQuebec.jpg"
        name="de Vélo Québec"
        style={{ width: "150px" }}
      />
      <LogoBase
        file="CTE.jpg"
        name="de Cyclo Transeurope"
        style={{ width: "170px" }}
      />
    </div>
  );
}
