import { observable } from 'mobx';
import { SaveData } from './SaveData';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';
import { ALL_CARDS } from './_all_cards';
import { getRandomFromArray, getDecimalIfNeeded } from 'util_functions';

export const MAX_HAPPINESS = 100;
export const MAX_HEALTH = 100;
export const HEALTH_LOST_PER_TICK = 0.01;
export const HEALTH_LOSS_ON_TICK_COUNT = 10;
const despisedMessages = [
    'The BEEG growls with anger',
    'The BEEG takes your sacrafice but scowls',
    'The BEEG is appauled, snaching your sacrifice',
    "The BEEG pouts, but doesn't do much else",
    "You've upset the BEEG! shame",
    'SHAME!! SHAME!! SHAME!! SHAME!! you hear in the distance',
    "The BEEG eats your dog in anger, you don't remember having a dog",
    'BEEG BOY he yells as he screams in agony',
    'What the BEEG is this???',
    'Oh My BEEG! Someone yells as the BEEG eats them in anger',
    'Why u do this? BEEG cries',
    'Disgusting.',
    'Seirously?',
    "F to pay respects to the BEEG's happiness",
];

const desireMessages = [
    'BEEG BOY HAPPY BOY',
    'Thanks a million declared the BEEG',
    'I will allow you to live another day! The BEEG exclaims',
    'The BEEG glows, you think this is a good thing',
    `BEEG writes some cryptic language in the air... it says "uwu"`,
    'The BEEG smiles, which is odd because it has no face',
    'The BEEG shines a light from the sky, showing the city in sparkles',
    'YUM YUM YUM yells the BEEG as he devours your gift',
    'The BEEG starts singing A Milli, A Milli.. the bass is loud as hell',
    "The BEEG starts to dance, but doesn't move",
];

export class BeegDataStore {
    @observable public health = 100;
    @observable public happiness = 100;
    @observable public beegMessages: string[] = ['the BEEG welcomes you into the new day..'];
    @observable public points: number = 0;
    @observable public desires: ResourceCardProps[] = [ALL_CARDS[0]];
    @observable public despises: ResourceCardProps[] = [ALL_CARDS[1]];

    private currentTick: number = 0;

    public setStartTick(tick: number) {
        this.currentTick = tick;
        let saveData = SaveData.loadBeegData();
        this.health = saveData.health;
        this.points = saveData.points;
        this.happiness = saveData.happiness;
    }

    public onTickUpdate(newTick: number) {
        this.currentTick = newTick;
        if (newTick % HEALTH_LOSS_ON_TICK_COUNT == 0) {
            this.health = Math.max(0, this.health - HEALTH_LOST_PER_TICK);
            this.saveData();
        }
    }

    public updateHappiness(byValue: number, explicit?: number) {
        if (explicit !== undefined) {
            this.happiness = explicit;
        } else {
            this.happiness = this.happiness + byValue;
            this.happiness = Math.max(0, this.happiness);
            this.happiness = Math.min(MAX_HAPPINESS, this.happiness);
        }

        this.saveData();
    }

    public updateHealth(byValue: number, explicit?: number) {
        if (explicit !== undefined) {
            this.health = explicit;
        } else {
            this.health = this.health + byValue;

            this.health = Math.max(0, this.health);
            this.health = Math.min(MAX_HEALTH, this.health);
        }

        this.saveData();
    }

    public feedBeeg(card: ResourceCardProps, amount: number) {
        // beeg points
        this.points = Number(getDecimalIfNeeded(this.points + Number(getDecimalIfNeeded(card.basePointsPerSacrafice * amount))));

        // beeg happiness / health
        let isDesired = this.desires.some((x) => x.id === card.id);
        let isDespised = this.despises.some((x) => x.id === card.id);
        let happinessPoints = Number(
            getDecimalIfNeeded(card.basePointsPerSacrafice * amount * (isDesired ? 3 : 1) * (isDespised ? -3 : 1))
        );
        this.updateHappiness(happinessPoints);
        this.updateHealth(card.basePointsPerSacrafice * amount);

        if (isDespised) {
            let message = getRandomFromArray(despisedMessages);
            this.beegMessages.push(message + ': ' + happinessPoints + ' happiness');
        }

        if (isDesired) {
            let message = getRandomFromArray(desireMessages);
            this.beegMessages.push(message + ': ' + happinessPoints + ' happiness');
        }

        if (!isDesired && !isDespised) {
            let message = `BEEG loudly bellows "I FEEL INDIFFERENT!"`;
            this.beegMessages.push(message);
        }

        this.saveData();
    }

    private saveData() {
        SaveData.saveBeegData({ happiness: this.happiness, health: this.health, points: this.points });
    }
}
