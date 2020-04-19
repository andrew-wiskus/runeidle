import React, { CSSProperties } from 'react';
import { ResourceCard } from './ResourceCard';
import { CardDataStore } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';
import { WorkerStore } from 'data/WorkerStore';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';
import { ItemClass } from 'data/_all_cards';

interface Props {
    cardDataStore?: CardDataStore;
    workerStore?: WorkerStore;
}

@inject('cardDataStore', 'workerStore')
@observer
export class CardDisplay extends React.Component<Props> {
    public render(): JSX.Element {
        const workerText = `workers available: ${this.props.workerStore!.workersAvailable}/${this.props.workerStore!.maxWorkers}`;

        let allCards = this.props.cardDataStore!.cardDisplay;
        let FARMING = allCards.filter((x) => x.itemClass == ItemClass.FARMING);
        let FARM_ANIMAL = allCards.filter((x) => x.itemClass == ItemClass.FARM_ANIMAL);
        let HERB = allCards.filter((x) => x.itemClass == ItemClass.HERB);
        let GEM = allCards.filter((x) => x.itemClass == ItemClass.GEM);
        let FISH = allCards.filter((x) => x.itemClass == ItemClass.FISH);
        let TREE = allCards.filter((x) => x.itemClass == ItemClass.TREE);
        let ORE = allCards.filter((x) => x.itemClass == ItemClass.ORE);
        let RUNE = allCards.filter((x) => x.itemClass == ItemClass.RUNE);

        return (
            <CollapsableHeader header='Production' defaultShown={false}>
                <div style={styles.container}>
                    <h1 style={styles.workerText}>{workerText}</h1>

                    <div style={{}}>
                        <div style={styles.cardContainer}>
                            <CollapsableHeader header='Farming Plants' style={styles.header} stylesOnShow={styles.onShow}>
                                {FARMING.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Farm Animals' style={styles.header} stylesOnShow={styles.onShow}>
                                {FARM_ANIMAL.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Herb Gather' style={styles.header} stylesOnShow={styles.onShow}>
                                {HERB.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Gem Mining' style={styles.header} stylesOnShow={styles.onShow}>
                                {GEM.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Fishing' style={styles.header} stylesOnShow={styles.onShow}>
                                {FISH.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Woodcutting' style={styles.header} stylesOnShow={styles.onShow}>
                                {TREE.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Mining' style={styles.header} stylesOnShow={styles.onShow}>
                                {ORE.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                            <CollapsableHeader header='Runecrafting' style={styles.header} stylesOnShow={styles.onShow}>
                                {RUNE.map((card) => {
                                    return <ResourceCard key={card.id} {...card} />;
                                })}
                            </CollapsableHeader>
                        </div>
                    </div>
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    header: {
        margin: 0,
        width: 750,
        marginTop: 5,
        marginBottom: 5,
    },
    onShow: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: 50,
    },
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
