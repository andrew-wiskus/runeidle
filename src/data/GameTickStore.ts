import { observable } from 'mobx';
import { ITEMS } from 'models/Item/ItemConfig';
import { InventoryStore } from './InventoryStore';
import { LevelStore } from './LevelStore';
import { ProductionStore } from './ProductionStore';
import { SaveData } from './SaveData';

const TICKS_PER_SECOND = 3000;
const TICK_INCREMENT_TO_RUN_SAVE = 5;

export class GameTickStore {
    @observable public currentTick = 0;

    private additionalTickAmount = 0;
    private startTick = 0;
    private levelStore: LevelStore;
    private inventoryStore: InventoryStore;
    private productionStore: ProductionStore;

    public setTickAdditionalIncrement(amount: number) {
        this.additionalTickAmount += amount;
    }

    public constructor(productionStore: ProductionStore, levelStore: LevelStore, inventoryStore: InventoryStore) {
        let savedTickData = SaveData.loadTickData();
        this.startTick = savedTickData.lastSavedTick;

        this.startGameTickLoop(productionStore.onGameTick);

        this.productionStore = productionStore;
        this.inventoryStore = inventoryStore;
        this.levelStore = levelStore;
    }

    private checkToSaveTickData = (tick: number) => {
        if (tick % TICK_INCREMENT_TO_RUN_SAVE === 0) {
            SaveData.saveTickData({
                lastSavedTick: this.currentTick,
            });

            this.levelStore.saveData();
            this.inventoryStore.saveData();
            this.productionStore.saveData();
        }
    };

    private startGameTickLoop(productionStoreOnTick: (tick: number) => void) {
        const callback = (someParam: number) => {

            // TODO: Throttle this?

            let newTick = this.startTick + Math.ceil((someParam / 1000) * (TICKS_PER_SECOND + this.additionalTickAmount));

            if (newTick !== this.currentTick) {
                // on tick update
                productionStoreOnTick(newTick - this.currentTick)
            }

            this.currentTick = newTick;

            this.checkToSaveTickData(this.currentTick);

            window.requestAnimationFrame(callback);
        };

        window.requestAnimationFrame(callback);
    }
}
