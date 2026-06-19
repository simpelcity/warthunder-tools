export type Shell = "kinetic" | "chemical";

export type KineticShell = "solid-ap" | "he-filled-ap" | "sub-caliber-ap";
export type ChemicalShell = "high-explosive" | "heat" | "guided-missiles";

export type SolidAP = "ap" | "apc" | "apbc" | "apcbc";
export type HEFilledAP = "aphe" | "aphec" | "aphebc" | "aphecbc" | "ac" | "sap" | "schrapnel";
export type SubCaliberAP = "apcr" | "apds" | "apfsds";

export type HighExplosive = "he" | "he-tf" | "he-grenade" | "vog" | "rocket" | "hesh" | "smoke";
export type Heat = "heat" | "heat-fs" | "heatmp" | "heat-grenade";
export type GuidedMissiles = "atgm" | "atgm-ota" | "atgm-vt" | "atgm-tandem" | "atgm-he" | "atgm-ap" | "sam";

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
	category: "kinetic";
	family: KineticShell;
	variant: KineticShellVariant;
}

export interface ChemicalTankShell extends BaseTankShell {
	category: "chemical";
	family: ChemicalShell;
	variant: ChemicalShellVariant;
}

export type TankShell = KineticTankShell | ChemicalTankShell;

export interface TankShellPerformance {
	id: string;
	vehicleId: string;
	vehicleName: string;
	caliberMm?: number;
	velocityMs?: number;
	explosiveMassKg?: number;
	penetrationMm?: number;
	notes?: string;
}

export type TankShellDefinition = TankShell & {
	performances: TankShellPerformance[];
};

