import React from 'react';

export const InventoryFilterButton = (props: { onClick: () => void; icon: any; isLocked?: boolean; isSelected: boolean }) => {
    let iconSize = props.isLocked ? '60%' : `100%`;

    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                border: '1px solid black',
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: props.isSelected ? '#00ddff99' : 'white',
            }}
            className={props.isSelected ? 'hover-med-grey' : 'hover-light-grey'}
            onClick={() => props.onClick()}
        >
            <img src={props.icon} style={{ width: iconSize, height: iconSize, objectFit: 'contain' }} />
        </div>
    );
};
