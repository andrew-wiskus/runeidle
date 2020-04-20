import { ItemClass } from './_all_cards';
import { observable } from 'mobx';
import { SaveData } from './SaveData';
import { getLevelFromEXP } from 'util_functions';

export interface SkillData {
    herbXP: number;
    farmingXP: number;
    farmAnimalXP: number;
    gemXP: number;
    fishXP: number;
    woodXP: number;
    oreXP: number;
    runeXP: number;
}

export class SkillStore {
    @observable public herbXP: number;
    @observable public farmingXP: number;
    @observable public farmAnimalXP: number;
    @observable public gemXP: number;
    @observable public fishXP: number;
    @observable public woodXP: number;
    @observable public oreXP: number;
    @observable public runeXP: number;

    constructor() {
        // load save data
        let skillData = SaveData.loadSkillData();

        this.herbXP = skillData.herbXP;
        this.farmingXP = skillData.farmingXP;
        this.farmAnimalXP = skillData.farmAnimalXP;
        this.gemXP = skillData.gemXP;
        this.fishXP = skillData.fishXP;
        this.woodXP = skillData.woodXP;
        this.oreXP = skillData.oreXP;
        this.runeXP = skillData.runeXP;
    }

    public getlevelForSkill(type: ItemClass) {
        switch (type) {
            case ItemClass.FARMING:
                return getLevelFromEXP(this.farmingXP);

            case ItemClass.FARM_ANIMAL:
                return getLevelFromEXP(this.farmAnimalXP);

            case ItemClass.HERB:
                return getLevelFromEXP(this.herbXP);

            case ItemClass.GEM:
                return getLevelFromEXP(this.gemXP);

            case ItemClass.FISH:
                return getLevelFromEXP(this.fishXP);

            case ItemClass.TREE:
                return getLevelFromEXP(this.woodXP);

            case ItemClass.ORE:
                return getLevelFromEXP(this.oreXP);

            case ItemClass.RUNE:
                return getLevelFromEXP(this.runeXP);
        }
    }

    public addXP(type: ItemClass, xp: number) {
        switch (type) {
            case ItemClass.FARMING:
                this.farmingXP = this.farmingXP + xp;
                break;
            case ItemClass.FARM_ANIMAL:
                this.farmAnimalXP = this.farmAnimalXP + xp;
                break;
            case ItemClass.HERB:
                this.herbXP = this.herbXP + xp;
                break;
            case ItemClass.GEM:
                this.gemXP = this.gemXP + xp;
                break;
            case ItemClass.FISH:
                this.fishXP = this.fishXP + xp;
                break;
            case ItemClass.TREE:
                this.woodXP = this.woodXP + xp;
                break;
            case ItemClass.ORE:
                this.oreXP = this.oreXP + xp;
                break;
            case ItemClass.RUNE:
                this.runeXP = this.runeXP + xp;
                break;
        }

        SaveData.saveSkillData({
            herbXP: this.herbXP,
            farmingXP: this.farmingXP,
            farmAnimalXP: this.farmAnimalXP,
            gemXP: this.gemXP,
            fishXP: this.fishXP,
            woodXP: this.woodXP,
            oreXP: this.oreXP,
            runeXP: this.runeXP,
        });
    }
}
