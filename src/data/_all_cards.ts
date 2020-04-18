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
        unitsPerCycleMax: 100,
        xpPerCycle: 25,
        progressPerCycle: 27,
        cycleMax: 120,
        lastUpdatedTick: 0,
        tickCountForProgress: 21,
        icon: images.cow,
        basePointsPerSacrafice: 0.01,
    },
    {
        id: 'simp_sheep_123',
        name: 'Lil Sheep',
        starCount: 1,
        currentXP: 0,
        workers: 0,
        cycleProgress: 0,
        unitsPerCycleMin: 1,
        unitsPerCycleMax: 27,
        xpPerCycle: 25,
        progressPerCycle: 18,
        cycleMax: 320,
        lastUpdatedTick: 0,
        tickCountForProgress: 21,
        icon: images.sheep,
        basePointsPerSacrafice: 0.01,
    },
];
