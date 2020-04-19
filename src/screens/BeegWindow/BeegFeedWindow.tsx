import React, { CSSProperties } from 'react';
import { BeegDataStore } from 'data/BeegDataStore';
import { inject, observer } from 'mobx-react';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';

interface Props {
    beegDataStore?: BeegDataStore;
}

@inject('beegDataStore')
@observer
export class BeegFeedWindow extends React.Component<Props> {
    public render(): JSX.Element {
        const windowHeader = `Beeg Feed - Points: ${this.props.beegDataStore!.points}`;
        const beegPointsHeader = `BEEG POINTS: ${this.props.beegDataStore!.points}`;
        const beegDesiresHeader = `BEEG DESIRES: [ ${this.props.beegDataStore!.desires.map((x) => x.name).join(', ')} ]`;
        const beegDespisesHeader = `BEEG DESPISES: [ ${this.props.beegDataStore!.despises.map((x) => x.name).join(', ')} ]`;

        return (
            <CollapsableHeader header={windowHeader}>
                <div style={styles.container}>
                    <div style={styles.headerText}>
                        <h1>{beegPointsHeader}</h1>
                        <h1>{beegDesiresHeader}</h1>
                        <h1>{beegDespisesHeader}</h1>
                    </div>

                    <div style={styles.scrollBox}>
                        {this.props
                            .beegDataStore!.beegMessages.slice()
                            .reverse()
                            .map((message, i) => {
                                return (
                                    <h1 key={i} style={{ paddingBottom: 10 }}>
                                        {message}
                                    </h1>
                                );
                            })}
                    </div>
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        paddingTop: 10,
        border: '3px solid black',
        margin: 20,
        marginTop: 0,
        width: 760,
        borderTop: 'none',
        backgroundColor: 'white',
    } as CSSProperties,
    headerText: {
        padding: 20,
        fontFamily: 'sans-serif',
        fontSize: 22,
    } as CSSProperties,
    scrollBox: {
        height: 100,
        overflowY: 'scroll',
        margin: 20,
        marginTop: 20,
        display: 'flex',
        flex: 1,
        border: '2px solid grey',
        padding: 10,
        flexDirection: 'column-reverse',
        fontFamily: 'sans-serif',
    } as CSSProperties,
};
