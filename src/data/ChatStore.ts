import { FirebaseService } from './DatabaseService';
import { observable, when } from 'mobx';
import { SaveData } from './SaveData';
import moment from 'moment';

export class ChatStore {
    @observable public messages: string[] = [];
    @observable public userName: string = '';

    private startChatListener(overrideName: boolean) {
        const onAddedMessage = (message: any) => {
            this.messages.push(message.userName + ': ' + message.message);
        };

        when(
            () => this.userName == '' || overrideName,
            () => {
                FirebaseService.listenForChatMessage(onAddedMessage);
            }
        );
    }

    public constructor() {
        let { username } = SaveData.loadChat();
        this.userName = username;
        this.startChatListener(true);
    }
}
