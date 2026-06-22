/* TANK ROUNDS */
export type Shell = "Kinetic" | "Chemical";

export type KineticShell = "Solid-AP" | "HE-filled-AP" | "Sub-caliber-AP";
export type ChemicalShell = "High-Explosive" | "HEAT" | "Guided-Missiles";

export type SolidAP = "AP" | "APC" | "APBC" | "APCBC";
export type HEFilledAP = "APHE" | "APHEC" | "APHEBC" | "APHECBC" | "AC" | "SAP" | "SAPCBC" | "SAPHEI";
export type SubCaliberAP = "APCR" | "APDS" | "APFSDS";

export type HighExplosive = "HE" | "HE-TF" | "HE-VT" | "HE-OR" | "HE-Grenade" | "VOG" | "Rocket" | "HESH" | "Smoke" | "Shrapnel";
export type Heat = "HEAT" | "HEATFS" | "HEAT MP" | "HEAT-Grenade";
export type GuidedMissiles = "ATGM" | "ATGM-OTA" | "ATGM-VT" | "ATGM-Tandem" | "ATGM-HE";

export type explosiveType = "TNT" | "Pentolite" | "Smoke composition" | "Exp. D" | "Composition B" | "Comp. A" | "A-IX-1";

export type Armor = "armor_vsmall" | "armor_small" | "armor_middle" | "armor_big";

export type Damage = "damage_small" | "damage" | "explosion_small" | "explosion_middle" | "explosion_big";

export type TechTree = "USA" | "Germany" | "USSR" | "Great Britain" | "Japan" | "China" | "Italy" | "France" | "Sweden" | "Israel";

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
  vehicleTechTree?: TechTree;
	penetrationMm: number;
	caliberMm: number;
  projectileMassKg: number;
	muzzleVelocityMs: number;
  fuzeDelayM?: number;
  fuzeSensitivityMm?: number;
	explosiveMassKg?: number;
  explosiveType?: explosiveType;
	tntEquivalentKg?: number;
}

export type TankShellDefinition = TankShell & {
	performances: TankShellPerformance[];
};
