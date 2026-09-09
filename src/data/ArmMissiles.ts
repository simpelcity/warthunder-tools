import type { ArmDefinition } from '@/types/ArmMissiles'

export const armMissiles: ArmDefinition[] = [
  {
    id: "agm_45b_3b",
    designation: "AGM-45B-3B Shrike",
    category: "PRH",
    family: "PRH",
    icon: "arm-red",
    projectileMassKg: 192.32,
    guidance: "PRH",
    band: ["E", "F"],
    lockRangeKm: 100,
    launchRangeKm: 50,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-110",
    explosiveMassKg: 22.68,
    tntEquivalentKg: 29.03,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_45b_3b_f-4c",
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
        id: "agm_45b_3b_f-105d",
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
        id: "agm_45b_3b_f_111a",
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
    id: "agm_45b_4",
    designation: "AGM-45B-4 Shrike",
    category: "SARH",
    family: "SARH",
    icon: "arm-yellow",
    projectileMassKg: 192.32,
    guidance: "SARH",
    band: ["G"],
    lockRangeKm: 100,
    launchRangeKm: 50,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-110",
    explosiveMassKg: 22.68,
    tntEquivalentKg: 29.03,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_45b_4_f-4c",
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
        id: "agm_45b_4_f-105d",
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
        id: "agm_45b_4_f_111a",
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
    id: "agm_45b_6",
    designation: "AGM-45B-6 Shrike",
    category: "PRH",
    family: "PRH",
    icon: "arm-blue",
    projectileMassKg: 192.32,
    guidance: "PRH",
    band: ["I"],
    lockRangeKm: 100,
    launchRangeKm: 50,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-110",
    explosiveMassKg: 22.68,
    tntEquivalentKg: 29.03,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_45b_6_f-4c",
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
        id: "agm_45b_6_f-105d",
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
        id: "agm_45b_6_f_111a",
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
    id: "agm_45b_9",
    designation: "AGM-45B-9 Shrike",
    category: "PRH",
    family: "PRH",
    icon: "arm-blue",
    projectileMassKg: 192.32,
    guidance: "PRH",
    band: ["H", "I"],
    lockRangeKm: 100,
    launchRangeKm: 50,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-110",
    explosiveMassKg: 22.68,
    tntEquivalentKg: 29.03,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_45b_9_f-4e",
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
        id: "agm_45b_9_a_7e",
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
        id: "agm_45b_9_a_6e_tram",
        vehicleId: "a_6e_tram",
        vehicleName: "A-6E TRAM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "agm_45b_10",
    designation: "AGM-45B-10 Shrike",
    category: "PRH",
    family: "PRH",
    icon: "arm-red",
    projectileMassKg: 192.32,
    guidance: "PRH",
    band: ["E", "F", "G"],
    lockRangeKm: 100,
    launchRangeKm: 50,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 150,
    explosiveType: "PBXN-110",
    explosiveMassKg: 22.68,
    tntEquivalentKg: 29.03,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_45b_10_f-4e",
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
        id: "agm_45b_10_a_7e",
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
        id: "agm_45b_10_a_6e_tram",
        vehicleId: "a_6e_tram",
        vehicleName: "A-6E TRAM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.7",
          SB: "10.7"
        }
      }
    ]
  },
  {
    id: "agm_88a",
    designation: "AGM-88A",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-blue",
    projectileMassKg: 362.87,
    guidance: "PRH+IOG",
    band: ["E", "F", "G", "H", "I", "J"],
    lockRangeKm: 100,
    launchRangeKm: 150,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 200,
    explosiveType: "PBXN-107",
    explosiveMassKg: 20.6,
    tntEquivalentKg: 21.63,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_88a_fa_18a",
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
        id: "agm_88a_fa_18c_late",
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
        id: "agm_88a_fa_18c_early",
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
        id: "agm_88a_fa_18c_late_switzerland",
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
    id: "agm_122",
    designation: "AGM-122 Sidearm",
    category: "PRH",
    family: "PRH",
    icon: "arm-green",
    projectileMassKg: 95.25,
    guidance: "PRH",
    band: ["J"],
    lockRangeKm: 100,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    missileGuidanceTimeS: 60,
    explosiveType: "HMX",
    explosiveMassKg: 2.95,
    tntEquivalentKg: 4.88,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_122_av_8b_plus",
        vehicleId: "av_8b_plus",
        vehicleName: "AV-8B Plus",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.3",
          RB: "13.0",
          SB: "13.0"
        }
      }
    ]
  },
  {
    id: "agm_88c",
    designation: "AGM-88C HARM",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-green",
    projectileMassKg: 362.87,
    guidance: "PRH+IOG",
    band: ["C", "D", "E", "F", "G", "H", "I", "J"],
    lockRangeKm: 100,
    launchRangeKm: 150,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 200,
    explosiveType: "PBXN-107",
    explosiveMassKg: 20.6,
    tntEquivalentKg: 21.63,
    warhead: "HE",
    vehicles: [
      {
        id: "agm_88c_f_16c_block_50",
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
        id: "agm_88c_f_16c_block_52_aesa",
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
        id: "agm_88c_fa_18e_block_2",
        vehicleId: "fa_18e_block_2",
        vehicleName: "F/A-18E",
        vehicleTechTree: "USA",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        },
        icon: "arm-blue"
      },
      {
        id: "agm_88c_tornado_ids_de_assta3_sle",
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
      },
      {
        id: "agm_88c_ef_2000_block_10",
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
        id: "agm_88c_ef_2000_aesa",
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
      }
    ]
  },
  {
    id: "kh_58u_i",
    designation: "KH-58U",
    category: "PRH",
    family: "PRH",
    icon: "arm-blue",
    projectileMassKg: 640,
    guidance: "PRH",
    band: ["I"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 4.5,
    missileGuidanceTimeS: 240,
    explosiveType: "TGAF-5M",
    explosiveMassKg: 110,
    tntEquivalentKg: 176,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_58u_i_su_22m4",
        vehicleId: "su_22m4",
        vehicleName: "◊Su-22M4",
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
        id: "kh_58u_i_su_25t",
        vehicleId: "su_25t",
        vehicleName: "Su-25T",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "kh_58u_fgh",
    designation: "KH-58U",
    category: "PRH",
    family: "PRH",
    icon: "arm-red",
    projectileMassKg: 640,
    guidance: "PRH",
    band: ["F", "G", "H"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 4.5,
    missileGuidanceTimeS: 240,
    explosiveType: "TGAF-5M",
    explosiveMassKg: 110,
    tntEquivalentKg: 176,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_58u_fgh_su_22m4",
        vehicleId: "su_22m4",
        vehicleName: "◊Su-22M4",
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
        id: "kh_58u_fgh_su_25t",
        vehicleId: "su_25t",
        vehicleName: "Su-25T",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "kh_58u_de",
    designation: "KH-58U",
    category: "PRH",
    family: "PRH",
    icon: "arm-green",
    projectileMassKg: 640,
    guidance: "PRH",
    band: ["D", "E"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 4.5,
    missileGuidanceTimeS: 240,
    explosiveType: "TGAF-5M",
    explosiveMassKg: 110,
    tntEquivalentKg: 176,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_58u_de_su_22m4",
        vehicleId: "su_22m4",
        vehicleName: "◊Su-22M4",
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
        id: "kh_58u_de_su_25t",
        vehicleId: "su_25t",
        vehicleName: "Su-25T",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.7"
        }
      }
    ]
  },
  {
    id: "kh_27ps",
    designation: "KH-27PS",
    category: "PRH",
    family: "PRH",
    icon: "arm-yellow",
    projectileMassKg: 311,
    guidance: "PRH",
    band: ["I"],
    lockRangeKm: 100,
    launchRangeKm: 40,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 90,
    explosiveType: "TG-40",
    explosiveMassKg: 80,
    tntEquivalentKg: 102.4,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_27ps_su_22m4",
        vehicleId: "su_22m4",
        vehicleName: "◊Su-22M4",
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
        id: "kh_27ps_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "MiG-27M",
        vehicleTechTree: "USSR",
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
    id: "kh_31p_l_111",
    designation: "KH-31P L-111",
    category: "PRH",
    family: "PRH",
    icon: "arm-blue-1",
    projectileMassKg: 600,
    guidance: "PRH",
    band: ["I"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 3.5,
    missileGuidanceTimeS: 120,
    explosiveType: "Hexal",
    explosiveMassKg: 68.5,
    tntEquivalentKg: 116.45,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_31p_l_111_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "MiG-27M",
        vehicleTechTree: "USSR",
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
    id: "kh_31p_l_112",
    designation: "KH-31P L-112",
    category: "PRH",
    family: "PRH",
    icon: "arm-red-1",
    projectileMassKg: 600,
    guidance: "PRH",
    band: ["D", "E", "F"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 3.5,
    missileGuidanceTimeS: 120,
    explosiveType: "Hexal",
    explosiveMassKg: 68.5,
    tntEquivalentKg: 116.45,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_31p_l_112_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "MiG-27M",
        vehicleTechTree: "USSR",
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
    id: "kh_31p_l_113",
    designation: "KH-31P L-113",
    category: "PRH",
    family: "PRH",
    icon: "arm-green-1",
    projectileMassKg: 600,
    guidance: "PRH",
    band: ["G", "H"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 3.5,
    missileGuidanceTimeS: 120,
    explosiveType: "Hexal",
    explosiveMassKg: 68.5,
    tntEquivalentKg: 116.45,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_31p_l_113_mig_27m",
        vehicleId: "mig_27m",
        vehicleName: "MiG-27M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.7"
        }
      }
    ]
  }
];