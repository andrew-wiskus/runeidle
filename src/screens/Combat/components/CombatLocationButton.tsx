import React, { CSSProperties } from 'react';
import { images } from 'images/images';

export const CombatLocationButton = (props: { icon: any; isLocked: boolean; onClick: () => void }) => {
    if (props.isLocked) {
        return (
            <div style={styles.lockContainer} className='hover-light-grey'>
                <img src={images.lock} style={styles.lockImage} />
            </div>
        );
    }
    return (
        <div className='hover-opacity-dark' onClick={props.onClick} style={styles.buttonContainer}>
            <img src={props.icon} style={styles.buttonImage} />
        </div>
    );
};

const styles = {
    lockContainer: {
        display: 'flex',
        flex: 1,
        height: `100%`,
        border: '3px solid black',
        justifyContent: 'center',
        alignItems: 'center',
    } as CSSProperties,
    lockImage: {
        height: '80%',
        width: `80%`,
        objectFit: 'contain',
    } as CSSProperties,
    buttonContainer: {
        display: 'flex',
        flex: 1,
        height: `100%`,
        border: '3px solid black',
    } as CSSProperties,
    buttonImage: {
        height: '100%',
        width: `100%`,
        objectFit: 'cover',
    } as CSSProperties,
};
