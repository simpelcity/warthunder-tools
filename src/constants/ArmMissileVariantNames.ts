import type { ArmMissileVariant } from '@/types/ArmMissiles'

export const armVariantNames: Record<ArmMissileVariant, string> = {
  "SARH": "Semi-Active Radar Homing",
  "SARH+IOG": "Semi-Active Radar Homing + In-Ordinance-Guidance",
  "PRH": "Passive Radiation Homing",
  "PRH+IOG": "Passive Radiation Homing + In-Ordinance-Guidance"
};

export function getArmVariantName(variant: ArmMissileVariant) {
  // if (variant === "Beam-Riding (SACLOS)") return `(${variant})`;
  // else if (variant)
  return `${armVariantNames[variant]}`;
}