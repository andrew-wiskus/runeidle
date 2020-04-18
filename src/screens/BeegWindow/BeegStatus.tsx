import React, { CSSProperties } from 'react';
import { inject, observer } from 'mobx-react';
import { BeegDataStore, MAX_HEALTH, MAX_HAPPINESS } from 'data/BeegDataStore';
import { images } from 'images/images';
import { VerticalStatusBar } from './VerticalStatusBar';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';
import { getDecimalIfNeeded } from 'util_functions';

interface Props {
    beegDataStore?: BeegDataStore;
}

@inject('beegDataStore')
@observer
export class BeegStatus extends React.Component<Props> {
    public render() {
        const windowHeader = `Beeg Health: ${getDecimalIfNeeded(
            this.props.beegDataStore!.health
        )} | Beeg Happiness: ${getDecimalIfNeeded(this.props.beegDataStore!.happiness)}`;

        return (
            <CollapsableHeader header={windowHeader}>
                <div style={styles.container}>
                    <div style={styles.beegContainer}>
                        <VerticalStatusBar value={this.props.beegDataStore!.health} max={MAX_HEALTH} icon={images.health_icon} />

                        <img src={images.beeg} style={styles.beegImage} alt='the one true god' />

                        <VerticalStatusBar
                            value={this.props.beegDataStore!.happiness}
                            max={MAX_HAPPINESS}
                            icon={images.happy_icon}
                        />
                    </div>
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    container: {
        paddingTop: 20,
        marginLeft: 20,
        width: 800,
        border: '3px solid black',
        borderTop: 'none',
    },
    beegImage: {
        width: 400,
        height: `100%`,
        objectFit: 'contain',
    } as CSSProperties,
    beegContainer: {
        height: 400,
        padding: 20,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    } as CSSProperties,
};
