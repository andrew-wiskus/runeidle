import React from 'react';
import { CssStyleSheet } from './config/types/Style';
import './config/styleReset.css';
import { Provider } from 'mobx-react';
import { Router } from 'routing/Router';
import { GameTickStore } from 'data/GameTickStore';

const gameTickStore = new GameTickStore();

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider gameTickStore={gameTickStore}>
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
