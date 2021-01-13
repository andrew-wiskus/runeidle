import { SkillTable } from 'components/Skill/SkillTable';
import { GameTickStore } from 'data/GameTickStore';
import { inject, observer } from 'mobx-react';
import { SkillID } from 'models/Skill/Skill_ID';
import React from 'react';

@inject('gameTickStore')
@observer
export class HomePage extends React.Component<{ gameTickStore?: GameTickStore }, {}> {
	public render() {
		return (
			<div style={{ padding: 50 }}>
				<h1>hello world {this.props.gameTickStore!.currentTick}</h1>

				<SkillTable skillID={SkillID.WOODCUTTING} />
				<SkillTable skillID={SkillID.FLETCHING} />
				<SkillTable skillID={SkillID.CONSTRUCTION} />
				<SkillTable skillID={SkillID.MINING} />
				<SkillTable skillID={SkillID.SMITHING} />
				<SkillTable skillID={SkillID.FISHING} />
				<SkillTable skillID={SkillID.CRAFTING} />
				<SkillTable skillID={SkillID.GATHERING} />
				<SkillTable skillID={SkillID.FIREMAKING} />
				<SkillTable skillID={SkillID.COOKING} />
				<SkillTable skillID={SkillID.RUNECRAFTING} />
				<SkillTable skillID={SkillID.DIVINATION} />
				<SkillTable skillID={SkillID.THIEVING} />
				<SkillTable skillID={SkillID.POTION_MAKING} />
				<SkillTable skillID={SkillID.INVENTION} />
				<SkillTable skillID={SkillID.ENCHANTING} />
				<SkillTable skillID={SkillID.HUNTING} />
				<SkillTable skillID={SkillID.WEAVING} />
				<SkillTable skillID={SkillID.LEATHER_WORKING} />
				<SkillTable skillID={SkillID.FARMING} />
				<SkillTable skillID={SkillID.AGILITY} />
				<SkillTable skillID={SkillID.HOLY} />
				<SkillTable skillID={SkillID.CURSE} />
				{/* ARCHEOLOGY */}
			</div>
		);
	}
}
