import { Item, ITEMS } from 'models/Item/ItemConfig';
import { SkillID } from './Skill_ID';

export interface ProductionItem {
	item: Item,
	amount: number 
}

export interface SkillProduction {
	productionName: string;
	outputItem:  ProductionItem[];
	xpPerOutput: { skill: SkillID, amount: number }[]
	requiredItem: ProductionItem[];
	levelRequired: number;
	ticksToComplete: number;
}

export const SKILL_PRODUCTIONS = (id: SkillID): SkillProduction[] => {
	let config = {
		[SkillID.FLETCHING]: [
			{
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
				ticksToComplete: 1000
            },
            {
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
				ticksToComplete: 2500
			},
			{
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
				ticksToComplete: 600
            },

		],
		[SkillID.WOODCUTTING]: [
			{
				productionName: 'Small forest',
				outputItem: [
					{ item: ITEMS.COMMON_LOG, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.WOODCUTTING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 500
			}
		],
		[SkillID.MINING]: [
			{
				productionName: 'Stone Quarry',
				outputItem: [
					{ item: ITEMS.STONE, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.MINING, amount: 5 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 650
			},
			{
				productionName: 'Magic Mines Level -1',
				outputItem: [
					{ item: ITEMS.SIMPLE_RUNE_ESSENCE, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.MINING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 950
			},
			{
				productionName: 'Iron Mines',
				outputItem: [
					{ item: ITEMS.IRON_ORE, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.MINING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 10,
				ticksToComplete: 1250
			},
		],
		[SkillID.SMITHING]: [
			{
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
				ticksToComplete: 1250
			},
			{
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
				ticksToComplete: 2000
			},
			{
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
				ticksToComplete: 2000
			},
			{
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
				ticksToComplete: 9000
			},
			
		],
		[SkillID.FISHING]: [
			{
				productionName: 'Newbie Shore',
				outputItem: [
					{ item: ITEMS.RAW_SHRIMP, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.FISHING, amount: 18 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 1800
			},
			{
				productionName: 'Small River',
				outputItem: [
					{ item: ITEMS.RAW_SALMON, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.FISHING, amount: 37 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 2400
			},
		],
		[SkillID.CRAFTING]: [
			{
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
				ticksToComplete: 1500
			},
		],
		[SkillID.GATHERING]: [
			{
				productionName: 'Pick Flax',
				outputItem: [
					{ item: ITEMS.FLAX, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.GATHERING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 900
			},
			{
				productionName: 'Pick Long Grass',
				outputItem: [
					{ item: ITEMS.LONG_GRASS, amount: 1 }
				],
				xpPerOutput: [
					{ skill: SkillID.GATHERING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 10,
				ticksToComplete: 2200
			},
			{
				productionName: 'Gather Hops Seed',
				outputItem: [
					{ item: ITEMS.HOPS_SEED, amount: 5 }
				],
				xpPerOutput: [
					{ skill: SkillID.GATHERING, amount: 10 }
				],
				requiredItem: [],
				levelRequired: 5,
				ticksToComplete: 2200
			},
		],
		[SkillID.FIREMAKING]: [
			{
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
				ticksToComplete: 1000
			},
			{
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
				ticksToComplete: 1000
			},
			
		],
		[SkillID.COOKING]: [
			{
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
				ticksToComplete: 1000
			},
		],
		[SkillID.DIVINATION]: [
			{
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
				ticksToComplete: 1800
			},
			{
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
				ticksToComplete: 1800
			},
			{
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
				ticksToComplete: 1800
			},
		],
		[SkillID.RUNECRAFTING]: [
			{
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
				ticksToComplete: 1800
			},
			{
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
				ticksToComplete: 1800
			},
			{
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
				ticksToComplete: 1800
			},
		],
		[SkillID.CONSTRUCTION]: [
			{
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
				ticksToComplete: 12000
			},
			{
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
				ticksToComplete: 2200
			},
			{
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
				ticksToComplete: 5500
			},
		],
		[SkillID.THIEVING]: [
			{
				productionName: 'Pickpocket Citizens',
				outputItem: [
					{ item: ITEMS.GOLD_COIN, amount: 3 }
				],
				xpPerOutput: [
					{ skill: SkillID.THIEVING, amount: 5 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 1000
			},
		],
		[SkillID.POTION_MAKING]: [
			{
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
				ticksToComplete: 80000
			},
		],
		[SkillID.INVENTION]: [
			{
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
				ticksToComplete: 250000
			},
		],
		[SkillID.ENCHANTING]: [
			{
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
				ticksToComplete: 290000
			},
		],
		[SkillID.HUNTING]: [
			{
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
				ticksToComplete: 1200
			},
			{
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
				ticksToComplete: 3500
			},
		],
		[SkillID.WEAVING]: [
			{
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
				ticksToComplete: 40000
			},
		],
		[SkillID.LEATHER_WORKING]: [
			{
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
				ticksToComplete: 1300
			},
		],
		[SkillID.AGILITY]: [
			{
				productionName: 'Forest Hike',
				outputItem: [],
				xpPerOutput: [
					{ skill: SkillID.AGILITY, amount: 20 }
				],
				requiredItem: [],
				levelRequired: 1,
				ticksToComplete: 550
			},
		],
		[SkillID.HOLY]: [
			{
				productionName: 'Small Bone Offering',
				outputItem: [],
				xpPerOutput: [
					{ skill: SkillID.HOLY, amount: 30 }
				],
				requiredItem: [ 
					{item: ITEMS.SMALL_BONES, amount: 30 }
				],
				levelRequired: 1,
				ticksToComplete: 1550
			},
		],
		[SkillID.CURSE]: [
			{
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
				ticksToComplete: 2900
			},
		],
		[SkillID.FARMING]: [
			{
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
				ticksToComplete: 2200
			},
			{
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
					{ item: ITEMS.HOPS_SEED, amount: 1200 }
				],
				levelRequired: 15,
				ticksToComplete: 75000
			},
		]

    };
    
    return config[id]
};
