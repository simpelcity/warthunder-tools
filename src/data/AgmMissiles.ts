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
      }
    ]
  }
];