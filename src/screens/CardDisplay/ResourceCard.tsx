import React, { CSSProperties } from 'react';
import { images } from 'images/images';
import { HorizontalProgressBar } from './components/HorizontalProgressBar';
import { getLevelFromEXP } from 'util_functions';
import { LevelXP } from 'data/_level_xp';
import { CardName } from './components/CardName';

export interface ResourceCardProps {
    name: string;
    starCount: number;
    currentXP: number;
    workers: number;
    unitsPerCycleMin: number;
    unitsPerCycleMax: number;
    xpPerCycle: number;
    progressPerTick: number;
    cycleProgress: number;
    cycleMax: number;
}

export class ResourceCard extends React.Component<ResourceCardProps> {
    public render(): JSX.Element {
        const currentXPText = `currentXP: ${
            this.props.currentXP + '/' + LevelXP[getLevelFromEXP(this.props.currentXP)]
        }`;
        const unitPerCycleText = `Units Per Cycle: ${
            this.props.unitsPerCycleMin + ' - ' + this.props.unitsPerCycleMax
        }`;

        const xpPerCycleText = `XP Per Cycle: ${this.props.xpPerCycle}`;
        const cycleTimeText = `Progress Per Tick: ${this.props.progressPerTick}`;
        const levelText = `level: ${getLevelFromEXP(this.props.currentXP)}`;

        return (
            <div style={styles.container}>
                <img src={images.cow} style={styles.cardImage} />
                <HorizontalProgressBar value={this.props.cycleProgress} max={this.props.cycleMax} />

                <div style={{ height: 20 }} />

                <CardName name={this.props.name} starCount={this.props.starCount} styles={styles} />
                <p style={styles.cardText}>{levelText}</p>
                <p style={styles.cardText}>{currentXPText}</p>
                <p style={styles.cardText}>{unitPerCycleText}</p>
                <p style={styles.cardText}>{xpPerCycleText}</p>
                <p style={styles.cardText}>{cycleTimeText}</p>

                <div style={{ height: 20 }} />

                <p style={styles.cardText}>workers: {this.props.workers}</p>

                <button style={{ marginLeft: 20 }}>+1 worker</button>
                <button>+10 worker</button>
                <button>remove all</button>
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
        width: 280,
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
