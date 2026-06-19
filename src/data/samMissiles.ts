import type { SamMissileDefinition } from "../types/SAMMissiles";

export const samMissiles: SamMissileDefinition[] = [
  {
    id: "iris_t_slm",
    designation: "IRIS-T SLM",
    category: "IR",
    variant: "IR+IOG+GNSS+DL",
    performances: [
      {
        id: "iris_t_slm_germ_iris_slm_launcher",
        vehicleId: "germ_iris_slm_launcher",
        vehicleName: "IRIS-T SLM (TEL)",
        guidance: "IR+IOG+GNSS+DL",
        caliberMm: 180,
        projectileMassKg: 155,
        explosiveType: "PBXN-110",
        explosiveMassKg: 4.5,
        tntEquivalentKg: 5.8,
        guidanceTimeS: 100,
        maximumOverloadG: 40,
        maximumSpeedMs: 975,
        launchRangeKm: 40
      },
      
    ],
  },
];