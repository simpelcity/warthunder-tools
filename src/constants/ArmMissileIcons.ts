import type { ArmIconNames } from '@/types/ArmMissiles'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const variantIconFile: Record<ArmIconNames, string> = {
  "arm-blue": "arm_type_s.png",
  "arm-blue-1": "arm_kh31_type_s.png",
  "arm-green": "arm_type_f.png",
  "arm-green-1": "arm_kh31_type_f.png",
  "arm-red": "arm_type_b.png",
  "arm-red-1": "arm_kh31_type_b.png",
  "arm-yellow": "arm_type_c.png",
} as const satisfies Record<ArmIconNames, string>;

export function getArmIconPath(arm: { icon: ArmIconNames | undefined}) {
  const fileName = arm.icon ? variantIconFile[arm.icon] : "arm_type_s.png";
  return `${WT_SKIN_BASE}/${fileName}`;
}