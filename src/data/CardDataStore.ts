import { observable } from 'mobx';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';

export class CardDataStore {
    @observable public cardDisplay: ResourceCardProps[] = [
        {
            name: 'Simple Cow',
            starCount: 3,
            currentXP: 15235,
            workers: 2,
            cycleProgress: 0,
            unitsPerCycleMin: 1,
            unitsPerCycleMax: 10,
            xpPerCycle: 25,
            progressPerTick: 3.2,
            cycleMax: 120,
        }, // TODO: Cards should operate on different tick rates, not all on 1:1 - "Progress every X tick"
    ];

    private currentTick = 0;

    public setStartTick(tick: number) {
        this.currentTick = tick;
    }

    public onTickUpdate(newTick: number) {
        this.currentTick = newTick;

        this.cardDisplay = this.cardDisplay.map((card) => {
            let cardUpdate = { ...card };
            let cycleProgress = card.cycleProgress + card.progressPerTick;
            if (cycleProgress >= card.cycleMax) {
                let leftOver = cycleProgress - card.cycleMax;
                cardUpdate.cycleProgress = leftOver;
                cardUpdate.currentXP = cardUpdate.currentXP + card.xpPerCycle;
                // ADD UNITS TO INVENTORY HERE!
            } else {
                cardUpdate.cycleProgress = cycleProgress;
            }

            return cardUpdate;
        });
    }
}
