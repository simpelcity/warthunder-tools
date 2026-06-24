import type { Aam, IRAam, SARHAam, ARHAam, BeamRidingAam, CommandGuidedAam, AamMissileVariant, AamIconNames } from '@/types/AamMissiles'

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

const categoryfallbackFile: Record<Aam, string> = {
  IR: "missile_air_to_air.png",
  Radar: "missile_air_to_air_midrange.png",
  "Beam-Riding (SACLOS)": "missile_air_to_air.png",
  "Command-Guided (MCLOS)": "rockets_he_large.png",
}

export function getAamIconPath(aam: { icon: AamIconNames; category: Aam; }) {
  const fileName = variantIconFile[aam.icon] ?? categoryfallbackFile[aam.category] ?? "missile_air_to_air.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}