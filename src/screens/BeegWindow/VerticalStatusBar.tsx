import React, { CSSProperties } from 'react';

export const VerticalStatusBar = (props: { max: number; value: number; icon: any; style?: any }) => {
    let percentMissing = 100 - (props.value / props.max) * 100 + '%';
    let valueText = `${props.value}/${props.max}`;

    return (
        <div
            style={{
                ...styles.container,
                ...props.style,
            }}
        >
            <img src={props.icon} style={styles.icon} alt={'icon'} />
            <div style={{ ...styles.fillBar, top: percentMissing }} />

            <div style={styles.valueTextContaier}>
                <p style={styles.valueText}>{valueText}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: 100,
        height: '90%',
        border: '2px solid black',
        position: 'relative',
    } as CSSProperties,
    icon: {
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: 10,
        left: 5,
        objectFit: 'contain',
        zIndex: 99,
    } as CSSProperties,
    fillBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'blue',
    } as CSSProperties,
    valueTextContaier: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -25,
        width: 100,
    } as CSSProperties,
    valueText: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
    } as CSSProperties,
};
