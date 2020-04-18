import { ALL_CARDS } from './_all_cards';
import { InventoryItem } from './InventoryStore';

interface PlayerData {
    lastSavedTick: number;
}

interface BeegData {
    happiness: number;
    health: number;
    points: number;
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
        window.localStorage.setItem('beeg_points', data.points + '');
    }

    public static loadBeegData(): BeegData {
        let happiness = getSavedNumberData('beeg_happiness');
        let health = getSavedNumberData('beeg_health');
        let points = getSavedNumberData('beeg_points');

        return {
            happiness: happiness,
            health: health,
            points: points,
        };
    }

    // END BEEG;

    // --

    // INVENTORY

    public static saveInventory(item: InventoryItem) {
        window.localStorage.setItem('count_' + item.card.id, item.count + '');
    }

    public static loadInventory(): { count: number; id: string }[] {
        let savedInventory: { count: number; id: string }[] = [];

        ALL_CARDS.forEach((card) => {
            let count = getSavedNumberData('count_' + card.id);
            if (count > 0) {
                savedInventory.push({
                    id: card.id,
                    count: count,
                });
            }
        });

        return savedInventory;
    }
}

function getSavedNumberData(key: string): number {
    return Number(window.localStorage.getItem(key) ? window.localStorage.getItem(key) : 0);
}
