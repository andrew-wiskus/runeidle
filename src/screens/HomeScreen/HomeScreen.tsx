import React, { CSSProperties } from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { WorkerStore } from 'data/WorkerStore';
import { images } from 'images/images';
import { SkillTabButton } from './components/SkillTabButton';
import { InventoryPanel } from 'screens/Inventory/InventoryPanel';

interface Props {
    gameTickStore?: GameTickStore;
    workerStore?: WorkerStore;
}

interface State {
    inputValue: string;
}

@inject('gameTickStore', 'workerStore')
@observer
export class HomeScreen extends React.Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div style={styles.windowContainer}>
                <div style={styles.gameContainer}>
                    <div style={styles.leftPanelContainer}>
                        <div style={styles.hudContainer}>// important numbers</div>
                        <InventoryPanel />
                    </div>

                    <div style={styles.skillTabButtonRow}>
                        <SkillTabButton onClick={() => {}} icon={images.tree.mago_tree} />
                        <SkillTabButton onClick={() => {}} icon={images.ore.mithril_ore} />
                        <SkillTabButton onClick={() => {}} icon={images.fish.flat_fish} />
                        <SkillTabButton onClick={() => {}} icon={images.farming.cotton} />
                        <SkillTabButton onClick={() => {}} icon={images.farming.cow} />
                        <SkillTabButton onClick={() => {}} icon={images.herbs.ferralfew} />
                        <SkillTabButton onClick={() => {}} icon={images.rune.sky_rune} />
                        <SkillTabButton onClick={() => {}} icon={images.gem.diamo} />
                        <SkillTabButton onClick={() => {}} icon={images.lock} isLocked={true} />
                        <SkillTabButton onClick={() => {}} icon={images.lock} isLocked={true} />
                        <SkillTabButton onClick={() => {}} icon={images.lock} isLocked={true} />
                        <SkillTabButton onClick={() => {}} icon={images.lock} isLocked={true} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    windowContainer: {
        justifyContent: 'center',
        paddingTop: 50,
        display: 'flex',
        height: `100vh`,
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
        width: 220,
        height: `100%`,
        borderRight: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
    } as CSSProperties,
    hudContainer: {
        height: 200,
        width: `100%`,
        borderBottom: '3px solid black',
        backgroundColor: 'white',
    } as CSSProperties,
    skillTabButtonRow: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        borderBottom: '3px solid black',
        padding: 0,
        backgroundColor: 'black',
        flex: 1,
    } as CSSProperties,
};
