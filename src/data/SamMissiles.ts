import type { SamDefinition } from "@/types/SamMissiles"

export const samMissiles: SamDefinition[] = [
  {
    id: "127mm_mim_72c",
    designation: "MIM-72C",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 127,
    projectileMassKg: 86.3,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 3.6,
    IRCCM: false,
    launchRangeKm: 6,
    maximumSpeedMach: 2,
    maximumOverloadG: 17,
    missileGuidanceTimeS: 60,
    explosiveType: "Octol/TNT",
    explosiveMassKg: 3,
    tntEquivalentKg: 4.3,
    vehicles: [
      {
        id: "127mm_mim_72c_us_mim_72_chaparral",
        vehicleId: "us_mim_72_chaparral",
        vehicleName: "Imp.Chaparral",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.0"
        }
      }
    ]
  },
  {
    id: "127mm_mim_72e",
    designation: "MIM-72E",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 127,
    projectileMassKg: 86.3,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 3.6,
    IRCCM: false,
    launchRangeKm: 6,
    maximumSpeedMach: 2,
    maximumOverloadG: 17,
    missileGuidanceTimeS: 60,
    explosiveType: "Octol/TNT",
    explosiveMassKg: 3,
    tntEquivalentKg: 4.3,
    vehicles: [
      {
        id: "127mm_mim_72e_us_mim_72_chaparral",
        vehicleId: "us_mim_72_chaparral",
        vehicleName: "Imp.Chaparral",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.0"
        }
      }
    ]
  },
  {
    id: "70mm_fim_92e",
    designation: "FIM-92E",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 70,
    projectileMassKg: 10.1,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 5,
    maximumSpeedMach: 2,
    maximumOverloadG: 13,
    missileGuidanceTimeS: 15,
    explosiveType: "HTA",
    explosiveMassKg: 0.45,
    tntEquivalentKg: 0.54,
    vehicles: [
      {
        id: "70mm_fim_92e_us_lav_ad",
        vehicleId: "us_lav_ad",
        vehicleName: "LAV-AD",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0"
        }
      },
      {
        id: "70mm_fim_92e_germ_wiesel_2_adwc",
        vehicleId: "germ_wiesel_2_adwc",
        vehicleName: "Ozelot",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        }
      },
      {
        id: "70mm_fim_92e_germ_flakpz_1a2_Gepard",
        vehicleId: "germ_flakpz_1a2_Gepard",
        vehicleName: "Gepard 1A2",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        }
      },
      {
        id: "70mm_fim_92e_uk_stormer_air_defence",
        vehicleId: "uk_stormer_air_defence",
        vehicleName: "Stormer AD",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0"
        }
      }
    ]
  },
  {
    id: "70mm_fim_92k",
    designation: "FIM-92K",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 70,
    projectileMassKg: 10.1,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 5,
    maximumSpeedMach: 2,
    maximumOverloadG: 13,
    missileGuidanceTimeS: 15,
    explosiveType: "HTA",
    explosiveMassKg: 0.45,
    tntEquivalentKg: 0.54,
    vehicles: [
      {
        id: "70mm_fim_92k_us_lav_ad",
        vehicleId: "us_lav_ad",
        vehicleName: "LAV-AD",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0"
        }
      },
      {
        id: "70mm_fim_92k_germ_wiesel_2_adwc",
        vehicleId: "germ_wiesel_2_adwc",
        vehicleName: "Ozelot",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        }
      },
      {
        id: "70mm_fim_92k_germ_flakpz_1a2_Gepard",
        vehicleId: "germ_flakpz_1a2_Gepard",
        vehicleName: "Gepard 1A2",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        }
      },
      {
        id: "70mm_fim_92k_uk_stormer_air_defence",
        vehicleId: "uk_stormer_air_defence",
        vehicleName: "Stormer AD",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0"
        }
      }
    ]
  },
  {
    id: "163mm_roland_1",
    designation: "Roland 1",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    guidance: "Semi-Automatic (SACLOS)",
    penetrationMm: 39,
    caliberMm: 163,
    projectileMassKg: 65,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.1,
    IRCCM: true,
    launchRangeKm: 6.3,
    maximumSpeedMs: 500,
    missileGuidanceTimeS: 13.8,
    explosiveType: "Composition B",
    explosiveMassKg: 3.5,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "163mm_roland_1_us_xm_975_roland",
        vehicleId: "us_xm_975_roland",
        vehicleName: "XM975",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.0"
        }
      },
      {
        "id": "163mm_roland_1_fr_amx_30_roland",
        "vehicleId": "fr_amx_30_roland",
        "vehicleName": "Roland 1",
        "vehicleTechTree": "France",
        "vehicleRank": "VII",
        "vehicleBr": {
          "RB": "9.7"
        }
      }
    ]
  },
  {
    id: "163mm_roland_2",
    designation: "Roland 2",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    guidance: "Semi-Automatic (SACLOS)",
    penetrationMm: 39,
    caliberMm: 163,
    projectileMassKg: 65,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.1,
    IRCCM: true,
    launchRangeKm: 6.3,
    maximumSpeedMs: 500,
    missileGuidanceTimeS: 13.8,
    explosiveType: "Composition B",
    explosiveMassKg: 3.5,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "163mm_roland_2_germ_flarakpz_1",
        vehicleId: "germ_flarakpz_1",
        vehicleName: "FlaRakPz 1",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.0"
        }
      }
    ]
  },
  {
    id: "163mm_roland_3",
    designation: "Roland 3",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    guidance: "Semi-Automatic (SACLOS)",
    penetrationMm: 54.1,
    caliberMm: 163,
    projectileMassKg: 77,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.1,
    IRCCM: true,
    launchRangeKm: 8,
    maximumSpeedMs: 570,
    missileGuidanceTimeS: 17,
    explosiveType: "Composition B",
    explosiveMassKg: 5.2,
    tntEquivalentKg: 6.8,
    vehicles: [
      {
        id: "163mm_roland_3_us_xm_975_roland",
        vehicleId: "us_xm_975_roland",
        vehicleName: "XM975",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.0"
        }
      },
      {
        id: "163mm_roland_3_germ_flarakpz_1",
        vehicleId: "germ_flarakpz_1",
        vehicleName: "FlaRakPz 1",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.0"
        }
      },
      {
        "id": "163mm_roland_3_fr_amx_30_roland",
        "vehicleId": "fr_amx_30_roland",
        "vehicleName": "Roland 1",
        "vehicleTechTree": "France",
        "vehicleRank": "VII",
        "vehicleBr": {
          "RB": "9.7"
        }
      }
    ]
  },
  {
    id: "178mm_aim_120c_7",
    designation: "AIM-120C-7",
    family: "ARH",
    variant: "ARH+IOG+DL",
    guidance: "ARH+IOG+DL",
    caliberMm: 178,
    projectileMassKg: 161.5,
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 25,
    maximumSpeedMach: 4.4,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 120,
    explosiveType: "PBXN-110",
    explosiveMassKg: 8.6,
    tntEquivalentKg: 11,
    vehicles: [
      {
        id: "178mm_aim_120c_7_us_sl_amraam_launcher",
        vehicleId: "us_sl_amraam_launcher",
        vehicleName: "CLAWS (TEL)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.3"
        },
      },
      {
        id: "178mm_aim_120c_7_us_nasams_launcher",
        vehicleId: "us_nasams_launcher",
        vehicleName: "NASAMS 3 (TEL)",
        vehicleTechTree: "USA",
        vehicleOperator: "Norway",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ],
  },
  {
    id: "127mm_aim_9x_block_2",
    designation: "AIM-9X Block 2",
    family: "IR",
    variant: "IR+IOG+GNSS+DL",
    guidance: "IR+IOG+GNSS+DL",
    caliberMm: 127,
    projectileMassKg: 85.3,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 9,
    IRCCM: true,
    launchRangeKm: 12,
    maximumSpeedMach: 3,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-3",
    explosiveMassKg: 3.6,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "127mm_aim_9x_block_2_us_sl_amraam_launcher",
        vehicleId: "us_sl_amraam_launcher",
        vehicleName: "CLAWS (TEL)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.3",
        }
      },
      {
        id: "127mm_aim_9x_block_2_us_nasams_launcher",
        vehicleId: "us_nasams_launcher",
        vehicleName: "NASAMS 3 (TEL)",
        vehicleTechTree: "USA",
        vehicleOperator: "Norway",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        },
      },
    ],
  },
  {
    id: "254mm_amraam_er",
    designation: "AMRAAM-ER",
    family: "ARH",
    variant: "ARH+IOG+DL",
    guidance: "ARH+IOG+DL",
    caliberMm: 254,
    projectileMassKg: 279,
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 40,
    maximumSpeedMach: 3,
    maximumOverloadG: 40,
    missileGuidanceTimeS: 130,
    explosiveType: "PBXN-110",
    explosiveMassKg: 8.6,
    tntEquivalentKg: 11,
    vehicles: [
      {
        id: "254mm_amraam_er_us_nasams_launcher",
        vehicleId: "us_nasams_launcher",
        vehicleName: "NASAMS 3 (TEL)",
        vehicleTechTree: "USA",
        vehicleOperator: "Norway",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        },
      },
    ],
  },
  {
    id: "210mm_9m33m3",
    designation: "9M33M3",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    guidance: "Semi-Automatic (SACLOS)",
    caliberMm: 210,
    penetrationMm: 60.3,
    projectileMassKg: 126.3,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.1,
    IRCCM: true,
    launchRangeKm: 10.3,
    maximumSpeedMs: 580,
    missileGuidanceTimeS: 24,
    explosiveType: "A-IX-2",
    explosiveMassKg: 5.4,
    tntEquivalentKg: 8.3,
    vehicles: [
      {
        id: "210mm_9m33m3_germ_9a33bm3",
        vehicleId: "germ_9a33bm3",
        vehicleName: "◊Osa-AK",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.3"
        }
      },
      {
        id: "210mm_9m33m3_ussr_9a33bm3",
        vehicleId: "ussr_9a33bm3",
        vehicleName: "Osa-AKM",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.3"
        }
      },
      {
        id: "210mm_9m33m3_uk_9a33bm2",
        vehicleId: "uk_9a33bm2",
        vehicleName: "\u2584Osa-AK",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.3"
        }
      },
      {
        "id": "210mm_9m33m3_it_9a33bm3",
        "vehicleId": "it_9a33bm3",
        "vehicleName": "\u2584Osa-AKM",
        "vehicleTechTree": "Italy",
        "vehicleOperator": "Romania",
        "vehicleRank": "VII",
        "vehicleBr": {
          "RB": "10.3"
        }
      }
    ]
  },
  {
    id: "120mm_9m37m",
    designation: "9M37M",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 120,
    projectileMassKg: 39.2,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 3.2,
    IRCCM: true,
    launchRangeKm: 5,
    maximumSpeedMs: 700,
    maximumOverloadG: 20,
    missileGuidanceTimeS: 16,
    explosiveType: "A-IX-2",
    explosiveMassKg: 1.1,
    tntEquivalentKg: 1.7,
    vehicles: [
      {
        id: "120mm_9m37m_germ_9a35_m",
        vehicleId: "germ_9a35_m",
        vehicleName: "◊Strela-10M",
        vehicleTechTree: "Germany",
        vehicleOperator: "GDR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3"
        }
      },
      {
        id: "120mm_9m37m_ussr_9a35_m2",
        vehicleId: "ussr_9a35_m2",
        vehicleName: "Strela-10M2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3"
        }
      },
      {
        id: "120mm_9m37m_uk_9a35_m",
        vehicleId: "uk_9a35_m",
        vehicleName: "\u2584Strela-10M",
        vehicleTechTree: "Great Britain",
        vehicleOperator: "India",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "10.3"
        }
      },
      {
        "id": "120mm_9m37m_it_9a35_m",
        "vehicleId": "it_9a35_m",
        "vehicleName": "\u25d4Strela-10M",
        "vehicleTechTree": "Italy",
        "vehicleOperator": "Hungary",
        "vehicleRank": "VII",
        "vehicleBr": {
          "AB": "11.0",
          "RB": "10.3"
        }
      }
    ]
  },
  {
    id: "165mm_vt1",
    designation: "VT1",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    guidance: "Semi-Automatic (SACLOS)",
    caliberMm: 165,
    projectileMassKg: 73,
    launchRangeKm: 12,
    maximumSpeedMs: 1250,
    missileGuidanceTimeS: 20,
    explosiveType: "Composition B",
    explosiveMassKg: 6,
    tntEquivalentKg: 7.9,
    penetrationMm: 59.3,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    vehicles: [
      {
        id: "165mm_vt1_germ_flarakrad",
        vehicleId: "germ_flarakrad",
        vehicleName: "FlaRakRad",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "11.7"
        },
      },
      {
        "id": "165mm_vt1_fr_crotale_ng",
        "vehicleId": "fr_crotale_ng",
        "vehicleName": "\u2584ItO 90M",
        "vehicleTechTree": "France",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.0"
        }
      }
    ]
  },
  {
    id: "180mm_iris_t_slm",
    designation: "IRIS-T SLM",
    family: "IR",
    variant: "IR+IOG+GNSS+DL",
    guidance: "IR+IOG+GNSS+DL",
    caliberMm: 180,
    projectileMassKg: 155,
    launchRangeKm: 40,
    maximumSpeedMach: 3,
    missileGuidanceTimeS: 100,
    explosiveType: "PBXN-110",
    explosiveMassKg: 4.5,
    tntEquivalentKg: 5.8,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 9,
    IRCCM: true,
    maximumOverloadG: 40,
    vehicles: [
      {
        id: "180mm_iris_t_slm_germ_iris_slm_launcher",
        vehicleId: "germ_iris_slm_launcher",
        vehicleName: "IRIS-T SLM (TEL)",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        },
      },
    ],
  },
  {
    id: "72mm_9m39",
    designation: "9M39",
    family: "IR",
    variant: "IR",
    guidance: "IR",
    caliberMm: 72,
    projectileMassKg: 10.6,
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 5.2,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 14,
    explosiveType: "OKFOL-20",
    explosiveMassKg: 0.4,
    tntEquivalentKg: 0.53,
    vehicles: [
      {
        id: "72mm_9m39_ussr_zsu_23_4m4",
        vehicleId: "ussr_zsu_23_4m4",
        vehicleName: "ZSU-23-4M4",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.3"
        }
      }
    ]
  },
  {
    id: "72mm_9m342",
    designation: "9M342",
    family: "IR",
    variant: "IR",
    caliberMm: 72,
    projectileMassKg: 11.7,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 6,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 12,
    missileGuidanceTimeS: 13,
    explosiveType: "OKFOL",
    explosiveMassKg: 0.57,
    tntEquivalentKg: 0.923,
    vehicles: [
      {
        id: "72mm_9m342_ussr_zsu_23_4m4",
        vehicleId: "ussr_zsu_23_4m4",
        vehicleName: "ZSU-23-4M4",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.3"
        }
      }
    ]
  },
  {
    id: "76mm_9m311",
    designation: "9M311",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 39.1,
    caliberMm: 76,
    projectileMassKg: 41.6,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    launchRangeKm: 8,
    maximumSpeedMs: 910,
    missileGuidanceTimeS: 13.5,
    explosiveType: "A-IX-2",
    explosiveMassKg: 3,
    tntEquivalentKg: 4.6,
    vehicles: [
      {
        id: "76mm_9m311_ussr_zprk_2s6",
        vehicleId: "ussr_zprk_2s6",
        vehicleName: "2S6",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.7"
        }
      }
    ]
  },
  {
    id: "239mm_9m331",
    designation: "9M331",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 60.2,
    caliberMm: 239,
    projectileMassKg: 167,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    IRCCM: true,
    launchRangeKm: 12,
    maximumSpeedMs: 850,
    missileGuidanceTimeS: 21,
    explosiveType: "A-IX-2",
    explosiveMassKg: 5.3,
    tntEquivalentKg: 8.2,
    vehicles: [
      {
        id: "239mm_9m331_ussr_tor_m1",
        vehicleId: "ussr_tor_m1",
        vehicleName: "Tor-M1",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "11.3"
        }
      },
      {
        "id": "239mm_9m331_cn_tor_m1",
        "vehicleId": "cn_tor_m1",
        "vehicleName": "Tor-M1",
        "vehicleTechTree": "China",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "11.3"
        }
      }
    ]
  },
  {
    id: "90mm_95ya6",
    designation: "95Ya6",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 60.5,
    caliberMm: 90,
    projectileMassKg: 72.5,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    IRCCM: true,
    launchRangeKm: 20,
    maximumSpeedMs: 1300,
    missileGuidanceTimeS: 30,
    explosiveType: "A-IX-2",
    explosiveMassKg: 5.5,
    tntEquivalentKg: 8.5,
    vehicles: [
      {
        id: "90mm_95ya6_ussr_pantsyr_s1",
        vehicleId: "ussr_pantsyr_s1",
        vehicleName: "Pantsir-S1",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.0"
        }
      },
      {
        id: "90mm_95ya6_ussr_pantsyr_sm_sv",
        vehicleId: "ussr_pantsyr_sm_sv",
        vehicleName: "Pantsir SM-SV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    id: "360mm_9m317ma",
    designation: "9M317MA",
    family: "ARH",
    variant: "ARH+IOG+DL",
    guidance: "ARH+IOG+DL",
    caliberMm: 360,
    projectileMassKg: 581,
    band: "J",
    shootDown: "All-aspects",
    lockRangeKm: 70,
    launchRangeKm: 70,
    maximumSpeedMach: 5,
    maximumOverloadG: 30,
    missileGuidanceTimeS: 80,
    explosiveType: "A-IX-2",
    explosiveMassKg: 29.7,
    tntEquivalentKg: 45.7,
    vehicles: [
      {
        id: "360mm_9m317ma_ussr_buk_m3_launcher",
        vehicleId: "ussr_buk_m3_launcher",
        vehicleName: '9K317M "BUK-M3" (TELAR)',
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        },
      },
    ],
  },
  {
    id: "60mm_95ya6m",
    designation: "95Ya6M",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 11.3,
    caliberMm: 60,
    projectileMassKg: 92,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    IRCCM: true,
    launchRangeKm: 40,
    maximumSpeedMs: 1700,
    missileGuidanceTimeS: 35,
    explosiveType: "A-IX-2",
    explosiveMassKg: 0.5,
    tntEquivalentKg: 0.77,
    vehicles: [
      {
        id: "90mm_95ya6m_ussr_pantsyr_sm_sv",
        vehicleId: "ussr_pantsyr_sm_sv",
        vehicleName: "Pantsir SM-SV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    id: "80mm_tkb_1055",
    designation: "TKB-1055",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 33.5,
    caliberMm: 80,
    projectileMassKg: 18,
    fuzeDelayM: 1,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    IRCCM: true,
    launchRangeKm: 7,
    maximumSpeedMs: 820,
    missileGuidanceTimeS: 13.5,
    explosiveType: "A-IX-2",
    explosiveMassKg: 1.9,
    tntEquivalentKg: 2.8,
    vehicles: [
      {
        id: "80mm_tkb_1055_ussr_pantsyr_sm_sv",
        vehicleId: "ussr_pantsyr_sm_sv",
        vehicleName: "Pantsir SM-SV",
        vehicleTechTree: "USSR",
        vehicleOperator: "Russia",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    id: "133mm_rapier_mk_1e",
    designation: "Rapier Mk.1E",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    penetrationMm: 10.1,
    caliberMm: 133,
    projectileMassKg: 42.6,
    fuzeDelayM: 1.0,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    launchRangeKm: 7.0,
    maximumSpeedMs: 685.0,
    missileGuidanceTimeS: 15.0,
    explosiveType: "Composition B",
    explosiveMassKg: 0.5,
    tntEquivalentKg: 0.655,
    vehicles: [
      {
        id: "133mm_rapier_mk_1e_uk_tracked_rapier",
        vehicleId: "uk_tracked_rapier",
        vehicleName: "Rapier",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        },
      }
    ]
  },
  {
    id: "133mm_rapier_mk_2",
    designation: "Rapier Mk.2",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    caliberMm: 133,
    projectileMassKg: 43.0,
    penetrationMm: 10.1,
    fuzeDelayM: 1.0,
    fuzeSensitivityMm: 0.3,
    guidance: "Semi-Automatic (SACLOS)",
    launchRangeKm: 8.2,
    maximumSpeedMs: 850.0,
    missileGuidanceTimeS: 15.0,
    explosiveType: "Composition B",
    explosiveMassKg: 0.5,
    tntEquivalentKg: 0.655,
    vehicles: [
      {
        id: "133mm_rapier_mk_2_uk_tracked_rapier",
        vehicleId: "uk_tracked_rapier",
        vehicleName: "Rapier",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VI",
        vehicleBr: {
          RB: "9.7"
        }
      }
    ]
  },
  {
    id: "130mm_starstreak_hvm",
    designation: "Starstreak HVM",
    family: "Beam riding",
    variant: "Beam riding",
    caliberMm: 130,
    projectileMassKg: 14.0,
    penetrationMm: 20.2,
    fuzeDelayM: 0.5,
    fuzeSensitivityMm: 0.1,
    guidance: "Beam riding",
    launchRangeKm: 7.0,
    maximumSpeedMs: 1189.0,
    missileGuidanceTimeS: 12.0,
    explosiveType: "Composition B",
    explosiveMassKg: 1.2,
    tntEquivalentKg: 1.6,
    vehicles: [
      {
        id: "130mm_starstreak_hvm_uk_stormer_hvm",
        vehicleId: "uk_stormer_hvm",
        vehicleName: "Stormer HVM",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "10.3"
        }
      }
    ]
  },
  {
    id: "166mm_camm",
    designation: "CAMM",
    family: "ARH",
    variant: "ARH+IOG+DL",
    caliberMm: 166,
    projectileMassKg: 99,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 25,
    maximumSpeedMach: 3,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 90,
    explosiveType: "PBXN-110",
    explosiveMassKg: 3.8,
    tntEquivalentKg: 4.9,
    vehicles: [
      {
        id: "166mm_camm_uk_sky_sabre_launcher",
        vehicleId: "uk_sky_sabre_launcher",
        vehicleName: "Sky Sabre (TEL)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    id: "190mm_camm_er",
    designation: "CAMM-ER",
    family: "ARH",
    variant: "ARH+IOG+DL",
    caliberMm: 190,
    projectileMassKg: 160,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 45,
    maximumSpeedMach: 3,
    maximumOverloadG: 50,
    missileGuidanceTimeS: 90,
    explosiveType: "PBXN-110",
    explosiveMassKg: 3.8,
    tntEquivalentKg: 4.9,
    vehicles: [
      {
        id: "190mm_camm_er_uk_sky_sabre_launcher",
        vehicleId: "uk_sky_sabre_launcher",
        vehicleName: "Sky Sabre (TEL)",
        vehicleTechTree: "Great Britain",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    id: "80mm_type_91",
    designation: "Type 91",
    family: "IR",
    variant: "IR",
    caliberMm: 80,
    projectileMassKg: 11.5,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 5.0,
    maximumSpeedMach: 1.9,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 10.5,
    explosiveType: "Comp. A",
    explosiveMassKg: 0.45,
    tntEquivalentKg: 0.648,
    vehicles: [
      {
        id: "80mm_type_91_jp_type_93",
        vehicleId: "jp_type_93",
        vehicleName: "Type 93",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "160mm_type_81c",
    designation: "Type 81C",
    family: "IR",
    variant: "IR",
    caliberMm: 160 ,
    projectileMassKg: 105,
    guidance: "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    IRCCM: true,
    launchRangeKm: 10,
    maximumSpeedMach: 2.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 22.5,
    explosiveType: "Comp. A",
    explosiveMassKg: 3.8,
    tntEquivalentKg: 5.4,
    vehicles: [
      {
        id: "160mm_type_81c_jp_type_81_tansam",
        vehicleId: "jp_type_81_tansam",
        vehicleName: "Type 81 (C)",
        vehicleTechTree: "Japan",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "11.7"
        }
      },
      {
        id: "0mm_type_81c_jp_type_81_tansam_launcher",
        vehicleId: "jp_type_81_tansam_launcher",
        vehicleName: "Tan-SAM Kai (TEL)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.0"
        }
      }
    ]
  },
  {
    id: "160mm_type_81c_arh",
    designation: "Type 81C ARH",
    family: "ARH",
    variant: "ARH+IOG+DL",
    caliberMm: 160,
    projectileMassKg: 105,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 14.0,
    maximumSpeedMach: 2.8,
    maximumOverloadG: 35,
    missileGuidanceTimeS: 22.5,
    explosiveType: "Comp. A",
    explosiveMassKg: 3.8,
    tntEquivalentKg: 5.4,
    vehicles: [
      {
        id: "160mm_type_81c_arh_jp_type_81_tansam_launcher",
        vehicleId: "jp_type_81_tansam_launcher",
        vehicleName: "Tan-SAM Kai (TEL)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.0"
        }
      }
    ]
  },
  {
    id: "326mm_type_03",
    designation: "Type 03",
    family: "ARH",
    variant: "ARH+IOG+DL",
    caliberMm: 326,
    projectileMassKg: 583,
    guidance: "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    launchRangeKm: 80,
    maximumSpeedMach: 3.5,
    maximumOverloadG: 36,
    missileGuidanceTimeS: 161.5,
    explosiveType: "PBXN-110",
    explosiveMassKg: 14,
    tntEquivalentKg: 17.9,
    vehicles: [
      {
        id: "326mm_type_03_jp_type_03_chusam_launcher",
        vehicleId: "jp_type_03_chusam_launcher",
        vehicleName: "Type 03 (TEL)",
        vehicleTechTree: "Japan",
        vehicleRank: "VIII",
        vehicleBr: {
          RB: "12.7"
        }
      }
    ]
  },
  {
    "id": "71mm_hn_6",
    "designation": "HN-6",
    "family": "IR",
    "variant": "IR",
    "caliberMm": 71,
    "projectileMassKg": 10.8,
    "guidance": "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    "IRCCM": true,
    "launchRangeKm": 5,
    "maximumSpeedMach": 1.8,
    maximumOverloadG: 12,
    "missileGuidanceTimeS": 16,
    "explosiveType": "A-IX-2",
    "explosiveMassKg": 0.6,
    "tntEquivalentKg": 0.924,
    "vehicles": [
      {
        "id": "71mm_hn_6_cn_pgz_04a",
        "vehicleId": "cn_pgz_04a",
        "vehicleName": "PGZ04A",
        "vehicleTechTree": "China",
        "vehicleRank": "VI",
        "vehicleBr": {
          "RB": "9.3"
        }
      }
    ]
  },
  {
    "id": "127mm_tc_1l",
    "designation": "TC-1L",
    "family": "IR",
    "variant": "IR",
    "caliberMm": 127,
    "projectileMassKg": 90,
    "guidance": "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    "IRCCM": true,
    "launchRangeKm": 6,
    "maximumSpeedMach": 2,
    maximumOverloadG: 35,
    "missileGuidanceTimeS": 60,
    "explosiveType": "HBX",
    "explosiveMassKg": 3.6,
    "tntEquivalentKg": 5.8,
    "vehicles": [
      {
        "id": "127mm_tc_1l_cn_antelope_tc_1l_ads",
        "vehicleId": "cn_antelope_tc_1l_ads",
        "vehicleName": "Antelope",
        "vehicleTechTree": "China",
        "vehicleOperator": "Republic of China",
        "vehicleRank": "VII",
        "vehicleBr": {
          "AB": "10.3",
          "RB": "10.0"
        }
      }
    ]
  },
  {
    "id": "239mm_hq17",
    "designation": "HQ17",
    "family": "Semi-Automatic",
    "variant": "Semi-Automatic (SACLOS)",
    "caliberMm": 239,
    "projectileMassKg": 165,
    "penetrationMm": 60.2,
    "fuzeDelayM": 1,
    "fuzeSensitivityMm": 0.3,
    "guidance": "Semi-Automatic (SACLOS)",
    "IRCCM": true,
    "launchRangeKm": 15,
    "maximumSpeedMs": 885,
    "missileGuidanceTimeS": 27,
    "explosiveType": "A-IX-2",
    "explosiveMassKg": 5.3,
    "tntEquivalentKg": 8.2,
    "vehicles": [
      {
        "id": "239mm_hq17_cn_hq_17",
        "vehicleId": "cn_hq_17",
        "vehicleName": "HQ17",
        "vehicleTechTree": "China",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "AB": "11.7",
          "RB": "11.7",
          "SB": "11.7"
        }
      }
    ],
  },
  {
    "id": "130mm_fb_10",
    "designation": "FB-10",
    "family": "IR",
    "variant": "IR+IOG+DL",
    "caliberMm": 130,
    "projectileMassKg": 46,
    "guidance": "IR+IOG+DL",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 9,
    "IRCCM": true,
    "launchRangeKm": 10,
    "maximumSpeedMach": 2,
    maximumOverloadG: 20,
    "missileGuidanceTimeS": 30,
    "explosiveType": "HTA",
    "explosiveMassKg": 1,
    "tntEquivalentKg": 1.3,
    "vehicles": [
      {
        "id": "130mm_fb_10_cn_pgz_625_fb10",
        "vehicleId": "cn_pgz_625_fb10",
        "vehicleName": "CS/SA5",
        "vehicleTechTree": "China",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.0"
        }
      }
    ]
  },
  {
    "id": "160mm_fb_10a",
    "designation": "FB-10A",
    "family": "IR",
    "variant": "IR+IOG+DL",
    "caliberMm": 160,
    "projectileMassKg": 65,
    "guidance": "IR+IOG+DL",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 12,
    lockRangeAllAspectKm: 9,
    "IRCCM": true,
    "launchRangeKm": 18,
    "maximumSpeedMach": 2,
    maximumOverloadG: 20,
    "missileGuidanceTimeS": 60,
    "explosiveType": "HTA",
    "explosiveMassKg": 1,
    "tntEquivalentKg": 1.3,
    "vehicles": [
      {
        "id": "160mm_fb_10a_cn_pgz_625_fb10",
        "vehicleId": "cn_pgz_625_fb10",
        "vehicleName": "CS/SA5",
        "vehicleTechTree": "China",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.0"
        }
      }
    ]
  },
  {
    "id": "250mm_fm_3000",
    "designation": "FM-3000",
    "family": "ARH",
    "variant": "ARH+IOG+DL",
    "caliberMm": 250,
    "projectileMassKg": 305,
    "guidance": "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    "launchRangeKm": 30,
    "maximumSpeedMach": 3.5,
    maximumOverloadG: 40,
    "missileGuidanceTimeS": 60,
    "explosiveType": "A-IX-2",
    "explosiveMassKg": 7.3,
    "tntEquivalentKg": 11.2,
    "vehicles": [
      {
        "id": "250mm_fm_3000_cn_hq_11",
        "vehicleId": "cn_hq_11",
        "vehicleName": "HQ11",
        "vehicleTechTree": "China",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.7"
        }
      }
    ]
  },
  {
    "id": "90mm_mistral",
    "designation": "Mistral",
    "family": "IR",
    "variant": "IR",
    "caliberMm": 90,
    "projectileMassKg": 18.7,
    "guidance": "IR",
    aspect: "All-aspects",
    lockRangeRearAspectKm: 11,
    lockRangeAllAspectKm: 6,
    "IRCCM": true,
    "launchRangeKm": 6,
    "maximumSpeedMach": 2.5,
    maximumOverloadG: 16,
    "missileGuidanceTimeS": 14,
    "explosiveType": "HBX",
    "explosiveMassKg": 1.1,
    "tntEquivalentKg": 1.8,
    "vehicles": [
      {
        "id": "90mm_mistral_it_otobreda_sidam_25_mistral",
        "vehicleId": "it_otobreda_sidam_25_mistral",
        "vehicleName": "SIDAM 25 (Mistral)",
        "vehicleTechTree": "Italy",
        "vehicleRank": "VI",
        "vehicleBr": {
          "AB": "10.0",
          "RB": "9.7"
        }
      },
      {
        "id": "90mm_mistral_fr_vab_santal",
        "vehicleId": "fr_vab_santal",
        "vehicleName": "SANTAL",
        "vehicleTechTree": "France",
        "vehicleRank": "VI",
        "vehicleBr": {
          "RB": "9.3"
        }
      }
    ]
  },
  {
    "id": "180mm_aster_30",
    "designation": "Aster-30",
    "family": "ARH",
    "variant": "ARH+IOG+DL",
    "caliberMm": 180,
    "projectileMassKg": 450,
    "guidance": "ARH+IOG+DL",
    band: "I",
    shootDown: "All-aspects",
    lockRangeKm: 16,
    "launchRangeKm": 100,
    "maximumSpeedMach": 4.5,
    maximumOverloadG: 50,
    "missileGuidanceTimeS": 210,
    "explosiveType": "PBXN-110",
    "explosiveMassKg": 5.3,
    "tntEquivalentKg": 6.7,
    "vehicles": [
      {
        "id": "180mm_aster_30_it_samp_t_launcher",
        "vehicleId": "it_samp_t_launcher",
        "vehicleName": "FSAF SAMP/T (TEL)",
        "vehicleTechTree": "Italy",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.7"
        }
      },
      {
        "id": "180mm_aster_30_fr_samp_t_launcher",
        "vehicleId": "fr_samp_t_launcher",
        "vehicleName": "FSAF SAMP/T (Mamba) (TEL)",
        "vehicleTechTree": "France",
        "vehicleRank": "VIII",
        "vehicleBr": {
          "RB": "12.7"
        }
      }
    ]
  },
  {
    "id": "105mm_rb_70",
    "designation": "RB 70",
    "family": "Beam riding",
    "variant": "Beam riding",
    "caliberMm": 105,
    "projectileMassKg": 16.5,
    "penetrationMm": 10.4,
    "fuzeDelayM": 0.05,
    "fuzeSensitivityMm": 0.1,
    "guidance": "Beam riding",
    "launchRangeKm": 5,
    "maximumSpeedMs": 525,
    "missileGuidanceTimeS": 15,
    "explosiveType": "Composition B",
    "explosiveMassKg": 0.522,
    "tntEquivalentKg": 0.684,
    "vehicles": [
      {
        "id": "105mm_rb_70_sw_lvrbv_701",
        "vehicleId": "sw_lvrbv_701",
        "vehicleName": "Lvrbv 701",
        "vehicleTechTree": "Sweden",
        "vehicleRank": "VI",
        "vehicleBr": {
          "AB": "9.3",
          "RB": "9.7",
          "SB": "9.7"
        }
      }
    ]
  },
  {
    "id": "105mm_rb_70_mk.2",
    "designation": "RB 70 Mk.2",
    "family": "Beam riding",
    "variant": "Beam riding",
    "caliberMm": 105,
    "projectileMassKg": 16.5,
    "penetrationMm": 10.4,
    "fuzeDelayM": 0.05,
    "fuzeSensitivityMm": 0.1,
    "guidance": "Beam riding",
    "launchRangeKm": 7,
    "maximumSpeedMs": 580.0,
    "missileGuidanceTimeS": 24,
    "explosiveType": "Composition B",
    "explosiveMassKg": 0.522,
    "tntEquivalentKg": 0.684,
    "vehicles": [
      {
        "id": "105mm_rb_70_mk.2_sw_lvrbv_701",
        "vehicleId": "sw_lvrbv_701",
        "vehicleName": "Lvrbv 701",
        "vehicleTechTree": "Sweden",
        "vehicleRank": "VI",
        "vehicleBr": {
          "AB": "9.3",
          "RB": "9.7",
          "SB": "9.7"
        }
      },
      {
        "id": "105mm_rb_70_mk.2_sw_asrad_r",
        "vehicleId": "sw_asrad_r",
        "vehicleName": "ASRAD-R",
        "vehicleTechTree": "Sweden",
        "vehicleRank": "VII",
        "vehicleBr": {
          "RB": "10.3"
        }
      }
    ]
  },
  {
    "id": "105mm_bolide",
    "designation": "BOLIDE",
    "family": "Beam riding",
    "variant": "Beam riding",
    "caliberMm": 105,
    "projectileMassKg": 17.0,
    "penetrationMm": 10.4,
    "fuzeDelayM": 0.05,
    "fuzeSensitivityMm": 0.1,
    "guidance": "Beam riding",
    "launchRangeKm": 9.0,
    "maximumSpeedMs": 700.0,
    "missileGuidanceTimeS": 32.0,
    "explosiveType": "Composition B",
    "explosiveMassKg": 0.522,
    "tntEquivalentKg": 0.684,
    "vehicles": [
      {
        "id": "105mm_bolide_sw_asrad_r",
        "vehicleId": "sw_asrad_r",
        "vehicleName": "ASRAD-R",
        "vehicleTechTree": "Sweden",
        "vehicleRank": "VII",
        "vehicleBr": {
          "RB": "10.3"
        }
      }
    ]
  },
];
