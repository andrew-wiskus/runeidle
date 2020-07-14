import React, { CSSProperties } from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { WorkerStore } from 'data/WorkerStore';
import { images } from 'images/images';
import { SkillTabButton } from './components/SkillTabButton';
import { InventoryPanel } from 'screens/Inventory/InventoryPanel';
import { Chat } from 'screens/Chat/Chat';
import { ProductionPanel } from 'screens/ProductionPanel/ProductionPanel';
import { WindowStore, WindowType } from 'data/WindowStore';
import { CombatPanel } from 'screens/Combat/CombatPanel';
import { ArcheologyPannel } from 'screens/Archeology/ArcheologyPanel';

interface Props {
    gameTickStore?: GameTickStore;
    workerStore?: WorkerStore;
    windowStore?: WindowStore;
}

interface State {
    inputValue: string;
}

@inject('gameTickStore', 'workerStore', 'windowStore')
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

                    {this.props.windowStore!.activeWindow == WindowType.GATHER && <ProductionPanel />}

                    {this.props.windowStore!.activeWindow == WindowType.COMBAT && <CombatPanel />}

                    {this.props.windowStore!.activeWindow == WindowType.EXPLORE && <ArcheologyPannel />}
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
        maxWidth: 220,
        height: `100%`,
        borderRight: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
    } as CSSProperties,
    hudContainer: {
        height: 200,
        width: `100%`,
        backgroundColor: 'white',
    } as CSSProperties,
};

@inject('workerStore', 'windowStore')
@observer
export class HUDPanel extends React.Component<{ workerStore?: WorkerStore; windowStore?: WindowStore }> {
    public render(): JSX.Element {
        let currentHealth = 85;
        let currentMana = 38;
        let maxHealth = 140;
        let maxMana = 90;

        return (
            <div style={styles.hudContainer}>
                <div
                    style={{
                        height: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        backgroundColor: 'black',
                        justifyContent: 'space-around',
                        alignItems: 'space-around',
                    }}
                >
                    <SelectWindowButton
                        window={WindowType.GATHER}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.GATHER)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                    <SelectWindowButton
                        window={WindowType.CRAFTING}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.CRAFTING)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                    <SelectWindowButton
                        window={WindowType.COMBAT}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.COMBAT)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                    <SelectWindowButton
                        window={WindowType.EXPLORE}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.EXPLORE)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                    <SelectWindowButton
                        window={WindowType.STORE}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.STORE)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                    <SelectWindowButton
                        window={WindowType.SETTINGS}
                        onClick={() => this.props.windowStore!.setWindow(WindowType.SETTINGS)}
                        activeWindow={this.props.windowStore!.activeWindow}
                    />
                </div>
                <StatusBar text={'Health'} backgroundColor={'salmon'} current={currentHealth} max={maxHealth} />
                <StatusBar text={'Mana'} backgroundColor={'skyblue'} current={currentMana} max={maxMana} />
                <h1 style={{ fontSize: 22, height: 25, textAlign: 'center', paddingTop: 7, borderTop: '3px solid black' }}>
                    Workers: {this.props.workerStore!.workersAvailable}/{this.props.workerStore!.maxWorkers}
                </h1>
            </div>
        );
    }
}

const StatusBar = (props: { text: string; backgroundColor: string; current: number; max: number }) => {
    return (
        <div
            style={{
                height: 30,
                width: `100%`,
                borderTop: '3px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 100 - Math.ceil((props.current / props.max) * 100) + '%',
                    bottom: 0,
                    top: 0,
                    backgroundColor: props.backgroundColor,
                }}
            ></div>
            <h1
                style={{ paddingTop: 7, paddingLeft: 15, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            >{`${props.text}: ${props.current}/${props.max}`}</h1>
        </div>
    );
};

const SelectWindowButton = (props: { window: WindowType; onClick: () => void; activeWindow: WindowType }) => {
    let icon = getWindowIconforWindow(props.window);
    let isSelected = props.window == props.activeWindow;

    return (
        <div
            onClick={props.onClick}
            className='hover-light-grey'
            style={{
                backgroundColor: 'white',
                height: 50,
                border: '2px solid black',
                minWidth: 70,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                filter: isSelected ? 'invert(1)' : 'invert(0)',
            }}
        >
            <img src={icon} style={{ objectFit: 'contain', height: '80%', width: '80%' }} />
        </div>
    );
};

export function getWindowIconforWindow(window: WindowType) {
    switch (window) {
        case WindowType.GATHER:
            return images.icons.icon_gather;
        case WindowType.COMBAT:
            return images.icons.icon_combat;
        case WindowType.CRAFTING:
            return images.icons.icon_craft;
        case WindowType.EXPLORE:
            return images.icons.icon_explore;
        case WindowType.STORE:
            return images.icons.icon_store;
        case WindowType.SETTINGS:
            return images.icons.icon_settings;
    }
}
