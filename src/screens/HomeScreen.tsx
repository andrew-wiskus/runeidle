import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { BeegStatus } from './BeegWindow/BeegStatus';
import { CardDisplay } from './CardDisplay/CardDisplay';
import { WorkerStore } from 'data/WorkerStore';

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
                    Hello Ludem:
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingBottom: 20 }}>
                    tick engine running for: {this.props.gameTickStore!.currentTick} ticks
                </h1>

                <BeegStatus />
                <h1
                    style={{ paddingLeft: 20, fontSize: 35, fontFamily: 'sans-serif', paddingTop: 15 }}
                >{`workers available: ${this.props.workerStore!.workersAvailable}/${
                    this.props.workerStore!.maxWorkers
                }`}</h1>
                <CardDisplay />
            </div>
        );
    }
}
