/* SPAA SAMS */
import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"
export type Sam = "IR" | "ARH" | "Semi-Automatic" | "Beam riding";

export type IRSam = "IR" | "IR+IOG" | "IR+IOG+DL" | "IR+IOG+GNSS+DL";
export type ARHSam = "ARH+IOG+DL";
export type SemiAutomaticSam = "Semi-Automatic (SACLOS)";
export type BeamRidingSam = "Beam riding";

export type SamMissileVariant = IRSam | ARHSam | SemiAutomaticSam | BeamRidingSam;

export type IRSamAspect = "All-aspects";

export type SamExplosiveType = "PBXN-110" | "Composition B" | "A-IX-2" | "HTA" | "Octol/TNT" | "PBXN-3" | "OKFOL-20" | "OKFOL" | "Comp. A" | "HBX";

export type ARHBand = "J" | "I";
export type ARHShootDown = "All-aspects";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7";

export interface BaseSam {
  id: string;
  designation: string;
  family: Sam;
  caliberMm: number;
  projectileMassKg: number;
  launchRangeKm: number;
  maximumSpeedMs?: number;
  maximumSpeedMach?: number;
  missileGuidanceTimeS: number;
  explosiveType: SamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
}

export interface IRSamMissile extends BaseSam {
  family: "IR";
  variant: IRSam;
  guidance: IRSam;
  aspect: IRSamAspect;
  lockRangeRearAspectKm: number;
  lockRangeAllAspectKm: number;
  IRCCM: boolean;
  maximumOverloadG: number;
}

export interface ARHSamMissile extends BaseSam {
  family: "ARH";
  variant: ARHSam;
  guidance: ARHSam;
  band: ARHBand;
  shootDown: ARHShootDown;
  lockRangeKm: number;
  launchRangeKm: number;
  maximumOverloadG: number;
}

export interface SemiAutomaticSamMissile extends BaseSam {
  family: "Semi-Automatic";
  variant: SemiAutomaticSam;
  guidance: SemiAutomaticSam;
  penetrationMm: number;
  fuzeDelayM: number;
  fuzeSensitivityMm: number;

  IRCCM?: Boolean;
}

export interface BeamRidingSamMissile extends BaseSam {
  family: "Beam riding";
  variant: BeamRidingSam;
  guidance: BeamRidingSam;
  penetrationMm: number;
  fuzeDelayM: number;
  fuzeSensitivityMm: number;
}

export type SamMissile = IRSamMissile | ARHSamMissile | SemiAutomaticSamMissile | BeamRidingSamMissile;

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

export type SamVehicle = {
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
  };
}[TechTree];

export type SamDefinition = SamMissile & {
  vehicles: SamVehicle[];
};