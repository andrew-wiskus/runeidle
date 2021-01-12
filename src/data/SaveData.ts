export interface PlayerData {
    lastSavedTick: number;
}

export class SaveData {

    public static saveTickData(data: PlayerData) {
        window.localStorage.setItem('lastSavedTick', data.lastSavedTick + '');
    }

    public static loadTickData(): PlayerData {
        let lastSavedTick = getSavedNumberData('lastSavedTick');

        let data: PlayerData = {
            lastSavedTick: lastSavedTick,
        };

        return data;
    }
}

function getSavedNumberData(key: string): number {
    return Number(window.localStorage.getItem(key) ? window.localStorage.getItem(key) : 0);
}
