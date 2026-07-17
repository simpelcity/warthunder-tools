import type { AamIconNames } from '@/types/AamMissiles'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Record<AamIconNames, string> = {
  "ir-white": "missile_air_to_air.png",
  "ir-orange": "missile_type_b_air_to_air.png",
  "ir-green": "missile_type_f_air_to_air.png",
  "ir-yellow": "missile_type_c_air_to_air.png",
  "ir-large-white": "missile_air_to_air_ir_large.png",
  "ir-large-orange": "missile_air_to_air_ir_large_special.png",
  "radar-white": "missile_air_to_air_midrange.png",
  "radar-orange": "missile_air_to_air_midrange_special.png",
  "radar-yellow": "missile_type_c_air_to_air_midrange.png",
  "radar-green": "missile_type_f_air_to_air_midrange.png",
  "radar-blue": "missile_type_s_air_to_air_midrange.png",
  "radar-red": "missile_type_b_air_to_air_midrange.png",
} as const satisfies Record<AamIconNames, string>;

export function getAamIconPath(aam: { icon: AamIconNames }) {
  const fileName = variantIconFile[aam.icon] ?? "missile_air_to_air.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}