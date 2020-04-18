import { observable } from 'mobx';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';
import { SaveData } from './SaveData';
import { ALL_CARDS } from './_all_cards';

export interface InventoryItem {
    idFromCard: string;
    count: number;
    starCount: number;
    icon: any;
    name: string;
}

export class InventoryStore {
    @observable public inventory: InventoryItem[] = [];

    public constructor() {
        this.inventory = SaveData.loadInventory().map((idCountPair) => {
            let { id, count } = idCountPair;
            let card = ALL_CARDS.find((card) => card.id === id)!;

            return {
                idFromCard: card.id,
                count: count,
                starCount: card.starCount,
                icon: card.icon,
                name: card.name,
            };
        });
    }

    public addItemToInventory = (fromCard: ResourceCardProps, amount: number) => {
        let hasItemInInventory = this.inventory.some((x) => x.idFromCard === fromCard.id);

        if (hasItemInInventory) {
            this.inventory = this.inventory.map((item) => {
                if (item.idFromCard === fromCard.id) {
                    let updated = { ...item };
                    updated.count = updated.count + amount;
                    return updated;
                }

                return item;
            });
        }

        if (hasItemInInventory === false) {
            this.inventory.push({
                idFromCard: fromCard.id,
                count: amount,
                starCount: fromCard.starCount,
                icon: fromCard.icon,
                name: fromCard.name,
            });
        }

        let itemSaved = this.inventory.find((item) => item.idFromCard === fromCard.id)!;
        SaveData.saveInventory(itemSaved);
    };
}
