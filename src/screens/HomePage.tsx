import { Inventory } from 'components/Inventory/Inventory';
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
			<div style={{ padding: 0 }}>
				<h1 style={{ paddingLeft: 10, paddingTop: 10, position: 'absolute', top: 0, left: 0 }}>(perm) beta tick currency: {this.props.gameTickStore!.currentTick}</h1>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Inventory />

					<div style={{ display: 'flex', width: `100%`, maxHeight: `100vh`, overflowY: 'scroll', flex: 1, flexDirection: 'column', paddingTop: 100, paddingRight: 20, paddingBottom: 50 }}>
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
					</div>
				</div>

				{/* ARCHEOLOGY */}
			</div>
		);
	}
}
