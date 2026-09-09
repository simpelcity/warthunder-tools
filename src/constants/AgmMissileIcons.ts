import type { AgmIconNames } from '@/types/AgmMissiles'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Record<AgmIconNames, string> = {
  "agm-blue": "missile_air_to_uni.png",
  "agm-green": "missile_air_to_uni_smal.png",
  "agm-green-1": "missile_air_to_uni_smal_x59.png",
  "agm-green-bomb": "guided_bomb_green.png",
  "agm-grey-bomb": "guided_bomb_grey.png",
  "agm-orange": "missile_air_to_uni_large.png",
  "agm-orange-1": "missile_air_to_uni_large_x59.png",
  "agm-orange-bomb": "guided_bomb_red.png",
  "agm-yellow": "missile_air_to_uni_middle.png",
  "agm-yellow-3": "missile_air_to_uni_middle_x3.png"
} as const satisfies Record<AgmIconNames, string>;

export function getArmIconPath(agm: { icon: AgmIconNames | undefined}) {
  const fileName = agm.icon ? variantIconFile[agm.icon] : "missile_air_to_uni.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}