import type { AgmDefinition } from '@/types/AgmMissiles'

export const agmMissiles: AgmDefinition[] = [
  {
    id: "agm_12b",
    designation: "AGM-12B Bullpup",
    category: "Manual",
    family: "Manual",
    icon: "agm-blue",
    projectileMassKg: 259,
    guidance: "Manual",
    maximumSpeedMs: 455,
    launchRangeKm: 8,
    missileGuidanceTimeS: 30,
    explosiveType: "Comp.H6",
    explosiveMassKg: 58.05,
    tntEquivalentKg: 58.05,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_12b_a_4b",
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
        id: "agm_12b_a_4e_early",
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
        id: "agm_12b_fj_4b_agm_12b",
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
        id: "agm_12b_f-100d",
        vehicleId: "f-100d",
        vehicleName: "F-100D",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "agm_12b_f-4c",
        vehicleId: "f-4c",
        vehicleName: "F-4C Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "agm_12b_f-8e",
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
        id: "agm_12b_f-105d",
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
        id: "agm_12b_f-5c",
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
        id: "agm_12b_f-5a",
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
        id: "agm_12b_f_111a",
        vehicleId: "f_111a",
        vehicleName: "F-111A",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "10.7",
          SB: "10.3"
        }
      }
    ]
  },
  {
    id: "agm_12c",
    designation: "AGM-12C Bullpup",
    category: "Manual",
    family: "Manual",
    icon: "agm-orange",
    projectileMassKg: 810,
    guidance: "Manual",
    maximumSpeedMs: 445,
    missileGuidanceTimeS: 30,
    explosiveType: "TNT",
    explosiveMassKg: 136.5,
    vehicles: [
      {
        id: "agm_12c_a_4b",
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
        id: "agm_12c_a_4e_early",
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
        id: "agm_12c_f-4c",
        vehicleId: "f-4c",
        vehicleName: "F-4C Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.0",
          SB: "10.3"
        }
      },
      {
        id: "agm_12c_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "agm_65b",
    designation: "AGM-65B",
    category: "TV",
    family: "TV",
    icon: "agm-blue",
    projectileMassKg: 210.5,
    guidance: "TV",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "Composition B",
    explosiveMassKg: 39.1,
    tntEquivalentKg: 51.2,
    vehicles: [
      {
        id: "agm_65b_a_10a_early",
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
        id: "agm_65b_f-5e",
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
        id: "agm_65b_f-4e",
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
        id: "agm_65b_a_7k",
        vehicleId: "a_7k",
        vehicleName: "A-7K",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "10.7",
          SB: "10.7"
        }
      },
      {
        id: "agm_65b_f_16a_block_10",
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
        id: "agm_65b_f_20a",
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
        id: "agm_65b_f_16xl",
        vehicleId: "f_16xl",
        vehicleName: "F-16XL",
        vehicleTechTree: "USA",
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
    id: "agm_65d",
    designation: "AGM-65D",
    category: "IR",
    family: "IR",
    icon: "agm-blue",
    projectileMassKg: 226.8,
    guidance: "IR",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "Composition B",
    explosiveMassKg: 39.1,
    tntEquivalentKg: 51.2,
    vehicles: [
      {
        id: "agm_65d_a_10a_late",
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
        id: "agm_65d_a_10c",
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
        id: "agm_65d_f_111f",
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
        id: "agm_65d_av_8b_plus",
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
        id: "agm_65d_f_15e",
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
        id: "agm_65d_f_16c_block_50",
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
        id: "agm_65d_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
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
    id: "agm_65a",
    designation: "AGM-65A",
    category: "TV",
    family: "TV",
    icon: "agm-blue",
    projectileMassKg: 210.5,
    guidance: "TV",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "Composition B",
    explosiveMassKg: 39.1,
    tntEquivalentKg: 51.2,
    vehicles: [
      {
        id: "agm_65a_a_7d",
        vehicleId: "a_7d",
        vehicleName: "A-7D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3",
          SB: "10.0"
        }
      }
    ]
  },
  {
    id: "agm_65f",
    designation: "AGM-65F",
    category: "IR",
    family: "IR",
    icon: "agm-orange",
    projectileMassKg: 303.5,
    guidance: "IR",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 44.6,
    vehicles: [
      {
        id: "agm_65f_av_8b_na",
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
        id: "agm_65f_fa_18c_late",
        vehicleId: "fa_18c_late",
        vehicleName: "F/A-18C Late",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        },
        icon: "agm-green"
      },
      {
        id: "agm_65f_av_8b_plus",
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
        id: "agm_65f_fa_18c_early",
        vehicleId: "fa_18c_early",
        vehicleName: "F/A-18C Early",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        icon: "agm-green"
      },
      {
        id: "agm_65f_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "agm-green"
      }
    ]
  },
  {
    id: "agm_65e2",
    designation: "AGM-65E2",
    category: "Laser",
    family: "Laser",
    icon: "agm-yellow",
    projectileMassKg: 291.2,
    guidance: "Laser",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 44.6,
    vehicles: [
      {
        id: "agm_65e2_av_8b_na",
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
        id: "agm_65e2_av_8b_plus",
        vehicleId: "av_8b_plus",
        vehicleName: "AV-8B Plus",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.0"
        },
        icon: "agm-green"
      }
    ]
  },
  {
    id: "agm_65l",
    designation: "AGM-65L",
    category: "Laser",
    family: "Laser",
    icon: "agm-yellow",
    projectileMassKg: 291.2,
    guidance: "Laser",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 44.6,
    vehicles: [
      {
        id: "agm_65l_a_10c",
        vehicleId: "a_10c",
        vehicleName: "A-10C",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "agm_65g",
    designation: "AGM-65G",
    category: "IR",
    family: "IR",
    icon: "agm-orange",
    projectileMassKg: 303.5,
    guidance: "IR",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 44.6,
    vehicles: [
      {
        id: "agm_65g_a_10c",
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
        id: "agm_65g_f_111f",
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
        id: "agm_65g_f_15e",
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
        id: "agm_65g_f_16c_block_50",
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
        id: "agm_65g_f_16c_block_52_aesa",
        vehicleId: "f_16c_block_52_aesa",
        vehicleName: "F-16CM PoBIT",
        vehicleTechTree: "USA",
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
    id: "agm_65e",
    designation: "AGM-65E",
    category: "Laser",
    family: "Laser",
    icon: "agm-yellow",
    projectileMassKg: 291.2,
    guidance: "Laser",
    launchRangeKm: 23,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 105,
    explosiveType: "PBX(AF)-108",
    explosiveMassKg: 36.3,
    tntEquivalentKg: 44.6,
    vehicles: [
      {
        id: "agm_65e_fa_18c_late",
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
        id: "agm_65e_fa_18c_early",
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
        id: "agm_65e_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
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
    id: "agm_84h",
    designation: "AGM-84H",
    category: "IR",
    family: "IR+IOG+GNSS",
    icon: "agm-orange",
    projectileMassKg: 668.1,
    guidance: "IR+IOG+GNSS",
    launchRangeKm: 140,
    maximumSpeedMach: 0.9,
    missileGuidanceTimeS: 530,
    explosiveType: "PBXN-3",
    explosiveMassKg: 75.5,
    tntEquivalentKg: 97.3,
    vehicles: [
      {
        id: "agm_84h_fa_18c_late",
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
        id: "agm_84h_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
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
    id: "as_20_nord",
    designation: "AS-20 Nord",
    category: "Manual",
    family: "Manual",
    icon: "agm-blue",
    projectileMassKg: 143.8,
    guidance: "Manual",
    maximumSpeedMach: 1.7,
    missileGuidanceTimeS: 30,
    explosiveType: "Composition B",
    explosiveMassKg: 12.1,
    tntEquivalentKg: 15.9,
    vehicles: [
      {
        id: "as_20_nord_fiat_g91_r4_german",
        vehicleId: "fiat_g91_r4_german",
        vehicleName: "◄G.91 R/4",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "as_20_nord_fiat_g91_r3",
        vehicleId: "fiat_g91_r3",
        vehicleName: "◄G.91 R/3",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      }
    ]
  }
];