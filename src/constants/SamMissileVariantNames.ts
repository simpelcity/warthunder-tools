import type { SamMissileVariant } from '@/types/SamMissiles'

export const samMissileVariantNames = {
  IR: "Infra-Red",
  "IR+IOG": "Infra-Red Inertial-Ordinance-Guidance",
  "IR+IOG+DL": "Infra-Red Inertial-Ordinance-Guidance DataLink",
  "IR+IOG+GNSS+DL": "Infra-Red Inertial-Ordinance-Guidance Global-Navigation-Satellite-System DataLink",
  "ARH+IOG+DL": "Active-Radar-Homing Inertial-Ordinance-Guidance DataLink",
  "Semi-Automatic (SACLOS)": "Semi-Automatic-Command-to-Line-Of-Sight",
  "Beam riding": "",
} as const satisfies Record<SamMissileVariant, string>;

export function getSamMissileVariantName(variant: SamMissileVariant) {
  return `(${samMissileVariantNames[variant]})`
}