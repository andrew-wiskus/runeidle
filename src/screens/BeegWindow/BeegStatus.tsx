import React, { CSSProperties } from 'react';
import { inject, observer } from 'mobx-react';
import { BeegDataStore, MAX_HEALTH, MAX_HAPPINESS } from 'data/BeegDataStore';
import { images } from 'images/images';
import { VerticalStatusBar } from './VerticalStatusBar';

interface Props {
    beegDataStore?: BeegDataStore;
}

@inject('beegDataStore')
@observer
export class BeegStatus extends React.Component<Props> {
    public render() {
        return (
            <div style={styles.container}>
                <div style={styles.beegContainer}>
                    <VerticalStatusBar
                        value={this.props.beegDataStore!.health}
                        max={MAX_HEALTH}
                        icon={images.health_icon}
                    />

                    <img src={images.beeg} style={styles.beegImage} />

                    <VerticalStatusBar
                        value={this.props.beegDataStore!.happiness}
                        max={MAX_HAPPINESS}
                        icon={images.happy_icon}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: 20,
        width: 800,
        height: 420,
        border: '3px solid black',
    },
    beegImage: {
        width: 400,
        height: `100%`,
        objectFit: 'contain',
    } as CSSProperties,
    beegContainer: {
        height: 400,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    } as CSSProperties,
};
