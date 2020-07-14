import { observable } from 'mobx';
import { Monster, monsters } from './_all_monsters';
import { getRandomFromArray, waitForSeconds } from 'util_functions';
import { CombatLocation } from 'models/CombatLocation';

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
    private attackAnimationCallback: (damage: number) => void = () => {};
    private monsterAnimationOnDeathCallback: () => number = () => {
        return -1;
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

        let damage = 1 + Math.floor(Math.random() * 20);
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
        let allMonsters = Object.keys(monsters).map((key) => {
            return monsters[key];
        });

        let monsterArray: Monster[] = allMonsters.filter((monster) => monster.location == this.currentLocation);
        this.currentMonster = { ...getRandomFromArray(monsterArray) } as Monster;
    }
}
