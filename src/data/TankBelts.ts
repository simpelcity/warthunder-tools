import type { BeltDefinition } from '@/types/TankBelts'

export const tankBelts: BeltDefinition[] = [
  {
    id: "dm11a1",
    designation: "DM11A1",
    belt: ["HEI-T", "HEI-T", "HEI-T", "API-T"],
    penetrationMm: 68,
    vehicles: [
      {
        id: "dm11a1_germ_flakpz_I_Gepard",
        vehicleId: "germ_flakpz_I_Gepard",
        vehicleName: "Gepard",
        vehicleTechTree: "Germany",
        vehicleOperator: "FRG",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        }
      }
    ]
  },
  {
    id: "dm43",
    designation: "DM43",
    belt: ["HVAP-T", "HVAP-T", "HVAP-T", "HEFI-T"],
    penetrationMm: 57,
    vehicles: [
      {
        id: "dm43_germ_wiesel_1_mk20",
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
  },
  {
    id: "dm63",
    designation: "DM63",
    belt: ["APDS", "APDS", "APDS", "HEFI-T"],
    penetrationMm: 66,
    vehicles: [
      {
        id: "dm63_germ_wiesel_1_mk20",
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
