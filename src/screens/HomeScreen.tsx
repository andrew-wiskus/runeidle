import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { BeegStatus } from './BeegWindow/BeegStatus';
import { CardDisplay } from './CardDisplay/CardDisplay';
import { WorkerStore } from 'data/WorkerStore';
import { Inventory } from './Inventory/Inventory';
import { BeegFeedWindow } from './BeegWindow/BeegFeedWindow';
import { BeegStore } from './BeegStore/BeegStore';
import { Chat } from './Chat/Chat';

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
            <div style={{ paddingLeft: 20, backgroundColor: '#ecece9', paddingBottom: 200 }}>
                <h1
                    style={{ padding: 25, fontSize: 88 }}
                    onClick={() => this.props.gameTickStore!.setTickAdditionalIncrement(-1)}
                >
                    LONG LIVE BEEG
                </h1>

                <h1 style={{ paddingLeft: 25, fontSize: 25, fontFamily: 'sans-serif' }}>
                    The BEEG, refered to only as BEEG is our omnipresent lord of BEEG. We have built our society around the BEEG's
                    happienss. We must keep him happy and healthy. If he dies, we die. The BEEG is our life, and our life is BEEG.
                    BEEG IS THE ONE TRUE LORD. <br />
                    <br />
                    "the rainstorm and the river are my brothers The heron and the otter are my friends And we are all connected
                    to each other In a circle, in a hoop that never ends" -Beeg our lord and savior 40,405 BCE
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingBottom: 20 }}>
                    age of BEEG: {this.props.gameTickStore!.currentTick}t
                </h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <BeegStatus />
                        <Inventory />
                        <CardDisplay />
                        <Chat />
                    </div>
                </div>
            </div>
        );
    }
}
