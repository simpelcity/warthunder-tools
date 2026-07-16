import type { AamDefinition } from '@/types/AamMissiles'

export const aamMissiles: AamDefinition[] = [
  {
    id: "aim_9b",
    designation: "AIM-9B Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-white",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 72.6,
    lockRangeRearAspectKm: 4,
    launchRangeKm: 10,
    maximumSpeedMach: 1.7,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9b_f9f-8",
        vehicleId: "f9f-8",
        vehicleName: "F9F-8",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          RB: "8.3"
        },
      },
      {
        id: "aim_9b_f3h-2",
        vehicleId: "f3h-2",
        vehicleName: "F3H-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      },
      {
        id: "aim_9b_a_4b",
        vehicleId: "a_4b",
        vehicleName: "A-4B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_fj_4b",
        vehicleId: "fj_4b",
        vehicleName: "FJ-4B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "8.7",
          SB: "9.0"
        }
      },
      {
        id: "aim_9b_f-104a",
        vehicleId: "f-104a",
        vehicleName: "F-104A",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.3",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-104c",
        vehicleId: "f-104c",
        vehicleName: "F-104C",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        }
      },
      {
        id: "aim_9b_f-100d",
        vehicleId: "f-100d",
        vehicleName: "F-100D",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "aim_7e",
    designation: "AIM-7E Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 205,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 25,
    launchRangeKm: 50,
    maximumSpeedMach: 4,
    maximumOverloadG: 25,
    missileGuidanceTimeS: 40,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 11.5,
    vehicles: [
      {
        id: "aim_7e_f-4e",
        vehicleId: "f-4e",
        vehicleName: "F-4E Phantom II",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          RB: "11.3"
        },
      },
    ],
  },
  {
    id: "aim_7c",
    designation: "AIM-7C Sparrow",
    category: "Radar",
    family: "SARH",
    icon: "radar-white",
    variant: "SARH",
    projectileMassKg: 172,
    guidance: "SARH",
    band: "I",
    shootDown: "Front-aspect",
    lockRangeKm: 12,
    launchRangeKm: 25,
    maximumSpeedMach: 3,
    maximumOverloadG: 15,
    missileGuidanceTimeS: 20,
    explosiveType: "PBXN-4",
    explosiveMassKg: 9,
    tntEquivalentKg: 7.5,
    vehicles: [
      {
        id: "aim_7c_f3h-2",
        vehicleId: "f3h-2",
        vehicleName: "F3H-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.0",
          SB: "9.3"
        }
      }
    ]
  },
  {
    id: "aim_9e",
    designation: "AIM-9E Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 76.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 10,
    missileGuidanceTimeS: 20,
    explosiveType: "HBX",
    explosiveMassKg: 4.8,
    tntEquivalentKg: 7.6,
    vehicles: [
      {
        id: "aim_9e_f-100d",
        vehicleId: "f-100d",
        vehicleName: "F-100D",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        }
      }
    ]
  },
  {
    id: "aim_9d",
    designation: "AIM-9D Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 88.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "HMX",
    explosiveMassKg: 3,
    tntEquivalentKg: 4.9,
    vehicles: [
      {
        id: "aim_9d_f8u-2",
        vehicleId: "f8u-2",
        vehicleName: "F8U-2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.0"
        }
      }
    ]
  },
  {
    id: "aim_9g",
    designation: "AIM-9G Sidewinder",
    category: "IR",
    family: "IR",
    icon: "ir-orange",
    variant: "IR",
    guidance: "IR",
    guidanceCage: "Caged",
    aspect: "Rear-aspect",
    projectileMassKg: 88.4,
    lockRangeRearAspectKm: 5.5,
    launchRangeKm: 18,
    maximumSpeedMach: 2.5,
    maximumOverloadG: 18,
    missileGuidanceTimeS: 60,
    explosiveType: "PBXN-3",
    explosiveMassKg: 2.8,
    tntEquivalentKg: 3.6,
    vehicles: [
      {
        id: "aim_9g_av_8c",
        vehicleId: "av_8c",
        vehicleName: "AV-8C",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        }
      }
    ]
  }
];