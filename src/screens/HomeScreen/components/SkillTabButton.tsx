import React from 'react';

export const SkillTabButton = (props: { icon: any; isLocked?: boolean; onClick: () => void; isSelected: boolean }) => {
    let iconSize = props.isLocked ? '60%' : `90%`;

    return (
        <div
            className='hover-light-grey'
            onClick={() => props.onClick()}
            style={{
                height: `100%`,
                marginLeft: 1,
                marginRight: 1,
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.isSelected ? '#00ddff' : 'white',
            }}
        >
            <img src={props.icon} style={{ width: iconSize, height: iconSize, objectFit: 'contain' }} />
        </div>
    );
};
