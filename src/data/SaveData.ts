import { ALL_CARDS } from './_all_cards';
import { InventoryItem } from './InventoryStore';
import { SkillData } from './SkillStore';

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

    // END INVENTORY

    // --

    // CHAT

    public static saveChat(data: { username: string }) {
        window.localStorage.setItem('chat_username', data.username);
    }

    public static loadChat(): { username: string } {
        let username = window.localStorage.getItem('chat_username') || '';
        return { username: username };
    }

    // END CHAT

    // --

    // SKILL DATA

    public static loadSkillData(): SkillData {
        return {
            herbXP: getSavedNumberData('skill_herbXP'),
            farmingXP: getSavedNumberData('skill_farmingXP'),
            farmAnimalXP: getSavedNumberData('skill_farmAnimalXP'),
            gemXP: getSavedNumberData('skill_gemXP'),
            fishXP: getSavedNumberData('skill_fishXP'),
            woodXP: getSavedNumberData('skill_woodXP'),
            oreXP: getSavedNumberData('skill_oreXP'),
            runeXP: getSavedNumberData('skill_runeXP'),
        };
    }

    public static saveSkillData(skillData: SkillData) {
        window.localStorage.setItem('skill_herbXP', skillData.herbXP + '');
        window.localStorage.setItem('skill_farmingXP', skillData.farmingXP + '');
        window.localStorage.setItem('skill_farmAnimalXP', skillData.farmAnimalXP + '');
        window.localStorage.setItem('skill_gemXP', skillData.gemXP + '');
        window.localStorage.setItem('skill_fishXP', skillData.fishXP + '');
        window.localStorage.setItem('skill_woodXP', skillData.woodXP + '');
        window.localStorage.setItem('skill_oreXP', skillData.oreXP + '');
        window.localStorage.setItem('skill_runeXP', skillData.runeXP + '');
    }
}

function getSavedNumberData(key: string): number {
    return Number(window.localStorage.getItem(key) ? window.localStorage.getItem(key) : 0);
}
