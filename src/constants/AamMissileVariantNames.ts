import type { AamMissileVariant } from '@/types/AamMissiles'

export const aamVariantNames: Record<AamMissileVariant, string> = {
  "IR": "Infrared",
  "SARH": "Semi-Active Radar Homing",
  "SARH+IOG": "Semi-Active Radar Homing In-Ordinance-Guidance",
  "SARH+IOG+DL": "Semi-Active Radar Homing In-Ordinance-Guidance Data Link",
  "ARH+IOG+DL": "Active Radar Homing In-Ordinance-Guidance Data Link",
  "ARH+IOG+GNSS+DL": "Active Radar Homing In-Ordinance-Guidance Global-Navigation-Satellite-System Data Link",
  "Beam-Riding (SACLOS)": "Semi-Automatic-Command-to-Line-Of-Sight",
  "Command-Guided (MCLOS)": "Manual-Command-to-Line-Of-Sight",
};

export function getAamVariantName(variant: AamMissileVariant) {
  // if (variant === "Beam-Riding (SACLOS)") return `(${variant})`;
  // else if (variant)
  return `${aamVariantNames[variant]}`;
}