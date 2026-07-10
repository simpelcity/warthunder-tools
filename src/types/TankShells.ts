/* TANK ROUNDS */
export type Shell = "Kinetic" | "Chemical";

export type KineticShell = "Solid-AP" | "HE-filled-AP" | "Sub-caliber-AP";
export type ChemicalShell = "High-Explosive" | "HEAT" | "Guided-Missiles";

export type SolidAP = "AP" | "APC" | "APBC" | "APCBC";
export type HEFilledAP = "APHE" | "APHEBC" | "AC" | "SAP" | "SAPCBC" | "SAPHEI" | "SAPHECBC";
export type SubCaliberAP = "APCR" | "APDS" | "APFSDS";

export type HighExplosive = "HE" | "HE-TF" | "HE-VT" | "HE-OR" | "HE-Grenade" | "VOG" | "Rocket" | "HESH" | "Smoke" | "Shrapnel" | "AHEAD";
export type Heat = "HEAT" | "HEATFS" | "HEAT MP" | "HEAT-Grenade";
export type GuidedMissiles = "ATGM" | "ATGM-OTA" | "ATGM-VT" | "ATGM-Tandem" | "ATGM-HE";

export type ShellExplosiveType = "TNT" | "Pentolite" | "Smoke composition" | "Exp. D" | "Composition B" | "Comp. A" | "A-IX-1" | "A-IX-2" | "PAX-3" | "CLX663" | "LX-14" | "Octol" | "Fp.02" | "H.5" | "Fp.02 and Np.10" | "PH-Salz and H.10" | "OKFOL" | "RDX/TNT" | "Amatol" | "PETN" | "Np.10" | "Hexal" | "H.10" | "Fp.60/40" | "Fp.10 and Np.10";

export type Guidance = "Semi-Automatic (SACLOS)" | "Beam riding" | "IR" | "Manual (MCLOS)";

export type Armor = "armor_vsmall" | "armor_small" | "armor_middle" | "armor_big";

export type Damage = "damage_small" | "damage" | "explosion_small" | "explosion_middle" | "explosion_big";

export type TechTree = "USA" | "Germany" | "USSR" | "Great Britain" | "Japan" | "China" | "Italy" | "France" | "Sweden" | "Israel";
export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7";

export type CountriesUSA = "USA" | "Iran" | "Turkey" | "Australia" | "Greece" | "Canada" | "Republic of Vietnam" | "Norway" | "Philippines" | "China" | "Great Britain" | "Israel";
export type CountriesGermany = "Germany" | "Poland" | "GDR" | "Canada" | "Lithuania" | "German Empire" | "Spain" | "Finland" | "FRG" | "Romania" | "South Africa" | "Switzerland" | "Argentina";
export type CountriesUSSR = "USSR" | "Cuba" | "Venezuela" | "Russia" | "Syria" | "Slovakia" | "Russian Empire" | "Czech Republic" | "Serbia" | "Kazakhstan";
export type CountriesGreatBritain = "Great Britain" | "South Africa (modern)" | "India" | "Canada (modern)" | "Jordan" | "South Africa" | "Canada" | "New Zealand" | "Ireland" | "Poland" | "Australia" | "Kuwait";
export type CountriesJapan = "Japan" | "Indonesia" | "Malaysia" | "Thailand";
export type CountriesChina = "China" | "Pakistan" | "Vietnam" | "North Korea" | "Bangladesh";
export type CountriesItaly = "Italy" | "Kingdom of Italy" | "Hungary" | "Romania" | "Turkey" | "Spain" | "Hungary (modern)" | "Oman" | "Portugal" | "Brazil";
export type CountriesFrance = "France" | "Finland" | "Belgium" | "Austria" | "Netherlands";
export type CountriesSweden = "Sweden" | "Denmark" | "Finland" | "Austria" | "Norway";
export type CountriesIsrael = "Israel" | "Singapore" | "Colombia";
export type Countries = CountriesUSA | CountriesGermany | CountriesUSSR | CountriesGreatBritain | CountriesJapan | CountriesChina | CountriesItaly | CountriesFrance | CountriesSweden | CountriesIsrael;

export type KineticShellVariant = SolidAP | HEFilledAP | SubCaliberAP;
export type ChemicalShellVariant = HighExplosive | Heat | GuidedMissiles;
export type TankShellVariant = KineticShellVariant | ChemicalShellVariant;

export interface BaseTankShell {
	id: string;
	designation: string;
	category: Shell;
	family: KineticShell | ChemicalShell;
	variant: TankShellVariant;
	damage?: Damage | null;
	armor?: Armor | null;
}

export interface KineticTankShell extends BaseTankShell {
	category: "Kinetic";
	family: KineticShell;
	variant: KineticShellVariant;
}

export interface SolidAPTankShell extends KineticTankShell {
  category: "Kinetic",
  family: "Solid-AP",
  variant: SolidAP;
}

export interface HEFilledAPTankShell extends KineticTankShell {
  category: "Kinetic",
  family: "HE-filled-AP",
  variant: HEFilledAP;
}

export interface SubCaliberAPTankShell extends KineticTankShell {
  category: "Kinetic",
  family: "Sub-caliber-AP",
  variant: SubCaliberAP;
}

export interface ChemicalTankShell extends BaseTankShell {
	category: "Chemical";
	family: ChemicalShell;
	variant: ChemicalShellVariant;
}

export interface HighExplosiveTankShell extends ChemicalTankShell {
  category: "Chemical";
  family: "High-Explosive";
  variant: HighExplosive;
}

export interface HEATTankShell extends ChemicalTankShell {
  category: "Chemical";
  family: "HEAT";
  variant: Heat;
}

export interface GuidedMissilesTankShell extends ChemicalTankShell {
  category: "Chemical";
  family: "Guided-Missiles";
  variant: GuidedMissiles;
}

export type KineticTankShellVariant = SolidAPTankShell | HEFilledAPTankShell | SubCaliberAPTankShell;
export type ChemicalTankShellVariant = HighExplosiveTankShell | HEATTankShell | GuidedMissilesTankShell;
export type TankShell = KineticTankShellVariant | ChemicalTankShellVariant;

export interface TankShellPerformance {
  id: string;
	vehicleId: string;
	vehicleName: string;
  vehicleTechTree: TechTree;
  vehicleOperator?: Countries;
  vehicleRank: Rank;
  vehicleBr: {
    AB?: BR;
    RB: BR;
    SB?: BR;
  }
  damage?: Damage | null;
  armor?: Armor | null;
	penetrationMm: number;
	caliberMm: number;
  projectileMassKg: number;
	muzzleVelocityMs?: number;
  fuzeDelayM?: number;
  fuzeSensitivityMm?: number;
  guidance?: Guidance;
  IRCCM?: boolean;
  launchRangeKm?: number;
  maximumSpeedMs?: number;
  missileGuidanceTimeS?: number;
	explosiveMassKg?: number;
  explosiveType?: ShellExplosiveType;
	tntEquivalentKg?: number;
  smokeRadiusM?: number;
  smokeScreeningTimeS?: number;
  smokeHoldTimeS?: number;
}

export interface USATankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "USA";
  vehicleOperator?: CountriesUSA;
}

export interface GermanyTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Germany";
  vehicleOperator?: CountriesGermany;
}

export interface USSRTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "USSR";
  vehicleOperator?: CountriesUSSR;
}

export interface GreatBritainTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Great Britain";
  vehicleOperator?: CountriesGreatBritain;
}

export interface JapanTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Japan";
  vehicleOperator?: CountriesJapan;
}

export interface ChinaTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "China";
  vehicleOperator?: CountriesChina;
}

export interface ItalyTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Italy";
  vehicleOperator?: CountriesItaly;
}

export interface FranceTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "France";
  vehicleOperator?: CountriesFrance;
}

export interface SwedenTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Sweden";
  vehicleOperator?: CountriesSweden;
}

export interface IsraelTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Israel";
  vehicleOperator?: CountriesIsrael;
}

export type USATankShellDefinition = TankShell & {
  performances: USATankShellPerformance[];
}

export type GermanyTankShellDefinition = TankShell & {
  performances: GermanyTankShellPerformance[];
}

export type USSRTankShellDefinition = TankShell & {
  performances: USSRTankShellPerformance[];
}

export type GreatBritainTankShellDefinition = TankShell & {
  performances: GreatBritainTankShellPerformance[];
}

export type JapanTankShellDefinition = TankShell & {
  performances: JapanTankShellPerformance[];
}

export type ChinaTankShellDefinition = TankShell & {
  performances: ChinaTankShellPerformance[];
}

export type ItalyTankShellDefinition = TankShell & {
  performances: ItalyTankShellPerformance[];
}

export type FranceTankShellDefinition = TankShell & {
  performances: FranceTankShellPerformance[];
}

export type SwedenTankShellDefinition = TankShell & {
  performances: SwedenTankShellPerformance[];
}

export type IsraelTankShellDefinition = TankShell & {
  performances: IsraelTankShellPerformance[];
}

export type TankShellDefinition = TankShell & {
  performances: TankShellPerformance[];
};
