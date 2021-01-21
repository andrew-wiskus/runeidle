export interface Item {
	id: string;
	name: string;
}

export enum ItemType {
	PRODUCTION,
	HELMET,
	CHEST_ARMOR,
	LEG_ARMOR,
	BOOTS,
	GLOVES,
	WEAPON
}

export const ITEMS = {
	COMMON_ARROW_SHAFT: { type: ItemType.PRODUCTION, id: 'COMMON_ARROW_SHAFT', name: 'Arrow Shaft' },
	COMMON_SHORT_BOW: { type: ItemType.PRODUCTION, id: 'COMMON_SHORT_BOW', name: 'Short Bow' },
	COMMON_PLANK: { type: ItemType.PRODUCTION, id: 'COMMON_PLANK', name: 'Plank' },

	COMMON_LOG: { type: ItemType.PRODUCTION, id: 'COMMON_LOG', name: 'Log' },

	IRON_ORE: { type: ItemType.PRODUCTION, id: 'IRON_ORE', name: 'Iron Ore' },
	STONE: { type: ItemType.PRODUCTION, id: 'STONE', name: 'Stone' },

	IRON_BAR: { type: ItemType.PRODUCTION, id: 'IRON_BAR', name: 'Iron Bar' },
	IRON_NAIL: { type: ItemType.PRODUCTION, id: 'IRON_NAIL', name: 'Iron Nail' },
	IRON_WIRE: { type: ItemType.PRODUCTION, id: 'IRON_WIRE', name: 'Iron Wire' },
	IRON_ARROW_HEAD: { type: ItemType.PRODUCTION, id: 'IRON_ARROW_HEAD', name: 'Iron Arrow Head' },

	RAW_SHRIMP: { type: ItemType.PRODUCTION, id: 'RAW_SHRIMP', name: 'Raw Shrimp' },
	RAW_SALMON: { type: ItemType.PRODUCTION, id: 'RAW_SALMON', name: 'Raw Salmon' },

	COOKED_SHRIMP: { type: ItemType.PRODUCTION, id: 'COOKED_SHRIMP', name: 'Shrimp' },

	BOW_STRING: { type: ItemType.PRODUCTION, id: 'BOW_STRING', name: 'Bow String' },

	FLAX: { type: ItemType.PRODUCTION, id: 'FLAX', name: 'Flax' },
	HOPS: { type: ItemType.PRODUCTION, id: 'HOPS', name: 'Hops' },
	LONG_GRASS: { type: ItemType.PRODUCTION, id: 'LONG_GRASS', name: 'Long Grass' },

	HEAT: { type: ItemType.PRODUCTION, id: 'HEAT', name: 'Heat' },
	CHARRED_BONE: { type: ItemType.PRODUCTION, id: 'CHARRED_BONE', name: 'Charred Bone' },

	SIMPLE_RUNE_ESSENCE: { type: ItemType.PRODUCTION, id: 'SIMPLE_RUNE_ESSENCE', name: 'Simple Rune Essence' },
	FIRE_RUNE: { type: ItemType.PRODUCTION, id: 'FIRE_RUNE', name: 'Fire Rune' },
	WATER_RUNE: { type: ItemType.PRODUCTION, id: 'WATER_RUNE', name: 'Water Rune' },
	EARTH_RUNE: { type: ItemType.PRODUCTION, id: 'EARTH_RUNE', name: 'Earth Rune' },

	FIRE_ESSENCE: { type: ItemType.PRODUCTION, id: 'FIRE_ESSENCE', name: 'Fire Essence' },
	WATER_ESSENCE: { type: ItemType.PRODUCTION, id: 'WATER_ESSENCE', name: 'Water Essence' },
	EARTH_ESSENCE: { type: ItemType.PRODUCTION, id: 'EARTH_ESSENCE', name: 'Earth Essence' },

	SIMPLE_CHAIR: { type: ItemType.PRODUCTION, id: 'SIMPLE_CHAIR', name: 'Simple Chair' },
	SIMPLE_TABLE: { type: ItemType.PRODUCTION, id: 'SIMPLE_TABLE', name: 'Simple Table' },

	GOLD_COIN: { type: ItemType.PRODUCTION, id: 'GOLD_COIN', name: 'Gold Coin' },

	SHODDY_BEER: { type: ItemType.PRODUCTION, id: 'SHODDY_BEER', name: 'Shoddy Beer' },

	SPEED_AUGMENTATION_1: { type: ItemType.PRODUCTION, id: 'SPEED_AUGMENTATION_1', name: 'Speed Augmentation S1' },

	BLADE_COMPONENT: { type: ItemType.PRODUCTION, id: 'BLADE_COMPONENT', name: 'Blade Component' },

	INFERNAL_MINING_SCROLL_1: { type: ItemType.PRODUCTION, id: 'INFERNAL_MINING_SCROLL_1', name: 'Infernal Mining: IM1' },

	DEAD_RABBIT: { type: ItemType.PRODUCTION, id: 'DEAD_RABBIT', name: 'Dead Rabbit' },

	GRASS_ROBE_TOP: { type: ItemType.PRODUCTION, id: 'GRASS_ROBE_TOP', name: 'Grass Robe Top' },

	SMALL_GAME_LEATHER: { type: ItemType.PRODUCTION, id: 'SMALL_GAME_LEATHER', name: 'Small Game Leather' },
	SMALL_GAME_MEAT: { type: ItemType.PRODUCTION, id: 'SMALL_GAME_MEAT', name: 'Small Game Meat' },
	SMALL_BONES: { type: ItemType.PRODUCTION, id: 'SMALL_BONES', name: 'Small Bones' },

	HOPS_SEED: { type: ItemType.PRODUCTION, id: 'HOPS_SEED', name: 'Hops Seed' },
	IRON_ARROW: { type: ItemType.PRODUCTION, id: 'IRON_ARROW', name: 'Iron Arrow' },
	DEAD_CHICKEN: { type: ItemType.PRODUCTION, id: 'DEAD_CHICKEN', name: 'Dead Chicken' },
	FEATHER: { type: ItemType.PRODUCTION, id: 'FEATHER', name: 'Feather' },
	EGG: { type: ItemType.PRODUCTION, id: 'EGG', name: 'Egg' },







	// CRAFTABLES
	IRON_HELMET: { type: ItemType.HELMET, id: 'IRON_HELMET', name: 'Iron Helmet'},
	IRON_PLATEBODY: { type: ItemType.CHEST_ARMOR, id: 'IRON_PLATEBODY', name: 'Iron Platebody'},
	IRON_PLATELEGS: { type: ItemType.LEG_ARMOR, id: 'IRON_PLATELEGS', name: 'Iron Platelegs'},
	IRON_GAUNTLETS: { type: ItemType.GLOVES, id: 'IRON_GAUNTLETS', name: 'Iron Gauntlets'},
	IRON_BOOTS: { type: ItemType.BOOTS, id: 'IRON_BOOTS', name: 'Iron Boots'},
	IRON_LONGSWORD: { type: ItemType.WEAPON, id: 'IRON_LONGSWORD', name: 'Iron Longsword'},
 	IRON_DAGGER: { type: ItemType.WEAPON, id: 'IRON_DAGGER', name: 'Iron Dagger'},
 	IRON_SCIMITAR: { type: ItemType.WEAPON, id: 'IRON_SCIMITAR', name: 'Iron Scimitar'},
 	IRON_MACE: { type: ItemType.WEAPON, id: 'IRON_MACE', name: 'Iron Mace'},
};

export function getItemType(id: string) {
	return ITEMS[id].type;
}