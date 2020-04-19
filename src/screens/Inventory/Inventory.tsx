import React, { CSSProperties } from 'react';
import { InventoryStore } from 'data/InventoryStore';
import { inject, observer } from 'mobx-react';
import { InventorySlot } from './components/InventorySlot';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';

interface Props {
    inventoryStore?: InventoryStore;
}

@inject('inventoryStore')
@observer
export class Inventory extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <CollapsableHeader header='Inventory'>
                <div style={styles.container}>
                    {this.props.inventoryStore!.inventory.map((item) => {
                        return <InventorySlot key={item.card.id} item={item} />;
                    })}
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '3px solid black',
        padding: 20,
        margin: 20,
        marginTop: 0,
        borderTop: `none`,
        width: 760,
        backgroundColor: 'white',
    } as CSSProperties,
};
