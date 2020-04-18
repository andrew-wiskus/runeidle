import React, { CSSProperties } from 'react';
import { HorizontalProgressBar } from './components/HorizontalProgressBar';
import { getLevelFromEXP, getDecimalIfNeeded } from 'util_functions';
import { LevelXP } from 'data/_level_xp';
import { CardName } from './components/CardName';
import { WORKER_MULTIPLIER_FOR_PROGRESS, CardDataStore, TICK_WORKER_MULTIPLIER } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';

export interface ResourceCardProps {
    id: string;
    name: string;
    starCount: number;
    currentXP: number;
    workers: number;
    unitsPerCycleMin: number;
    unitsPerCycleMax: number;
    xpPerCycle: number;
    progressPerCycle: number;
    cycleProgress: number;
    cycleMax: number;
    lastUpdatedTick: number;
    tickCountForProgress: number;
    cardDataStore?: CardDataStore;
    icon: any;
    basePointsPerSacrafice: number;
}

@inject('cardDataStore')
@observer
export class ResourceCard extends React.Component<ResourceCardProps> {
    private addWorkers = (byValue: number) => {
        this.props.cardDataStore!.addWorkersToCard(this.props.id, byValue);
    };

    public render(): JSX.Element {
        const workerMultipler = this.props.workers * WORKER_MULTIPLIER_FOR_PROGRESS;
        const currentXPText = `currentXP: ${
            this.props.currentXP + '/' + LevelXP[getLevelFromEXP(this.props.currentXP)]
        }`;
        const unitPerCycleText = `Units Per Cycle: ${
            this.props.unitsPerCycleMin + ' - ' + this.props.unitsPerCycleMax
        }`;

        const xpPerCycleText = `XP Per Cycle: ${this.props.xpPerCycle * workerMultipler}  (${
            this.props.xpPerCycle + 'x' + workerMultipler
        })`;
        const progressPerCycleText = `Progress Per Cycle: ${this.props.progressPerCycle}`;
        const cycleTimeText = `Cycle Time: ${Math.floor(
            this.props.tickCountForProgress - TICK_WORKER_MULTIPLIER * this.props.workers
        )}t : (${this.props.tickCountForProgress}t-${getDecimalIfNeeded(TICK_WORKER_MULTIPLIER * this.props.workers)})`;
        const levelText = `level: ${getLevelFromEXP(this.props.currentXP)}`;

        return (
            <div style={styles.container}>
                <img src={this.props.icon} style={styles.cardImage} alt={this.props.name} />
                <HorizontalProgressBar value={this.props.cycleProgress} max={this.props.cycleMax} />

                <div style={{ height: 20 }} />

                <CardName name={this.props.name} starCount={this.props.starCount} styles={styles} />
                <p style={styles.cardText}>{levelText}</p>
                <p style={styles.cardText}>{currentXPText}</p>
                <p style={styles.cardText}>{unitPerCycleText}</p>
                <p style={styles.cardText}>{xpPerCycleText}</p>
                <p style={styles.cardText}>{progressPerCycleText}</p>
                <p style={styles.cardText}>{cycleTimeText}</p>

                <div style={{ height: 20 }} />

                <p style={styles.cardText}>workers: {this.props.workers}</p>

                <button onClick={() => this.addWorkers(1)} style={{ marginLeft: 20 }}>
                    +1 worker
                </button>
                <button onClick={() => this.addWorkers(10)}>+10 worker</button>
                <button onClick={() => this.addWorkers(this.props.workers * -1)}>remove all</button>
            </div>
        );
    }
}

const styles = {
    cardText: {
        marginBottom: 6,
        fontFamily: 'sans-serif',
        fontSize: 16,
        paddingLeft: 20,
    },
    container: {
        height: 440,
        width: `28%`,
        border: '2px solid black',
        margin: 10,
        padding: 10,
    },
    cardImage: {
        width: 260,
        height: 150,
        objectFit: 'contain',
        marginBottom: 10,
    } as CSSProperties,
};
