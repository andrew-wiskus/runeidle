import React from 'react';
import { CssStyleSheet } from './config/types/Style';
import './config/styleReset.css';
import { Provider } from 'mobx-react';
import { Router } from 'routing/Router';

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider>
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
