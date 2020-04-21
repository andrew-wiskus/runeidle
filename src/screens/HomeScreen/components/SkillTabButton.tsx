import React from 'react';

export const SkillTabButton = (props: { icon: any; isLocked?: boolean; onClick: () => void }) => {
    let iconSize = props.isLocked ? '60%' : `90%`;

    return (
        <div
            onClick={() => props.onClick()}
            style={{
                height: `100%`,
                marginLeft: 1,
                marginRight: 1,
                backgroundColor: 'white',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img src={props.icon} style={{ width: iconSize, height: iconSize, objectFit: 'contain' }} />
        </div>
    );
};
