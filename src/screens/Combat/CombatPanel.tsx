import React from 'react';
import { images } from 'images/images';
import { inject, observer } from 'mobx-react';
import { CombatLocation, CombatStore } from 'data/CombatStore';
import { waitForSeconds } from 'util_functions';

@inject('combatStore')
@observer
export class CombatPanel extends React.Component<{ combatStore?: CombatStore }> {
    private onClickLocation = (location: CombatLocation) => {
        this.props.combatStore!.changeLocation(location);
    };

    public render(): JSX.Element {
        return (
            <div style={{ backgroundColor: 'white', width: 800 - 226, height: 594 }}>
                <div
                    style={{ height: 70, width: `100%`, borderBottom: '3px solid black', display: 'flex', flexDirection: 'row' }}
                >
                    <CombatLocationButton
                        onClick={() => this.onClickLocation(CombatLocation.FARM)}
                        icon={images.combatBG.FARM_BG}
                        isLocked={false}
                    />
                    <CombatLocationButton
                        onClick={() => this.onClickLocation(CombatLocation.SEWER)}
                        icon={images.combatBG.SEWER_BG}
                        isLocked={false}
                    />
                    <CombatLocationButton
                        onClick={() => this.onClickLocation(CombatLocation.GRAVE)}
                        icon={images.combatBG.GRAVE_BG}
                        isLocked={false}
                    />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                    <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
                </div>
                <div style={{ backgroundColor: 'white', width: 800 - 226, height: 394 }}>
                    <div
                        style={{
                            height: 350,
                            width: `100%`,
                            borderBottom: '3px solid black',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <div
                            style={{
                                width: '50%',
                                borderRight: '2px solid black',
                                height: `100%`,
                            }}
                        >
                            <div
                                style={{
                                    height: 135,
                                    borderBottom: '3px solid black',
                                    padding: 10,
                                    paddingBottom: 0,
                                }}
                            >
                                <h1 style={{ fontSize: 28, fontWeight: 'lighter', marginBottom: 3, marginTop: 0 }}>
                                    {this.props.combatStore!.currentMonster.name}
                                </h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`xp per kill: 29`}</h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`loot table: [ coins (0-25) @ 100%]`}</h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`meele weakness: stab weapons`}</h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`magic weakness: fire, water`}</h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`meele defences: crush -30%`}</h1>
                                <h1 style={{ fontSize: 14, fontWeight: 'lighter' }}>{`magic defences: none`}</h1>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    height: 350 - 135,
                                    width: `100%`,
                                    backgroundColor: '#33333333',
                                }}
                            >
                                {new Array(35).fill('').map((x, i) => {
                                    return (
                                        <img
                                            style={{
                                                height: 36,
                                                width: 36,
                                                border: '3px solid black',
                                                margin: 2,
                                                borderRadius: 5,
                                                backgroundColor: 'white',
                                                objectFit: 'contain',
                                                padding: i >= 22 ? 0 : 2,
                                            }}
                                            src={i < 10 ? images.fish.angler_fish : i < 22 ? images.fish.dolshark_fish : null}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <CombatMonsterDisplay />
                    </div>
                    <div style={{ height: 600 - 426, backgroundColor: 'grey' }} />
                </div>
            </div>
        );
    }
}

const CombatLocationButton = (props: { icon: any; isLocked: boolean; onClick: () => void }) => {
    if (props.isLocked) {
        return (
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    height: `100%`,
                    border: '3px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className='hover-light-grey'
            >
                <img src={images.lock} style={{ height: '80%', width: `80%`, objectFit: 'contain' }} />
            </div>
        );
    }
    return (
        <div
            className='hover-opacity-dark'
            onClick={props.onClick}
            style={{ display: 'flex', flex: 1, height: `100%`, border: '3px solid black' }}
        >
            <img src={props.icon} style={{ height: '100%', width: `100%`, objectFit: 'cover' }} />
        </div>
    );
};

const DEATH_ANIMATION_TIME = 1;

@inject('combatStore')
@observer
class CombatMonsterDisplay extends React.Component<
    { combatStore?: CombatStore },
    { monsterIsDead: boolean; attackHistory: (number | undefined)[] }
> {
    public state = {
        monsterIsDead: false,
        attackHistory: [],
    };

    private bg = (location: CombatLocation) => {
        switch (location) {
            case CombatLocation.GRAVE:
                return images.combatBG.GRAVE_BG;
            case CombatLocation.FARM:
                return images.combatBG.FARM_BG;
            case CombatLocation.SEWER:
                return images.combatBG.SEWER_BG;
            default:
                throw Error("You haven't implemented a bg for this combat yet dawg, but good on you for expanding");
        }
    };

    private startAttackAnimation = (damage: number) => {
        // throw this into callback for 'onAttackCallback' in combat store;
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
        let currentMonster = this.props.combatStore!.currentMonster;

        return (
            <div
                style={{
                    width: '50%',
                    borderLeft: '2px solid black',
                    height: `100%`,
                    position: 'relative',
                    padding: 0,
                    backgroundColor: 'blue',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: 'white',
                        left: 0,
                        borderBottom: '3px solid black',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 100 - Math.floor((currentMonster.currentHealth / currentMonster.maxHealth) * 100) + '%',
                            top: 0,
                            height: 30,
                            backgroundColor: 'salmon',
                            borderBottom: '3px solid black',
                            opacity: this.state.monsterIsDead ? 0 : 1,
                            transition: `opacity ease ` + DEATH_ANIMATION_TIME + 's',
                        }}
                    />

                    <h1 style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingTop: 7, textAlign: 'center' }}>
                        {currentMonster.currentHealth + '/' + currentMonster.maxHealth}
                    </h1>
                </div>
                <img
                    style={{ height: `100%`, width: `100%`, objectFit: 'cover' }}
                    src={this.bg(this.props.combatStore!.currentLocation)}
                />
                <img
                    style={{
                        height: 250,
                        width: 200,
                        objectFit: 'contain',
                        position: 'absolute',
                        top: 90,
                        left: 45,
                        opacity: this.state.monsterIsDead ? 0 : 1,
                        transition: `ease ` + 0.2 + 's',
                    }}
                    src={currentMonster.image}
                />

                <HitSplatDisplayer attackHistory={this.state.attackHistory} />
            </div>
        );
    }
}

const HitSplatDisplayer = (props: { attackHistory: number[] }) => {
    // constant animation of 0/1/2 rotating in time.
    //[undefined, undefined, 5];

    let shouldShowSplat = props.attackHistory.some((x) => x != undefined);
    let hitsplats = [images.hitsplat.hitsplat_1, images.hitsplat.hitsplat_2, images.hitsplat.hitsplat_3];

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    left: 100,
                    top: 125,
                    height: 100,
                    width: 100,
                    transition: 'ease 0.3s',
                    opacity: props.attackHistory[0] != undefined ? 1 : 0,
                }}
            >
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 100,
                        width: 100,
                        objectFit: 'contain',
                    }}
                    src={hitsplats[0]}
                />
                <h1
                    style={{
                        position: 'absolute',
                        top: 35,
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 30,
                        zIndex: 99,
                    }}
                >
                    {props.attackHistory[0] || ''}
                </h1>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: 20,
                    top: 205,
                    height: 100,
                    width: 100,
                    transition: 'ease 0.3s',
                    opacity: props.attackHistory[1] != undefined ? 1 : 0,
                }}
            >
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 100,
                        width: 100,
                        objectFit: 'contain',
                    }}
                    src={hitsplats[1]}
                />
                <h1
                    style={{
                        position: 'absolute',
                        top: 35,
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 30,
                        zIndex: 99,
                    }}
                >
                    {props.attackHistory[1] || ''}
                </h1>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: 150,
                    top: 220,
                    height: 100,
                    width: 100,
                    transition: 'ease 0.3s',
                    opacity: props.attackHistory[2] != undefined ? 1 : 0,
                }}
            >
                <h1
                    style={{
                        position: 'absolute',
                        top: 35,
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 30,
                        zIndex: 99,
                    }}
                >
                    {props.attackHistory[2] || ''}
                </h1>

                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 100,
                        width: 100,
                        objectFit: 'contain',
                    }}
                    src={hitsplats[2]}
                />
            </div>
        </>
    );
};
