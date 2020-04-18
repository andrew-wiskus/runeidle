import { observable } from 'mobx';

export class WorkerStore {
    @observable public workersAvailable = 100;
    @observable public maxWorkers = 100;

    public requestWorkers(count: number): number {
        let updatedValue = count;

        if (this.workersAvailable - count < 0) {
            let dif = this.workersAvailable - count;
            updatedValue = updatedValue + dif;
        }

        if (this.workersAvailable + count > this.maxWorkers) {
            // DONT CARE ABOUT THIS YET CUZ NO BUTTON TO REMOVE WORKERS BESIDES RESET
        }

        this.workersAvailable = this.workersAvailable - updatedValue;
        return updatedValue;
    }
}
