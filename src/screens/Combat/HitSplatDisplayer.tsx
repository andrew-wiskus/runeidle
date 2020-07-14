import React, { CSSProperties } from 'react';
import { images } from 'images/images';

export const HitSplatDisplayer = (props: { attackHistory: number[] }) => {
    // sorry ma, a little hacky. Maybe rewrite the attack history thing BUT: if you dont remember ....
    // how it works:
    // randomly selects an index 0-2 to put damage in array [attackHistory]
    // example, data in looks like this -> [undefined, undefined, 5];
    // in this case #3 would show
    // css transitions so if `undefiend` opacity is set to 0

    let hitsplats = [images.hitsplat.hitsplat_1, images.hitsplat.hitsplat_2, images.hitsplat.hitsplat_3];

    function renderHitSplat(forIndex: number) {
        return (
            <div style={styles.getContainerStyle(props.attackHistory[forIndex] != undefined)}>
                <img style={styles.splatImage} src={hitsplats[forIndex]} />
                <h1 style={styles.hitText}>{props.attackHistory[forIndex] || ''}</h1>
            </div>
        );
    }

    return (
        <>
            {renderHitSplat(0)}
            {renderHitSplat(1)}
            {renderHitSplat(2)}
        </>
    );
};

const styles = {
    getContainerStyle: (isShown: boolean) => {
        return {
            position: 'absolute',
            left: 100,
            top: 125,
            height: 100,
            width: 100,
            transition: 'ease 0.3s',
            opacity: isShown ? 1 : 0,
        } as CSSProperties;
    },
    splatImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
        width: 100,
        objectFit: 'contain',
    } as CSSProperties,
    hitText: {
        position: 'absolute',
        top: 35,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        zIndex: 99,
    } as CSSProperties,
};
