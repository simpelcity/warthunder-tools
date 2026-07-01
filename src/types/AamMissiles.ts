/* Aircraft AAMS */
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

export type AamExplosiveType = "PBXN-102" | "PBXN-3" | "PBXN-4" | "TGAF-5" | "PBXN-110" | "HBX" | "Nipolit" | "TNT";

export type RadarAamBand = "I" | "J";

export type RadarAamShootDown = "Front-aspect" | "All-aspects";

export type IRAamVariant = IRAam | IRAamAspect;
export type RadarAamVariant = SARHAam | ARHAam;

export type AamMissileVariant = "IR" | RadarAamVariant | BeamRidingAam | CommandGuidedAam;

export type AamIconNames = "ir-white" | "ir-orange" | "ir-green" | "ir-yellow" | "ir-large-white" | "ir-large-orange" | "radar-white" | "radar-orange" | "radar-yellow" | "radar-green" | "radar-blue" | "radar-red";

export type TechTree = "USA" | "Germany" | "USSR" | "Great Britain" | "Japan" | "China" | "Italy" | "France" | "Sweden" | "Israel";
export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7" | "13.0" | "13.3" | "13.7" | "14.0" | "14.3";

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

export interface BaseAam {
  id: string;
  designation: string;
  category: Aam;
  icon: AamIconNames;
  family: "IR" | RadarAam | BeamRidingAam | CommandGuidedAam;
  projectileMassKg: number;
  maximumSpeedMach: number;
  maximumOverloadG: number;
  missileGuidanceTimeS: number;
  explosiveType: AamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
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
  shootDown: RadarAamShootDown;
  lockRangeKm: number;
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

export interface BaseAamVehicle {
  id: string;
  vehicleId: string;
  vehicleName: string;
  vehicleTechTree?: TechTree;
  vehicleCountry?: Countries;
  vehicleRank?: Rank;
  vehicleBr?: BR;
  vehicleBrAB?: BR;
  vehicleBrSB?: BR;
  icon?: AamIconNames;
}

export interface USAAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "USA";
  vehicleCountry?: CountriesUSA;
}

export interface GermanyAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Germany";
  vehicleCountry?: CountriesGermany;
}

export interface USSRAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "USSR";
  vehicleCountry?: CountriesUSSR;
}

export interface GreatBritainAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Great Britain";
  vehicleCountry?: CountriesGreatBritain;
}

export interface JapanAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Japan";
  vehicleCountry?: CountriesJapan;
}

export interface ChinaAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "China";
  vehicleCountry?: CountriesChina;
}

export interface ItalyAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Italy";
  vehicleCountry?: CountriesItaly;
}

export interface FranceAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "France";
  vehicleCountry?: CountriesFrance;
}

export interface SwedenAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Sweden";
  vehicleCountry?: CountriesSweden;
}

export interface IsraelAamVehicle extends BaseAamVehicle {
  vehicleTechTree: "Israel";
  vehicleCountry?: CountriesIsrael;
}

export type USAAamDefinition = AamMissile & {
  vehicles: USAAamVehicle[];
}

export type GermanyAamDefinition = AamMissile & {
  vehicles: GermanyAamVehicle[];
}

export type USSRAamDefinition = AamMissile & {
  vehicles: USSRAamVehicle[];
}

export type GreatBritainAamDefinition = AamMissile & {
  vehicles: GreatBritainAamVehicle[];
}

export type JapanAamDefinition = AamMissile & {
  vehicles: JapanAamVehicle[];
}

export type ChinaAamDefinition = AamMissile & {
  vehicles: ChinaAamVehicle[];
}

export type ItalyAamDefinition = AamMissile & {
  vehicles: ItalyAamVehicle[];
}

export type FranceAamDefinition = AamMissile & {
  vehicles: FranceAamVehicle[];
}

export type SwedenAamDefinition = AamMissile & {
  vehicles: SwedenAamVehicle[];
}

export type IsraelAamDefinition = AamMissile & {
  vehicles: IsraelAamVehicle[];
}

export type AamDefinition =
  | USAAamDefinition
  | GermanyAamDefinition
  | USSRAamDefinition
  | GreatBritainAamDefinition
  | JapanAamDefinition
  | ChinaAamDefinition
  | ItalyAamDefinition
  | FranceAamDefinition
  | SwedenAamDefinition
  | IsraelAamDefinition;