import type { BombIcon } from '@/types/Bombs'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Record<BombIcon, string> = {
  "guided-blue": "guided_bomb_special_laser.png",
  "guided-brown": "guided_bomb_heavy_middle_laser.png",
  "guided-green": "guided_bomb_middle_laser.png"
} as const satisfies Record<BombIcon, string>;

export function getAamIconPath(bomb: { icon: BombIcon | undefined }) {
  const fileName = bomb.icon ? variantIconFile[bomb.icon] : "bombs_large.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}