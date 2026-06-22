/* SPAA SAMS */
export type Sam = "IR" | "ARH" | "Semi-Automatic" | "Beam riding";

export type SamIR = "IR" | "IR+IOG" | "IR+IOG+DL" | "IR+IOG+GNSS+DL";
export type SamARH = "ARH+IOG+DL";
export type SamSemiAutomatic = "Semi-Automatic (SACLOS)";
export type SamBeamRiding = "Beam riding";

export type SamVariant = SamIR | SamARH | SamSemiAutomatic | SamBeamRiding;

export type SamIRAspect = "All-aspects";

export type SamExplosiveType = "PBXN-110";

export interface BaseSam {
  id: string;
  designation: string;
  category: Sam;
}

export interface IRSamMissile extends BaseSam {
  category: "IR";
  variant: SamIR;
}

export interface ARHSamMissile extends BaseSam {
  category: "ARH";
  variant: SamARH;
}

export interface SemiAutomaticSamMissile extends BaseSam {
  category: "Semi-Automatic";
  variant: SamSemiAutomatic;
}

export interface BeamRidingSamMissile extends BaseSam {
  category: "Beam riding";
  variant: SamBeamRiding;
}

export type SamMissile = IRSamMissile | ARHSamMissile | SemiAutomaticSamMissile | BeamRidingSamMissile;

export interface SamMissilePerformance {
  id: string;
  vehicleId: string;
  vehicleName: string;
  guidance: SamVariant;
  caliberMm: number;
  projectileMassKg: number;
  explosiveType: SamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
  guidanceTimeS: number;
  maximumOverloadG: number;
  maximumSpeedMs: number;
  launchRangeKm: number;
  lockRangeKm?: number;
  aspect?: SamIRAspect;
  shootDown?: string;
  lockRangeInRearAspectKm?: number;
  lockRangeInAllAspectKm?: number;
  IRCCM?: true | false;
  fuzeDelayM?: number;
  fuzeSensitivityMm?: number;
  radarBand?: string;
}

export type SamMissileDefinition = SamMissile & {
  performances: SamMissilePerformance[];
}