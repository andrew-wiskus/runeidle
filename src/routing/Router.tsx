import * as React from 'react';
import { RRHomePage } from 'RR/RRHomePage';

interface Props {}

interface State {
    isLoading: boolean;
}

export class Router extends React.Component<Props, State> {
    public render(): JSX.Element {
        return <RRHomePage />;
    }
}
