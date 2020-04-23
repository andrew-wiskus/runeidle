import { LevelXP } from 'data/_level_xp';

export function getRandomFromArray(arr: any[]): any {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getLevelFromEXP = (xp: number) => {
    let levelsArray = LevelXP;

    let index = levelsArray.findIndex((x, i) => levelsArray[Math.max(i - 1, 0)] <= xp && xp < levelsArray[i]);
    return index;
};

export const getDecimalIfNeeded = (num: number): string => {
    let updated = Math.floor(num * 100) / 100;
    return updated + '';
};

export function waitForSeconds(seconds: number): Promise<void> {
    if (seconds > 1000) {
        console.warn(
            'WARNING!: YOU PASSED IN A NUMBER GREATER THAN 1000, Are you sure you want to do this? This function takes in seconds, not milliseconds.'
        );
    }
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
