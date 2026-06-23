/* SPAA SAMS */
export type Sam = "IR" | "ARH" | "Semi-Automatic" | "Beam riding";

export type IRSam = "IR" | "IR+IOG" | "IR+IOG+DL" | "IR+IOG+GNSS+DL";
export type ARHSam = "ARH+IOG+DL";
export type SemiAutomaticSam = "Semi-Automatic (SACLOS)";
export type BeamRidingSam = "Beam riding";

export type SamMissileVariant = IRSam | ARHSam | SemiAutomaticSam | BeamRidingSam;

export type IRSamAspect = "All-aspects";

export type SamExplosiveType = "PBXN-110" | "Composition B";

export interface BaseSam {
  id: string;
  designation: string;
  family: Sam;
}

export interface IRSamMissile extends BaseSam {
  family: "IR";
  variant: IRSam;
}

export interface ARHSamMissile extends BaseSam {
  family: "ARH";
  variant: ARHSam;
}

export interface SemiAutomaticSamMissile extends BaseSam {
  family: "Semi-Automatic";
  variant: SemiAutomaticSam;
}

export interface BeamRidingSamMissile extends BaseSam {
  family: "Beam riding";
  variant: BeamRidingSam;
}

export type SamMissile = IRSamMissile | ARHSamMissile | SemiAutomaticSamMissile | BeamRidingSamMissile;

export interface BaseSamPerformance {
  id: string;
  vehicleId: string;
  vehicleName: string;
  caliberMm: number;
  projectileMassKg: number;
  launchRangeKm: number;
  maximumSpeedMs: number;
  missileGuidanceTimeS: number;
  explosiveType: SamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
}

export interface IRSamPerformance extends BaseSamPerformance {
  guidance: IRSam;
  aspect: IRSamAspect;
  lockRangeRearAspectKm: number;
  lockRangeAllAspectKm: number;
  IRCCM: boolean;
  maximumOverloadG: number;

  penetrationMm?: never;
  fuzeDelayM?: never;
  fuzeSensitivityMm?: never;
}

export interface ARHSamPerformance extends BaseSamPerformance {
  guidance: ARHSam;

  penetrationMm?: never;
  fuzeDelayM?: never;
  fuzeSensitivityMm?: never;
  aspect?: never;
  lockRangeRearAspectKm?: never;
  lockRangeAllAspectKm?: never;
  IRCCM?: never;
  maximumOverloadG?: never;
}

export interface SemiAutomaticSamPerformance extends BaseSamPerformance {
  guidance: SemiAutomaticSam;
  penetrationMm: number;
  fuzeDelayM: number;
  fuzeSensitivityMm: number;

  IRCCM?: Boolean;
  aspect?: never;
  lockRangeRearAspectKm?: never;
  lockRangeAllAspectKm?: never;
  maximumOverloadG?: never;
}

export interface BeamRidingSamPerformance extends BaseSamPerformance {
  guidance: BeamRidingSam;

  penetrationMm?: never;
  fuzeDelayM?: never;
  fuzeSensitivityMm?: never;
  aspect?: never;
  lockRangeRearAspectKm?: never;
  lockRangeAllAspectKm?: never;
  IRCCM?: never;
  maximumOverloadG?: never;
}

export type SamPerformance = IRSamPerformance | ARHSamPerformance | SemiAutomaticSamPerformance | BeamRidingSamPerformance;

export type IRSamDefinition = IRSamMissile & {
  performances: IRSamPerformance[];
};

export type ARHSamDefinition = ARHSamMissile & {
  performances: ARHSamPerformance[];
};

export type SemiAutomaticSamDefinition = SemiAutomaticSamMissile & {
  performances: SemiAutomaticSamPerformance[];
};

export type BeamRidingSamDefinition = BeamRidingSamMissile & {
  performances: BeamRidingSamPerformance[];
};

export type SamDefinition = IRSamDefinition | ARHSamDefinition | SemiAutomaticSamDefinition | BeamRidingSamDefinition;
