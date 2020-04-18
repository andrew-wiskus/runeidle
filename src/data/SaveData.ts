interface PlayerData {
    lastSavedTick: number;
}

interface BeegData {
    happiness: number;
    health: number;
}

export class SaveData {
    // TICK
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
    // END TICK;

    // --

    // BEEG

    public static saveBeegData(data: BeegData) {
        window.localStorage.setItem('beeg_happiness', data.happiness + '');
        window.localStorage.setItem('beeg_health', data.health + '');
    }

    public static loadBeegData(): BeegData {
        let happiness = getSavedNumberData('beeg_happiness');
        let health = getSavedNumberData('beeg_health');

        return {
            happiness: happiness,
            health: health,
        };
    }

    // END BEEG;
}

function getSavedNumberData(key: string): number {
    return Number(window.localStorage.getItem(key) ? window.localStorage.getItem(key) : 0);
}
