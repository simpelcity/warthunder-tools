/* Aircraft ARMS */
import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"

export type Arm = "SARH" | "PRH";

export type SARHArm = "SARH" | "SARH+IOG";
export type PRHArm = "PRH" | "PRH+IOG";

export type ArmMissileVariant = SARHArm | PRHArm;

export type ArmBand = "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J";

export type ArmShootdown = "All-Aspects";

export type ArmExplosiveType = "PBXN-107" | "PBXN-110" | "HMX" | "TGAF-5M" | "TG-40" | "Hexal";

export type ArmWarhead = "HE";

export type ArmIconNames = "arm-blue" | "arm-green" | "arm-yellow" | "arm-red" | "arm-blue-1" | "arm-red-1" | "arm-green-1";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7" | "13.0" | "13.3" | "13.7" | "14.0" | "14.3" | "14.7";

export interface BaseArm {
  id: string;
  designation: string;
  category: Arm;
  family: SARHArm | PRHArm;
  icon: ArmIconNames;
  projectileMassKg: number;
  guidance: ArmMissileVariant;
  band: ArmBand[];
  lockRangeKm: number;
  launchRangeKm: number;
  maximumSpeedMach: number;
  missileGuidanceTimeS: number;
  explosiveType: ArmExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
  warhead?: ArmWarhead;
}

export type CountriesByTechTree = {
  USA: CountriesUSA;
  Germany: CountriesGermany;
  USSR: CountriesUSSR;
  "Great Britain": CountriesGreatBritain;
  Japan: CountriesJapan;
  China: CountriesChina;
  Italy: CountriesItaly;
  France: CountriesFrance;
  Sweden: CountriesSweden;
  Israel: CountriesIsrael;
}

export type BaseArmVehicle = {
  [T in TechTree]: {
    id: string;
    vehicleId: string;
    vehicleName: string;
    vehicleTechTree: T;
    vehicleOperator?: CountriesByTechTree[T];
    vehicleRank: Rank;
    vehicleBr: {
      AB?: BR;
      RB: BR;
      SB?: BR;
    };
    icon?: ArmIconNames;
  }
}[TechTree]

export type ArmDefinition = BaseArm & {
  vehicles: BaseArmVehicle[];
}
