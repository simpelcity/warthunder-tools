import type { RocketIconNames } from '@/types/Rockets'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Record<RocketIconNames, string> = {
  "rocket-big": "nar_ap_large_group.png",
  "rocket-small": "nar_ap_special_group.png"
} as const satisfies Record<RocketIconNames, string>;

export function getAamIconPath(rocket: { icon: RocketIconNames | undefined }) {
  const fileName = rocket.icon ? variantIconFile[rocket.icon] : "bombs_large.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}