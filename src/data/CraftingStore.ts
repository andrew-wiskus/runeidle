import { CraftableItem } from "models/Item/CraftingConfig";
import { InventoryStore } from "./InventoryStore";

export class CraftingStore {

    private inventoryStore: InventoryStore;

    public constructor(inventoryStore: InventoryStore) {
        this.inventoryStore = inventoryStore;
    }

    public onCraftItem(item: CraftableItem) {
        let req = item.requiredItems;
        let levelReq = item.levelRequired;
        let failChance = item.failChance;
        let product = item.item;
    }
}