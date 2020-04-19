import React from 'react';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';
import { FirebaseService } from 'data/DatabaseService';
import { inject, observer } from 'mobx-react';
import { ChatStore } from 'data/ChatStore';
import { ChatLog } from './ChatLog';
import { SaveData } from 'data/SaveData';

interface State {
    inputValue: string;
    nameValue: string;
}

interface Props {
    chatStore?: ChatStore;
}

// sorry ma, this one is a bit lazy.

@inject('chatStore')
@observer
export class Chat extends React.Component<Props, State> {
    public state: State = {
        inputValue: '',
        nameValue: '',
    };

    private onChangeText = (val: any) => {
        this.setState({ inputValue: val.target.value });
    };

    private onKeyPress = (event: any) => {
        if (event.key == 'Enter' && this.state.inputValue.trim() != '') {
            FirebaseService.sendChatMessage(this.state.inputValue, this.props.chatStore!.userName);
            this.setState({ inputValue: '' });
        }
    };

    private onChangeName = (val: any) => {
        this.setState({ nameValue: val.target.value });
    };

    private onNameKeyPress = (event: any) => {
        console.log(event.key);
        if (event.key == 'Enter' && this.state.nameValue.trim() != '') {
            console.log('ENTER');
            this.props.chatStore!.userName = this.state.nameValue + '';
            SaveData.saveChat({ username: this.state.nameValue + '' });
            this.setState({ nameValue: '' });
        }
    };

    public render(): JSX.Element {
        return (
            <CollapsableHeader header={'Chat'} defaultShown={false}>
                {this.props.chatStore!.userName == '' ? (
                    <div
                        style={{
                            width: 760,
                            padding: 20,
                            margin: 20,
                            marginTop: 0,
                            border: '3px solid black',
                            borderTop: 'none',
                            height: 100,
                            backgroundColor: 'white',
                        }}
                    >
                        <h1 style={{ fontSize: 18, marginBottom: 20 }}>To join chat, type your name and press enter..</h1>
                        <input
                            style={{
                                width: 400,
                                height: 50,
                                fontSize: 25,
                                fontFamily: 'sans-serif',
                                paddingLeft: 20,
                                border: `3px solid black`,
                            }}
                            placeholder='Enter Name and Please BEEG'
                            value={this.state.nameValue}
                            onChange={this.onChangeName}
                            onKeyPress={(val) => this.onNameKeyPress(val)}
                        />
                    </div>
                ) : (
                    <ChatLog
                        onChangeText={(val: any) => this.onChangeText(val)}
                        inputValue={this.state.inputValue}
                        onKeyPress={(key: any) => this.onKeyPress(key)}
                        messages={this.props.chatStore!.messages.slice().reverse()}
                    />
                )}
            </CollapsableHeader>
        );
    }
}
