import { SKILLS } from 'models/Skill/Skill';
import { SKILL_PRODUCTIONS, SkillProduction } from 'models/Skill/SkillProductions';
import { SkillID } from 'models/Skill/Skill_ID';
import React from 'react';
import { SkillTableHead } from './SkillTableHead';
import { SkillTableRow } from './SkillTableRow';

export class SkillTable extends React.Component<{ skillID: SkillID }> {
	public render() {
		return (
			<div>
				<SkillTableHead skill={SKILLS(this.props.skillID)} />
				{SKILL_PRODUCTIONS(this.props.skillID).map((production: SkillProduction, index: number) => {
					return <SkillTableRow key={index} production={production} />;
				})}
			</div>
		);
	}
}
