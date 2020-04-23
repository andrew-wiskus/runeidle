import { observable } from 'mobx';
import { monsters } from './_all_monsters';
import { getRandomFromArray, waitForSeconds } from 'util_functions';

export enum CombatLocation {
    FARM,
    SEWER,
    GRAVE,
}

export interface Monster {
    name: string;
    maxHealth: number;
    currentHealth: number;
    image: any;
}

export class CombatStore {
    @observable public currentLocation: CombatLocation = CombatLocation.FARM;
    @observable public currentMonster: Monster = monsters.COW;
    private startTick = 0;
    private lastAttackedTick = 0;

    public onTickUpdate(tick: number) {
        if (tick - this.lastAttackedTick > 30) {
            this.lastAttackedTick = tick;
            this.attackMonster();
        }
    }

    public setStartTick(tick: number) {
        this.startTick = tick;
    }
    private attackAnimationCallback: (damage: number) => void = () => {
        throw Error('This has not been set');
    };
    private monsterAnimationOnDeathCallback: () => number = () => {
        throw Error('This has not been set');
    };

    public changeLocation(location: CombatLocation) {
        this.currentLocation = location;
        this.getNewActiveMonster();
    }

    private onMonsterDeath() {
        this.lastAttackedTick = this.lastAttackedTick + 60; // STUPID HACK so it doesnt get attacked while fading back in;

        // calls back seconds for animation to take
        waitForSeconds(this.monsterAnimationOnDeathCallback()).then(() => {
            this.getNewActiveMonster();
        });
        // add loot
        // add XP
    }

    public attackMonster() {
        if (this.currentMonster.currentHealth == 0) {
            // can't kill those which are already dead.
            return;
        }
        let damage = 20;
        this.attackAnimationCallback(damage);

        this.currentMonster.currentHealth = Math.max(0, this.currentMonster.currentHealth - damage);
        if (this.currentMonster.currentHealth == 0) {
            this.onMonsterDeath();
        }
    }

    public setMonsterAnimationOnDeathCallback(callback: () => number) {
        this.monsterAnimationOnDeathCallback = callback;
    }

    public setAttackAnimationCallback(callback: (damage: number) => void) {
        this.attackAnimationCallback = callback;
    }

    public getNewActiveMonster() {
        let monsterArray: Monster[] = [];
        let location = this.currentLocation;

        switch (location) {
            case CombatLocation.FARM:
                monsterArray = [monsters.COW, monsters.SCARECROW, monsters.FARMER, monsters.GOAT, monsters.BUNNY, monsters.DOVE];
                break;
            case CombatLocation.SEWER:
                monsterArray = [monsters.SPIDER, monsters.CROC, monsters.MUTATED_FISH, monsters.SNAKE, monsters.RAT];
                break;
            case CombatLocation.GRAVE:
                monsterArray = [monsters.GHOST, monsters.BAT, monsters.SKELE, monsters.PUMPKIN, monsters.GHOUL];

                break;
        }

        this.currentMonster = { ...getRandomFromArray(monsterArray) } as Monster;
    }
}
