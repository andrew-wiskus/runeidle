import React from 'react';
import { FirebaseService } from 'data/DatabaseService';

interface Props {}

interface State {
    inputValue: string;
}

export class ContactMe extends React.Component {
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
            <div style={{ marginTop: 150, width: 700 }}>
                <h1>
                    Hi! Swizzy here :) <br />
                    <br /> so, the game isn't finished haha :) and the "feed the BEEG" mechanic isn't really what I'd like it to
                    be.. need a bit more time a love to put into this game to really shine. (and change the BEEG mechanic because
                    I feel that was shoehorned in for the theme and didnt get love) But hey, I'm this deep into it so I'm going to
                    continue to develope it :)
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
                without those, wont be worth email! so I promise to only send when its ready to be played by lots of people :)
                <br />
                <br />
                thanks for checkin out the game! long live the BEEG <br />
                <i>~written 1hr before compo ends in acceptance that I need another weekend or two :)</i>
            </div>
        );
    }
}
