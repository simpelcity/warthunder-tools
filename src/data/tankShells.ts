import type { TankShellDefinition } from "../types/TankShells";

export const tankShells: TankShellDefinition[] = [
	{
		id: "m74",
    designation: "M74",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    performances: [
      {
        id: "m74_us_m2a4",
        vehicleId: "us_m2a4",
        vehicleName: "M2A4",
        caliberMm: 37,
        penetrationMm: 77,
        velocityMs: 870,
        projectileMassKg: 0.87,
      },
    ],
	},
  {
    id: "m51b1",
    designation: "M51B1",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    performances: [
      {
        id: "m51b1_us_m2a4",
        vehicleId: "us_m2a4",
        vehicleName: "M2A4",
        caliberMm: 37,
        penetrationMm: 86,
        velocityMs: 870,
        projectileMassKg: 0.87,
      },
    ],
  },
];