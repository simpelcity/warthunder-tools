import type { TechTree, CountriesUSA, CountriesUSSR, CountriesItaly, CountriesChina, CountriesJapan, CountriesFrance, CountriesIsrael, CountriesSweden, CountriesGermany, CountriesGreatBritain } from "@/types/Countries"

export type BeltBulletNames = "API-T" | "HEI-T" | "APDS" | "HEFI-T" | "HVAP-T" | "APHE" | "FI-T" | "AP-T" | "HEF-T" | "HVAP" | "AP-I";

export type Rank = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII";
export type BR = "1.0" | "1.3" | "1.7" | "2.0" | "2.3" | "2.7" | "3.0" | "3.3" | "3.7" | "4.0" | "4.3" | "4.7" | "5.0" | "5.3" | "5.7" | "6.0" | "6.3" | "6.7" | "7.0" | "7.3" | "7.7" | "8.0" | "8.3" | "8.7" | "9.0" | "9.3" | "9.7" | "10.0" | "10.3" | "10.7" | "11.0" | "11.3" | "11.7" | "12.0" | "12.3" | "12.7";

export interface BaseBelt {
  id: string;
  designation: string;
  belt: BeltBulletNames[];
  penetrationMm: number;
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

export type BaseBeltVehicle = {
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

export type BeltDefinition = BaseBelt & {
  vehicles: BaseBeltVehicle[];
}