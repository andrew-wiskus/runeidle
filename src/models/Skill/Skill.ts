import { getLevelFromEXP } from "util_functions"
import { SkillProduction, SKILL_PRODUCTIONS } from "./SkillProductions";
import { SkillID } from "./Skill_ID";

export class Skill {

    public id: SkillID;
    public name: string;
    public currentXP = 112200
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

export const SKILLS = (id: SkillID) => {

    let config = {
        [SkillID.WOODWORKING]: new Skill(SkillID.WOODWORKING, 'Wood Working')
    }

    return config[id]
}