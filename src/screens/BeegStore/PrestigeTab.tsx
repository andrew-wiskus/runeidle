import { images } from 'images/images';
import React, { CSSProperties } from 'react';

// NOTE: Hello, sorry mom, if you're reading this you might be looking on how to unlock prestige.
//       truth is, I haven't implemented it yet. BUT I plan on doing so ok?
//       glad you're this invested in the game tho! :)

export class PrestigeTab extends React.Component {
    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                <div style={styles.infoContainer}>
                    <img src={images.lock} style={styles.image} />
                    <h1 style={styles.text}>LOCKED</h1>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: `calc(100% - 40px)`,
        display: 'flex',
    } as CSSProperties,
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } as CSSProperties,
    image: {
        marginBottom: 20,
        height: 100,
        width: 100,
        objectFit: 'contain',
    } as CSSProperties,
    text: {
        fontFamily: 'sans-serif',
        fontSize: 47,
        textAlign: 'center',
        color: 'white',
    } as CSSProperties,
};
