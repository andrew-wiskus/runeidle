import React, { CSSProperties } from 'react';
import { ResourceCard } from './ResourceCard';
import { CardDataStore } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';
import { WorkerStore } from 'data/WorkerStore';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';

interface Props {
    cardDataStore?: CardDataStore;
    workerStore?: WorkerStore;
}

@inject('cardDataStore', 'workerStore')
@observer
export class CardDisplay extends React.Component<Props> {
    public render(): JSX.Element {
        const workerText = `workers available: ${this.props.workerStore!.workersAvailable}/${this.props.workerStore!.maxWorkers}`;

        return (
            <CollapsableHeader header='Cards' defaultShown={false}>
                <div style={styles.container}>
                    <h1 style={styles.workerText}>{workerText}</h1>

                    <div style={{}}>
                        <div style={styles.cardContainer}>
                            {this.props.cardDataStore!.cardDisplay.map((card) => {
                                return <ResourceCard key={card.id} {...card} />;
                            })}
                        </div>
                    </div>
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    container: {
        padding: 10,
        width: 780,
        border: `3px solid black`,
        borderTop: `none`,
        margin: 20,
        marginTop: 0,
        backgroundColor: 'white',
    } as CSSProperties,
    workerText: {
        paddingLeft: 20,
        fontSize: 35,
        fontFamily: 'sans-serif',
        paddingTop: 15,
    } as CSSProperties,
    cardContainer: {
        width: 950,
        display: 'flex',
        flexWrap: 'wrap',
    } as CSSProperties,
};
