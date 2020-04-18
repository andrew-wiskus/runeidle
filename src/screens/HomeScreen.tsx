import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { BeegStatus } from './BeegWindow/BeegStatus';
import { CardDisplay } from './CardDisplay/CardDisplay';
import { WorkerStore } from 'data/WorkerStore';
import { Inventory } from './Inventory/Inventory';
import { BeegFeedWindow } from './BeegWindow/BeegFeedWindow';

interface Props {
    gameTickStore?: GameTickStore;
    workerStore?: WorkerStore;
}

interface State {
    inputValue: string;
}

@inject('gameTickStore', 'workerStore')
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
                    Hello Ludum:
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingBottom: 20 }}>
                    tick engine running for: {this.props.gameTickStore!.currentTick} ticks
                </h1>

                <BeegStatus />
                <BeegFeedWindow />
                <Inventory />
                <CardDisplay />
            </div>
        );
    }
}
