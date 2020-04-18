import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { BeegStatus } from './BeegWindow/BeegStatus';
import { CardDisplay } from './CardDisplay/CardDisplay';

interface Props {
    gameTickStore?: GameTickStore;
}

interface State {
    inputValue: string;
}

@inject('gameTickStore')
@observer
export class HomeScreen extends React.Component<Props, State> {
    public state: State = {
        inputValue: '',
    };

    public render(): JSX.Element {
        return (
            <div>
                <h1
                    style={{ padding: 25, fontSize: 88 }}
                    onClick={() => this.props.gameTickStore!.setTickAdditionalIncrement(-1)}
                >
                    Hello Ludem:
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingBottom: 0 }}>
                    tick engine running for: {this.props.gameTickStore!.currentTick} ticks
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingTop: 5 }}>
                    ticks left: {this.props.gameTickStore!.timeLeft}
                </h1>

                <BeegStatus />
                <CardDisplay />
            </div>
        );
    }
}
