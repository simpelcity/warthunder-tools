/* SPAA SAMS */
export type Sam = "IR" | "ARH" | "Semi-Automatic" | "Beam riding";

export type IRSam = "IR" | "IR+IOG" | "IR+IOG+DL" | "IR+IOG+GNSS+DL";
export type ARHSam = "ARH+IOG+DL";
export type SemiAutomaticSam = "Semi-Automatic (SACLOS)";
export type BeamRidingSam = "Beam riding";

export type SamMissileVariant = IRSam | ARHSam | SemiAutomaticSam | BeamRidingSam;

export type IRSamAspect = "All-aspects";

export type SamExplosiveType = "PBXN-110" | "Composition B" | "A-IX-2" | "HTA";

export type ARHBand = "J";
export type ARHShootDown = "All-aspects";

export type TechTree = "USA" | "Germany" | "USSR" | "Great Britain" | "Japan" | "China" | "Italy" | "France" | "Sweden" | "Israel";
export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7";

export type CountriesUSA = "USA" | "Iran" | "Turkey" | "Australia" | "Greece" | "Canada" | "Republic of Vietnam" | "Norway" | "Philippines";
export type CountriesGermany = "Germany" | "Poland" | "GDR" | "Canada" | "Lithuania" | "German Empire" | "Spain" | "Finland" | "Germany (modern)" | "Romania" | "South Africa" | "Switzerland" | "Argentina";
export type CountriesUSSR = "USSR" | "Cuba" | "Venezuela" | "Russia" | "Syria" | "Slovakia" | "Russian Empire" | "Czech Republic" | "Serbia" | "Kazakhstan";
export type CountriesGreatBritain = "Great Britain" | "South Africa (modern)" | "India" | "Canada (modern)" | "Jordan" | "South Africa" | "Canada" | "New Zealand" | "Ireland" | "Poland" | "Australia" | "Kuwait";
export type CountriesJapan = "Japan" | "Indonesia" | "Malaysia" | "Thailand";
export type CountriesChina = "China" | "Pakistan" | "Vietnam" | "North Korea" | "Bangladesh";
export type CountriesItaly = "Italy" | "Kingdom of Italy" | "Hungary" | "Romania" | "Turkey" | "Spain" | "Hungary (modern)" | "Oman" | "Portugal" | "Brazil";
export type CountriesFrance = "France" | "Finland" | "Belgium" | "Austria" | "Netherlands";
export type CountriesSweden = "Sweden" | "Denmark" | "Finland" | "Austria" | "Norway";
export type CountriesIsrael = "Israel" | "Singapore" | "Colombia";
export type Countries = CountriesUSA | CountriesGermany | CountriesUSSR | CountriesGreatBritain | CountriesJapan | CountriesChina | CountriesItaly | CountriesFrance | CountriesSweden | CountriesIsrael;

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

export interface BaseSamVehicle {
  id: string;
  vehicleId: string;
  vehicleName: string;
  vehicleTechTree?: TechTree;
  vehicleOperator?: Countries;
  vehicleRank?: Rank;
  vehicleBr?: BR;
  vehicleBrAB?: BR;
  vehicleBrSB?: BR;
}

export interface USASamVehicle extends BaseSamVehicle {
  vehicleTechTree: "USA";
  vehicleOperator?: CountriesUSA;
}

export interface GermanySamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Germany";
  vehicleOperator?: CountriesGermany;
}

export interface USSRSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "USSR";
  vehicleOperator?: CountriesUSSR;
}

export interface GreatBritainSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Great Britain";
  vehicleOperator?: CountriesGreatBritain;
}

export interface JapanSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Japan";
  vehicleOperator?: CountriesJapan;
}

export interface ChinaSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "China";
  vehicleOperator?: CountriesChina;
}

export interface ItalySamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Italy";
  vehicleOperator?: CountriesItaly;
}

export interface FranceSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "France";
  vehicleOperator?: CountriesFrance;
}

export interface SwedenSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Sweden";
  vehicleOperator?: CountriesSweden;
}

export interface IsraelSamVehicle extends BaseSamVehicle {
  vehicleTechTree: "Israel";
  vehicleOperator?: CountriesIsrael;
}

export type USASamDefinition = SamMissile & {
  vehicles: USASamVehicle[];
}

export type GermanySamDefinition = SamMissile & {
  vehicles: GermanySamVehicle[];
}

export type USSRSamDefinition = SamMissile & {
  vehicles: USSRSamVehicle[];
}

export type GreatBritainSamDefinition = SamMissile & {
  vehicles: GreatBritainSamVehicle[];
}

export type JapanSamDefinition = SamMissile & {
  vehicles: JapanSamVehicle[];
}

export type ChinaSamDefinition = SamMissile & {
  vehicles: ChinaSamVehicle[];
}

export type ItalySamDefinition = SamMissile & {
  vehicles: ItalySamVehicle[];
}

export type FranceSamDefinition = SamMissile & {
  vehicles: FranceSamVehicle[];
}

export type SwedenSamDefinition = SamMissile & {
  vehicles: SwedenSamVehicle[];
}

export type IsraelSamDefinition = SamMissile & {
  vehicles: IsraelSamVehicle[];
}

export type SamDefinition =
  | USASamDefinition
  | GermanySamDefinition
  | USSRSamDefinition
  | GreatBritainSamDefinition
  | JapanSamDefinition
  | ChinaSamDefinition
  | ItalySamDefinition
  | FranceSamDefinition
  | SwedenSamDefinition
  | IsraelSamDefinition;
