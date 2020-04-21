import React, { CSSProperties } from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { WorkerStore } from 'data/WorkerStore';
import { images } from 'images/images';
import { SkillTabButton } from './components/SkillTabButton';
import { InventoryPanel } from 'screens/Inventory/InventoryPanel';
import { Chat } from 'screens/Chat/Chat';
import { ProductionPanel } from 'screens/ProductionPanel/ProductionPanel';

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
    public render(): JSX.Element {
        return (
            <div style={styles.windowContainer}>
                <div style={styles.gameContainer}>
                    <div style={styles.leftPanelContainer}>
                        <HUDPanel />
                        <InventoryPanel />
                    </div>
                    <ProductionPanel />
                </div>

                <Chat />
            </div>
        );
    }
}

const styles = {
    windowContainer: {
        alignItems: 'center',
        paddingTop: 50,
        display: 'flex',
        height: `100vh`,
        flexDirection: 'column',
    } as CSSProperties,
    gameContainer: {
        width: 800,
        height: 600,
        border: '3px solid black',
        boxSizing: `border-box`,
        display: 'flex',
        flexDirection: 'row',
    } as CSSProperties,
    leftPanelContainer: {
        minWidth: 220,
        height: `100%`,
        borderRight: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
    } as CSSProperties,
    hudContainer: {
        height: 200,
        width: `100%`,
        borderBottom: '3px solid black',
        backgroundColor: 'white',
        padding: 10,
    } as CSSProperties,
};

@inject('workerStore')
@observer
export class HUDPanel extends React.Component<{ workerStore?: WorkerStore }> {
    public render(): JSX.Element {
        return (
            <div style={styles.hudContainer}>
                <h1 style={{ fontSize: 22, marginTop: 10, marginBottom: 20 }}>
                    Workers: {this.props.workerStore!.workersAvailable}/{this.props.workerStore!.maxWorkers}
                </h1>

                <div
                    onClick={() => alert('coming soon :) promise (written on 4/20/2020)')}
                    className='hover-light-grey'
                    style={{ height: 40, width: `100%`, border: '3px solid black', borderRadius: 6, paddingTop: 7 }}
                >
                    <h1
                        className='hover-bold'
                        style={{ fontSize: 22, fontWeight: 'lighter', textAlign: 'center', width: `100%` }}
                    >
                        CRAFT
                    </h1>
                </div>

                <div
                    onClick={() => alert('coming soon :) promise (written on 4/20/2020)')}
                    className='hover-light-grey'
                    style={{ height: 40, width: `100%`, marginTop: 5, border: '3px solid black', borderRadius: 6, paddingTop: 7 }}
                >
                    <h1
                        className='hover-bold'
                        style={{ fontSize: 22, fontWeight: 'lighter', textAlign: 'center', width: `100%` }}
                    >
                        FIGHT
                    </h1>
                </div>

                <div
                    onClick={() => alert('coming soon :) promise (written on 4/20/2020)')}
                    className='hover-light-grey'
                    style={{ height: 40, width: `100%`, marginTop: 5, border: '3px solid black', borderRadius: 6, paddingTop: 7 }}
                >
                    <h1
                        className='hover-bold'
                        style={{ fontSize: 22, fontWeight: 'lighter', textAlign: 'center', width: `100%` }}
                    >
                        TRADE
                    </h1>
                </div>
            </div>
        );
    }
}
