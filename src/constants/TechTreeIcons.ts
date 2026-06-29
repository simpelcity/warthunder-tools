import type { TechTree } from '@/types/AamMissiles'

const WT_SKIN_BASE = "https://static.encyclopedia.warthunder.com/gui_skin";

const techTreeIconFile: Record<TechTree, string> = {
  USA: "country_usa.svg",
  Germany: "country_germany.svg",
  USSR: "country_ussr.svg",
  "Great Britain": "country_britain.svg",
  Japan: "country_japan.svg",
  China: "country_china.svg",
  Italy: "country_italy.svg",
  France: "country_france.svg",
  Sweden: "country_sweden.svg",
  Israel: "country_israel.svg",
}

export function getTechTreeIcons(vehicle: { vehicleTechTree: TechTree }) {
  const fileName = techTreeIconFile[vehicle.vehicleTechTree] ?? "country_usa.svg";
  return `${WT_SKIN_BASE}/${fileName}`;
}