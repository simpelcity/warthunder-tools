import type { SamDefinition } from "@/types/SamMissiles"

export const samMissiles: SamDefinition[] = [
  {
    id: "iris_t_slm",
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
        id: "iris_t_slm_germ_iris_slm_launcher",
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
    id: "vt1",
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
        id: "vt1_germ_flarakrad",
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
    id: "9m317ma",
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
        id: "9m317ma_ussr_buk_m3_launcher",
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
  }
];