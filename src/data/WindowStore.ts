import { observable } from 'mobx';

export enum WindowType {
    GATHER,
    COMBAT,
    CRAFTING,
    EXPLORE,
    STORE,
    SETTINGS,
}

export class WindowStore {
    @observable public activeWindow: WindowType = WindowType.GATHER;

    public setWindow(type: WindowType) {
        this.activeWindow = type;
    }
}
