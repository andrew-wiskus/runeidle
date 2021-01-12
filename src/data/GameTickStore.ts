import { observable } from 'mobx';
import { SaveData } from './SaveData';

const TICKS_PER_SECOND = 1000;
const TICK_INCREMENT_TO_RUN_SAVE = 1000;

export class GameTickStore {
    @observable public currentTick = 0;

    private additionalTickAmount = 0;
    private startTick = 0;

    public setTickAdditionalIncrement(amount: number) {
        this.additionalTickAmount += amount;
    }

    public constructor() {
        let savedTickData = SaveData.loadTickData();
        this.startTick = savedTickData.lastSavedTick;

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
                // on tick update
            }

            this.currentTick = newTick;

            this.checkToSaveTickData(this.currentTick);

            window.requestAnimationFrame(callback);
        };

        window.requestAnimationFrame(callback);
    }
}
