/* TANK ROUNDS */
export type Shell = "Kinetic" | "Chemical";

export type KineticShell = "Solid-AP" | "HE-filled-AP" | "Sub-caliber-AP";
export type ChemicalShell = "High-Explosive" | "HEAT" | "Guided-Missiles";

export type SolidAP = "AP" | "APC" | "APBC" | "APCBC";
export type HEFilledAP = "APHE" | "APHEC" | "APHEBC" | "APHECBC" | "AC" | "SAP" | "Schrapnel";
export type SubCaliberAP = "APCR" | "APDS" | "APFSDS";

export type HighExplosive = "HE" | "HE-TF" | "HE-Grenade" | "VOG" | "Rocket" | "HESH" | "Smoke";
export type Heat = "HEAT" | "HEAT-FS" | "HEATMP" | "HEAT-Grenade";
export type GuidedMissiles = "ATGM" | "ATGM-OTA" | "ATGM-VT" | "ATGM-Tandem" | "ATGM-HE" | "ATGM-AP";

export type explosiveType = "TNT" | "Pentolite" | "Smoke composition" | "Exp. D" | "Composition B" | "Comp. A"

export type KineticShellVariant = SolidAP | HEFilledAP | SubCaliberAP;
export type ChemicalShellVariant = HighExplosive | Heat | GuidedMissiles;
export type TankShellVariant = KineticShellVariant | ChemicalShellVariant;

export interface BaseTankShell {
	id: string;
	designation: string;
	category: Shell;
	family: KineticShell | ChemicalShell;
	variant: TankShellVariant;
}

export interface KineticTankShell extends BaseTankShell {
	category: "Kinetic";
	family: KineticShell;
	variant: KineticShellVariant;
}

export interface ChemicalTankShell extends BaseTankShell {
	category: "Chemical";
	family: ChemicalShell;
	variant: ChemicalShellVariant;
}

export type TankShell = KineticTankShell | ChemicalTankShell;

export interface TankShellPerformance {
	id: string;
	vehicleId: string;
	vehicleName: string;
	caliberMm: number;
	penetrationMm: number;
	velocityMs: number;
  projectileMassKg: number;
  fuzeDelayM?: number;
  fuzeSensitivityMm?: number;
	explosiveMassKg?: number;
  explosiveType?: explosiveType;
	tntEquivalentKg?: number;
}

export type TankShellDefinition = TankShell & {
	performances: TankShellPerformance[];
};
