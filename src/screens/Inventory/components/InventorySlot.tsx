import React, { CSSProperties } from 'react';
import { InventoryItem, InventoryStore } from 'data/InventoryStore';
import { Star } from 'shared_components/Star';
import { PercentButton } from './PercentButton';
import { inject, observer } from 'mobx-react';
import { BeegDataStore } from 'data/BeegDataStore';

interface State {
    expanded: boolean;
}

interface Props {
    inventoryStore?: InventoryStore;
    beegDataStore?: BeegDataStore;
    item: InventoryItem;
}

@inject('inventoryStore', 'beegDataStore')
@observer
export class InventorySlot extends React.Component<Props, State> {
    public state: State = {
        expanded: false,
    };

    private sacraficeItem = (percent: number) => {
        let amount = Math.ceil(this.props.item.count * percent);
        this.props.inventoryStore!.addItemToInventory(this.props.item.card, amount * -1);
        this.props.beegDataStore!.feedBeeg(this.props.item.card, amount);
    };

    public render(): JSX.Element {
        let expandedStyle = this.state.expanded
            ? {
                  width: `100%`,
              }
            : {};

        return (
            <div style={{ ...styles.container, ...expandedStyle }}>
                <div style={styles.starRow}>
                    {new Array(this.props.item.card.starCount).fill('').map((x, i) => {
                        return <Star key={i} />;
                    })}
                </div>
                <div style={styles.iconAndTextContainer}>
                    <div
                        style={{
                            ...styles.iconButton,
                            ...(this.state.expanded ? styles.activeButton : {}),
                        }}
                        onClick={() => this.setState({ expanded: !this.state.expanded })}
                    >
                        <img src={this.props.item.card.icon} style={styles.icon} alt={this.props.item.card.name} />
                        <p style={styles.countText}>{this.props.item.count}</p>
                    </div>
                </div>

                {this.state.expanded && (
                    <>
                        <div style={styles.percentButtonRow}>
                            <PercentButton onClick={() => this.sacraficeItem(0.05)} text={'5%'} />
                            <PercentButton onClick={() => this.sacraficeItem(0.5)} text={'50%'} />
                            <PercentButton onClick={() => this.sacraficeItem(1.0)} text={'100%'} />
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const styles = {
    activeButton: {
        backgroundColor: '#33333309',
        top: 0,
    } as CSSProperties,
    starRow: {
        display: 'flex',
        flexDirection: 'row',
    } as CSSProperties,
    percentButtonRow: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 300,
        display: 'flex',
        flexDirection: 'row',
    } as CSSProperties,
    iconButton: {
        width: 110,
        height: 100,
        position: 'absolute',
        top: 0,
        paddingTop: 10,
    } as CSSProperties,
    iconAndTextContainer: {
        width: `100%`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } as CSSProperties,
    container: {
        width: 110,
        height: 110,
        border: '3px solid grey',
        borderRadius: 3,
        marginRight: 10,
        marginBottom: 10,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    } as CSSProperties,
    icon: {
        width: 110,
        height: 50,
        objectFit: 'contain',
        marginTop: 5,
    } as CSSProperties,
    countText: {
        fontFamily: 'sans-serif',
        fontSize: 22,
        textAlign: 'center',
        width: `100%`,
        marginTop: 10,
    } as CSSProperties,
};
