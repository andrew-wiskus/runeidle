import React from 'react';
import { CssStyleSheet } from './config/types/Style';
import './config/styleReset.css';
import { Provider } from 'mobx-react';
import { Router } from 'routing/Router';
import { GameTickStore } from 'data/GameTickStore';
import { BeegDataStore } from 'data/BeegDataStore';
import { CardDataStore } from 'data/CardDataStore';
import { WorkerStore } from 'data/WorkerStore';

const beegDataStore = new BeegDataStore();
const workerStore = new WorkerStore();
const cardDataStore = new CardDataStore(workerStore);
const gameTickStore = new GameTickStore(beegDataStore, cardDataStore);

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider
                gameTickStore={gameTickStore}
                beegDataStore={beegDataStore}
                cardDataStore={cardDataStore}
                workerStore={workerStore}
            >
                <div style={styles.container}>
                    <Router />
                </div>
            </Provider>
        );
    }
}

const styles: CssStyleSheet = {
    container: {
        backgroundColor: 'white',
        height: `100vh`,
        width: `100vw`,
    },
};