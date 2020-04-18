import { images } from 'images/images';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';

export const ALL_CARDS: ResourceCardProps[] = [
    {
        id: 'simp_cow_123',
        name: 'Simple Cow',
        starCount: 3,
        currentXP: 15235,
        workers: 0,
        cycleProgress: 0,
        unitsPerCycleMin: 1,
        unitsPerCycleMax: 10,
        xpPerCycle: 25,
        progressPerCycle: 10,
        cycleMax: 120,
        lastUpdatedTick: 0,
        tickCountForProgress: 21,
        icon: images.cow,
        basePointsPerSacrafice: 15,
    },
    {
        id: 'simp_sheep_123',
        name: 'Lil Sheep',
        starCount: 1,
        currentXP: 0,
        workers: 0,
        cycleProgress: 0,
        unitsPerCycleMin: 1,
        unitsPerCycleMax: 10,
        xpPerCycle: 25,
        progressPerCycle: 30,
        cycleMax: 320,
        lastUpdatedTick: 0,
        tickCountForProgress: 21,
        icon: images.sheep,
        basePointsPerSacrafice: 5,
    },
];
