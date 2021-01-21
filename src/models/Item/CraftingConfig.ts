import { Skill } from "models/Skill/Skill";
import { ProductionItem } from "models/Skill/SkillProductions";
import { SkillID } from "models/Skill/Skill_ID";
import { Item, ITEMS, ItemType } from "./ItemConfig";

export interface CraftableItem {
    item: Item;
    requiredItems: ProductionItem[];
    failChance: number;
    levelRequired: { level: number, skill: SkillID };
}

export const ALL_CRAFTABLES: CraftableItem[] = [
    {
        item: ITEMS.IRON_HELMET,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 80 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_PLATEBODY,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 130 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_PLATELEGS,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 100 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_GAUNTLETS,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 50 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_BOOTS,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 50 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_LONGSWORD,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 120 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_DAGGER,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 90 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_SCIMITAR,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 110 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    },
    {
        item: ITEMS.IRON_MACE,
        requiredItems: [
            { item: ITEMS.IRON_BAR, amount: 150 }
        ],
        failChance: 0.1,
        levelRequired: { level: 20, skill: SkillID.SMITHING }
    }
]