import { Skill } from 'models/Skill/Skill';
import React from 'react';

const randomMax = Math.floor(Math.random() * 1200);

export class SkillTableHead extends React.Component<{ skill: Skill }> {
	public render() {
		return (
			<div style={{ marginTop: 40 }}>
				<h1 style={{ fontSize: 22, marginBottom: 10 }}>
					{this.props.skill.name} -- current: {this.props.skill.currentLevel} | prestiege: {randomMax}
				</h1>
				<div style={{ display: 'flex', flexDirection: 'row', width: `100%`, height: 20 }}>
					<div style={styles.rowText}>Production</div>
					<div style={styles.rowText}>Ticks Req</div>
					<div style={styles.rowText}>Req Resource</div>
					<div style={styles.rowText}>Amount Crafted</div>
					<div style={styles.rowText}>XP Per</div>
					<div style={styles.rowText}>Current XP</div>
					<div style={styles.rowText}>Current Level</div>
					<div style={styles.rowText}>Prestiege Level</div>
				</div>
			</div>
		);
	}
}

const styles = {
	rowText: { flex: 1, width: '100%', alignItems: 'center', display: 'flex' }
};
