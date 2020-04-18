import React from 'react';
import { ResourceCard } from './ResourceCard';
import { CardDataStore } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';

interface Props {
    cardDataStore?: CardDataStore;
}

@inject('cardDataStore')
@observer
export class CardDisplay extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div style={{ padding: 10 }}>
                <div style={{ width: 950, display: 'flex', flexWrap: 'wrap' }}>
                    {this.props.cardDataStore!.cardDisplay.map((card) => {
                        return (
                            <ResourceCard
                                name={card.name}
                                starCount={card.starCount}
                                currentXP={card.currentXP}
                                workers={card.workers}
                                unitsPerCycleMin={card.unitsPerCycleMin}
                                unitsPerCycleMax={card.unitsPerCycleMax}
                                xpPerCycle={card.xpPerCycle}
                                progressPerTick={card.progressPerTick}
                                cycleProgress={card.cycleProgress}
                                cycleMax={card.cycleMax}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
