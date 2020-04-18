import { observable } from 'mobx';
import { SaveData } from './SaveData';

export const MAX_HAPPINESS = 100;
export const MAX_HEALTH = 100;

export class BeegDataStore {
    @observable public health = 100;
    @observable public happiness = 100;
    private currentTick: number = 0;

    public setStartTick(tick: number) {
        this.currentTick = tick;
        let saveData = SaveData.loadBeegData();
        this.health = saveData.health;
        this.happiness = saveData.happiness;
    }

    public onTickUpdate(newTick: number) {
        this.currentTick = newTick;
    }

    public updateHappiness(byValue: number, explicit?: number) {
        if (explicit != undefined) {
            this.happiness = explicit;
        } else {
            this.happiness = this.happiness + byValue;
            this.happiness = Math.max(0, this.happiness);
            this.happiness = Math.min(MAX_HAPPINESS, this.happiness);
        }

        this.saveData();
    }

    public updateHealth(byValue: number, explicit?: number) {
        if (explicit != undefined) {
            this.health = explicit;
        } else {
            this.health = this.health + byValue;

            this.health = Math.max(0, this.health);
            this.health = Math.min(MAX_HEALTH, this.health);
        }

        this.saveData();
    }

    private saveData() {
        SaveData.saveBeegData({ happiness: this.happiness, health: this.health });
    }
}
