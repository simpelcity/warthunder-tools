import type { Shell, KineticShell, ChemicalShell, TankShellVariant, Armor, Damage } from "@/types/TankShells";

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Partial<Record<TankShellVariant, string>> = {
	AP: "ap_tank.png",
	APC: "apc_tank.png",
	APBC: "apbc_tank.png",
	APCBC: "apcbc_tank.png",
	APCR: "apcr_tank.png",
	APDS: "apds_tank.png",
	APFSDS: "apfsds_tank.png",
	APHE: "aphe_tank.png",
	APHEBC: "aphebc_tank.png",
	AC: "ac_shell_tank.png",
	SAP: "sap_tank.png",
	SAPCBC: "sapbc_tank.png",
  SAPHEI: "sapbc_tank.png",
  SAPHECBC: "sapbc_tank.png",
	HE: "he_frag_tank.png",
  "HE-TF": "he_frag_dist_fuse_ship.png",
	"HE-VT": "he_frag_proxi_fuze_ship.png",
  "HE-OR": "heat_tank.png",
	"HE-Grenade": "he_grenade_tank.png",
	VOG: "vog_ship.png",
	Rocket: "rocket_tank.png",
	HESH: "hesh_tank.png",
	Smoke: "smoke_tank.png",
	Shrapnel: "shrapnel_tank.png",
	HEAT: "heat_tank.png",
	HEATFS: "heat_fs_tank.png",
	"HEAT MP": "heat_fs_tank.png",
	"HEAT-Grenade": "heat_grenade_tank.png",
	ATGM: "atgm.png",
	"ATGM-OTA": "atgm_top_attack.png",
	"ATGM-VT": "atgm_vt_fuze.png",
	"ATGM-Tandem": "atgm_tandem.png",
	"ATGM-HE": "atgm_he.png",
} as const satisfies Record<TankShellVariant, string>;

const familyFallbackFile: Record<KineticShell | ChemicalShell, string> = {
	"Solid-AP": "ap_tank.png",
	"HE-filled-AP": "aphe_tank.png",
	"Sub-caliber-AP": "apfsds_tank.png",
	"High-Explosive": "he_frag_tank.png",
	HEAT: "heat_tank.png",
	"Guided-Missiles": "atgm.png",
};

export function getTankShellIconPath(shell: { category: Shell; family: KineticShell | ChemicalShell, variant: TankShellVariant }) {
	const fileName = variantIconFile[shell.variant] ?? familyFallbackFile[shell.family] ?? "ap_tank.png";
	return `${WT_SKIN_BASE}/${fileName}`;
}

export function getTankShellDecorIcons(shell: { armor?: Armor; damage?: Damage }) {
	return {
    armor: `${shell.armor && `${WT_SKIN_BASE}/${shell.armor}.png`}`,
		damage: `${shell.damage && `${WT_SKIN_BASE}/${shell.damage}.png`}`,
	};
}