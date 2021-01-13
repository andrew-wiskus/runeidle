import { ProductionStore } from 'data/ProductionStore';
import { LevelXP } from 'data/_level_xp';
import { inject, observer } from 'mobx-react';
import { SkillProduction } from 'models/Skill/SkillProductions';
import React from 'react';
import { getLevelFromEXP } from 'util_functions';

@inject('productionStore')
@observer
export class SkillTableRow extends React.Component<{ production: SkillProduction, productionStore?: ProductionStore }, {}> {
	public render() {

		if(this.props.productionStore!.productions.length == 0) {
			return <div/>
		}

		let production = this.props.productionStore!.productions.find(x => x.id == this.props.production.id)!;

		if(production == undefined) {
			console.error("couldnt find production?  -- " + this.props.production.id)
			return <div/>
		}

		let percentFinished = ((production.currentTick / production.ticksToComplete) * 100) + "%"

		return (
			<div onClick={() => this.props.productionStore!.setActiveTask(production.id)} style={{ display: 'flex', flexDirection: 'row', width: `100%`, height: 50, border: '1px solid black', margin: '10px 0 10px 0px' }}>
				<div style={styles.rowText}>
					<div style={{ width: `90%`, position: 'relative', height: `100%`, backgroundColor: 'blue' }}>
						<div style={{ position: 'absolute', top: 2, left: 2, bottom: 2, width: `calc(${percentFinished} - 2px)`, backgroundColor: '#330066' }} />
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
				<div style={styles.rowText}>{
					production.currentXP + "/" + LevelXP[getLevelFromEXP(production.currentXP)]
				}</div>
				<div style={styles.rowText}>{getLevelFromEXP(production.currentXP)}</div>
			</div>
		);
	}
}

const styles = {
	rowText: { flex: 1, width: '100%', alignItems: 'center', display: 'flex' }
};
