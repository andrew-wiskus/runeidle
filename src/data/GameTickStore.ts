import { observable } from 'mobx';
import { SaveData } from './SaveData';
import { BeegDataStore } from './BeegDataStore';
import { CardDataStore } from './CardDataStore';
import { CombatStore } from './CombatStore';

const TICKS_PER_SECOND = 30;
const TICK_INCREMENT_TO_RUN_SAVE = 1000;

export class GameTickStore {
    @observable public currentTick = 0;
    @observable public timeLeft = 0;
    @observable private _beegDataStore: BeegDataStore;
    @observable private _cardDataStore: CardDataStore;
    @observable private _combatStore: CombatStore;

    private additionalTickAmount = 0;
    private startTick = 0;

    public setTickAdditionalIncrement(amount: number) {
        this.additionalTickAmount += amount;
    }

    public constructor(beegDataStore: BeegDataStore, cardDataStore: CardDataStore, combatStore: CombatStore) {
        let savedTickData = SaveData.loadTickData();
        this.startTick = savedTickData.lastSavedTick;

        this._combatStore = combatStore;
        this._beegDataStore = beegDataStore;
        this._cardDataStore = cardDataStore;

        this._beegDataStore.setStartTick(this.startTick);
        this._cardDataStore.setStartTick(this.startTick);
        this._combatStore.setStartTick(this.startTick);

        this.startGameTickLoop();
    }

    private checkToSaveTickData = (tick: number) => {
        if (tick % TICK_INCREMENT_TO_RUN_SAVE === 0) {
            SaveData.saveTickData({
                lastSavedTick: this.currentTick,
            });
        }
    };

    private startGameTickLoop() {
        const callback = (someParam: number) => {
            let newTick = this.startTick + Math.ceil((someParam / 1000) * (TICKS_PER_SECOND + this.additionalTickAmount));

            if (newTick !== this.currentTick) {
                this._beegDataStore.onTickUpdate(this.currentTick);
                this._cardDataStore.onTickUpdate(this.currentTick);
                this._combatStore.onTickUpdate(this.currentTick);
            }

            this.currentTick = newTick;

            // HEY UP{DATE} THIS
            this.timeLeft = 48 * 60 * 60 * 10 - this.currentTick;
            this.checkToSaveTickData(this.currentTick);

            window.requestAnimationFrame(callback);
        };

        window.requestAnimationFrame(callback);
    }
}
