import React from 'react';
import { ResourceCard } from './ResourceCard';
import { CardDataStore } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';

interface Props {
    cardDataStore?: CardDataStore;
}

interface State {
    cardDisplayHidden: boolean;
}

@inject('cardDataStore')
@observer
export class CardDisplay extends React.Component<Props, State> {
    public state: State = {
        cardDisplayHidden: false,
    };

    private hideCardDisplay = () => {
        this.setState({ cardDisplayHidden: !this.state.cardDisplayHidden });
    };

    public render(): JSX.Element {
        return (
            <div style={{ padding: 20 }}>
                <div style={{ width: `100%`, height: 30, backgroundColor: 'grey' }} onClick={this.hideCardDisplay}>
                    <p style={{ paddingTop: 7, paddingLeft: 15, color: 'white', fontFamily: 'sans-serif' }}>
                        CARD DISPLAY
                    </p>
                </div>
                <div style={{ padding: 0, display: this.state.cardDisplayHidden ? `none` : `initial` }}>
                    <div style={{ width: 950, display: 'flex', flexWrap: 'wrap' }}>
                        {this.props.cardDataStore!.cardDisplay.map((card) => {
                            return <ResourceCard {...card} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
