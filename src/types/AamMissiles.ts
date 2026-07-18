/* Aircraft AAMS */
import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"

export type Aam = "IR" | "Radar" | "Beam-Riding (SACLOS)" | "Command-Guided (MCLOS)";

export type IRAam = "Caged" | "Uncaged";
export type IRAamAspect = "Rear-aspect" | "All-aspects";

export type RadarAam = "SARH" | "ARH";
export type BeamRidingAam = "Beam-Riding (SACLOS)";
export type CommandGuidedAam = "Command-Guided (MCLOS)";

export type SARHAam = "SARH" | "SARH+IOG" | "SARH+IOG+DL";
export type ARHAam = "ARH+IOG+DL" | "ARH+IOG+GNSS+DL";
export type BeamRidingAamGuidance = "Semi-Automatic (SACLOS)";
export type CommandGuidedAamGuidance = "Manual (MCLOS)";

export type AamExplosiveType = "PBXN-102" | "PBXN-3" | "PBXN-4" | "TGAF-5" | "PBXN-110" | "HBX" | "Nipolit" | "TNT" | "HMX" | "HBX-3" | "PBX(AF)-108" | "PBXN-104" | "Nipolit" | "Composition B" | "OKFOL-20";

export type RadarAamBand = "I" | "J";

export type RadarAamShootDown = "Front-aspect" | "All-aspects";

export type IRAamVariant = IRAam | IRAamAspect;
export type RadarAamVariant = SARHAam | ARHAam;

export type AamMissileVariant = "IR" | RadarAamVariant | BeamRidingAam | CommandGuidedAam;

export type AamIconNames = "ir-white" | "ir-orange" | "ir-green" | "ir-yellow" | "ir-large-white" | "ir-large-orange" | "radar-white" | "radar-orange" | "radar-yellow" | "radar-green" | "radar-blue" | "radar-red" | "rocket";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7" | "13.0" | "13.3" | "13.7" | "14.0" | "14.3";

export interface BaseAam {
  id: string;
  designation: string;
  category: Aam;
  icon: AamIconNames;
  family: "IR" | RadarAam | BeamRidingAam | CommandGuidedAam;
  projectileMassKg: number;
  maximumSpeedMach: number;
  maximumOverloadG?: number;
  missileGuidanceTimeS: number;
  explosiveType: AamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg?: number;
}

export interface IRAamMissile extends BaseAam {
  category: "IR";
  family: "IR";
  variant: "IR";
  guidanceCage: IRAam;
  aspect: IRAamAspect;
  launchRangeKm: number;
}

export interface IRAamRearAspectMissile extends IRAamMissile {
  guidance: "IR"
  aspect: "Rear-aspect";
  lockRangeRearAspectKm: number;
}

export interface IRAamAllAspectsMissile extends IRAamMissile {
  guidance: "IR";
  aspect: "All-aspects";
  lockRangeRearAspectKm: number;
  lockRangeAllAspectsKm: number;
  IRCCM: boolean;
}

export interface SARHAamMissile extends BaseAam {
  category: "Radar";
  family: "SARH";
  variant: SARHAam;
  guidance: SARHAam;
  band: RadarAamBand;
  shootDown?: RadarAamShootDown;
  lockRangeKm?: number;
  launchRangeKm: number;
}

export interface ARHAamMissile extends BaseAam {
  category: "Radar";
  family: "ARH";
  variant: ARHAam;
  guidance: ARHAam;
  band: RadarAamBand;
  shootDown: RadarAamShootDown;
  lockRangeKm: number;
  launchRangeKm: number;
}

export interface BeamRidingAamMissile extends BaseAam {
  category: "Beam-Riding (SACLOS)";
  family: "Beam-Riding (SACLOS)";
  variant: BeamRidingAam;
  guidance: BeamRidingAamGuidance;
  launchRangeKm: number;
}

export interface CommandGuidedAamMissile extends BaseAam {
  category: "Command-Guided (MCLOS)";
  family: "Command-Guided (MCLOS)";
  variant: CommandGuidedAam;
  guidance: CommandGuidedAamGuidance;
}

export type IRAamMissiles = IRAamRearAspectMissile | IRAamAllAspectsMissile;
export type AamMissile = IRAamMissiles | SARHAamMissile | ARHAamMissile | BeamRidingAamMissile | CommandGuidedAamMissile;

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

export type BaseAamVehicle = {
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
    icon?: AamIconNames;
  }
}[TechTree]

export type AamDefinition = AamMissile & {
  vehicles: BaseAamVehicle[];
}