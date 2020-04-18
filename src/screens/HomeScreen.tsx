import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';

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
        return <h1 style={{ padding: 25, fontSize: 88 }}>Hello Ludem</h1>;
    }
}
