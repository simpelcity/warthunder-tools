import type { Sam, IRSam, ARHSam, SemiAutomaticSam, BeamRidingSam, SamMissileVariant } from '@/types/SamMissiles';

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Partial<Record<SamMissileVariant, string>> = {
  IR: "air_to_air_missile.png",
  "IR+IOG": "air_to_air_missile.png",
  "IR+IOG+DL": "air_to_air_missile.png",
  "IR+IOG+GNSS+DL": "air_to_air_missile.png",
  "ARH+IOG+DL": "air_to_air_type_f_midrange_missile.png",
  "Semi-Automatic (SACLOS)": "sam.png",
  "Beam riding": "sam.png",
} as const satisfies Record<SamMissileVariant, string>;

export function getSamMissileIconPath(sam: { category: Sam; variant: IRSam | ARHSam | SemiAutomaticSam | BeamRidingSam }) {
  const fileName = variantIconFile[sam.variant] ?? "air_to_air_missile.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}

export const samDecorIcons = {
  armor: `${WT_SKIN_BASE}/armor_vsmall.png`,
  damage: `${WT_SKIN_BASE}/explosion_big.png`
}