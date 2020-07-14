import { images } from 'images/images';
import { CombatLocation } from 'models/CombatLocation';

export interface Monster {
    name: string;
    maxHealth: number;
    currentHealth: number;
    image: any;
    location: CombatLocation;
}

export const monsters = {
    BAT: {
        name: `BAT`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.BAT,
        location: CombatLocation.GRAVE,
    },
    BUNNY: {
        name: `BUNNY`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.BUNNY,
        location: CombatLocation.FARM,
    },
    COW: {
        name: `COW`,
        maxHealth: 100,
        currentHealth: 47,
        image: images.monsters.COW,
        location: CombatLocation.FARM,
    },
    CROC: {
        name: `CROC`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.CROC,
        location: CombatLocation.SEWER,
    },
    DOVE: {
        name: `DOVE`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.DOVE,
        location: CombatLocation.FARM,
    },
    FARMER: {
        name: `FARMER`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.FARMER,
        location: CombatLocation.FARM,
    },
    GHOST: {
        name: `GHOST`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.GHOST,
        location: CombatLocation.GRAVE,
    },
    GHOUL: {
        name: `GHOUL`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.GHOUL,
        location: CombatLocation.GRAVE,
    },
    GOAT: {
        name: `GOAT`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.GOAT,
        location: CombatLocation.FARM,
    },
    MUTATED_FISH: {
        name: `MUTATED_FISH`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.MUTATED_FISH,
        location: CombatLocation.SEWER,
    },
    PUMPKIN: {
        name: `PUMPKIN`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.PUMPKIN,
        location: CombatLocation.GRAVE,
    },
    RAT: {
        name: `RAT`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.RAT,
        location: CombatLocation.SEWER,
    },
    SCARECROW: {
        name: `SCARECROW`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.SCARECROW,
        location: CombatLocation.FARM,
    },
    SKELE: {
        name: `SKELE`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.SKELE,
        location: CombatLocation.GRAVE,
    },
    SNAKE: {
        name: `SNAKE`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.SNAKE,
        location: CombatLocation.SEWER,
    },
    SPIDER: {
        name: `SPIDER`,
        maxHealth: 100,
        currentHealth: 100,
        image: images.monsters.SPIDER,
        location: CombatLocation.SEWER,
    },
};
