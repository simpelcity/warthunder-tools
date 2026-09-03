import type { AamDefinition } from '@/types/AamMissiles'

export const aamMissiles: AamDefinition[] = [
  {
    id: "aim_9b",
    designation: "AIM-9B Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 72.6,
    lockRangeRearAspectKm: 4,
    launchRangeKm: 10,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9b_f9f-8",
        vehicleId: "f9f-8",
        vehicleName: "F9F-8",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          RB: "8.3"
        }
      },
      {
        id: "aim_9b_f3h-2",
        vehicleId: "f3h-2",
        vehicleName: "F3H-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_a_4b",
        vehicleId: "a_4b",
        vehicleName: "A-4B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_fj_4b",
        vehicleId: "fj_4b",
        vehicleName: "FJ-4B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f-104a",
        vehicleId: "f-104a",
        vehicleName: "F-104A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-104c",
        vehicleId: "f-104c",
        vehicleName: "F-104C",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-100d",
        vehicleId: "f-100d",
        vehicleName: "F-100D",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_a_4e_early",
        vehicleId: "a_4e_early",
        vehicleName: "A-4E Early",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_fj_4b_agm_12b",
        vehicleId: "fj_4b_agm_12b",
        vehicleName: "FJ-4B VMF-232",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f11f_1_late",
        vehicleId: "f11f_1_late",
        vehicleName: "F11F-1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f4d_1",
        vehicleId: "f4d_1",
        vehicleName: "F4D-1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-4c",
        vehicleId: "f-4c",
        vehicleName: "F-4C Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "aim_9b_f-8e",
        vehicleId: "f-8e",
        vehicleName: "F-8E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.3"
        }
      },
      {
        id: "aim_9b_f-105d",
        vehicleId: "f-105d",
        vehicleName: "F-105D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.0",
          SB: "10.0"
        }
      },
      {
        id: "aim_9b_f_111a",
        vehicleId: "f_111a",
        vehicleName: "F-111A",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "10.7",
          SB: "10.3"
        }
      },
      {
        id: "aim_9b_fiat_g91_r4_german",
        vehicleId: "fiat_g91_r4_german",
        vehicleName: "◄G.91 R/4",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f-86_cl_13b_mk6",
        vehicleId: "f-86_cl_13b_mk6",
        vehicleName: "◄CL-13B Mk.6",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-104g",
        vehicleId: "f-104g",
        vehicleName: "◄F-104G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9b_scimitar_f1",
        vehicleId: "scimitar_f1",
        vehicleName: "Scimitar F Mk.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        }
      },
      {
        id: "aim_9b_buccaneer_s2",
        vehicleId: "buccaneer_s2",
        vehicleName: "Buccaneer S.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "9.3",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-86f-40_japan_blue_impulse",
        vehicleId: "f-86f-40_japan_blue_impulse",
        vehicleName: "F-86F-40 JASDF▅",
        vehicleTechTree: "Japan",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-86f-40_japan",
        vehicleId: "f-86f-40_japan",
        vehicleName: "F-86F-40 ▅",
        vehicleTechTree: "Japan",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-104j",
        vehicleId: "f-104j",
        vehicleName: "F-104J",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.0"
        }
      },
      {
        id: "aim_9b_t2",
        vehicleId: "t2",
        vehicleName: "T2",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_t2_early",
        vehicleId: "t2_early",
        vehicleName: "T-2 Early",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-86f-40_china",
        vehicleId: "f-86f-40_china",
        vehicleName: "␗F-86F-40",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-100a_china",
        vehicleId: "f-100a_china",
        vehicleName: "␗F-100A",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f_100f_china",
        vehicleId: "f_100f_china",
        vehicleName: "␗F-100F",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-104a_china",
        vehicleId: "f-104a_china",
        vehicleName: "␗F-104A",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-104g_china",
        vehicleId: "f-104g_china",
        vehicleName: "␗F-104G",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.3"
        }
      },
      {
        id: "aim_9b_fiat_g91_r4",
        vehicleId: "fiat_g91_r4",
        vehicleName: "G.91 R/4",
        vehicleTechTree: "Italy",
        vehicleOperator: "Portugal",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f-86k_late_italy",
        vehicleId: "f-86k_late_italy",
        vehicleName: "▄F-86K",
        vehicleTechTree: "Italy",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_f-104g_italy",
        vehicleId: "f-104g_italy",
        vehicleName: "▄F-104G",
        vehicleTechTree: "Italy",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9b_fiat_g91_ys",
        vehicleId: "fiat_g91_ys",
        vehicleName: "G.91 YS",
        vehicleTechTree: "Italy",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "aim_7c",
    designation: "AIM-7C Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 172,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 12,
    launchRangeKm: 25,
    maximumSpeedMach: 3,
    maximumOverloadG: 15,
    missileGuidanceTimeS: 20,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.5,
    vehicles: [
      {
        id: "aim_7c_f3h-2",
        vehicleId: "f3h-2",
        vehicleName: "F3H-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "aim_9e",
    designation: "AIM-9E Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9e_f-100d",
        vehicleId: "f-100d",
        vehicleName: "F-100D",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9e_f-5e",
        vehicleId: "f-5e",
        vehicleName: "F-5E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9e_f-4c",
        vehicleId: "f-4c",
        vehicleName: "F-4C Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "aim_9e_f-105d",
        vehicleId: "f-105d",
        vehicleName: "F-105D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.0",
          SB: "10.0"
        }
      },
      {
        id: "aim_9e_f-5c",
        vehicleId: "f-5c",
        vehicleName: "F-5C",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9e_f-5a",
        vehicleId: "f-5a",
        vehicleName: "F-5A",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9e_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9e_a_7d",
        vehicleId: "a_7d",
        vehicleName: "A-7D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.0"
        }
      },
      {
        id: "aim_9e_f-104g",
        vehicleId: "f-104g",
        vehicleName: "◄F-104G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9e_f-4f",
        vehicleId: "f-4f",
        vehicleName: "◄F-4F Early",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9e_hunter_f9_rhodesia",
        vehicleId: "hunter_f9_rhodesia",
        vehicleName: "Hunter FGA.9",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9e_f-104j",
        vehicleId: "f-104j",
        vehicleName: "F-104J",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.0"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9e_t2",
        vehicleId: "t2",
        vehicleName: "T2",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9e_t2_early",
        vehicleId: "t2_early",
        vehicleName: "T-2 Early",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9e_f1",
        vehicleId: "f1",
        vehicleName: "F-1",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "10.0",
          SB: "10.3"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9e_f-4ej",
        vehicleId: "f-4ej",
        vehicleName: "F-4EJ Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9e_f-5a_thailand",
        vehicleId: "f-5a_thailand",
        vehicleName: "▄F-5A",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9e_f-4ej_adtw",
        vehicleId: "f-4ej_adtw",
        vehicleName: "F-4EJ ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9e_f-100a_china",
        vehicleId: "f-100a_china",
        vehicleName: "␗F-100A",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9e_f_100f_china",
        vehicleId: "f_100f_china",
        vehicleName: "␗F-100F",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9e_f-104g_china",
        vehicleId: "f-104g_china",
        vehicleName: "␗F-104G",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.3"
        }
      }
    ]
  },
  {
    id: "aim_9d",
    designation: "AIM-9D Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 88.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "HMX",
    explosiveMassKg: 3,
    tntEquivalentKg: 4.9,
    vehicles: [
      {
        id: "aim_9d_f8u-2",
        vehicleId: "f8u-2",
        vehicleName: "F8U-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.0"
        }
      },
      {
        id: "aim_9d_f-4j",
        vehicleId: "f-4j",
        vehicleName: "F-4J Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9d_a_7e",
        vehicleId: "a_7e",
        vehicleName: "A-7E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.3"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9d_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9d_f-4m_fgr2",
        vehicleId: "f-4m_fgr2",
        vehicleName: "Phantom FGR.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9d_f-4k",
        vehicleId: "f-4k",
        vehicleName: "Phantom FG.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9d_a_7e_thailand",
        vehicleId: "a_7e_thailand",
        vehicleName: "▄A-7E",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.3"
        },
        icon: "ir-white"
      }
    ]
  },
  {
    id: "aim_9g",
    designation: "AIM-9G Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 88.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-3",
    explosiveMassKg: 2.8,
    tntEquivalentKg: 3.6,
    vehicles: [
      {
        id: "aim_9g_av_8c",
        vehicleId: "av_8c",
        vehicleName: "AV-8C",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9g_av_8a",
        vehicleId: "av_8a",
        vehicleName: "AV-8A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9g_f-4j",
        vehicleId: "f-4j",
        vehicleName: "F-4J Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_9g_a_7e",
        vehicleId: "a_7e",
        vehicleName: "A-7E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.3"
        }
      },
      {
        id: "aim_9g_a_6e_tram",
        vehicleId: "a_6e_tram",
        vehicleName: "A-6E TRAM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9g_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9g_jaguar_gr1",
        vehicleId: "jaguar_gr1",
        vehicleName: "Jaguar GR.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "aim_9g_harrier_gr3",
        vehicleId: "harrier_gr3",
        vehicleName: "Harrier GR.3",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "9.7",
          SB: "9.3"
        }
      },
      {
        id: "aim_9g_f-4m_fgr2",
        vehicleId: "f-4m_fgr2",
        vehicleName: "Phantom FGR.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9g_harrier_frs1_early",
        vehicleId: "harrier_frs1_early",
        vehicleName: "Sea Harrier FRS.1 (e)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9g_jaguar_gr1a",
        vehicleId: "jaguar_gr1a",
        vehicleName: "Jaguar GR.1A",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9g_buccaneer_s2b",
        vehicleId: "buccaneer_s2b",
        vehicleName: "Buccaneer S.2B",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9g_harrier_frs1",
        vehicleId: "harrier_frs1",
        vehicleName: "Sea Harrier FRS.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9g_f-4k",
        vehicleId: "f-4k",
        vehicleName: "Phantom FG.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9g_f-4jk",
        vehicleId: "f-4jk",
        vehicleName: "F-4J(UK) Phantom II",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_9g_a_7e_thailand",
        vehicleId: "a_7e_thailand",
        vehicleName: "▄A-7E",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.3"
        }
      }
    ]
  },
  {
    id: "aim_9l",
    designation: "AIM-9L Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 84.5,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: false,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-102",
    explosiveMassKg: 3.6,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "aim_9l_a_10a_early",
        vehicleId: "a_10a_early",
        vehicleName: "A-10A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_a_10a_late",
        vehicleId: "a_10a_late",
        vehicleName: "A-10A Late",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_av_8b_na",
        vehicleId: "av_8b_na",
        vehicleName: "AV-8B (NA)",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_a_6e_tram",
        vehicleId: "a_6e_tram",
        vehicleName: "A-6E TRAM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_a_10c",
        vehicleId: "a_10c",
        vehicleName: "A-10C",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_f_111f",
        vehicleId: "f_111f",
        vehicleName: "F-111F",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_a_7k",
        vehicleId: "a_7k",
        vehicleName: "A-7K",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9l_f_16a_block_10",
        vehicleId: "f_16a_block_10",
        vehicleName: "F-16A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_f_16a_block_15_adf",
        vehicleId: "f_16a_block_15_adf",
        vehicleName: "F-16A ADF",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "aim_9l_f_15a",
        vehicleId: "f_15a",
        vehicleName: "F-15A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_fa_18a",
        vehicleId: "fa_18a",
        vehicleName: "F/A-18A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9l_av_8b_plus",
        vehicleId: "av_8b_plus",
        vehicleName: "AV-8B Plus",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_9l_f_15e",
        vehicleId: "f_15e",
        vehicleName: "F-15E",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9l_f_20a",
        vehicleId: "f_20a",
        vehicleName: "F-20A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_f_16c_block_50",
        vehicleId: "f_16c_block_50",
        vehicleName: "F-16CM",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9l_f_15c_msip2",
        vehicleId: "f_15c_msip2",
        vehicleName: "F-15C MSIP II",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9l_f_14b",
        vehicleId: "f_14b",
        vehicleName: "F-14B",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_fa_18c_early",
        vehicleId: "fa_18c_early",
        vehicleName: "F/A-18C Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_tornado_ids_de_assta1",
        vehicleId: "tornado_ids_de_assta1",
        vehicleName: "◄Tornado IDS ASSTA1",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_tornado_ids_de_wtd61",
        vehicleId: "tornado_ids_de_wtd61",
        vehicleName: "◄Tornado IDS WTD61",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_fa_18c_late_switzerland",
        vehicleId: "fa_18c_late_switzerland",
        vehicleName: "◌F/A-18C Late",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9l_tornado_ids_de_mfg",
        vehicleId: "tornado_ids_de_mfg",
        vehicleName: "◄Tornado IDS MFG",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_fa_18c_switzerland",
        vehicleId: "fa_18c_switzerland",
        vehicleName: "◌F/A-18C",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_tornado_f3",
        vehicleId: "tornado_f3",
        vehicleName: "Tornado F.3",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_9l_harrier_frs1_early",
        vehicleId: "harrier_frs1_early",
        vehicleName: "Sea Harrier FRS.1 (e)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_buccaneer_s2b",
        vehicleId: "buccaneer_s2b",
        vehicleName: "Buccaneer S.2B",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_harrier_frs1",
        vehicleId: "harrier_frs1",
        vehicleName: "Sea Harrier FRS.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9l_hawk_200",
        vehicleId: "hawk_200",
        vehicleName: "Hawk 200",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9l_hawk_200_rda",
        vehicleId: "hawk_200_rda",
        vehicleName: "Hawk 200 RDA",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_f_111c_raaf",
        vehicleId: "f_111c_raaf",
        vehicleName: "F-111C",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_tornado_gr1",
        vehicleId: "tornado_gr1",
        vehicleName: "Tornado GR.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_harrier_t10",
        vehicleId: "harrier_t10",
        vehicleName: "Harrier T.10",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_saab_jas39c_south_africa",
        vehicleId: "saab_jas39c_south_africa",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "South Africa (modern)",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9l_tornado_f3_late",
        vehicleId: "tornado_f3_late",
        vehicleName: "Tornado F.3 Late",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "aim_9l_fa_18a_raaf",
        vehicleId: "fa_18a_raaf",
        vehicleName: "▄F/A-18A",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_fa_18a_hug_2_raaf",
        vehicleId: "fa_18a_hug_2_raaf",
        vehicleName: "▄AF/A-18A Late",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9l_harrier_gr7",
        vehicleId: "harrier_gr7",
        vehicleName: "Harrier GR.7",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_tornado_gr4",
        vehicleId: "tornado_gr4",
        vehicleName: "Tornado GR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_tornado_gr4",
        vehicleId: "tornado_gr4",
        vehicleName: "Tornado GR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_cf_188a_canada",
        vehicleId: "cf_188a_canada",
        vehicleName: "CF-188A",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Canada (modern)",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_av_8s_late_thailand",
        vehicleId: "av_8s_late_thailand",
        vehicleName: "▄AV-8S Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9l_f-5t_thailand",
        vehicleId: "f-5t_thailand",
        vehicleName: "▄F-5T SCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "aim_9l_f-4ej_kai",
        vehicleId: "f-4ej_kai",
        vehicleName: "F-4EJ Kai Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9l_f_16aj",
        vehicleId: "f_16aj",
        vehicleName: "F-16AJ",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "13.0"
        }
      },
      {
        id: "aim_9l_f-5th_thailand",
        vehicleId: "f-5th_thailand",
        vehicleName: "▄F-5TH TCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9l_f_16a_block_15_ocu_thailand",
        vehicleId: "f_16a_block_15_ocu_thailand",
        vehicleName: "▄F-16A OCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9l_f_15j",
        vehicleId: "f_15j",
        vehicleName: "F-15J",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9l_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9l_saab_jas39c_thailand",
        vehicleId: "saab_jas39c_thailand",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9l_fa_18d_late_malaysia",
        vehicleId: "fa_18d_late_malaysia",
        vehicleName: "▄F/A-18D Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9l_f_16a_block_20_mlu",
        vehicleId: "f_16a_block_20_mlu",
        vehicleName: "␗F-16A MLU",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "aim_4g",
    designation: "AIM-4G Super Falcon",
    category: "IR",
    family: "IR",
    icon: "ir-large-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 84.5,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 10,
    maximumSpeedMach: 3,
    maximumOverloadG: 27,
    missileGuidanceTimeS: 22,
    explosiveType: "HBX-3",
    explosiveMassKg: 2.3,
    tntEquivalentKg: 3.6,
    vehicles: [
      {
        id: "aim_4g_f_106a_1972",
        vehicleId: "f_106a_1972",
        vehicleName: "F-106A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "aim_4f",
    designation: "AIM-4F Super Falcon",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 84.5,
    guidance: "SARH",
    band: "I",
    launchRangeKm: 10,
    maximumSpeedMach: 3,
    maximumOverloadG: 27,
    missileGuidanceTimeS: 22,
    explosiveType: "HBX-3",
    explosiveMassKg: 2.3,
    tntEquivalentKg: 3.6,
    vehicles: [
      {
        id: "aim_4g_f_106a_1972",
        vehicleId: "f_106a_1972",
        vehicleName: "F-106A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "aim_9j",
    designation: "AIM-9J Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.9,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 40,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9j_f-5e",
        vehicleId: "f-5e",
        vehicleName: "F-5E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9j_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "10.7"
        },
        icon: "ir-orange"
      },
      {
        id: "aim_9j_a_7d",
        vehicleId: "a_7d",
        vehicleName: "A-7D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.0"
        }
      },
      {
        id: "aim_9j_a_7k",
        vehicleId: "a_7k",
        vehicleName: "A-7K",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "ir-orange"
      },
      {
        id: "aim_9j_f_16a_block_10",
        vehicleId: "f_16a_block_10",
        vehicleName: "F-16A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.7"
        }
      },
      {
        id: "aim_9j_f-104g",
        vehicleId: "f-104g",
        vehicleName: "◄F-104G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9j_f-4f",
        vehicleId: "f-4f",
        vehicleName: "◄F-4F Early",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9j_f-104g_china",
        vehicleId: "f-104g_china",
        vehicleName: "␗F-104G",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.3"
        }
      },
      {
        id: "aim_9j_f-104g_italy",
        vehicleId: "f-104g_italy",
        vehicleName: "▄F-104G",
        vehicleTechTree: "Italy",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "aim_7d",
    designation: "AIM-7D Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 182.3,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 15,
    launchRangeKm: 45,
    maximumSpeedMach: 4,
    maximumOverloadG: 15,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.5,
    vehicles: [
      {
        id: "aim_7d_f-4c",
        vehicleId: "f-4c",
        vehicleName: "F-4C Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "aim_7d_f-4ej",
        vehicleId: "f-4ej",
        vehicleName: "F-4EJ Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_7d_f-4ej_adtw",
        vehicleId: "f-4ej_adtw",
        vehicleName: "F-4EJ ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        }
      }
    ],
  },
  {
    id: "aim_9c",
    designation: "AIM-9C Sidewinder",
    category: "Radar",
    family: "SARH",
    icon: "ir-yellow",
    variant: "SARH",
    projectileMassKg: 95.3,
    guidance: "SARH",
    band: "I",
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "HMX",
    explosiveMassKg: 2.9,
    tntEquivalentKg: 4.9,
    vehicles: [
      {
        id: "aim_9c_f-8e",
        vehicleId: "f-8e",
        vehicleName: "F-8E",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.3"
        }
      }
    ]
  },
  {
    id: "aim_7e",
    designation: "AIM-7E Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 205,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 50,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 11.5,
    vehicles: [
      {
        id: "aim_7e_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "10.7"
        }
      },
      {
        id: "aim_7e_f-4m_fgr2",
        vehicleId: "f-4m_fgr2",
        vehicleName: "Phantom FGR.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_7e_f-4k",
        vehicleId: "f-4k",
        vehicleName: "Phantom FG.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_7e_f-4jk",
        vehicleId: "f-4jk",
        vehicleName: "F-4J(UK) Phantom II",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_7e_f-4ej",
        vehicleId: "f-4ej",
        vehicleName: "F-4EJ Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "radar-orange"
      },
      {
        id: "aim_7e_f-4ej_adtw",
        vehicleId: "f-4ej_adtw",
        vehicleName: "F-4EJ ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "radar-white"
      },
      {
        id: "aim_7e_f-4ej_kai",
        vehicleId: "f-4ej_kai",
        vehicleName: "F-4EJ Kai Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7e_f_15j",
        vehicleId: "f_15j",
        vehicleName: "F-15J",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      }
    ]
  },
  {
    id: "aim_7e_2",
    designation: "AIM-7E-2 Sparrow (Dogfight)",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 193.7,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 50,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.5,
    vehicles: [
      {
        id: "aim_7e_2_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "10.7"
        }
      },
      {
        id: "aim_7e_2_f-4j",
        vehicleId: "f-4j",
        vehicleName: "F-4J Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        },
        icon: "radar-white"
      },
      {
        id: "aim_7e_2_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        },
        icon: "radar-white"
      },
      {
        id: "aim_7e_2_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "radar-white"
      }
    ]
  },
  {
    id: "aim_7f",
    designation: "AIM-7F Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 231.3,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 40,
    launchRangeKm: 100,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 75,
    explosiveType: "PBXN-4",
    explosiveMassKg: 11.8,
    tntEquivalentKg: 9.8,
    vehicles: [
      {
        id: "aim_7f_f-4j",
        vehicleId: "f-4j",
        vehicleName: "F-4J Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_7f_f-4s",
        vehicleId: "f-4s",
        vehicleName: "F-4S Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_7f_fa_18a",
        vehicleId: "fa_18a",
        vehicleName: "F/A-18A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "radar-white"
      },
      {
        id: "aim_7f_f_20a",
        vehicleId: "f_20a",
        vehicleName: "F-20A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.7"
        }
      },
      {
        id: "aim_7f_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "aim_7f_fa_18a_raaf",
        vehicleId: "fa_18a_raaf",
        vehicleName: "▄F/A-18A",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7f_f_16aj",
        vehicleId: "f_16aj",
        vehicleName: "F-16AJ",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "aim_9m",
    designation: "AIM-9M Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-green",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 84.5,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: true,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-3",
    explosiveMassKg: 3.6,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "aim_9m_a_10c",
        vehicleId: "a_10c",
        vehicleName: "A-10C",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        }
      },
      {
        id: "aim_9m_f_15a",
        vehicleId: "f_15a",
        vehicleName: "F-15A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_9m_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9m_av_8b_plus",
        vehicleId: "av_8b_plus",
        vehicleName: "AV-8B Plus",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_9m_f_15e",
        vehicleId: "f_15e",
        vehicleName: "F-15E",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9m_f_16c_block_50",
        vehicleId: "f_16c_block_50",
        vehicleName: "F-16CM",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9m_f_15c_msip2",
        vehicleId: "f_15c_msip2",
        vehicleName: "F-15C MSIP II",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9m_f_14b",
        vehicleId: "f_14b",
        vehicleName: "F-14B",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      },
      {
        id: "aim_9m_f_14d",
        vehicleId: "f_14d",
        vehicleName: "F-14D",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      },
      {
        id: "aim_9m_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_f_15c_golden_eagle",
        vehicleId: "f_15c_golden_eagle",
        vehicleName: "F-15C Golden Eagle",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_fa_18c_late_switzerland",
        vehicleId: "fa_18c_late_switzerland",
        vehicleName: "◌F/A-18C Late",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9m_ef_2000_block_10",
        vehicleId: "ef_2000_block_10",
        vehicleName: "◄EF-2000",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_ef_2000_aesa",
        vehicleId: "ef_2000_aesa",
        vehicleName: "◄EF-2000 (AESA)",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_9m_saab_jas39c_south_africa",
        vehicleId: "saab_jas39c_south_africa",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "South Africa (modern)",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9m_tornado_f3_late",
        vehicleId: "tornado_f3_late",
        vehicleName: "Tornado F.3 Late",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "aim_9m_fa_18a_hug_2_raaf",
        vehicleId: "fa_18a_hug_2_raaf",
        vehicleName: "▄AF/A-18A Late",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9m_harrier_gr7",
        vehicleId: "harrier_gr7",
        vehicleName: "Harrier GR.7",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9m_tornado_gr4",
        vehicleId: "tornado_gr4",
        vehicleName: "Tornado GR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_9m_sea_harrier_fa2",
        vehicleId: "sea_harrier_fa2",
        vehicleName: "Sea Harrier FA 2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_9m_ef_2000_fgr4",
        vehicleId: "ef_2000_fgr4",
        vehicleName: "Typhoon FGR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_ef_2000_typhoon_aesa",
        vehicleId: "ef_2000_typhoon_aesa",
        vehicleName: "Typhoon (AESA)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_9m_fa_18f_block_2_raaf",
        vehicleId: "fa_18f_block_2_raaf",
        vehicleName: "▄F/A-18F",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_9m_f-5th_thailand",
        vehicleId: "f-5th_thailand",
        vehicleName: "▄F-5TH TCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "ir-orange"
      },
      {
        id: "aim_9m_f_16a_block_15_ocu_thailand",
        vehicleId: "f_16a_block_15_ocu_thailand",
        vehicleName: "▄F-16A OCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-orange"
      },
      {
        id: "aim_9m_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9m_saab_jas39c_thailand",
        vehicleId: "saab_jas39c_thailand",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_9m_fa_18d_late_malaysia",
        vehicleId: "fa_18d_late_malaysia",
        vehicleName: "▄F/A-18D Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_9m_f_16a_block_72v_china",
        vehicleId: "f_16a_block_72v_china",
        vehicleName: "␗F-16V",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      }
    ]
  },
  {
    id: "aim_9h",
    designation: "AIM-9H Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 88.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-3",
    explosiveMassKg: 2.8,
    tntEquivalentKg: 3.6,
    vehicles: [
      {
        id: "aim_9h_f-4s",
        vehicleId: "f-4s",
        vehicleName: "F-4S Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "aim_9h_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        }
      }
    ]
  },
  {
    id: "aim_120a",
    designation: "AIM-120A AMRAAM",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 231.3,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 80,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 7.7,
    tntEquivalentKg: 9.4,
    vehicles: [
      {
        id: "aim_120a_f_16a_block_15_adf",
        vehicleId: "f_16a_block_15_adf",
        vehicleName: "F-16A ADF",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "aim_120a_av_8b_plus",
        vehicleId: "av_8b_plus",
        vehicleName: "AV-8B Plus",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_120a_f_16c_block_50",
        vehicleId: "f_16c_block_50",
        vehicleName: "F-16CM",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_120a_f_15c_msip2",
        vehicleId: "f_15c_msip2",
        vehicleName: "F-15C MSIP II",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_120a_f-4f_kws_lv",
        vehicleId: "f-4f_kws_lv",
        vehicleName: "◄F-4F KWS LV",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_120a_f_16a_block_15_ocu_thailand",
        vehicleId: "f_16a_block_15_ocu_thailand",
        vehicleName: "▄F-16A OCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "radar-red"
      },
      {
        id: "aim_120a_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "radar-white"
      },
      {
        id: "aim_120a_f_16a_block_20_mlu",
        vehicleId: "f_16a_block_20_mlu",
        vehicleName: "␗F-16A MLU",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "aim_7m",
    designation: "AIM-7M Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 231.3,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 40,
    launchRangeKm: 100,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 75,
    explosiveType: "PBXN-4",
    explosiveMassKg: 11.8,
    tntEquivalentKg: 9.8,
    vehicles: [
      {
        id: "aim_7m_f_16a_block_15_adf",
        vehicleId: "f_16a_block_15_adf",
        vehicleName: "F-16A ADF",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "aim_7m_f_15a",
        vehicleId: "f_15a",
        vehicleName: "F-15A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_7m_fa_18a",
        vehicleId: "fa_18a",
        vehicleName: "F/A-18A",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7m_f_15e",
        vehicleId: "f_15e",
        vehicleName: "F-15E",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_7m_f_16c_block_50",
        vehicleId: "f_16c_block_50",
        vehicleName: "F-16CM",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_7m_f_15c_msip2",
        vehicleId: "f_15c_msip2",
        vehicleName: "F-15C MSIP II",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_7m_f_14b",
        vehicleId: "f_14b",
        vehicleName: "F-14B",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      },
      {
        id: "aim_7m_f_14d",
        vehicleId: "f_14d",
        vehicleName: "F-14D",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      },
      {
        id: "aim_7m_fa_18a_raaf",
        vehicleId: "fa_18a_raaf",
        vehicleName: "▄F/A-18A",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7m_f-4ej_kai",
        vehicleId: "f-4ej_kai",
        vehicleName: "F-4EJ Kai Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7m_f_2a_adtw",
        vehicleId: "f_2a_adtw",
        vehicleName: "F-2A ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "radar-red"
      },
      {
        id: "aim_7m_f-4ej_kai",
        vehicleId: "f-4ej_kai",
        vehicleName: "F-4EJ Kai Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_7m_f_15j",
        vehicleId: "f_15j",
        vehicleName: "F-15J",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_7m_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_7m_f_2a",
        vehicleId: "f_2a",
        vehicleName: "F-2A",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "radar-red"
      },
      {
        id: "aim_7m_f_16a_block_20_mlu",
        vehicleId: "f_16a_block_20_mlu",
        vehicleName: "␗F-16A MLU",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "aim_7p",
    designation: "AIM-7P Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-yellow",
    variant: "SARH+IOG+DL",
    projectileMassKg: 231.3,
    guidance: "SARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 50,
    launchRangeKm: 100,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 75,
    explosiveType: "PBXN-4",
    explosiveMassKg: 11.8,
    tntEquivalentKg: 9.8,
    vehicles: [
      {
        id: "aim_7p_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_7p_fa_18c_early",
        vehicleId: "fa_18c_early",
        vehicleName: "F/A-18C Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_7p_fa_18c_late_switzerland",
        vehicleId: "fa_18c_late_switzerland",
        vehicleName: "◌F/A-18C Late",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_7p_fa_18c_switzerland",
        vehicleId: "fa_18c_switzerland",
        vehicleName: "◌F/A-18C",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_7p_cf_188a_canada",
        vehicleId: "cf_188a_canada",
        vehicleName: "CF-188A",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Canada (modern)",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "aim_7p_fa_18d_late_malaysia",
        vehicleId: "fa_18d_late_malaysia",
        vehicleName: "▄F/A-18D Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      }
    ]
  },
  {
    id: "aim_120b",
    designation: "AIM-120B AMRAAM",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 147.9,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 80,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 7.7,
    tntEquivalentKg: 9.4,
    vehicles: [
      {
        id: "aim_120b_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120b_f_15e",
        vehicleId: "f_15e",
        vehicleName: "F-15E",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120b_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-orange"
      },
      {
        id: "aim_120b_ef_2000_block_10",
        vehicleId: "ef_2000_block_10",
        vehicleName: "◄EF-2000",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120b_ef_2000_aesa",
        vehicleId: "ef_2000_aesa",
        vehicleName: "◄EF-2000 (AESA)",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_120b_tornado_f3_late",
        vehicleId: "tornado_f3_late",
        vehicleName: "Tornado F.3 Late",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        },
        icon: "radar-orange"
      },
      {
        id: "aim_120b_fa_18a_hug_2_raaf",
        vehicleId: "fa_18a_hug_2_raaf",
        vehicleName: "▄AF/A-18A Late",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120b_tornado_gr4",
        vehicleId: "tornado_gr4",
        vehicleName: "Tornado GR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "aim_120b_ef_2000_fgr4",
        vehicleId: "ef_2000_fgr4",
        vehicleName: "Typhoon FGR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120b_ef_2000_typhoon_aesa",
        vehicleId: "ef_2000_typhoon_aesa",
        vehicleName: "Typhoon (AESA)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_120b_saab_jas39c_thailand",
        vehicleId: "saab_jas39c_thailand",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aim_120b_fa_18d_late_malaysia",
        vehicleId: "fa_18d_late_malaysia",
        vehicleName: "▄F/A-18D Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120b_f_16a_block_72v_china",
        vehicleId: "f_16a_block_72v_china",
        vehicleName: "␗F-16V",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-orange"
      }
    ]
  },
  {
    id: "aim_120c_5",
    designation: "AIM-120C-5 AMRAAM",
    category: "Radar",
    family: "ARH",
    icon: "radar-blue",
    variant: "ARH+IOG+DL",
    projectileMassKg: 161.5,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 120,
    maximumSpeedMach: 4.4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 120,
    explosiveType: "PBXN-110",
    explosiveMassKg: 8.6,
    tntEquivalentKg: 11,
    vehicles: [
      {
        id: "aim_120c_5_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120c_5_f_15e",
        vehicleId: "f_15e",
        vehicleName: "F-15E",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120c_5_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-green"
      },
      {
        id: "aim_120c_5_f_15c_golden_eagle",
        vehicleId: "f_15c_golden_eagle",
        vehicleName: "F-15C Golden Eagle",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120c_5_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120c_5_ef_2000_block_10",
        vehicleId: "ef_2000_block_10",
        vehicleName: "◄EF-2000",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120c_5_ef_2000_aesa",
        vehicleId: "ef_2000_aesa",
        vehicleName: "◄EF-2000 (AESA)",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_120c_5_fa_18a_hug_2_raaf",
        vehicleId: "fa_18a_hug_2_raaf",
        vehicleName: "▄AF/A-18A Late",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120c_5_ef_2000_fgr4",
        vehicleId: "ef_2000_fgr4",
        vehicleName: "Typhoon FGR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120c_5_ef_2000_typhoon_aesa",
        vehicleId: "ef_2000_typhoon_aesa",
        vehicleName: "Typhoon (AESA)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "aim_120c_5_fa_18f_block_2_raaf",
        vehicleId: "fa_18f_block_2_raaf",
        vehicleName: "▄F/A-18F",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120c_5_fa_18d_late_malaysia",
        vehicleId: "fa_18d_late_malaysia",
        vehicleName: "▄F/A-18D Late",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "aim_120c_5_f_16a_block_72v_china",
        vehicleId: "f_16a_block_72v_china",
        vehicleName: "␗F-16V",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-green"
      }
    ]
  },
  {
    id: "aim_9p",
    designation: "AIM-9P Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.9,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 40,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9p_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        }
      },
      {
        id: "aim_9p_f-104j",
        vehicleId: "f-104j",
        vehicleName: "F-104J",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.0"
        }
      },
      {
        id: "aim_9p_t2",
        vehicleId: "t2",
        vehicleName: "T2",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9p_av_8s_thailand",
        vehicleId: "av_8s_thailand",
        vehicleName: "▄AV-8S",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9p_t2_early",
        vehicleId: "t2_early",
        vehicleName: "T-2 Early",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9p_f1",
        vehicleId: "f1",
        vehicleName: "F-1",
        vehicleTechTree: "Japan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.3",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "aim_9p_alpha_jet_th_phase_1",
        vehicleId: "alpha_jet_th_phase_1",
        vehicleName: "▄Alpha Jet TH",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9p_f-4ej",
        vehicleId: "f-4ej",
        vehicleName: "F-4EJ Phantom II",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9p_f-5e_fcu_thailand",
        vehicleId: "f-5e_fcu_thailand",
        vehicleName: "▄F-5E FCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "aim_9p_f-4ej_adtw",
        vehicleId: "f-4ej_adtw",
        vehicleName: "F-4EJ ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9p_f_16aj",
        vehicleId: "f_16aj",
        vehicleName: "F-16AJ",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "13.0"
        },
        icon: "ir-yellow"
      },
      {
        id: "aim_9p_f_15j",
        vehicleId: "f_15j",
        vehicleName: "F-15J",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9p_f_6c_pakistan",
        vehicleId: "f_6c_pakistan",
        vehicleName: "▄F-6C",
        vehicleTechTree: "China",
        vehicleOperator: "Pakistan",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        },
        icon: "ir-white"
      },
      {
        id: "aim_9p_a_5c",
        vehicleId: "a_5c",
        vehicleName: "A-5C",
        vehicleTechTree: "China",
        vehicleOperator: "Pakistan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9p_f-5a_china",
        vehicleId: "f-5a_china",
        vehicleName: "␗F-5A",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "aim_9p_f-5e_aidc",
        vehicleId: "f-5e_aidc",
        vehicleName: "␗F-5E",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "aim_9p_f_16a_block_20_mlu",
        vehicleId: "f_16a_block_20_mlu",
        vehicleName: "␗F-16A MLU",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "ir-yellow"
      }
    ]
  },
  {
    id: "aim_54a",
    designation: "AIM-54A Phoenix",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 446.6,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 16,
    launchRangeKm: 185,
    maximumSpeedMach: 5.7,
    maximumOverloadG: 22,
    missileGuidanceTimeS: 160,
    explosiveType: "PBXN-104",
    explosiveMassKg: 26.3,
    tntEquivalentKg: 27.6,
    vehicles: [
      {
        id: "aim_54a_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        }
      },
      {
        id: "aim_54a_f_14a_early",
        vehicleId: "f_14a_early",
        vehicleName: "F-14A Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "ir-large-orange"
      },
      {
        id: "aim_54a_f_14b",
        vehicleId: "f_14b",
        vehicleName: "F-14B",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        },
        icon: "ir-large-white"
      }
    ]
  },
  {
    id: "fakour_90",
    designation: "Fakour-90",
    category: "Radar",
    family: "ARH",
    icon: "radar-red",
    variant: "ARH+IOG+DL",
    projectileMassKg: 637.3,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 16,
    launchRangeKm: 150,
    maximumSpeedMach: 4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-3",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 46.8,
    vehicles: [
      {
        id: "fakour_90_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "sedjeel",
    designation: "Sedjeel",
    category: "Radar",
    family: "SARH",
    icon: "radar-yellow",
    variant: "SARH",
    projectileMassKg: 625,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 40,
    launchRangeKm: 135,
    maximumSpeedMach: 4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 105,
    explosiveType: "PBXN-3",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 46.8,
    vehicles: [
      {
        id: "sedjeel_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "r_27r1",
    designation: "R-27R1",
    category: "Radar",
    family: "SARH",
    icon: "radar-blue",
    variant: "SARH+IOG+DL",
    projectileMassKg: 253,
    guidance: "SARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 55,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27r1_f_14a_iriaf",
        vehicleId: "f_14a_iriaf",
        vehicleName: "▄F-14A IRIAF",
        vehicleTechTree: "USA",
        vehicleOperator: "Iran",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.3",
          SB: "13.0"
        }
      },
      {
        id: "r_27r1_mig_29_9_12_germany",
        vehicleId: "mig_29_9_12_germany",
        vehicleName: "◊MiG-29 (9-12A)",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27r1_mig_29_9_12g",
        vehicleId: "mig_29_9_12g",
        vehicleName: "◄MiG-29G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27r1_mig-21_bison",
        vehicleId: "mig-21_bison",
        vehicleName: "▄MiG-21 Bison",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27r1_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27r1_j_11",
        vehicleId: "j_11",
        vehicleName: "J-11",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27r1_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "radar-orange"
      }
    ]
  },
  {
    id: "aim_54c",
    designation: "AIM-54C Phoenix",
    category: "Radar",
    family: "ARH",
    icon: "ir-large-orange",
    variant: "ARH+IOG+DL",
    projectileMassKg: 446.8,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 16,
    launchRangeKm: 185,
    maximumSpeedMach: 5.7,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 160,
    explosiveType: "PBXN-104",
    explosiveMassKg: 31.8,
    tntEquivalentKg: 33.4,
    vehicles: [
      {
        id: "aim_54c_f_14b",
        vehicleId: "f_14b",
        vehicleName: "F-14B",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      }
    ]
  },
  {
    id: "aim_54c+",
    designation: "AIM-54C+ Phoenix",
    category: "Radar",
    family: "ARH",
    icon: "ir-large-orange",
    variant: "ARH+IOG+DL",
    projectileMassKg: 446.8,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 16,
    launchRangeKm: 185,
    maximumSpeedMach: 5.7,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 160,
    explosiveType: "PBXN-104",
    explosiveMassKg: 31.8,
    tntEquivalentKg: 33.4,
    vehicles: [
      {
        id: "aim_54c+_f_14d",
        vehicleId: "f_14d",
        vehicleName: "F-14D",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "12.7"
        }
      }
    ]
  },
  {
    id: "aim_120d",
    designation: "AIM-120D AMRAAM",
    category: "Radar",
    family: "ARH",
    icon: "radar-blue",
    variant: "ARH+IOG+GNSS+DL",
    projectileMassKg: 161.5,
    guidance: "ARH+IOG+GNSS+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 185,
    maximumSpeedMach: 4.4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 180,
    explosiveType: "PBXN-110",
    explosiveMassKg: 8.6,
    tntEquivalentKg: 11,
    vehicles: [
      {
        id: "aim_120d_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "aim_120d_f_15c_golden_eagle",
        vehicleId: "f_15c_golden_eagle",
        vehicleName: "F-15C Golden Eagle",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-yellow"
      },
      {
        id: "aim_120d_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-orange"
      },
      {
        id: "aim_120d_fa_18f_block_2_raaf",
        vehicleId: "fa_18f_block_2_raaf",
        vehicleName: "▄F/A-18F",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "Australia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "radar-red"
      },
      {
        id: "aim_120d_f_16a_block_72v_china",
        vehicleId: "f_16a_block_72v_china",
        vehicleName: "␗F-16V",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      }
    ]
  },
  {
    id: "ruhrstahl_x_4",
    designation: "Ruhrstahl X-4",
    category: "Command-Guided (MCLOS)",
    family: "Command-Guided (MCLOS)",
    variant: "Command-Guided (MCLOS)",
    icon: "rocket",
    projectileMassKg: 60,
    guidance: "Manual (MCLOS)",
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 33,
    explosiveType: "Nipolit",
    explosiveMassKg: 7.5,
    tntEquivalentKg: 9,
    vehicles: [
      {
        id: "ruhrstahl_x_4_fw-190f-8",
        vehicleId: "fw-190f-8",
        vehicleName: "Fw 190 F-8",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.3",
          RB: "5.0",
          SB: "4.3"
        }
      }
    ]
  },
  {
    id: "aa_20_nord",
    designation: "AA-20 Nord",
    category: "Command-Guided (MCLOS)",
    family: "Command-Guided (MCLOS)",
    variant: "Command-Guided (MCLOS)",
    icon: "radar-white",
    projectileMassKg: 133,
    guidance: "Manual (MCLOS)",
    maximumSpeedMach: 1.7,
    missileGuidanceTimeS: 30,
    explosiveType: "Composition B",
    explosiveMassKg: 8,
    tntEquivalentKg: 10.5,
    vehicles: [
      {
        id: "aa_20_nord_fiat_g91_r4_german",
        vehicleId: "fiat_g91_r4_german",
        vehicleName: "◄G.91 R/4",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aa_20_nord_fiat_g91_r1",
        vehicleId: "fiat_g91_r1",
        vehicleName: "G.91 R/1",
        vehicleTechTree: "Italy",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        }
      },
      {
        id: "aa_20_nord_fiat_g91_r4",
        vehicleId: "fiat_g91_r4",
        vehicleName: "G.91 R/4",
        vehicleTechTree: "Italy",
        vehicleOperator: "Portugal",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aa_20_nord_fiat_g91_y",
        vehicleId: "fiat_g91_y",
        vehicleName: "G.91 Y",
        vehicleTechTree: "Italy",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "flz_lwf_63",
    designation: "Flz Lwf 63",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 72.6,
    lockRangeRearAspectKm: 4,
    launchRangeKm: 10,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "flz_lwf_63_hunter_f58a_1971_switzerland",
        vehicleId: "hunter_f58a_1971_switzerland",
        vehicleName: "◌Hunter F.58A (1971)",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "flz_lwf_63_ffa_p16",
        vehicleId: "ffa_p16",
        vehicleName: "◌FFA P-16",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        icon: "ir-yellow"
      }
    ]
  },
  {
    id: "flz_lwf_ll_63_75_siwa",
    designation: "Flz Lwf LL 63/75 SIWA",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.9,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "flz_lwf_ll_63_75_siwa_hunter_f58a_1971_switzerland",
        vehicleId: "hunter_f58a_1971_switzerland",
        vehicleName: "◌Hunter F.58A (1971)",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "flz_lwf_ll_63_75_siwa_mirage_3s_c70_switzerland",
        vehicleId: "mirage_3s_c70_switzerland",
        vehicleName: "◌Mirage IIIS C.70",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        icon: "ir-white"
      }
    ]
  },
  {
    id: "flz_lwf_63_80",
    designation: "Flz Lwf 63/80",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.9,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 40,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "flz_lwf_63_80_hunter_f58_switzerland",
        vehicleId: "hunter_f58_switzerland",
        vehicleName: "◌Hunter F.58",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "10.0",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "r_3r",
    designation: "R-3R",
    category: "Radar",
    family: "SARH",
    icon: "ir-yellow",
    variant: "SARH",
    projectileMassKg: 75.3,
    guidance: "SARH",
    band: "J",
    lockRangeKm: 8,
    launchRangeKm: 9,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 21,
    explosiveType: "TGAF-5",
    explosiveMassKg: 5.5,
    tntEquivalentKg: 8.8,
    vehicles: [
      {
        id: "r_3r_mig-21_sps_k",
        vehicleId: "mig-21_sps_k",
        vehicleName: "◄MiG-21 SPS-K",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "r_3r_mig-21_mf",
        vehicleId: "mig-21_mf",
        vehicleName: "◊MiG-21MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        },
        icon: "radar-white"
      },
      {
        id: "r_3r_mig-21_bis_sau",
        vehicleId: "mig-21_bis_sau",
        vehicleName: "◊MiG-21bis-SAU",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        icon: "radar-white"
      },
      {
        id: "r_3r_mig-21_bis_lazur",
        vehicleId: "mig-21_bis_lazur",
        vehicleName: '◊MiG-21 "Lazur- M"',
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        icon: "radar-white"
      },
      {
        id: "r_3r_mig-21_s",
        vehicleId: "mig-21_s",
        vehicleName: "MiG-21S (R-13-300)",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.7",
          SB: "10.0"
        },
        icon: "radar-white"
      },
      {
        id: "r_3r_mig-21_smt",
        vehicleId: "mig-21_smt",
        vehicleName: "Mig-21SMT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        },
        icon: "radar-white"
      },
      {
        id: "r_3r_mig-21_bis",
        vehicleId: "mig-21_bis",
        vehicleName: "Mig-21bis",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        icon: "radar-white"
      }
    ]
  },
  {
    id: "r_3s",
    designation: "R-3S",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    projectileMassKg: 75.3,
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    lockRangeRearAspectKm: 3.5,
    launchRangeKm: 9,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 21,
    explosiveType: "TGAF-5",
    explosiveMassKg: 5.5,
    tntEquivalentKg: 8.8,
    vehicles: [
      {
        id: "r_3s_mig-21_sps_k",
        vehicleId: "mig-21_sps_k",
        vehicleName: "◄MiG-21 SPS-K",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "r_3s_mig-21_mf",
        vehicleId: "mig-21_mf",
        vehicleName: "◊MiG-21MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_3s_mig-21_bis_sau",
        vehicleId: "mig-21_bis_sau",
        vehicleName: "◊MiG-21bis-SAU",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_3s_mig-21_bis_lazur",
        vehicleId: "mig-21_bis_lazur",
        vehicleName: '◊MiG-21 "Lazur- M"',
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_3s_mig_23mf_germany",
        vehicleId: "mig_23mf_germany",
        vehicleName: "◊MiG-23MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_3s_mig-17_cuba",
        vehicleId: "mig-17_cuba",
        vehicleName: "MiG-17AS",
        vehicleTechTree: "USSR",
        vehicleOperator: "Cuba",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        }
      },
      {
        id: "r_3s_mig-19pt",
        vehicleId: "mig-19pt",
        vehicleName: "MiG-19PT",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "r_3s_mig-21_f13",
        vehicleId: "mig-21_f13",
        vehicleName: "MiG-21 F-13",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "r_3s_mig-21_s",
        vehicleId: "mig-21_s",
        vehicleName: "MiG-21S (R-13-300)",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "r_3s_mig-21_pfm",
        vehicleId: "mig-21_pfm",
        vehicleName: "MiG-21PFM",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "9.3",
          SB: "10.0"
        }
      },
      {
        id: "r_3s_mig-21_smt",
        vehicleId: "mig-21_smt",
        vehicleName: "Mig-21SMT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_3s_mig-21_bis",
        vehicleId: "mig-21_bis",
        vehicleName: "Mig-21bis",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_3s_mig_23m",
        vehicleId: "mig_23m",
        vehicleName: "Mig-23M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      }
    ]
  },
  {
    id: "r_13m1",
    designation: "R-13M1",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    projectileMassKg: 90.6,
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 16,
    maximumSpeedMach: 2.4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 60,
    explosiveType: "TNT",
    explosiveMassKg: 5.5,
    vehicles: [
      {
        id: "r_13m1_mig-21_sps_k",
        vehicleId: "mig-21_sps_k",
        vehicleName: "◄MiG-21 SPS-K",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "r_13m1_mig-21_bis_sau",
        vehicleId: "mig-21_bis_sau",
        vehicleName: "◊MiG-21bis-SAU",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_13m1_mig-21_bis_lazur",
        vehicleId: "mig-21_bis_lazur",
        vehicleName: '◊MiG-21 "Lazur- M"',
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_13m1_mig_23mf_germany",
        vehicleId: "mig_23mf_germany",
        vehicleName: "◊MiG-23MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_13m1_mig-21_bis",
        vehicleId: "mig-21_bis",
        vehicleName: "Mig-21bis",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_13m1_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "Mig-27M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "r_13m1_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "Mig-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "r_13m1_mig_23m",
        vehicleId: "mig_23m",
        vehicleName: "Mig-23M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_13m1_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        },
        icon: "ir-white"
      },
      {
        id: "r_13m1_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        },
        icon: "ir-white"
      }
    ]
  },
  {
    id: "r_60",
    designation: "R-60",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    projectileMassKg: 43.5,
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    lockRangeRearAspectKm: 5,
    launchRangeKm: 10,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 25,
    explosiveType: "TNT",
    explosiveMassKg: 1.15,
    vehicles: [
      {
        id: "r_60_mig-21_sps_k",
        vehicleId: "mig-21_sps_k",
        vehicleName: "◄MiG-21 SPS-K",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "10.0"
        }
      },
      {
        id: "r_60_mig-21_mf",
        vehicleId: "mig-21_mf",
        vehicleName: "◊MiG-21MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_60_su_22um3k",
        vehicleId: "su_22um3k",
        vehicleName: "◊Su-22UM3K",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        },
        icon: "ir-white"
      },
      {
        id: "r_60_mig_29_9_12_germany",
        vehicleId: "mig_29_9_12_germany",
        vehicleName: "◊MiG-29 (9-12A)",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "ir-white"
      },
      {
        id: "r_60_yak-38m",
        vehicleId: "yak-38m",
        vehicleName: "Yak-38M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        }
      },
      {
        id: "r_60_su_25",
        vehicleId: "su_25",
        vehicleName: "Su-25",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "10.3",
          SB: "10.7"
        },
        icon: "ir-white"
      },
      {
        id: "r_60_yak-38",
        vehicleId: "yak-38",
        vehicleName: "Yak-38",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        }
      },
      {
        id: "r_60_mig-21_smt",
        vehicleId: "mig-21_smt",
        vehicleName: "Mig-21SMT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_60_su_17m2",
        vehicleId: "su_17m2",
        vehicleName: "Su-17M2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.0",
          SB: "10.0"
        }
      },
      {
        id: "r_60_su_22m3",
        vehicleId: "su_22m3",
        vehicleName: "Su-22M3",
        vehicleTechTree: "USSR",
        vehicleOperator: "Syria",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        },
        icon: "ir-white"
      },
      {
        id: "r_60_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        },
        icon: "ir-white"
      }
    ]
  },
  {
    id: "aim_9b_fgw_2",
    designation: "AIM-9B FGW.2 Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 71.55,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 10,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.76,
    tntEquivalentKg: 7.62,
    vehicles: [
      {
        id: "aim_9b_fgw_2_f-104g",
        vehicleId: "f-104g",
        vehicleName: "◄F-104G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "10.7"
        }
      },
      {
        id: "aim_9b_fgw_2_f-4f",
        vehicleId: "f-4f",
        vehicleName: "◄F-4F Early",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "r_60mk",
    designation: "R-60MK",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    projectileMassKg: 44,
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 7.4,
    lockRangeAllAspectsKm: 2,
    IRCCM: false,
    launchRangeKm: 10,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 25,
    explosiveType: "OKFOL-20",
    explosiveMassKg: 1.35,
    tntEquivalentKg: 1.79,
    vehicles: [
      {
        id: "r_60mk_mig-21_bis_sau",
        vehicleId: "mig-21_bis_sau",
        vehicleName: "◊MiG-21bis-SAU",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_su_22um3k",
        vehicleId: "su_22um3k",
        vehicleName: "◊Su-22UM3K",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_mig-21_bis_lazur",
        vehicleId: "mig-21_bis_lazur",
        vehicleName: '◊MiG-21 "Lazur- M"',
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_mig_23mf_germany",
        vehicleId: "mig_23mf_germany",
        vehicleName: "◊MiG-23MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_su_22m4_de_wtd61",
        vehicleId: "su_22m4_de_wtd61",
        vehicleName: "◄Su-22M4 WTD61",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_mig_29_9_12_germany",
        vehicleId: "mig_29_9_12_germany",
        vehicleName: "◊MiG-29 (9-12A)",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_60mk_su_25k",
        vehicleId: "su_25k",
        vehicleName: "Su-25K",
        vehicleTechTree: "USSR",
        vehicleOperator: "Czech Republic",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_60mk_su_22m3",
        vehicleId: "su_22m3",
        vehicleName: "Su-22M3",
        vehicleTechTree: "USSR",
        vehicleOperator: "Syria",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60mk_su_25_558arz",
        vehicleId: "su_25_558arz",
        vehicleName: "Su-25BM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Kazakhstan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "flz_lwf_ll_64_79_falco",
    designation: "Flz Lwf LL 64/79 FALCO",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 117.31,
    guidance: "SARH",
    band: "I",
    lockRangeKm: 12.5,
    launchRangeKm: 19,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 28,
    missileGuidanceTimeS: 30,
    explosiveType: "HBX",
    explosiveMassKg: 8.7,
    tntEquivalentKg: 13.92,
    vehicles: [
      {
        id: "flz_lwf_ll_64_79_falco_mirage_3s_c70_switzerland",
        vehicleId: "mirage_3s_c70_switzerland",
        vehicleName: "◌Mirage IIIS C.70",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        }
      }
    ]
  },
  {
    id: "r_23r",
    designation: "R-23R",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 223,
    guidance: "SARH",
    band: "J",
    shootDown: "Front-aspect",
    lockRangeKm: 20,
    launchRangeKm: 27,
    maximumSpeedMach: 3,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 35,
    explosiveType: "TGAF-5",
    explosiveMassKg: 13,
    tntEquivalentKg: 20.8,
    vehicles: [
      {
        id: "r_23r_mig_23mf_germany",
        vehicleId: "mig_23mf_germany",
        vehicleName: "◊MiG-23MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_23r_mig_23m",
        vehicleId: "mig_23m",
        vehicleName: "Mig-23M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_23r_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_23r_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      }
    ]
  },
  {
    id: "r_23t",
    designation: "R-23T",
    category: "IR",
    family: "IR",
    icon: "ir-large-white",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 215,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectsKm: 2.3,
    IRCCM: false,
    launchRangeKm: 27,
    maximumSpeedMach: 3,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 35,
    explosiveType: "TGAF-5",
    explosiveMassKg: 13,
    tntEquivalentKg: 20.8,
    vehicles: [
      {
        id: "r_23t_mig_23mf_germany",
        vehicleId: "mig_23mf_germany",
        vehicleName: "◊MiG-23MF",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_23t_mig_23m",
        vehicleId: "mig_23m",
        vehicleName: "Mig-23M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_23t_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_23t_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      }
    ]
  },
  {
    id: "aim_9l_i",
    designation: "AIM-9L/I Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-green",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 84.46,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: true,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-102",
    explosiveMassKg: 3.58,
    tntEquivalentKg: 4.58,
    vehicles: [
      {
        id: "aim_9l_i_f-4f_kws_lv",
        vehicleId: "f-4f_kws_lv",
        vehicleName: "◄F-4F KWS LV",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aim_9l_i_tornado_ids_de_assta3_sle",
        vehicleId: "tornado_ids_de_assta3_sle",
        vehicleName: "◄Tornado IDS SLE",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.3",
          SB: "12.3"
        }
      }
    ]
  },
  {
    id: "r_27er1",
    designation: "R-27ER1",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH+IOG+DL",
    projectileMassKg: 350,
    guidance: "SARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 100,
    maximumSpeedMach: 5.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27er1_mig_29_9_12_germany",
        vehicleId: "mig_29_9_12_germany",
        vehicleName: "◊MiG-29 (9-12A)",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_27er1_mig_29_9_12g",
        vehicleId: "mig_29_9_12g",
        vehicleName: "◄MiG-29G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27er1_su_30mk2v_venezuela",
        vehicleId: "su_30mk2v_venezuela",
        vehicleName: "▄Su-30MK2 AMV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Venezuela",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "radar-orange"
      },
      {
        id: "r_27er1_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27er1_su_30mkm",
        vehicleId: "su_30mkm",
        vehicleName: "▄Su-30MKM",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_27er1_j_11",
        vehicleId: "j_11",
        vehicleName: "J-11",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27er1_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27er1_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "r_27t1",
    designation: "R-27T1",
    category: "IR",
    family: "IR",
    icon: "ir-large-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 245.5,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 18,
    lockRangeAllAspectsKm: 4.8,
    IRCCM: true,
    launchRangeKm: 50,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27t1_mig_29_9_12_germany",
        vehicleId: "mig_29_9_12_germany",
        vehicleName: "◊MiG-29 (9-12A)",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_27t1_mig_29_9_12g",
        vehicleId: "mig_29_9_12g",
        vehicleName: "◄MiG-29G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27t1_mig-21_bison",
        vehicleId: "mig-21_bison",
        vehicleName: "▄MiG-21 Bison",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "r_27t1_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27t1_j_11",
        vehicleId: "j_11",
        vehicleName: "J-11",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27t1_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "flz_lwl_ll_97",
    designation: "Flz Lwl LL 97 AMRAAM",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 147.87,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 80,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 7.67,
    tntEquivalentKg: 9.43,
    vehicles: [
      {
        id: "flz_lwl_ll_97_fa_18c_late_switzerland",
        vehicleId: "fa_18c_late_switzerland",
        vehicleName: "◌F/A-18C Late",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      }
    ]
  },
  {
    id: "flz_lwl_ll_97_120c_5",
    designation: "Flz Lwl LL 97 AMRAAM 120C-5",
    category: "Radar",
    family: "ARH",
    icon: "radar-blue",
    variant: "ARH+IOG+DL",
    projectileMassKg: 161.48,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 120,
    maximumSpeedMach: 4.4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 120,
    explosiveType: "PBXN-110",
    explosiveMassKg: 8.62,
    tntEquivalentKg: 11.03,
    vehicles: [
      {
        id: "flz_lwl_ll_97_120c_5_fa_18c_late_switzerland",
        vehicleId: "fa_18c_late_switzerland",
        vehicleName: "◌F/A-18C Late",
        vehicleTechTree: "Germany",
        vehicleOperator: "Switzerland",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      }
    ]
  },
  {
    id: "r_27et1",
    designation: "R-27ET1",
    category: "IR",
    family: "IR",
    icon: "ir-large-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 343,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 18,
    lockRangeAllAspectsKm: 4.8,
    IRCCM: true,
    launchRangeKm: 100,
    maximumSpeedMach: 5.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27et1_mig_29_9_12g",
        vehicleId: "mig_29_9_12g",
        vehicleName: "◄MiG-29G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27et1_su_30mk2v_venezuela",
        vehicleId: "su_30mk2v_venezuela",
        vehicleName: "▄Su-30MK2 AMV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Venezuela",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27et1_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27et1_su_30mkm",
        vehicleId: "su_30mkm",
        vehicleName: "▄Su-30MKM",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_27et1_j_11",
        vehicleId: "j_11",
        vehicleName: "J-11",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27et1_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27et1_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "r_73e",
    designation: "R-73E",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 105,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3.4,
    IRCCM: true,
    launchRangeKm: 30,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 20,
    explosiveType: "OKFOL",
    explosiveMassKg: 3.75,
    tntEquivalentKg: 6.08,
    vehicles: [
      {
        id: "r_73e_mig_29_9_12g",
        vehicleId: "mig_29_9_12g",
        vehicleName: "◄MiG-29G",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_73e_su_30mk2v_venezuela",
        vehicleId: "su_30mk2v_venezuela",
        vehicleName: "▄Su-30MK2 AMV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Venezuela",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "ir-orange"
      },
      {
        id: "r_73e_mig-21_bison",
        vehicleId: "mig-21_bison",
        vehicleName: "▄MiG-21 Bison",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "ir-orange"
      },
      {
        id: "r_73e_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_73e_su_30mkm",
        vehicleId: "su_30mkm",
        vehicleName: "▄Su-30MKM",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "ir-orange"
      },
      {
        id: "r_73e_j_11",
        vehicleId: "j_11",
        vehicleName: "J-11",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        },
        icon: "ir-orange"
      },
      {
        id: "r_73e_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "ir-orange"
      },
      {
        id: "r_73e_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "ir-orange"
      }
    ]
  },
  {
    id: "r_60m",
    designation: "R-60M",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    projectileMassKg: 44,
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 7.4,
    lockRangeAllAspectsKm: 2,
    IRCCM: false,
    launchRangeKm: 10,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 25,
    explosiveType: "OKFOL-20",
    explosiveMassKg: 1.35,
    tntEquivalentKg: 1.79,
    vehicles: [
      {
        id: "r_60m_su_25",
        vehicleId: "su_25",
        vehicleName: "Su-25",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.7",
          RB: "10.3",
          SB: "10.7"
        }
      },
      {
        id: "r_60m_mig-21_bis",
        vehicleId: "mig-21_bis",
        vehicleName: "Mig-21bis",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60m_su_25t",
        vehicleId: "su_25t",
        vehicleName: "Su-25T",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        },
        icon: "ir-white"
      },
      {
        id: "r_60m_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "Mig-27M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "r_60m_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "Mig-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "r_60m_mig_25pd",
        vehicleId: "mig_25pd",
        vehicleName: "Mig-25PD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60m_mig_23m",
        vehicleId: "mig_23m",
        vehicleName: "Mig-23M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60m_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_60m_su_17m4",
        vehicleId: "su_17m4",
        vehicleName: "Su-17M4",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.0"
        }
      },
      {
        id: "r_60m_su_24m",
        vehicleId: "su_24m",
        vehicleName: "Su-24M",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "r_60m_su_25tm",
        vehicleId: "su_25tm",
        vehicleName: "Su-39",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        },
        icon: "ir-white"
      },
      {
        id: "r_60m_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_60m_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        icon: "ir-white"
      },
      {
        id: "r_60m_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_60m_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      }
    ]
  },
  {
    id: "r_73",
    designation: "R-73",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 105,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3.4,
    IRCCM: true,
    launchRangeKm: 30,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 20,
    explosiveType: "OKFOL",
    explosiveMassKg: 3.75,
    tntEquivalentKg: 6.08,
    vehicles: [
      {
        id: "r_73_su_25t",
        vehicleId: "su_25t",
        vehicleName: "Su-25T",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "r_73_su_25_558arz",
        vehicleId: "su_25_558arz",
        vehicleName: "Su-25BM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Kazakhstan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "r_73_su_25tm",
        vehicleId: "su_25tm",
        vehicleName: "Su-39",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "r_73_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "r_73_su_27",
        vehicleId: "su_27",
        vehicleName: "Su-27",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_73_su_25sm3",
        vehicleId: "su_25sm3",
        vehicleName: "Su-25SM3",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "11.7",
          SB: "11.7"
        }
      },
      {
        id: "r_73_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_73_su_33",
        vehicleId: "su_33",
        vehicleName: "Su-33",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_73_mig_29kr_9_41r",
        vehicleId: "mig_29kr_9_41r",
        vehicleName: "MiG-29KR (9-41R)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "r_73_mig_29_9_13",
        vehicleId: "mig_29_9_13",
        vehicleName: "MiG-29 (9-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "ir-yellow"
      },
      {
        id: "r_73_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_73_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_73_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-yellow"
      },
      {
        id: "r_73_su_30sm",
        vehicleId: "su_30sm",
        vehicleName: "Su-30SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_73_su_30sm2",
        vehicleId: "su_30sm2",
        vehicleName: "Su-30SM2",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      }
    ]
  },
  {
    id: "r_40rd",
    designation: "R-40RD",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH+IOG",
    projectileMassKg: 465,
    guidance: "SARH+IOG",
    band: "J",
    shootDown: "Front-aspect",
    lockRangeKm: 30,
    launchRangeKm: 72,
    maximumSpeedMach: 4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 75,
    explosiveType: "TGAF-5",
    explosiveMassKg: 25,
    tntEquivalentKg: 40,
    vehicles: [
      {
        id: "r_40rd_mig_25pd",
        vehicleId: "mig_25pd",
        vehicleName: "Mig-25PD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        }
      }
    ]
  },
  {
    id: "r_40td",
    designation: "R-40TD",
    category: "IR",
    family: "IR",
    icon: "ir-large-white",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 465,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 16,
    lockRangeAllAspectsKm: 4.3,
    IRCCM: false,
    launchRangeKm: 72,
    maximumSpeedMach: 4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 75,
    explosiveType: "TGAF-5",
    explosiveMassKg: 25,
    tntEquivalentKg: 40,
    vehicles: [
      {
        id: "r_40td_mig_25pd",
        vehicleId: "mig_25pd",
        vehicleName: "Mig-25PD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        }
      }
    ]
  },
  {
    id: "r_24r",
    designation: "R-24R",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH+IOG",
    projectileMassKg: 244,
    guidance: "SARH+IOG",
    band: "J",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 50,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 24,
    missileGuidanceTimeS: 45,
    explosiveType: "TGAF-5",
    explosiveMassKg: 13,
    tntEquivalentKg: 20.8,
    vehicles: [
      {
        id: "r_24r_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_24r_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      }
    ]
  },
  {
    id: "r_24t",
    designation: "R-24T",
    category: "IR",
    family: "IR",
    icon: "ir-large-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 237,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 16,
    lockRangeAllAspectsKm: 4.3,
    IRCCM: false,
    launchRangeKm: 50,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 24,
    missileGuidanceTimeS: 45,
    explosiveType: "TGAF-5",
    explosiveMassKg: 13,
    tntEquivalentKg: 20.8,
    vehicles: [
      {
        id: "r_24t_mig_23mld",
        vehicleId: "mig_23mld",
        vehicleName: "Mig-23MLD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "r_24t_mig_23ml",
        vehicleId: "mig_23ml",
        vehicleName: "Mig-23ML",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      }
    ]
  },
  {
    id: "r_27r",
    designation: "R-27R",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH+IOG+DL",
    projectileMassKg: 253,
    guidance: "SARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 55,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27r_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "r_27r_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_27r_su_27",
        vehicleId: "su_27",
        vehicleName: "Su-27",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27r_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_27r_mig_29_9_13",
        vehicleId: "mig_29_9_13",
        vehicleName: "MiG-29 (9-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27r_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27r_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27r_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "r_27t",
    designation: "R-27T",
    category: "IR",
    family: "IR",
    icon: "ir-large-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 245.5,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 18,
    lockRangeAllAspectsKm: 4.8,
    IRCCM: true,
    launchRangeKm: 50,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27t_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "r_27t_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_27t_su_27",
        vehicleId: "su_27",
        vehicleName: "Su-27",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27t_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_27t_mig_29_9_13",
        vehicleId: "mig_29_9_13",
        vehicleName: "MiG-29 (9-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27t_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27t_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27t_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "r_27er",
    designation: "R-27ER",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH+IOG+DL",
    projectileMassKg: 350,
    guidance: "SARH+IOG+DL",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 100,
    maximumSpeedMach: 5.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27er_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "r_27er_mig_29_9_12",
        vehicleId: "mig_29_9_12",
        vehicleName: "MiG-29 (9-12)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.3"
        }
      },
      {
        id: "r_27er_su_27",
        vehicleId: "su_27",
        vehicleName: "Su-27",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27er_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_27er_su_33",
        vehicleId: "su_33",
        vehicleName: "Su-33",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27er_mig_29_9_13",
        vehicleId: "mig_29_9_13",
        vehicleName: "MiG-29 (9-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27er_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27er_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27er_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27er_su_30sm",
        vehicleId: "su_30sm",
        vehicleName: "Su-30SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_27er_su_30sm2",
        vehicleId: "su_30sm2",
        vehicleName: "Su-30SM2",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      }
    ]
  },
  {
    id: "r_27et",
    designation: "R-27ET",
    category: "IR",
    family: "IR",
    icon: "ir-large-orange",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 343,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 18,
    lockRangeAllAspectsKm: 4.8,
    IRCCM: true,
    launchRangeKm: 100,
    maximumSpeedMach: 5.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 60,
    explosiveType: "TGAF-5",
    explosiveMassKg: 15,
    tntEquivalentKg: 24,
    vehicles: [
      {
        id: "r_27et_yak_141",
        vehicleId: "yak_141",
        vehicleName: "Yak-141",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      },
      {
        id: "r_27et_su_27",
        vehicleId: "su_27",
        vehicleName: "Su-27",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27et_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_27et_su_33",
        vehicleId: "su_33",
        vehicleName: "Su-33",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        }
      },
      {
        id: "r_27et_mig_29_9_13",
        vehicleId: "mig_29_9_13",
        vehicleName: "MiG-29 (9-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "r_27et_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27et_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_27et_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_27et_su_30sm",
        vehicleId: "su_30sm",
        vehicleName: "Su-30SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_27et_su_30sm2",
        vehicleId: "su_30sm2",
        vehicleName: "Su-30SM2",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      }
    ]
  },
  {
    id: "r_77",
    designation: "R-77",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 177,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 90,
    explosiveType: "TGAF-5",
    explosiveMassKg: 9.73,
    tntEquivalentKg: 15.56,
    vehicles: [
      {
        id: "r_77_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "r_77_mig_29kr_9_41r",
        vehicleId: "mig_29kr_9_41r",
        vehicleName: "MiG-29KR (9-41R)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_77_su_27sm",
        vehicleId: "su_27sm",
        vehicleName: "Su-27SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "r_77_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "r_77_mig_29m_9_15",
        vehicleId: "mig_29m_9_15",
        vehicleName: "MiG-29M (9-15)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "rvv_ae",
    designation: "RVV-AE",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 177,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 90,
    explosiveType: "TGAF-5",
    explosiveMassKg: 9.73,
    tntEquivalentKg: 15.56,
    vehicles: [
      {
        id: "rvv_ae_su_30mk2v_venezuela",
        vehicleId: "su_30mk2v_venezuela",
        vehicleName: "▄Su-30MK2 AMV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Venezuela",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "rvv_ae_mig_29n",
        vehicleId: "mig_29n",
        vehicleName: "▄MiG-29N",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "rvv_ae_j_11a",
        vehicleId: "j_11a",
        vehicleName: "J-11A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "rvv_ae_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "r_77_1",
    designation: "R-77-1",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 190,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 120,
    maximumSpeedMach: 4,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 120,
    explosiveType: "TGAF-5",
    explosiveMassKg: 9.73,
    tntEquivalentKg: 15.56,
    vehicles: [
      {
        id: "r_77_1_su_30sm",
        vehicleId: "su_30sm",
        vehicleName: "Su-30SM",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "r_77_1_su_30sm2",
        vehicleId: "su_30sm2",
        vehicleName: "Su-30SM2",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      }
    ]
  },
  {
    id: "fireflash",
    designation: "Fireflash",
    category: "Beam-Riding (SACLOS)",
    family: "Beam-Riding (SACLOS)",
    variant: "Beam-Riding (SACLOS)",
    icon: "ir-white",
    projectileMassKg: 150,
    guidance: "Semi-Automatic (SACLOS)",
    launchRangeKm: 4,
    maximumSpeedMs: 1500,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 30,
    explosiveType: "TNT",
    explosiveMassKg: 7,
    vehicles: [
      {
        id: "fireflash_swift_f7",
        vehicleId: "swift_f7",
        vehicleName: "Swift F.7",
        vehicleTechTree: "Great Britain",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        }
      }
    ]
  },
  {
    id: "red_top",
    designation: "Red Top",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 167.83,
    lockRangeRearAspectKm: 6,
    launchRangeKm: 20,
    maximumSpeedMach: 3.4,
    maximumOverloadG: 12,
    missileGuidanceTimeS: 30,
    explosiveType: "RDX/TNT",
    explosiveMassKg: 18.14,
    tntEquivalentKg: 23.22,
    vehicles: [
      {
        id: "red_top_dh_110_sea_vixen",
        vehicleId: "dh_110_sea_vixen",
        vehicleName: "Sea Vixen F.A.W. Mk.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "9.0",
          SB: "8.3"
        }
      },
      {
        id: "red_top_lightning_f6",
        vehicleId: "lightning_f6",
        vehicleName: "Lightning F.6",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "firestreak",
    designation: "Firestreak",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 136,
    lockRangeRearAspectKm: 4,
    launchRangeKm: 7,
    maximumSpeedMach: 3.4,
    maximumOverloadG: 15,
    missileGuidanceTimeS: 13,
    explosiveType: "RDX/TNT",
    explosiveMassKg: 8.75,
    tntEquivalentKg: 11.2,
    vehicles: [
      {
        id: "firestreak_dh_110_sea_vixen",
        vehicleId: "dh_110_sea_vixen",
        vehicleName: "Sea Vixen F.A.W. Mk.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "9.0",
          SB: "8.3"
        }
      },
      {
        id: "firestreak_javelin_fmk9",
        vehicleId: "javelin_fmk9",
        vehicleName: "Javelin F.(A.W.) Mk.9",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.7"
        }
      },
      {
        id: "firestreak_lightning_f6",
        vehicleId: "lightning_f6",
        vehicleName: "Lightning F.6",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "sraam",
    designation: "SRAAM",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 70,
    lockRangeRearAspectKm: 4,
    launchRangeKm: 3,
    maximumSpeedMach: 2.4,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 6,
    explosiveType: "TNT",
    explosiveMassKg: 4,
    vehicles: [
      {
        id: "sraam_hunter_f6",
        vehicleId: "hunter_f6",
        vehicleName: "Hunter F.6",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "sraam_harrier_gr1",
        vehicleId: "harrier_gr1",
        vehicleName: "Harrier GR.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.7",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "skyflash_df",
    designation: "Skyflash (Dogfight)",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 193,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 37,
    launchRangeKm: 50,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.47,
    vehicles: [
      {
        id: "skyflash_df_f-4m_fgr2",
        vehicleId: "f-4m_fgr2",
        vehicleName: "Phantom FGR.2",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "skyflash_df_tornado_f3",
        vehicleId: "tornado_f3",
        vehicleName: "Tornado F.3",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        icon: "radar-white"
      },
      {
        id: "skyflash_df_f-4k",
        vehicleId: "f-4k",
        vehicleName: "Phantom FG.1",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "11.3"
        }
      },
      {
        id: "skyflash_df_hawk_200_rda",
        vehicleId: "hawk_200_rda",
        vehicleName: "Hawk 200 RDA",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "skyflash_df_f-4jk",
        vehicleId: "f-4jk",
        vehicleName: "F-4J(UK) Phantom II",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "12.0",
          SB: "12.0"
        }
      }
    ]
  },
  {
    id: "skyflash_super_temp",
    designation: "Skyflash SuperTEMP",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 108.2,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 37,
    launchRangeKm: 50,
    maximumSpeedMach: 4.4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 50,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.47,
    vehicles: [
      {
        id: "skyflash_super_temp_tornado_f3",
        vehicleId: "tornado_f3",
        vehicleName: "Tornado F.3",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        }
      },
      {
        id: "skyflash_super_temp_tornado_f3_late",
        vehicleId: "tornado_f3_late",
        vehicleName: "Tornado F.3 Late",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.3"
        },
        icon: "radar-white"
      }
    ]
  },
  {
    id: "magic_2",
    designation: "Matra R550 Magic 2",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 89,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3.4,
    IRCCM: true,
    launchRangeKm: 10,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 25,
    explosiveType: "HBX",
    explosiveMassKg: 6,
    tntEquivalentKg: 9.6,
    vehicles: [
      {
        id: "magic_2_jaguar_is",
        vehicleId: "jaguar_is",
        vehicleName: "Jaguar IS",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.3"
        }
      },
      {
        id: "magic_2_mirage_2000_5ei",
        vehicleId: "mirage_2000_5ei",
        vehicleName: "␗Mirage 2000-5Ei",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      }
    ]
  },
  {
    id: "r_darter",
    designation: "R-Darter",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 120,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 70,
    explosiveType: "HBX",
    explosiveMassKg: 5,
    tntEquivalentKg: 8,
    vehicles: [
      {
        id: "r_darter_saab_jas39c_south_africa",
        vehicleId: "saab_jas39c_south_africa",
        vehicleName: "▄JAS39C",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "South Africa (modern)",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "python_3",
    designation: "Python 3",
    category: "IR",
    family: "IR",
    icon: "ir-green",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 121,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: false,
    launchRangeKm: 18,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 5,
    tntEquivalentKg: 8,
    vehicles: [
      {
        id: "python_3_f-5e_fcu_thailand",
        vehicleId: "f-5e_fcu_thailand",
        vehicleName: "▄F-5E FCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "python_3_f-5t_thailand",
        vehicleId: "f-5t_thailand",
        vehicleName: "▄F-5T SCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "python_3_f-5th_thailand",
        vehicleId: "f-5th_thailand",
        vehicleName: "▄F-5TH TCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "python_3_f_16a_block_15_ocu_thailand",
        vehicleId: "f_16a_block_15_ocu_thailand",
        vehicleName: "▄F-16A OCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-yellow"
      }
    ]
  },
  {
    id: "aim_9p_4",
    designation: "AIM-9P-4 Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 76.93,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: false,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 40,
    explosiveType: "HBX",
    explosiveMassKg: 4.76,
    tntEquivalentKg: 7.62,
    vehicles: [
      {
        id: "aim_9p_4_hawk_209_indonesia",
        vehicleId: "hawk_209_indonesia",
        vehicleName: "◥Hawk 209",
        vehicleTechTree: "Japan",
        vehicleOperator: "Indonesia",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "derby",
    designation: "Derby",
    category: "Radar",
    family: "ARH",
    icon: "radar-yellow",
    variant: "ARH+IOG+DL",
    projectileMassKg: 118,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 70,
    explosiveType: "HBX",
    explosiveMassKg: 5,
    tntEquivalentKg: 8,
    vehicles: [
      {
        id: "derby_f-5th_thailand",
        vehicleId: "f-5th_thailand",
        vehicleName: "▄F-5TH TCU",
        vehicleTechTree: "Japan",
        vehicleOperator: "Thailand",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "aam_3",
    designation: "AAM-3",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidanceCage: "Uncaged",
    projectileMassKg: 91,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: true,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 45,
    explosiveType: "PBXN-102",
    explosiveMassKg: 3.8,
    tntEquivalentKg: 4.86,
    vehicles: [
      {
        id: "aam_3_f_2a_adtw",
        vehicleId: "f_2a_adtw",
        vehicleName: "F-2A ADTW",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "aam_3_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aam_3_f_2a",
        vehicleId: "f_2a",
        vehicleName: "F-2A",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "aam_4",
    designation: "AAM-4",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 222,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 100,
    maximumSpeedMach: 4,
    maximumOverloadG: 32,
    missileGuidanceTimeS: 100,
    explosiveType: "PBXN-102",
    explosiveMassKg: 12.64,
    tntEquivalentKg: 16.18,
    vehicles: [
      {
        id: "aam_4_f_15j_kai",
        vehicleId: "f_15j_kai",
        vehicleName: "F-15J(M)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "aam_4_f_2a",
        vehicleId: "f_2a",
        vehicleName: "F-2A",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      }
    ]
  },
  {
    id: "rvv_sd",
    designation: "RVV-SD",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 190,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 120,
    maximumSpeedMach: 4,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 120,
    explosiveType: "TGAF-5",
    explosiveMassKg: 9.73,
    tntEquivalentKg: 15.56,
    vehicles: [
      {
        id: "rvv_sd_su_30mkm",
        vehicleId: "su_30mkm",
        vehicleName: "▄Su-30MKM",
        vehicleTechTree: "Japan",
        vehicleOperator: "Malaysia",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      }
    ]
  },
  {
    id: "pl_2",
    designation: "PL-2",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 75.3,
    lockRangeRearAspectKm: 3.5,
    launchRangeKm: 9,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 21,
    explosiveType: "TGAF-5",
    explosiveMassKg: 5.5,
    tntEquivalentKg: 8.8,
    vehicles: [
      {
        id: "pl_2_mig-19j_6a",
        vehicleId: "mig-19j_6a",
        vehicleName: "J-6A",
        vehicleTechTree: "China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "10.0",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "pl_2_j_7_mk2",
        vehicleId: "j_7_mk2",
        vehicleName: "J-7II",
        vehicleTechTree: "China",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "pl_2_mig-17_f5",
        vehicleId: "mig-17_f5",
        vehicleName: "Shenyang F-5",
        vehicleTechTree: "China",
        vehicleOperator: "North Korea",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        }
      },
      {
        id: "pl_2_j_7e",
        vehicleId: "j_7e",
        vehicleName: "J-7E",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.3",
          SB: "11.0"
        }
      },
      {
        id: "pl_2_j_7d",
        vehicleId: "j_7d",
        vehicleName: "J-7D",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "11.0"
        }
      }
    ]
  },
  {
    id: "pl_5b",
    designation: "PL-5B",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 84.5,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 16,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 23,
    explosiveType: "HBX",
    explosiveMassKg: 4.76,
    tntEquivalentKg: 7.62,
    vehicles: [
      {
        id: "pl_5b_j_7e",
        vehicleId: "j_7e",
        vehicleName: "J-7E",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.3",
          SB: "11.0"
        }
      },
      {
        id: "pl_5b_j_8b",
        vehicleId: "j_8b",
        vehicleName: "J-8B",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.7"
        }
      },
      {
        id: "pl_5b_jh_7",
        vehicleId: "jh_7",
        vehicleName: "JH-7",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "pl_5b_j_7d",
        vehicleId: "j_7d",
        vehicleName: "J-7D",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "11.0"
        }
      },
      {
        id: "pl_5b_j_8f",
        vehicleId: "j_8f",
        vehicleName: "J-8F",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: 'ir-white'
      },
      {
        id: "pl_5b_jh_7a",
        vehicleId: "jh_7a",
        vehicleName: "JH-7A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "ir-white"
      },
      {
        id: "pl_5b_jh_7a_prototype",
        vehicleId: "jh_7a_prototype",
        vehicleName: "JH-7A Prototype",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "ir-white"
      },
      {
        id: "pl_5b_jh_7a2",
        vehicleId: "jh_7a2",
        vehicleName: "JH-7A2",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "ir-white"
      }
    ]
  },
  {
    id: "magic_1",
    designation: "Matra R550 Magic 1",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 89,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 10,
    maximumSpeedMach: 3,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 25,
    explosiveType: "HBX",
    explosiveMassKg: 6,
    tntEquivalentKg: 9.6,
    vehicles: [
      {
        id: "magic_1_a_5c",
        vehicleId: "a_5c",
        vehicleName: "A-5C",
        vehicleTechTree: "China",
        vehicleOperator: "Pakistan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.7",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "aspide_1a",
    designation: "Aspide-1A",
    category: "Radar",
    family: "SARH",
    icon: "radar-orange",
    variant: "SARH",
    projectileMassKg: 230,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 30,
    launchRangeKm: 80,
    maximumSpeedMach: 5,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 45,
    explosiveType: "PBXN-4",
    explosiveMassKg: 8,
    tntEquivalentKg: 6.64,
    vehicles: [
      {
        id: "aspide_1a_j_8b",
        vehicleId: "j_8b",
        vehicleName: "J-8B",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "pl_5c",
    designation: "PL-5C",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 84.5,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 2.5,
    IRCCM: false,
    launchRangeKm: 16,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 23,
    explosiveType: "HBX",
    explosiveMassKg: 4.76,
    tntEquivalentKg: 7.62,
    vehicles: [
      {
        id: "pl_5c_jh_7",
        vehicleId: "jh_7",
        vehicleName: "JH-7",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "pl_5c_jh_7a",
        vehicleId: "jh_7a",
        vehicleName: "JH-7A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "pl_5c_jh_7a_prototype",
        vehicleId: "jh_7a_prototype",
        vehicleName: "JH-7A Prototype",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "pl_5c_jh_7a2",
        vehicleId: "jh_7a2",
        vehicleName: "JH-7A2",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "pl_5e_2",
    designation: "PL-5EII",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 83,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3.4,
    IRCCM: true,
    launchRangeKm: 16,
    maximumSpeedMach: 3,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 23,
    explosiveType: "HBX",
    explosiveMassKg: 4.76,
    tntEquivalentKg: 7.62,
    vehicles: [
      {
        id: "pl_5e_2_jh_7",
        vehicleId: "jh_7",
        vehicleName: "JH-7",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.3"
        }
      },
      {
        id: "pl_5e_2_j_8f",
        vehicleId: "j_8f",
        vehicleName: "J-8F",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "pl_5e_2_jh_7a",
        vehicleId: "jh_7a",
        vehicleName: "JH-7A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "pl_5e_2_jh_7a_prototype",
        vehicleId: "jh_7a_prototype",
        vehicleName: "JH-7A Prototype",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "pl_5e_2_j_10a",
        vehicleId: "j_10a",
        vehicleName: "J-10A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-orange"
      },
      {
        id: "pl_5e_2_jh_7a2",
        vehicleId: "jh_7a2",
        vehicleName: "JH-7A2",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "pl_5e_2_jf_17",
        vehicleId: "jf_17",
        vehicleName: "JF-17",
        vehicleTechTree: "China",
        vehicleOperator: "Pakistan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "ir-orange"
      }
    ]
  },
  {
    id: "pl_7",
    designation: "PL-7",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "Rear-aspect",
    projectileMassKg: 89,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 10,
    maximumSpeedMach: 3,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 25,
    explosiveType: "HBX",
    explosiveMassKg: 6,
    tntEquivalentKg: 9.6,
    vehicles: [
      {
        id: "pl_7_j_7d",
        vehicleId: "j_7d",
        vehicleName: "J-7D",
        vehicleTechTree: "China",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "11.0"
        }
      }
    ]
  },
  {
    id: "pl_8",
    designation: "PL-8",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 121,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3,
    IRCCM: false,
    launchRangeKm: 18,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 5,
    tntEquivalentKg: 8,
    vehicles: [
      {
        id: "pl_8_j_8f",
        vehicleId: "j_8f",
        vehicleName: "J-8F",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "pl_8_jh_7a",
        vehicleId: "jh_7a",
        vehicleName: "JH-7A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "ir-green"
      },
      {
        id: "pl_8_jh_7a_prototype",
        vehicleId: "jh_7a_prototype",
        vehicleName: "JH-7A Prototype",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        },
        icon: "ir-green"
      },
      {
        id: "pl_8_jh_7a2",
        vehicleId: "jh_7a2",
        vehicleName: "JH-7A2",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "ir-green"
      }
    ]
  },
  {
    id: "pl_12",
    designation: "PL-12",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 198,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 4,
    maximumOverloadG: 38,
    missileGuidanceTimeS: 80,
    explosiveType: "DHL-1",
    explosiveMassKg: 9.2,
    tntEquivalentKg: 11.96,
    vehicles: [
      {
        id: "pl_12_j_8f",
        vehicleId: "j_8f",
        vehicleName: "J-8F",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "pl_12_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        },
        icon: "radar-yellow"
      },
      {
        id: "pl_12_j_10a",
        vehicleId: "j_10a",
        vehicleName: "J-10A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "pl_12_jh_7a2",
        vehicleId: "jh_7a2",
        vehicleName: "JH-7A2",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.0",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "pl_12_j_11b",
        vehicleId: "j_11b",
        vehicleName: "J-11B",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "radar-orange"
      },
      {
        id: "pl_12_j_10c",
        vehicleId: "j_10c",
        vehicleName: "J-10C",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "pl_12_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        },
        icon: "radar-red"
      }
    ]
  },
  {
    id: "pl_8b",
    designation: "PL-8B",
    category: "IR",
    family: "IR",
    icon: "ir-yellow",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Uncaged",
    aspect: "All-aspects",
    projectileMassKg: 121,
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectsKm: 3.4,
    IRCCM: true,
    launchRangeKm: 18,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 5,
    tntEquivalentKg: 8,
    vehicles: [
      {
        id: "pl_8b_su_30mkk",
        vehicleId: "su_30mkk",
        vehicleName: "␗Su-30MKK",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "pl_8b_j_10a",
        vehicleId: "j_10a",
        vehicleName: "J-10A",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-green"
      },
      {
        id: "pl_8b_j_11b",
        vehicleId: "j_11b",
        vehicleName: "J-11B",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        },
        icon: "ir-orange"
      },
      {
        id: "pl_8b_j_10c",
        vehicleId: "j_10c",
        vehicleName: "J-10C",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "ir-green"
      },
      {
        id: "pl_8b_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        },
        icon: "ir-orange"
      }
    ]
  },
  {
    id: "mica_em",
    designation: "MICA-EM",
    category: "Radar",
    family: "ARH",
    icon: "radar-green",
    variant: "ARH+IOG+DL",
    projectileMassKg: 112,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 50,
    maximumSpeedMach: 4,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 70,
    explosiveType: "PBXN-110",
    explosiveMassKg: 3.7,
    tntEquivalentKg: 4.74,
    vehicles: [
      {
        id: "mica_em_mirage_2000_5ei",
        vehicleId: "mirage_2000_5ei",
        vehicleName: "␗Mirage 2000-5Ei",
        vehicleTechTree: "China",
        vehicleOperator: "Republic of China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      }
    ]
  },
  {
    id: "sd_10a",
    designation: "SD-10(A)",
    category: "Radar",
    family: "ARH",
    icon: "radar-red",
    variant: "ARH+IOG+DL",
    projectileMassKg: 198,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 5,
    maximumOverloadG: 38,
    missileGuidanceTimeS: 80,
    explosiveType: "DHL-1",
    explosiveMassKg: 9.2,
    tntEquivalentKg: 11.96,
    vehicles: [
      {
        id: "sd_10a_jf_17",
        vehicleId: "jf_17",
        vehicleName: "JF-17",
        vehicleTechTree: "China",
        vehicleOperator: "Pakistan",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.3",
          SB: "13.3"
        }
      }
    ]
  },
  {
    id: "pl_12a",
    designation: "PL-12A",
    category: "Radar",
    family: "ARH",
    icon: "radar-blue",
    variant: "ARH+IOG+DL",
    projectileMassKg: 214,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 120,
    maximumSpeedMach: 4,
    maximumOverloadG: 38,
    missileGuidanceTimeS: 120,
    explosiveType: "DHL-1",
    explosiveMassKg: 9.2,
    tntEquivalentKg: 11.96,
    vehicles: [
      {
        id: "pl_12a_j_10c",
        vehicleId: "j_10c",
        vehicleName: "J-10C",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "pl_12a_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        },
        icon: "radar-green"
      }
    ]
  },
  {
    id: "a_91",
    designation: "A-91",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 75.3,
    lockRangeRearAspectKm:3.54,
    launchRangeKm: 9,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 21,
    explosiveType: "TGAF-5",
    explosiveMassKg: 5.5,
    tntEquivalentKg: 8.8,
    vehicles: [
      {
        id: "a_91_iar_93b",
        vehicleId: "iar_93b",
        vehicleName: "IAR-93B",
        vehicleTechTree: "Italy",
        vehicleOperator: "Romania",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        }
      }
    ]
  }
];