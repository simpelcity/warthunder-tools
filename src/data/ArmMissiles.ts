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
      },
      {
        id: "agm_45b_9_a_7e_thailand",
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
      },
      {
        id: "agm_45b_9_f-4e_iaf",
        vehicleId: "f-4e_iaf",
        vehicleName: "Kurnass",
        vehicleTechTree: "Israel",
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
      },
      {
        id: "agm_45b_10_a_7e_thailand",
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
      },
      {
        id: "agm_45b_10_f-4e_iaf",
        vehicleId: "f-4e_iaf",
        vehicleName: "Kurnass",
        vehicleTechTree: "Israel",
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
      },
      {
        id: "agm_88a_fa_18a_raaf",
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
        id: "agm_88a_fa_18a_hug_2_raaf",
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
        id: "agm_88a_fa_18d_late_malaysia",
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
        id: "agm_88a_tornado_ids_it_ret8",
        vehicleId: "tornado_ids_it_ret8",
        vehicleName: "▄Tornado IDS MLU (RET.8)",
        vehicleTechTree: "Italy",
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
      },
      {
        id: "agm_122_av_8b_plus_italy",
        vehicleId: "av_8b_plus_italy",
        vehicleName: "▄AV-8B Plus",
        vehicleTechTree: "Italy",
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
      },
      {
        id: "agm_88c_ef_2000_fgr4",
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
        id: "agm_88c_ef_2000_typhoon_aesa",
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
        id: "agm_88c_fa_18f_block_2_raaf",
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
        icon: "arm-blue"
      },
      {
        id: "agm_88c_f_16a_block_72v_china",
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
      },
      {
        id: "agm_88c_ef_2000a",
        vehicleId: "ef_2000a",
        vehicleName: "F-2000A",
        vehicleTechTree: "Italy",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.3",
          RB: "14.3",
          SB: "14.3"
        }
      },
      {
        id: "agm_88c_ef_2000a_aesa",
        vehicleId: "ef_2000a_aesa",
        vehicleName: "F-2000A (AESA)",
        vehicleTechTree: "Italy",
        vehicleRank: "IX",
        vehicleBr: {
          AB: "14.7",
          RB: "14.7",
          SB: "14.7"
        }
      },
      {
        id: "agm_88c_fa_18c_mlu_2_finland",
        vehicleId: "fa_18c_mlu_2_finland",
        vehicleName: "▄F/A-18C MLU 2",
        vehicleTechTree: "Sweden",
        vehicleOperator: "Finland",
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
    id: "kh_58u_a",
    designation: "KH-58U A'",
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
        id: "kh_58u_a_su_22m4",
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
        id: "kh_58u_a_su_25t",
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
        id: "kh_58u_a_su_17m4",
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
        id: "kh_58u_a_su_24m",
        vehicleId: "su_24m",
        vehicleName: "Su-24M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "kh_58u_a_su_25tm",
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
      }
    ]
  },
  {
    id: "kh_58u_b",
    designation: "KH-58U B",
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
        id: "kh_58u_b_su_22m4",
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
        id: "kh_58u_b_su_25t",
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
        id: "kh_58u_b_su_17m4",
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
        id: "kh_58u_b_su_24m",
        vehicleId: "su_24m",
        vehicleName: "Su-24M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "kh_58u_b_su_25tm",
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
      }
    ]
  },
  {
    id: "kh_58u_c",
    designation: "KH-58U C",
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
        id: "kh_58u_c_su_22m4",
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
        id: "kh_58u_c_su_25t",
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
        id: "kh_58u_c_su_17m4",
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
        id: "kh_58u_c_su_24m",
        vehicleId: "su_24m",
        vehicleName: "Su-24M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        }
      },
      {
        id: "kh_58u_c_su_25tm",
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
      },
      {
        id: "kh_27ps_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "MiG-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "kh_27ps_su_22m3",
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
        id: "kh_27ps_su_17m4",
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
        id: "kh_27ps_su_22m3_hungary",
        vehicleId: "su_22m3_hungary",
        vehicleName: "◔Su-22M3",
        vehicleTechTree: "Italy",
        vehicleOperator: "Hungary",
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
      },
      {
        id: "kh_31p_l_111_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "MiG-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "kh_31p_l_111_su_25tm",
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
        id: "kh_31p_l_111_mig_29kr_9_41r",
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
        id: "kh_31p_l_111_su_30mk2v_venezuela",
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
        id: "kh_31p_l_111_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "kh_31p_l_111_mig_29m_9_15",
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
      },
      {
        id: "kh_31p_l_112_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "MiG-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "kh_31p_l_112_su_25tm",
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
        id: "kh_31p_l_112_mig_29kr_9_41r",
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
        id: "kh_31p_l_112_su_30mk2v_venezuela",
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
        id: "kh_31p_l_112_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "kh_31p_l_112_mig_29m_9_15",
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
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "kh_31p_l_113_mig_27k",
        vehicleId: "mig_27k",
        vehicleName: "MiG-27K",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.0",
          SB: "11.7"
        }
      },
      {
        id: "kh_31p_l_113_su_25tm",
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
        id: "kh_31p_l_113_mig_29kr_9_41r",
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
        id: "kh_31p_l_113_su_30mk2v_venezuela",
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
        id: "kh_31p_l_113_mig_29smt_9_19",
        vehicleId: "mig_29smt_9_19",
        vehicleName: "MiG-29SMT (9-19)",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.3",
          SB: "13.3"
        }
      },
      {
        id: "kh_31p_l_113_mig_29m_9_15",
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
    id: "kh_25mpu",
    designation: "KH-25MPU",
    category: "PRH",
    family: "PRH",
    icon: "arm-yellow",
    projectileMassKg: 319,
    guidance: "PRH",
    band: ["D", "E", "F", "G", "H", "I", "J"],
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
        id: "kh_25mpu_su_25tm",
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
      }
    ]
  },
  {
    id: "kh_58ush",
    designation: "KH-58USh",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-blue",
    projectileMassKg: 650,
    guidance: "PRH+IOG",
    band: ["D", "E", "F", "G", "H", "I"],
    lockRangeKm: 100,
    launchRangeKm: 120,
    maximumSpeedMach: 4.5,
    missileGuidanceTimeS: 500,
    explosiveType: "TGAF-5M",
    explosiveMassKg: 110,
    tntEquivalentKg: 176,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_58ush_su_25sm3",
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
      }
    ]
  },
  {
    id: "kh_31pd",
    designation: "KH-31PD",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-yellow-1",
    projectileMassKg: 715,
    guidance: "PRH+IOG",
    band: ["D", "E", "F", "G", "H", "I"],
    lockRangeKm: 100,
    launchRangeKm: 250,
    maximumSpeedMach: 4,
    missileGuidanceTimeS: 250,
    explosiveType: "Hexal",
    explosiveMassKg: 85,
    tntEquivalentKg: 144.5,
    warhead: "HE",
    vehicles: [
      {
        id: "kh_31pd_su_34",
        vehicleId: "su_34",
        vehicleName: "Su-34",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "13.7",
          RB: "13.7",
          SB: "13.3"
        }
      },
      {
        id: "kh_31pd_su_27sm",
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
        id: "kh_31pd_su_30sm",
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
        id: "kh_31pd_su_30sm2",
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
      },
      {
        id: "kh_31pd_su_30mkm",
        vehicleId: "su_30mkm",
        vehicleName: "Su-30MKM",
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
    id: "as_37_s",
    designation: "AS-37 S Martel",
    category: "PRH",
    family: "PRH",
    icon: "arm-yellow",
    projectileMassKg: 532,
    guidance: "PRH",
    band: ["E", "F"],
    lockRangeKm: 150,
    launchRangeKm: 150,
    maximumSpeedMach: 2,
    missileGuidanceTimeS: 200,
    explosiveType: "RDX",
    explosiveMassKg: 119,
    tntEquivalentKg: 190.4,
    warhead: "HE",
    vehicles: [
      {
        id: "as_37_s_buccaneer_s2b",
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
        id: "as_37_s_tornado_gr1",
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
        id: "as_37_s_jaguar_a",
        vehicleId: "jaguar_a",
        vehicleName: "Jaguar A",
        vehicleTechTree: "France",
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
    id: "as_37_c",
    designation: "AS-37 C Martel",
    category: "PRH",
    family: "PRH",
    icon: "arm-green",
    projectileMassKg: 532,
    guidance: "PRH",
    band: ["I"],
    lockRangeKm: 150,
    launchRangeKm: 150,
    maximumSpeedMach: 2,
    missileGuidanceTimeS: 200,
    explosiveType: "RDX",
    explosiveMassKg: 119,
    tntEquivalentKg: 190.4,
    warhead: "HE",
    vehicles: [
      {
        id: "as_37_c_buccaneer_s2b",
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
        id: "as_37_c_tornado_gr1",
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
        id: "as_37_c_jaguar_a",
        vehicleId: "jaguar_a",
        vehicleName: "Jaguar A",
        vehicleTechTree: "France",
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
    id: "as_37_l",
    designation: "AS-37 L Martel",
    category: "PRH",
    family: "PRH",
    icon: "arm-red",
    projectileMassKg: 532,
    guidance: "PRH",
    band: ["C", "D"],
    lockRangeKm: 150,
    launchRangeKm: 150,
    maximumSpeedMach: 2,
    missileGuidanceTimeS: 200,
    explosiveType: "RDX",
    explosiveMassKg: 119,
    tntEquivalentKg: 190.4,
    warhead: "HE",
    vehicles: [
      {
        id: "as_37_l_buccaneer_s2b",
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
        id: "as_37_l_tornado_gr1",
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
        id: "as_37_l_jaguar_a",
        vehicleId: "jaguar_a",
        vehicleName: "Jaguar A",
        vehicleTechTree: "France",
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
    id: "alarm",
    designation: "ALARM",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-red",
    projectileMassKg: 265,
    guidance: "PRH+IOG",
    band: ["E", "F", "G", "H", "I", "J"],
    lockRangeKm: 100,
    launchRangeKm: 93,
    maximumSpeedMach: 2,
    missileGuidanceTimeS: 450,
    explosiveType: "PBXN-9",
    explosiveMassKg: 15.88,
    tntEquivalentKg: 20.32,
    warhead: "HE",
    vehicles: [
      {
        id: "alarm_tornado_gr4",
        vehicleId: "tornado_gr4",
        vehicleName: "Tornado GR.4",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.3",
          SB: "12.3"
        }
      }
    ]
  },
  {
    id: "yj_91_l111",
    designation: "YJ-91 L111",
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
        id: "yj_91_l111_jh_7a",
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
        id: "yj_91_l111_jh_7a_prototype",
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
        id: "yj_91_l111_su_30mkk",
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
        id: "yj_91_l111_jh_7a2",
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
    id: "yj_91_l112",
    designation: "YJ-91 L112",
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
        id: "yj_91_l112_jh_7a",
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
        id: "yj_91_l112_jh_7a_prototype",
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
        id: "yj_91_l112_su_30mkk",
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
        id: "yj_91_l112_jh_7a2",
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
    id: "yj_91_l113",
    designation: "YJ-91 L113",
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
        id: "yj_91_l113_jh_7a",
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
        id: "yj_91_l113_jh_7a_prototype",
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
        id: "yj_91_l113_su_30mkk",
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
        id: "yj_91_l113_jh_7a2",
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
    id: "ld_10",
    designation: "LD-10",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-blue",
    projectileMassKg: 234,
    guidance: "PRH+IOG",
    band: ["E", "F", "G", "H", "I", "J"],
    lockRangeKm: 100,
    launchRangeKm: 60,
    maximumSpeedMach: 4,
    missileGuidanceTimeS: 80,
    explosiveType: "DHL-1",
    explosiveMassKg: 12,
    tntEquivalentKg: 15.6,
    warhead: "HE",
    vehicles: [
      {
        id: "ld_10_su_30mkk",
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
        id: "ld_10_j_10a",
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
        id: "ld_10_j_11b",
        vehicleId: "j_11b",
        vehicleName: "J-11B",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "ld_10_jf_17",
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
      },
      {
        id: "ld_10_j_10c",
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
        id: "ld_10_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
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
    id: "cm_102",
    designation: "CM-102",
    category: "PRH",
    family: "PRH+IOG",
    icon: "arm-red",
    projectileMassKg: 350,
    guidance: "PRH+IOG",
    band: ["E", "F", "G", "H", "I", "J"],
    lockRangeKm: 100,
    launchRangeKm: 100,
    maximumSpeedMach: 3.5,
    missileGuidanceTimeS: 240,
    explosiveType: "DHL-1",
    explosiveMassKg: 60,
    tntEquivalentKg: 78,
    warhead: "HE",
    vehicles: [
      {
        id: "cm_102_j_10a",
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
        id: "cm_102_jh_7a2",
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
        id: "cm_102_j_11b",
        vehicleId: "j_11b",
        vehicleName: "J-11B",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "cm_102_jf_17",
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
      },
      {
        id: "cm_102_j_10c",
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
        id: "cm_102_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
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
    id: "yj_91a",
    designation: "YJ-91A",
    category: "PRH",
    family: "PRH",
    icon: "arm-yellow-1",
    projectileMassKg: 600,
    guidance: "PRH",
    band: ["D", "E", "F", "G", "H", "I"],
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
        id: "yj_91a_j_11b",
        vehicleId: "j_11b",
        vehicleName: "J-11B",
        vehicleTechTree: "China",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "13.7",
          SB: "13.7"
        }
      },
      {
        id: "yj_91a_j_10c",
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
        id: "yj_91a_j_15t",
        vehicleId: "j_15t",
        vehicleName: "J-15T",
        vehicleTechTree: "China",
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
    id: "as_37",
    designation: "AS-37 ARMAT",
    category: "PRH",
    family: "PRH",
    icon: "arm-blue",
    projectileMassKg: 532,
    guidance: "PRH",
    band: ["C", "D", "E", "F", "G", "H", "I"],
    lockRangeKm: 150,
    launchRangeKm: 150,
    maximumSpeedMach: 2,
    missileGuidanceTimeS: 400,
    explosiveType: "RDX",
    explosiveMassKg: 119,
    tntEquivalentKg: 190.4,
    warhead: "HE",
    vehicles: [
      {
        id: "as_37_mirage_2000c_s5",
        vehicleId: "mirage_2000c_s5",
        vehicleName: "Mirage 2000C-S5",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.7"
        }
      },
      {
        id: "as_37_mirage_4000",
        vehicleId: "mirage_4000",
        vehicleName: "Mirage 4000",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "13.0",
          SB: "13.0"
        }
      },
      {
        id: "as_37_mirage_2000d_r1",
        vehicleId: "mirage_2000d_r1",
        vehicleName: "Mirage 2000D-R1",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "as_37_mirage_2000c_s4",
        vehicleId: "mirage_2000c_s4",
        vehicleName: "Mirage 2000C-S4",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        }
      },
      {
        id: "as_37_mirage_2000_5f",
        vehicleId: "mirage_2000_5f",
        vehicleName: "Mirage 2000-5F",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "14.0",
          RB: "14.0",
          SB: "14.0"
        }
      },
      {
        id: "as_37_mirage_2000d_rmv",
        vehicleId: "mirage_2000d_rmv",
        vehicleName: "Mirage 2000D-RMV",
        vehicleTechTree: "France",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        }
      }
    ]
  }
];