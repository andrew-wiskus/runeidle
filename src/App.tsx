import React from 'react';
import { CssStyleSheet } from './config/types/Style';
import './config/styleReset.css';
import { Provider } from 'mobx-react';
import { Router } from 'routing/Router';
import { GameTickStore } from 'data/GameTickStore';
import { BeegDataStore } from 'data/BeegDataStore';
import { CardDataStore } from 'data/CardDataStore';
import { WorkerStore } from 'data/WorkerStore';
import { InventoryStore } from 'data/InventoryStore';
import { ChatStore } from 'data/ChatStore';
import { SkillStore } from 'data/SkillStore';
import { WindowStore } from 'data/WindowStore';
import { CombatStore } from 'data/CombatStore';

const beegDataStore = new BeegDataStore();
const workerStore = new WorkerStore();
const inventoryStore = new InventoryStore();
const chatStore = new ChatStore();
const skillStore = new SkillStore();
const combatStore = new CombatStore();
const cardDataStore = new CardDataStore(workerStore, inventoryStore, skillStore);
const gameTickStore = new GameTickStore(beegDataStore, cardDataStore, combatStore);
const windowStore = new WindowStore();

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider
                gameTickStore={gameTickStore}
                beegDataStore={beegDataStore}
                cardDataStore={cardDataStore}
                workerStore={workerStore}
                inventoryStore={inventoryStore}
                chatStore={chatStore}
                skillStore={skillStore}
                windowStore={windowStore}
                combatStore={combatStore}
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
        backgroundColor: '#ecece9',
        height: `100vh`,
        width: `100vw`,
    },
};
