import type { AgmMissileVariant } from '@/types/AgmMissiles'

export const agmVariantNames: Record<AgmMissileVariant, string> = {
  "IR": "Infrared",
  "IR+IOG+GNSS": "Infrared + In-Ordinance-Guidance + Global-Navigation-Satellite-System",
  "Laser": "Laser",
  "Laser+IOG+GNSS": "Laser + In-Ordinance-Guidance + Global-Navigation-Satellite-System",
  "Manual": "Manual-Command-to-Line-Of-Sight",
  "TV": "Television",
  "TV+IOG": "Television + In-Ordinance-Guidance"
};

export function getAgmVariantName(variant: AgmMissileVariant) {
  return `${agmVariantNames[variant]}`;
}