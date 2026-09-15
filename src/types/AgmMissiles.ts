/* Aircraft ARMS */
import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"

export type Agm = "IR" | "Manual" | "Laser" | "TV";

export type IRAgm = "IR" | "IR+IOG+GNSS";
export type ManualAgm = "Manual";
export type LaserAgm = "Laser" | "Laser+IOG+GNSS";
export type TVAgm = "TV" | "TV+IOG";

export type AgmMissileVariant = IRAgm | "Manual" | LaserAgm | TVAgm;

export type AgmExplosiveType = "Comp.H6" | "TNT" | "Composition B" | "PBX(AF)-108" | "PBXN-3";

export type AgmWarhead = "HE";

export type AgmIconNames = "agm-blue" | "agm-green" | "agm-green-1" | "agm-yellow" | "agm-orange" | "agm-orange-1" | "agm-yellow-3" | "agm-orange-bomb" | "agm-green-bomb" | "agm-grey-bomb";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7" | "13.0" | "13.3" | "13.7" | "14.0" | "14.3" | "14.7";

export interface BaseAgm {
  id: string;
  designation: string;
  category: Agm;
  family: AgmMissileVariant;
  icon: AgmIconNames;
  projectileMassKg: number;
  guidance: AgmMissileVariant;
  lockRangeKm?: number;
  launchRangeKm?: number;
  maximumSpeedMach?: number;
  maximumSpeedMs?: number;
  missileGuidanceTimeS: number;
  explosiveType: AgmExplosiveType;
  explosiveMassKg: number;
  tntEquivalentKg?: number;
  warhead?: AgmWarhead;
}

export type CountriesByTechTree = {
  USA: CountriesUSA;
  Germany: CountriesGermany;
  USSR: CountriesUSSR;
  "Great Britain": CountriesGreatBritain;
  Japan: CountriesJapan;
  China: CountriesChina;
  Italy: CountriesItaly;
  France: CountriesFrance;
  Sweden: CountriesSweden;
  Israel: CountriesIsrael;
}

export type BaseAgmVehicle = {
  [T in TechTree]: {
    id: string;
    vehicleId: string;
    vehicleName: string;
    vehicleTechTree: T;
    vehicleOperator?: CountriesByTechTree[T];
    vehicleRank: Rank;
    vehicleBr: {
      AB?: BR;
      RB: BR;
      SB?: BR;
    };
    icon?: AgmIconNames;
  }
}[TechTree]

export type AgmDefinition = BaseAgm & {
  vehicles: BaseAgmVehicle[];
}
