import React, { CSSProperties } from 'react';
import { InventoryItem, InventoryStore } from 'data/InventoryStore';
import { inject, observer } from 'mobx-react';
import { Star } from 'shared_components/Star';

export const InventorySlot = (props: { item: InventoryItem }) => {
    return (
        <div style={styles.container}>
            {new Array(props.item.starCount).fill('').map((x) => {
                return <Star />;
            })}
            <img src={props.item.icon} style={styles.icon} />
            <p style={styles.countText}>{props.item.count}</p>
        </div>
    );
};

const styles = {
    container: {
        width: 110,
        height: 110,
        border: '3px solid grey',
        borderRadius: 3,
        marginRight: 10,
        marginBottom: 10,
    },
    icon: {
        width: `100%`,
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
