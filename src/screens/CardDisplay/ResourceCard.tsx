import React, { CSSProperties } from 'react';
import { HorizontalProgressBar } from './components/HorizontalProgressBar';
import { getLevelFromEXP, getDecimalIfNeeded } from 'util_functions';
import { LevelXP } from 'data/_level_xp';
import { CardName } from './components/CardName';
import { WORKER_MULTIPLIER_FOR_PROGRESS, CardDataStore, TICK_WORKER_MULTIPLIER } from 'data/CardDataStore';
import { inject, observer } from 'mobx-react';
import { images } from 'images/images';
import { ItemClass } from 'data/_all_cards';
import { SkillStore } from 'data/SkillStore';

export interface ResourceCardProps {
    id: string;
    name: string;
    starCount: number;
    currentXP: number;
    workers: number;
    maxWorkers: number;
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
    itemClass: ItemClass;
    levelRequired: number;
}

interface Props extends ResourceCardProps {
    skillStore?: SkillStore;
}

@inject('cardDataStore', 'skillStore')
@observer
export class ResourceCard extends React.Component<Props> {
    private addWorkers = (byValue: number) => {
        this.props.cardDataStore!.addWorkersToCard(this.props.id, byValue);
    };

    public render(): JSX.Element {
        const workerMultipler = this.props.workers * WORKER_MULTIPLIER_FOR_PROGRESS;
        const currentXPText = `currentXP: ${this.props.currentXP + '/' + LevelXP[getLevelFromEXP(this.props.currentXP)]}`;
        const unitPerCycleText = `Output: ${this.props.unitsPerCycleMin} - ${this.props.unitsPerCycleMax}`;

        const xpPerCycleText = `XP: ${this.props.xpPerCycle * workerMultipler}  (${
            this.props.xpPerCycle + 'x' + workerMultipler
        })`;
        const cycleTimeText = `Cycle: ${this.props.progressPerCycle}p / ${Math.floor(
            this.props.tickCountForProgress - TICK_WORKER_MULTIPLIER * this.props.workers
        )}t : (${this.props.tickCountForProgress}t - ${getDecimalIfNeeded(TICK_WORKER_MULTIPLIER * this.props.workers)})`;
        const levelText = `level: ${getLevelFromEXP(this.props.currentXP)}`;

        let skillLevel = this.props.skillStore!.getlevelForSkill(this.props.itemClass);

        return (
            <div style={styles.container}>
                <CardName name={this.props.name.replace('_', ' ')} starCount={this.props.starCount} styles={styles} />
                <img src={this.props.icon} style={styles.cardImage} alt={this.props.name} />
                <HorizontalProgressBar value={this.props.cycleProgress} max={this.props.cycleMax} />

                <div style={{ height: 20 }} />

                {/* <p style={styles.cardText}>{levelText}</p>
                <p style={styles.cardText}>{currentXPText}</p> */}
                <p style={styles.cardText}>{unitPerCycleText}</p>
                {/* <p style={styles.cardText}>{xpPerCycleText}</p> */}
                <p style={styles.cardText}>{cycleTimeText}</p>
                <p style={styles.cardText}>Value: </p>

                <div style={{ height: 20 }} />

                <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                    <p style={{ ...styles.cardText, marginRight: 5 }}>workers: {this.props.workers}</p>
                    <div style={{ position: 'absolute', right: 0 }}>
                        <img style={styles.button} src={images.plus_one} onClick={() => this.addWorkers(1)} />
                        <img style={styles.button} src={images.plus_ten} onClick={() => this.addWorkers(10)} />
                        <img
                            style={styles.button}
                            src={images.x_button}
                            onClick={() => this.addWorkers(this.props.workers * -1)}
                        />
                    </div>
                </div>

                {skillLevel < this.props.levelRequired && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#000000CC',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={images.lock} style={{ height: 70, width: 70, marginBottom: 20, objectFit: 'contain' }} />
                        <h1 style={{ fontSize: 22, color: 'white', textAlign: 'center', width: `100%` }}>
                            {`required: Level ${this.props.levelRequired}`}
                        </h1>
                    </div>
                )}
            </div>
        );
    }
}

const styles = {
    button: {
        height: 30,
        width: 30,
        objectFit: 'contain',
        marginRight: 5,
        marginTop: -10,
        marginLeft: 5,
    } as CSSProperties,
    cardText: {
        marginBottom: 6,
        fontFamily: 'sans-serif',
        fontSize: 16,
        paddingLeft: 0,
    },
    container: {
        height: 150,
        width: 100,
        border: '2px solid black',
        margin: 8,
        padding: 10,
        position: 'relative',
    } as CSSProperties,
    cardImage: {
        width: `100%`,
        height: 75,
        objectFit: 'contain',
        marginBottom: 10,
    } as CSSProperties,
};
