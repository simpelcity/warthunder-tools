import type { BombDefinition } from '@/types/Bombs'

export const bombs: BombDefinition[] = [
  {
    id: "gbu_49",
    designation: "GBU-49 Paveway II",
    category: "Guided",
    family: "Conventional",
    icon: "guided-green",
    projectileMassKg: 277.1,
    guidance: "Laser+IOG+GNSS",
    guidanceTimeS: 110,
    explosiveType: "Comp. H6",
    explosiveMassKg: 87.1,
    tntEquivalent: 117.6,
    vehicles: [
      {
        id: "gbu_49_germ_wiesel_1_mk20",
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