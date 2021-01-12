import { SkillID } from './Skill_ID';

export interface SkillProduction {
    outputID: string;
    outputName: string;
	xpPerOutput: number;
	amountPerOutput: number;
    requiredResourceID: string;
    requiredResourceName: string;
	requiredResourceAmount: number;
	levelRequired: number;
	ticksToComplete: number;
}

export const SKILL_PRODUCTIONS = (id: SkillID) => {
	let config = {
		[SkillID.WOODWORKING]: [
			{
				outputID: 'common_arrow_shaft',
				outputName: 'Arrow Shaft',
				xpPerOutput: 10,
				amountPerOutput: 15,
                requiredResourceID: 'common_log',
                requiredResourceName: 'log',
				requiredResourceAmount: 1,
				levelRequired: 1,
				ticksToComplete: 1000
            },
            {
				outputID: 'common_short_bow',
				outputName: 'Short Bow',
				xpPerOutput: 25,
				amountPerOutput: 1,
                requiredResourceID: 'common_log',
                requiredResourceName: 'log',
				requiredResourceAmount: 1,
				levelRequired: 5,
				ticksToComplete: 2500
            },
            {
				outputID: 'common_plank',
				outputName: 'Plank',
				xpPerOutput: 70,
				amountPerOutput: 1,
                requiredResourceID: 'common_log',
                requiredResourceName: 'log',
				requiredResourceAmount: 10,
				levelRequired: 20,
				ticksToComplete: 12000
			}
		]
    };
    
    return config[id]
};
