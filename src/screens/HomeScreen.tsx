import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameTickStore } from 'data/GameTickStore';
import { BeegStatus } from './BeegWindow/BeegStatus';
import { CardDisplay } from './CardDisplay/CardDisplay';
import { WorkerStore } from 'data/WorkerStore';
import { Inventory } from './Inventory/Inventory';
import { BeegFeedWindow } from './BeegWindow/BeegFeedWindow';
import { BeegStore } from './BeegStore/BeegStore';
import { Chat } from './Chat/Chat';
import { SkillWindow } from './Skills/SkillWindow';
import { FirebaseService } from 'data/DatabaseService';

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
    public state: State = {
        inputValue: '',
    };

    private onChange = (event: any) => {
        this.setState({ inputValue: event.target.value });
    };

    private onKeyPress = (val: any) => {
        if (val.key == 'Enter') {
            FirebaseService.saveEmail(this.state.inputValue);
            this.setState({ inputValue: '' });
        }
    };

    public render(): JSX.Element {
        return (
            <div style={{ paddingLeft: 20, backgroundColor: '#ecece9', paddingBottom: 200 }}>
                <h1
                    style={{ padding: 25, fontSize: 88 }}
                    onClick={() => this.props.gameTickStore!.setTickAdditionalIncrement(-1)}
                >
                    LONG LIVE BEEG
                </h1>

                <h1 style={{ paddingLeft: 25, fontSize: 25, fontFamily: 'sans-serif' }}>
                    The BEEG, refered to only as BEEG is our omnipresent lord of BEEG. We have built our society around the BEEG's
                    happienss. We must keep him happy and healthy. If he dies, we die. The BEEG is our life, and our life is BEEG.
                    BEEG IS THE ONE TRUE LORD. <br />
                    <br />
                    "the rainstorm and the river are my brothers The heron and the otter are my friends And we are all connected
                    to each other In a circle, in a hoop that never ends" -Beeg our lord and savior 40,405 BCE
                </h1>

                <h1 style={{ padding: 25, fontSize: 47, paddingBottom: 20 }}>
                    age of BEEG: {this.props.gameTickStore!.currentTick}t
                </h1>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <BeegStatus />
                        <SkillWindow />
                        <Inventory />
                        <CardDisplay />
                        <Chat />

                        <div style={{ marginTop: 150, width: 700 }}>
                            <h1>
                                Hi! Swizzy here :) <br />
                                <br /> so, the game isn't finished haha :) and the "feed the BEEG" mechanic isn't really what I'd
                                like it to be.. need a bit more time a love to put into this game to really shine. (and change the
                                BEEG mechanic because I feel that was shoehorned in for the theme and didnt get love) But hey, I'm
                                this deep into it so I'm going to continue to develope it :)
                                <br />
                                <br /> two ways you can follow development:
                                <br /> 1. subscribe to{' '}
                                <a href='https://www.reddit.com/r/incremental_games' target='_blank'>
                                    r/incremental_games
                                </a>{' '}
                                because I'll post updates there,
                                <br />
                                <br />
                                <b>2. i learned I liked streaming so drop in and say hi..</b>
                                <a target='_blank' href={'https://www.twitch.tv/revokio'}>
                                    twitch.tv/revokio
                                </a>
                            </h1>
                            <br />
                            <br />
                            <h1 style={{ fontSize: 28 }}>or,</h1>
                            <br /> <h1 style={{ fontSize: 16 }}> enter your email here</h1>
                            <input
                                onChange={this.onChange}
                                value={this.state.inputValue}
                                onKeyPress={this.onKeyPress}
                                style={{ width: 500 }}
                                placeholder='iloveidlegames@iwantupdates.com'
                            />
                            <br />
                            <br /> I'll send you a handcrafted with love when I get the game in a playable state,
                            <br /> ie: when these 4 conditions are met <br />
                            <b>a. cloud-save database and simple auth to save across device</b>
                            <br />
                            <b>b. better ui that also scales to window widths and you can access all the windows easily</b>
                            <br />
                            <b>c. combat and crafting :]</b>
                            <br />
                            <b>d. balancing out the items/xp/value/etc (they're all the same atm :P)</b>
                            <br />
                            without those, wont be worth email! so I promise to only send when its ready to be played by lots of
                            people :)
                            <br />
                            <br />
                            thanks for checkin out the game! long live the BEEG <br />
                            <i>~written 1hr before compo ends in acceptance that I need another weekend or two :)</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
