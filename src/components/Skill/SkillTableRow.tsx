import { SkillProduction } from 'models/Skill/SkillProductions';
import React from 'react';

export class SkillTableRow extends React.Component<{ production: SkillProduction }, {}> {
	public render() {
		let production = this.props.production;

		return (
			<div style={{ display: 'flex', flexDirection: 'row', width: `100%`, height: 50, border: '1px solid black', margin: '10px 0 10px 0px' }}>
				<div style={styles.rowText}>
					<div style={{ width: `90%`, position: 'relative', height: `100%`, backgroundColor: 'blue' }}>
						<div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `33%`, backgroundColor: 'green' }} />
						<div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: `center` }}>
							<p style={{ color: 'white' }}>{production.productionName}</p>
						</div>
					</div>
				</div>

				<div style={styles.rowText}>{production.ticksToComplete}</div>
				<div style={styles.rowText}>
					{production.requiredItem.length !== 0 ? (
						<div>
							{production.requiredItem.map(item => {
							return <>{item.item.name} ({item.amount})<br/></>
							})}
						</div>
					) : (
						<div>{'n/a'}</div>
					)}
				</div>
				<div style={styles.rowText}>
				{production.outputItem.length !== 0 ? (
						<div>
							{production.outputItem.map(item => {
							return <>{item.item.name} ({item.amount})<br/></>
							})}
						</div>
					) : (
						<div>{'n/a'}</div>
					)}
				</div>
				<div style={styles.rowText}>
				{production.xpPerOutput.length !== 0 ? (
						<div>
							{production.xpPerOutput.map(xp => {
							return <>{xp.skill} ({xp.amount})<br/></>
							})}
						</div>
					) : (
						<div>{'n/a'}</div>
					)}
				</div>
				<div style={styles.rowText}>200/1000 {/* get from data store by passing skill_prod.id */}</div>
				<div style={styles.rowText}>47 {/* get from data store by passing skill_prod.id */}</div>
			</div>
		);
	}
}

const styles = {
	rowText: { flex: 1, width: '100%', alignItems: 'center', display: 'flex' }
};
