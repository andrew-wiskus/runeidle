import { FirebaseService } from './DatabaseService';
import { observable, when } from 'mobx';
import { SaveData } from './SaveData';
import moment from 'moment';

export class ChatStore {
    @observable public messages: { message: string; userName: string; timestamp: string }[] = [];
    @observable public userName: string = '';

    private startChatListener(overrideName: boolean) {
        const onAddedMessage = (message: any) => {
            this.messages.push({
                userName: message.userName,
                message: message.message,
                timestamp: message.timestamp,
            });
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
