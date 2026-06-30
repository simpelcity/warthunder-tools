/* TANK ROUNDS */
export type Shell = "Kinetic" | "Chemical";

export type KineticShell = "Solid-AP" | "HE-filled-AP" | "Sub-caliber-AP";
export type ChemicalShell = "High-Explosive" | "HEAT" | "Guided-Missiles";

export type SolidAP = "AP" | "APC" | "APBC" | "APCBC";
export type HEFilledAP = "APHE" | "APHEBC" | "AC" | "SAP" | "SAPCBC" | "SAPHEI" | "SAPHECBC";
export type SubCaliberAP = "APCR" | "APDS" | "APFSDS";

export type HighExplosive = "HE" | "HE-TF" | "HE-VT" | "HE-OR" | "HE-Grenade" | "VOG" | "Rocket" | "HESH" | "Smoke" | "Shrapnel";
export type Heat = "HEAT" | "HEATFS" | "HEAT MP" | "HEAT-Grenade";
export type GuidedMissiles = "ATGM" | "ATGM-OTA" | "ATGM-VT" | "ATGM-Tandem" | "ATGM-HE";

export type ShellExplosiveType = "TNT" | "Pentolite" | "Smoke composition" | "Exp. D" | "Composition B" | "Comp. A" | "A-IX-1";

export type Armor = "armor_vsmall" | "armor_small" | "armor_middle" | "armor_big";

export type Damage = "damage_small" | "damage" | "explosion_small" | "explosion_middle" | "explosion_big";

export type TechTree = "USA" | "Germany" | "USSR" | "Great Britain" | "Japan" | "China" | "Italy" | "France" | "Sweden" | "Israel";
export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7";

export type CountriesUSA = "USA" | "Iran" | "Turkey" | "Australia" | "Greece" | "Canada" | "Republic of Vietnam" | "Norway" | "Philippines";
export type CountriesGermany = "Germany (old)" | "Poland" | "GDR" | "Canada" | "Lithuania" | "German Empire" | "Spain" | "Finland" | "Germany" | "Romania" | "South Africa" | "Switzerland" | "Argentina";
export type Countries = CountriesUSA | CountriesGermany;

export type KineticShellVariant = SolidAP | HEFilledAP | SubCaliberAP;
export type ChemicalShellVariant = HighExplosive | Heat | GuidedMissiles;
export type TankShellVariant = KineticShellVariant | ChemicalShellVariant;

export interface BaseTankShell {
	id: string;
	designation: string;
	category: Shell;
	family: KineticShell | ChemicalShell;
	variant: TankShellVariant;
	damage?: Damage;
	armor?: Armor;
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
  vehicleTechTree?: TechTree;
  vehicleRank?: Rank;
  vehicleBr?: BR;
  vehicleBrAB?: BR;
  vehicleBrSB?: BR;
	penetrationMm: number;
	caliberMm: number;
  projectileMassKg: number;
	muzzleVelocityMs: number;
  fuzeDelayM?: number;
  fuzeSensitivityMm?: number;
	explosiveMassKg?: number;
  explosiveType?: ShellExplosiveType;
	tntEquivalentKg?: number;
}

export interface USATankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "USA";
  vehicleCountry?: CountriesUSA;
}

export interface GermanyTankShellPerformance extends TankShellPerformance {
  vehicleTechTree: "Germany";
  vehicleCountry?: CountriesGermany;
}

export type USATankShellDefinition = TankShell & {
  performances: USATankShellPerformance[];
}

export type GermanyTankShellDefinition = TankShell & {
  performances: GermanyTankShellPerformance[];
}

export type TankShellDefinition = USATankShellDefinition | GermanyTankShellDefinition;
