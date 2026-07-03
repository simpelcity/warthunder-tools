import type { TankShellDefinition } from "@/types/TankShells";

export const tankShells: TankShellDefinition[] = [
  {
    id: "103mm_milan",
    designation: "MILAN",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "103mm_milan_germ_marder_1a1",
        vehicleId: "germ_marder_1a1",
        vehicleName: "Marder A1-",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 103,
        projectileMassKg: 6.7,
        penetrationMm: 23.2,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 2,
        maximumSpeedMs: 200,
        missileGuidanceTimeS: 13,
        explosiveType: "Composition B",
        explosiveMassKg: 1.4,
        tntEquivalentKg: 1.8
      },
      {
        id: "103mm_milan_germ_marder_1a3",
        vehicleId: "germ_marder_1a3",
        vehicleName: "Marder 1A3",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 103,
        projectileMassKg: 6.7,
        penetrationMm: 23.2,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 2,
        maximumSpeedMs: 200,
        missileGuidanceTimeS: 13,
        explosiveType: "Composition B",
        explosiveMassKg: 1.4,
        tntEquivalentKg: 1.8
      }
    ]
  },
  {
    id: "105mm_c76a1",
    designation: "C76A1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_c76a1_us_stingray",
        vehicleId: "us_stingray",
        vehicleName: "Stingray",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.6,
        penetrationMm: 353,
        muzzleVelocityMs: 1509
      }
    ]
  },
  {
    id: "105mm_dm12",
    designation: "DM12",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_dm12_germ_boxer_3105",
        vehicleId: "germ_boxer_3105",
        vehicleName: "Boxer MGS",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_erprobungstrager_3_achs_turm",
        vehicleId: "germ_erprobungstrager_3_achs_turm",
        vehicleName: "Turm III",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_leopard_1a5",
        vehicleId: "germ_leopard_1a5",
        vehicleName: "Leopard 1A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_leopard_2av",
        vehicleId: "germ_leopard_2av",
        vehicleName: "Leopard 2AV",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_leopard_c2_mexas",
        vehicleId: "germ_leopard_c2_mexas",
        vehicleName: "C2A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Canada (modern)",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_leopard_i",
        vehicleId: "germ_leopard_i",
        vehicleName: "Leopard I",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_leopard_i_a1",
        vehicleId: "germ_leopard_i_a1",
        vehicleName: "Leopard A1A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_mkpz_m48a2ga2",
        vehicleId: "germ_mkpz_m48a2ga2",
        vehicleName: "M48A2 G A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_mkpz_super_m48",
        vehicleId: "germ_mkpz_super_m48",
        vehicleName: "M48 Super",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_radpanzer_90",
        vehicleId: "germ_radpanzer_90",
        vehicleName: "Radkampfwagen 90",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_th_400",
        vehicleId: "germ_th_400",
        vehicleName: "R400",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_th_800_bismark",
        vehicleId: "germ_th_800_bismark",
        vehicleName: "Class 3 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "South Africa (modern)",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_thyssen_henschel_tam",
        vehicleId: "germ_thyssen_henschel_tam",
        vehicleName: "TAM",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_thyssen_henschel_tam_2c",
        vehicleId: "germ_thyssen_henschel_tam_2c",
        vehicleName: "TAM 2C",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_dm12_germ_thyssen_henschel_tam_2ip",
        vehicleId: "germ_thyssen_henschel_tam_2ip",
        vehicleName: "TAM 2IP",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      }
    ]
  },
  {
    id: "105mm_dm13",
    designation: "DM13",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_dm13_germ_erprobungstrager_3_achs_turm",
        vehicleId: "germ_erprobungstrager_3_achs_turm",
        vehicleName: "Turm III",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm13_germ_leopard_i",
        vehicleId: "germ_leopard_i",
        vehicleName: "Leopard I",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm13_germ_leopard_i_a1",
        vehicleId: "germ_leopard_i_a1",
        vehicleName: "Leopard A1A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm13_germ_mkpz_m48a2ga2",
        vehicleId: "germ_mkpz_m48a2ga2",
        vehicleName: "M48A2 G A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm13_germ_thyssen_henschel_tam",
        vehicleId: "germ_thyssen_henschel_tam",
        vehicleName: "TAM",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "Argentina"
      }
    ]
  },
  {
    id: "105mm_dm23",
    designation: "DM23",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_dm23_germ_leopard_1a5",
        vehicleId: "germ_leopard_1a5",
        vehicleName: "Leopard 1A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_leopard_2av",
        vehicleId: "germ_leopard_2av",
        vehicleName: "Leopard 2AV",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_leopard_c2_mexas",
        vehicleId: "germ_leopard_c2_mexas",
        vehicleName: "C2A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Canada (modern)"
      },
      {
        id: "105mm_dm23_germ_leopard_i_a1",
        vehicleId: "germ_leopard_i_a1",
        vehicleName: "Leopard A1A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_mkpz_m48a2ga2",
        vehicleId: "germ_mkpz_m48a2ga2",
        vehicleName: "M48A2 G A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_mkpz_super_m48",
        vehicleId: "germ_mkpz_super_m48",
        vehicleName: "M48 Super",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_radpanzer_90",
        vehicleId: "germ_radpanzer_90",
        vehicleName: "Radkampfwagen 90",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_th_400",
        vehicleId: "germ_th_400",
        vehicleName: "R400",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm23_germ_th_800_bismark",
        vehicleId: "germ_th_800_bismark",
        vehicleName: "Class 3 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "South Africa (modern)"
      },
      {
        id: "105mm_dm23_germ_thyssen_henschel_tam",
        vehicleId: "germ_thyssen_henschel_tam",
        vehicleName: "TAM",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Argentina"
      },
      {
        id: "105mm_dm23_germ_thyssen_henschel_tam_2ip",
        vehicleId: "germ_thyssen_henschel_tam_2ip",
        vehicleName: "TAM 2IP",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Argentina"
      }
    ]
  },
  {
    id: "105mm_dm33",
    designation: "DM33",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_dm33_us_stingray",
        vehicleId: "us_stingray",
        vehicleName: "Stingray",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455
      },
      {
        id: "105mm_dm33_germ_boxer_3105",
        vehicleId: "germ_boxer_3105",
        vehicleName: "Boxer MGS",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_leopard_1a5",
        vehicleId: "germ_leopard_1a5",
        vehicleName: "Leopard 1A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_leopard_2av",
        vehicleId: "germ_leopard_2av",
        vehicleName: "Leopard 2AV",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_leopard_c2_mexas",
        vehicleId: "germ_leopard_c2_mexas",
        vehicleName: "C2A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Canada (modern)"
      },
      {
        id: "105mm_dm33_germ_mkpz_super_m48",
        vehicleId: "germ_mkpz_super_m48",
        vehicleName: "M48 Super",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_radpanzer_90",
        vehicleId: "germ_radpanzer_90",
        vehicleName: "Radkampfwagen 90",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_th_400",
        vehicleId: "germ_th_400",
        vehicleName: "R400",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm33_germ_th_800_bismark",
        vehicleId: "germ_th_800_bismark",
        vehicleName: "Class 3 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "South Africa (modern)"
      },
      {
        id: "105mm_dm33_germ_thyssen_henschel_tam_2c",
        vehicleId: "germ_thyssen_henschel_tam_2c",
        vehicleName: "TAM 2C",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Argentina"
      },
      {
        id: "105mm_dm33_germ_thyssen_henschel_tam_2ip",
        vehicleId: "germ_thyssen_henschel_tam_2ip",
        vehicleName: "TAM 2IP",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Argentina"
      }
    ]
  },
  {
    id: "105mm_dm512",
    designation: "DM512",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_dm512_germ_boxer_3105",
        vehicleId: "germ_boxer_3105",
        vehicleName: "Boxer MGS",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_erprobungstrager_3_achs_turm",
        vehicleId: "germ_erprobungstrager_3_achs_turm",
        vehicleName: "Turm III",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_leopard_1a5",
        vehicleId: "germ_leopard_1a5",
        vehicleName: "Leopard 1A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_leopard_2av",
        vehicleId: "germ_leopard_2av",
        vehicleName: "Leopard 2AV",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_leopard_c2_mexas",
        vehicleId: "germ_leopard_c2_mexas",
        vehicleName: "C2A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "Canada (modern)",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_leopard_i",
        vehicleId: "germ_leopard_i",
        vehicleName: "Leopard I",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_leopard_i_a1",
        vehicleId: "germ_leopard_i_a1",
        vehicleName: "Leopard A1A1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_mkpz_m48a2ga2",
        vehicleId: "germ_mkpz_m48a2ga2",
        vehicleName: "M48A2 G A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_mkpz_super_m48",
        vehicleId: "germ_mkpz_super_m48",
        vehicleName: "M48 Super",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_radpanzer_90",
        vehicleId: "germ_radpanzer_90",
        vehicleName: "Radkampfwagen 90",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_th_400",
        vehicleId: "germ_th_400",
        vehicleName: "R400",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_th_800_bismark",
        vehicleId: "germ_th_800_bismark",
        vehicleName: "Class 3 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "South Africa (modern)",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_thyssen_henschel_tam",
        vehicleId: "germ_thyssen_henschel_tam",
        vehicleName: "TAM",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_thyssen_henschel_tam_2c",
        vehicleId: "germ_thyssen_henschel_tam_2c",
        vehicleName: "TAM 2C",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_dm512_germ_thyssen_henschel_tam_2ip",
        vehicleId: "germ_thyssen_henschel_tam_2ip",
        vehicleName: "TAM 2IP",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      }
    ]
  },
  {
    id: "105mm_dm63",
    designation: "DM63",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_dm63_germ_boxer_3105",
        vehicleId: "germ_boxer_3105",
        vehicleName: "Boxer MGS",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 4.4,
        penetrationMm: 430,
        muzzleVelocityMs: 1455,
        vehicleOperator: "FRG"
      },
      {
        id: "105mm_dm63_germ_thyssen_henschel_tam_2c",
        vehicleId: "germ_thyssen_henschel_tam_2c",
        vehicleName: "TAM 2C",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 4.4,
        penetrationMm: 430,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Argentina"
      }
    ]
  },
  {
    id: "105mm_f.h.gr.",
    designation: "F.H.Gr.",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_f.h.gr._germ_stuh_iii_ausf_g",
        vehicleId: "germ_stuh_iii_ausf_g",
        vehicleName: "StuH 42 G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 14.8,
        penetrationMm: 22.2,
        muzzleVelocityMs: 472,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1.8
      }
    ]
  },
  {
    id: "105mm_f.h.gr.nb.",
    designation: "F.H.Gr.Nb.",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "105mm_f.h.gr.nb._germ_stuh_iii_ausf_g",
        vehicleId: "germ_stuh_iii_ausf_g",
        vehicleName: "StuH 42 G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 14,
        penetrationMm: 2.9,
        muzzleVelocityMs: 480,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "105mm_gr.19",
    designation: "Gr.19",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_gr.19_germ_pzsfl_iva_dickermax",
        vehicleId: "germ_pzsfl_iva_dickermax",
        vehicleName: "Dicker Max",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.1,
        penetrationMm: 23.3,
        muzzleVelocityMs: 835,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1.9
      }
    ]
  },
  {
    id: "105mm_gr.39_rot_hl_b",
    designation: "Gr.39 rot Hl/B",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_gr.39_rot_hl_b_germ_stuh_iii_ausf_g",
        vehicleId: "germ_stuh_iii_ausf_g",
        vehicleName: "StuH 42 G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 12.4,
        penetrationMm: 30.3,
        muzzleVelocityMs: 495,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 2.5
      }
    ]
  },
  {
    id: "105mm_gr.39_rot_hl_c",
    designation: "Gr.39 rot Hl/C",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_gr.39_rot_hl_c_germ_stuh_iii_ausf_g",
        vehicleId: "germ_stuh_iii_ausf_g",
        vehicleName: "StuH 42 G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 12.4,
        penetrationMm: 30.5,
        muzzleVelocityMs: 495,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 2.6
      }
    ]
  },
  {
    id: "105mm_m1_shell",
    designation: "M1 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_m1_shell_us_m4a3_105_sherman",
        vehicleId: "us_m4a3_105_sherman",
        vehicleName: "M4A3 (105)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 14.9,
        penetrationMm: 26.8,
        muzzleVelocityMs: 472,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2.2
      }
    ]
  },
  {
    id: "105mm_m111",
    designation: "M111",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m111_us_merkava_mk_1",
        vehicleId: "us_merkava_mk_1",
        vehicleName: "▃Merkava Mk.1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Israel"
      },
      {
        id: "105mm_m111_us_merkava_mk_2b_late",
        vehicleId: "us_merkava_mk_2b_late",
        vehicleName: "▃Merkava Mk.2B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.2,
        penetrationMm: 338,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Israel"
      }
    ]
  },
  {
    id: "105mm_m152",
    designation: "M152",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m152_us_magach_3",
        vehicleId: "us_magach_3",
        vehicleName: "▃Magach 3 (ERA)",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m152_us_merkava_mk_1",
        vehicleId: "us_merkava_mk_1",
        vehicleName: "▃Merkava Mk.1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m152_us_merkava_mk_2b_late",
        vehicleId: "us_merkava_mk_2b_late",
        vehicleName: "▃Merkava Mk.2B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      }
    ]
  },
  {
    id: "105mm_m156",
    designation: "M156",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_m156_us_magach_3",
        vehicleId: "us_magach_3",
        vehicleName: "▃Magach 3 (ERA)",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 127,
        muzzleVelocityMs: 731,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.2,
        tntEquivalentKg: 3.2
      },
      {
        id: "105mm_m156_us_merkava_mk_1",
        vehicleId: "us_merkava_mk_1",
        vehicleName: "▃Merkava Mk.1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 127,
        muzzleVelocityMs: 731,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.2,
        tntEquivalentKg: 3.2
      },
      {
        id: "105mm_m156_us_merkava_mk_2b_late",
        vehicleId: "us_merkava_mk_2b_late",
        vehicleName: "▃Merkava Mk.2B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 127,
        muzzleVelocityMs: 731,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.2,
        tntEquivalentKg: 3.2
      }
    ]
  },
  {
    id: "105mm_m392a2",
    designation: "M392A2",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m392a2_us_m60",
        vehicleId: "us_m60",
        vehicleName: "M60",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478
      },
      {
        id: "105mm_m392a2_us_magach_3",
        vehicleId: "us_magach_3",
        vehicleName: "▃Magach 3 (ERA)",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1478,
        vehicleOperator: "Israel"
      }
    ]
  },
  {
    id: "105mm_m393a2",
    designation: "M393A2",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_m393a2_us_ags_teledyne",
        vehicleId: "us_ags_teledyne",
        vehicleName: "AGS",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_ccvl",
        vehicleId: "us_ccvl",
        vehicleName: "CCVL",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m1_abrams",
        vehicleId: "us_m1_abrams",
        vehicleName: "M1 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m1_abrams_kvt",
        vehicleId: "us_m1_abrams_kvt",
        vehicleName: "M1 KVT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m1_ip_abrams",
        vehicleId: "us_m1_ip_abrams",
        vehicleName: "IPM1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m60",
        vehicleId: "us_m60",
        vehicleName: "M60",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m60a1",
        vehicleId: "us_m60a1",
        vehicleName: "M60A1 (AOS)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m60a1_rise_mod",
        vehicleId: "us_m60a1_rise_mod",
        vehicleName: "M60A1 Predator",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m60a1_rise_passive_era",
        vehicleId: "us_m60a1_rise_passive_era",
        vehicleName: "M60A1 RISE (P)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_stingray",
        vehicleId: "us_stingray",
        vehicleName: "Stingray",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_xm1_chrysler",
        vehicleId: "us_xm1_chrysler",
        vehicleName: "XM1 (Chrysler)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_xm1_gm",
        vehicleId: "us_xm1_gm",
        vehicleName: "XM1 (GM)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      },
      {
        id: "105mm_m393a2_us_xm_8",
        vehicleId: "us_xm_8",
        vehicleName: "XM8",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      }
    ]
  },
  {
    id: "105mm_m393a3",
    designation: "M393A3",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_m393a3_us_m10_booker_late",
        vehicleId: "us_m10_booker_late",
        vehicleName: "M10 Booker",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 127,
        muzzleVelocityMs: 753,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.3
      }
    ]
  },
  {
    id: "105mm_m413",
    designation: "M413",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_m413_us_merkava_mk_2b_late",
        vehicleId: "us_merkava_mk_2b_late",
        vehicleName: "▃Merkava Mk.2B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 421,
        muzzleVelocityMs: 1455,
        vehicleOperator: "Israel"
      }
    ]
  },
  {
    id: "105mm_m416",
    designation: "M416",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "105mm_m416_us_ags_teledyne",
        vehicleId: "us_ags_teledyne",
        vehicleName: "AGS",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_ccvl",
        vehicleId: "us_ccvl",
        vehicleName: "CCVL",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m1_abrams",
        vehicleId: "us_m1_abrams",
        vehicleName: "M1 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m1_abrams_kvt",
        vehicleId: "us_m1_abrams_kvt",
        vehicleName: "M1 KVT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m1_ip_abrams",
        vehicleId: "us_m1_ip_abrams",
        vehicleName: "IPM1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m60",
        vehicleId: "us_m60",
        vehicleName: "M60",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m60a1",
        vehicleId: "us_m60a1",
        vehicleName: "M60A1 (AOS)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m60a1_rise_mod",
        vehicleId: "us_m60a1_rise_mod",
        vehicleName: "M60A1 Predator",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m60a1_rise_passive_era",
        vehicleId: "us_m60a1_rise_passive_era",
        vehicleName: "M60A1 RISE (P)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_magach_3",
        vehicleId: "us_magach_3",
        vehicleName: "▃Magach 3 (ERA)",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_merkava_mk_1",
        vehicleId: "us_merkava_mk_1",
        vehicleName: "▃Merkava Mk.1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_merkava_mk_2b_late",
        vehicleId: "us_merkava_mk_2b_late",
        vehicleName: "▃Merkava Mk.2B",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_xm1_chrysler",
        vehicleId: "us_xm1_chrysler",
        vehicleName: "XM1 (Chrysler)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_xm1_gm",
        vehicleId: "us_xm1_gm",
        vehicleName: "XM1 (GM)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_us_xm_8",
        vehicleId: "us_xm_8",
        vehicleName: "XM8",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_m416_germ_thyssen_henschel_tam",
        vehicleId: "germ_thyssen_henschel_tam",
        vehicleName: "TAM",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 732,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "105mm_m456",
    designation: "M456",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_m456_us_m60",
        vehicleId: "us_m60",
        vehicleName: "M60",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_m60a1",
        vehicleId: "us_m60a1",
        vehicleName: "M60A1 (AOS)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_m60a1_rise_mod",
        vehicleId: "us_m60a1_rise_mod",
        vehicleName: "M60A1 Predator",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_m60a1_rise_passive_era",
        vehicleId: "us_m60a1_rise_passive_era",
        vehicleName: "M60A1 RISE (P)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_xm1_chrysler",
        vehicleId: "us_xm1_chrysler",
        vehicleName: "XM1 (Chrysler)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456_us_xm1_gm",
        vehicleId: "us_xm1_gm",
        vehicleName: "XM1 (GM)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      }
    ]
  },
  {
    id: "105mm_m456a2",
    designation: "M456A2",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_m456a2_us_ags_teledyne",
        vehicleId: "us_ags_teledyne",
        vehicleName: "AGS",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_ccvl",
        vehicleId: "us_ccvl",
        vehicleName: "CCVL",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m10_booker_late",
        vehicleId: "us_m10_booker_late",
        vehicleName: "M10 Booker",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m1128_mgs",
        vehicleId: "us_m1128_mgs",
        vehicleName: "M1128",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m1128_wolfpack",
        vehicleId: "us_m1128_wolfpack",
        vehicleName: "M1128 Wolfpack",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m1_abrams",
        vehicleId: "us_m1_abrams",
        vehicleName: "M1 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m1_abrams_kvt",
        vehicleId: "us_m1_abrams_kvt",
        vehicleName: "M1 KVT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_m1_ip_abrams",
        vehicleId: "us_m1_ip_abrams",
        vehicleName: "IPM1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_stingray",
        vehicleId: "us_stingray",
        vehicleName: "Stingray",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      },
      {
        id: "105mm_m456a2_us_xm_8",
        vehicleId: "us_xm_8",
        vehicleName: "XM8",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.5,
        penetrationMm: 16.9,
        muzzleVelocityMs: 1174,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.97,
        tntEquivalentKg: 1.3
      }
    ]
  },
  {
    id: "105mm_m67_shot",
    designation: "M67 shot",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_m67_shot_us_m4a3_105_sherman",
        vehicleId: "us_m4a3_105_sherman",
        vehicleName: "M4A3 (105)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 13.1,
        penetrationMm: 20.7,
        muzzleVelocityMs: 381,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Pentolite",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.6
      }
    ]
  },
  {
    id: "105mm_m728",
    designation: "M728",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m728_us_m60a1",
        vehicleId: "us_m60a1",
        vehicleName: "M60A1 (AOS)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      },
      {
        id: "105mm_m728_us_m60a1_rise_mod",
        vehicleId: "us_m60a1_rise_mod",
        vehicleName: "M60A1 Predator",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      },
      {
        id: "105mm_m728_us_m60a1_rise_passive_era",
        vehicleId: "us_m60a1_rise_passive_era",
        vehicleName: "M60A1 RISE (P)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      },
      {
        id: "105mm_m728_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      },
      {
        id: "105mm_m728_us_xm1_chrysler",
        vehicleId: "us_xm1_chrysler",
        vehicleName: "XM1 (Chrysler)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      },
      {
        id: "105mm_m728_us_xm1_gm",
        vehicleId: "us_xm1_gm",
        vehicleName: "XM1 (GM)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 265,
        muzzleVelocityMs: 1426
      }
    ]
  },
  {
    id: "105mm_m735",
    designation: "M735",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m735_us_ccvl",
        vehicleId: "us_ccvl",
        vehicleName: "CCVL",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_m1_abrams",
        vehicleId: "us_m1_abrams",
        vehicleName: "M1 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_m1_abrams_kvt",
        vehicleId: "us_m1_abrams_kvt",
        vehicleName: "M1 KVT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_m60a1_rise_mod",
        vehicleId: "us_m60a1_rise_mod",
        vehicleName: "M60A1 Predator",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_m60a1_rise_passive_era",
        vehicleId: "us_m60a1_rise_passive_era",
        vehicleName: "M60A1 RISE (P)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_xm1_chrysler",
        vehicleId: "us_xm1_chrysler",
        vehicleName: "XM1 (Chrysler)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_xm1_gm",
        vehicleId: "us_xm1_gm",
        vehicleName: "XM1 (GM)",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      },
      {
        id: "105mm_m735_us_xm_8",
        vehicleId: "us_xm_8",
        vehicleName: "XM8",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 292,
        muzzleVelocityMs: 1501
      }
    ]
  },
  {
    id: "105mm_m774",
    designation: "M774",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m774_us_ags_teledyne",
        vehicleId: "us_ags_teledyne",
        vehicleName: "AGS",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_m1128_mgs",
        vehicleId: "us_m1128_mgs",
        vehicleName: "M1128",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_m1128_wolfpack",
        vehicleId: "us_m1128_wolfpack",
        vehicleName: "M1128 Wolfpack",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_m1_abrams",
        vehicleId: "us_m1_abrams",
        vehicleName: "M1 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_m1_abrams_kvt",
        vehicleId: "us_m1_abrams_kvt",
        vehicleName: "M1 KVT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_m60a3_tts",
        vehicleId: "us_m60a3_tts",
        vehicleName: "M60A3 TTS",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      },
      {
        id: "105mm_m774_us_xm_8",
        vehicleId: "us_xm_8",
        vehicleName: "XM8",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 372,
        muzzleVelocityMs: 1509
      }
    ]
  },
  {
    id: "105mm_m833",
    designation: "M833",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_m833_us_ags_teledyne",
        vehicleId: "us_ags_teledyne",
        vehicleName: "AGS",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 393,
        muzzleVelocityMs: 1485
      },
      {
        id: "105mm_m833_us_ccvl",
        vehicleId: "us_ccvl",
        vehicleName: "CCVL",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 393,
        muzzleVelocityMs: 1485
      },
      {
        id: "105mm_m833_us_m10_booker_late",
        vehicleId: "us_m10_booker_late",
        vehicleName: "M10 Booker",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 393,
        muzzleVelocityMs: 1485
      },
      {
        id: "105mm_m833_us_m1_ip_abrams",
        vehicleId: "us_m1_ip_abrams",
        vehicleName: "IPM1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.7,
        penetrationMm: 393,
        muzzleVelocityMs: 1485
      }
    ]
  },
  {
    id: "105mm_m84",
    designation: "M84",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "105mm_m84_us_m4a3_105_sherman",
        vehicleId: "us_m4a3_105_sherman",
        vehicleName: "M4A3 (105)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 14.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 457,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "105mm_m900",
    designation: "M900",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_m900_us_m10_booker_late",
        vehicleId: "us_m10_booker_late",
        vehicleName: "M10 Booker",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 522,
        muzzleVelocityMs: 1505
      },
      {
        id: "105mm_m900_us_m1128_mgs",
        vehicleId: "us_m1128_mgs",
        vehicleName: "M1128",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 522,
        muzzleVelocityMs: 1505
      },
      {
        id: "105mm_m900_us_m1128_wolfpack",
        vehicleId: "us_m1128_wolfpack",
        vehicleName: "M1128 Wolfpack",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 522,
        muzzleVelocityMs: 1505
      },
      {
        id: "105mm_m900_us_m1_ip_abrams",
        vehicleId: "us_m1_ip_abrams",
        vehicleName: "IPM1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 3.8,
        penetrationMm: 522,
        muzzleVelocityMs: 1505
      }
    ]
  },
  {
    id: "105mm_occ_105_f1",
    designation: "OCC 105 F1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_occ_105_f1_germ_marder_clovis",
        vehicleId: "germ_marder_clovis",
        vehicleName: "CLOVIS",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.9,
        penetrationMm: 14.1,
        muzzleVelocityMs: 800,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.78,
        tntEquivalentKg: 1
      },
      {
        id: "105mm_occ_105_f1_germ_marder_df_105",
        vehicleId: "germ_marder_df_105",
        vehicleName: "DF105",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.9,
        penetrationMm: 14.1,
        muzzleVelocityMs: 800,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.78,
        tntEquivalentKg: 1
      },
      {
        id: "105mm_occ_105_f1_germ_sk105_a2",
        vehicleId: "germ_sk105_a2",
        vehicleName: "JaPz.K A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.9,
        penetrationMm: 14.1,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.78,
        tntEquivalentKg: 1
      }
    ]
  },
  {
    id: "105mm_oe_105_f1_mle.60",
    designation: "OE 105 F1 Mle.60",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_oe_105_f1_mle.60_germ_marder_clovis",
        vehicleId: "germ_marder_clovis",
        vehicleName: "CLOVIS",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 12.1,
        penetrationMm: 25,
        muzzleVelocityMs: 800,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2
      },
      {
        id: "105mm_oe_105_f1_mle.60_germ_marder_df_105",
        vehicleId: "germ_marder_df_105",
        vehicleName: "DF105",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 12.1,
        penetrationMm: 25,
        muzzleVelocityMs: 800,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2
      },
      {
        id: "105mm_oe_105_f1_mle.60_germ_sk105_a2",
        vehicleId: "germ_sk105_a2",
        vehicleName: "JaPz.K A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 12.1,
        penetrationMm: 25,
        muzzleVelocityMs: 700,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2
      }
    ]
  },
  {
    id: "105mm_ofl_105_g1",
    designation: "OFL 105 G1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_ofl_105_g1_germ_sk105_a2",
        vehicleId: "germ_sk105_a2",
        vehicleName: "JaPz.K A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 3.4,
        penetrationMm: 346,
        muzzleVelocityMs: 1475,
        vehicleOperator: "Argentina"
      }
    ]
  },
  {
    id: "105mm_ofph_105_f1",
    designation: "OFPH 105 F1",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "105mm_ofph_105_f1_germ_marder_clovis",
        vehicleId: "germ_marder_clovis",
        vehicleName: "CLOVIS",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 600,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_ofph_105_f1_germ_marder_df_105",
        vehicleId: "germ_marder_df_105",
        vehicleName: "DF105",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 600,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "105mm_ofph_105_f1_germ_sk105_a2",
        vehicleId: "germ_sk105_a2",
        vehicleName: "JaPz.K A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: null,
        armor: null,
        caliberMm: 105,
        projectileMassKg: 11.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 700,
        vehicleOperator: "Argentina",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "105mm_pzgr",
    designation: "PzGr",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_pzgr_germ_pzsfl_iva_dickermax",
        vehicleId: "germ_pzsfl_iva_dickermax",
        vehicleName: "Dicker Max",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 14,
        penetrationMm: 6.2,
        muzzleVelocityMs: 822,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.238,
        tntEquivalentKg: 0.305
      },
      {
        id: "105mm_pzgr_germ_stuh_iii_ausf_g",
        vehicleId: "germ_stuh_iii_ausf_g",
        vehicleName: "StuH 42 G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 14,
        penetrationMm: 6.2,
        muzzleVelocityMs: 480,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.238,
        tntEquivalentKg: 0.305
      }
    ]
  },
  {
    id: "105mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_pzgr_40_germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleName: "Tiger II (10.5 cm Kw.K)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 10.3,
        penetrationMm: 304,
        muzzleVelocityMs: 1150
      }
    ]
  },
  {
    id: "105mm_pzgr.rot",
    designation: "Pzgr.rot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_pzgr.rot_germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleName: "Tiger II (10.5 cm Kw.K)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 16.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 1005,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.1,
        tntEquivalentKg: 0.143
      },
      {
        id: "105mm_pzgr.rot_germ_pzsfl_iva_dickermax",
        vehicleId: "germ_pzsfl_iva_dickermax",
        vehicleName: "Dicker Max",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 15.6,
        penetrationMm: 6.8,
        muzzleVelocityMs: 822,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.25,
        tntEquivalentKg: 0.357
      }
    ]
  },
  {
    id: "105mm_sprgr._l_4.4",
    designation: "Sprgr. L/4.4",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_sprgr._l_4.4_germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46",
        vehicleName: "Tiger II (10.5 cm Kw.K)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.1,
        penetrationMm: 20,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1.5
      }
    ]
  },
  {
    id: "105mm_t13",
    designation: "T13",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_t13_us_m6a2e1",
        vehicleId: "us_m6a2e1",
        vehicleName: "M6A2E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 18.6,
        penetrationMm: 4.8,
        muzzleVelocityMs: 899,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.181,
        tntEquivalentKg: 0.177
      },
      {
        id: "105mm_t13_us_t28",
        vehicleId: "us_t28",
        vehicleName: "T28",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.3",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 18.6,
        penetrationMm: 4.8,
        muzzleVelocityMs: 899,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.181,
        tntEquivalentKg: 0.177
      },
      {
        id: "105mm_t13_us_t29",
        vehicleId: "us_t29",
        vehicleName: "T29",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 18.6,
        penetrationMm: 4.8,
        muzzleVelocityMs: 899,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.181,
        tntEquivalentKg: 0.177
      },
      {
        id: "105mm_t13_us_t95",
        vehicleId: "us_t95",
        vehicleName: "T95",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 18.6,
        penetrationMm: 4.8,
        muzzleVelocityMs: 899,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.181,
        tntEquivalentKg: 0.177
      }
    ]
  },
  {
    id: "105mm_t182e1",
    designation: "T182E1",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "105mm_t182e1_us_t54e1",
        vehicleId: "us_t54e1",
        vehicleName: "T54E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 15.9,
        penetrationMm: 266,
        muzzleVelocityMs: 1067
      },
      {
        id: "105mm_t182e1_us_t54e2",
        vehicleId: "us_t54e2",
        vehicleName: "T54E2",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 105,
        projectileMassKg: 15.9,
        penetrationMm: 266,
        muzzleVelocityMs: 1067
      }
    ]
  },
  {
    id: "105mm_t279",
    designation: "T279",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_t279_us_t54e1",
        vehicleId: "us_t54e1",
        vehicleName: "T54E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 434,
        muzzleVelocityMs: 1554
      },
      {
        id: "105mm_t279_us_t54e2",
        vehicleId: "us_t54e2",
        vehicleName: "T54E2",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 4.5,
        penetrationMm: 434,
        muzzleVelocityMs: 1554
      }
    ]
  },
  {
    id: "105mm_t298e1",
    designation: "T298E1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_t298e1_us_t54e1",
        vehicleId: "us_t54e1",
        vehicleName: "T54E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.2,
        penetrationMm: 20.2,
        muzzleVelocityMs: 1128,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.2,
        tntEquivalentKg: 1.6
      },
      {
        id: "105mm_t298e1_us_t54e2",
        vehicleId: "us_t54e2",
        vehicleName: "T54E2",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 10.2,
        penetrationMm: 20.2,
        muzzleVelocityMs: 1128,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.2,
        tntEquivalentKg: 1.6
      }
    ]
  },
  {
    id: "105mm_t29e3",
    designation: "T29E3",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "105mm_t29e3_us_m6a2e1",
        vehicleId: "us_m6a2e1",
        vehicleName: "M6A2E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 292,
        muzzleVelocityMs: 1128
      },
      {
        id: "105mm_t29e3_us_t28",
        vehicleId: "us_t28",
        vehicleName: "T28",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.3",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 292,
        muzzleVelocityMs: 1128
      },
      {
        id: "105mm_t29e3_us_t29",
        vehicleId: "us_t29",
        vehicleName: "T29",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 292,
        muzzleVelocityMs: 1128
      },
      {
        id: "105mm_t29e3_us_t95",
        vehicleId: "us_t95",
        vehicleName: "T95",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 105,
        projectileMassKg: 11.2,
        penetrationMm: 292,
        muzzleVelocityMs: 1128
      }
    ]
  },
  {
    id: "105mm_t30e1",
    designation: "T30E1",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "105mm_t30e1_us_m6a2e1",
        vehicleId: "us_m6a2e1",
        vehicleName: "M6A2E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.2,
        penetrationMm: 20,
        muzzleVelocityMs: 945,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },
      {
        id: "105mm_t30e1_us_t28",
        vehicleId: "us_t28",
        vehicleName: "T28",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.3",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.2,
        penetrationMm: 20,
        muzzleVelocityMs: 945,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },
      {
        id: "105mm_t30e1_us_t29",
        vehicleId: "us_t29",
        vehicleName: "T29",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.2,
        penetrationMm: 20,
        muzzleVelocityMs: 945,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },
      {
        id: "105mm_t30e1_us_t95",
        vehicleId: "us_t95",
        vehicleName: "T95",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 105,
        projectileMassKg: 15.2,
        penetrationMm: 20,
        muzzleVelocityMs: 945,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      }
    ]
  },
  {
    id: "105mm_t32",
    designation: "T32",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "105mm_t32_us_m6a2e1",
        vehicleId: "us_m6a2e1",
        vehicleName: "M6A2E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 17.7,
        penetrationMm: 256,
        muzzleVelocityMs: 914
      },
      {
        id: "105mm_t32_us_t28",
        vehicleId: "us_t28",
        vehicleName: "T28",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.3",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 17.7,
        penetrationMm: 256,
        muzzleVelocityMs: 914
      },
      {
        id: "105mm_t32_us_t29",
        vehicleId: "us_t29",
        vehicleName: "T29",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 17.7,
        penetrationMm: 256,
        muzzleVelocityMs: 914
      },
      {
        id: "105mm_t32_us_t95",
        vehicleId: "us_t95",
        vehicleName: "T95",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 105,
        projectileMassKg: 17.7,
        penetrationMm: 256,
        muzzleVelocityMs: 914
      }
    ]
  },
  {
    id: "106mm_m344a1",
    designation: "M344A1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "106mm_m344a1_us_m50_ontos",
        vehicleId: "us_m50_ontos",
        vehicleName: "M50",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 106,
        projectileMassKg: 8,
        penetrationMm: 21.1,
        muzzleVelocityMs: 503,
        fuzeSensitivityMm: 0.01,
        explosiveType: "Composition B",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.7
      },
      {
        id: "106mm_m344a1_us_t114",
        vehicleId: "us_t114",
        vehicleName: "T114",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 106,
        projectileMassKg: 10,
        penetrationMm: 21.1,
        muzzleVelocityMs: 502,
        fuzeSensitivityMm: 0.01,
        explosiveType: "Composition B",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.7
      },
      {
        id: "106mm_m344a1_germ_spz_12_3",
        vehicleId: "germ_spz_12_3",
        vehicleName: "SPz 12-3 LGS",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 106,
        projectileMassKg: 8,
        penetrationMm: 21.1,
        muzzleVelocityMs: 503,
        vehicleOperator: "FRG",
        fuzeSensitivityMm: 0.01,
        explosiveType: "Composition B",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.7
      }
    ]
  },
  {
    id: "106mm_m361a1",
    designation: "M361A1",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "106mm_m361a1_us_m50_ontos",
        vehicleId: "us_m50_ontos",
        vehicleName: "M50",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 106,
        projectileMassKg: 7.9,
        penetrationMm: 152,
        muzzleVelocityMs: 498,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3.5,
        tntEquivalentKg: 5
      },
      {
        id: "106mm_m361a1_germ_spz_12_3",
        vehicleId: "germ_spz_12_3",
        vehicleName: "SPz 12-3 LGS",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 106,
        projectileMassKg: 7.9,
        penetrationMm: 152,
        muzzleVelocityMs: 498,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 3.5,
        tntEquivalentKg: 5
      }
    ]
  },
  {
    id: "110mm_spike_lr_ii",
    designation: "Spike-LR II",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "110mm_spike_lr_ii_germ_boxer_swatrinf",
        vehicleId: "germ_boxer_swatrinf",
        vehicleName: "sWaTrgInf",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 110,
        projectileMassKg: 13.5,
        penetrationMm: 16.9,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "IR",
        IRCCM: true,
        maximumSpeedMs: 180,
        missileGuidanceTimeS: 45,
        explosiveType: "LX-14",
        explosiveMassKg: 0.9,
        tntEquivalentKg: 1.3
      },
      {
        id: "110mm_spike_lr_ii_germ_schutzenpanzer_puma_vjtf",
        vehicleId: "germ_schutzenpanzer_puma_vjtf",
        vehicleName: "Puma VJTF",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 110,
        projectileMassKg: 13.5,
        penetrationMm: 16.9,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "IR",
        IRCCM: true,
        maximumSpeedMs: 180,
        missileGuidanceTimeS: 45,
        explosiveType: "LX-14",
        explosiveMassKg: 0.9,
        tntEquivalentKg: 1.3
      },
      {
        id: "110mm_spike_lr_ii_germ_schutzenpanzer_puma_vjtf_mod",
        vehicleId: "germ_schutzenpanzer_puma_vjtf_mod",
        vehicleName: "Puma u14",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 110,
        projectileMassKg: 13.5,
        penetrationMm: 16.9,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "IR",
        IRCCM: true,
        maximumSpeedMs: 180,
        missileGuidanceTimeS: 45,
        explosiveType: "LX-14",
        explosiveMassKg: 0.9,
        tntEquivalentKg: 1.3
      },
      {
        id: "110mm_spike_lr_ii_germ_vilkas",
        vehicleId: "germ_vilkas",
        vehicleName: "Vilkas",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 110,
        projectileMassKg: 13.5,
        penetrationMm: 16.9,
        vehicleOperator: "Lithuania",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "IR",
        IRCCM: true,
        maximumSpeedMs: 180,
        missileGuidanceTimeS: 45,
        explosiveType: "LX-14",
        explosiveMassKg: 0.9,
        tntEquivalentKg: 1.3
      }
    ]
  },
  {
    id: "114mm_m8",
    designation: "M8",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_small",
    performances: [
      {
        id: "114mm_m8_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 114,
        projectileMassKg: 17.3,
        penetrationMm: 24.4,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 260,
        explosiveType: "TNT",
        explosiveMassKg: 2
      },
      {
        id: "114mm_m8_us_m4_sherman_calliope",
        vehicleId: "us_m4_sherman_calliope",
        vehicleName: "Calliope",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 114,
        projectileMassKg: 17.3,
        penetrationMm: 24.4,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 260,
        explosiveType: "TNT",
        explosiveMassKg: 2
      }
    ]
  },
  {
    id: "120mm_dm11",
    designation: "DM11",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_dm11_germ_leopard_2a5_pso",
        vehicleId: "germ_leopard_2a5_pso",
        vehicleName: "Leopard 2 PSO",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 19,
        penetrationMm: 37.3,
        muzzleVelocityMs: 980,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3,
        tntEquivalentKg: 3.9
      },
      {
        id: "120mm_dm11_germ_leopard_2a7v",
        vehicleId: "germ_leopard_2a7v",
        vehicleName: "Leopard 2A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 19,
        penetrationMm: 37.3,
        muzzleVelocityMs: 1015,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3,
        tntEquivalentKg: 3.9
      },
      {
        id: "120mm_dm11_germ_leopard_2pl",
        vehicleId: "germ_leopard_2pl",
        vehicleName: "Leopard 2PL",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 19,
        penetrationMm: 37.3,
        muzzleVelocityMs: 980,
        vehicleOperator: "Poland",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3,
        tntEquivalentKg: 3.9
      }
    ]
  },
  {
    id: "120mm_dm12",
    designation: "DM12",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_dm12_germ_leopard_2_pt14",
        vehicleId: "germ_leopard_2_pt14",
        vehicleName: "PT-16/T14 mod.",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12_germ_leopard_2a4",
        vehicleId: "germ_leopard_2a4",
        vehicleName: "Leopard 2A4",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12_germ_leopard_2a4_pzbtl_123",
        vehicleId: "germ_leopard_2a4_pzbtl_123",
        vehicleName: "Leopard 2 (PzBtl 123)",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12_germ_leopard_2k",
        vehicleId: "germ_leopard_2k",
        vehicleName: "Leopard 2K",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12_germ_leopard_a1a1_120",
        vehicleId: "germ_leopard_a1a1_120",
        vehicleName: "Leopard A1A1 (L/44)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12_germ_vt_1_2",
        vehicleId: "germ_vt_1_2",
        vehicleName: "VT1-2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      }
    ]
  },
  {
    id: "120mm_dm12a1",
    designation: "DM12A1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "120mm_dm12a1_germ_leopard_2a4m_can",
        vehicleId: "germ_leopard_2a4m_can",
        vehicleName: "Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "Canada (modern)",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a4m_can_sm",
        vehicleId: "germ_leopard_2a4m_can_sm",
        vehicleName: "◍Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a5",
        vehicleId: "germ_leopard_2a5",
        vehicleName: "Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a5_pso",
        vehicleId: "germ_leopard_2a5_pso",
        vehicleName: "Leopard 2 PSO",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a5_yt_cup_2019",
        vehicleId: "germ_leopard_2a5_yt_cup_2019",
        vehicleName: "␙Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a6",
        vehicleId: "germ_leopard_2a6",
        vehicleName: "Leopard 2A6",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1190,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2a7v",
        vehicleId: "germ_leopard_2a7v",
        vehicleName: "Leopard 2A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1190,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      },
      {
        id: "120mm_dm12a1_germ_leopard_2pl",
        vehicleId: "germ_leopard_2pl",
        vehicleName: "Leopard 2PL",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 13.5,
        penetrationMm: 26.5,
        muzzleVelocityMs: 1140,
        vehicleOperator: "Poland",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      }
    ]
  },
  {
    id: "120mm_dm13",
    designation: "DM13",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "120mm_dm13_germ_leopard_2_pt14",
        vehicleId: "germ_leopard_2_pt14",
        vehicleName: "PT-16/T14 mod.",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm13_germ_leopard_2a4",
        vehicleId: "germ_leopard_2a4",
        vehicleName: "Leopard 2A4",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm13_germ_leopard_2a4_pzbtl_123",
        vehicleId: "germ_leopard_2a4_pzbtl_123",
        vehicleName: "Leopard 2 (PzBtl 123)",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm13_germ_leopard_2k",
        vehicleId: "germ_leopard_2k",
        vehicleName: "Leopard 2K",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm13_germ_leopard_a1a1_120",
        vehicleId: "germ_leopard_a1a1_120",
        vehicleName: "Leopard A1A1 (L/44)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm13_germ_vt_1_2",
        vehicleId: "germ_vt_1_2",
        vehicleName: "VT1-2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 4.4,
        penetrationMm: 393,
        muzzleVelocityMs: 1650,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "120mm_dm23",
    designation: "DM23",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_dm23_germ_leopard_2_pt14",
        vehicleId: "germ_leopard_2_pt14",
        vehicleName: "PT-16/T14 mod.",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 408,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm23_germ_leopard_2a4",
        vehicleId: "germ_leopard_2a4",
        vehicleName: "Leopard 2A4",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 408,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm23_germ_leopard_2a4_pzbtl_123",
        vehicleId: "germ_leopard_2a4_pzbtl_123",
        vehicleName: "Leopard 2 (PzBtl 123)",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 408,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm23_germ_leopard_2k",
        vehicleId: "germ_leopard_2k",
        vehicleName: "Leopard 2K",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 408,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm23_germ_vt_1_2",
        vehicleId: "germ_vt_1_2",
        vehicleName: "VT1-2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 408,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "120mm_dm33",
    designation: "DM33",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_dm33_germ_leopard_2a4m_can",
        vehicleId: "germ_leopard_2a4m_can",
        vehicleName: "Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 481,
        muzzleVelocityMs: 1640,
        vehicleOperator: "Canada (modern)"
      },
      {
        id: "120mm_dm33_germ_leopard_2a4m_can_sm",
        vehicleId: "germ_leopard_2a4m_can_sm",
        vehicleName: "◍Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 481,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm33_germ_leopard_2a5",
        vehicleId: "germ_leopard_2a5",
        vehicleName: "Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 481,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm33_germ_leopard_2a5_yt_cup_2019",
        vehicleId: "germ_leopard_2a5_yt_cup_2019",
        vehicleName: "␙Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 481,
        muzzleVelocityMs: 1640,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm33_germ_leopard_2pl",
        vehicleId: "germ_leopard_2pl",
        vehicleName: "Leopard 2PL",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 481,
        muzzleVelocityMs: 1640,
        vehicleOperator: "Poland"
      }
    ]
  },
  {
    id: "120mm_dm43",
    designation: "DM43",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_dm43_germ_leopard_2a5_pso",
        vehicleId: "germ_leopard_2a5_pso",
        vehicleName: "Leopard 2 PSO",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 535,
        muzzleVelocityMs: 1660,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm43_germ_leopard_2a6",
        vehicleId: "germ_leopard_2a6",
        vehicleName: "Leopard 2A6",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 564,
        muzzleVelocityMs: 1750,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm43_germ_leopard_2a7v",
        vehicleId: "germ_leopard_2a7v",
        vehicleName: "Leopard 2A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 564,
        muzzleVelocityMs: 1750,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "120mm_dm53",
    designation: "DM53",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_dm53_germ_leopard_2a5",
        vehicleId: "germ_leopard_2a5",
        vehicleName: "Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 623,
        muzzleVelocityMs: 1670,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm53_germ_leopard_2a5_pso",
        vehicleId: "germ_leopard_2a5_pso",
        vehicleName: "Leopard 2 PSO",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 623,
        muzzleVelocityMs: 1670,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm53_germ_leopard_2a5_yt_cup_2019",
        vehicleId: "germ_leopard_2a5_yt_cup_2019",
        vehicleName: "␙Leopard 2A5",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 623,
        muzzleVelocityMs: 1670,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm53_germ_leopard_2a6",
        vehicleId: "germ_leopard_2a6",
        vehicleName: "Leopard 2A6",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 653,
        muzzleVelocityMs: 1750,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm53_germ_leopard_2a7v",
        vehicleId: "germ_leopard_2a7v",
        vehicleName: "Leopard 2A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 653,
        muzzleVelocityMs: 1750,
        vehicleOperator: "FRG"
      },
      {
        id: "120mm_dm53_germ_leopard_2pl",
        vehicleId: "germ_leopard_2pl",
        vehicleName: "Leopard 2PL",
        vehicleTechTree: "Germany",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5,
        penetrationMm: 623,
        muzzleVelocityMs: 1670,
        vehicleOperator: "Poland"
      }
    ]
  },
  {
    id: "120mm_im_he",
    designation: "IM HE",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_im_he_germ_leopard_2a4m_can",
        vehicleId: "germ_leopard_2a4m_can",
        vehicleName: "Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 16,
        penetrationMm: 38,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Canada (modern)",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.2
      },
      {
        id: "120mm_im_he_germ_leopard_2a4m_can_sm",
        vehicleId: "germ_leopard_2a4m_can_sm",
        vehicleName: "◍Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 16,
        penetrationMm: 38,
        muzzleVelocityMs: 1000,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.2
      }
    ]
  },
  {
    id: "120mm_ke_w",
    designation: "KE-W",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_ke_w_us_m1a1_aim_abrams",
        vehicleId: "us_m1a1_aim_abrams",
        vehicleName: "M1A1 AIM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 583,
        muzzleVelocityMs: 1585,
        vehicleOperator: "Australia"
      },
      {
        id: "120mm_ke_w_us_m60a3_slep",
        vehicleId: "us_m60a3_slep",
        vehicleName: "M60 AMBT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 583,
        muzzleVelocityMs: 1585,
        vehicleOperator: "Turkey"
      },
      {
        id: "120mm_ke_w_germ_leopard_2a4m_can",
        vehicleId: "germ_leopard_2a4m_can",
        vehicleName: "Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 583,
        muzzleVelocityMs: 1585,
        vehicleOperator: "Canada (modern)"
      },
      {
        id: "120mm_ke_w_germ_leopard_2a4m_can_sm",
        vehicleId: "germ_leopard_2a4m_can_sm",
        vehicleName: "◍Leopard 2A4M",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4,
        penetrationMm: 583,
        muzzleVelocityMs: 1585,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "120mm_m1147",
    designation: "M1147",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_m1147_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 13,
        penetrationMm: 36.8,
        muzzleVelocityMs: 1150,
        fuzeDelayM: 1.5,
        fuzeSensitivityMm: 3,
        explosiveType: "PAX-3",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.7
      }
    ]
  },
  {
    id: "120mm_m322",
    designation: "M322",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_m322_us_merkava_mk_3d",
        vehicleId: "us_merkava_mk_3d",
        vehicleName: "▃Merkava Mk.3D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 5.6,
        penetrationMm: 588,
        muzzleVelocityMs: 1705,
        vehicleOperator: "Israel"
      }
    ]
  },
  {
    id: "120mm_m325",
    designation: "M325",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_m325_us_merkava_mk_3d",
        vehicleId: "us_merkava_mk_3d",
        vehicleName: "▃Merkava Mk.3D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 15.8,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1078,
        vehicleOperator: "Israel",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.4
      }
    ]
  },
  {
    id: "120mm_m339",
    designation: "M339",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_m339_us_merkava_mk_3d",
        vehicleId: "us_merkava_mk_3d",
        vehicleName: "▃Merkava Mk.3D",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.3",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 17,
        penetrationMm: 36.6,
        muzzleVelocityMs: 900,
        vehicleOperator: "Israel",
        fuzeDelayM: 1.5,
        fuzeSensitivityMm: 3,
        explosiveType: "CLX663",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.7
      }
    ]
  },
  {
    id: "120mm_m356_shell",
    designation: "M356 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_m356_shell_us_m103",
        vehicleId: "us_m103",
        vehicleName: "M103",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 22.8,
        penetrationMm: 39.1,
        muzzleVelocityMs: 762,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 3.5,
        tntEquivalentKg: 4.7
      }
    ]
  },
  {
    id: "120mm_m357",
    designation: "M357",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "120mm_m357_us_m103",
        vehicleId: "us_m103",
        vehicleName: "M103",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 120,
        projectileMassKg: 22.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 762,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "120mm_m358_shot",
    designation: "M358 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_m358_shot_us_m103",
        vehicleId: "us_m103",
        vehicleName: "M103",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 23.1,
        penetrationMm: 301,
        muzzleVelocityMs: 1067
      }
    ]
  },
  {
    id: "120mm_m469_shell",
    designation: "M469 shell",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_m469_shell_us_m103",
        vehicleId: "us_m103",
        vehicleName: "M103",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 23.8,
        penetrationMm: 31.7,
        muzzleVelocityMs: 1143,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2,
        tntEquivalentKg: 2.7
      }
    ]
  },
  {
    id: "120mm_m73",
    designation: "M73",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "120mm_m73_us_t34",
        vehicleId: "us_t34",
        vehicleName: "T34",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 120,
        projectileMassKg: 22.5,
        penetrationMm: 28.8,
        muzzleVelocityMs: 944,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2.4
      }
    ]
  },
  {
    id: "120mm_m829",
    designation: "M829",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_m829_us_m1a1_abrams",
        vehicleId: "us_m1a1_abrams",
        vehicleName: "M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m1a1_abrams_yt_cup_2019",
        vehicleId: "us_m1a1_abrams_yt_cup_2019",
        vehicleName: "␙M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m1a1_hc_abrams",
        vehicleId: "us_m1a1_hc_abrams",
        vehicleName: "M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m1a1_hc_usmc",
        vehicleId: "us_m1a1_hc_usmc",
        vehicleName: "M1A1 Click-Bait",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m1a1_hc_usmc_sm",
        vehicleId: "us_m1a1_hc_usmc_sm",
        vehicleName: "◍M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m1a2_abrams",
        vehicleId: "us_m1a2_abrams",
        vehicleName: "M1A2 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      },
      {
        id: "120mm_m829_us_m60_120s",
        vehicleId: "us_m60_120s",
        vehicleName: "120S",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.3,
        penetrationMm: 469,
        muzzleVelocityMs: 1670
      }
    ]
  },
  {
    id: "120mm_m829a1",
    designation: "M829A1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_m829a1_us_m1a1_abrams",
        vehicleId: "us_m1a1_abrams",
        vehicleName: "M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 600,
        muzzleVelocityMs: 1575
      },
      {
        id: "120mm_m829a1_us_m1a1_abrams_yt_cup_2019",
        vehicleId: "us_m1a1_abrams_yt_cup_2019",
        vehicleName: "␙M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 600,
        muzzleVelocityMs: 1575
      },
      {
        id: "120mm_m829a1_us_m60_120s",
        vehicleId: "us_m60_120s",
        vehicleName: "120S",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 600,
        muzzleVelocityMs: 1575
      }
    ]
  },
  {
    id: "120mm_m829a2",
    designation: "M829A2",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_m829a2_us_m1a1_hc_abrams",
        vehicleId: "us_m1a1_hc_abrams",
        vehicleName: "M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a1_hc_usmc",
        vehicleId: "us_m1a1_hc_usmc",
        vehicleName: "M1A1 Click-Bait",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a1_hc_usmc_sm",
        vehicleId: "us_m1a1_hc_usmc_sm",
        vehicleName: "◍M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a2_abrams",
        vehicleId: "us_m1a2_abrams",
        vehicleName: "M1A2 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a2_sep2_abrams",
        vehicleId: "us_m1a2_sep2_abrams",
        vehicleName: "M1A2 SEP V2",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a2_sep2_abrams_trophy",
        vehicleId: "us_m1a2_sep2_abrams_trophy",
        vehicleName: "M1A2 (Trophy-HV)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      },
      {
        id: "120mm_m829a2_us_m1a2_sep_abrams",
        vehicleId: "us_m1a2_sep_abrams",
        vehicleName: "M1A2 SEP",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 4.9,
        penetrationMm: 629,
        muzzleVelocityMs: 1680
      }
    ]
  },
  {
    id: "120mm_m829a3",
    designation: "M829A3",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_m829a3_us_m1a2_sep2_abrams",
        vehicleId: "us_m1a2_sep2_abrams",
        vehicleName: "M1A2 SEP V2",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 6.5,
        penetrationMm: 633,
        muzzleVelocityMs: 1555
      },
      {
        id: "120mm_m829a3_us_m1a2_sep2_abrams_trophy",
        vehicleId: "us_m1a2_sep2_abrams_trophy",
        vehicleName: "M1A2 (Trophy-HV)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 6.5,
        penetrationMm: 633,
        muzzleVelocityMs: 1555
      },
      {
        id: "120mm_m829a3_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 6.5,
        penetrationMm: 633,
        muzzleVelocityMs: 1555
      },
      {
        id: "120mm_m829a3_us_m1a2_sep_abrams",
        vehicleId: "us_m1a2_sep_abrams",
        vehicleName: "M1A2 SEP",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 6.5,
        penetrationMm: 633,
        muzzleVelocityMs: 1555
      }
    ]
  },
  {
    id: "120mm_m830",
    designation: "M830",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_m830_us_m1a1_abrams",
        vehicleId: "us_m1a1_abrams",
        vehicleName: "M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a1_abrams_yt_cup_2019",
        vehicleId: "us_m1a1_abrams_yt_cup_2019",
        vehicleName: "␙M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a1_aim_abrams",
        vehicleId: "us_m1a1_aim_abrams",
        vehicleName: "M1A1 AIM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        vehicleOperator: "Australia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a1_hc_abrams",
        vehicleId: "us_m1a1_hc_abrams",
        vehicleName: "M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a1_hc_usmc",
        vehicleId: "us_m1a1_hc_usmc",
        vehicleName: "M1A1 Click-Bait",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a1_hc_usmc_sm",
        vehicleId: "us_m1a1_hc_usmc_sm",
        vehicleName: "◍M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a2_abrams",
        vehicleId: "us_m1a2_abrams",
        vehicleName: "M1A2 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a2_sep2_abrams",
        vehicleId: "us_m1a2_sep2_abrams",
        vehicleName: "M1A2 SEP V2",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a2_sep2_abrams_trophy",
        vehicleId: "us_m1a2_sep2_abrams_trophy",
        vehicleName: "M1A2 (Trophy-HV)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m1a2_sep_abrams",
        vehicleId: "us_m1a2_sep_abrams",
        vehicleName: "M1A2 SEP",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m60_120s",
        vehicleId: "us_m60_120s",
        vehicleName: "120S",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      },
      {
        id: "120mm_m830_us_m60a3_slep",
        vehicleId: "us_m60a3_slep",
        vehicleName: "M60 AMBT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 13.1,
        penetrationMm: 28.6,
        muzzleVelocityMs: 1140,
        vehicleOperator: "Turkey",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.4
      }
    ]
  },
  {
    id: "120mm_m830a1",
    designation: "M830A1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT MP",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "120mm_m830a1_us_m1a1_abrams",
        vehicleId: "us_m1a1_abrams",
        vehicleName: "M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a1_abrams_yt_cup_2019",
        vehicleId: "us_m1a1_abrams_yt_cup_2019",
        vehicleName: "␙M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a1_aim_abrams",
        vehicleId: "us_m1a1_aim_abrams",
        vehicleName: "M1A1 AIM",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        vehicleOperator: "Australia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a1_hc_abrams",
        vehicleId: "us_m1a1_hc_abrams",
        vehicleName: "M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a1_hc_usmc",
        vehicleId: "us_m1a1_hc_usmc",
        vehicleName: "M1A1 Click-Bait",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a1_hc_usmc_sm",
        vehicleId: "us_m1a1_hc_usmc_sm",
        vehicleName: "◍M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a2_abrams",
        vehicleId: "us_m1a2_abrams",
        vehicleName: "M1A2 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a2_sep2_abrams",
        vehicleId: "us_m1a2_sep2_abrams",
        vehicleName: "M1A2 SEP V2",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a2_sep2_abrams_trophy",
        vehicleId: "us_m1a2_sep2_abrams_trophy",
        vehicleName: "M1A2 (Trophy-HV)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m1a2_sep_abrams",
        vehicleId: "us_m1a2_sep_abrams",
        vehicleName: "M1A2 SEP",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m830a1_us_m60_120s",
        vehicleId: "us_m60_120s",
        vehicleName: "120S",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      }
    ]
  },
  {
    id: "120mm_m908",
    designation: "M908",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-OR",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "120mm_m908_us_m1a1_abrams",
        vehicleId: "us_m1a1_abrams",
        vehicleName: "M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a1_abrams_yt_cup_2019",
        vehicleId: "us_m1a1_abrams_yt_cup_2019",
        vehicleName: "␙M1A1",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a1_hc_abrams",
        vehicleId: "us_m1a1_hc_abrams",
        vehicleName: "M1A1 HC",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a2_abrams",
        vehicleId: "us_m1a2_abrams",
        vehicleName: "M1A2 Abrams",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a2_sep2_abrams",
        vehicleId: "us_m1a2_sep2_abrams",
        vehicleName: "M1A2 SEP V2",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a2_sep2_abrams_trophy",
        vehicleId: "us_m1a2_sep2_abrams_trophy",
        vehicleName: "M1A2 (Trophy-HV)",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a2_sep3_abrams",
        vehicleId: "us_m1a2_sep3_abrams",
        vehicleName: "M1A2 SEPv3",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m1a2_sep_abrams",
        vehicleId: "us_m1a2_sep_abrams",
        vehicleName: "M1A2 SEP",
        vehicleTechTree: "USA",
        vehicleRank: "VIII",
        vehicleBr: {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      },
      {
        id: "120mm_m908_us_m60_120s",
        vehicleId: "us_m60_120s",
        vehicleName: "120S",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 120,
        projectileMassKg: 11.4,
        penetrationMm: 18.2,
        muzzleVelocityMs: 1410,
        fuzeDelayM: 0.6,
        fuzeSensitivityMm: 5,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.966,
        tntEquivalentKg: 1.4
      }
    ]
  },
  {
    id: "120mm_t14e3",
    designation: "T14E3",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "120mm_t14e3_us_t34",
        vehicleId: "us_t34",
        vehicleName: "T34",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 120,
        projectileMassKg: 22.6,
        penetrationMm: 283,
        muzzleVelocityMs: 960
      }
    ]
  },
  {
    id: "120mm_t17e1",
    designation: "T17E1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "120mm_t17e1_us_t34",
        vehicleId: "us_t34",
        vehicleName: "T34",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 120,
        projectileMassKg: 16.3,
        penetrationMm: 306,
        muzzleVelocityMs: 1082
      }
    ]
  },
  {
    id: "125mm_3bk12m",
    designation: "3BK12M",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "125mm_3bk12m_germ_kpz_t72m1",
        vehicleId: "germ_kpz_t72m1",
        vehicleName: "◊T-72M1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 25.6,
        muzzleVelocityMs: 905,
        vehicleOperator: "GDR",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.6,
        tntEquivalentKg: 2.1
      }
    ]
  },
  {
    id: "125mm_3bm15",
    designation: "3BM15",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "125mm_3bm15_germ_kpz_t72m1",
        vehicleId: "germ_kpz_t72m1",
        vehicleName: "◊T-72M1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 3.9,
        penetrationMm: 440,
        muzzleVelocityMs: 1780,
        vehicleOperator: "GDR"
      }
    ]
  },
  {
    id: "125mm_3bm22",
    designation: "3BM22",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "125mm_3bm22_germ_kpz_t72m1",
        vehicleId: "germ_kpz_t72m1",
        vehicleName: "◊T-72M1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 425,
        muzzleVelocityMs: 1760,
        vehicleOperator: "GDR"
      }
    ]
  },
  {
    id: "125mm_3bm9",
    designation: "3BM9",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "125mm_3bm9_germ_kpz_t72m1",
        vehicleId: "germ_kpz_t72m1",
        vehicleName: "◊T-72M1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 3.6,
        penetrationMm: 320,
        muzzleVelocityMs: 1800,
        vehicleOperator: "GDR"
      }
    ]
  },
  {
    id: "125mm_3of26",
    designation: "3OF26",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "125mm_3of26_germ_kpz_t72m1",
        vehicleId: "germ_kpz_t72m1",
        vehicleName: "◊T-72M1",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 42.4,
        muzzleVelocityMs: 850,
        vehicleOperator: "GDR",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.4,
        tntEquivalentKg: 5.2
      }
    ]
  },
  {
    id: "125mm_9m14",
    designation: "9M14",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "125mm_9m14_germ_bmp_1_ddr",
        vehicleId: "germ_bmp_1_ddr",
        vehicleName: "SPz BMP-1",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 10.9,
        penetrationMm: 35.6,
        vehicleOperator: "GDR",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Manual (MCLOS)",
        maximumSpeedMs: 140,
        missileGuidanceTimeS: 30,
        explosiveType: "A-IX-1",
        explosiveMassKg: 2.6,
        tntEquivalentKg: 3.3
      }
    ]
  },
  {
    id: "127mm_i_tow",
    designation: "I-TOW",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "127mm_i_tow_us_m901_itv",
        vehicleId: "us_m901_itv",
        vehicleName: "M901",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 127,
        projectileMassKg: 19,
        penetrationMm: 33.8,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.75,
        maximumSpeedMs: 296,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 2,
        tntEquivalentKg: 2.9
      },
      {
        id: "127mm_i_tow_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 127,
        projectileMassKg: 19,
        penetrationMm: 33.8,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.75,
        maximumSpeedMs: 296,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 2,
        tntEquivalentKg: 2.9
      }
    ]
  },
  {
    id: "127mm_tow",
    designation: "TOW",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "127mm_tow_us_m3_bradley",
        vehicleId: "us_m3_bradley",
        vehicleName: "M3 Bradley",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 127,
        projectileMassKg: 18.8,
        penetrationMm: 36.9,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3,
        maximumSpeedMs: 299,
        missileGuidanceTimeS: 17,
        explosiveType: "Octol",
        explosiveMassKg: 2.4,
        tntEquivalentKg: 3.8
      },
      {
        id: "127mm_tow_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 127,
        projectileMassKg: 18.8,
        penetrationMm: 36.9,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3,
        maximumSpeedMs: 299,
        missileGuidanceTimeS: 17,
        explosiveType: "Octol",
        explosiveMassKg: 2.4,
        tntEquivalentKg: 3.8
      }
    ]
  },
  {
    id: "128mm_pzgr",
    designation: "PzGr",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "128mm_pzgr_germ_panzerjager_tiger",
        vehicleId: "germ_panzerjager_tiger",
        vehicleName: "Jagdtiger",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 26.4,
        penetrationMm: 11.5,
        muzzleVelocityMs: 930,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 26.4,
        penetrationMm: 11.5,
        muzzleVelocityMs: 930,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 26.4,
        penetrationMm: 11.5,
        muzzleVelocityMs: 930,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_germ_pzsflk40_sturer_emil",
        vehicleId: "germ_pzsflk40_sturer_emil",
        vehicleName: "Sturer Emil",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 26.4,
        penetrationMm: 11.5,
        muzzleVelocityMs: 880,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      }
    ]
  },
  {
    id: "128mm_pzgr_43",
    designation: "PzGr 43",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "128mm_pzgr_43_germ_panzerjager_tiger",
        vehicleId: "germ_panzerjager_tiger",
        vehicleName: "Jagdtiger",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 128,
        projectileMassKg: 28.3,
        penetrationMm: 11.5,
        muzzleVelocityMs: 940,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_43_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 28.3,
        penetrationMm: 11.5,
        muzzleVelocityMs: 940,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_43_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 128,
        projectileMassKg: 28.3,
        penetrationMm: 11.5,
        muzzleVelocityMs: 940,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      },
      {
        id: "128mm_pzgr_43_germ_pzsflk40_sturer_emil",
        vehicleId: "germ_pzsflk40_sturer_emil",
        vehicleName: "Sturer Emil",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 128,
        projectileMassKg: 28.3,
        penetrationMm: 11.5,
        muzzleVelocityMs: 880,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 0.55,
        tntEquivalentKg: 0.786
      }
    ]
  },
  {
    id: "128mm_sprgr._l_5",
    designation: "Sprgr. L/5",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "128mm_sprgr._l_5_germ_panzerjager_tiger",
        vehicleId: "germ_panzerjager_tiger",
        vehicleName: "Jagdtiger",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 128,
        projectileMassKg: 28,
        penetrationMm: 36.8,
        muzzleVelocityMs: 750,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 3.7
      },
      {
        id: "128mm_sprgr._l_5_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 128,
        projectileMassKg: 28,
        penetrationMm: 36.8,
        muzzleVelocityMs: 750,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 3.7
      },
      {
        id: "128mm_sprgr._l_5_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 128,
        projectileMassKg: 28,
        penetrationMm: 36.8,
        muzzleVelocityMs: 750,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 3.7
      },
      {
        id: "128mm_sprgr._l_5_germ_pzsflk40_sturer_emil",
        vehicleId: "germ_pzsflk40_sturer_emil",
        vehicleName: "Sturer Emil",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 128,
        projectileMassKg: 28,
        penetrationMm: 36.8,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 3.7
      }
    ]
  },
  {
    id: "135mm_9m113",
    designation: "9M113",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "135mm_9m113_germ_bmp_1_ddr",
        vehicleId: "germ_bmp_1_ddr",
        vehicleName: "SPz BMP-1",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 135,
        projectileMassKg: 14.5,
        penetrationMm: 38.6,
        vehicleOperator: "GDR",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3,
        maximumSpeedMs: 248,
        missileGuidanceTimeS: 16,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 4.5
      }
    ]
  },
  {
    id: "136mm_hot",
    designation: "HOT",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "136mm_hot_germ_raketenjagdpanzer_2_hot",
        vehicleId: "germ_raketenjagdpanzer_2_hot",
        vehicleName: "RakJPz 2 (HOT)",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 136,
        projectileMassKg: 23,
        penetrationMm: 37,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 4,
        maximumSpeedMs: 250,
        missileGuidanceTimeS: 19,
        explosiveType: "Composition B",
        explosiveMassKg: 2.9,
        tntEquivalentKg: 3.8
      }
    ]
  },
  {
    id: "150mm_gr.19",
    designation: "Gr.19",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "150mm_gr.19_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 150,
        projectileMassKg: 43.5,
        penetrationMm: 38.3,
        muzzleVelocityMs: 520,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 4.3
      }
    ]
  },
  {
    id: "150mm_gr.19_be",
    designation: "Gr.19 Be",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "150mm_gr.19_be_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 150,
        projectileMassKg: 43.5,
        penetrationMm: 38.9,
        muzzleVelocityMs: 520,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "PH-Salz and H.10",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.5
      }
    ]
  },
  {
    id: "150mm_gr.19_nb",
    designation: "Gr.19 Nb",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "150mm_gr.19_nb_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: null,
        armor: null,
        caliberMm: 150,
        projectileMassKg: 39,
        penetrationMm: 2.9,
        muzzleVelocityMs: 520,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "150mm_gr.36",
    designation: "Gr.36",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "150mm_gr.36_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 150,
        projectileMassKg: 43.5,
        penetrationMm: 41,
        muzzleVelocityMs: 520,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 5.1
      }
    ]
  },
  {
    id: "150mm_gr.39_hl_a",
    designation: "Gr.39 Hl/A",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "150mm_gr.39_hl_a_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 150,
        projectileMassKg: 25,
        penetrationMm: 43.2,
        muzzleVelocityMs: 465,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "RDX/TNT",
        explosiveMassKg: 4.2,
        tntEquivalentKg: 5.3
      }
    ]
  },
  {
    id: "150mm_i.gr.38",
    designation: "I.Gr.38",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "150mm_i.gr.38_germ_sturmpanzer_ii",
        vehicleId: "germ_sturmpanzer_ii",
        vehicleName: "15cm sIG 33 B Sfl",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 150,
        projectileMassKg: 38,
        penetrationMm: 60.6,
        muzzleVelocityMs: 240,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Amatol",
        explosiveMassKg: 8.6
      },
      {
        id: "150mm_i.gr.38_germ_sturmpanzer_iv_brummbar",
        vehicleId: "germ_sturmpanzer_iv_brummbar",
        vehicleName: "Brummbär",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 150,
        projectileMassKg: 38,
        penetrationMm: 60.6,
        muzzleVelocityMs: 240,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Amatol",
        explosiveMassKg: 8.6
      }
    ]
  },
  {
    id: "150mm_i.gr.39_hi_a",
    designation: "I.Gr.39 HI/A",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "150mm_i.gr.39_hi_a_germ_sturmpanzer_ii",
        vehicleId: "germ_sturmpanzer_ii",
        vehicleName: "15cm sIG 33 B Sfl",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 150,
        projectileMassKg: 24.6,
        penetrationMm: 43.2,
        muzzleVelocityMs: 280,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "RDX/TNT",
        explosiveMassKg: 4.2,
        tntEquivalentKg: 5.3
      },
      {
        id: "150mm_i.gr.39_hi_a_germ_sturmpanzer_iv_brummbar",
        vehicleId: "germ_sturmpanzer_iv_brummbar",
        vehicleName: "Brummbär",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 150,
        projectileMassKg: 24.6,
        penetrationMm: 43.2,
        muzzleVelocityMs: 280,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "RDX/TNT",
        explosiveMassKg: 4.2,
        tntEquivalentKg: 5.3
      }
    ]
  },
  {
    id: "150mm_wgr.41_spr",
    designation: "Wgr.41 Spr",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [
      {
        id: "150mm_wgr.41_spr_germ_panzerwerfer_42",
        vehicleId: "germ_panzerwerfer_42",
        vehicleName: "15 cm Pz.W.42",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 150,
        projectileMassKg: 34.2,
        penetrationMm: 26.5,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 340,
        explosiveType: "Fp.02",
        explosiveMassKg: 2.2
      }
    ]
  },
  {
    id: "152mm_g_530",
    designation: "G-530",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "152mm_g_530_germ_kv_2_754r",
        vehicleId: "germ_kv_2_754r",
        vehicleName: "▀KW II 754 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 40,
        penetrationMm: 41,
        muzzleVelocityMs: 530,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "TNT",
        explosiveMassKg: 5.1
      }
    ]
  },
  {
    id: "152mm_m409a1",
    designation: "M409A1",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "152mm_m409a1_us_m551",
        vehicleId: "us_m551",
        vehicleName: "M551",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 682,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      },
      {
        id: "152mm_m409a1_us_m60a2",
        vehicleId: "us_m60a2",
        vehicleName: "M60A2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 682,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      },
      {
        id: "152mm_m409a1_us_mbt_70",
        vehicleId: "us_mbt_70",
        vehicleName: "MBT-70",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 754,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      },
      {
        id: "152mm_m409a1_us_xm_803",
        vehicleId: "us_xm_803",
        vehicleName: "XM803",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 754,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      },
      {
        id: "152mm_m409a1_germ_kpz_70",
        vehicleId: "germ_kpz_70",
        vehicleName: "KPz-70",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 754,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      }
    ]
  },
  {
    id: "152mm_m657a2",
    designation: "M657A2",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "152mm_m657a2_us_m551",
        vehicleId: "us_m551",
        vehicleName: "M551",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 22,
        penetrationMm: 38.3,
        muzzleVelocityMs: 682,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 4.3
      },
      {
        id: "152mm_m657a2_us_m60a2",
        vehicleId: "us_m60a2",
        vehicleName: "M60A2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 22,
        penetrationMm: 38.3,
        muzzleVelocityMs: 682,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 4.3
      }
    ]
  },
  {
    id: "152mm_mgm_51b_shillelagh",
    designation: "MGM-51B Shillelagh",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "152mm_mgm_51b_shillelagh_us_m551",
        vehicleId: "us_m551",
        vehicleName: "M551",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.8,
        penetrationMm: 47.2,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.2,
        maximumSpeedMs: 286,
        missileGuidanceTimeS: 16,
        explosiveType: "Octol",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.7
      },
      {
        id: "152mm_mgm_51b_shillelagh_us_m60a2",
        vehicleId: "us_m60a2",
        vehicleName: "M60A2",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.8,
        penetrationMm: 47.2,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.2,
        maximumSpeedMs: 286,
        missileGuidanceTimeS: 16,
        explosiveType: "Octol",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.7
      }
    ]
  },
  {
    id: "152mm_mgm_51c",
    designation: "MGM-51C",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "152mm_mgm_51c_us_mbt_70",
        vehicleId: "us_mbt_70",
        vehicleName: "MBT-70",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.8,
        penetrationMm: 47.2,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.2,
        maximumSpeedMs: 286,
        missileGuidanceTimeS: 16,
        explosiveType: "Octol",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.7
      },
      {
        id: "152mm_mgm_51c_us_xm_803",
        vehicleId: "us_xm_803",
        vehicleName: "XM803",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.8,
        penetrationMm: 47.2,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.2,
        maximumSpeedMs: 286,
        missileGuidanceTimeS: 16,
        explosiveType: "Octol",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.7
      },
      {
        id: "152mm_mgm_51c_germ_kpz_70",
        vehicleId: "germ_kpz_70",
        vehicleName: "KPz-70",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.8,
        penetrationMm: 47.2,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.2,
        maximumSpeedMs: 286,
        missileGuidanceTimeS: 16,
        explosiveType: "Octol",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.7
      }
    ]
  },
  {
    id: "152mm_of_530",
    designation: "OF-530",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_small",
    performances: [
      {
        id: "152mm_of_530_germ_kv_2_754r",
        vehicleId: "germ_kv_2_754r",
        vehicleName: "▀KW II 754 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 40,
        penetrationMm: 48.2,
        muzzleVelocityMs: 530,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.8
      }
    ]
  },
  {
    id: "152mm_pb_35",
    designation: "PB-35",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPCBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [
      {
        id: "152mm_pb_35_germ_kv_2_754r",
        vehicleId: "germ_kv_2_754r",
        vehicleName: "▀KW II 754 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 51.1,
        penetrationMm: 39.6,
        muzzleVelocityMs: 436,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.9
      }
    ]
  },
  {
    id: "152mm_tow_2",
    designation: "TOW-2",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "152mm_tow_2_us_m3a3_bradley",
        vehicleId: "us_m3a3_bradley",
        vehicleName: "M3A3 Bradley",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 21.5,
        penetrationMm: 38.5,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.1,
        tntEquivalentKg: 4.4
      },
      {
        id: "152mm_tow_2_germ_jaguar_2",
        vehicleId: "germ_jaguar_2",
        vehicleName: "Jaguar 2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 21.5,
        penetrationMm: 38.5,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.1,
        tntEquivalentKg: 4.4
      },
      {
        id: "152mm_tow_2_germ_wiesel_1_tow",
        vehicleId: "germ_wiesel_1_tow",
        vehicleName: "Wiesel 1A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.0",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 21.5,
        penetrationMm: 38.5,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.1,
        tntEquivalentKg: 4.4
      }
    ]
  },
  {
    id: "152mm_tow_2a",
    designation: "TOW-2A",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "152mm_tow_2a_us_m3a3_bradley",
        vehicleId: "us_m3a3_bradley",
        vehicleName: "M3A3 Bradley",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 38.8,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.5
      },
      {
        id: "152mm_tow_2a_germ_jaguar_2",
        vehicleId: "germ_jaguar_2",
        vehicleName: "Jaguar 2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 38.8,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.5
      },
      {
        id: "152mm_tow_2a_germ_wiesel_1_tow",
        vehicleId: "germ_wiesel_1_tow",
        vehicleName: "Wiesel 1A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.0",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 38.8,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 329,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 3.2,
        tntEquivalentKg: 4.5
      }
    ]
  },
  {
    id: "152mm_tow_2b",
    designation: "TOW-2B",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "152mm_tow_2b_us_m3a3_bradley",
        vehicleId: "us_m3a3_bradley",
        vehicleName: "M3A3 Bradley",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 36,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 309,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 2.4,
        tntEquivalentKg: 3.4
      },
      {
        id: "152mm_tow_2b_germ_jaguar_2",
        vehicleId: "germ_jaguar_2",
        vehicleName: "Jaguar 2",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 36,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 309,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 2.4,
        tntEquivalentKg: 3.4
      },
      {
        id: "152mm_tow_2b_germ_wiesel_1_tow",
        vehicleId: "germ_wiesel_1_tow",
        vehicleName: "Wiesel 1A2",
        vehicleTechTree: "Germany",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.0",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 22.6,
        penetrationMm: 36,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        IRCCM: true,
        launchRangeKm: 3.75,
        maximumSpeedMs: 309,
        missileGuidanceTimeS: 25,
        explosiveType: "LX-14",
        explosiveMassKg: 2.4,
        tntEquivalentKg: 3.4
      }
    ]
  },
  {
    id: "152mm_xm410e1",
    designation: "XM410E1",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "152mm_xm410e1_us_mbt_70",
        vehicleId: "us_mbt_70",
        vehicleName: "MBT-70",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: null,
        armor: null,
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 754,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "152mm_xm410e1_us_xm_803",
        vehicleId: "us_xm_803",
        vehicleName: "XM803",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 754,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "152mm_xm410e1_germ_kpz_70",
        vehicleId: "germ_kpz_70",
        vehicleName: "KPz-70",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: null,
        armor: null,
        caliberMm: 152,
        projectileMassKg: 18.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 754,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "152mm_xm578e1",
    designation: "XM578E1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "152mm_xm578e1_us_mbt_70",
        vehicleId: "us_mbt_70",
        vehicleName: "MBT-70",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 3.8,
        penetrationMm: 285,
        muzzleVelocityMs: 1509
      },
      {
        id: "152mm_xm578e1_us_xm_803",
        vehicleId: "us_xm_803",
        vehicleName: "XM803",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 3.8,
        penetrationMm: 285,
        muzzleVelocityMs: 1509
      },
      {
        id: "152mm_xm578e1_germ_kpz_70",
        vehicleId: "germ_kpz_70",
        vehicleName: "KPz-70",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 3.8,
        penetrationMm: 285,
        muzzleVelocityMs: 1509,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "155mm_155_mm_oe_f3",
    designation: "155 mm OE F3",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_small",
    performances: [
      {
        id: "155mm_155_mm_oe_f3_germ_pzh_2000",
        vehicleId: "germ_pzh_2000",
        vehicleName: "PzH 2000",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 155,
        projectileMassKg: 44.4,
        penetrationMm: 61,
        muzzleVelocityMs: 935,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 9
      }
    ]
  },
  {
    id: "155mm_m107",
    designation: "M107",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "155mm_m107_us_m109a1",
        vehicleId: "us_m109a1",
        vehicleName: "M109A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 684,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_us_m44",
        vehicleId: "us_m44",
        vehicleName: "M44",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 563,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_us_t30",
        vehicleId: "us_t30",
        vehicleName: "T30",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 717,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_germ_m109g",
        vehicleId: "germ_m109g",
        vehicleName: "M109G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 684,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_germ_m44",
        vehicleId: "germ_m44",
        vehicleName: "M44",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 563,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_germ_pzh_2000",
        vehicleId: "germ_pzh_2000",
        vehicleName: "PzH 2000",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 945,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      }
    ]
  },
  {
    id: "155mm_m107_(pf)",
    designation: "M107 (PF)",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [
      {
        id: "155mm_m107_(pf)_us_m109a1",
        vehicleId: "us_m109a1",
        vehicleName: "M109A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 684,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_(pf)_germ_m109g",
        vehicleId: "germ_m109g",
        vehicleName: "M109G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 684,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      },
      {
        id: "155mm_m107_(pf)_germ_pzh_2000",
        vehicleId: "germ_pzh_2000",
        vehicleName: "PzH 2000",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 43.1,
        penetrationMm: 61.1,
        muzzleVelocityMs: 945,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 7,
        tntEquivalentKg: 9.1
      }
    ]
  },
  {
    id: "155mm_m110",
    designation: "M110",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "155mm_m110_us_m109a1",
        vehicleId: "us_m109a1",
        vehicleName: "M109A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 44.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 684,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "155mm_m110_us_m44",
        vehicleId: "us_m44",
        vehicleName: "M44",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 40.8,
        penetrationMm: 2.9,
        muzzleVelocityMs: 563,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "155mm_m110_us_t30",
        vehicleId: "us_t30",
        vehicleName: "T30",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 44.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 717,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "155mm_m110_germ_m109g",
        vehicleId: "germ_m109g",
        vehicleName: "M109G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 44.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 684,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "155mm_m110_germ_m44",
        vehicleId: "germ_m44",
        vehicleName: "M44",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 40.8,
        penetrationMm: 2.9,
        muzzleVelocityMs: 563,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "155mm_m110_germ_pzh_2000",
        vehicleId: "germ_pzh_2000",
        vehicleName: "PzH 2000",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 155,
        projectileMassKg: 40.8,
        penetrationMm: 2.9,
        muzzleVelocityMs: 945,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "155mm_m112b1",
    designation: "M112B1",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "155mm_m112b1_us_t30",
        vehicleId: "us_t30",
        vehicleName: "T30",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 155,
        projectileMassKg: 45.4,
        penetrationMm: 9.9,
        muzzleVelocityMs: 670,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.653,
        tntEquivalentKg: 0.64
      }
    ]
  },
  {
    id: "155mm_t152",
    designation: "T152",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "155mm_t152_us_t58",
        vehicleId: "us_t58",
        vehicleName: "T58",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 155,
        projectileMassKg: 32,
        penetrationMm: 203,
        muzzleVelocityMs: 563,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 11.7,
        tntEquivalentKg: 16.8
      }
    ]
  },
  {
    id: "155mm_t267",
    designation: "T267",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "155mm_t267_us_t58",
        vehicleId: "us_t58",
        vehicleName: "T58",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 18.9,
        penetrationMm: 36.8,
        muzzleVelocityMs: 826,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 3.7
      }
    ]
  },
  {
    id: "155mm_t29e1",
    designation: "T29E1",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "155mm_t29e1_us_t30",
        vehicleId: "us_t30",
        vehicleName: "T30",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 45.4,
        penetrationMm: 9.9,
        muzzleVelocityMs: 670,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.653,
        tntEquivalentKg: 0.64
      },
      {
        id: "155mm_t29e1_us_t58",
        vehicleId: "us_t58",
        vehicleName: "T58",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 155,
        projectileMassKg: 45.4,
        penetrationMm: 9.9,
        muzzleVelocityMs: 670,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.653,
        tntEquivalentKg: 0.64
      }
    ]
  },
  {
    id: "163mm_mgm_166",
    designation: "MGM-166",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "163mm_mgm_166_us_losat_ccv",
        vehicleId: "us_losat_ccv",
        vehicleName: "LOSAT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "10.0",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 163,
        projectileMassKg: 78.9,
        penetrationMm: 20,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 1520,
        missileGuidanceTimeS: 5
      }
    ]
  },
  {
    id: "164mm_lfk_ss.11",
    designation: "LFK SS.11",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "164mm_lfk_ss.11_germ_raketenjagdpanzer_2",
        vehicleId: "germ_raketenjagdpanzer_2",
        vehicleName: "RakJPz 2",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 164,
        projectileMassKg: 30,
        penetrationMm: 25,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Manual (MCLOS)",
        maximumSpeedMs: 220,
        missileGuidanceTimeS: 18.5,
        explosiveType: "Composition B",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 2
      }
    ]
  },
  {
    id: "164mm_lfk_ss.11b",
    designation: "LFK SS.11B",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "164mm_lfk_ss.11b_germ_raketenjagdpanzer_2",
        vehicleId: "germ_raketenjagdpanzer_2",
        vehicleName: "RakJPz 2",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 164,
        projectileMassKg: 30,
        penetrationMm: 25,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        maximumSpeedMs: 220,
        missileGuidanceTimeS: 18.5,
        explosiveType: "Composition B",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 2
      }
    ]
  },
  {
    id: "165mm_m123",
    designation: "M123",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "165mm_m123_us_m728",
        vehicleId: "us_m728",
        vehicleName: "M728 CEV",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 165,
        projectileMassKg: 28.3,
        penetrationMm: 203,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 15.9,
        tntEquivalentKg: 22.9
      }
    ]
  },
  {
    id: "203mm_m106",
    designation: "M106",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [
      {
        id: "203mm_m106_us_m55",
        vehicleId: "us_m55",
        vehicleName: "M55",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 203,
        projectileMassKg: 104,
        penetrationMm: 64.7,
        muzzleVelocityMs: 594,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 17.6,
        tntEquivalentKg: 23.1
      },
      {
        id: "203mm_m106_germ_m55",
        vehicleId: "germ_m55",
        vehicleName: "◄M55",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 203,
        projectileMassKg: 104,
        penetrationMm: 64.7,
        muzzleVelocityMs: 594,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 17.6,
        tntEquivalentKg: 23.1
      }
    ]
  },
  {
    id: "20mm_2.8_2cm_pzgr.41",
    designation: "2.8/2cm Pzgr.41",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "20mm_2.8_2cm_pzgr.41_germ_sdkfz_221_s_pz_b_41",
        vehicleId: "germ_sdkfz_221_s_pz_b_41",
        vehicleName: "Sd.Kfz.221 (s.Pz.B.41)",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 20,
        projectileMassKg: 0.124,
        penetrationMm: 90,
        muzzleVelocityMs: 1400
      }
    ]
  },
  {
    id: "37mm_m51b1_shot",
    designation: "M51B1 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "37mm_m51b1_shot_us_lvt_a_1",
        vehicleId: "us_lvt_a_1",
        vehicleName: "LVT(A)(1)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_lvt_a_1_trb",
        vehicleId: "us_lvt_a_1_trb",
        vehicleName: "○LVT(A)(1)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m22_locust",
        vehicleId: "us_m22_locust",
        vehicleName: "M22",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m2_medium",
        vehicleId: "us_m2_medium",
        vehicleName: "M2",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m2a4",
        vehicleId: "us_m2a4",
        vehicleName: "M2A4",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 86,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m51b1_shot_us_m2a4_1st_armor_div",
        vehicleId: "us_m2a4_1st_armor_div",
        vehicleName: "M2A4 (1st Arm.Div.)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 86,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m51b1_shot_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 86,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m51b1_shot_us_m3_stuart",
        vehicleId: "us_m3_stuart",
        vehicleName: "M3 Stuart",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 86,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m51b1_shot_us_m3a1_stuart",
        vehicleId: "us_m3a1_stuart",
        vehicleName: "M3A1 Stuart",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m3a1_stuart_usmc",
        vehicleId: "us_m3a1_stuart_usmc",
        vehicleName: "M3A1 (USMC)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m5a1_stuart",
        vehicleId: "us_m5a1_stuart",
        vehicleName: "M5A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m5a1_stuart_canadian_5st_arm",
        vehicleId: "us_m5a1_stuart_canadian_5st_arm",
        vehicleName: "▃Stuart VI (5th CAD)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883,
        vehicleOperator: "Canada"
      },
      {
        id: "37mm_m51b1_shot_us_m5a1_stuart_td",
        vehicleId: "us_m5a1_stuart_td",
        vehicleName: "M5A1 TD",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_m8_greyhound",
        vehicleId: "us_m8_greyhound",
        vehicleName: "M8 LAC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 86,
        muzzleVelocityMs: 870,
        vehicleOperator: "Great Britain"
      },
      {
        id: "37mm_m51b1_shot_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m51b1_shot_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 87,
        muzzleVelocityMs: 883
      }
    ]
  },
  {
    id: "37mm_m63_shell",
    designation: "M63 shell",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPHEI",
    damage: "explosion_small",
    armor: "armor_small",
    performances: [
      {
        id: "37mm_m63_shell_us_m22_locust",
        vehicleId: "us_m22_locust",
        vehicleName: "M22",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_m5a1_stuart",
        vehicleId: "us_m5a1_stuart",
        vehicleName: "M5A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_m5a1_stuart_canadian_5st_arm",
        vehicleId: "us_m5a1_stuart_canadian_5st_arm",
        vehicleName: "▃Stuart VI (5th CAD)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        vehicleOperator: "Canada",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_m5a1_stuart_td",
        vehicleId: "us_m5a1_stuart_td",
        vehicleName: "M5A1 TD",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      },
      {
        id: "37mm_m63_shell_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.73,
        penetrationMm: 2.7,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "TNT",
        explosiveMassKg: 0.038
      }
    ]
  },
  {
    id: "37mm_m74_shot",
    designation: "M74 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "37mm_m74_shot_us_m2_medium",
        vehicleId: "us_m2_medium",
        vehicleName: "M2",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74_shot_us_m2a4",
        vehicleId: "us_m2a4",
        vehicleName: "M2A4",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 77,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m74_shot_us_m2a4_1st_armor_div",
        vehicleId: "us_m2a4_1st_armor_div",
        vehicleName: "M2A4 (1st Arm.Div.)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 77,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m74_shot_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 77,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m74_shot_us_m3_stuart",
        vehicleId: "us_m3_stuart",
        vehicleName: "M3 Stuart",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 77,
        muzzleVelocityMs: 870
      },
      {
        id: "37mm_m74_shot_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 77,
        muzzleVelocityMs: 870,
        vehicleOperator: "Great Britain"
      }
    ]
  },
  {
    id: "37mm_m74b1_shot",
    designation: "M74B1 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "37mm_m74b1_shot_us_lvt_a_1",
        vehicleId: "us_lvt_a_1",
        vehicleName: "LVT(A)(1)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_lvt_a_1_trb",
        vehicleId: "us_lvt_a_1_trb",
        vehicleName: "○LVT(A)(1)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m22_locust",
        vehicleId: "us_m22_locust",
        vehicleName: "M22",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m3a1_stuart",
        vehicleId: "us_m3a1_stuart",
        vehicleName: "M3A1 Stuart",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m3a1_stuart_usmc",
        vehicleId: "us_m3a1_stuart_usmc",
        vehicleName: "M3A1 (USMC)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m5a1_stuart",
        vehicleId: "us_m5a1_stuart",
        vehicleName: "M5A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m5a1_stuart_canadian_5st_arm",
        vehicleId: "us_m5a1_stuart_canadian_5st_arm",
        vehicleName: "▃Stuart VI (5th CAD)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883,
        vehicleOperator: "Canada"
      },
      {
        id: "37mm_m74b1_shot_us_m5a1_stuart_td",
        vehicleId: "us_m5a1_stuart_td",
        vehicleName: "M5A1 TD",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_m8_greyhound",
        vehicleId: "us_m8_greyhound",
        vehicleName: "M8 LAC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      },
      {
        id: "37mm_m74b1_shot_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.87,
        penetrationMm: 79,
        muzzleVelocityMs: 883
      }
    ]
  },
  {
    id: "37mm_pzgr",
    designation: "PzGr",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "37mm_pzgr_germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.685,
        penetrationMm: 2.4,
        muzzleVelocityMs: 745,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr_germ_pzkpfw_iii_ausf_b",
        vehicleId: "germ_pzkpfw_iii_ausf_b",
        vehicleName: "Pz.III B",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.685,
        penetrationMm: 2.4,
        muzzleVelocityMs: 745,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr_germ_pzkpfw_iii_ausf_e",
        vehicleId: "germ_pzkpfw_iii_ausf_e",
        vehicleName: "Pz.III E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.685,
        penetrationMm: 2.4,
        muzzleVelocityMs: 745,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr_germ_sdkfz_251_10",
        vehicleId: "germ_sdkfz_251_10",
        vehicleName: "Sd.Kfz.251/10",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.685,
        penetrationMm: 2.4,
        muzzleVelocityMs: 745,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      }
    ]
  },
  {
    id: "37mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "37mm_pzgr_40_germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      },
      {
        id: "37mm_pzgr_40_germ_pzkpfw_iii_ausf_b",
        vehicleId: "germ_pzkpfw_iii_ausf_b",
        vehicleName: "Pz.III B",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      },
      {
        id: "37mm_pzgr_40_germ_pzkpfw_iii_ausf_e",
        vehicleId: "germ_pzkpfw_iii_ausf_e",
        vehicleName: "Pz.III E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      },
      {
        id: "37mm_pzgr_40_germ_sdkfz_251_10",
        vehicleId: "germ_sdkfz_251_10",
        vehicleName: "Sd.Kfz.251/10",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      }
    ]
  },
  {
    id: "37mm_pzgr._34(t)",
    designation: "Pzgr. 34(t)",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "37mm_pzgr._34(t)_germ_pzkpfw_35t",
        vehicleId: "germ_pzkpfw_35t",
        vehicleName: "Pz.35(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.85,
        penetrationMm: 2.4,
        muzzleVelocityMs: 675,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr._34(t)_germ_pzkpfw_38t_ausf_a",
        vehicleId: "germ_pzkpfw_38t_ausf_a",
        vehicleName: "Pz.38(t) A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.85,
        penetrationMm: 2.4,
        muzzleVelocityMs: 741,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr._34(t)_germ_pzkpfw_38t_ausf_f",
        vehicleId: "germ_pzkpfw_38t_ausf_f",
        vehicleName: "Pz.38(t) F",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.85,
        penetrationMm: 2.4,
        muzzleVelocityMs: 741,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr._34(t)_germ_pzkpfw_38t_na",
        vehicleId: "germ_pzkpfw_38t_na",
        vehicleName: "Pz.38(t) n.A.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 37,
        projectileMassKg: 0.85,
        penetrationMm: 2.4,
        muzzleVelocityMs: 741,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      }
    ]
  },
  {
    id: "37mm_pzgr._40",
    designation: "PzGr. 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "37mm_pzgr._40_germ_pzkpfw_35t",
        vehicleId: "germ_pzkpfw_35t",
        vehicleName: "Pz.35(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 81,
        muzzleVelocityMs: 980
      },
      {
        id: "37mm_pzgr._40_germ_pzkpfw_38t_ausf_a",
        vehicleId: "germ_pzkpfw_38t_ausf_a",
        vehicleName: "Pz.38(t) A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      },
      {
        id: "37mm_pzgr._40_germ_pzkpfw_38t_ausf_f",
        vehicleId: "germ_pzkpfw_38t_ausf_f",
        vehicleName: "Pz.38(t) F",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      },
      {
        id: "37mm_pzgr._40_germ_pzkpfw_38t_na",
        vehicleId: "germ_pzkpfw_38t_na",
        vehicleName: "Pz.38(t) n.A.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 37,
        projectileMassKg: 0.368,
        penetrationMm: 86,
        muzzleVelocityMs: 1020
      }
    ]
  },
  {
    id: "37mm_pzgr.(t)_umg.",
    designation: "Pzgr.(t) umg.",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "37mm_pzgr.(t)_umg._germ_pzkpfw_35t",
        vehicleId: "germ_pzkpfw_35t",
        vehicleName: "Pz.35(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.815,
        penetrationMm: 2.4,
        muzzleVelocityMs: 675,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr.(t)_umg._germ_pzkpfw_38t_ausf_a",
        vehicleId: "germ_pzkpfw_38t_ausf_a",
        vehicleName: "Pz.38(t) A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.815,
        penetrationMm: 2.4,
        muzzleVelocityMs: 750,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr.(t)_umg._germ_pzkpfw_38t_ausf_f",
        vehicleId: "germ_pzkpfw_38t_ausf_f",
        vehicleName: "Pz.38(t) F",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.815,
        penetrationMm: 2.4,
        muzzleVelocityMs: 750,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      },
      {
        id: "37mm_pzgr.(t)_umg._germ_pzkpfw_38t_na",
        vehicleId: "germ_pzkpfw_38t_na",
        vehicleName: "Pz.38(t) n.A.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 37,
        projectileMassKg: 0.815,
        penetrationMm: 2.4,
        muzzleVelocityMs: 750,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "PETN",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.022
      }
    ]
  },
  {
    id: "380mm_38_cm_r_spgr.4581",
    designation: "38 cm R Spgr.4581",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [
      {
        id: "380mm_38_cm_r_spgr.4581_germ_sturmmorser_sturmtiger",
        vehicleId: "germ_sturmmorser_sturmtiger",
        vehicleName: "38 cm Sturmmörser",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "5.7",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 380,
        projectileMassKg: 345,
        penetrationMm: 82.4,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 250,
        explosiveType: "Amatol",
        explosiveMassKg: 125
      }
    ]
  },
  {
    id: "47mm_pzgr.36(t)",
    designation: "Pzgr.36(t)",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "47mm_pzgr.36(t)_germ_panzerjager_1",
        vehicleId: "germ_panzerjager_1",
        vehicleName: "Panzerjäger I",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 47,
        projectileMassKg: 1.6,
        penetrationMm: 2.2,
        muzzleVelocityMs: 775,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.015
      }
    ]
  },
  {
    id: "47mm_pzgr.40",
    designation: "Pzgr.40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "47mm_pzgr.40_germ_panzerjager_1",
        vehicleId: "germ_panzerjager_1",
        vehicleName: "Panzerjäger I",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 47,
        projectileMassKg: 0.825,
        penetrationMm: 119,
        muzzleVelocityMs: 1080
      }
    ]
  },
  {
    id: "50mm_pzgr_39",
    designation: "PzGr 39",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "50mm_pzgr_39_germ_amd_35_kwk",
        vehicleId: "germ_amd_35_kwk",
        vehicleName: "P204(f) KwK 38",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 685,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_amd_35_kwk39",
        vehicleId: "germ_amd_35_kwk39",
        vehicleName: "P204(f) KwK 39/1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_ii_ausf_h",
        vehicleId: "germ_pzkpfw_ii_ausf_h",
        vehicleName: "Pz.Sfl.Ic",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_f",
        vehicleId: "germ_pzkpfw_iii_ausf_f",
        vehicleName: "Pz.III F",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 685,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_j",
        vehicleId: "germ_pzkpfw_iii_ausf_j",
        vehicleName: "Pz.III J1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_j_l42",
        vehicleId: "germ_pzkpfw_iii_ausf_j_l42",
        vehicleName: "Pz.III J",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 685,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_j_td",
        vehicleId: "germ_pzkpfw_iii_ausf_j_td",
        vehicleName: "Pz.III J1 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_l",
        vehicleId: "germ_pzkpfw_iii_ausf_l",
        vehicleName: "Pz.III L",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_pzkpfw_iii_ausf_m",
        vehicleId: "germ_pzkpfw_iii_ausf_m",
        vehicleName: "Pz.III M",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_sdkfz_234_2",
        vehicleId: "germ_sdkfz_234_2",
        vehicleName: "Sd.Kfz.234/2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_sdkfz_234_2_mod",
        vehicleId: "germ_sdkfz_234_2_mod",
        vehicleName: "Sd.Kfz.234/2 \"Biene\"",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "50mm_pzgr_39_germ_sdkfz_234_2_td",
        vehicleId: "germ_sdkfz_234_2_td",
        vehicleName: "Sd.Kfz.234/2 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 50,
        projectileMassKg: 2,
        penetrationMm: 2.5,
        muzzleVelocityMs: 835,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Np.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      }
    ]
  },
  {
    id: "50mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "50mm_pzgr_40_germ_amd_35_kwk",
        vehicleId: "germ_amd_35_kwk",
        vehicleName: "P204(f) KwK 38",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 116,
        muzzleVelocityMs: 1050
      },
      {
        id: "50mm_pzgr_40_germ_amd_35_kwk39",
        vehicleId: "germ_amd_35_kwk39",
        vehicleName: "P204(f) KwK 39/1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_ii_ausf_h",
        vehicleId: "germ_pzkpfw_ii_ausf_h",
        vehicleName: "Pz.Sfl.Ic",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_f",
        vehicleId: "germ_pzkpfw_iii_ausf_f",
        vehicleName: "Pz.III F",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 116,
        muzzleVelocityMs: 1050
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_j",
        vehicleId: "germ_pzkpfw_iii_ausf_j",
        vehicleName: "Pz.III J1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_j_l42",
        vehicleId: "germ_pzkpfw_iii_ausf_j_l42",
        vehicleName: "Pz.III J",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 116,
        muzzleVelocityMs: 1050
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_j_td",
        vehicleId: "germ_pzkpfw_iii_ausf_j_td",
        vehicleName: "Pz.III J1 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_l",
        vehicleId: "germ_pzkpfw_iii_ausf_l",
        vehicleName: "Pz.III L",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_pzkpfw_iii_ausf_m",
        vehicleId: "germ_pzkpfw_iii_ausf_m",
        vehicleName: "Pz.III M",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_sdkfz_234_2",
        vehicleId: "germ_sdkfz_234_2",
        vehicleName: "Sd.Kfz.234/2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_sdkfz_234_2_mod",
        vehicleId: "germ_sdkfz_234_2_mod",
        vehicleName: "Sd.Kfz.234/2 \"Biene\"",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      },
      {
        id: "50mm_pzgr_40_germ_sdkfz_234_2_td",
        vehicleId: "germ_sdkfz_234_2_td",
        vehicleName: "Sd.Kfz.234/2 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 50,
        projectileMassKg: 0.9,
        penetrationMm: 137,
        muzzleVelocityMs: 1180
      }
    ]
  },
  {
    id: "50mm_pzgr_40_1",
    designation: "PzGr 40/1",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "50mm_pzgr_40_1_germ_amd_35_kwk39",
        vehicleId: "germ_amd_35_kwk39",
        vehicleName: "P204(f) KwK 39/1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_pzkpfw_ii_ausf_h",
        vehicleId: "germ_pzkpfw_ii_ausf_h",
        vehicleName: "Pz.Sfl.Ic",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_pzkpfw_iii_ausf_j",
        vehicleId: "germ_pzkpfw_iii_ausf_j",
        vehicleName: "Pz.III J1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_pzkpfw_iii_ausf_j_td",
        vehicleId: "germ_pzkpfw_iii_ausf_j_td",
        vehicleName: "Pz.III J1 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_pzkpfw_iii_ausf_l",
        vehicleId: "germ_pzkpfw_iii_ausf_l",
        vehicleName: "Pz.III L",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_pzkpfw_iii_ausf_m",
        vehicleId: "germ_pzkpfw_iii_ausf_m",
        vehicleName: "Pz.III M",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_sdkfz_234_2",
        vehicleId: "germ_sdkfz_234_2",
        vehicleName: "Sd.Kfz.234/2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_sdkfz_234_2_mod",
        vehicleId: "germ_sdkfz_234_2_mod",
        vehicleName: "Sd.Kfz.234/2 \"Biene\"",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      },
      {
        id: "50mm_pzgr_40_1_germ_sdkfz_234_2_td",
        vehicleId: "germ_sdkfz_234_2_td",
        vehicleName: "Sd.Kfz.234/2 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 50,
        projectileMassKg: 1.1,
        penetrationMm: 130,
        muzzleVelocityMs: 1130
      }
    ]
  },
  {
    id: "50mm_sprgr._38",
    designation: "Sprgr. 38",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "50mm_sprgr._38_germ_amd_35_kwk39",
        vehicleId: "germ_amd_35_kwk39",
        vehicleName: "P204(f) KwK 39/1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_pzkpfw_ii_ausf_h",
        vehicleId: "germ_pzkpfw_ii_ausf_h",
        vehicleName: "Pz.Sfl.Ic",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_pzkpfw_iii_ausf_j",
        vehicleId: "germ_pzkpfw_iii_ausf_j",
        vehicleName: "Pz.III J1",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_pzkpfw_iii_ausf_j_td",
        vehicleId: "germ_pzkpfw_iii_ausf_j_td",
        vehicleName: "Pz.III J1 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_pzkpfw_iii_ausf_l",
        vehicleId: "germ_pzkpfw_iii_ausf_l",
        vehicleName: "Pz.III L",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_pzkpfw_iii_ausf_m",
        vehicleId: "germ_pzkpfw_iii_ausf_m",
        vehicleName: "Pz.III M",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_sdkfz_234_2",
        vehicleId: "germ_sdkfz_234_2",
        vehicleName: "Sd.Kfz.234/2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_sdkfz_234_2_mod",
        vehicleId: "germ_sdkfz_234_2_mod",
        vehicleName: "Sd.Kfz.234/2 \"Biene\"",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      },
      {
        id: "50mm_sprgr._38_germ_sdkfz_234_2_td",
        vehicleId: "germ_sdkfz_234_2_td",
        vehicleName: "Sd.Kfz.234/2 TD",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 50,
        projectileMassKg: 1.8,
        penetrationMm: 5.2,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.17,
        tntEquivalentKg: 0.218
      }
    ]
  },
  {
    id: "57mm_57х438_ap_t",
    designation: "57х438 AP-T",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "57mm_57х438_ap_t_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.7,
        penetrationMm: 137,
        muzzleVelocityMs: 950,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "57mm_57х438_he_t",
    designation: "57х438 HE-T",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "57mm_57х438_he_t_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.4,
        penetrationMm: 11.3,
        muzzleVelocityMs: 1020,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Hexal",
        explosiveMassKg: 0.45,
        tntEquivalentKg: 0.765
      }
    ]
  },
  {
    id: "57mm_57х438_he_vt",
    designation: "57х438 HE-VT",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "57mm_57х438_he_vt_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.4,
        penetrationMm: 11.3,
        muzzleVelocityMs: 1020,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Hexal",
        explosiveMassKg: 0.45,
        tntEquivalentKg: 0.765
      }
    ]
  },
  {
    id: "57mm_57х438_sap",
    designation: "57х438 SAP",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPHEI",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "57mm_57х438_sap_germ_begleitpanzer_57",
        vehicleId: "germ_begleitpanzer_57",
        vehicleName: "Begleitpanzer 57",
        vehicleTechTree: "Germany",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 57,
        projectileMassKg: 2.7,
        penetrationMm: 8.4,
        muzzleVelocityMs: 950,
        vehicleOperator: "FRG",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 6,
        explosiveType: "Hexal",
        explosiveMassKg: 0.3,
        tntEquivalentKg: 0.51
      }
    ]
  },
  {
    id: "57mm_br_271",
    designation: "BR-271",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [
      {
        id: "57mm_br_271_us_lvt_4_zis_2",
        vehicleId: "us_lvt_4_zis_2",
        vehicleName: "▃LVT(A)(4) (ZIS-2)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.1,
        penetrationMm: 2.3,
        muzzleVelocityMs: 990,
        vehicleOperator: "China",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.014,
        tntEquivalentKg: 0.022
      }
    ]
  },
  {
    id: "57mm_br_271к",
    designation: "BR-271К",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "57mm_br_271к_us_lvt_4_zis_2",
        vehicleId: "us_lvt_4_zis_2",
        vehicleName: "▃LVT(A)(4) (ZIS-2)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.1,
        penetrationMm: 2.5,
        muzzleVelocityMs: 990,
        vehicleOperator: "China",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.018,
        tntEquivalentKg: 0.028
      }
    ]
  },
  {
    id: "57mm_gr.",
    designation: "Gr.",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "57mm_gr._germ_a7v",
        vehicleId: "germ_a7v",
        vehicleName: "A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 4.6,
        muzzleVelocityMs: 487,
        vehicleOperator: "German Empire",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.16
      },
      {
        id: "57mm_gr._germ_beutepanzer_mk_iv",
        vehicleId: "germ_beutepanzer_mk_iv",
        vehicleName: "Beutepanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 4.6,
        muzzleVelocityMs: 487,
        vehicleOperator: "German Empire",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.16
      }
    ]
  },
  {
    id: "57mm_gr.m.p.",
    designation: "Gr.m.P.",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "57mm_gr.m.p._germ_a7v",
        vehicleId: "germ_a7v",
        vehicleName: "A7V",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.1,
        penetrationMm: 4.2,
        muzzleVelocityMs: 487,
        vehicleOperator: "German Empire",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 7,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.12
      },
      {
        id: "57mm_gr.m.p._germ_beutepanzer_mk_iv",
        vehicleId: "germ_beutepanzer_mk_iv",
        vehicleName: "Beutepanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.1,
        penetrationMm: 4.2,
        muzzleVelocityMs: 487,
        vehicleOperator: "German Empire",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 7,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.12
      }
    ]
  },
  {
    id: "57mm_m70",
    designation: "M70",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "57mm_m70_us_t18_e2",
        vehicleId: "us_t18_e2",
        vehicleName: "T18E2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 118,
        muzzleVelocityMs: 900
      }
    ]
  },
  {
    id: "57mm_m86",
    designation: "M86",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "57mm_m86_us_t18_e2",
        vehicleId: "us_t18_e2",
        vehicleName: "T18E2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.3,
        penetrationMm: 2.8,
        muzzleVelocityMs: 822,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.042,
        tntEquivalentKg: 0.041
      }
    ]
  },
  {
    id: "57mm_o_271",
    designation: "O-271",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "57mm_o_271_us_lvt_4_zis_2",
        vehicleId: "us_lvt_4_zis_2",
        vehicleName: "▃LVT(A)(4) (ZIS-2)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 3.7,
        penetrationMm: 5.2,
        muzzleVelocityMs: 700,
        vehicleOperator: "China",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.22
      }
    ]
  },
  {
    id: "57mm_shell_mk.10",
    designation: "Shell Mk.10",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "57mm_shell_mk.10_us_m4a5_ram_2",
        vehicleId: "us_m4a5_ram_2",
        vehicleName: "M4A5",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.7,
        penetrationMm: 9.3,
        muzzleVelocityMs: 655,
        vehicleOperator: "Canada",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.59
      },
      {
        id: "57mm_shell_mk.10_germ_infanterie_kampfpanzer_churchill",
        vehicleId: "germ_infanterie_kampfpanzer_churchill",
        vehicleName: "▀Pz.Kpfw. Churchill",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.7,
        penetrationMm: 9.3,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.59
      }
    ]
  },
  {
    id: "57mm_shot_mk.5",
    designation: "Shot Mk.5",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "57mm_shot_mk.5_us_m4a5_ram_2",
        vehicleId: "us_m4a5_ram_2",
        vehicleName: "M4A5",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 101,
        muzzleVelocityMs: 815,
        vehicleOperator: "Canada"
      }
    ]
  },
  {
    id: "57mm_shot_mk.5_hv",
    designation: "Shot Mk.5 HV",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "57mm_shot_mk.5_hv_us_m4a5_ram_2",
        vehicleId: "us_m4a5_ram_2",
        vehicleName: "M4A5",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 108,
        muzzleVelocityMs: 853,
        vehicleOperator: "Canada"
      },
      {
        id: "57mm_shot_mk.5_hv_germ_infanterie_kampfpanzer_churchill",
        vehicleId: "germ_infanterie_kampfpanzer_churchill",
        vehicleName: "▀Pz.Kpfw. Churchill",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 115,
        muzzleVelocityMs: 891
      }
    ]
  },
  {
    id: "57mm_shot_mk.8",
    designation: "Shot Mk.8",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "57mm_shot_mk.8_us_m4a5_ram_2",
        vehicleId: "us_m4a5_ram_2",
        vehicleName: "M4A5",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.9,
        penetrationMm: 110,
        muzzleVelocityMs: 853,
        vehicleOperator: "Canada"
      },
      {
        id: "57mm_shot_mk.8_germ_infanterie_kampfpanzer_churchill",
        vehicleId: "germ_infanterie_kampfpanzer_churchill",
        vehicleName: "▀Pz.Kpfw. Churchill",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.9,
        penetrationMm: 116,
        muzzleVelocityMs: 883
      }
    ]
  },
  {
    id: "57mm_shot_mk.9",
    designation: "Shot Mk.9",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "57mm_shot_mk.9_us_m4a5_ram_2",
        vehicleId: "us_m4a5_ram_2",
        vehicleName: "M4A5",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.2,
        penetrationMm: 122,
        muzzleVelocityMs: 801,
        vehicleOperator: "Canada"
      },
      {
        id: "57mm_shot_mk.9_germ_infanterie_kampfpanzer_churchill",
        vehicleId: "germ_infanterie_kampfpanzer_churchill",
        vehicleName: "▀Pz.Kpfw. Churchill",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 3.2,
        penetrationMm: 132,
        muzzleVelocityMs: 847
      }
    ]
  },
  {
    id: "70mm_m247",
    designation: "M247",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "70mm_m247_us_lav_ad",
        vehicleId: "us_lav_ad",
        vehicleName: "LAV-AD",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 70,
        projectileMassKg: 10.2,
        penetrationMm: 16,
        fuzeSensitivityMm: 0.01,
        maximumSpeedMs: 739,
        explosiveType: "Composition B",
        explosiveMassKg: 0.91,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "73mm_og_9",
    designation: "OG-9",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-Grenade",
    damage: "explosion_big",
    armor: "armor_small",
    performances: [
      {
        id: "73mm_og_9_germ_bmp_1_ddr",
        vehicleId: "germ_bmp_1_ddr",
        vehicleName: "SPz BMP-1",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 73,
        projectileMassKg: 3.7,
        penetrationMm: 10.9,
        muzzleVelocityMs: 290,
        vehicleOperator: "GDR",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.735
      }
    ]
  },
  {
    id: "73mm_pg_9",
    designation: "PG-9",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT-Grenade",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "73mm_pg_9_germ_bmp_1_ddr",
        vehicleId: "germ_bmp_1_ddr",
        vehicleName: "SPz BMP-1",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 73,
        projectileMassKg: 2.6,
        penetrationMm: 7.3,
        muzzleVelocityMs: 665,
        vehicleOperator: "GDR",
        fuzeSensitivityMm: 0.01,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.322,
        tntEquivalentKg: 0.403
      }
    ]
  },
  {
    id: "75mm_hl.gr_38b",
    designation: "Hl.Gr 38B",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "75mm_hl.gr_38b_germ_jgdpz_38t",
        vehicleId: "germ_jgdpz_38t",
        vehicleName: "Jagdpanzer 38(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_jgdpz_iv_l48",
        vehicleId: "germ_jgdpz_iv_l48",
        vehicleName: "Jagdpanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_kv_1_kwk_40",
        vehicleId: "germ_kv_1_kwk_40",
        vehicleName: "▀KW I C 756 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_panzerbefelhswagen_iv_ausf_j",
        vehicleId: "germ_panzerbefelhswagen_iv_ausf_j",
        vehicleName: "Pz.Bef.Wg.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleId: "germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleName: "Marder III H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iii_ausf_n",
        vehicleId: "germ_pzkpfw_iii_ausf_n",
        vehicleName: "Pz.III N",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_c",
        vehicleId: "germ_pzkpfw_iv_ausf_c",
        vehicleName: "Pz.IV C",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_e",
        vehicleId: "germ_pzkpfw_iv_ausf_e",
        vehicleName: "Pz.IV E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_f",
        vehicleId: "germ_pzkpfw_iv_ausf_f",
        vehicleName: "Pz.IV F1",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_f2",
        vehicleId: "germ_pzkpfw_iv_ausf_f2",
        vehicleName: "Pz.IV F2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_g",
        vehicleId: "germ_pzkpfw_iv_ausf_g",
        vehicleName: "Pz.IV G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_h",
        vehicleId: "germ_pzkpfw_iv_ausf_h",
        vehicleName: "Pz.IV H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_iv_ausf_j",
        vehicleId: "germ_pzkpfw_iv_ausf_j",
        vehicleName: "Pz.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_sdkfz_234_3",
        vehicleId: "germ_sdkfz_234_3",
        vehicleName: "Sd.Kfz.234/3",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_sdkfz_234_4",
        vehicleId: "germ_sdkfz_234_4",
        vehicleName: "Sd.Kfz.234/4",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_sdkfz_251_22",
        vehicleId: "germ_sdkfz_251_22",
        vehicleName: "Sd.Kfz.251/22",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_sdkfz_251_9",
        vehicleId: "germ_sdkfz_251_9",
        vehicleName: "Sd.Kfz.251/9",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_stug_iii_ausf_a",
        vehicleId: "germ_stug_iii_ausf_a",
        vehicleName: "StuG III A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 4.6,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_stug_iii_ausf_f",
        vehicleId: "germ_stug_iii_ausf_f",
        vehicleName: "StuG III F",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      },
      {
        id: "75mm_hl.gr_38b_germ_stug_iii_ausf_g",
        vehicleId: "germ_stug_iii_ausf_g",
        vehicleName: "StuG III G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.4,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.513,
        tntEquivalentKg: 0.872
      }
    ]
  },
  {
    id: "75mm_hl.gr_38c",
    designation: "Hl.Gr 38C",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_hl.gr_38c_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_pzkpfw_iii_ausf_n",
        vehicleId: "germ_pzkpfw_iii_ausf_n",
        vehicleName: "Pz.III N",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_pzkpfw_iv_ausf_e",
        vehicleId: "germ_pzkpfw_iv_ausf_e",
        vehicleName: "Pz.IV E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_pzkpfw_iv_ausf_f",
        vehicleId: "germ_pzkpfw_iv_ausf_f",
        vehicleName: "Pz.IV F1",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_sdkfz_234_3",
        vehicleId: "germ_sdkfz_234_3",
        vehicleName: "Sd.Kfz.234/3",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_sdkfz_251_9",
        vehicleId: "germ_sdkfz_251_9",
        vehicleName: "Sd.Kfz.251/9",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      },
      {
        id: "75mm_hl.gr_38c_germ_stug_iii_ausf_a",
        vehicleId: "germ_stug_iii_ausf_a",
        vehicleName: "StuG III A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      }
    ]
  },
  {
    id: "75mm_k.gr.rot_nb.",
    designation: "K.Gr.Rot Nb.",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "75mm_k.gr.rot_nb._germ_jgdpz_38t",
        vehicleId: "germ_jgdpz_38t",
        vehicleName: "Jagdpanzer 38(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_jgdpz_iv_l48",
        vehicleId: "germ_jgdpz_iv_l48",
        vehicleName: "Jagdpanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_panzerbefelhswagen_iv_ausf_j",
        vehicleId: "germ_panzerbefelhswagen_iv_ausf_j",
        vehicleName: "Pz.Bef.Wg.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleId: "germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleName: "Marder III H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iii_ausf_n",
        vehicleId: "germ_pzkpfw_iii_ausf_n",
        vehicleName: "Pz.III N",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_c",
        vehicleId: "germ_pzkpfw_iv_ausf_c",
        vehicleName: "Pz.IV C",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_e",
        vehicleId: "germ_pzkpfw_iv_ausf_e",
        vehicleName: "Pz.IV E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.0",
          SB: "2.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_f",
        vehicleId: "germ_pzkpfw_iv_ausf_f",
        vehicleName: "Pz.IV F1",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_f2",
        vehicleId: "germ_pzkpfw_iv_ausf_f2",
        vehicleName: "Pz.IV F2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_g",
        vehicleId: "germ_pzkpfw_iv_ausf_g",
        vehicleName: "Pz.IV G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_h",
        vehicleId: "germ_pzkpfw_iv_ausf_h",
        vehicleName: "Pz.IV H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_iv_ausf_j",
        vehicleId: "germ_pzkpfw_iv_ausf_j",
        vehicleName: "Pz.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_sdkfz_234_3",
        vehicleId: "germ_sdkfz_234_3",
        vehicleName: "Sd.Kfz.234/3",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_sdkfz_234_4",
        vehicleId: "germ_sdkfz_234_4",
        vehicleName: "Sd.Kfz.234/4",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_sdkfz_251_22",
        vehicleId: "germ_sdkfz_251_22",
        vehicleName: "Sd.Kfz.251/22",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_sdkfz_251_9",
        vehicleId: "germ_sdkfz_251_9",
        vehicleName: "Sd.Kfz.251/9",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_stug_iii_ausf_a",
        vehicleId: "germ_stug_iii_ausf_a",
        vehicleName: "StuG III A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 423,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_stug_iii_ausf_f",
        vehicleId: "germ_stug_iii_ausf_f",
        vehicleName: "StuG III F",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_k.gr.rot_nb._germ_stug_iii_ausf_g",
        vehicleId: "germ_stug_iii_ausf_g",
        vehicleName: "StuG III G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 540,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "75mm_k.gr.rot_pz.",
    designation: "K.Gr.rot Pz.",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "75mm_k.gr.rot_pz._germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_pzkpfw_iii_ausf_n",
        vehicleId: "germ_pzkpfw_iii_ausf_n",
        vehicleName: "Pz.III N",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_pzkpfw_iv_ausf_c",
        vehicleId: "germ_pzkpfw_iv_ausf_c",
        vehicleName: "Pz.IV C",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_pzkpfw_iv_ausf_e",
        vehicleId: "germ_pzkpfw_iv_ausf_e",
        vehicleName: "Pz.IV E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_pzkpfw_iv_ausf_f",
        vehicleId: "germ_pzkpfw_iv_ausf_f",
        vehicleName: "Pz.IV F1",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_sdkfz_234_3",
        vehicleId: "germ_sdkfz_234_3",
        vehicleName: "Sd.Kfz.234/3",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_sdkfz_251_9",
        vehicleId: "germ_sdkfz_251_9",
        vehicleName: "Sd.Kfz.251/9",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      },
      {
        id: "75mm_k.gr.rot_pz._germ_stug_iii_ausf_a",
        vehicleId: "germ_stug_iii_ausf_a",
        vehicleName: "StuG III A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 4,
        muzzleVelocityMs: 385,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.02 and Np.10",
        explosiveMassKg: 0.08,
        tntEquivalentKg: 0.102
      }
    ]
  },
  {
    id: "75mm_m48_shell",
    designation: "M48 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "75mm_m48_shell_us_halftrack_m3_75mm_gmc",
        vehicleId: "us_halftrack_m3_75mm_gmc",
        vehicleName: "M3 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "1.7",
          SB: "1.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 594,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_lvt_a1_m24",
        vehicleId: "us_lvt_a1_m24",
        vehicleName: "LVT(A)(1) (M24)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_lvt_a_4",
        vehicleId: "us_lvt_a_4",
        vehicleName: "LVT(A)(4)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 381,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m24_chaffee",
        vehicleId: "us_m24_chaffee",
        vehicleName: "M24",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m24_chaffee_tl",
        vehicleId: "us_m24_chaffee_tl",
        vehicleName: "M24 (TL)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 448,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4_sherman",
        vehicleId: "us_m4_sherman",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4_sherman_calliope",
        vehicleId: "us_m4_sherman_calliope",
        vehicleName: "Calliope",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4_sherman_promo",
        vehicleId: "us_m4_sherman_promo",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4a1_1942_sherman",
        vehicleId: "us_m4a1_1942_sherman",
        vehicleName: "M4A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4a2_1944_germ",
        vehicleId: "us_m4a2_1944_germ",
        vehicleName: "▀M4 748 (a)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4a2_sherman",
        vehicleId: "us_m4a2_sherman",
        vehicleName: "M4A2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4a3e2_sherman_jumbo",
        vehicleId: "us_m4a3e2_sherman_jumbo",
        vehicleName: "M4A3E2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleId: "us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleName: "Cobra King",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m8_scott",
        vehicleId: "us_m8_scott",
        vehicleName: "M8 HMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 381,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_m8a1",
        vehicleId: "us_m8a1",
        vehicleName: "M8A1 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 448,
        vehicleOperator: "Great Britain",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      },
      {
        id: "75mm_m48_shell_us_t14",
        vehicleId: "us_t14",
        vehicleName: "T14",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 10.2,
        muzzleVelocityMs: 463,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.666
      }
    ]
  },
  {
    id: "75mm_m61_shot",
    designation: "M61 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "75mm_m61_shot_us_halftrack_m3_75mm_gmc",
        vehicleId: "us_halftrack_m3_75mm_gmc",
        vehicleName: "M3 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "1.7",
          SB: "1.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 609,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_lvt_a1_m24",
        vehicleId: "us_lvt_a1_m24",
        vehicleName: "LVT(A)(1) (M24)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m24_chaffee",
        vehicleId: "us_m24_chaffee",
        vehicleName: "M24",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m24_chaffee_tl",
        vehicleId: "us_m24_chaffee_tl",
        vehicleName: "M24 (TL)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 588,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4_sherman",
        vehicleId: "us_m4_sherman",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4_sherman_calliope",
        vehicleId: "us_m4_sherman_calliope",
        vehicleName: "Calliope",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4_sherman_promo",
        vehicleId: "us_m4_sherman_promo",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4a1_1942_sherman",
        vehicleId: "us_m4a1_1942_sherman",
        vehicleName: "M4A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4a2_1944_germ",
        vehicleId: "us_m4a2_1944_germ",
        vehicleName: "▀M4 748 (a)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4a2_sherman",
        vehicleId: "us_m4a2_sherman",
        vehicleName: "M4A2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4a3e2_sherman_jumbo",
        vehicleId: "us_m4a3e2_sherman_jumbo",
        vehicleName: "M4A3E2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleId: "us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleName: "Cobra King",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_m8a1",
        vehicleId: "us_m8a1",
        vehicleName: "M8A1 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 588,
        vehicleOperator: "Great Britain",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "75mm_m61_shot_us_t14",
        vehicleId: "us_t14",
        vehicleName: "T14",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 3.2,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      }
    ]
  },
  {
    id: "75mm_m64",
    designation: "M64",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "75mm_m64_us_lvt_a1_m24",
        vehicleId: "us_lvt_a1_m24",
        vehicleName: "LVT(A)(1) (M24)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 603,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m64_us_lvt_a_4",
        vehicleId: "us_lvt_a_4",
        vehicleName: "LVT(A)(4)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 603,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m64_us_m24_chaffee",
        vehicleId: "us_m24_chaffee",
        vehicleName: "M24",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 603,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m64_us_m24_chaffee_tl",
        vehicleId: "us_m24_chaffee_tl",
        vehicleName: "M24 (TL)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 603,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m64_us_m8_scott",
        vehicleId: "us_m8_scott",
        vehicleName: "M8 HMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 6.9,
        penetrationMm: 2.9,
        muzzleVelocityMs: 603,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "75mm_m66",
    designation: "M66",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_m66_us_lvt_a_4",
        vehicleId: "us_lvt_a_4",
        vehicleName: "LVT(A)(4)",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6,
        penetrationMm: 8.9,
        muzzleVelocityMs: 304,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Pentolite",
        explosiveMassKg: 0.453,
        tntEquivalentKg: 0.548
      },
      {
        id: "75mm_m66_us_m8_scott",
        vehicleId: "us_m8_scott",
        vehicleName: "M8 HMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6,
        penetrationMm: 8.9,
        muzzleVelocityMs: 304,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Pentolite",
        explosiveMassKg: 0.453,
        tntEquivalentKg: 0.548
      }
    ]
  },
  {
    id: "75mm_m72_shot",
    designation: "M72 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "75mm_m72_shot_us_halftrack_m3_75mm_gmc",
        vehicleId: "us_halftrack_m3_75mm_gmc",
        vehicleName: "M3 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "1.7",
          SB: "1.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 89,
        muzzleVelocityMs: 609
      },
      {
        id: "75mm_m72_shot_us_lvt_a1_m24",
        vehicleId: "us_lvt_a1_m24",
        vehicleName: "LVT(A)(1) (M24)",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m24_chaffee",
        vehicleId: "us_m24_chaffee",
        vehicleName: "M24",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m24_chaffee_tl",
        vehicleId: "us_m24_chaffee_tl",
        vehicleName: "M24 (TL)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 84,
        muzzleVelocityMs: 588
      },
      {
        id: "75mm_m72_shot_us_m4_sherman",
        vehicleId: "us_m4_sherman",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4_sherman_calliope",
        vehicleId: "us_m4_sherman_calliope",
        vehicleName: "Calliope",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4_sherman_promo",
        vehicleId: "us_m4_sherman_promo",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4a1_1942_sherman",
        vehicleId: "us_m4a1_1942_sherman",
        vehicleName: "M4A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4a2_1944_germ",
        vehicleId: "us_m4a2_1944_germ",
        vehicleName: "▀M4 748 (a)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4a2_sherman",
        vehicleId: "us_m4a2_sherman",
        vehicleName: "M4A2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4a3e2_sherman_jumbo",
        vehicleId: "us_m4a3e2_sherman_jumbo",
        vehicleName: "M4A3E2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleId: "us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleName: "Cobra King",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_m8a1",
        vehicleId: "us_m8a1",
        vehicleName: "M8A1 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      },
      {
        id: "75mm_m72_shot_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 84,
        muzzleVelocityMs: 588,
        vehicleOperator: "Great Britain"
      },
      {
        id: "75mm_m72_shot_us_t14",
        vehicleId: "us_t14",
        vehicleName: "T14",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 91,
        muzzleVelocityMs: 619
      }
    ]
  },
  {
    id: "75mm_m89",
    designation: "M89",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "75mm_m89_us_halftrack_m3_75mm_gmc",
        vehicleId: "us_halftrack_m3_75mm_gmc",
        vehicleName: "M3 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.7",
          RB: "1.7",
          SB: "1.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m3_lee",
        vehicleId: "us_m3_lee",
        vehicleName: "M3 Lee",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4_sherman",
        vehicleId: "us_m4_sherman",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4_sherman_calliope",
        vehicleId: "us_m4_sherman_calliope",
        vehicleName: "Calliope",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4_sherman_promo",
        vehicleId: "us_m4_sherman_promo",
        vehicleName: "M4",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4a1_1942_sherman",
        vehicleId: "us_m4a1_1942_sherman",
        vehicleName: "M4A1",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4a2_1944_germ",
        vehicleId: "us_m4a2_1944_germ",
        vehicleName: "▀M4 748 (a)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4a2_sherman",
        vehicleId: "us_m4a2_sherman",
        vehicleName: "M4A2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4a3e2_sherman_jumbo",
        vehicleId: "us_m4a3e2_sherman_jumbo",
        vehicleName: "M4A3E2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleId: "us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleName: "Cobra King",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_m8a1",
        vehicleId: "us_m8a1",
        vehicleName: "M8A1 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_mk1_grant",
        vehicleId: "us_mk1_grant",
        vehicleName: "▃Grant I",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        vehicleOperator: "Great Britain",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "75mm_m89_us_t14",
        vehicleId: "us_t14",
        vehicleName: "T14",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: null,
        armor: null,
        caliberMm: 75,
        projectileMassKg: 3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 259,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "75mm_pzgr_39",
    designation: "PzGr 39",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "75mm_pzgr_39_germ_jgdpz_38t",
        vehicleId: "germ_jgdpz_38t",
        vehicleName: "Jagdpanzer 38(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_jgdpz_iv_l48",
        vehicleId: "germ_jgdpz_iv_l48",
        vehicleName: "Jagdpanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_kv_1_kwk_40",
        vehicleId: "germ_kv_1_kwk_40",
        vehicleName: "▀KW I C 756 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_panzerbefelhswagen_iv_ausf_j",
        vehicleId: "germ_panzerbefelhswagen_iv_ausf_j",
        vehicleName: "Pz.Bef.Wg.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleId: "germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleName: "Marder III H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_pzkpfw_iv_ausf_f2",
        vehicleId: "germ_pzkpfw_iv_ausf_f2",
        vehicleName: "Pz.IV F2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 740,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_pzkpfw_iv_ausf_g",
        vehicleId: "germ_pzkpfw_iv_ausf_g",
        vehicleName: "Pz.IV G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 740,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_pzkpfw_iv_ausf_h",
        vehicleId: "germ_pzkpfw_iv_ausf_h",
        vehicleName: "Pz.IV H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_pzkpfw_iv_ausf_j",
        vehicleId: "germ_pzkpfw_iv_ausf_j",
        vehicleName: "Pz.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_sdkfz_234_4",
        vehicleId: "germ_sdkfz_234_4",
        vehicleName: "Sd.Kfz.234/4",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_sdkfz_251_22",
        vehicleId: "germ_sdkfz_251_22",
        vehicleName: "Sd.Kfz.251/22",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_stug_iii_ausf_f",
        vehicleId: "germ_stug_iii_ausf_f",
        vehicleName: "StuG III F",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 740,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_germ_stug_iii_ausf_g",
        vehicleId: "germ_stug_iii_ausf_g",
        vehicleName: "StuG III G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      }
    ]
  },
  {
    id: "75mm_pzgr_39_42",
    designation: "PzGr 39/42",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_pzgr_39_42_germ_pz_iv_l70",
        vehicleId: "germ_pz_iv_l70",
        vehicleName: "Panzer IV/70(V)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pz_iv_l70_a",
        vehicleId: "germ_pz_iv_l70_a",
        vehicleName: "Panzer IV/70(A)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pzkpfw_v_ausf_a_panther",
        vehicleId: "germ_pzkpfw_v_ausf_a_panther",
        vehicleName: "Panther A",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pzkpfw_v_ausf_d_panther",
        vehicleId: "germ_pzkpfw_v_ausf_d_panther",
        vehicleName: "Panther D",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pzkpfw_v_ausf_f_panther",
        vehicleId: "germ_pzkpfw_v_ausf_f_panther",
        vehicleName: "Panther F",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pzkpfw_v_ausf_g_panther",
        vehicleId: "germ_pzkpfw_v_ausf_g_panther",
        vehicleName: "Panther G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_pzkpfw_v_ersatz_m10",
        vehicleId: "germ_pzkpfw_v_ersatz_m10",
        vehicleName: "Ersatz M10",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      },
      {
        id: "75mm_pzgr_39_42_germ_vk_3002m",
        vehicleId: "germ_vk_3002m",
        vehicleName: "VK 3002 (M)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 6.8,
        penetrationMm: 2.5,
        muzzleVelocityMs: 935,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.017,
        tntEquivalentKg: 0.029
      }
    ]
  },
  {
    id: "75mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_pzgr_40_germ_jgdpz_38t",
        vehicleId: "germ_jgdpz_38t",
        vehicleName: "Jagdpanzer 38(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_jgdpz_iv_l48",
        vehicleId: "germ_jgdpz_iv_l48",
        vehicleName: "Jagdpanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_kv_1_kwk_40",
        vehicleId: "germ_kv_1_kwk_40",
        vehicleName: "▀KW I C 756 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_panzerbefelhswagen_iv_ausf_j",
        vehicleId: "germ_panzerbefelhswagen_iv_ausf_j",
        vehicleName: "Pz.Bef.Wg.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleId: "germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleName: "Marder III H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_pzkpfw_iv_ausf_f2",
        vehicleId: "germ_pzkpfw_iv_ausf_f2",
        vehicleName: "Pz.IV F2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 163,
        muzzleVelocityMs: 919
      },
      {
        id: "75mm_pzgr_40_germ_pzkpfw_iv_ausf_g",
        vehicleId: "germ_pzkpfw_iv_ausf_g",
        vehicleName: "Pz.IV G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 163,
        muzzleVelocityMs: 919
      },
      {
        id: "75mm_pzgr_40_germ_pzkpfw_iv_ausf_h",
        vehicleId: "germ_pzkpfw_iv_ausf_h",
        vehicleName: "Pz.IV H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_pzkpfw_iv_ausf_j",
        vehicleId: "germ_pzkpfw_iv_ausf_j",
        vehicleName: "Pz.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_sdkfz_234_4",
        vehicleId: "germ_sdkfz_234_4",
        vehicleName: "Sd.Kfz.234/4",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_sdkfz_251_22",
        vehicleId: "germ_sdkfz_251_22",
        vehicleName: "Sd.Kfz.251/22",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      },
      {
        id: "75mm_pzgr_40_germ_stug_iii_ausf_f",
        vehicleId: "germ_stug_iii_ausf_f",
        vehicleName: "StuG III F",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 163,
        muzzleVelocityMs: 919
      },
      {
        id: "75mm_pzgr_40_germ_stug_iii_ausf_g",
        vehicleId: "germ_stug_iii_ausf_g",
        vehicleName: "StuG III G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.1,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      }
    ]
  },
  {
    id: "75mm_pzgr_40_42",
    designation: "PzGr 40/42",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_pzgr_40_42_germ_pz_iv_l70",
        vehicleId: "germ_pz_iv_l70",
        vehicleName: "Panzer IV/70(V)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 228,
        muzzleVelocityMs: 1120
      },
      {
        id: "75mm_pzgr_40_42_germ_pz_iv_l70_a",
        vehicleId: "germ_pz_iv_l70_a",
        vehicleName: "Panzer IV/70(A)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 228,
        muzzleVelocityMs: 1120
      },
      {
        id: "75mm_pzgr_40_42_germ_pzkpfw_v_ausf_a_panther",
        vehicleId: "germ_pzkpfw_v_ausf_a_panther",
        vehicleName: "Panther A",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 228,
        muzzleVelocityMs: 1120
      },
      {
        id: "75mm_pzgr_40_42_germ_pzkpfw_v_ausf_f_panther",
        vehicleId: "germ_pzkpfw_v_ausf_f_panther",
        vehicleName: "Panther F",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 228,
        muzzleVelocityMs: 1120
      },
      {
        id: "75mm_pzgr_40_42_germ_pzkpfw_v_ausf_g_panther",
        vehicleId: "germ_pzkpfw_v_ausf_g_panther",
        vehicleName: "Panther G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 4.8,
        penetrationMm: 228,
        muzzleVelocityMs: 1120
      }
    ]
  },
  {
    id: "75mm_sprgr._34",
    designation: "Sprgr. 34",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "75mm_sprgr._34_germ_jgdpz_38t",
        vehicleId: "germ_jgdpz_38t",
        vehicleName: "Jagdpanzer 38(t)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_jgdpz_iv_l48",
        vehicleId: "germ_jgdpz_iv_l48",
        vehicleName: "Jagdpanzer IV",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_kv_1_kwk_40",
        vehicleId: "germ_kv_1_kwk_40",
        vehicleName: "▀KW I C 756 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_nbfz_vi",
        vehicleId: "germ_nbfz_vi",
        vehicleName: "Nb.Fz.",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_panzerbefelhswagen_iv_ausf_j",
        vehicleId: "germ_panzerbefelhswagen_iv_ausf_j",
        vehicleName: "Pz.Bef.Wg.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleId: "germ_pzkpfw_38t_marder_iii_ausf_h",
        vehicleName: "Marder III H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iii_ausf_n",
        vehicleId: "germ_pzkpfw_iii_ausf_n",
        vehicleName: "Pz.III N",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_c",
        vehicleId: "germ_pzkpfw_iv_ausf_c",
        vehicleName: "Pz.IV C",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_e",
        vehicleId: "germ_pzkpfw_iv_ausf_e",
        vehicleName: "Pz.IV E",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_f",
        vehicleId: "germ_pzkpfw_iv_ausf_f",
        vehicleName: "Pz.IV F1",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_f2",
        vehicleId: "germ_pzkpfw_iv_ausf_f2",
        vehicleName: "Pz.IV F2",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_g",
        vehicleId: "germ_pzkpfw_iv_ausf_g",
        vehicleName: "Pz.IV G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_h",
        vehicleId: "germ_pzkpfw_iv_ausf_h",
        vehicleName: "Pz.IV H",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_iv_ausf_j",
        vehicleId: "germ_pzkpfw_iv_ausf_j",
        vehicleName: "Pz.IV J",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_sdkfz_234_3",
        vehicleId: "germ_sdkfz_234_3",
        vehicleName: "Sd.Kfz.234/3",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_sdkfz_234_4",
        vehicleId: "germ_sdkfz_234_4",
        vehicleName: "Sd.Kfz.234/4",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_sdkfz_251_22",
        vehicleId: "germ_sdkfz_251_22",
        vehicleName: "Sd.Kfz.251/22",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_sdkfz_251_9",
        vehicleId: "germ_sdkfz_251_9",
        vehicleName: "Sd.Kfz.251/9",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_stug_iii_ausf_a",
        vehicleId: "germ_stug_iii_ausf_a",
        vehicleName: "StuG III A",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 420,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_stug_iii_ausf_f",
        vehicleId: "germ_stug_iii_ausf_f",
        vehicleName: "StuG III F",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.3",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      },
      {
        id: "75mm_sprgr._34_germ_stug_iii_ausf_g",
        vehicleId: "germ_stug_iii_ausf_g",
        vehicleName: "StuG III G",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.3",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.4,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.686
      }
    ]
  },
  {
    id: "75mm_sprgr._42",
    designation: "Sprgr. 42",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "75mm_sprgr._42_germ_pz_iv_l70",
        vehicleId: "germ_pz_iv_l70",
        vehicleName: "Panzer IV/70(V)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pz_iv_l70_a",
        vehicleId: "germ_pz_iv_l70_a",
        vehicleName: "Panzer IV/70(A)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pzkpfw_v_ausf_a_panther",
        vehicleId: "germ_pzkpfw_v_ausf_a_panther",
        vehicleName: "Panther A",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pzkpfw_v_ausf_d_panther",
        vehicleId: "germ_pzkpfw_v_ausf_d_panther",
        vehicleName: "Panther D",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pzkpfw_v_ausf_f_panther",
        vehicleId: "germ_pzkpfw_v_ausf_f_panther",
        vehicleName: "Panther F",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pzkpfw_v_ausf_g_panther",
        vehicleId: "germ_pzkpfw_v_ausf_g_panther",
        vehicleName: "Panther G",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_pzkpfw_v_ersatz_m10",
        vehicleId: "germ_pzkpfw_v_ersatz_m10",
        vehicleName: "Ersatz M10",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      },
      {
        id: "75mm_sprgr._42_germ_vk_3002m",
        vehicleId: "germ_vk_3002m",
        vehicleName: "VK 3002 (M)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 5.7,
        penetrationMm: 10.8,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.725
      }
    ]
  },
  {
    id: "75mm_t45_shot",
    designation: "T45 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_t45_shot_us_m24_chaffee_tl",
        vehicleId: "us_m24_chaffee_tl",
        vehicleName: "M24 (TL)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      },
      {
        id: "75mm_t45_shot_us_m4a2_1944_germ",
        vehicleId: "us_m4a2_1944_germ",
        vehicleName: "▀M4 748 (a)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      },
      {
        id: "75mm_t45_shot_us_m4a2_sherman",
        vehicleId: "us_m4a2_sherman",
        vehicleName: "M4A2",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      },
      {
        id: "75mm_t45_shot_us_m4a3e2_sherman_jumbo",
        vehicleId: "us_m4a3e2_sherman_jumbo",
        vehicleName: "M4A3E2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      },
      {
        id: "75mm_t45_shot_us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleId: "us_m4a3e2_sherman_jumbo_cobra_king",
        vehicleName: "Cobra King",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      },
      {
        id: "75mm_t45_shot_us_t14",
        vehicleId: "us_t14",
        vehicleName: "T14",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 3.8,
        penetrationMm: 139,
        muzzleVelocityMs: 868
      }
    ]
  },
  {
    id: "75mm_xm884",
    designation: "XM884",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "75mm_xm884_us_hstv_l",
        vehicleId: "us_hstv_l",
        vehicleName: "HSTV-L",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 14.7,
        muzzleVelocityMs: 910,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.2,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.745,
        tntEquivalentKg: 1.1
      },
      {
        id: "75mm_xm884_us_rdf_lt",
        vehicleId: "us_rdf_lt",
        vehicleName: "RDF/LT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 75,
        projectileMassKg: 6.3,
        penetrationMm: 14.7,
        muzzleVelocityMs: 910,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.2,
        explosiveType: "Comp. A",
        explosiveMassKg: 0.745,
        tntEquivalentKg: 1.1
      }
    ]
  },
  {
    id: "75mm_xm885",
    designation: "XM885",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "75mm_xm885_us_hstv_l",
        vehicleId: "us_hstv_l",
        vehicleName: "HSTV-L",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 2.3,
        penetrationMm: 276,
        muzzleVelocityMs: 1463
      },
      {
        id: "75mm_xm885_us_rdf_lt",
        vehicleId: "us_rdf_lt",
        vehicleName: "RDF/LT",
        vehicleTechTree: "USA",
        vehicleRank: "VII",
        vehicleBr: {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 75,
        projectileMassKg: 2.3,
        penetrationMm: 276,
        muzzleVelocityMs: 1463
      }
    ]
  },
  {
    id: "76mm_76_mm_granata",
    designation: "76 mm Granata",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [
      {
        id: "76mm_76_mm_granata_germ_garford_putilov",
        vehicleId: "germ_garford_putilov",
        vehicleName: "Garford-Beute",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 11.5,
        muzzleVelocityMs: 381,
        vehicleOperator: "German Empire",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.785
      }
    ]
  },
  {
    id: "76mm_76_mm_shrapnel",
    designation: "76 mm Shrapnel",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Shrapnel",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_76_mm_shrapnel_germ_garford_putilov",
        vehicleId: "germ_garford_putilov",
        vehicleName: "Garford-Beute",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.5,
        penetrationMm: 3.7,
        muzzleVelocityMs: 381,
        vehicleOperator: "German Empire",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 4,
        explosiveType: "TNT",
        explosiveMassKg: 0.085
      }
    ]
  },
  {
    id: "76mm_bp_353a",
    designation: "BP-353A",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "76mm_bp_353a_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 3.9,
        penetrationMm: 9.4,
        muzzleVelocityMs: 355,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.6
      }
    ]
  },
  {
    id: "76mm_br_350a_(md_5_fuze)",
    designation: "BR-350A (MD-5 fuze)",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [
      {
        id: "76mm_br_350a_(md_5_fuze)_germ_kv_1b_finland",
        vehicleId: "germ_kv_1b_finland",
        vehicleName: "▀KV-IB",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.3,
        penetrationMm: 4.5,
        muzzleVelocityMs: 612,
        vehicleOperator: "Finland",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.15
      },
      {
        id: "76mm_br_350a_(md_5_fuze)_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.3,
        penetrationMm: 4.5,
        muzzleVelocityMs: 662,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.15
      }
    ]
  },
  {
    id: "76mm_br_350b_(md_8_fuze)",
    designation: "BR-350B (MD-8 fuze)",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_small",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_br_350b_(md_8_fuze)_germ_kv_1b_finland",
        vehicleId: "germ_kv_1b_finland",
        vehicleName: "▀KV-IB",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 6.5,
        penetrationMm: 4,
        muzzleVelocityMs: 612,
        vehicleOperator: "Finland",
        fuzeDelayM: 0.9,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },
      {
        id: "76mm_br_350b_(md_8_fuze)_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.5,
        penetrationMm: 4,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.9,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "76mm_br_350sp",
    designation: "BR-350SP",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_br_350sp_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.5,
        penetrationMm: 99,
        muzzleVelocityMs: 655
      }
    ]
  },
  {
    id: "76mm_br_354p",
    designation: "BR-354P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "76mm_br_354p_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 3,
        penetrationMm: 125,
        muzzleVelocityMs: 950
      }
    ]
  },
  {
    id: "76mm_hl.gr_38c",
    designation: "Hl.Gr 38C",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "76mm_hl.gr_38c_germ_pzkpfw_38t_marder_iii",
        vehicleId: "germ_pzkpfw_38t_marder_iii",
        vehicleName: "Marder III",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 5.1,
        penetrationMm: 12.5,
        muzzleVelocityMs: 450,
        fuzeSensitivityMm: 0.1,
        explosiveType: "H.5",
        explosiveMassKg: 0.515,
        tntEquivalentKg: 0.876
      }
    ]
  },
  {
    id: "76mm_m319_shot",
    designation: "M319 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "76mm_m319_shot_us_m41_walker_bulldog",
        vehicleId: "us_m41_walker_bulldog",
        vehicleName: "M41A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 3.2,
        penetrationMm: 206,
        muzzleVelocityMs: 1234
      },
      {
        id: "76mm_m319_shot_us_t92",
        vehicleId: "us_t92",
        vehicleName: "T92",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 3.2,
        penetrationMm: 206,
        muzzleVelocityMs: 1234
      },
      {
        id: "76mm_m319_shot_germ_le_kpz_m41",
        vehicleId: "germ_le_kpz_m41",
        vehicleName: "leKPz M41",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 3.2,
        penetrationMm: 206,
        muzzleVelocityMs: 1234,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "76mm_m331a2_shot",
    designation: "M331A2 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "76mm_m331a2_shot_us_m41_walker_bulldog",
        vehicleId: "us_m41_walker_bulldog",
        vehicleName: "M41A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 2.8,
        penetrationMm: 300,
        muzzleVelocityMs: 1257
      },
      {
        id: "76mm_m331a2_shot_us_m551_76",
        vehicleId: "us_m551_76",
        vehicleName: "M551(76)",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 2.8,
        penetrationMm: 300,
        muzzleVelocityMs: 1257
      },
      {
        id: "76mm_m331a2_shot_us_t92",
        vehicleId: "us_t92",
        vehicleName: "T92",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 2.8,
        penetrationMm: 300,
        muzzleVelocityMs: 1257
      },
      {
        id: "76mm_m331a2_shot_germ_le_kpz_m41",
        vehicleId: "germ_le_kpz_m41",
        vehicleName: "leKPz M41",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 2.8,
        penetrationMm: 300,
        muzzleVelocityMs: 1257,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "76mm_m339_shot",
    designation: "M339 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_m339_shot_us_m41_walker_bulldog",
        vehicleId: "us_m41_walker_bulldog",
        vehicleName: "M41A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.6,
        penetrationMm: 177,
        muzzleVelocityMs: 975
      },
      {
        id: "76mm_m339_shot_us_m551_76",
        vehicleId: "us_m551_76",
        vehicleName: "M551(76)",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.6,
        penetrationMm: 177,
        muzzleVelocityMs: 975
      }
    ]
  },
  {
    id: "76mm_m352_shell",
    designation: "M352 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "76mm_m352_shell_us_m41_walker_bulldog",
        vehicleId: "us_m41_walker_bulldog",
        vehicleName: "M41A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 12.4,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.662,
        tntEquivalentKg: 0.867
      },
      {
        id: "76mm_m352_shell_us_m551_76",
        vehicleId: "us_m551_76",
        vehicleName: "M551(76)",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 12.4,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.662,
        tntEquivalentKg: 0.867
      },
      {
        id: "76mm_m352_shell_us_t92",
        vehicleId: "us_t92",
        vehicleName: "T92",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 12.4,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.662,
        tntEquivalentKg: 0.867
      },
      {
        id: "76mm_m352_shell_germ_le_kpz_m41",
        vehicleId: "germ_le_kpz_m41",
        vehicleName: "leKPz M41",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 12.4,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.662,
        tntEquivalentKg: 0.867
      }
    ]
  },
  {
    id: "76mm_m361",
    designation: "M361",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "76mm_m361_us_m41_walker_bulldog",
        vehicleId: "us_m41_walker_bulldog",
        vehicleName: "M41A1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.3",
          SB: "6.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 7.1,
        penetrationMm: 2.9,
        muzzleVelocityMs: 713,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m361_us_m551_76",
        vehicleId: "us_m551_76",
        vehicleName: "M551(76)",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 7.1,
        penetrationMm: 2.9,
        muzzleVelocityMs: 713,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "76mm_m42a1_shell",
    designation: "M42A1 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "76mm_m42a1_shell_us_m10",
        vehicleId: "us_m10",
        vehicleName: "M10 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m18_hellcat",
        vehicleId: "us_m18_hellcat",
        vehicleName: "M18 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m18_hellcat_black_cat",
        vehicleId: "us_m18_hellcat_black_cat",
        vehicleName: "M18 \"Black Cat\"",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m18_hellcat_kit_3rank",
        vehicleId: "us_m18_hellcat_kit_3rank",
        vehicleName: "Hellcat (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m4a1_76w_sherman",
        vehicleId: "us_m4a1_76w_sherman",
        vehicleName: "M4A1 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m4a2_76w_sherman",
        vehicleId: "us_m4a2_76w_sherman",
        vehicleName: "M4A2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m4a3e2_76w_sherman_jumbo",
        vehicleId: "us_m4a3e2_76w_sherman_jumbo",
        vehicleName: "M4A3E2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m4a3e8_76w_sherman",
        vehicleId: "us_m4a3e8_76w_sherman",
        vehicleName: "M4A3 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m4a3e8_76w_sherman_kit_3rank",
        vehicleId: "us_m4a3e8_76w_sherman_kit_3rank",
        vehicleName: "Sherman (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_t20",
        vehicleId: "us_t20",
        vehicleName: "T20",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_t55e1",
        vehicleId: "us_t55e1",
        vehicleName: "T55E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      },
      {
        id: "76mm_m42a1_shell_us_t86",
        vehicleId: "us_t86",
        vehicleName: "T86",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 5.8,
        penetrationMm: 7.1,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.39
      }
    ]
  },
  {
    id: "76mm_m496_shell",
    designation: "M496 shell",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_m496_shell_us_t92",
        vehicleId: "us_t92",
        vehicleName: "T92",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 3.2,
        penetrationMm: 10,
        muzzleVelocityMs: 1082,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.499,
        tntEquivalentKg: 0.654
      },
      {
        id: "76mm_m496_shell_germ_le_kpz_m41",
        vehicleId: "germ_le_kpz_m41",
        vehicleName: "leKPz M41",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 3.2,
        penetrationMm: 10,
        muzzleVelocityMs: 1082,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.499,
        tntEquivalentKg: 0.654
      }
    ]
  },
  {
    id: "76mm_m62_shell",
    designation: "M62 shell",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_m62_shell_us_m10",
        vehicleId: "us_m10",
        vehicleName: "M10 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m18_hellcat",
        vehicleId: "us_m18_hellcat",
        vehicleName: "M18 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m18_hellcat_black_cat",
        vehicleId: "us_m18_hellcat_black_cat",
        vehicleName: "M18 \"Black Cat\"",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m18_hellcat_kit_3rank",
        vehicleId: "us_m18_hellcat_kit_3rank",
        vehicleName: "Hellcat (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m4a1_76w_sherman",
        vehicleId: "us_m4a1_76w_sherman",
        vehicleName: "M4A1 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m4a2_76w_sherman",
        vehicleId: "us_m4a2_76w_sherman",
        vehicleName: "M4A2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m4a3e2_76w_sherman_jumbo",
        vehicleId: "us_m4a3e2_76w_sherman_jumbo",
        vehicleName: "M4A3E2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m4a3e8_76w_sherman",
        vehicleId: "us_m4a3e8_76w_sherman",
        vehicleName: "M4A3 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m4a3e8_76w_sherman_kit_3rank",
        vehicleId: "us_m4a3e8_76w_sherman_kit_3rank",
        vehicleName: "Sherman (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_t20",
        vehicleId: "us_t20",
        vehicleName: "T20",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_t55e1",
        vehicleId: "us_t55e1",
        vehicleName: "T55E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      },
      {
        id: "76mm_m62_shell_us_t86",
        vehicleId: "us_t86",
        vehicleName: "T86",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 3.2,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.064
      }
    ]
  },
  {
    id: "76mm_m79_shot",
    designation: "M79 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "76mm_m79_shot_us_m10",
        vehicleId: "us_m10",
        vehicleName: "M10 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.3",
          SB: "3.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m18_hellcat",
        vehicleId: "us_m18_hellcat",
        vehicleName: "M18 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m18_hellcat_black_cat",
        vehicleId: "us_m18_hellcat_black_cat",
        vehicleName: "M18 \"Black Cat\"",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m18_hellcat_kit_3rank",
        vehicleId: "us_m18_hellcat_kit_3rank",
        vehicleName: "Hellcat (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m4a1_76w_sherman",
        vehicleId: "us_m4a1_76w_sherman",
        vehicleName: "M4A1 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m4a2_76w_sherman",
        vehicleId: "us_m4a2_76w_sherman",
        vehicleName: "M4A2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m4a3e2_76w_sherman_jumbo",
        vehicleId: "us_m4a3e2_76w_sherman_jumbo",
        vehicleName: "M4A3E2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m4a3e8_76w_sherman",
        vehicleId: "us_m4a3e8_76w_sherman",
        vehicleName: "M4A3 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m4a3e8_76w_sherman_kit_3rank",
        vehicleId: "us_m4a3e8_76w_sherman_kit_3rank",
        vehicleName: "Sherman (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_m6a1",
        vehicleId: "us_m6a1",
        vehicleName: "M6A1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_t1e1",
        vehicleId: "us_t1e1",
        vehicleName: "T1E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_t20",
        vehicleId: "us_t20",
        vehicleName: "T20",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_t55e1",
        vehicleId: "us_t55e1",
        vehicleName: "T55E1",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      },
      {
        id: "76mm_m79_shot_us_t86",
        vehicleId: "us_t86",
        vehicleName: "T86",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.8,
        penetrationMm: 134,
        muzzleVelocityMs: 792
      }
    ]
  },
  {
    id: "76mm_m88",
    designation: "M88",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "76mm_m88_us_m18_hellcat",
        vehicleId: "us_m18_hellcat",
        vehicleName: "M18 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m18_hellcat_black_cat",
        vehicleId: "us_m18_hellcat_black_cat",
        vehicleName: "M18 \"Black Cat\"",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m18_hellcat_kit_3rank",
        vehicleId: "us_m18_hellcat_kit_3rank",
        vehicleName: "Hellcat (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m4a1_76w_sherman",
        vehicleId: "us_m4a1_76w_sherman",
        vehicleName: "M4A1 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m4a2_76w_sherman",
        vehicleId: "us_m4a2_76w_sherman",
        vehicleName: "M4A2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m4a3e2_76w_sherman_jumbo",
        vehicleId: "us_m4a3e2_76w_sherman_jumbo",
        vehicleName: "M4A3E2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m4a3e8_76w_sherman",
        vehicleId: "us_m4a3e8_76w_sherman",
        vehicleName: "M4A3 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_m4a3e8_76w_sherman_kit_3rank",
        vehicleId: "us_m4a3e8_76w_sherman_kit_3rank",
        vehicleName: "Sherman (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "76mm_m88_us_t86",
        vehicleId: "us_t86",
        vehicleName: "T86",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 3.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 274,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "76mm_m93_shot",
    designation: "M93 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "76mm_m93_shot_us_m18_hellcat",
        vehicleId: "us_m18_hellcat",
        vehicleName: "M18 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_m18_hellcat_black_cat",
        vehicleId: "us_m18_hellcat_black_cat",
        vehicleName: "M18 \"Black Cat\"",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_m18_hellcat_kit_3rank",
        vehicleId: "us_m18_hellcat_kit_3rank",
        vehicleName: "Hellcat (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_m4a3e2_76w_sherman_jumbo",
        vehicleId: "us_m4a3e2_76w_sherman_jumbo",
        vehicleName: "M4A3E2 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_m4a3e8_76w_sherman",
        vehicleId: "us_m4a3e8_76w_sherman",
        vehicleName: "M4A3 (76) W",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_m4a3e8_76w_sherman_kit_3rank",
        vehicleId: "us_m4a3e8_76w_sherman_kit_3rank",
        vehicleName: "Sherman (Hell)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_t20",
        vehicleId: "us_t20",
        vehicleName: "T20",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      },
      {
        id: "76mm_m93_shot_us_t86",
        vehicleId: "us_t86",
        vehicleName: "T86",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 191,
        muzzleVelocityMs: 1036
      }
    ]
  },
  {
    id: "76mm_of_350m",
    designation: "OF-350M",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "76mm_of_350m_germ_kv_1b_finland",
        vehicleId: "germ_kv_1b_finland",
        vehicleName: "▀KV-IB",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.2,
        penetrationMm: 9.7,
        muzzleVelocityMs: 612,
        vehicleOperator: "Finland",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.621
      },
      {
        id: "76mm_of_350m_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.2,
        penetrationMm: 9.7,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.621
      }
    ]
  },
  {
    id: "76mm_pzgr_39_rot",
    designation: "PzGr 39 rot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "76mm_pzgr_39_rot_germ_pzkpfw_38t_marder_iii",
        vehicleId: "germ_pzkpfw_38t_marder_iii",
        vehicleName: "Marder III",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 7.6,
        penetrationMm: 2.6,
        muzzleVelocityMs: 720,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.02,
        tntEquivalentKg: 0.034
      }
    ]
  },
  {
    id: "76mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "76mm_pzgr_40_germ_pzkpfw_38t_marder_iii",
        vehicleId: "germ_pzkpfw_38t_marder_iii",
        vehicleName: "Marder III",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 4.2,
        penetrationMm: 182,
        muzzleVelocityMs: 990
      }
    ]
  },
  {
    id: "76mm_sh_354t",
    designation: "Sh-354T",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Shrapnel",
    damage: "explosion_small",
    armor: "armor_vsmall",
    performances: [
      {
        id: "76mm_sh_354t_germ_kv_1b_finland",
        vehicleId: "germ_kv_1b_finland",
        vehicleName: "▀KV-IB",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 3.7,
        muzzleVelocityMs: 612,
        vehicleOperator: "Finland",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.085
      },
      {
        id: "76mm_sh_354t_germ_t_34_747",
        vehicleId: "germ_t_34_747",
        vehicleName: "▀T 34 747 (r)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 3.7,
        muzzleVelocityMs: 618,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.085
      }
    ]
  },
  {
    id: "76mm_sprgr._39",
    designation: "Sprgr. 39",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "76mm_sprgr._39_germ_pzkpfw_38t_marder_iii",
        vehicleId: "germ_pzkpfw_38t_marder_iii",
        vehicleName: "Marder III",
        vehicleTechTree: "Germany",
        vehicleRank: "I",
        vehicleBr: {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.3,
        penetrationMm: 9.3,
        muzzleVelocityMs: 550,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 0.585
      }
    ]
  },
  {
    id: "81mm_pl_3",
    designation: "Pl-3",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "81mm_pl_3_germ_spz_oerlikon_raketenautomat",
        vehicleId: "germ_spz_oerlikon_raketenautomat",
        vehicleName: "Raketenautomat",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 81,
        projectileMassKg: 13.2,
        penetrationMm: 13.9,
        vehicleOperator: "FRG",
        fuzeSensitivityMm: 0.01,
        maximumSpeedMs: 820,
        explosiveType: "TNT",
        explosiveMassKg: 1
      }
    ]
  },
  {
    id: "81mm_ssk_032",
    designation: "SSK 032",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_middle",
    performances: [
      {
        id: "81mm_ssk_032_germ_spz_oerlikon_raketenautomat",
        vehicleId: "germ_spz_oerlikon_raketenautomat",
        vehicleName: "Raketenautomat",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 81,
        projectileMassKg: 19.7,
        penetrationMm: 32.8,
        vehicleOperator: "FRG",
        fuzeSensitivityMm: 0.01,
        maximumSpeedMs: 820,
        explosiveType: "TNT",
        explosiveMassKg: 2.8
      }
    ]
  },
  {
    id: "88mm_12,8_8,8_pzgr.ts",
    designation: "12,8/8,8 Pzgr.TS",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_12,8_8,8_pzgr.ts_germ_pzkpfw_e_100",
        vehicleId: "germ_pzkpfw_e_100",
        vehicleName: "E-100",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 9.9,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1230,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_12,8_8,8_pzgr.ts_germ_pzkpfw_maus",
        vehicleId: "germ_pzkpfw_maus",
        vehicleName: "Maus",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "8.0",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 9.9,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1230,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      }
    ]
  },
  {
    id: "88mm_hl.gr_39",
    designation: "Hl.Gr 39",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_small",
    performances: [
      {
        id: "88mm_hl.gr_39_germ_panther_ii",
        vehicleId: "germ_panther_ii",
        vehicleName: "Panther II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerbefelhswagen_jagdpanther",
        vehicleId: "germ_panzerbefelhswagen_jagdpanther",
        vehicleName: "Bfw. Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerbefelhswagen_vi_p",
        vehicleId: "germ_panzerbefelhswagen_vi_p",
        vehicleName: "Pz.Bef.Wg.VI P",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerjager_nashorn",
        vehicleId: "germ_panzerjager_nashorn",
        vehicleName: "Nashorn",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerjager_panther",
        vehicleId: "germ_panzerjager_panther",
        vehicleName: "Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerjager_tiger_p_elefant",
        vehicleId: "germ_panzerjager_tiger_p_elefant",
        vehicleName: "Elefant",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_panzerjager_tiger_p_ferdinand",
        vehicleId: "germ_panzerjager_tiger_p_ferdinand",
        vehicleName: "Ferdinand",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleName: "Tiger II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleName: "Tiger II (Sla.16)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleName: "Tiger II (Nr.1-50)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_e_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_e_tiger",
        vehicleName: "Tiger E",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleName: "Tiger H1",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleName: "␠Tiger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleName: "Tiger Ost",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleName: "Tiger West",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_pzkpfw_vi_tiger_p",
        vehicleId: "germ_pzkpfw_vi_tiger_p",
        vehicleName: "VK 45.01 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      },
      {
        id: "88mm_hl.gr_39_germ_waffentrager_krupp_steyr",
        vehicleId: "germ_waffentrager_krupp_steyr",
        vehicleName: "Waffenträger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_small",
        caliberMm: 88,
        projectileMassKg: 7.6,
        penetrationMm: 15,
        muzzleVelocityMs: 600,
        fuzeSensitivityMm: 0.3,
        explosiveType: "H.5",
        explosiveMassKg: 0.646,
        tntEquivalentKg: 1.1
      }
    ]
  },
  {
    id: "88mm_pzgr_39",
    designation: "PzGr 39",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_pzgr_39_germ_panzerbefelhswagen_vi_p",
        vehicleId: "germ_panzerbefelhswagen_vi_p",
        vehicleName: "Pz.Bef.Wg.VI P",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_ausf_e_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_e_tiger",
        vehicleName: "Tiger E",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleName: "Tiger H1",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleName: "␠Tiger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleName: "Tiger Ost",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleName: "Tiger West",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_germ_pzkpfw_vi_tiger_p",
        vehicleId: "germ_pzkpfw_vi_tiger_p",
        vehicleName: "VK 45.01 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 773,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      }
    ]
  },
  {
    id: "88mm_pzgr_39_43",
    designation: "PzGr 39/43",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "88mm_pzgr_39_43_germ_panther_ii",
        vehicleId: "germ_panther_ii",
        vehicleName: "Panther II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_panzerbefelhswagen_jagdpanther",
        vehicleId: "germ_panzerbefelhswagen_jagdpanther",
        vehicleName: "Bfw. Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_panzerjager_nashorn",
        vehicleId: "germ_panzerjager_nashorn",
        vehicleName: "Nashorn",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_panzerjager_panther",
        vehicleId: "germ_panzerjager_panther",
        vehicleName: "Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_panzerjager_tiger_p_elefant",
        vehicleId: "germ_panzerjager_tiger_p_elefant",
        vehicleName: "Elefant",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_panzerjager_tiger_p_ferdinand",
        vehicleId: "germ_panzerjager_tiger_p_ferdinand",
        vehicleName: "Ferdinand",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleName: "Tiger II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleName: "Tiger II (Sla.16)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleName: "Tiger II (Nr.1-50)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_vsw_flak_41",
        vehicleId: "germ_vsw_flak_41",
        vehicleName: "VFW",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 980,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      },
      {
        id: "88mm_pzgr_39_43_germ_waffentrager_krupp_steyr",
        vehicleId: "germ_waffentrager_krupp_steyr",
        vehicleName: "Waffenträger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 10.2,
        penetrationMm: 4.1,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "H.10",
        explosiveMassKg: 0.064,
        tntEquivalentKg: 0.109
      }
    ]
  },
  {
    id: "88mm_pzgr_40",
    designation: "PzGr 40",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_pzgr_40_germ_panzerbefelhswagen_vi_p",
        vehicleId: "germ_panzerbefelhswagen_vi_p",
        vehicleName: "Pz.Bef.Wg.VI P",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 211,
        muzzleVelocityMs: 930
      },
      {
        id: "88mm_pzgr_40_germ_pzkpfw_vi_ausf_e_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_e_tiger",
        vehicleName: "Tiger E",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 211,
        muzzleVelocityMs: 930
      }
    ]
  },
  {
    id: "88mm_pzgr_40_43",
    designation: "PzGr 40/43",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_pzgr_40_43_germ_panther_ii",
        vehicleId: "germ_panther_ii",
        vehicleName: "Panther II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_panzerbefelhswagen_jagdpanther",
        vehicleId: "germ_panzerbefelhswagen_jagdpanther",
        vehicleName: "Bfw. Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_panzerjager_nashorn",
        vehicleId: "germ_panzerjager_nashorn",
        vehicleName: "Nashorn",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_panzerjager_panther",
        vehicleId: "germ_panzerjager_panther",
        vehicleName: "Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_panzerjager_tiger_p_elefant",
        vehicleId: "germ_panzerjager_tiger_p_elefant",
        vehicleName: "Elefant",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_panzerjager_tiger_p_ferdinand",
        vehicleId: "germ_panzerjager_tiger_p_ferdinand",
        vehicleName: "Ferdinand",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleName: "Tiger II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleName: "Tiger II (Sla.16)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleName: "Tiger II (Nr.1-50)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      },
      {
        id: "88mm_pzgr_40_43_germ_vsw_flak_41",
        vehicleId: "germ_vsw_flak_41",
        vehicleName: "VFW",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 277,
        muzzleVelocityMs: 1125
      },
      {
        id: "88mm_pzgr_40_43_germ_waffentrager_krupp_steyr",
        vehicleId: "germ_waffentrager_krupp_steyr",
        vehicleName: "Waffenträger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 7.3,
        penetrationMm: 279,
        muzzleVelocityMs: 1130
      }
    ]
  },
  {
    id: "88mm_pzgr.",
    designation: "Pzgr.",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_pzgr._germ_panzerbefelhswagen_vi_p",
        vehicleId: "germ_panzerbefelhswagen_vi_p",
        vehicleName: "Pz.Bef.Wg.VI P",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_ausf_e_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_e_tiger",
        vehicleName: "Tiger E",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleName: "Tiger H1",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleName: "␠Tiger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleName: "Tiger Ost",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleName: "Tiger West",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_pzkpfw_vi_tiger_p",
        vehicleId: "germ_pzkpfw_vi_tiger_p",
        vehicleName: "VK 45.01 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      },
      {
        id: "88mm_pzgr._germ_sdkfz_9_flak37",
        vehicleId: "germ_sdkfz_9_flak37",
        vehicleName: "8,8 cm Flak 37 Sfl.",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 9.5,
        penetrationMm: 5.2,
        muzzleVelocityMs: 810,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Fp.10 and Np.10",
        explosiveMassKg: 0.168,
        tntEquivalentKg: 0.215
      }
    ]
  },
  {
    id: "88mm_pzgr.39_ts",
    designation: "Pzgr.39 TS",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [
      {
        id: "88mm_pzgr.39_ts_germ_hummel",
        vehicleId: "germ_hummel",
        vehicleName: "Hummel",
        vehicleTechTree: "Germany",
        vehicleRank: "II",
        vehicleBr: {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 88,
        projectileMassKg: 9.9,
        penetrationMm: 4,
        muzzleVelocityMs: 880,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "H.10",
        explosiveMassKg: 0.059,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "88mm_sprgr._flak_41",
    designation: "Sprgr. Flak 41",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "88mm_sprgr._flak_41_germ_vsw_flak_41",
        vehicleId: "germ_vsw_flak_41",
        vehicleName: "VFW",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.60/40",
        explosiveMassKg: 1
      }
    ]
  },
  {
    id: "88mm_sprgr._l_4.5",
    designation: "Sprgr. L/4.5",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "88mm_sprgr._l_4.5_germ_panzerbefelhswagen_vi_p",
        vehicleId: "germ_panzerbefelhswagen_vi_p",
        vehicleName: "Pz.Bef.Wg.VI P",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_ausf_e_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_e_tiger",
        vehicleName: "Tiger E",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger",
        vehicleName: "Tiger H1",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_animal_version",
        vehicleName: "␠Tiger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_east",
        vehicleName: "Tiger Ost",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleId: "germ_pzkpfw_vi_ausf_h1_tiger_west",
        vehicleName: "Tiger West",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_pzkpfw_vi_tiger_p",
        vehicleId: "germ_pzkpfw_vi_tiger_p",
        vehicleName: "VK 45.01 (P)",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 12.8,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.9
      },
      {
        id: "88mm_sprgr._l_4.5_germ_sdkfz_9_flak37",
        vehicleId: "germ_sdkfz_9_flak37",
        vehicleName: "8,8 cm Flak 37 Sfl.",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "4.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9,
        penetrationMm: 10.5,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 0.698
      }
    ]
  },
  {
    id: "88mm_sprgr.43",
    designation: "Sprgr.43",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "88mm_sprgr.43_germ_panther_ii",
        vehicleId: "germ_panther_ii",
        vehicleName: "Panther II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_panzerbefelhswagen_jagdpanther",
        vehicleId: "germ_panzerbefelhswagen_jagdpanther",
        vehicleName: "Bfw. Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_panzerjager_nashorn",
        vehicleId: "germ_panzerjager_nashorn",
        vehicleName: "Nashorn",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_panzerjager_panther",
        vehicleId: "germ_panzerjager_panther",
        vehicleName: "Jagdpanther G1",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_panzerjager_tiger_p_elefant",
        vehicleId: "germ_panzerjager_tiger_p_elefant",
        vehicleName: "Elefant",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_panzerjager_tiger_p_ferdinand",
        vehicleId: "germ_panzerjager_tiger_p_ferdinand",
        vehicleName: "Ferdinand",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih",
        vehicleName: "Tiger II",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iih_sla",
        vehicleName: "Tiger II (Sla.16)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleId: "germ_pzkpfw_vi_ausf_b_tiger_iip",
        vehicleName: "Tiger II (Nr.1-50)",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      },
      {
        id: "88mm_sprgr.43_germ_waffentrager_krupp_steyr",
        vehicleId: "germ_waffentrager_krupp_steyr",
        vehicleName: "Waffenträger",
        vehicleTechTree: "Germany",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 88,
        projectileMassKg: 9.4,
        penetrationMm: 13.9,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Fp.02",
        explosiveMassKg: 1
      }
    ]
  },
  {
    id: "90mm_ap_shot",
    designation: "AP Shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_ap_shot_us_m26e1_pershing",
        vehicleId: "us_m26e1_pershing",
        vehicleName: "M26E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 211,
        muzzleVelocityMs: 975
      }
    ]
  },
  {
    id: "90mm_dm502",
    designation: "DM502",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_dm502_germ_kanonenjagdpanzer",
        vehicleId: "germ_kanonenjagdpanzer",
        vehicleName: "JPz 4-5",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 102,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.1,
        tntEquivalentKg: 3.1
      },
      {
        id: "90mm_dm502_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 102,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.1,
        tntEquivalentKg: 3.1
      },
      {
        id: "90mm_dm502_germ_ru251",
        vehicleId: "germ_ru251",
        vehicleName: "Ru 251",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 102,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.1,
        tntEquivalentKg: 3.1
      }
    ]
  },
  {
    id: "90mm_he_shell",
    designation: "HE Shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "90mm_he_shell_us_m26e1_pershing",
        vehicleId: "us_m26e1_pershing",
        vehicleName: "M26E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 13.1,
        muzzleVelocityMs: 975,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.925
      }
    ]
  },
  {
    id: "90mm_hvap_shot",
    designation: "HVAP Shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_hvap_shot_us_m26e1_pershing",
        vehicleId: "us_m26e1_pershing",
        vehicleName: "M26E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 336,
        muzzleVelocityMs: 1143
      }
    ]
  },
  {
    id: "90mm_m304_shot",
    designation: "M304 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_m304_shot_us_m18_super_hellcat",
        vehicleId: "us_m18_super_hellcat",
        vehicleName: "Super Hellcat",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m26_pershing",
        vehicleId: "us_m26_pershing",
        vehicleName: "M26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m36",
        vehicleId: "us_m36",
        vehicleName: "M36 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_t25",
        vehicleId: "us_t25",
        vehicleName: "T25",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_us_t26e5",
        vehicleId: "us_t26e5",
        vehicleName: "T26E5",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021
      },
      {
        id: "90mm_m304_shot_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 287,
        muzzleVelocityMs: 1021,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "90mm_m313",
    designation: "M313",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "90mm_m313_us_m26_pershing",
        vehicleId: "us_m26_pershing",
        vehicleName: "M26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m36",
        vehicleId: "us_m36",
        vehicleName: "M36 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m4_t26",
        vehicleId: "us_m4_t26",
        vehicleName: "M4/T26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_us_t26e5",
        vehicleId: "us_t26e5",
        vehicleName: "T26E5",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },
      {
        id: "90mm_m313_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 10.7,
        penetrationMm: 2.9,
        muzzleVelocityMs: 821,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "90mm_m318_shot",
    designation: "M318 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_m318_shot_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 11,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_m318_shot_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 11,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      }
    ]
  },
  {
    id: "90mm_m318a1_shot",
    designation: "M318A1 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_m318a1_shot_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 11,
        penetrationMm: 193,
        muzzleVelocityMs: 912
      },
      {
        id: "90mm_m318a1_shot_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 11,
        penetrationMm: 193,
        muzzleVelocityMs: 912,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "90mm_m332_shot",
    designation: "M332 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [
      {
        id: "90mm_m332_shot_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 291,
        muzzleVelocityMs: 1165
      },
      {
        id: "90mm_m332_shot_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 291,
        muzzleVelocityMs: 1165
      },
      {
        id: "90mm_m332_shot_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 321,
        muzzleVelocityMs: 1249
      },
      {
        id: "90mm_m332_shot_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 321,
        muzzleVelocityMs: 1249
      },
      {
        id: "90mm_m332_shot_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 291,
        muzzleVelocityMs: 1165
      },
      {
        id: "90mm_m332_shot_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 321,
        muzzleVelocityMs: 1249,
        vehicleOperator: "FRG"
      },
      {
        id: "90mm_m332_shot_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.7,
        penetrationMm: 321,
        muzzleVelocityMs: 1249,
        vehicleOperator: "FRG"
      }
    ]
  },
  {
    id: "90mm_m348_shell",
    designation: "M348 shell",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_m348_shell_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 6.5,
        penetrationMm: 13.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.707,
        tntEquivalentKg: 0.926
      },
      {
        id: "90mm_m348_shell_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 6.5,
        penetrationMm: 13.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.707,
        tntEquivalentKg: 0.926
      },
      {
        id: "90mm_m348_shell_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 6.5,
        penetrationMm: 13.1,
        muzzleVelocityMs: 853,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.707,
        tntEquivalentKg: 0.926
      }
    ]
  },
  {
    id: "90mm_m431_shell",
    designation: "M431 shell",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_m431_shell_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1216,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1216,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1216,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_germ_kanonenjagdpanzer",
        vehicleId: "germ_kanonenjagdpanzer",
        vehicleName: "JPz 4-5",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1181,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1216,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1216,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      },
      {
        id: "90mm_m431_shell_germ_ru251",
        vehicleId: "germ_ru251",
        vehicleName: "Ru 251",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 5.8,
        penetrationMm: 10.7,
        muzzleVelocityMs: 1181,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.544,
        tntEquivalentKg: 0.713
      }
    ]
  },
  {
    id: "90mm_m71_shell",
    designation: "M71 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "90mm_m71_shell_us_m18_super_hellcat",
        vehicleId: "us_m18_super_hellcat",
        vehicleName: "Super Hellcat",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m26_pershing",
        vehicleId: "us_m26_pershing",
        vehicleName: "M26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m36",
        vehicleId: "us_m36",
        vehicleName: "M36 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m4_t26",
        vehicleId: "us_m4_t26",
        vehicleName: "M4/T26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_t25",
        vehicleId: "us_t25",
        vehicleName: "T25",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_us_t26e5",
        vehicleId: "us_t26e5",
        vehicleName: "T26E5",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_germ_kanonenjagdpanzer",
        vehicleId: "germ_kanonenjagdpanzer",
        vehicleName: "JPz 4-5",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71_shell_germ_ru251",
        vehicleId: "germ_ru251",
        vehicleName: "Ru 251",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 823,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "90mm_m71a1_shell",
    designation: "M71A1 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "90mm_m71a1_shell_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 732,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      },
      {
        id: "90mm_m71a1_shell_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 16.2,
        muzzleVelocityMs: 732,
        vehicleOperator: "FRG",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Composition B",
        explosiveMassKg: 0.925,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "90mm_m77_shot",
    designation: "M77 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "AP",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_m77_shot_us_m36",
        vehicleId: "us_m36",
        vehicleName: "M36 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 162,
        muzzleVelocityMs: 822
      },
      {
        id: "90mm_m77_shot_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 162,
        muzzleVelocityMs: 822
      },
      {
        id: "90mm_m77_shot_us_t25",
        vehicleId: "us_t25",
        vehicleName: "T25",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 162,
        muzzleVelocityMs: 822
      }
    ]
  },
  {
    id: "90mm_m82_shot",
    designation: "M82 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "90mm_m82_shot_us_m18_super_hellcat",
        vehicleId: "us_m18_super_hellcat",
        vehicleName: "Super Hellcat",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m26_pershing",
        vehicleId: "us_m26_pershing",
        vehicleName: "M26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m36",
        vehicleId: "us_m36",
        vehicleName: "M36 GMC",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m46_patton",
        vehicleId: "us_m46_patton",
        vehicleName: "M46",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m46_patton_73_armor_bat",
        vehicleId: "us_m46_patton_73_armor_bat",
        vehicleName: "M46 \"Tiger\"",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.0",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m47_patton_ii",
        vehicleId: "us_m47_patton_ii",
        vehicleName: "M47",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m4_t26",
        vehicleId: "us_m4_t26",
        vehicleName: "M4/T26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_t1e1_90",
        vehicleId: "us_t1e1_90",
        vehicleName: "T1E1 (90)",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_t25",
        vehicleId: "us_t25",
        vehicleName: "T25",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_us_t26e5",
        vehicleId: "us_t26e5",
        vehicleName: "T26E5",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_germ_kanonenjagdpanzer",
        vehicleId: "germ_kanonenjagdpanzer",
        vehicleName: "JPz 4-5",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_germ_mkpz_m47",
        vehicleId: "germ_mkpz_m47",
        vehicleName: "mKPz M47 G",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_germ_mkpz_m48a2c",
        vehicleId: "germ_mkpz_m48a2c",
        vehicleName: "M48A2 C",
        vehicleTechTree: "Germany",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_m82_shot_germ_ru251",
        vehicleId: "germ_ru251",
        vehicleName: "Ru 251",
        vehicleTechTree: "Germany",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 853,
        vehicleOperator: "FRG",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      }
    ]
  },
  {
    id: "90mm_t142e3",
    designation: "T142E3",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HESH",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_t142e3_us_m48a1_patton_iii",
        vehicleId: "us_m48a1_patton_iii",
        vehicleName: "M48A1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 102,
        muzzleVelocityMs: 792,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.1,
        tntEquivalentKg: 3.1
      },
      {
        id: "90mm_t142e3_us_m56_scorpion",
        vehicleId: "us_m56_scorpion",
        vehicleName: "M56",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 102,
        muzzleVelocityMs: 792,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 4,
        explosiveType: "Comp. A",
        explosiveMassKg: 2.1,
        tntEquivalentKg: 3.1
      }
    ]
  },
  {
    id: "90mm_t320",
    designation: "T320",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_t320_us_t95e1",
        vehicleId: "us_t95e1",
        vehicleName: "T95E1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 3.6,
        penetrationMm: 291,
        muzzleVelocityMs: 1570
      }
    ]
  },
  {
    id: "90mm_t33_shot",
    designation: "T33 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_t33_shot_us_m18_super_hellcat",
        vehicleId: "us_m18_super_hellcat",
        vehicleName: "Super Hellcat",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_t33_shot_us_m26_pershing",
        vehicleId: "us_m26_pershing",
        vehicleName: "M26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_t33_shot_us_m26_t99",
        vehicleId: "us_m26_t99",
        vehicleName: "M26 T99",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_t33_shot_us_m36b2",
        vehicleId: "us_m36b2",
        vehicleName: "M36B2",
        vehicleTechTree: "USA",
        vehicleRank: "III",
        vehicleBr: {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_t33_shot_us_m4_t26",
        vehicleId: "us_m4_t26",
        vehicleName: "M4/T26",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      },
      {
        id: "90mm_t33_shot_us_t26e5",
        vehicleId: "us_t26e5",
        vehicleName: "T26E5",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 175,
        muzzleVelocityMs: 853
      }
    ]
  },
  {
    id: "90mm_t339e14",
    designation: "T339E14",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [
      {
        id: "90mm_t339e14_us_t95e1",
        vehicleId: "us_t95e1",
        vehicleName: "T95E1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: null,
        armor: null,
        caliberMm: 90,
        projectileMassKg: 8.2,
        penetrationMm: 2.9,
        muzzleVelocityMs: 1143,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "TNT",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "90mm_t340e14h",
    designation: "T340E14H",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "90mm_t340e14h_us_t95e1",
        vehicleId: "us_t95e1",
        vehicleName: "T95E1",
        vehicleTechTree: "USA",
        vehicleRank: "VI",
        vehicleBr: {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 8.2,
        penetrationMm: 14,
        muzzleVelocityMs: 1143,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1
      }
    ]
  },
  {
    id: "90mm_t41",
    designation: "T41",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [
      {
        id: "90mm_t41_us_m26e1_pershing",
        vehicleId: "us_m26e1_pershing",
        vehicleName: "M26E1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 975,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_t41_us_t26e4_superpershing",
        vehicleId: "us_t26e4_superpershing",
        vehicleName: "T26E1-1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 975,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_t41_us_t32",
        vehicleId: "us_t32",
        vehicleName: "T32",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 975,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      },
      {
        id: "90mm_t41_us_t32e1",
        vehicleId: "us_t32e1",
        vehicleName: "T32E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 4.4,
        muzzleVelocityMs: 975,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "Exp. D",
        explosiveMassKg: 0.14,
        tntEquivalentKg: 0.137
      }
    ]
  },
  {
    id: "90mm_t42_shell",
    designation: "T42 shell",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [
      {
        id: "90mm_t42_shell_us_t26e4_superpershing",
        vehicleId: "us_t26e4_superpershing",
        vehicleName: "T26E1-1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 13.1,
        muzzleVelocityMs: 975,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.925
      },
      {
        id: "90mm_t42_shell_us_t32",
        vehicleId: "us_t32",
        vehicleName: "T32",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 13.1,
        muzzleVelocityMs: 975,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.925
      },
      {
        id: "90mm_t42_shell_us_t32e1",
        vehicleId: "us_t32e1",
        vehicleName: "T32E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 90,
        projectileMassKg: 10.6,
        penetrationMm: 13.1,
        muzzleVelocityMs: 975,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.925
      }
    ]
  },
  {
    id: "90mm_t43_shot",
    designation: "T43 shot",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [
      {
        id: "90mm_t43_shot_us_t26e4_superpershing",
        vehicleId: "us_t26e4_superpershing",
        vehicleName: "T26E1-1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 211,
        muzzleVelocityMs: 975
      },
      {
        id: "90mm_t43_shot_us_t32",
        vehicleId: "us_t32",
        vehicleName: "T32",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 211,
        muzzleVelocityMs: 975
      },
      {
        id: "90mm_t43_shot_us_t32e1",
        vehicleId: "us_t32e1",
        vehicleName: "T32E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 90,
        projectileMassKg: 10.9,
        penetrationMm: 211,
        muzzleVelocityMs: 975
      }
    ]
  },
  {
    id: "90mm_t44_shot",
    designation: "T44 shot",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [
      {
        id: "90mm_t44_shot_us_t26e4_superpershing",
        vehicleId: "us_t26e4_superpershing",
        vehicleName: "T26E1-1",
        vehicleTechTree: "USA",
        vehicleRank: "IV",
        vehicleBr: {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 336,
        muzzleVelocityMs: 1143
      },
      {
        id: "90mm_t44_shot_us_t32",
        vehicleId: "us_t32",
        vehicleName: "T32",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 336,
        muzzleVelocityMs: 1143
      },
      {
        id: "90mm_t44_shot_us_t32e1",
        vehicleId: "us_t32e1",
        vehicleName: "T32E1",
        vehicleTechTree: "USA",
        vehicleRank: "V",
        vehicleBr: {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 90,
        projectileMassKg: 7.6,
        penetrationMm: 336,
        muzzleVelocityMs: 1143
      }
    ]
  },
  {
    id: "100mm_3bk17m",
    designation: "3BK17M",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "100mm_3bk17m_ussr_object_685",
        vehicleId: "ussr_object_685",
        vehicleName: "Object 685",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 10,
        penetrationMm: 15.8,
        muzzleVelocityMs: 1085,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      },

      {
        id: "100mm_3bk17m_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 10,
        penetrationMm: 15.8,
        muzzleVelocityMs: 1085,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      },

      {
        id: "100mm_3bk17m_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 10,
        penetrationMm: 15.8,
        muzzleVelocityMs: 1085,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      },

      {
        id: "100mm_3bk17m_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 10,
        penetrationMm: 15.8,
        muzzleVelocityMs: 1085,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "100mm_3bk_5",
    designation: "3BK-5",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "100mm_3bk_5_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 12.4,
        penetrationMm: 16.6,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.995,
        tntEquivalentKg: 1.2
      },

      {
        id: "100mm_3bk_5_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 12.4,
        penetrationMm: 16.6,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.995,
        tntEquivalentKg: 1.2
      },

      {
        id: "100mm_3bk_5_ussr_to_55",
        vehicleId: "ussr_to_55",
        vehicleName: "TO-55",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 12.4,
        penetrationMm: 16.6,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.995,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "100mm_3bm25",
    designation: "3BM25",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "100mm_3bm25_ussr_object_685",
        vehicleId: "ussr_object_685",
        vehicleName: "Object 685",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 3.4,
        penetrationMm: 335,
        muzzleVelocityMs: 1430
      },

      {
        id: "100mm_3bm25_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 3.4,
        penetrationMm: 335,
        muzzleVelocityMs: 1430
      },

      {
        id: "100mm_3bm25_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 3.4,
        penetrationMm: 335,
        muzzleVelocityMs: 1430
      },

      {
        id: "100mm_3bm25_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 3.4,
        penetrationMm: 335,
        muzzleVelocityMs: 1430
      }
    ]
  },
  {
    id: "100mm_3bm_8",
    designation: "3BM-8",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "100mm_3bm_8_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      },

      {
        id: "100mm_3bm_8_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      },

      {
        id: "100mm_3bm_8_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      },

      {
        id: "100mm_3bm_8_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      },

      {
        id: "100mm_3bm_8_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      },

      {
        id: "100mm_3bm_8_ussr_to_55",
        vehicleId: "ussr_to_55",
        vehicleName: "TO-55",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 336,
        muzzleVelocityMs: 1415
      }
    ]
  },
  {
    id: "100mm_3d3",
    designation: "3D3",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [

      {
        id: "100mm_3d3_ussr_object_248",
        vehicleId: "ussr_object_248",
        vehicleName: "Object 248",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_object_685",
        vehicleId: "ussr_object_685",
        vehicleName: "Object 685",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_su_100_1945",
        vehicleId: "ussr_su_100_1945",
        vehicleName: "SU-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_su_100p",
        vehicleId: "ussr_su_100p",
        vehicleName: "SU-100P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_34_100",
        vehicleId: "ussr_t_34_100",
        vehicleName: "T-34-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "100mm_3d3_ussr_to_55",
        vehicleId: "ussr_to_55",
        vehicleName: "TO-55",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: null,
        armor: null,
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 2.9,
        muzzleVelocityMs: 880,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "100mm_3of32",
    designation: "3OF32",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "100mm_3of32_ussr_bmd_4",
        vehicleId: "ussr_bmd_4",
        vehicleName: "BMD-4",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 31,
        muzzleVelocityMs: 250,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 1.7,
        tntEquivalentKg: 2.6
      },

      {
        id: "100mm_3of32_ussr_bmd_4m",
        vehicleId: "ussr_bmd_4m",
        vehicleName: "BMD-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 31,
        muzzleVelocityMs: 250,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 1.7,
        tntEquivalentKg: 2.6
      },

      {
        id: "100mm_3of32_ussr_bmd_4m2",
        vehicleId: "ussr_bmd_4m2",
        vehicleName: "BMD-4M2",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 31,
        muzzleVelocityMs: 250,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 1.7,
        tntEquivalentKg: 2.6
      },

      {
        id: "100mm_3of32_ussr_bmp_3",
        vehicleId: "ussr_bmp_3",
        vehicleName: "BMP-3",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 31,
        muzzleVelocityMs: 250,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 1.7,
        tntEquivalentKg: 2.6
      }
    ]
  },
  {
    id: "100mm_3of70",
    designation: "3OF70",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "100mm_3of70_ussr_bmd_4",
        vehicleId: "ussr_bmd_4",
        vehicleName: "BMD-4",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 13.4,
        penetrationMm: 36.4,
        muzzleVelocityMs: 355,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.5
      },

      {
        id: "100mm_3of70_ussr_bmd_4m",
        vehicleId: "ussr_bmd_4m",
        vehicleName: "BMD-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 13.4,
        penetrationMm: 36.4,
        muzzleVelocityMs: 355,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.5
      },

      {
        id: "100mm_3of70_ussr_bmd_4m2",
        vehicleId: "ussr_bmd_4m2",
        vehicleName: "BMD-4M2",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 13.4,
        penetrationMm: 36.4,
        muzzleVelocityMs: 355,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.5
      },

      {
        id: "100mm_3of70_ussr_bmp_3",
        vehicleId: "ussr_bmp_3",
        vehicleName: "BMP-3",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 13.4,
        penetrationMm: 36.4,
        muzzleVelocityMs: 355,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 2.3,
        tntEquivalentKg: 3.5
      }
    ]
  },
  {
    id: "100mm_9m117",
    designation: "9M117",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "100mm_9m117_ussr_bmp_3",
        vehicleId: "ussr_bmp_3",
        vehicleName: "BMP-3",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 17.6,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      },

      {
        id: "100mm_9m117_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 17.6,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      },

      {
        id: "100mm_9m117_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 17.6,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      }
    ]
  },
  {
    id: "100mm_9m117m1",
    designation: "9M117M1",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "100mm_9m117m1_ussr_bmd_4",
        vehicleId: "ussr_bmd_4",
        vehicleName: "BMD-4",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 26,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      },

      {
        id: "100mm_9m117m1_ussr_bmd_4m",
        vehicleId: "ussr_bmd_4m",
        vehicleName: "BMD-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 26,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      },

      {
        id: "100mm_9m117m1_ussr_bmd_4m2",
        vehicleId: "ussr_bmd_4m2",
        vehicleName: "BMD-4M2",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 26,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      },

      {
        id: "100mm_9m117m1_ussr_bmp_3",
        vehicleId: "ussr_bmp_3",
        vehicleName: "BMP-3",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 26,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      }
    ]
  },
  {
    id: "100mm_br_412",
    designation: "BR-412",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "100mm_br_412_ussr_su_100_1945",
        vehicleId: "ussr_su_100_1945",
        vehicleName: "SU-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_su_100p",
        vehicleId: "ussr_su_100p",
        vehicleName: "SU-100P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_t_34_100",
        vehicleId: "ussr_t_34_100",
        vehicleName: "T-34-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "100mm_br_412b",
    designation: "BR-412B",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "100mm_br_412b_ussr_object_248",
        vehicleId: "ussr_object_248",
        vehicleName: "Object 248",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_su_100_1945",
        vehicleId: "ussr_su_100_1945",
        vehicleName: "SU-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_su_100p",
        vehicleId: "ussr_su_100p",
        vehicleName: "SU-100P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_t_34_100",
        vehicleId: "ussr_t_34_100",
        vehicleName: "T-34-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412b_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 895,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "100mm_br_412d",
    designation: "BR-412D",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "100mm_br_412d_ussr_object_685",
        vehicleId: "ussr_object_685",
        vehicleName: "Object 685",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_su_100_1945",
        vehicleId: "ussr_su_100_1945",
        vehicleName: "SU-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_su_100p",
        vehicleId: "ussr_su_100p",
        vehicleName: "SU-100P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_34_100",
        vehicleId: "ussr_t_34_100",
        vehicleName: "T-34-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      },

      {
        id: "100mm_br_412d_ussr_to_55",
        vehicleId: "ussr_to_55",
        vehicleName: "TO-55",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 887,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "100mm_br_412p",
    designation: "BR-412P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "100mm_br_412p_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 8.5,
        penetrationMm: 224,
        muzzleVelocityMs: 1050
      },

      {
        id: "100mm_br_412p_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 8.5,
        penetrationMm: 224,
        muzzleVelocityMs: 1050
      },

      {
        id: "100mm_br_412p_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 8.5,
        penetrationMm: 224,
        muzzleVelocityMs: 1050
      },

      {
        id: "100mm_br_412p_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 8.5,
        penetrationMm: 224,
        muzzleVelocityMs: 1050
      }
    ]
  },
  {
    id: "100mm_d_54_ap",
    designation: "D-54 AP",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "100mm_d_54_ap_ussr_object_140",
        vehicleId: "ussr_object_140",
        vehicleName: "Object 140",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 100,
        projectileMassKg: 15.9,
        penetrationMm: 4,
        muzzleVelocityMs: 1015,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.065,
        tntEquivalentKg: 0.1
      }
    ]
  },
  {
    id: "100mm_d_54_apds",
    designation: "D-54 APDS",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "100mm_d_54_apds_ussr_object_140",
        vehicleId: "ussr_object_140",
        vehicleName: "Object 140",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 100,
        projectileMassKg: 4.1,
        penetrationMm: 379,
        muzzleVelocityMs: 1535
      }
    ]
  },
  {
    id: "100mm_d_54_he",
    designation: "D-54 HE",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "100mm_d_54_he_ussr_object_140",
        vehicleId: "ussr_object_140",
        vehicleName: "Object 140",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 1025,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      }
    ]
  },
  {
    id: "100mm_d_54_heat",
    designation: "D-54 HEAT",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "100mm_d_54_heat_ussr_object_140",
        vehicleId: "ussr_object_140",
        vehicleName: "Object 140",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 100,
        projectileMassKg: 12.4,
        penetrationMm: 16.6,
        muzzleVelocityMs: 1025,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.995,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "100mm_of_412",
    designation: "OF-412",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "100mm_of_412_ussr_object_248",
        vehicleId: "ussr_object_248",
        vehicleName: "Object 248",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_object_685",
        vehicleId: "ussr_object_685",
        vehicleName: "Object 685",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_su_100_1945",
        vehicleId: "ussr_su_100_1945",
        vehicleName: "SU-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_su_100p",
        vehicleId: "ussr_su_100p",
        vehicleName: "SU-100P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_34_100",
        vehicleId: "ussr_t_34_100",
        vehicleName: "T-34-100",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_44_100",
        vehicleId: "ussr_t_44_100",
        vehicleName: "T-44-100",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_54_1947",
        vehicleId: "ussr_t_54_1947",
        vehicleName: "T-54 (1947)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_54_1949",
        vehicleId: "ussr_t_54_1949",
        vehicleName: "T-54 (1949)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_54_1951",
        vehicleId: "ussr_t_54_1951",
        vehicleName: "T-54 (1951)",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_55_am",
        vehicleId: "ussr_t_55_am",
        vehicleName: "T-55AM-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_55_amd_1",
        vehicleId: "ussr_t_55_amd_1",
        vehicleName: "T-55AMD-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_t_55a",
        vehicleId: "ussr_t_55a",
        vehicleName: "T-55A",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      },

      {
        id: "100mm_of_412_ussr_to_55",
        vehicleId: "ussr_to_55",
        vehicleName: "TO-55",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 100,
        projectileMassKg: 15.6,
        penetrationMm: 19,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 1.5
      }
    ]
  },
  {
    id: "107mm_b_420",
    designation: "B-420",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "107mm_b_420_ussr_kv_2_zis_6",
        vehicleId: "ussr_kv_2_zis_6",
        vehicleName: "KV-2 (ZiS-6)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 107,
        projectileMassKg: 16.6,
        penetrationMm: 7.7,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "TNT",
        explosiveMassKg: 0.44
      }
    ]
  },
  {
    id: "107mm_of_420",
    designation: "OF-420",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "107mm_of_420_ussr_kv_2_zis_6",
        vehicleId: "ussr_kv_2_zis_6",
        vehicleName: "KV-2 (ZiS-6)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 107,
        projectileMassKg: 17.2,
        penetrationMm: 26.5,
        muzzleVelocityMs: 720,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2.2
      }
    ]
  },
  {
    id: "115mm_3bk15m",
    designation: "3BK15M",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "115mm_3bk15m_ussr_t_62m1",
        vehicleId: "ussr_t_62m1",
        vehicleName: "T-62M-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 115,
        projectileMassKg: 12.2,
        penetrationMm: 27.8,
        muzzleVelocityMs: 1060,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 2.3
      }
    ]
  },
  {
    id: "115mm_3bk4",
    designation: "3BK4",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "115mm_3bk4_ussr_object_435",
        vehicleId: "ussr_object_435",
        vehicleName: "Object 435",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 115,
        projectileMassKg: 13,
        penetrationMm: 23.3,
        muzzleVelocityMs: 950,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 1.8
      },

      {
        id: "115mm_3bk4_ussr_t_62",
        vehicleId: "ussr_t_62",
        vehicleName: "T-62",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 115,
        projectileMassKg: 13,
        penetrationMm: 23.3,
        muzzleVelocityMs: 950,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.5,
        tntEquivalentKg: 1.8
      }
    ]
  },
  {
    id: "115mm_3bm21",
    designation: "3BM21",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "115mm_3bm21_ussr_t_62m1",
        vehicleId: "ussr_t_62m1",
        vehicleName: "T-62M-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 115,
        projectileMassKg: 4.6,
        penetrationMm: 420,
        muzzleVelocityMs: 1600
      }
    ]
  },
  {
    id: "115mm_3bm28",
    designation: "3BM28",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [

      {
        id: "115mm_3bm28_ussr_t_62m1",
        vehicleId: "ussr_t_62m1",
        vehicleName: "T-62M-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 115,
        projectileMassKg: 4.9,
        penetrationMm: 396,
        muzzleVelocityMs: 1600
      }
    ]
  },
  {
    id: "115mm_3bm3",
    designation: "3BM3",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "115mm_3bm3_ussr_object_435",
        vehicleId: "ussr_object_435",
        vehicleName: "Object 435",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 115,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1615
      },

      {
        id: "115mm_3bm3_ussr_t_62",
        vehicleId: "ussr_t_62",
        vehicleName: "T-62",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 115,
        projectileMassKg: 4,
        penetrationMm: 350,
        muzzleVelocityMs: 1615
      }
    ]
  },
  {
    id: "115mm_3bm4",
    designation: "3BM4",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [

      {
        id: "115mm_3bm4_ussr_object_435",
        vehicleId: "ussr_object_435",
        vehicleName: "Object 435",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 115,
        projectileMassKg: 4,
        penetrationMm: 284,
        muzzleVelocityMs: 1615
      },

      {
        id: "115mm_3bm4_ussr_t_62",
        vehicleId: "ussr_t_62",
        vehicleName: "T-62",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 115,
        projectileMassKg: 4,
        penetrationMm: 284,
        muzzleVelocityMs: 1615
      }
    ]
  },
  {
    id: "115mm_3of11",
    designation: "3OF11",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "115mm_3of11_ussr_object_435",
        vehicleId: "ussr_object_435",
        vehicleName: "Object 435",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 115,
        projectileMassKg: 14.9,
        penetrationMm: 31.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2.6
      },

      {
        id: "115mm_3of11_ussr_t_62",
        vehicleId: "ussr_t_62",
        vehicleName: "T-62",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 115,
        projectileMassKg: 14.9,
        penetrationMm: 31.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 2.6
      }
    ]
  },
  {
    id: "115mm_3of27",
    designation: "3OF27",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "115mm_3of27_ussr_t_62m1",
        vehicleId: "ussr_t_62m1",
        vehicleName: "T-62M-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 115,
        projectileMassKg: 17.8,
        penetrationMm: 39.6,
        muzzleVelocityMs: 800,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.1,
        tntEquivalentKg: 4.8
      }
    ]
  },
  {
    id: "115mm_9m117",
    designation: "9M117",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "115mm_9m117_ussr_t_62m1",
        vehicleId: "ussr_t_62m1",
        vehicleName: "T-62M-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 115,
        projectileMassKg: 18.8,
        penetrationMm: 39.7,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 370,
        missileGuidanceTimeS: 17.6,
        explosiveType: "OKFOL",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.9
      }
    ]
  },
  {
    id: "122mm_122_mm_3of24",
    designation: "122 mm 3OF24",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_122_mm_3of24_ussr_2s1",
        vehicleId: "ussr_2s1",
        vehicleName: "2S1",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 27.2,
        penetrationMm: 50.6,
        muzzleVelocityMs: 686,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.1
      }
    ]
  },
  {
    id: "122mm_122_mm_3of56",
    designation: "122 mm 3OF56",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_122_mm_3of56_ussr_2s1",
        vehicleId: "ussr_2s1",
        vehicleName: "2S1",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 21.8,
        penetrationMm: 50.6,
        muzzleVelocityMs: 690,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.1
      }
    ]
  },
  {
    id: "122mm_122_mm_3of7",
    designation: "122 mm 3OF7",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_122_mm_3of7_ussr_2s1",
        vehicleId: "ussr_2s1",
        vehicleName: "2S1",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 27.2,
        penetrationMm: 50.6,
        muzzleVelocityMs: 686,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.1
      }
    ]
  },
  {
    id: "122mm_3bk_10",
    designation: "3BK-10",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_3bk_10_ussr_2s1",
        vehicleId: "ussr_2s1",
        vehicleName: "2S1",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.0",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 18.4,
        penetrationMm: 21.3,
        muzzleVelocityMs: 726,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.7
      },

      {
        id: "122mm_3bk_10_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 18.4,
        penetrationMm: 21.3,
        muzzleVelocityMs: 820,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.3,
        tntEquivalentKg: 1.7
      }
    ]
  },
  {
    id: "122mm_3bk_9",
    designation: "3BK-9",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "122mm_3bk_9_ussr_t_10m",
        vehicleId: "ussr_t_10m",
        vehicleName: "T-10M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 18.4,
        penetrationMm: 26.2,
        muzzleVelocityMs: 920,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 1.7,
        tntEquivalentKg: 2.1
      }
    ]
  },
  {
    id: "122mm_3bm_11",
    designation: "3BM-11",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_3bm_11_ussr_t_10m",
        vehicleId: "ussr_t_10m",
        vehicleName: "T-10M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 4.5,
        penetrationMm: 408,
        muzzleVelocityMs: 1620
      }
    ]
  },
  {
    id: "122mm_3bm_7",
    designation: "3BM-7",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APDS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "122mm_3bm_7_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 4.5,
        penetrationMm: 330,
        muzzleVelocityMs: 1400
      }
    ]
  },
  {
    id: "122mm_bp_460a",
    designation: "BP-460A",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_bp_460a_ussr_su_122",
        vehicleId: "ussr_su_122",
        vehicleName: "SU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 13.4,
        penetrationMm: 32.3,
        muzzleVelocityMs: 335,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 2.2,
        tntEquivalentKg: 2.7
      }
    ]
  },
  {
    id: "122mm_br_471",
    designation: "BR-471",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_br_471_ussr_is_2_1943",
        vehicleId: "ussr_is_2_1943",
        vehicleName: "IS-2",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_2_1944",
        vehicleId: "ussr_is_2_1944",
        vehicleName: "IS-2 (1944)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_2_1944_321",
        vehicleId: "ussr_is_2_1944_321",
        vehicleName: "IS-2 No.321",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_2_1944_revenge",
        vehicleId: "ussr_is_2_1944_revenge",
        vehicleName: "IS-2 \"Revenge\"",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_3",
        vehicleId: "ussr_is_3",
        vehicleName: "IS-3",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_4m",
        vehicleId: "ussr_is_4m",
        vehicleName: "IS-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_is_6",
        vehicleId: "ussr_is_6",
        vehicleName: "IS-6",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_isu_122",
        vehicleId: "ussr_isu_122",
        vehicleName: "ISU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_isu_122s",
        vehicleId: "ussr_isu_122s",
        vehicleName: "ISU-122S",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_kv_122",
        vehicleId: "ussr_kv_122",
        vehicleName: "KV-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_su_122p",
        vehicleId: "ussr_su_122p",
        vehicleName: "SU-122P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_t_10a",
        vehicleId: "ussr_t_10a",
        vehicleName: "T-10A",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471_ussr_t_44_122",
        vehicleId: "ussr_t_44_122",
        vehicleName: "T-44-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      }
    ]
  },
  {
    id: "122mm_br_471b",
    designation: "BR-471B",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_br_471b_ussr_is_2_1943",
        vehicleId: "ussr_is_2_1943",
        vehicleName: "IS-2",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_2_1944",
        vehicleId: "ussr_is_2_1944",
        vehicleName: "IS-2 (1944)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_2_1944_321",
        vehicleId: "ussr_is_2_1944_321",
        vehicleName: "IS-2 No.321",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_2_1944_revenge",
        vehicleId: "ussr_is_2_1944_revenge",
        vehicleName: "IS-2 \"Revenge\"",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_3",
        vehicleId: "ussr_is_3",
        vehicleName: "IS-3",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_4m",
        vehicleId: "ussr_is_4m",
        vehicleName: "IS-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_is_6",
        vehicleId: "ussr_is_6",
        vehicleName: "IS-6",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_isu_122",
        vehicleId: "ussr_isu_122",
        vehicleName: "ISU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_isu_122s",
        vehicleId: "ussr_isu_122s",
        vehicleName: "ISU-122S",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_kv_122",
        vehicleId: "ussr_kv_122",
        vehicleName: "KV-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_su_122p",
        vehicleId: "ussr_su_122p",
        vehicleName: "SU-122P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_t_10a",
        vehicleId: "ussr_t_10a",
        vehicleName: "T-10A",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      },

      {
        id: "122mm_br_471b_ussr_t_44_122",
        vehicleId: "ussr_t_44_122",
        vehicleName: "T-44-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 5.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.16,
        tntEquivalentKg: 0.246
      }
    ]
  },
  {
    id: "122mm_br_471d",
    designation: "BR-471D",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_big",
    performances: [

      {
        id: "122mm_br_471d_ussr_is_2_1944",
        vehicleId: "ussr_is_2_1944",
        vehicleName: "IS-2 (1944)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_is_2_1944_321",
        vehicleId: "ussr_is_2_1944_321",
        vehicleName: "IS-2 No.321",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_is_2_1944_revenge",
        vehicleId: "ussr_is_2_1944_revenge",
        vehicleName: "IS-2 \"Revenge\"",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_is_3",
        vehicleId: "ussr_is_3",
        vehicleName: "IS-3",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_is_4m",
        vehicleId: "ussr_is_4m",
        vehicleName: "IS-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_is_6",
        vehicleId: "ussr_is_6",
        vehicleName: "IS-6",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_su_122p",
        vehicleId: "ussr_su_122p",
        vehicleName: "SU-122P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      },

      {
        id: "122mm_br_471d_ussr_t_10a",
        vehicleId: "ussr_t_10a",
        vehicleName: "T-10A",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 4.9,
        muzzleVelocityMs: 800,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.125,
        tntEquivalentKg: 0.192
      }
    ]
  },
  {
    id: "122mm_br_472",
    designation: "BR-472",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "122mm_br_472_ussr_t_10m",
        vehicleId: "ussr_t_10m",
        vehicleName: "T-10M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 122,
        projectileMassKg: 25.1,
        penetrationMm: 4.8,
        muzzleVelocityMs: 950,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.12,
        tntEquivalentKg: 0.185
      }
    ]
  },
  {
    id: "122mm_d_462a",
    designation: "D-462A",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [

      {
        id: "122mm_d_462a_ussr_su_122",
        vehicleId: "ussr_su_122",
        vehicleName: "SU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: null,
        armor: null,
        caliberMm: 122,
        projectileMassKg: 22.3,
        penetrationMm: 2.9,
        muzzleVelocityMs: 515,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "122mm_of_462",
    designation: "OF-462",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_of_462_ussr_su_122",
        vehicleId: "ussr_su_122",
        vehicleName: "SU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 21.8,
        penetrationMm: 36.7,
        muzzleVelocityMs: 515,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.7
      }
    ]
  },
  {
    id: "122mm_of_471",
    designation: "OF-471",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_of_471_ussr_is_2_1943",
        vehicleId: "ussr_is_2_1943",
        vehicleName: "IS-2",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_2_1944",
        vehicleId: "ussr_is_2_1944",
        vehicleName: "IS-2 (1944)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_2_1944_321",
        vehicleId: "ussr_is_2_1944_321",
        vehicleName: "IS-2 No.321",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_2_1944_revenge",
        vehicleId: "ussr_is_2_1944_revenge",
        vehicleName: "IS-2 \"Revenge\"",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_3",
        vehicleId: "ussr_is_3",
        vehicleName: "IS-3",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_4m",
        vehicleId: "ussr_is_4m",
        vehicleName: "IS-4M",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_is_6",
        vehicleId: "ussr_is_6",
        vehicleName: "IS-6",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_isu_122",
        vehicleId: "ussr_isu_122",
        vehicleName: "ISU-122",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_isu_122s",
        vehicleId: "ussr_isu_122s",
        vehicleName: "ISU-122S",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_kv_122",
        vehicleId: "ussr_kv_122",
        vehicleName: "KV-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_su_122_54",
        vehicleId: "ussr_su_122_54",
        vehicleName: "SU-122-54",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_su_122p",
        vehicleId: "ussr_su_122p",
        vehicleName: "SU-122P",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_t_10a",
        vehicleId: "ussr_t_10a",
        vehicleName: "T-10A",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "7.7",
          SB: "7.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "122mm_of_471_ussr_t_44_122",
        vehicleId: "ussr_t_44_122",
        vehicleName: "T-44-122",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 25,
        penetrationMm: 36.5,
        muzzleVelocityMs: 795,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      }
    ]
  },
  {
    id: "122mm_of_472",
    designation: "OF-472",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "122mm_of_472_ussr_t_10m",
        vehicleId: "ussr_t_10m",
        vehicleName: "T-10M",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 122,
        projectileMassKg: 27.2,
        penetrationMm: 35,
        muzzleVelocityMs: 865,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3
      }
    ]
  },
  {
    id: "125mm_3bk18m",
    designation: "3BK18M",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "125mm_3bk18m_ussr_2s25",
        vehicleId: "ussr_2s25",
        vehicleName: "2S25",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_2s25m",
        vehicleId: "ussr_2s25m",
        vehicleName: "2S25M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_64_b_1984",
        vehicleId: "ussr_t_64_b_1984",
        vehicleName: "T-64B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_72b",
        vehicleId: "ussr_t_72b",
        vehicleName: "T-72B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_72b3_2011",
        vehicleId: "ussr_t_72b3_2011",
        vehicleName: "T-72B3",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_72b3_arena",
        vehicleId: "ussr_t_72b3_arena",
        vehicleName: "T-72B3 \"Arena\"",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_72b3_arena_m",
        vehicleId: "ussr_t_72b3_arena_m",
        vehicleName: "T-72B3A",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_72b_1989",
        vehicleId: "ussr_t_72b_1989",
        vehicleName: "T-72B (1989)",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80b",
        vehicleId: "ussr_t_80b",
        vehicleName: "T-80B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80bvm",
        vehicleId: "ussr_t_80bvm",
        vehicleName: "T-80BVM",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80u",
        vehicleId: "ussr_t_80u",
        vehicleName: "T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80u_yt_cup_2019",
        vehicleId: "ussr_t_80u_yt_cup_2019",
        vehicleName: "␙T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80ud",
        vehicleId: "ussr_t_80ud",
        vehicleName: "T-80UD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80ue1",
        vehicleId: "ussr_t_80ue1",
        vehicleName: "T-80U-E1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80ue1_sm",
        vehicleId: "ussr_t_80ue1_sm",
        vehicleName: "◍Т-80U-Е1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80uk",
        vehicleId: "ussr_t_80uk",
        vehicleName: "T-80UK",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_80um2",
        vehicleId: "ussr_t_80um2",
        vehicleName: "T-80UM2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_90a",
        vehicleId: "ussr_t_90a",
        vehicleName: "T-90A",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_90m_2020",
        vehicleId: "ussr_t_90m_2020",
        vehicleName: "T-90M",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      },

      {
        id: "125mm_3bk18m_ussr_t_90m_arena_m",
        vehicleId: "ussr_t_90m_arena_m",
        vehicleName: "T-90M (Arena-M)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 19,
        penetrationMm: 33.4,
        muzzleVelocityMs: 905,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "OKFOL",
        explosiveMassKg: 1.8,
        tntEquivalentKg: 2.8
      }
    ]
  },
  {
    id: "125mm_3bm42",
    designation: "3BM42",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [

      {
        id: "125mm_3bm42_ussr_2s25",
        vehicleId: "ussr_2s25",
        vehicleName: "2S25",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_2s25m",
        vehicleId: "ussr_2s25m",
        vehicleName: "2S25M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_64_b_1984",
        vehicleId: "ussr_t_64_b_1984",
        vehicleName: "T-64B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_72av_turms",
        vehicleId: "ussr_t_72av_turms",
        vehicleName: "T-72AV (TURMS-T)",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Syria"
      },

      {
        id: "125mm_3bm42_ussr_t_72b",
        vehicleId: "ussr_t_72b",
        vehicleName: "T-72B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_72b3_2011",
        vehicleId: "ussr_t_72b3_2011",
        vehicleName: "T-72B3",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_72b3_arena",
        vehicleId: "ussr_t_72b3_arena",
        vehicleName: "T-72B3 \"Arena\"",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_72b3_arena_m",
        vehicleId: "ussr_t_72b3_arena_m",
        vehicleName: "T-72B3A",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_72b_1989",
        vehicleId: "ussr_t_72b_1989",
        vehicleName: "T-72B (1989)",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_80b",
        vehicleId: "ussr_t_80b",
        vehicleName: "T-80B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_80u",
        vehicleId: "ussr_t_80u",
        vehicleName: "T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_80u_yt_cup_2019",
        vehicleId: "ussr_t_80u_yt_cup_2019",
        vehicleName: "␙T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_80ud",
        vehicleId: "ussr_t_80ud",
        vehicleName: "T-80UD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm42_ussr_t_80ue1",
        vehicleId: "ussr_t_80ue1",
        vehicleName: "T-80U-E1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_80ue1_sm",
        vehicleId: "ussr_t_80ue1_sm",
        vehicleName: "◍Т-80U-Е1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_80uk",
        vehicleId: "ussr_t_80uk",
        vehicleName: "T-80UK",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_80um2",
        vehicleId: "ussr_t_80um2",
        vehicleName: "T-80UM2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_ussr_t_90a",
        vehicleId: "ussr_t_90a",
        vehicleName: "T-90A",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 457,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      }
    ]
  },
  {
    id: "125mm_3bm42_2",
    designation: "3BM42-2",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_small",
    performances: [

      {
        id: "125mm_3bm42_2_ussr_t_80bvm",
        vehicleId: "ussr_t_80bvm",
        vehicleName: "T-80BVM",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 3.9,
        penetrationMm: 544,
        muzzleVelocityMs: 1750,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_2_ussr_t_90m_2020",
        vehicleId: "ussr_t_90m_2020",
        vehicleName: "T-90M",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 3.9,
        penetrationMm: 544,
        muzzleVelocityMs: 1750,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm42_2_ussr_t_90m_arena_m",
        vehicleId: "ussr_t_90m_arena_m",
        vehicleName: "T-90M (Arena-M)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 125,
        projectileMassKg: 3.9,
        penetrationMm: 544,
        muzzleVelocityMs: 1750,
        vehicleOperator: "Russia"
      }
    ]
  },
  {
    id: "125mm_3bm46",
    designation: "3BM46",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "125mm_3bm46_ussr_t_80u",
        vehicleId: "ussr_t_80u",
        vehicleName: "T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm46_ussr_t_80u_yt_cup_2019",
        vehicleId: "ussr_t_80u_yt_cup_2019",
        vehicleName: "␙T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700
      },

      {
        id: "125mm_3bm46_ussr_t_80ue1",
        vehicleId: "ussr_t_80ue1",
        vehicleName: "T-80U-E1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm46_ussr_t_80ue1_sm",
        vehicleId: "ussr_t_80ue1_sm",
        vehicleName: "◍Т-80U-Е1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm46_ussr_t_80uk",
        vehicleId: "ussr_t_80uk",
        vehicleName: "T-80UK",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm46_ussr_t_80um2",
        vehicleId: "ussr_t_80um2",
        vehicleName: "T-80UM2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 4.8,
        penetrationMm: 532,
        muzzleVelocityMs: 1700,
        vehicleOperator: "Russia"
      }
    ]
  },
  {
    id: "125mm_3bm60",
    designation: "3BM60",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "125mm_3bm60_ussr_2s25m",
        vehicleId: "ussr_2s25m",
        vehicleName: "2S25M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_72b3_2011",
        vehicleId: "ussr_t_72b3_2011",
        vehicleName: "T-72B3",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_72b3_arena",
        vehicleId: "ussr_t_72b3_arena",
        vehicleName: "T-72B3 \"Arena\"",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_72b3_arena_m",
        vehicleId: "ussr_t_72b3_arena_m",
        vehicleName: "T-72B3A",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_80bvm",
        vehicleId: "ussr_t_80bvm",
        vehicleName: "T-80BVM",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_90a",
        vehicleId: "ussr_t_90a",
        vehicleName: "T-90A",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_90m_2020",
        vehicleId: "ussr_t_90m_2020",
        vehicleName: "T-90M",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      },

      {
        id: "125mm_3bm60_ussr_t_90m_arena_m",
        vehicleId: "ussr_t_90m_arena_m",
        vehicleName: "T-90M (Arena-M)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 125,
        projectileMassKg: 5.1,
        penetrationMm: 580,
        muzzleVelocityMs: 1660,
        vehicleOperator: "Russia"
      }
    ]
  },
  {
    id: "125mm_3of19",
    designation: "3OF19",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "125mm_3of19_ussr_t_64a_1971",
        vehicleId: "ussr_t_64a_1971",
        vehicleName: "T-64A (1971)",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23.2,
        penetrationMm: 35.4,
        muzzleVelocityMs: 850,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.2
      }
    ]
  },
  {
    id: "125mm_3of26_edkv",
    designation: "3OF26 EDKV",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "125mm_3of26_edkv_ussr_t_80ue1",
        vehicleId: "ussr_t_80ue1",
        vehicleName: "T-80U-E1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 42.4,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.4,
        tntEquivalentKg: 5.2
      },

      {
        id: "125mm_3of26_edkv_ussr_t_80ue1_sm",
        vehicleId: "ussr_t_80ue1_sm",
        vehicleName: "◍Т-80U-Е1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 42.4,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.4,
        tntEquivalentKg: 5.2
      },

      {
        id: "125mm_3of26_edkv_ussr_t_80uk",
        vehicleId: "ussr_t_80uk",
        vehicleName: "T-80UK",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 42.4,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.4,
        tntEquivalentKg: 5.2
      },

      {
        id: "125mm_3of26_edkv_ussr_t_90a",
        vehicleId: "ussr_t_90a",
        vehicleName: "T-90A",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 42.4,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3.4,
        tntEquivalentKg: 5.2
      }
    ]
  },
  {
    id: "125mm_3of82",
    designation: "3OF82",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-TF",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "125mm_3of82_ussr_t_90m_2020",
        vehicleId: "ussr_t_90m_2020",
        vehicleName: "T-90M",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 39.1,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.6
      },

      {
        id: "125mm_3of82_ussr_t_90m_arena_m",
        vehicleId: "ussr_t_90m_arena_m",
        vehicleName: "T-90M (Arena-M)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 23,
        penetrationMm: 39.1,
        muzzleVelocityMs: 850,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 3,
        tntEquivalentKg: 4.6
      }
    ]
  },
  {
    id: "125mm_9m112",
    designation: "9M112",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "125mm_9m112_ussr_t_64_b_1984",
        vehicleId: "ussr_t_64_b_1984",
        vehicleName: "T-64B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 25.9,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 4,
        maximumSpeedMs: 400,
        missileGuidanceTimeS: 17,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m112_ussr_t_80b",
        vehicleId: "ussr_t_80b",
        vehicleName: "T-80B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 25.9,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 4,
        maximumSpeedMs: 400,
        missileGuidanceTimeS: 17,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      }
    ]
  },
  {
    id: "125mm_9m119",
    designation: "9M119",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "125mm_9m119_ussr_2s25",
        vehicleId: "ussr_2s25",
        vehicleName: "2S25",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_72b",
        vehicleId: "ussr_t_72b",
        vehicleName: "T-72B",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_72b_1989",
        vehicleId: "ussr_t_72b_1989",
        vehicleName: "T-72B (1989)",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 4,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_80u",
        vehicleId: "ussr_t_80u",
        vehicleName: "T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_80u_yt_cup_2019",
        vehicleId: "ussr_t_80u_yt_cup_2019",
        vehicleName: "␙T-80U",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_80ud",
        vehicleId: "ussr_t_80ud",
        vehicleName: "T-80UD",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_80uk",
        vehicleId: "ussr_t_80uk",
        vehicleName: "T-80UK",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119_ussr_t_80um2",
        vehicleId: "ussr_t_80um2",
        vehicleName: "T-80UM2",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 16.5,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 19,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      }
    ]
  },
  {
    id: "125mm_9m119m1",
    designation: "9M119M1",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "125mm_9m119m1_ussr_2s25m",
        vehicleId: "ussr_2s25m",
        vehicleName: "2S25M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "10.0",
          SB: "10.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_72b3_2011",
        vehicleId: "ussr_t_72b3_2011",
        vehicleName: "T-72B3",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.3",
          SB: "11.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_72b3_arena",
        vehicleId: "ussr_t_72b3_arena",
        vehicleName: "T-72B3 \"Arena\"",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_72b3_arena_m",
        vehicleId: "ussr_t_72b3_arena_m",
        vehicleName: "T-72B3A",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.3",
          RB: "12.3",
          SB: "12.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_80bvm",
        vehicleId: "ussr_t_80bvm",
        vehicleName: "T-80BVM",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_80ue1",
        vehicleId: "ussr_t_80ue1",
        vehicleName: "T-80U-E1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_80ue1_sm",
        vehicleId: "ussr_t_80ue1_sm",
        vehicleName: "◍Т-80U-Е1",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "12.0",
          RB: "12.0",
          SB: "12.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_90a",
        vehicleId: "ussr_t_90a",
        vehicleName: "T-90A",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.0",
          RB: "11.0",
          SB: "11.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_90m_2020",
        vehicleId: "ussr_t_90m_2020",
        vehicleName: "T-90M",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      },

      {
        id: "125mm_9m119m1_ussr_t_90m_arena_m",
        vehicleId: "ussr_t_90m_arena_m",
        vehicleName: "T-90M (Arena-M)",
        vehicleTechTree: "USSR",
        vehicleRank: "VIII",
        vehicleBr:
        {
          AB: "12.7",
          RB: "12.7",
          SB: "12.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 17.2,
        penetrationMm: 48.3,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 470,
        missileGuidanceTimeS: 28,
        explosiveType: "OKFOL",
        explosiveMassKg: 3.6,
        tntEquivalentKg: 5.8
      }
    ]
  },
  {
    id: "125mm_bur",
    designation: "BUR",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "125mm_bur_ussr_object_775",
        vehicleId: "ussr_object_775",
        vehicleName: "Object 775",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 125,
        projectileMassKg: 22,
        penetrationMm: 37.4,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 380,
        explosiveType: "A-IX-2",
        explosiveMassKg: 2.6,
        tntEquivalentKg: 4
      }
    ]
  },
  {
    id: "125mm_rubin",
    designation: "Rubin",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "125mm_rubin_ussr_object_775",
        vehicleId: "ussr_object_775",
        vehicleName: "Object 775",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.3",
          RB: "9.3",
          SB: "9.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 28.5,
        penetrationMm: 38.4,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 4,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 10,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.7,
        tntEquivalentKg: 4.4
      }
    ]
  },
  {
    id: "125mm_tapna",
    designation: "TAPNA",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [

      {
        id: "125mm_tapna_ussr_t_72m2_moderna",
        vehicleId: "ussr_t_72m2_moderna",
        vehicleName: "T-72M2 Moderna",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 125,
        projectileMassKg: 3.7,
        penetrationMm: 509,
        muzzleVelocityMs: 1690,
        vehicleOperator: "Slovakia"
      }
    ]
  },
  {
    id: "130mm_9m114",
    designation: "9M114",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "130mm_9m114_ussr_9p149",
        vehicleId: "ussr_9p149",
        vehicleName: "Shturm-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 130,
        projectileMassKg: 31.4,
        penetrationMm: 37.5,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 5,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 20,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.5,
        tntEquivalentKg: 4
      }
    ]
  },
  {
    id: "130mm_9m120",
    designation: "9M120",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "130mm_9m120_ussr_9p149",
        vehicleId: "ussr_9p149",
        vehicleName: "Shturm-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 38.9,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 4.6
      }
    ]
  },
  {
    id: "130mm_9m120_1",
    designation: "9M120-1",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "130mm_9m120_1_ussr_bmpt",
        vehicleId: "ussr_bmpt",
        vehicleName: "BMPT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 38.9,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 4.6
      },

      {
        id: "130mm_9m120_1_ussr_bmpt_72",
        vehicleId: "ussr_bmpt_72",
        vehicleName: "BMPT-72",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 38.9,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "OKFOL",
        explosiveMassKg: 2.8,
        tntEquivalentKg: 4.6
      }
    ]
  },
  {
    id: "130mm_9m120_1f",
    designation: "9M120-1F",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-HE",
    damage: "explosion_big",
    armor: "armor_middle",
    performances: [

      {
        id: "130mm_9m120_1f_ussr_bmpt",
        vehicleId: "ussr_bmpt",
        vehicleName: "BMPT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 54.6,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4.5,
        tntEquivalentKg: 6.9
      },

      {
        id: "130mm_9m120_1f_ussr_bmpt_72",
        vehicleId: "ussr_bmpt_72",
        vehicleName: "BMPT-72",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 54.6,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4.5,
        tntEquivalentKg: 6.9
      }
    ]
  },
  {
    id: "130mm_9m120f_1",
    designation: "9M120F-1",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-HE",
    damage: "explosion_big",
    armor: "armor_middle",
    performances: [

      {
        id: "130mm_9m120f_1_ussr_9p149",
        vehicleId: "ussr_9p149",
        vehicleName: "Shturm-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 54.6,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 25,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4.5,
        tntEquivalentKg: 6.9
      }
    ]
  },
  {
    id: "130mm_9m220o",
    designation: "9M220O",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-VT",
    damage: "explosion_big",
    armor: "armor_small",
    performances: [

      {
        id: "130mm_9m220o_ussr_9p149",
        vehicleId: "ussr_9p149",
        vehicleName: "Shturm-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "explosion_big",
        armor: "armor_small",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 50.8,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 7,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 30,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.2
      }
    ]
  },
  {
    id: "130mm_br_482b",
    designation: "BR-482B",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "130mm_br_482b_ussr_is_7",
        vehicleId: "ussr_is_7",
        vehicleName: "IS-7",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.4,
        penetrationMm: 4.8,
        muzzleVelocityMs: 900,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.115,
        tntEquivalentKg: 0.177
      },

      {
        id: "130mm_br_482b_ussr_object_279",
        vehicleId: "ussr_object_279",
        vehicleName: "Object 279",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.4,
        penetrationMm: 4.8,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.115,
        tntEquivalentKg: 0.177
      }
    ]
  },
  {
    id: "130mm_of_46",
    designation: "OF-46",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "130mm_of_46_ussr_su_100y",
        vehicleId: "ussr_su_100y",
        vehicleName: "SU-100Y",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 130,
        projectileMassKg: 33.4,
        penetrationMm: 36.5,
        muzzleVelocityMs: 870,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      }
    ]
  },
  {
    id: "130mm_of_482m",
    designation: "OF-482M",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "130mm_of_482m_ussr_is_7",
        vehicleId: "ussr_is_7",
        vehicleName: "IS-7",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.3",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 130,
        projectileMassKg: 33.4,
        penetrationMm: 36.6,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      },

      {
        id: "130mm_of_482m_ussr_object_279",
        vehicleId: "ussr_object_279",
        vehicleName: "Object 279",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 130,
        projectileMassKg: 33.4,
        penetrationMm: 36.6,
        muzzleVelocityMs: 900,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 3.6
      }
    ]
  },
  {
    id: "130mm_pb_46a",
    designation: "PB-46A",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "SAPCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "130mm_pb_46a_ussr_su_100y",
        vehicleId: "ussr_su_100y",
        vehicleName: "SU-100Y",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 130,
        projectileMassKg: 33.5,
        penetrationMm: 28.5,
        muzzleVelocityMs: 870,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "TNT",
        explosiveMassKg: 2.3
      }
    ]
  },
  {
    id: "132mm_m_13",
    designation: "M-13",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: null,
    armor: null,
    performances: [

      {
        id: "132mm_m_13_ussr_bm_13n",
        vehicleId: "ussr_bm_13n",
        vehicleName: "BM-13N",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: null,
        armor: null,
        caliberMm: 132,
        projectileMassKg: 42.4,
        penetrationMm: 39.8,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 355,
        explosiveType: "TNT",
        explosiveMassKg: 4.9
      }
    ]
  },
  {
    id: "152mm_152_mm_apds_fs",
    designation: "152 mm APDS-FS",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "152mm_152_mm_apds_fs_ussr_object_120",
        vehicleId: "ussr_object_120",
        vehicleName: "Object 120",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 8,
        penetrationMm: 405,
        muzzleVelocityMs: 1750
      }
    ]
  },
  {
    id: "152mm_152_mm_apfsds",
    designation: "152 mm APFSDS",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [

      {
        id: "152mm_152_mm_apfsds_ussr_object_292",
        vehicleId: "ussr_object_292",
        vehicleName: "Object 292",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 7,
        penetrationMm: 698,
        muzzleVelocityMs: 1980
      }
    ]
  },
  {
    id: "152mm_152_mm_he",
    designation: "152 mm HE",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_152_mm_he_ussr_object_120",
        vehicleId: "ussr_object_120",
        vehicleName: "Object 120",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.5,
        penetrationMm: 49,
        muzzleVelocityMs: 960,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.9
      },

      {
        id: "152mm_152_mm_he_ussr_object_292",
        vehicleId: "ussr_object_292",
        vehicleName: "Object 292",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 45.9,
        penetrationMm: 60.6,
        muzzleVelocityMs: 920,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 5.6,
        tntEquivalentKg: 8.6
      }
    ]
  },
  {
    id: "152mm_152_mm_heat_fs",
    designation: "152 mm HEAT-FS",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "152mm_152_mm_heat_fs_ussr_object_120",
        vehicleId: "ussr_object_120",
        vehicleName: "Object 120",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 35,
        penetrationMm: 39.4,
        muzzleVelocityMs: 1000,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      }
    ]
  },
  {
    id: "152mm_3of25",
    designation: "3OF25",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_3of25_ussr_2s19_m1",
        vehicleId: "ussr_2s19_m1",
        vehicleName: "2S19M1",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 62.1,
        muzzleVelocityMs: 655,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6.6,
        tntEquivalentKg: 10.1
      },

      {
        id: "152mm_3of25_ussr_2s19_m2",
        vehicleId: "ussr_2s19_m2",
        vehicleName: "2S19M2",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 62.1,
        muzzleVelocityMs: 655,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6.6,
        tntEquivalentKg: 10.1
      },

      {
        id: "152mm_3of25_ussr_2s3m",
        vehicleId: "ussr_2s3m",
        vehicleName: "2S3M",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 62.1,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6.6,
        tntEquivalentKg: 10.1
      }
    ]
  },
  {
    id: "152mm_3of25_(pf)",
    designation: "3OF25 (PF)",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_3of25_(pf)_ussr_2s3m",
        vehicleId: "ussr_2s3m",
        vehicleName: "2S3M",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 62.1,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6.6,
        tntEquivalentKg: 10.1
      }
    ]
  },
  {
    id: "152mm_3of45",
    designation: "3OF45",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_3of45_ussr_2s19_m1",
        vehicleId: "ussr_2s19_m1",
        vehicleName: "2S19M1",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 63.1,
        muzzleVelocityMs: 810,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 7.7,
        tntEquivalentKg: 11.8
      },

      {
        id: "152mm_3of45_ussr_2s19_m2",
        vehicleId: "ussr_2s19_m2",
        vehicleName: "2S19M2",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 63.1,
        muzzleVelocityMs: 810,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 7.7,
        tntEquivalentKg: 11.8
      }
    ]
  },
  {
    id: "152mm_3of45_(pf)",
    designation: "3OF45 (PF)",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_3of45_(pf)_ussr_2s19_m1",
        vehicleId: "ussr_2s19_m1",
        vehicleName: "2S19M1",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 63.1,
        muzzleVelocityMs: 810,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 7.7,
        tntEquivalentKg: 11.8
      },

      {
        id: "152mm_3of45_(pf)_ussr_2s19_m2",
        vehicleId: "ussr_2s19_m2",
        vehicleName: "2S19M2",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 63.1,
        muzzleVelocityMs: 810,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 7.7,
        tntEquivalentKg: 11.8
      }
    ]
  },
  {
    id: "152mm_9m133",
    designation: "9M133",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "152mm_9m133_ussr_bmp_2m",
        vehicleId: "ussr_bmp_2m",
        vehicleName: "BMP-2M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 26,
        penetrationMm: 52.4,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 320,
        missileGuidanceTimeS: 35,
        explosiveType: "OKFOL",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.5
      },

      {
        id: "152mm_9m133_ussr_btr_82at",
        vehicleId: "ussr_btr_82at",
        vehicleName: "BTR-82AT",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "9.0",
          RB: "9.0",
          SB: "9.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 26,
        penetrationMm: 52.4,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 5.5,
        maximumSpeedMs: 320,
        missileGuidanceTimeS: 35,
        explosiveType: "OKFOL",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.5
      }
    ]
  },
  {
    id: "152mm_9m133fm_3",
    designation: "9M133FM-3",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-VT",
    damage: "explosion_big",
    armor: "armor_middle",
    performances: [

      {
        id: "152mm_9m133fm_3_ussr_bmp_2m",
        vehicleId: "ussr_bmp_2m",
        vehicleName: "BMP-2M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 28,
        penetrationMm: 61.2,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 10,
        maximumSpeedMs: 320,
        missileGuidanceTimeS: 40,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6,
        tntEquivalentKg: 9.2
      }
    ]
  },
  {
    id: "152mm_bp_540",
    designation: "BP-540",
    category: "Chemical",
    family: "HEAT",
    variant: "HEAT",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "152mm_bp_540_ussr_2s19_m1",
        vehicleId: "ussr_2s19_m1",
        vehicleName: "2S19M1",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.4,
        penetrationMm: 39.5,
        muzzleVelocityMs: 700,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      },

      {
        id: "152mm_bp_540_ussr_2s19_m2",
        vehicleId: "ussr_2s19_m2",
        vehicleName: "2S19M2",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.4,
        penetrationMm: 39.5,
        muzzleVelocityMs: 700,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      },

      {
        id: "152mm_bp_540_ussr_2s3m",
        vehicleId: "ussr_2s3m",
        vehicleName: "2S3M",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.4,
        penetrationMm: 39.5,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      },

      {
        id: "152mm_bp_540_ussr_isu_152",
        vehicleId: "ussr_isu_152",
        vehicleName: "ISU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.4,
        penetrationMm: 39.5,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      },

      {
        id: "152mm_bp_540_ussr_object_268",
        vehicleId: "ussr_object_268",
        vehicleName: "Object 268",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 27.4,
        penetrationMm: 39.5,
        muzzleVelocityMs: 770,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 3.8,
        tntEquivalentKg: 4.8
      }
    ]
  },
  {
    id: "152mm_br_540",
    designation: "BR-540",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [

      {
        id: "152mm_br_540_ussr_isu_152",
        vehicleId: "ussr_isu_152",
        vehicleName: "ISU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 152,
        projectileMassKg: 48.8,
        penetrationMm: 11,
        muzzleVelocityMs: 600,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540_ussr_su_152",
        vehicleId: "ussr_su_152",
        vehicleName: "SU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 48.8,
        penetrationMm: 11,
        muzzleVelocityMs: 600,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      }
    ]
  },
  {
    id: "152mm_br_540b",
    designation: "BR-540B",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "152mm_br_540b_ussr_2s19_m1",
        vehicleId: "ussr_2s19_m1",
        vehicleName: "2S19M1",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.0",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 610,
        vehicleOperator: "Russia",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540b_ussr_2s19_m2",
        vehicleId: "ussr_2s19_m2",
        vehicleName: "2S19M2",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.3",
          SB: "7.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 610,
        vehicleOperator: "Russia",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540b_ussr_2s3m",
        vehicleId: "ussr_2s3m",
        vehicleName: "2S3M",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 600,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540b_ussr_isu_152",
        vehicleId: "ussr_isu_152",
        vehicleName: "ISU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 600,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540b_ussr_object_268",
        vehicleId: "ussr_object_268",
        vehicleName: "Object 268",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      },

      {
        id: "152mm_br_540b_ussr_su_152",
        vehicleId: "ussr_su_152",
        vehicleName: "SU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 152,
        projectileMassKg: 49,
        penetrationMm: 11,
        muzzleVelocityMs: 600,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 19,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.48,
        tntEquivalentKg: 0.739
      }
    ]
  },
  {
    id: "152mm_of_540",
    designation: "OF-540",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "152mm_of_540_ussr_2s3m",
        vehicleId: "ussr_2s3m",
        vehicleName: "2S3M",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 48.6,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.9
      },

      {
        id: "152mm_of_540_ussr_isu_152",
        vehicleId: "ussr_isu_152",
        vehicleName: "ISU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 48.6,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.9
      },

      {
        id: "152mm_of_540_ussr_object_268",
        vehicleId: "ussr_object_268",
        vehicleName: "Object 268",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.3",
          RB: "7.0",
          SB: "7.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 48.6,
        muzzleVelocityMs: 750,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.9
      },

      {
        id: "152mm_of_540_ussr_su_152",
        vehicleId: "ussr_su_152",
        vehicleName: "SU-152",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.0",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 152,
        projectileMassKg: 43.6,
        penetrationMm: 48.6,
        muzzleVelocityMs: 655,
        fuzeDelayM: 0.3,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 5.9
      }
    ]
  },
  {
    id: "155mm_9m123",
    designation: "9M123",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-Tandem",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "155mm_9m123_ussr_9p157",
        vehicleId: "ussr_9p157",
        vehicleName: "Khrizantema-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 155,
        projectileMassKg: 46,
        penetrationMm: 50.8,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.01,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 20,
        explosiveType: "A-IX-2",
        explosiveMassKg: 4,
        tntEquivalentKg: 6.2
      }
    ]
  },
  {
    id: "155mm_9m123f",
    designation: "9M123F",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM-HE",
    damage: "explosion_big",
    armor: "armor_middle",
    performances: [

      {
        id: "155mm_9m123f_ussr_9p157",
        vehicleId: "ussr_9p157",
        vehicleName: "Khrizantema-S",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "9.7",
          RB: "9.7",
          SB: "9.7"
        },
        damage: "explosion_big",
        armor: "armor_middle",
        caliberMm: 155,
        projectileMassKg: 46,
        penetrationMm: 61.2,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Beam riding",
        launchRangeKm: 6,
        maximumSpeedMs: 550,
        missileGuidanceTimeS: 20,
        explosiveType: "A-IX-2",
        explosiveMassKg: 6,
        tntEquivalentKg: 9.2
      }
    ]
  },
  {
    id: "180mm_3m7",
    designation: "3M7",
    category: "Chemical",
    family: "Guided-Missiles",
    variant: "ATGM",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "180mm_3m7_ussr_it_1",
        vehicleId: "ussr_it_1",
        vehicleName: "IT-1",
        vehicleTechTree: "USSR",
        vehicleRank: "VI",
        vehicleBr:
        {
          AB: "8.7",
          RB: "8.7",
          SB: "8.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 180,
        projectileMassKg: 54,
        penetrationMm: 35.4,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        guidance: "Semi-Automatic (SACLOS)",
        launchRangeKm: 3.3,
        maximumSpeedMs: 224,
        missileGuidanceTimeS: 15,
        explosiveType: "A-IX-1",
        explosiveMassKg: 2.5,
        tntEquivalentKg: 3.2
      }
    ]
  },
  {
    id: "300mm_m_31_uk",
    designation: "M-31-UK",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [

      {
        id: "300mm_m_31_uk_ussr_bm_31_12",
        vehicleId: "ussr_bm_31_12",
        vehicleName: "BM-31-12",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 300,
        projectileMassKg: 91.5,
        penetrationMm: 66.3,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 245,
        explosiveType: "TNT",
        explosiveMassKg: 28.9
      }
    ]
  },
  {
    id: "30mm_vog_30",
    designation: "VOG-30",
    category: "Chemical",
    family: "High-Explosive",
    variant: "VOG",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "30mm_vog_30_ussr_bmp_2m",
        vehicleId: "ussr_bmp_2m",
        vehicleName: "BMP-2M",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.3",
          RB: "10.3",
          SB: "10.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 30,
        projectileMassKg: 0.275,
        penetrationMm: 3.3,
        muzzleVelocityMs: 185,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.042,
        tntEquivalentKg: 0.065
      },

      {
        id: "30mm_vog_30_ussr_bmpt",
        vehicleId: "ussr_bmpt",
        vehicleName: "BMPT",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "11.7",
          RB: "11.7",
          SB: "11.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 30,
        projectileMassKg: 0.275,
        penetrationMm: 3.3,
        muzzleVelocityMs: 185,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.042,
        tntEquivalentKg: 0.065
      }
    ]
  },
  {
    id: "425mm_tt_250",
    designation: "TT-250",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [

      {
        id: "425mm_tt_250_ussr_rbt_5",
        vehicleId: "ussr_rbt_5",
        vehicleName: "RBT-5",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 425,
        projectileMassKg: 250,
        penetrationMm: 82.8,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 135,
        explosiveType: "TNT",
        explosiveMassKg: 130
      }
    ]
  },
  {
    id: "45mm_br_240",
    designation: "BR-240",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "45mm_br_240_ussr_ba_11",
        vehicleId: "ussr_ba_11",
        vehicleName: "BA-11",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_bt_5",
        vehicleId: "ussr_bt_5",
        vehicleName: "BT-5",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_bt_7_1937",
        vehicleId: "ussr_bt_7_1937",
        vehicleName: "BT-7",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_bt_7_1937_td",
        vehicleId: "ussr_bt_7_1937_td",
        vehicleName: "BT-7 TD",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_bt_7_m",
        vehicleId: "ussr_bt_7_m",
        vehicleName: "BT-7M",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_kv_7_u13",
        vehicleId: "ussr_kv_7_u13",
        vehicleName: "KV-7 (U-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_kv_8",
        vehicleId: "ussr_kv_8",
        vehicleName: "KV-8",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_rbt_5",
        vehicleId: "ussr_rbt_5",
        vehicleName: "RBT-5",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_smk",
        vehicleId: "ussr_smk",
        vehicleName: "SMK",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_126sp",
        vehicleId: "ussr_t_126sp",
        vehicleName: "T-126",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_26_1940",
        vehicleId: "ussr_t_26_1940",
        vehicleName: "T-26",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_26_1940_1st_gvtbr",
        vehicleId: "ussr_t_26_1940_1st_gvtbr",
        vehicleName: "T-26 (1st Gv.T.Br.)",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_26e",
        vehicleId: "ussr_t_26e",
        vehicleName: "T-26E",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_35",
        vehicleId: "ussr_t_35",
        vehicleName: "T-35",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_50",
        vehicleId: "ussr_t_50",
        vehicleName: "T-50",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_70_1942",
        vehicleId: "ussr_t_70_1942",
        vehicleName: "T-70",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      },

      {
        id: "45mm_br_240_ussr_t_80",
        vehicleId: "ussr_t_80",
        vehicleName: "T-80",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 2.5,
        muzzleVelocityMs: 760,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.019,
        tntEquivalentKg: 0.029
      }
    ]
  },
  {
    id: "45mm_br_240p",
    designation: "BR-240P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "45mm_br_240p_ussr_kv_7_u13",
        vehicleId: "ussr_kv_7_u13",
        vehicleName: "KV-7 (U-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_kv_8",
        vehicleId: "ussr_kv_8",
        vehicleName: "KV-8",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_smk",
        vehicleId: "ussr_smk",
        vehicleName: "SMK",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_t_126sp",
        vehicleId: "ussr_t_126sp",
        vehicleName: "T-126",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_t_50",
        vehicleId: "ussr_t_50",
        vehicleName: "T-50",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_t_70_1942",
        vehicleId: "ussr_t_70_1942",
        vehicleName: "T-70",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      },

      {
        id: "45mm_br_240p_ussr_t_80",
        vehicleId: "ussr_t_80",
        vehicleName: "T-80",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 0.85,
        penetrationMm: 94,
        muzzleVelocityMs: 985
      }
    ]
  },
  {
    id: "45mm_br_240sp",
    designation: "BR-240SP",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_middle",
    performances: [

      {
        id: "45mm_br_240sp_ussr_ba_11",
        vehicleId: "ussr_ba_11",
        vehicleName: "BA-11",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_bt_5",
        vehicleId: "ussr_bt_5",
        vehicleName: "BT-5",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_bt_7_1937",
        vehicleId: "ussr_bt_7_1937",
        vehicleName: "BT-7",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_bt_7_1937_td",
        vehicleId: "ussr_bt_7_1937_td",
        vehicleName: "BT-7 TD",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_bt_7_m",
        vehicleId: "ussr_bt_7_m",
        vehicleName: "BT-7M",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_kv_7_u13",
        vehicleId: "ussr_kv_7_u13",
        vehicleName: "KV-7 (U-13)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_kv_8",
        vehicleId: "ussr_kv_8",
        vehicleName: "KV-8",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_rbt_5",
        vehicleId: "ussr_rbt_5",
        vehicleName: "RBT-5",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_smk",
        vehicleId: "ussr_smk",
        vehicleName: "SMK",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_126sp",
        vehicleId: "ussr_t_126sp",
        vehicleName: "T-126",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.0",
          RB: "3.0",
          SB: "3.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_26_1940",
        vehicleId: "ussr_t_26_1940",
        vehicleName: "T-26",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_26_1940_1st_gvtbr",
        vehicleId: "ussr_t_26_1940_1st_gvtbr",
        vehicleName: "T-26 (1st Gv.T.Br.)",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.0",
          RB: "1.0",
          SB: "1.0"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_26e",
        vehicleId: "ussr_t_26e",
        vehicleName: "T-26E",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_35",
        vehicleId: "ussr_t_35",
        vehicleName: "T-35",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_50",
        vehicleId: "ussr_t_50",
        vehicleName: "T-50",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.7",
          RB: "2.7",
          SB: "2.7"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_70_1942",
        vehicleId: "ussr_t_70_1942",
        vehicleName: "T-70",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      },

      {
        id: "45mm_br_240sp_ussr_t_80",
        vehicleId: "ussr_t_80",
        vehicleName: "T-80",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "damage",
        armor: "armor_middle",
        caliberMm: 45,
        projectileMassKg: 1.4,
        penetrationMm: 73,
        muzzleVelocityMs: 757
      }
    ]
  },
  {
    id: "45mm_o_240",
    designation: "O-240",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "45mm_o_240_ussr_kv_8",
        vehicleId: "ussr_kv_8",
        vehicleName: "KV-8",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 45,
        projectileMassKg: 2.1,
        penetrationMm: 4.2,
        muzzleVelocityMs: 335,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.4,
        explosiveType: "TNT",
        explosiveMassKg: 0.118
      },

      {
        id: "45mm_o_240_ussr_smk",
        vehicleId: "ussr_smk",
        vehicleName: "SMK",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.7",
          SB: "3.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 45,
        projectileMassKg: 2.1,
        penetrationMm: 4.2,
        muzzleVelocityMs: 335,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.4,
        explosiveType: "TNT",
        explosiveMassKg: 0.118
      },

      {
        id: "45mm_o_240_ussr_t_80",
        vehicleId: "ussr_t_80",
        vehicleName: "T-80",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 45,
        projectileMassKg: 2.1,
        penetrationMm: 4.2,
        muzzleVelocityMs: 335,
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.4,
        explosiveType: "TNT",
        explosiveMassKg: 0.118
      }
    ]
  },
  {
    id: "57mm_3ubm22",
    designation: "3UBM22",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APFSDS",
    damage: "damage",
    armor: "armor_big",
    performances: [

      {
        id: "57mm_3ubm22_ussr_2s38",
        vehicleId: "ussr_2s38",
        vehicleName: "2S38",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "damage",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 0.95,
        penetrationMm: 224,
        muzzleVelocityMs: 1500,
        vehicleOperator: "Russia"
      }
    ]
  },
  {
    id: "57mm_3uo8",
    designation: "3UO8",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE-VT",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "57mm_3uo8_ussr_2s38",
        vehicleId: "ussr_2s38",
        vehicleName: "2S38",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 5.3,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.1,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.15,
        tntEquivalentKg: 0.231
      }
    ]
  },
  {
    id: "57mm_br_271m",
    designation: "BR-271M",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [

      {
        id: "57mm_br_271m_ussr_asu_57",
        vehicleId: "ussr_asu_57",
        vehicleName: "ASU-57",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "3.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 2.3,
        muzzleVelocityMs: 1020,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.02
      }
    ]
  },
  {
    id: "57mm_br_271n",
    designation: "BR-271N",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "57mm_br_271n_ussr_asu_57",
        vehicleId: "ussr_asu_57",
        vehicleName: "ASU-57",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "3.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 2.4,
        penetrationMm: 159,
        muzzleVelocityMs: 1125
      }
    ]
  },
  {
    id: "57mm_br_271p",
    designation: "BR-271P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "57mm_br_271p_ussr_t_34_57_1943",
        vehicleId: "ussr_t_34_57_1943",
        vehicleName: "T-34-57 (1943)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 1.8,
        penetrationMm: 177,
        muzzleVelocityMs: 1270
      }
    ]
  },
  {
    id: "57mm_br_271sp",
    designation: "BR-271SP",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APBC",
    damage: "damage",
    armor: "armor_small",
    performances: [

      {
        id: "57mm_br_271sp_ussr_asu_57",
        vehicleId: "ussr_asu_57",
        vehicleName: "ASU-57",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "3.7",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "damage",
        armor: "armor_small",
        caliberMm: 57,
        projectileMassKg: 3.1,
        penetrationMm: 142,
        muzzleVelocityMs: 975
      }
    ]
  },
  {
    id: "57mm_br_281u",
    designation: "BR-281U",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_big",
    performances: [

      {
        id: "57mm_br_281u_ussr_2s38",
        vehicleId: "ussr_2s38",
        vehicleName: "2S38",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 2.3,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Russia",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.02
      },

      {
        id: "57mm_br_281u_ussr_pt_76_57",
        vehicleId: "ussr_pt_76_57",
        vehicleName: "PT-76-57",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 2.3,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Russia",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 9,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.013,
        tntEquivalentKg: 0.02
      }
    ]
  },
  {
    id: "57mm_or_281u",
    designation: "OR-281U",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "57mm_or_281u_ussr_2s38",
        vehicleId: "ussr_2s38",
        vehicleName: "2S38",
        vehicleTechTree: "USSR",
        vehicleRank: "VII",
        vehicleBr:
        {
          AB: "10.7",
          RB: "10.7",
          SB: "10.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 5.4,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.153,
        tntEquivalentKg: 0.236
      },

      {
        id: "57mm_or_281u_ussr_pt_76_57",
        vehicleId: "ussr_pt_76_57",
        vehicleName: "PT-76-57",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "7.7",
          RB: "8.3",
          SB: "8.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 57,
        projectileMassKg: 2.8,
        penetrationMm: 5.4,
        muzzleVelocityMs: 1000,
        vehicleOperator: "Russia",
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.153,
        tntEquivalentKg: 0.236
      }
    ]
  },
  {
    id: "76mm_bk_354m",
    designation: "BK-354M",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "76mm_bk_354m_ussr_pt_76b",
        vehicleId: "ussr_pt_76b",
        vehicleName: "PT-76B",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 76,
        projectileMassKg: 7,
        penetrationMm: 8.9,
        muzzleVelocityMs: 700,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.44,
        tntEquivalentKg: 0.55
      }
    ]
  },
  {
    id: "76mm_br_354",
    designation: "BR-354",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "76mm_br_354_ussr_pt_76b",
        vehicleId: "ussr_pt_76b",
        vehicleName: "PT-76B",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 76,
        projectileMassKg: 6.5,
        penetrationMm: 2.9,
        muzzleVelocityMs: 655,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.032,
        tntEquivalentKg: 0.049
      }
    ]
  },
  {
    id: "76mm_br_354n",
    designation: "BR-354N",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "76mm_br_354n_ussr_pt_76b",
        vehicleId: "ussr_pt_76b",
        vehicleName: "PT-76B",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 76,
        projectileMassKg: 3.3,
        penetrationMm: 152,
        muzzleVelocityMs: 950
      }
    ]
  },
  {
    id: "76mm_d_350a",
    designation: "D-350A",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Smoke",
    damage: null,
    armor: null,
    performances: [

      {
        id: "76mm_d_350a_ussr_a_12_mk_2_matilda_2a_f96",
        vehicleId: "ussr_a_12_mk_2_matilda_2a_f96",
        vehicleName: "▂MK-II \"Matilda\"",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "3.3",
          SB: "3.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_bt_7a_f32",
        vehicleId: "ussr_bt_7a_f32",
        vehicleName: "BT-7A (F-32)",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "3.7",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 612,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_kv_1_zis_5",
        vehicleId: "ussr_kv_1_zis_5",
        vehicleName: "KV-1 (ZiS-5)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.7",
          RB: "4.7",
          SB: "4.7"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_kv_1e",
        vehicleId: "ussr_kv_1e",
        vehicleName: "KV-1E",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 612,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_kv_1s",
        vehicleId: "ussr_kv_1s",
        vehicleName: "KV-1S",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_su_76d",
        vehicleId: "ussr_su_76d",
        vehicleName: "SU-76D",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.3",
          RB: "2.3",
          SB: "2.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_su_76m_1943",
        vehicleId: "ussr_su_76m_1943",
        vehicleName: "SU-76M",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_su_76m_5st_kav_corps",
        vehicleId: "ussr_su_76m_5st_kav_corps",
        vehicleName: "SU-76M (5th Gv.Kav.Corps)",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "2.0",
          RB: "2.0",
          SB: "2.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_t_34_1941",
        vehicleId: "ussr_t_34_1941",
        vehicleName: "T-34 (1941)",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_t_34_1941_cast_turret",
        vehicleId: "ussr_t_34_1941_cast_turret",
        vehicleName: "T-34 (1st Gv.T.Br.)",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_t_34_1942",
        vehicleId: "ussr_t_34_1942",
        vehicleName: "T-34 (1942)",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_t_34e",
        vehicleId: "ussr_t_34e",
        vehicleName: "T-34E",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      },

      {
        id: "76mm_d_350a_ussr_t_34e_stz",
        vehicleId: "ussr_t_34e_stz",
        vehicleName: "T-34E STZ",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: null,
        armor: null,
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 2.9,
        muzzleVelocityMs: 680,
        fuzeDelayM: 0.4,
        fuzeSensitivityMm: 0.5,
        explosiveType: "Smoke composition",
        explosiveMassKg: 0.05
      }
    ]
  },
  {
    id: "76mm_sh_353",
    designation: "Sh-353",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Shrapnel",
    damage: "explosion_small",
    armor: "armor_vsmall",
    performances: [

      {
        id: "76mm_sh_353_ussr_t_35",
        vehicleId: "ussr_t_35",
        vehicleName: "T-35",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_small",
        armor: "armor_vsmall",
        caliberMm: 76,
        projectileMassKg: 6.4,
        penetrationMm: 3.7,
        muzzleVelocityMs: 381,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.085
      }
    ]
  },
  {
    id: "82mm_m_8",
    designation: "M-8",
    category: "Chemical",
    family: "High-Explosive",
    variant: "Rocket",
    damage: "explosion_big",
    armor: "armor_big",
    performances: [

      {
        id: "82mm_m_8_ussr_bm_8_24",
        vehicleId: "ussr_bm_8_24",
        vehicleName: "BM-8-24",
        vehicleTechTree: "USSR",
        vehicleRank: "I",
        vehicleBr:
        {
          AB: "1.3",
          RB: "1.3",
          SB: "1.3"
        },
        damage: "explosion_big",
        armor: "armor_big",
        caliberMm: 82,
        projectileMassKg: 7.9,
        penetrationMm: 9.4,
        fuzeSensitivityMm: 0.1,
        maximumSpeedMs: 315,
        explosiveType: "TNT",
        explosiveMassKg: 0.6
      }
    ]
  },
  {
    id: "85mm_3bk7",
    designation: "3BK7",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "85mm_3bk7_ussr_asu_85",
        vehicleId: "ussr_asu_85",
        vehicleName: "ASU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 7.2,
        penetrationMm: 15.8,
        muzzleVelocityMs: 925,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      },

      {
        id: "85mm_3bk7_ussr_object_906",
        vehicleId: "ussr_object_906",
        vehicleName: "Object 906",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 7.2,
        penetrationMm: 15.8,
        muzzleVelocityMs: 925,
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "A-IX-1",
        explosiveMassKg: 0.935,
        tntEquivalentKg: 1.2
      }
    ]
  },
  {
    id: "85mm_br_365",
    designation: "BR-365",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "85mm_br_365_ussr_is_1",
        vehicleId: "ussr_is_1",
        vehicleName: "IS-1",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_is_1_kit_3rank",
        vehicleId: "ussr_is_1_kit_3rank",
        vehicleName: "IS-1 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_kv_220",
        vehicleId: "ussr_kv_220",
        vehicleName: "KV-220",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_middle",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_kv_85",
        vehicleId: "ussr_kv_85",
        vehicleName: "KV-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_su_85_1943",
        vehicleId: "ussr_su_85_1943",
        vehicleName: "SU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_su_85a",
        vehicleId: "ussr_su_85a",
        vehicleName: "SU-85A",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_su_85m",
        vehicleId: "ussr_su_85m",
        vehicleName: "SU-85M",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85_d_5t",
        vehicleId: "ussr_t_34_85_d_5t",
        vehicleName: "T-34-85 (D-5T)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85_stp_s53",
        vehicleId: "ussr_t_34_85_stp_s53",
        vehicleName: "T-34-85 (STP)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85_zis_53",
        vehicleId: "ussr_t_34_85_zis_53",
        vehicleName: "T-34-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85_zis_53_kit_3rank",
        vehicleId: "ussr_t_34_85_zis_53_kit_3rank",
        vehicleName: "T-34-85 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85_zis_53_v80",
        vehicleId: "ussr_t_34_85_zis_53_v80",
        vehicleName: "T-34-85 \"Partisan\"",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_34_85e",
        vehicleId: "ussr_t_34_85e",
        vehicleName: "T-34-85E",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      },

      {
        id: "85mm_br_365_ussr_t_44_po",
        vehicleId: "ussr_t_44_po",
        vehicleName: "T-44 (FM)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      }
    ]
  },
  {
    id: "85mm_br_365k",
    designation: "BR-365K",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHE",
    damage: "explosion_small",
    armor: "armor_middle",
    performances: [

      {
        id: "85mm_br_365k_ussr_is_1",
        vehicleId: "ussr_is_1",
        vehicleName: "IS-1",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_is_1_kit_3rank",
        vehicleId: "ussr_is_1_kit_3rank",
        vehicleName: "IS-1 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_kv_85",
        vehicleId: "ussr_kv_85",
        vehicleName: "KV-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_su_85_1943",
        vehicleId: "ussr_su_85_1943",
        vehicleName: "SU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_su_85a",
        vehicleId: "ussr_su_85a",
        vehicleName: "SU-85A",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_su_85m",
        vehicleId: "ussr_su_85m",
        vehicleName: "SU-85M",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85_d_5t",
        vehicleId: "ussr_t_34_85_d_5t",
        vehicleName: "T-34-85 (D-5T)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85_stp_s53",
        vehicleId: "ussr_t_34_85_stp_s53",
        vehicleName: "T-34-85 (STP)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85_zis_53",
        vehicleId: "ussr_t_34_85_zis_53",
        vehicleName: "T-34-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85_zis_53_kit_3rank",
        vehicleId: "ussr_t_34_85_zis_53_kit_3rank",
        vehicleName: "T-34-85 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85_zis_53_v80",
        vehicleId: "ussr_t_34_85_zis_53_v80",
        vehicleName: "T-34-85 \"Partisan\"",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_34_85e",
        vehicleId: "ussr_t_34_85e",
        vehicleName: "T-34-85E",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_365k_ussr_t_44_po",
        vehicleId: "ussr_t_44_po",
        vehicleName: "T-44 (FM)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      }
    ]
  },
  {
    id: "85mm_br_365p",
    designation: "BR-365P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "85mm_br_365p_ussr_is_1",
        vehicleId: "ussr_is_1",
        vehicleName: "IS-1",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_is_1_kit_3rank",
        vehicleId: "ussr_is_1_kit_3rank",
        vehicleName: "IS-1 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_su_85a",
        vehicleId: "ussr_su_85a",
        vehicleName: "SU-85A",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_su_85m",
        vehicleId: "ussr_su_85m",
        vehicleName: "SU-85M",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_34_85_stp_s53",
        vehicleId: "ussr_t_34_85_stp_s53",
        vehicleName: "T-34-85 (STP)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_34_85_zis_53",
        vehicleId: "ussr_t_34_85_zis_53",
        vehicleName: "T-34-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_34_85_zis_53_kit_3rank",
        vehicleId: "ussr_t_34_85_zis_53_kit_3rank",
        vehicleName: "T-34-85 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_34_85_zis_53_v80",
        vehicleId: "ussr_t_34_85_zis_53_v80",
        vehicleName: "T-34-85 \"Partisan\"",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_34_85e",
        vehicleId: "ussr_t_34_85e",
        vehicleName: "T-34-85E",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      },

      {
        id: "85mm_br_365p_ussr_t_44_po",
        vehicleId: "ussr_t_44_po",
        vehicleName: "T-44 (FM)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5,
        penetrationMm: 195,
        muzzleVelocityMs: 1050
      }
    ]
  },
  {
    id: "85mm_br_367",
    designation: "BR-367",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_middle",
    performances: [

      {
        id: "85mm_br_367_ussr_t_34_85_stp_s53",
        vehicleId: "ussr_t_34_85_stp_s53",
        vehicleName: "T-34-85 (STP)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_367_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_367_ussr_t_44_po",
        vehicleId: "ussr_t_44_po",
        vehicleName: "T-44 (FM)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      }
    ]
  },
  {
    id: "85mm_br_367p",
    designation: "BR-367P",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "85mm_br_367p_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 5.3,
        penetrationMm: 208,
        muzzleVelocityMs: 1020
      }
    ]
  },
  {
    id: "85mm_br_372",
    designation: "BR-372",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_middle",
    armor: "armor_middle",
    performances: [

      {
        id: "85mm_br_372_ussr_asu_85",
        vehicleId: "ussr_asu_85",
        vehicleName: "ASU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.3,
        penetrationMm: 3.5,
        muzzleVelocityMs: 1040,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      },

      {
        id: "85mm_br_372_ussr_object_906",
        vehicleId: "ussr_object_906",
        vehicleName: "Object 906",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_middle",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.3,
        penetrationMm: 3.5,
        muzzleVelocityMs: 1040,
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      }
    ]
  },
  {
    id: "85mm_o_365k",
    designation: "O-365K",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "85mm_o_365k_ussr_is_1",
        vehicleId: "ussr_is_1",
        vehicleName: "IS-1",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_is_1_kit_3rank",
        vehicleId: "ussr_is_1_kit_3rank",
        vehicleName: "IS-1 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_kv_220",
        vehicleId: "ussr_kv_220",
        vehicleName: "KV-220",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.0",
          SB: "6.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_kv_85",
        vehicleId: "ussr_kv_85",
        vehicleName: "KV-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_su_85_1943",
        vehicleId: "ussr_su_85_1943",
        vehicleName: "SU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "4.3",
          RB: "4.3",
          SB: "4.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_su_85a",
        vehicleId: "ussr_su_85a",
        vehicleName: "SU-85A",
        vehicleTechTree: "USSR",
        vehicleRank: "II",
        vehicleBr:
        {
          AB: "4.0",
          RB: "4.0",
          SB: "4.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_su_85m",
        vehicleId: "ussr_su_85m",
        vehicleName: "SU-85M",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.0",
          RB: "5.0",
          SB: "5.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85_d_5t",
        vehicleId: "ussr_t_34_85_d_5t",
        vehicleName: "T-34-85 (D-5T)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.3",
          RB: "5.3",
          SB: "5.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85_stp_s53",
        vehicleId: "ussr_t_34_85_stp_s53",
        vehicleName: "T-34-85 (STP)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85_zis_53",
        vehicleId: "ussr_t_34_85_zis_53",
        vehicleName: "T-34-85",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85_zis_53_kit_3rank",
        vehicleId: "ussr_t_34_85_zis_53_kit_3rank",
        vehicleName: "T-34-85 ('45)",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85_zis_53_v80",
        vehicleId: "ussr_t_34_85_zis_53_v80",
        vehicleName: "T-34-85 \"Partisan\"",
        vehicleTechTree: "USSR",
        vehicleRank: "III",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_34_85e",
        vehicleId: "ussr_t_34_85e",
        vehicleName: "T-34-85E",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "5.7",
          RB: "5.7",
          SB: "5.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_44",
        vehicleId: "ussr_t_44",
        vehicleName: "T-44",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      },

      {
        id: "85mm_o_365k_ussr_t_44_po",
        vehicleId: "ussr_t_44_po",
        vehicleName: "T-44 (FM)",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      }
    ]
  },
  {
    id: "85mm_of_372",
    designation: "OF-372",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "85mm_of_372_ussr_asu_85",
        vehicleId: "ussr_asu_85",
        vehicleName: "ASU-85",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.3",
          RB: "6.3",
          SB: "6.3"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.7,
        penetrationMm: 11,
        muzzleVelocityMs: 1010,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.74
      },

      {
        id: "85mm_of_372_ussr_object_906",
        vehicleId: "ussr_object_906",
        vehicleName: "Object 906",
        vehicleTechTree: "USSR",
        vehicleRank: "V",
        vehicleBr:
        {
          AB: "8.0",
          RB: "8.0",
          SB: "8.0"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.7,
        penetrationMm: 11,
        muzzleVelocityMs: 1010,
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.74
      }
    ]
  },
  {
    id: "85mm_type_56_apbc",
    designation: "Type 56 APBC",
    category: "Kinetic",
    family: "HE-filled-AP",
    variant: "APHEBC",
    damage: "explosion_middle",
    armor: "armor_small",
    performances: [

      {
        id: "85mm_type_56_apbc_ussr_type_62",
        vehicleId: "ussr_type_62",
        vehicleName: "▂Type 62",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_middle",
        armor: "armor_small",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 4.6,
        muzzleVelocityMs: 792,
        vehicleOperator: "China",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "TNT",
        explosiveMassKg: 0.164
      }
    ]
  },
  {
    id: "85mm_type_56_apcbc",
    designation: "Type 56 APCBC",
    category: "Kinetic",
    family: "Solid-AP",
    variant: "APCBC",
    damage: "explosion_small",
    armor: "armor_middle",
    performances: [

      {
        id: "85mm_type_56_apcbc_ussr_type_62",
        vehicleId: "ussr_type_62",
        vehicleName: "▂Type 62",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 9.2,
        penetrationMm: 3.5,
        muzzleVelocityMs: 792,
        vehicleOperator: "China",
        fuzeDelayM: 1.2,
        fuzeSensitivityMm: 14,
        explosiveType: "A-IX-2",
        explosiveMassKg: 0.05,
        tntEquivalentKg: 0.077
      }
    ]
  },
  {
    id: "85mm_type_56_he",
    designation: "Type 56 HE",
    category: "Chemical",
    family: "High-Explosive",
    variant: "HE",
    damage: "explosion_big",
    armor: "armor_vsmall",
    performances: [

      {
        id: "85mm_type_56_he_ussr_type_62",
        vehicleId: "ussr_type_62",
        vehicleName: "▂Type 62",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "explosion_big",
        armor: "armor_vsmall",
        caliberMm: 85,
        projectileMassKg: 9.5,
        penetrationMm: 11,
        muzzleVelocityMs: 785,
        vehicleOperator: "China",
        fuzeDelayM: 0.2,
        fuzeSensitivityMm: 0.1,
        explosiveType: "TNT",
        explosiveMassKg: 0.741
      }
    ]
  },
  {
    id: "85mm_type_56_heat_fs",
    designation: "Type 56 HEAT-FS",
    category: "Chemical",
    family: "HEAT",
    variant: "HEATFS",
    damage: "damage_small",
    armor: "armor_big",
    performances: [

      {
        id: "85mm_type_56_heat_fs_ussr_type_62",
        vehicleId: "ussr_type_62",
        vehicleName: "▂Type 62",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_big",
        caliberMm: 85,
        projectileMassKg: 7,
        penetrationMm: 11.9,
        muzzleVelocityMs: 845,
        vehicleOperator: "China",
        fuzeDelayM: 0.05,
        fuzeSensitivityMm: 0.1,
        explosiveType: "Pentolite",
        explosiveMassKg: 0.68,
        tntEquivalentKg: 0.823
      }
    ]
  },
  {
    id: "85mm_type_56_hvap",
    designation: "Type 56 HVAP",
    category: "Kinetic",
    family: "Sub-caliber-AP",
    variant: "APCR",
    damage: "damage_small",
    armor: "armor_middle",
    performances: [

      {
        id: "85mm_type_56_hvap_ussr_type_62",
        vehicleId: "ussr_type_62",
        vehicleName: "▂Type 62",
        vehicleTechTree: "USSR",
        vehicleRank: "IV",
        vehicleBr:
        {
          AB: "6.7",
          RB: "6.7",
          SB: "6.7"
        },
        damage: "damage_small",
        armor: "armor_middle",
        caliberMm: 85,
        projectileMassKg: 5.3,
        penetrationMm: 208,
        muzzleVelocityMs: 1020,
        vehicleOperator: "China"
      }
    ]
  },
];
