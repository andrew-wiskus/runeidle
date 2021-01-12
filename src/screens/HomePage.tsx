import { SkillTableHead } from 'components/Skill/SkillTableHead';
import { SkillTableRow } from 'components/Skill/SkillTableRow';
import { GameTickStore } from 'data/GameTickStore';
import { inject, observer } from 'mobx-react';
import { SKILLS } from 'models/Skill/Skill';
import { SKILL_PRODUCTIONS } from 'models/Skill/SkillProductions';
import { SkillID } from 'models/Skill/Skill_ID';
import React from 'react';

@inject('gameTickStore')
@observer
export class HomePage extends React.Component<{ gameTickStore?: GameTickStore }, {}> {
	public render() {
		return (
			<div style={{ padding: 50 }}>
				<h1>hello world {this.props.gameTickStore!.currentTick}</h1>

				<SkillTableHead skill={SKILLS(SkillID.WOODWORKING)} />
				<SkillTableRow production={SKILL_PRODUCTIONS(SkillID.WOODWORKING)[0]} />
				<SkillTableRow production={SKILL_PRODUCTIONS(SkillID.WOODWORKING)[1]} />
				<SkillTableRow production={SKILL_PRODUCTIONS(SkillID.WOODWORKING)[2]} />
			</div>
		);
	}
}
