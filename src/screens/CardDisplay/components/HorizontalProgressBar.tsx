import React, { CSSProperties } from 'react';
import { getDecimalIfNeeded } from 'util_functions';

interface Props {
    value: number;
    max: number;
}

export class HorizontalProgressBar extends React.Component<Props> {
    public render(): JSX.Element {
        const percentMissing = 100 - (this.props.value / this.props.max) * 100 + '%';

        return (
            <div style={styles.container}>
                <div style={{ ...styles.bar, right: percentMissing }} />
                <p style={styles.progressValue}>{Math.floor(this.props.value)}</p>
                <p style={styles.maxValue}>{this.props.max}</p>
            </div>
        );
    }
}

const styles = {
    container: {
        width: `100%`,
        position: 'relative',
        height: 40,
        border: '2px solid black',
    } as CSSProperties,
    bar: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'red',
    } as CSSProperties,
    progressValue: {
        position: 'absolute',
        top: 10,
        left: 10,
        bottom: 0,
        right: 0,
        textAlign: 'left',
        fontSize: 25,
        fontFamily: 'sans-serif',
    } as CSSProperties,
    maxValue: {
        position: 'absolute',
        top: 10,
        left: 0,
        bottom: 0,
        right: 10,
        textAlign: 'right',
        fontSize: 25,
        fontFamily: 'sans-serif',
    } as CSSProperties,
};
