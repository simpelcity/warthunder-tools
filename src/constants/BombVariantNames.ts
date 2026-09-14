import type { Guidance } from '@/types/Bombs'

export const bombVariantNames: Record<Guidance, string> = {
  "GNSS": "Global-Navigation-Satellite-System",
  "IR+IOG+GNSS": "Infrared + In-Ordinance-Guidance + Global-Navigation-Satellite-System",
  "Laser": "Laser",
  "Laser+IOG+GNSS": "Laser + In-Ordinance-Guidance + Global-Navigation-Satellite-System",
  "TV": "Television"
};

export function getBombVariantName(variant: Guidance) {
  return `${bombVariantNames[variant]}`;
}