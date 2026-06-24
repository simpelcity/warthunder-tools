import type { SamMissileVariant } from '@/types/SamMissiles'

export const samVariantNames: Record<SamMissileVariant, string> = {
  IR: "Infrared",
  "IR+IOG": "Infrared + In-Ordinance-Guidance",
  "IR+IOG+DL": "Infrared + In-Ordinance-Guidance + Data Link",
  "IR+IOG+GNSS+DL": "Infrared + In-Ordinance-Guidance + Global-Navigation-Satellite-System + Data Link",
  "ARH+IOG+DL": "Active Radar Homing + In-Ordinance-Guidance + Data Link",
  "Semi-Automatic (SACLOS)": "Semi-Automatic-Command-to-Line-Of-Sight",
  "Beam riding": "Beam riding",
};

export function getSamVariantName(variant: SamMissileVariant) {
  return `${samVariantNames[variant]}`
}