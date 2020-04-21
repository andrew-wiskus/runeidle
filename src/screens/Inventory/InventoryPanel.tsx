import React, { CSSProperties } from 'react';
import { images } from 'images/images';
import { InventoryFilterButton } from './components/InventoryFilterButton';
import { inject, observer } from 'mobx-react';
import { InventoryStore } from 'data/InventoryStore';
import { ItemClass } from 'data/_all_cards';
import { InventorySlot } from './components/InventorySlot';

interface Props {
    inventoryStore?: InventoryStore;
}

interface State {
    activeFilters: ItemClass[];
}

@inject('inventoryStore')
@observer
export class InventoryPanel extends React.Component<Props, State> {
    public state: State = {
        activeFilters: [],
    };

    private clickFilter = (itemClass: ItemClass) => {
        let index = this.state.activeFilters.findIndex((filter) => filter == itemClass);

        if (index != -1) {
            let array = [...this.state.activeFilters];
            array.splice(index, 1);
            this.setState({ activeFilters: array });
        } else {
            let newFilters = this.state.activeFilters;
            newFilters.push(itemClass);
            this.setState({ activeFilters: newFilters });
        }
    };

    private isSelected(itemClass: ItemClass) {
        return this.state.activeFilters.some((filter) => filter == itemClass);
    }

    public render(): JSX.Element {
        let inventory = [...this.props.inventoryStore!.inventory]
            .filter(
                (item) =>
                    this.state.activeFilters.length == 0 ||
                    this.state.activeFilters.some((filter) => filter == item.card.itemClass)
            )
            .sort((x, y) => x.card.itemClass - y.card.itemClass);

        return (
            <>
                <div style={styles.inventoryFilterContainer}>
                    <div style={styles.inventoryFilterRow}>
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.TREE)}
                            onClick={() => this.clickFilter(ItemClass.TREE)}
                            icon={images.tree.mago_tree}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.ORE)}
                            onClick={() => this.clickFilter(ItemClass.ORE)}
                            icon={images.ore.mithril_ore}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.FISH)}
                            onClick={() => this.clickFilter(ItemClass.FISH)}
                            icon={images.fish.flat_fish}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.FARMING)}
                            onClick={() => this.clickFilter(ItemClass.FARMING)}
                            icon={images.farming.cotton}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.FARM_ANIMAL)}
                            onClick={() => this.clickFilter(ItemClass.FARM_ANIMAL)}
                            icon={images.farming.cow}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.HERB)}
                            onClick={() => this.clickFilter(ItemClass.HERB)}
                            icon={images.herbs.ferralfew}
                        />
                    </div>
                    <div style={styles.inventoryFilterRow}>
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.RUNE)}
                            onClick={() => this.clickFilter(ItemClass.RUNE)}
                            icon={images.rune.sky_rune}
                        />
                        <InventoryFilterButton
                            isSelected={this.isSelected(ItemClass.GEM)}
                            onClick={() => this.clickFilter(ItemClass.GEM)}
                            icon={images.gem.diamo}
                        />

                        <InventoryFilterButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                        <InventoryFilterButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                        <InventoryFilterButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                        <InventoryFilterButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                    </div>
                </div>

                <div style={styles.inventoryContainer}>
                    {inventory.length == 0 && <h1 style={{ padding: 15 }}>no items here...</h1>}
                    {inventory.map((item) => {
                        return <InventorySlot key={item.card.id} item={item} />;
                    })}
                </div>
            </>
        );
    }
}

const styles = {
    inventoryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: `100%`,
        height: `calc(100% - 280px)`,
        overflowY: 'scroll',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    } as CSSProperties,
    inventoryFilterContainer: {
        width: `100%`,
        height: `80px`,
        borderBottom: '3px solid black',
        display: 'flex',
        flexWrap: 'wrap',
    } as CSSProperties,
    inventoryFilterRow: {
        height: '50%',
        width: `100%`,
        display: 'flex',
        backgroundColor: 'white',
    } as CSSProperties,
};
