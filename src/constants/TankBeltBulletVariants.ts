import type { BeltBulletNames } from '@/types/TankBelts'

const bulletVariants: Record<BeltBulletNames, string> = {
  "APDS": "Armor-Piercing Discarding Sabot",
  "API-T": "Armor-Piercing Incendiary Tracer",
  "HEI-T": "High-Explosive Incendiary Tracer",
  "HEFI-T": "High-explosive Fragmentation Incendiary Tracer",
  "HVAP-T": "High-velocity Armor-Piercing Tracer",
  "APHE": "Armor-Piercing High-Explosive",
  "FI-T": "Fragmentation Incendiary Tracer",
  "AP-I": "Armor-Piercing Incendiary",
  "AP-T": "Armor-Piercing Tracer",
  "HEF-T": "High-Explosive fragmentation Tracer",
  "HVAP": "High-Velocity Armor-Piercing"
}

export function getBulletVariantName(variant: BeltBulletNames) {
  // if (variant === "Beam-Riding (SACLOS)") return `(${variant})`;
  // else if (variant)
  return `${bulletVariants[variant]}`;
}