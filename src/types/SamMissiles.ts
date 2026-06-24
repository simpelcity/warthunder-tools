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
}

export type IRSamDefinition = IRSamMissile & {
  vehicles: BaseSamVehicle[];
};

export type ARHSamDefinition = ARHSamMissile & {
  vehicles: BaseSamVehicle[];
};

export type SemiAutomaticSamDefinition = SemiAutomaticSamMissile & {
  vehicles: BaseSamVehicle[];
};

export type BeamRidingSamDefinition = BeamRidingSamMissile & {
  vehicles: BaseSamVehicle[];
};

export type SamDefinition = IRSamDefinition | ARHSamDefinition | SemiAutomaticSamDefinition | BeamRidingSamDefinition;
