import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"

export type Bomb = "Dumb" | "Guided";

export type DumbBomb = "Conventional" | "Incendiary";
export type GuidedBomb = "Conventional";

export type Guidance = "TV" | "Laser" | "GNSS" | "Laser+IOG+GNSS" | "IR+IOG+GNSS";

export type BombIcon = "guided-green" | "guided-brown" | "guided-blue";

export type BombExplosiveType = "Composition B" | "Comp. H6";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7" | "13.0" | "13.3" | "13.7" | "14.0" | "14.3" | "14.7";

export interface BaseBomb {
  id: string;
  designation: string;
  icon: BombIcon;
  category: Bomb;
  family: DumbBomb | GuidedBomb;
  projectileMassKg: number;
  explosiveType: BombExplosiveType;
  explosiveMassKg: number;
  tntEquivalent?: number;
}

export interface DumbBombInterface extends BaseBomb {
  category: "Dumb";
}

export interface GuidedBombInterface extends BaseBomb {
  category: "Guided";
  guidance: Guidance;
  guidanceTimeS: number;
}

export type BombInterface = DumbBombInterface | GuidedBombInterface;

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

export type BaseBombVehicle = {
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
    // icon?: AamIconNames;
  }
}[TechTree]

export type BombDefinition = BombInterface & {
  vehicles: BaseBombVehicle[];
}