import { observable } from "mobx";
import { SkillProduction, SKILL_PRODUCTION_CONFIG } from "models/Skill/SkillProductions";
import { InventoryStore } from "./InventoryStore";
import { LevelStore } from "./LevelStore";

export class ProductionStore {

    @observable public productions: SkillProduction[] = [];
    @observable private activeTaskID: string = '';
    private inventoryStore: InventoryStore;
    private levelStore: LevelStore;

    constructor(inventoryStore: InventoryStore, levelStore: LevelStore) {
        this.inventoryStore = inventoryStore;
        this.levelStore = levelStore;
        this.productions = []
        
        Object.keys({...SKILL_PRODUCTION_CONFIG}).forEach(key => {
            SKILL_PRODUCTION_CONFIG[key].forEach((item: SkillProduction) => {
                this.productions.push(item)
            })
        })

        this.loadData();
    }

    private incrementProductionTickCount(forID: string, tickDelta: number) {
        let production = this.productions.find(x => x.id === forID)!
        if(forID === '') { return; } // no active task
        if(production === null) { throw Error ("trying to update tick count for item that doesnt exist: (" + forID + ")")}

        production.currentTick += tickDelta;
        this.checkForProductionComplete(production);
    }

    private checkForProductionComplete(production: SkillProduction) {
        let excessTick = production.currentTick - production.ticksToComplete;
        if(excessTick < 0) { return; }

        let amountCompleted = Math.floor(excessTick / production.ticksToComplete) + 1;

        
        let requiredItemsNotAvailable = false;
        // removes required items
        // stops production & alerts if not found
        for(var i = 0; i < amountCompleted; i++) {

            let required_error = `You do not have the required items!\n`

             // eslint-disable-next-line
            production.requiredItem.forEach(required => {
                let success = this.inventoryStore.removeItem(required.item, required.amount)
                if(success === false) {
                    this.activeTaskID = '';
                    required_error += `- ${required.item.name}: ${required.amount}\n`
                    production.currentTick = 0;
                    requiredItemsNotAvailable = true;
                    return
                }
            })

            if(requiredItemsNotAvailable) {
                alert(required_error)
                return;
            }
        }

        if(requiredItemsNotAvailable) { return; }
        //end;


        // adds items
        // adds xp for production
        // adds xp for skill
        for(var j = 0; j < amountCompleted; j++) {
            this.onProductionComplete(production)
        }
        //end;


        production.currentTick = production.currentTick - (amountCompleted * production.ticksToComplete)
    }

    private onProductionComplete = (production: SkillProduction) => {
        let index = this.productions.findIndex(x => x.id === production.id)!
        this.productions[index].xpPerOutput.forEach(output => {
            this.productions[index].currentXP += output.amount;
            this.levelStore.addXPToSkill(output.skill, output.amount)
        })

        production.outputItem.forEach(output => {
            this.inventoryStore.addItem(output.item, output.amount)
        })

        // ADD XP COMPLETE FOR TOP LEVEL SKILL
    }

    public onGameTick = (tickDelta: number) => {
        this.incrementProductionTickCount(this.activeTaskID, tickDelta);
    }

    public setActiveTask = (id: string) => {
        this.activeTaskID = id;
    }

    public saveData() {
        this.productions.forEach(prod => {
            localStorage.setItem('prod_xp_' + prod.id, prod.currentXP + '')
            localStorage.setItem('prod_tick_' + prod.id, prod.currentTick + '')
        })
    }

    public loadData() {
        this.productions = this.productions.map(prod => {
            let xp = localStorage.getItem('prod_xp_' + prod.id)
            let tick = localStorage.getItem('prod_tick_' + prod.id)
            
            return {
                ...prod,
                currentXP: xp ? parseInt(xp) : 0,
                currentTick: tick ? parseInt(tick) : 0
            }
        })
    }
}