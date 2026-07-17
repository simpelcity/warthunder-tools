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
    lockRangeRearAspectKm: 55,
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
  }
];