import type { SamDefinition } from "@/types/SamMissiles"

export const samMissiles: SamDefinition[] = [
  {
    id: "iris_t_slm",
    designation: "IRIS-T SLM",
    family: "IR",
    variant: "IR+IOG+GNSS+DL",
    performances: [
      {
        id: "iris_t_slm_germ_iris_slm_launcher",
        vehicleId: "germ_iris_slm_launcher",
        vehicleName: "IRIS-T SLM (TEL)",
        guidance: "IR+IOG+GNSS+DL",
        caliberMm: 180,
        projectileMassKg: 155,
        launchRangeKm: 40,
        maximumSpeedMs: 975,
        missileGuidanceTimeS: 100,
        explosiveType: "PBXN-110",
        explosiveMassKg: 4.5,
        tntEquivalentKg: 5.8,
        aspect: "All-aspects",
        lockRangeRearAspectKm: 12,
        lockRangeAllAspectKm: 9,
        IRCCM: true,
        maximumOverloadG: 40,
      },
      
    ],
  },
  {
    id: "vt1",
    designation: "VT1",
    family: "Semi-Automatic",
    variant: "Semi-Automatic (SACLOS)",
    performances: [
      {
        id: "vt1_germ_flarakrad",
        vehicleId: "germ_flarakrad",
        vehicleName: "FlaRakRad",
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
      }
    ]
  },
];