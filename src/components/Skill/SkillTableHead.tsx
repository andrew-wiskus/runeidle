import { Skill } from 'models/Skill/Skill';
import React from 'react';

export class SkillTableHead extends React.Component<{ skill: Skill }> {
	public render() {
		return (
			<div style={{ marginTop: 40 }}>
				<h1 style={{ fontSize: 22, marginBottom: 10 }}>
					{this.props.skill.name} -- Level: {this.props.skill.currentLevel}
				</h1>
				<div style={{ display: 'flex', flexDirection: 'row', width: `100%`, height: 20 }}>
					<div style={styles.rowText}>Production</div>
					<div style={styles.rowText}>Ticks Req</div>
					<div style={styles.rowText}>Req Resource</div>
					<div style={styles.rowText}>Output</div>
					<div style={styles.rowText}>XP Per</div>
					<div style={styles.rowText}>Current XP</div>
					<div style={styles.rowText}>Current Level</div>
				</div>
			</div>
		);
	}
}

const styles = {
	rowText: { flex: 1, width: '100%', alignItems: 'center', display: 'flex' }
};
