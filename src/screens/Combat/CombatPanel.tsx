import React, { CSSProperties } from 'react';
import { images } from 'images/images';
import { inject, observer } from 'mobx-react';
import { CombatStore } from 'data/CombatStore';
import { CombatLocationSelectionRow } from './components/CombatLocationSelectionRow';
import { CombatMonsterDisplay } from './CombatMonsterDisplay';
import { CombatLocation } from 'models/CombatLocation';
import { CombatInfoDisplay } from './CombatInfoDisplay';

@inject('combatStore')
@observer
export class CombatPanel extends React.Component<{ combatStore?: CombatStore }> {
    private onClickLocation = (location: CombatLocation) => {
        this.props.combatStore!.changeLocation(location);
    };

    public render(): JSX.Element {
        return (
            <div style={styles.windowContainer}>
                <CombatLocationSelectionRow onClickLocation={(location: CombatLocation) => this.onClickLocation(location)} />

                <div style={styles.container}>
                    <div style={styles.topContainer}>
                        <CombatInfoDisplay />
                        <CombatMonsterDisplay />
                    </div>
                    <div style={{ height: 600 - 426, backgroundColor: 'grey' }} />
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        width: 800 - 226,
    } as CSSProperties,
    topContainer: {
        height: 350,
        width: `100%`,
        borderBottom: '3px solid black',
        display: 'flex',
        flexDirection: 'row',
    } as CSSProperties,
    windowContainer: {
        backgroundColor: 'white',
        width: 800 - 226,
        height: 394,
    },
};
