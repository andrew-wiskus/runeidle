import { Item, ITEMS } from 'models/Item/ItemConfig';
import { SkillID } from './Skill_ID';

export interface ProductionItem {
	item: Item,
	amount: number 
}

export interface SkillProduction {
	id: string;
	productionName: string;
	outputItem:  ProductionItem[];
	xpPerOutput: { skill: SkillID, amount: number }[]
	requiredItem: ProductionItem[];
	levelRequired: number;
	ticksToComplete: number;
	currentTick: number;
	currentXP: number;
}

export const SKILL_PRODUCTION_CONFIG = {
	[SkillID.FLETCHING]: [
		{
			id: 'P_ARROW_SHAFT',
			productionName: 'Arrow Shaft',
			outputItem: [
				{ item: ITEMS.COMMON_ARROW_SHAFT, amount: 15 }
			],
			xpPerOutput: [
				{ skill: SkillID.FLETCHING, amount: 10 }
			],
			requiredItem: [
				{ item: ITEMS.COMMON_LOG, amount: 1}
			],
			levelRequired: 1,
			ticksToComplete: 1000,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SHORT_BOW',
			productionName: 'Short Bow',
			outputItem: [
				{ item: ITEMS.COMMON_SHORT_BOW, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.FLETCHING, amount: 25 }
			],
			requiredItem: [
				{ item: ITEMS.COMMON_LOG, amount: 1}, 
				{ item: ITEMS.BOW_STRING, amount: 1}
			],
			levelRequired: 5,
			ticksToComplete: 2500,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_IRON_ARROW',
			productionName: 'Iron Arrows',
			outputItem: [
				{ item: ITEMS.IRON_ARROW, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.FLETCHING, amount: 35 }
			],
			requiredItem: [
				{ item: ITEMS.COMMON_ARROW_SHAFT, amount: 1}, 
				{ item: ITEMS.IRON_ARROW_HEAD, amount: 1},
				{ item: ITEMS.FEATHER, amount: 1 }
			],
			levelRequired: 15,
			ticksToComplete: 600,
			currentTick: 0,
			currentXP: 0,
		},

	],
	[SkillID.WOODCUTTING]: [
		{
			id: 'P_LOG',
			productionName: 'Small forest',
			outputItem: [
				{ item: ITEMS.COMMON_LOG, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.WOODCUTTING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 500,
			currentTick: 0,
			currentXP: 0,
		}
	],
	[SkillID.MINING]: [
		{
			id: 'P_STONE',
			productionName: 'Stone Quarry',
			outputItem: [
				{ item: ITEMS.STONE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.MINING, amount: 5 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 650,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SIMPLE_RUNE_ESSENCE',
			productionName: 'Magic Mines Level -1',
			outputItem: [
				{ item: ITEMS.SIMPLE_RUNE_ESSENCE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.MINING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 950,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_IRON_MINES',
			productionName: 'Iron Mines',
			outputItem: [
				{ item: ITEMS.IRON_ORE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.MINING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 10,
			ticksToComplete: 1250,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.SMITHING]: [
		{
			id: 'P_SMELT_IRON',
			productionName: 'Smelt Iron',
			outputItem: [
				{ item: ITEMS.IRON_BAR, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.SMITHING, amount: 25 }
			],
			requiredItem: [
				{ item: ITEMS.IRON_ORE, amount: 5}, 
				{ item: ITEMS.HEAT, amount: 10}
			],
			levelRequired: 1,
			ticksToComplete: 1250,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_IRON_NAIL',
			productionName: 'Iron Nail',
			outputItem: [
				{ item: ITEMS.IRON_NAIL, amount: 10 }
			],
			xpPerOutput: [
				{ skill: SkillID.SMITHING, amount: 15 }
			],
			requiredItem: [
				{ item: ITEMS.IRON_BAR, amount: 1}
			],
			levelRequired: 1,
			ticksToComplete: 2000,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_IRON_WIRE',
			productionName: 'Iron Wire',
			outputItem: [
				{ item: ITEMS.IRON_WIRE, amount: 2 }
			],
			xpPerOutput: [
				{ skill: SkillID.SMITHING, amount: 15 }
			],
			requiredItem: [
				{ item: ITEMS.IRON_BAR, amount: 1}
			],
			levelRequired: 10,
			ticksToComplete: 2000,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_IRON_ARROW_HEAD',
			productionName: 'Iron Arrow Heads',
			outputItem: [
				{ item: ITEMS.IRON_ARROW_HEAD, amount: 15 }
			],
			xpPerOutput: [
				{ skill: SkillID.SMITHING, amount: 35 }
			],
			requiredItem: [
				{ item: ITEMS.IRON_BAR, amount: 1}
			],
			levelRequired: 15,
			ticksToComplete: 4000,
			currentTick: 0,
			currentXP: 0,
		},
		
	],
	[SkillID.FISHING]: [
		{
			id: 'P_SHRIMP_SHORE',
			productionName: 'Newbie Shore',
			outputItem: [
				{ item: ITEMS.RAW_SHRIMP, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.FISHING, amount: 18 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 1800,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SMALL_RIVER',
			productionName: 'Small River',
			outputItem: [
				{ item: ITEMS.RAW_SALMON, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.FISHING, amount: 37 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 2400,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.CRAFTING]: [
		{
			id: 'P_BOW_STRING',
			productionName: 'Bow String',
			outputItem: [
				{ item: ITEMS.BOW_STRING, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.CRAFTING, amount: 10 }
			],
			requiredItem: [
				{item: ITEMS.FLAX, amount: 1}
			],
			levelRequired: 1,
			ticksToComplete: 1500,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.GATHERING]: [
		{
			id: 'P_PICK_FLAX',
			productionName: 'Pick Flax',
			outputItem: [
				{ item: ITEMS.FLAX, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.GATHERING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 900,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_LONG_GRASS',
			productionName: 'Pick Long Grass',
			outputItem: [
				{ item: ITEMS.LONG_GRASS, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.GATHERING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 10,
			ticksToComplete: 2200,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_GATHER_HOPS',
			productionName: 'Gather Hops Seed',
			outputItem: [
				{ item: ITEMS.HOPS_SEED, amount: 5 }
			],
			xpPerOutput: [
				{ skill: SkillID.GATHERING, amount: 10 }
			],
			requiredItem: [],
			levelRequired: 5,
			ticksToComplete: 2200,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.FIREMAKING]: [
		{
			id: 'P_TINY_FIRE',
			productionName: 'Tiny Fire',
			outputItem: [
				{ item: ITEMS.HEAT, amount: 10 }
			],
			xpPerOutput: [
				{ skill: SkillID.FIREMAKING, amount: 10 }
			],
			requiredItem: [
				{item: ITEMS.COMMON_LOG, amount: 1}
			],
			levelRequired: 1,
			ticksToComplete: 1000,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SMALL_BONES',
			productionName: 'Burn Small Bones',
			outputItem: [
				{ item: ITEMS.CHARRED_BONE, amount: 1 },
				{ item: ITEMS.HEAT, amount: 10 }
			],
			xpPerOutput: [
				{ skill: SkillID.FIREMAKING, amount: 10 }
			],
			requiredItem: [
				{item: ITEMS.SMALL_BONES, amount: 3 }
			],
			levelRequired: 1,
			ticksToComplete: 1000,
			currentTick: 0,
			currentXP: 0,
		},
		
	],
	[SkillID.COOKING]: [
		{
			id: 'P_SHRIMP',
			productionName: 'Shrimp',
			outputItem: [
				{ item: ITEMS.COOKED_SHRIMP, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.COOKING, amount: 25 }
			],
			requiredItem: [
				{item: ITEMS.RAW_SHRIMP, amount: 1}
			],
			levelRequired: 1,
			ticksToComplete: 1000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.DIVINATION]: [
		{
			id: 'P_CONSUME_FIRE',
			productionName: 'Consume Fire',
			outputItem: [
				{ item: ITEMS.FIRE_ESSENCE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.DIVINATION, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.HEAT, amount: 15}
			],
			levelRequired: 1,
			ticksToComplete: 1800,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_CONSUME_RIVER',
			productionName: 'Consume Rivers',
			outputItem: [
				{ item: ITEMS.WATER_ESSENCE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.DIVINATION, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.RAW_SALMON, amount: 15}
			],
			levelRequired: 1,
			ticksToComplete: 1800,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_CONSUME_GROUND',
			productionName: 'Consume Ground',
			outputItem: [
				{ item: ITEMS.EARTH_ESSENCE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.DIVINATION, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.STONE, amount: 15}
			],
			levelRequired: 1,
			ticksToComplete: 1800,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.RUNECRAFTING]: [
		{
			id: 'P_INFUSE_FIRE',
			productionName: 'Infuse Fire',
			outputItem: [
				{ item: ITEMS.FIRE_RUNE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.RUNECRAFTING, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.FIRE_ESSENCE, amount: 15}, 
				{item: ITEMS.SIMPLE_RUNE_ESSENCE, amount: 1 }
			],
			levelRequired: 1,
			ticksToComplete: 1100,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_INFUSE_WATER',
			productionName: 'Infuse Water',
			outputItem: [
				{ item: ITEMS.WATER_RUNE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.RUNECRAFTING, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.WATER_ESSENCE, amount: 15}, 
				{item: ITEMS.SIMPLE_RUNE_ESSENCE, amount: 1 }
			],
			levelRequired: 1,
			ticksToComplete: 1800,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_INFUSE_EARTH',
			productionName: 'Infuse Earth',
			outputItem: [
				{ item: ITEMS.EARTH_RUNE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.RUNECRAFTING, amount: 35 }
			],
			requiredItem: [
				{item: ITEMS.EARTH_ESSENCE, amount: 15}, 
				{item: ITEMS.SIMPLE_RUNE_ESSENCE, amount: 1 }
			],
			levelRequired: 1,
			ticksToComplete: 2100,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.CONSTRUCTION]: [
		{
			id: 'P_MAKE_PLANK',
			productionName: 'Make Planks',
			outputItem: [
				{ item: ITEMS.COMMON_PLANK, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.CONSTRUCTION, amount: 5 }
			],
			requiredItem: [
				{ item: ITEMS.COMMON_LOG, amount: 10}
			],
			levelRequired: 1,
			ticksToComplete: 1200,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SIMPLE_CHAIR',
			productionName: 'Simple Chair',
			outputItem: [
				{ item: ITEMS.SIMPLE_CHAIR, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.CONSTRUCTION, amount: 50 }
			],
			requiredItem: [
				{item: ITEMS.IRON_NAIL, amount: 20}, 
				{item: ITEMS.COMMON_PLANK, amount: 5 }
			],
			levelRequired: 1,
			ticksToComplete: 2200,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_SIMPLE_TABLE',
			productionName: 'Simple Table',
			outputItem: [
				{ item: ITEMS.SIMPLE_TABLE, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.CONSTRUCTION, amount: 100 }
			],
			requiredItem: [
				{item: ITEMS.IRON_NAIL, amount: 20}, 
				{item: ITEMS.COMMON_PLANK, amount: 8 }
			],
			levelRequired: 1,
			ticksToComplete: 4500,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.THIEVING]: [
		{
			id: 'P_PICKPOCKET',
			productionName: 'Pickpocket Citizens',
			outputItem: [
				{ item: ITEMS.GOLD_COIN, amount: 3 }
			],
			xpPerOutput: [
				{ skill: SkillID.THIEVING, amount: 5 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 1000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.POTION_MAKING]: [
		{
			id: 'P_SHODDY_BEER',
			productionName: 'Shoddy Beer',
			outputItem: [
				{ item: ITEMS.SHODDY_BEER, amount: 10 }
			],
			xpPerOutput: [
				{ skill: SkillID.POTION_MAKING, amount: 50 }
			],
			requiredItem: [
				{item: ITEMS.HOPS, amount: 300 }
			],
			levelRequired: 1,
			ticksToComplete: 12000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.INVENTION]: [
		{
			id: 'P_AUGMENT_SPEED_1',
			productionName: 'Augment Speed: S1',
			outputItem: [
				{ item: ITEMS.SPEED_AUGMENTATION_1, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.INVENTION, amount: 2500 }
			],
			requiredItem: [
				{item: ITEMS.BLADE_COMPONENT, amount: 15000 }
			],
			levelRequired: 1,
			ticksToComplete: 70000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.ENCHANTING]: [
		{
			id: 'P_INFERNAL_MINING',
			productionName: 'Infernal Mining: IM1',
			outputItem: [
				{ item: ITEMS.INFERNAL_MINING_SCROLL_1, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.ENCHANTING, amount: 2500 }
			],
			requiredItem: [
				{item: ITEMS.FIRE_RUNE, amount: 10000 },
				{item: ITEMS.FIRE_ESSENCE, amount: 25000 },
				{item: ITEMS.EARTH_RUNE, amount: 15000 },
			],
			levelRequired: 1,
			ticksToComplete: 80000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.HUNTING]: [
		{
			id: 'P_SNARE_RABBIT',
			productionName: 'Snare Rabbit',
			outputItem: [
				{ item: ITEMS.DEAD_RABBIT, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.HUNTING, amount: 20 }
			],
			requiredItem: [
				{item: ITEMS.IRON_WIRE, amount: 1 },
			],
			levelRequired: 1,
			ticksToComplete: 1200,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_HUNT_RABBIT',
			productionName: 'Hunt Rabbit',
			outputItem: [
				{ item: ITEMS.DEAD_RABBIT, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.HUNTING, amount: 30 },
				{ skill: SkillID.RANGED, amount: 5 }
			],
			requiredItem: [
				{item: ITEMS.IRON_ARROW, amount: 3 },
			],
			levelRequired: 1,
			ticksToComplete: 3500,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.WEAVING]: [
		{
			id: 'P_GRASS_ROBE_TOP',
			productionName: 'Grass Robe Top',
			outputItem: [
				{ item: ITEMS.GRASS_ROBE_TOP, amount: 1 }
			],
			xpPerOutput: [
				{ skill: SkillID.WEAVING, amount: 20 }
			],
			requiredItem: [
				{item: ITEMS.LONG_GRASS, amount: 250 },
			],
			levelRequired: 1,
			ticksToComplete: 4000,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.LEATHER_WORKING]: [
		{
			id: 'P_SKIN_RABBIT',
			productionName: 'Skin Rabbit',
			outputItem: [
				{ item: ITEMS.SMALL_GAME_LEATHER, amount: 1 },
				{ item: ITEMS.SMALL_GAME_MEAT, amount: 1 },
				{ item: ITEMS.SMALL_BONES, amount: 3 }
			],
			xpPerOutput: [
				{ skill: SkillID.LEATHER_WORKING, amount: 20 }
			],
			requiredItem: [
				{item: ITEMS.DEAD_RABBIT, amount: 250 },
			],
			levelRequired: 1,
			ticksToComplete: 1300,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.AGILITY]: [
		{
			id: 'P_FOREST_HIKE',
			productionName: 'Forest Hike',
			outputItem: [],
			xpPerOutput: [
				{ skill: SkillID.AGILITY, amount: 20 }
			],
			requiredItem: [],
			levelRequired: 1,
			ticksToComplete: 550,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.HOLY]: [
		{
			id: 'P_HOLY_SMALL_BONE',
			productionName: 'Small Bone Offering',
			outputItem: [],
			xpPerOutput: [
				{ skill: SkillID.HOLY, amount: 30 }
			],
			requiredItem: [ 
				{item: ITEMS.SMALL_BONES, amount: 30 }
			],
			levelRequired: 1,
			ticksToComplete: 1550,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.CURSE]: [
		{
			id: 'P_CURSE_SMALL_BONE',
			productionName: 'Small Blood Sacrifice',
			outputItem: [],
			xpPerOutput: [
				{ skill: SkillID.CURSE, amount: 30 }
			],
			requiredItem: [ 
				{item: ITEMS.DEAD_RABBIT, amount: 20 },
				{item: ITEMS.CHARRED_BONE, amount: 10 },
			],
			levelRequired: 1,
			ticksToComplete: 2900,
			currentTick: 0,
			currentXP: 0,
		},
	],
	[SkillID.FARMING]: [
		{
			id: 'P_GROW_HOPS',
			productionName: 'Grow Hops',
			outputItem: [
				{ item: ITEMS.HOPS, amount: 10 }
			],
			xpPerOutput: [
				{ skill: SkillID.FARMING, amount: 10 }
			],
			requiredItem: [
				{ item: ITEMS.HOPS_SEED, amount: 25 }
			],
			levelRequired: 5,
			ticksToComplete: 2200,
			currentTick: 0,
			currentXP: 0,
		},
		{
			id: 'P_RAISE_CHICKENS',
			productionName: 'Raise Chickens',
			outputItem: [
				{ item: ITEMS.DEAD_CHICKEN, amount: 2 },
				{ item: ITEMS.EGG, amount: 5 },
				{ item: ITEMS.FEATHER, amount: 100 }
			],
			xpPerOutput: [
				{ skill: SkillID.FARMING, amount: 1000 }
			],
			requiredItem: [
				{ item: ITEMS.HOPS_SEED, amount: 120 }
			],
			levelRequired: 15,
			ticksToComplete: 7000,
			currentTick: 0,
			currentXP: 0,
		},
	]

};


export const SKILL_PRODUCTIONS = (id: SkillID): SkillProduction[] => {
    return SKILL_PRODUCTION_CONFIG[id]
};
