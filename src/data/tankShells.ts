import type { TankShellDefinition } from "../types/TankShells";

export const tankShells: TankShellDefinition[] = [
	{
		id: "dm53",
		designation: "DM53",
		category: "kinetic",
		family: "sub-caliber-ap",
		variant: "apfsds",
		performances: [
			{
				id: "dm53-leopard-2a5",
				vehicleId: "leopard-2a5",
				vehicleName: "Leopard 2A5",
				caliberMm: 120,
				velocityMs: 1670,
				penetrationMm: 623,
			},
			{
				id: "dm53-leopard-2a7v",
				vehicleId: "leopard-2a7v",
				vehicleName: "Leopard 2A7V",
				caliberMm: 120,
				velocityMs: 1750,
				penetrationMm: 653,
			},
		],
	},
];