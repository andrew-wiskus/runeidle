import * as React from 'react';
import { HomePage } from 'screens/HomePage';

interface Props {}

interface State {
    isLoading: boolean;
}

export class Router extends React.Component<Props, State> {
    public render(): JSX.Element {
        return <HomePage />;
    }
}
