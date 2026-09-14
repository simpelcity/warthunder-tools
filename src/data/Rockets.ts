import type { RocketDefinition } from '@/types/Rockets'

export const rockets: RocketDefinition[] = [
  {
    id: "hydra_70",
    designation: "70 mm Hydra-70 M247",
    icon: "rocket-big",
    caliberMm: 70,
    projectileMassKg: 10.2,
    explosiveType: "Composition B",
    explosiveMassKg: 0.91,
    tntEquivalent: 1.2,
    vehicles: [
      {
        id: "hydra_70_germ_wiesel_1_mk20",
        vehicleId: "germ_wiesel_1_mk20",
        vehicleName: "Wiesel 1A4",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        }
      }
    ]
  }
]