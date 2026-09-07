/* NATO reporting names for Soviet/Russian and Chinese-derived combat aircraft, keyed by exact vehicleName as it appears in the data. */
/* A tuple value is [nickname, rawTrailingSuffix, displaySuffix?]: rawTrailingSuffix must match the actual end of vehicleName so it can be split off; displaySuffix (defaults to rawTrailingSuffix) is what's rendered after the nickname. */
/* A { full } value fully replaces the rendered name, for cases where the base designation itself needs to change. */

const NATO_REPORTING_NAMES: Record<string, string | [string, string, string?] | { full: string }> = {
  "▄F-14A IRIAF": ["Tomcat", "IRIAF"],
  "F-14A Early": ["Tomcat", "Early", ""],
  "F-14B": { full: "F-14B(U) Tomcat" },
  "F-14D": "Super Tomcat",

  "A-10A": "Thunderbolt II (Early)",
  "A-10A Late": ["Thunderbolt II", "Late", "(Late)"],
  "A-10C": "Thunderbolt II",

  "A-4B": "Skyhawk",
  "A-4E Early": ["Skyhawk", "Early", "(Early)"],
  "Ayit": { full: "A-4N Skyhawk II (Ayit)" },

  "A-6E TRAM": "Intruder",

  "A-7D": "Corsair II",
  "A-7E": "Corsair II",
  "A-7K": "Corsair II",
  "▄A-7E": "Corsair II",

  "AV-8A": "Harrier",
  "AV-8B (NA)": "Harrier",
  "AV-8B Plus": "Harrier",
  "AV-8C": "Harrier",
  "▄AV-8S": "Matador (Early)",
  "▄AV-8S Late": ["Matador", "Late", "(Late)"],
  "▄AV-8B Plus": "Harrier",

  "F-100D": "Super Sabre",
  "◄CL-13B Mk.6": "Sabre",
  "F-86F-40 ▅": { full: "▅F-86F-40 Sabre" },
  "F-86F-40 JASDF▅": { full: "▅F-86F-40 JASDF Sabre" },
  "␗F-100A": "Super Sabre",
  "␗F-100F": "Super Sabre",
  "␗F-86F-40": "Sabre",
  "▄F-86K": "Sabre Dog",
  "▄F-100D": "Super Sabre",

  "F-104A": "Starfighter",
  "F-104C": "Starfighter",
  "◄F-104G": "Starfighter",
  "F-104J": "Starfighter",
  "␗F-104A": "Starfighter",
  "␗F-104G": "Starfighter",
  "▄F-104G": "Starfighter",
  "▄F-104S TAF": "Starfighter",
  "F-104S": "Starfighter",
  "F-104S.ASA": "Starfighter",

  "F-105D": "Thunderchief",

  "F-106A": "Delta Dart",

  "F-111A": "Aardvark",
  "F-111F": "Aardvark",
  "F-111C": "Aardvark",

  "F-15A": "Eagle",
  "F-15C MSIP II": "Eagle",
  "F-15E": "Strike Eagle",
  "F-15J": "Peace Egle",
  "F-15J(M)": { full: "F-15J MSIP II Peace Eagle" },

  "F-16A": "Block 10 Fighting Falcon",
  "F-16A ADF": { full: "F-16A Block 15 ADF Fighting Falcon" },
  "F-16CM": { full: "F-16CJ Block 50 Fighting Falcon" },
  "F-16CM PoBIT": { full: "F-16CM Block 52 PoBIT Fighting Falcon" },
  "▄F-16A OCU": { full: "▄F-16A Block 15 OCU (RTAF) Fighting Falcon" },
  "F-16AJ": "Block 10 Fighting Falcon",
  "␗F-16A MLU": { full: "␗F-16A Block 20 MLU Fighting Falcon" },
  "␗F-16V": "Block 20 Fighting Falcon",
  "▄F-16A ADF": { full: "▄F-16A Block 15 ADF Fighting Falcon" },
  "▄F-16A": "Block 15 Fighting Falcon",
  "▄F-16AM": "Block 15 MLU Fighting Falcon",
  "◘F-16A": "Block 5 Fighting Falcon",
  "◘F-16AM": "Block 20 MLU Fighting Falcon",
  "◢F-16A": "Block 10 Fighting Falcon",
  "◢F-16AM": "Block 20 MLU Fighting Falcon",

  "F-20A": "Tigershark",

  "F-5A": "Freedom Fighter",
  "▄F-5A": "Freedom Fighter",
  "␗F-5A": "Freedom Fighter",
  "◘NF-5A": "Freedom Fighter",

  "F-5C": "Skoshi Tiger",
  "F-5E": "Tiger II",
  "F11F-1": "Tiger",
  "◌F-5E": "Tiger II",

  "◢F-5A(G)": "Tiger-PAWS",

  "▄F-5T SCU": { full: "▄F-5T Tigris SCU" },
  "▄F-5TH TCU": { full: "▄F-5TH Super Tigris TCU" },

  "␗F-5E": "AIDC",

  "F-8E": "Crusader",
  "F8U-2": "Crusader II",
  "▄F-8E(FN)": "Crusader II",

  "F/A-18A": "Legacy Hornet",
  "F/A-18C Early": ["Legacy Hornet", "Early", "(Early)"],
  "F/A-18C Late": ["Legacy Hornet", "Late", "(Late)"],
  "F/A-18E" : "Block 2 Super Hornet",
  "◌F/A-18C": "Legacy Hornet",
  "◌F/A-18C Late": ["Legacy Hornet", "Late", "(Late)"],
  "▄AF/A-18A Late": "HUG 2.4 Legacy Hornet",
  "▄F/A-18A": "Legacy Hornet",
  "▄F/A-18F": "Block 2 Super Hornet",
  "CF-188A": "Legacy Hornet",
  "▄F/A-18D Late": ["Legacy Hornet", "Late", "(Late)"],
  "▄F-18C": "Legacy Hornet",
  "▄F/A-18C MLU 2": "Legacy Hornet",

  "F3H-2": "Demon",

  "F4D-1": "Skyray",

  "F9F-8": "Cougar",

  "FJ-4B": "Fury",
  "FJ-4B VMF-232": "Fury",

  "◄EF-2000": "Typhoon Tranche 2 (Block 10)",
  "◄EF-2000 (AESA)": { full: "◄EF-2000 Typhoon Tranche 4" },
  "Typhoon FGR.4": { full: "EF-2000 Typhoon FGR.4" },
  "Typhoon (AESA)": { full: "EF-2000 Typhoon FGR.4 (AESA)" },
  "F-2000A": "Typhoon",
  "F-2000A (AESA)": ["Typhoon", "(AESA)"],

  "◄F-4F Early": ["Phantom II", "Early", "(Early)"],
  "◄F-4F": "Phantom II",
  "◄F-4F KWS LV": { full: "◄F-4F (ICE) Phantom II" },
  "F-4EJ ADTW": "Phantom II",

  "▄JAS39C": "Gripen",
  "◔JAS39EBS HU C": "Gripen",
  "JAS39A": "Gripen",
  "JAS39C": "Gripen",
  "JAS39D": "Gripen",
  "JAS39E": "Gripen",

  "▄Alpha Jet TH": "(Phase 1)",

  "F-1": { full: "Mitsubishi F-1" },
  "T-2": { full: "Mitsubishi T-2" },
  "T-2 Early": { full: "Mitsubishi T-2 (Early)" },

  "F-2A": "Viper Zero",
  "F-2A ADTW": "Viper Zero",

  "J-10A": "Firebird",
  "J-10C": "Firebird",

  "JF-17": "Thunder",

  "AMX": "A-11 Ghibli",
  "AMX A-1A": "Ghibli",

  "AJ37": "Viggen",
  "AJS37": "Viggen",
  "AJS37 (Early)": ["Viggen", "(Early)"],
  "JA37": "Viggen",
  "JA37D": "Viggen",
  "JA37DI": "Viggen",
  "JA37DI F21": "Viggen",

  "J29F": "Tunnan",

  "J32B": "Lansen",

  "J35A": "Draken",
  "J35D": "Draken",
  "Saab F-35": "Draken",
  "Saab J35XS": "Draken",

  "Baz": { full: "F-15A Baz" },
  "Baz Meshupar": { full: "F-15C Baz Meshupar" },
  "F-16C Barak II": { full: "F-16C Block 40 Barak II" },
  "F-16D Barak II": { full: "F-16D Block 40 Barak II" },
  "F-16I Sufa": { full: "F-16I Block 52 Sufa" },
  "Kurnass": { full: "F-4E Kurnass" },
  "Kurnass 2000": { full: "F-4E Kurnass 2000" },
  "Netz": { full: "F-16A Block 10 Netz" },
  "Netz (Mod)": { full: "F-16A Block 10 Netz (Mod)" },

  "MiG-17": "Fresco-A",
  "MiG-17AS": "Fresco",
  "Shenyang F-5": "Fresco-C",

  "MiG-19PT": "Farmer",
  "J-6A": "Farmer",
  "▄F-6C": "Farmer",

  '◊MiG-21 "Lazur-M"': { full: "◊MiG-21bis Lazur-M Fishbed-L" },
  "MiG-21F-13": "Fishbed-C",
  "◄MiG-21 SPS-K": "Fishbed-F",
  "MiG-21PFM": "Fishbed-F",
  "MiG-21S (R-13-300)": "Fishbed-J",
  "◊MiG-21MF": "Fishbed-J",
  "◔MiG-21MF": "Fishbed-J",
  "Mig-21SMT": "Fishbed-K",
  "Mig-21bis": "Fishbed-L",
  "▄MiG-21bis": "Fishbed-L",
  "◊MiG-21bis-SAU": "Fishbed-N",
  "◔MiG-21bis-SAU": "Fishbed-N",
  "▄MiG-21 Bison": "Fishbed-N",
  "J-7D": "Fishcan",
  "J-7E": "Fishcan-D",
  "J-7II": "Fishcan-B",

  "Mig-23M": "Flogger-B",
  "◊MiG-23MF": "Flogger-B",
  "◊MiG-23MLA": "Flogger-G",
  "◔MiG-23MF": "Flogger-B",
  "Mig-23ML": "Flogger-G",
  "Mig-23MLD": "Flogger-K",

  "Mig-25PD": "Foxbat-E",

  "Mig-27K": "Flogger-J2",
  "Mig-27M": "Flogger-J",

  "MiG-29 (9-12)": "Fulcrum-A",
  "◊MiG-29 (9-12A)": "Fulcrum-A",
  "◔MiG-29 (9-12B)": "Fulcrum-A",
  "◄MiG-29G": ["(9-12G)", "Fulcrum-A"],
  "▄MiG-29N": ["(9-12SD)", "Fulcrum-E"],
  "MiG-29 Sniper": "Fulcrum-A",
  "MiG-29 (9-13)": "Fulcrum-C",
  "MiG-29SMT (9-19)": "Fulcrum-C",
  "MiG-29M (9-15)": "Fulcrum-E",
  "MiG-29KR (9-41R)": "Fulcrum-D",

  "Su-17M2": "Fitter-D",
  "Su-17M4": "Fitter-K",
  "Su-22M3": "Fitter-J",
  "◔Su-22M3": "Fitter-J",
  "◄Su-22M4 WTD61": "Fitter-K",
  "◊Su-22UM3K": "Fitter-G",

  "Su-24M": "Fencer-D",

  "Su-25": "Frogfoot",
  "Su-25BM": "Frogfoot",
  "Su-25K": "Frogfoot",
  "Su-25SM3": "Frogfoot",
  "Su-25T": "Frogfoot",
  "Su-39": "Frogfoot",

  "Su-27": { full: "Su-27S Flanker-B" },
  "Su-27SM": "Flanker-E",
  "J-11": "Flanker-B+",
  "J-11A": "Flanker-B+",
  "J-11B": "Flanker-L",

  "▄Su-30MK2 AMV": "Flanker-G",
  "␗Su-30MKK": "Flanker-G",
  "▄Su-30MKM": "Flanker-H",
  "Su-30SM": "Flanker-H",
  "Su-30SM2": "Flanker-H",

  "Su-33": "Flanker-D",
  "J-15T": "Flanker-X2",

  "Su-34": "Fullback",

  "Yak-38": "Forger",
  "Yak-38M": "Forger-A",
  "Yak-141": "Freestyle",

  "A-5C": "Fantan",

  "J-8B": "Finback-B",
  "J-8F": "Finback-C",

  "JH-7": "Flounder",
  "JH-7A": "Flounder",
  "JH-7A Prototype": "Flounder",
  "JH-7A2": "Flounder",
};

/* Overrides for vehicleIds whose vehicleName is shared by multiple operators (e.g. the same jet flown by different air forces), keyed by vehicleId so each operator gets its own label. Checked before NATO_REPORTING_NAMES. */
const NATO_REPORTING_NAMES_BY_ID: Record<string, string | [string, string, string?] | { full: string }> = {
  "saab_jas39c_south_africa": { full: "▄JAS39C (SAAF) Gripen" },
  "saab_jas39c_thailand": { full: "▄JAS39C (RTAF) Gripen" },
};

const resolveEntry = (vehicleName?: string | null, vehicleId?: string | null) => {
  if (vehicleId && NATO_REPORTING_NAMES_BY_ID[vehicleId]) return NATO_REPORTING_NAMES_BY_ID[vehicleId];
  if (!vehicleName) return undefined;
  return NATO_REPORTING_NAMES[vehicleName];
};

export const getNatoReportingName = (vehicleName?: string | null, vehicleId?: string | null): string | undefined => {
  const entry = resolveEntry(vehicleName, vehicleId);
  if (!entry) return undefined;
  if (Array.isArray(entry)) return entry[0];
  if (typeof entry === "object") return entry.full;
  return entry;
};

/* Formats a vehicle name with its NATO reporting name inserted in the right place (before any trailing operator suffix). */
export const formatVehicleNameWithNato = (vehicleName: string, vehicleId?: string | null): string => {
  const entry = resolveEntry(vehicleName, vehicleId);
  if (!entry) return vehicleName;
  if (typeof entry === "object" && !Array.isArray(entry)) return entry.full;
  if (Array.isArray(entry)) {
    const [nickname, rawSuffix, displaySuffix = rawSuffix] = entry;
    const base = vehicleName.slice(0, vehicleName.length - rawSuffix.length).trimEnd();
    return displaySuffix ? `${base} ${nickname} ${displaySuffix}` : `${base} ${nickname}`;
  }
  return `${vehicleName} ${entry}`;
};
