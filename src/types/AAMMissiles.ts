/* Aircraft AAMS */
export type Aam = "IR" | "Radar" | "Beam-Riding (SACLOS)" | "Command-Guided (MCLOS)";

export type IRAam = "Caged" | "Uncaged";
export type IRAamAspect = "Rear-aspect" | "All-aspects";

export type RadarAam = "SARH" | "ARH";
export type BeamRidingAam = "Beam-Riding (SACLOS)";
export type CommandGuidedAam = "Command-Guided (MCLOS)";

export type SARHAam = "SARH" | "SARH+IOG" | "SARH+IOG+DL";
export type ARHAam = "ARH+IOG+DL" | "ARH+IOG+GNSS+DL";

export type AamExplosiveType = "PBXN-102" | "PBXN-3" | "PBXN-4" | "PBXN-110" | "HBX";

export type IRAamVariant = IRAam | IRAamAspect;
export type RadarAamVariant = SARHAam | ARHAam;

export type AamMissileVariant = IRAamVariant | RadarAamVariant | BeamRidingAam | CommandGuidedAam;

export interface BaseAam {
  id: string;
  designation: string;
  family: Aam;
}

export interface IRAamMissile extends BaseAam {
  family: "IR";
  variant: "IR";
  guidanceCage: IRAam;
  aspect: IRAamAspect;
}

export interface SARHAamMissile extends BaseAam {
  family: "Radar";
  variant: SARHAam;
}

export interface ARHAamMissile extends BaseAam {
  family: "Radar";
  variant: ARHAam;
}

export interface BeamRidingAamMissile extends BaseAam {
  family: "Beam-Riding (SACLOS)";
  variant: BeamRidingAam;
}

export interface CommandGuidedAamMissile extends BaseAam {
  family: "Command-Guided (MCLOS)";
  variant: CommandGuidedAam;
}

export interface BaseAamPerformance {
  id: string;
  vehicleId: string;
  vehicleName: string;
  projectileMassKg: number;
  launchRangeKm: number;
  maximumSpeedMach: number;
  maximumOverloadG: number;
  missileGuidanceTimeS: number;
  explosiveType: AamExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg: number;
}

export interface IRAamRearAspectPerformance extends BaseAamPerformance {
  guidance: "IR";
  aspect: "Rear-aspect";
  lockRangeRearAspectKm: number;
  lockRangeAllAspectKm?: never;
}

export interface IRAamAllAspectPerformance extends BaseAamPerformance {
  guidance: "IR";
  aspect: "All-aspects";
  lockRangeRearAspectKm: number;
  lockRangeAllAspectKm: number;
}

export type IRAamPerformance = IRAamRearAspectPerformance | IRAamAllAspectPerformance;
