import React, { CSSProperties } from 'react';

export const PercentButton = (props: { onClick: () => void; text: string }) => {
    return (
        <div onClick={props.onClick} style={styles.container}>
            <h1 style={styles.headerText}>FEED THE BEEG</h1>
            <h1 style={styles.percentText}>{props.text}</h1>
        </div>
    );
};

const styles = {
    container: {
        width: 100,
        borderLeft: '3px solid grey',
    },
    headerText: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 10,
    } as CSSProperties,
    percentText: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        width: `100%`,
        marginTop: 20,
        fontSize: 28,
    } as CSSProperties,
};
