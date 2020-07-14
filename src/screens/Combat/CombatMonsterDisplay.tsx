import React, { CSSProperties } from 'react';
import { images, getMonsterBackground } from 'images/images';
import { inject, observer } from 'mobx-react';
import { CombatStore } from 'data/CombatStore';
import { waitForSeconds } from 'util_functions';
import { HitSplatDisplayer } from './HitSplatDisplayer';

const DEATH_ANIMATION_TIME = 1;

@inject('combatStore')
@observer
export class CombatMonsterDisplay extends React.Component<
    { combatStore?: CombatStore },
    { monsterIsDead: boolean; attackHistory: (number | undefined)[] }
> {
    public state = {
        monsterIsDead: false,
        attackHistory: [],
    };

    private startAttackAnimation = (damage: number) => {
        let dmgArray: (number | undefined)[] = [undefined, undefined, undefined];
        dmgArray[Math.floor(Math.random() * 3)] = damage;
        this.setState({ attackHistory: dmgArray });

        waitForSeconds(0.5).then((_) => {
            this.setState({ attackHistory: [undefined] });
        });
    };

    private startMonsterDeathAnimation = () => {
        this.setState({ monsterIsDead: true });
        waitForSeconds(DEATH_ANIMATION_TIME).then(() => {
            this.setState({ monsterIsDead: false });
        });

        return DEATH_ANIMATION_TIME;
    };

    componentDidMount() {
        this.props.combatStore!.setMonsterAnimationOnDeathCallback(this.startMonsterDeathAnimation);
        this.props.combatStore!.setAttackAnimationCallback(this.startAttackAnimation);
    }

    public render(): JSX.Element {
        let monster = this.props.combatStore!.currentMonster;
        let location = this.props.combatStore!.currentLocation;
        let healthText = monster.currentHealth + '/' + monster.maxHealth;
        let healthBarStyle = styles.getHealthBarStyle(monster.currentHealth, monster.maxHealth, this.state.monsterIsDead);

        return (
            <div style={styles.container}>
                {/* health bar */}
                <div style={styles.healthBarContainer}>
                    <div style={healthBarStyle} />
                    <h1 style={styles.monsterHealthText}>{healthText}</h1>
                </div>

                {/* monster display  */}
                <img style={styles.monsterBackground} src={getMonsterBackground(location)} />
                <img style={styles.getMonsterImageStyle(this.state.monsterIsDead)} src={monster.image} />

                <HitSplatDisplayer attackHistory={this.state.attackHistory} />
            </div>
        );
    }
}

const styles = {
    container: {
        width: '50%',
        borderLeft: '2px solid black',
        height: `100%`,
        position: 'relative',
        padding: 0,
        backgroundColor: 'blue',
    } as CSSProperties,
    getMonsterImageStyle: (isDead: boolean) => {
        return {
            height: 250,
            width: 200,
            objectFit: 'contain',
            position: 'absolute',
            top: 90,
            left: 45,
            opacity: isDead ? 0 : 1,
            transition: `ease ` + 0.2 + 's',
        } as CSSProperties;
    },
    monsterBackground: {
        height: `100%`,
        width: `100%`,
        objectFit: 'cover',
    } as CSSProperties,
    monsterHealthText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 7,
        textAlign: 'center',
    } as CSSProperties,
    getHealthBarStyle: (current: number, max: number, isDead: boolean) => {
        return {
            position: 'absolute',
            left: 0,
            right: 100 - Math.floor((current / max) * 100) + '%',
            top: 0,
            height: 30,
            backgroundColor: 'salmon',
            borderBottom: '3px solid black',
            opacity: isDead ? 0 : 1,
            transition: `opacity ease ` + DEATH_ANIMATION_TIME + 's',
        } as CSSProperties;
    },
    healthBarContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 30,
        backgroundColor: 'white',
        left: 0,
        borderBottom: '3px solid black',
    } as CSSProperties,
};
