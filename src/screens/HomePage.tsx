import { GameTickStore } from 'data/GameTickStore'
import { inject, observer } from 'mobx-react'
import React from 'react'

@inject('gameTickStore')
@observer
export class HomePage extends React.Component<{gameTickStore?: GameTickStore}, {}> {
    public render() {
        return <h1>hello world {this.props.gameTickStore!.currentTick}</h1>
    }
}