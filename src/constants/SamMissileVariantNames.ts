import type { SamMissileVariant } from '@/types/SamMissiles'

export const samMissileVariantNames: Record<SamMissileVariant, string> = {
  IR: "Infrared",
  "IR+IOG": "Infrared In-Ordinance-Guidance",
  "IR+IOG+DL": "Infrared In-Ordinance-Guidance Data Link",
  "IR+IOG+GNSS+DL": "Infrared In-Ordinance-Guidance Global-Navigation-Satellite-System Data Link",
  "ARH+IOG+DL": "Active Radar Homing In-Ordinance-Guidance Data Link",
  "Semi-Automatic (SACLOS)": "Semi-Automatic-Command-to-Line-Of-Sight",
  "Beam riding": "Semi-Automatic-Command-to-Line-Of-Sight",
};

export function getSamMissileVariantName(variant: SamMissileVariant) {
  return `(${samMissileVariantNames[variant]})`
}