import React, { CSSProperties } from 'react';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';
import { InventoryItem } from 'data/InventoryStore';

interface State {}

interface Props {
    item: InventoryItem;
}

export class InventorySlot extends React.Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div
                style={{
                    width: 60,
                    height: 60,
                    margin: 3,
                    border: `3px solid black`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={this.props.item.card.icon}
                    style={{ height: `60%`, width: `60%`, marginBottom: 5, objectFit: 'contain' }}
                />
                <h1>{this.props.item.count}</h1>
            </div>
        );
    }
}
