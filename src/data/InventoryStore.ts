import { observable } from 'mobx';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';
import { SaveData } from './SaveData';
import { ALL_CARDS } from './_all_cards';

export interface InventoryItem {
    card: ResourceCardProps;
    count: number;
}

export class InventoryStore {
    @observable public inventory: InventoryItem[] = [];

    public constructor() {
        this.inventory = SaveData.loadInventory().map((idCountPair) => {
            let { id, count } = idCountPair;
            let card = ALL_CARDS.find((card) => card.id === id)!;

            return {
                card: card,
                count: count,
            };
        });
    }

    public addItemToInventory = (fromCard: ResourceCardProps, amount: number) => {
        let hasItemInInventory = this.inventory.some((x) => x.card.id === fromCard.id);

        if (hasItemInInventory) {
            this.inventory = this.inventory.map((item) => {
                if (item.card.id === fromCard.id) {
                    let updated = { ...item };
                    updated.count = updated.count + amount;
                    return updated;
                }

                return item;
            });
        }

        if (hasItemInInventory === false) {
            this.inventory.push({
                card: fromCard,
                count: amount,
            });
        }

        let itemSaved = this.inventory.find((item) => item.card.id === fromCard.id)!;
        SaveData.saveInventory(itemSaved);
    };
}
