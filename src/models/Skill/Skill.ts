import { getLevelFromEXP } from "util_functions"
import { SkillProduction, SKILL_PRODUCTIONS } from "./SkillProductions";
import { SkillID } from "./Skill_ID";

export class Skill {

    public id: SkillID;
    public name: string;
    public currentXP = 0
    public productions: SkillProduction[] = [];

    constructor (id: SkillID, name: string) {
        this.id = id;
        this.name = name;
        this.productions = SKILL_PRODUCTIONS(this.id);
    }
    
    public get currentLevel(): number {
        return getLevelFromEXP(this.currentXP)
    }
    
    public saveSkillData(): void {
        // save data for class
        // save data for productions
    }

    public loadSkillData(): void {
        // load data for class
        // load data for productions
    }
}

export const SKILL_CONFIG = {
    [SkillID.FLETCHING         ]:   new Skill(SkillID.FLETCHING, 'Wood Working'),
    [SkillID.WOODCUTTING       ]:   new Skill(SkillID.WOODCUTTING, 'Wood Cutting'),
    [SkillID.MINING            ]:   new Skill(SkillID.MINING, 'Mining'),
    [SkillID.SMITHING          ]:   new Skill(SkillID.SMITHING, 'Smithing'),
    [SkillID.FISHING           ]:   new Skill(SkillID.FISHING, 'Fishing'),
    [SkillID.CRAFTING          ]:   new Skill(SkillID.CRAFTING, 'Crafting'),
    [SkillID.GATHERING         ]:   new Skill(SkillID.GATHERING, 'Gathering'),
    [SkillID.FIREMAKING        ]:   new Skill(SkillID.FIREMAKING, 'Firemaking'),
    [SkillID.COOKING           ]:   new Skill(SkillID.COOKING, 'Cooking'),
    [SkillID.RUNECRAFTING      ]:   new Skill(SkillID.RUNECRAFTING, 'Runecrafting'),
    [SkillID.DIVINATION        ]:   new Skill(SkillID.DIVINATION, 'Divination'),
    [SkillID.CONSTRUCTION      ]:   new Skill(SkillID.CONSTRUCTION, 'Construction'),
    [SkillID.THIEVING          ]:   new Skill(SkillID.THIEVING, 'Thieving'),
    [SkillID.POTION_MAKING     ]:   new Skill(SkillID.POTION_MAKING, 'Potion Making'),
    [SkillID.INVENTION         ]:   new Skill(SkillID.INVENTION, "Invention"),
    [SkillID.ENCHANTING        ]:   new Skill(SkillID.ENCHANTING, "Enchanting"),
    [SkillID.HUNTING           ]:   new Skill(SkillID.HUNTING, "Hunting"),
    [SkillID.WEAVING           ]:   new Skill(SkillID.WEAVING, "Weaving"),
    [SkillID.LEATHER_WORKING   ]:   new Skill(SkillID.LEATHER_WORKING, "Leather Working"),
    [SkillID.AGILITY           ]:   new Skill(SkillID.AGILITY, "Agility Training"),
    [SkillID.HOLY              ]:   new Skill(SkillID.HOLY, "Holy"),
    [SkillID.CURSE             ]:   new Skill(SkillID.CURSE, "Curse"),
    [SkillID.FARMING           ]:   new Skill(SkillID.FARMING, "Farming"),
    [SkillID.RANGED            ]:   new Skill(SkillID.RANGED, "Ranged"),
}

export const GET_SKILL_CONFIG_FOR_ID = (id: SkillID) => {
    return SKILL_CONFIG[id]
}