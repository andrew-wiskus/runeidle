import { action, computed, observable } from "mobx";
import { Skill, GET_SKILL_CONFIG_FOR_ID, SKILL_CONFIG } from "models/Skill/Skill";
import { SkillID } from "models/Skill/Skill_ID";
import { getLevelFromEXP } from "util_functions";

export class LevelStore {
    @observable public skills: Skill[] = [];

    constructor() {
        Object.keys(SKILL_CONFIG).forEach(key => {
            this.skills.push({...SKILL_CONFIG[key]})
        })

        this.loadData();
    }

    @action
    public addXPToSkill(id: SkillID, xp: number) {
        let index = this.skills.findIndex(x => x.id == id) 
        console.log(index)
        this.skills[index].currentXP += xp;
        console.log(this.skills[index].currentXP)
    }
    
    public getLevelFor(id: SkillID) {
        console.log(this.skills.find(x => x.id == id)!.currentXP)
        return getLevelFromEXP(this.skills.find(x => x.id == id)!.currentXP / 5)
    }

    public loadData() {
        // loop through `key: skillID, value: xp`
        // run `addXPtoSkill`
        this.skills.forEach(skill => {
            let xp = localStorage.getItem('xp_' + skill.id)
            if(xp != undefined) {
                this.addXPToSkill(skill.id, parseInt(xp))
            }
        })
    }

    public saveData() {
        this.skills.forEach(skill => {
            localStorage.setItem('xp_' + skill.id, skill.currentXP + '')
        })
    }
}
