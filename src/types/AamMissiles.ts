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
}

export interface IRAamRearAspectMissile extends IRAamMissile {
  guidance: "IR"
  aspect: "Rear-aspect";
  lockRangeRearAspectKm: number;
  launchRangeKm: number;
}

export interface IRAamAllAspectsMissile extends IRAamMissile {
  guidance: "IR";
  aspect: "All-aspects";
  lockRangeRearAspectKm: number;
  lockRangeAllAspectsKm: number;
  IRCCM: boolean;
  launchRangeKm: number;
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
  family: "Beam-Riding (SACLOS)";
  variant: BeamRidingAam;
  guidance: BeamRidingAamGuidance;
}

export interface CommandGuidedAamMissile extends BaseAam {
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
}

export type IRAamRearAspectDefinition = IRAamRearAspectMissile & {
  aspect: "Rear-aspect";
  vehicles: BaseAamVehicle[];
};

export type IRAamAllAspectsDefinition = IRAamAllAspectsMissile & {
  aspect: "All-aspects";
  vehicles: BaseAamVehicle[];
}

export type SARHAamDefinition = SARHAamMissile & {
  vehicles: BaseAamVehicle[];
}

export type ARHAamDefinition = ARHAamMissile & {
  vehicles: BaseAamVehicle[];
}

export type AamDefinition = IRAamRearAspectDefinition | IRAamAllAspectsDefinition | SARHAamDefinition | ARHAamDefinition;