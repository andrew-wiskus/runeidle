import React, { CSSProperties } from 'react';
import { images } from 'images/images';
import { inject, observer } from 'mobx-react';
import { CombatStore } from 'data/CombatStore';

@inject('combatStore')
@observer
export class CombatInfoDisplay extends React.Component<{ combatStore?: CombatStore }> {
    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                <div style={styles.infoTextContainer}>
                    <h1 style={styles.headerText}>{this.props.combatStore!.currentMonster.name}</h1>
                    <h1 style={styles.descriptionText}>{`xp per kill: 29`}</h1>
                    <h1 style={styles.descriptionText}>{`loot table: [ coins (0-25) @ 100%]`}</h1>
                    <h1 style={styles.descriptionText}>{`meele weakness: stab weapons`}</h1>
                    <h1 style={styles.descriptionText}>{`magic weakness: fire, water`}</h1>
                    <h1 style={styles.descriptionText}>{`meele defences: crush -30%`}</h1>
                    <h1 style={styles.descriptionText}>{`magic defences: none`}</h1>
                </div>

                <div style={styles.inventoryContainer}>
                    {new Array(35).fill('').map((x, i) => {
                        return <img style={styles.inventoryIconContainer(40)} src={undefined} />;
                    })}
                </div>
            </div>
        );
    }
}

const styles = {
    headerText: {
        fontSize: 28,
        fontWeight: 'lighter',
        marginBottom: 3,
        marginTop: 0,
    } as CSSProperties,
    infoTextContainer: {
        height: 135,
        borderBottom: '3px solid black',
        padding: 10,
        paddingBottom: 0,
    } as CSSProperties,
    container: {
        width: '50%',
        borderRight: '2px solid black',
        height: `100%`,
    } as CSSProperties,
    inventoryIconContainer: (index: number) => {
        return {
            height: 36,
            width: 36,
            border: '3px solid black',
            margin: 2,
            borderRadius: 5,
            backgroundColor: 'white',
            objectFit: 'contain',
            padding: index >= 22 ? 0 : 2,
        } as CSSProperties;
    },
    inventoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 350 - 135,
        width: `100%`,
        backgroundColor: '#33333333',
    } as CSSProperties,
    descriptionText: {
        fontSize: 14,
        fontWeight: 'lighter',
    } as CSSProperties,
};
