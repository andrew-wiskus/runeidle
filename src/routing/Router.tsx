import * as React from 'react';
import { HomeScreen } from 'screens/HomeScreen';

interface Props {}

interface State {
    isLoading: boolean;
}

export class Router extends React.Component<Props, State> {
    public render(): JSX.Element {
        return <HomeScreen />;
    }
}
