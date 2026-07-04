import type { SamDefinition } from "@/types/SamMissiles"

export const samMissiles: SamDefinition[] = [
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
    ],
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
      }
    ]
  }
];