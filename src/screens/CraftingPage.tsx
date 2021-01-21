import { Inventory } from 'components/Inventory/Inventory';
import { InventoryStore } from 'data/InventoryStore';
import { inject, observer } from 'mobx-react';
import { ALL_CRAFTABLES, CraftableItem } from 'models/Item/CraftingConfig';
import { Item } from 'models/Item/ItemConfig';
import { ProductionItem } from 'models/Skill/SkillProductions';
import React from 'react';

export class CraftingPage extends React.Component {
	public render() {
		return (
			<div style={{ width: `100%`, display: 'flex', flexDirection: 'row' }}>
				<Inventory />

				<div style={{ width: `100%`, marginTop: 150, paddingRight: 20 }}>
					<div style={{ width: `100%`, marginBottom: 10, border: `1px solid blue`, display: 'flex', color: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
						<p style={{ width: 200 }} />
						<p style={{ flex: 1, display: 'flex', marginLeft: 10 }}>Item Name</p>
						<p style={{ flex: 1, display: 'flex', marginLeft: 10 }}>Items Required</p>
						<p style={{ flex: 1, display: 'flex', marginLeft: 10 }}>Fail Chance</p>
						<p style={{ flex: 1, display: 'flex', marginLeft: 10 }}>Level Required</p>
					</div>
					{ALL_CRAFTABLES.map(item => {
						return <CraftItemTableTow item={item} />
					})}
				</div>
			</div>
		);
	}
}


interface Props {
	item: CraftableItem;
	inventoryStore?: InventoryStore
}

@inject('inventoryStore')
@observer
export class CraftItemTableTow extends React.Component<Props> {

	onClickCraft = () => {
		let isValidCraft = this.props.inventoryStore!.checkIfInventoryHasItemCount(this.props.item.requiredItems)
		console.log(isValidCraft)
		if (isValidCraft) {

			let rand = Math.random();
			if (rand < this.props.item.failChance) {
				alert("failed craft");
				return;
			}
			this.props.item.requiredItems.forEach(item => {
				this.props.inventoryStore!.removeItem(item.item, item.amount);
			})

			this.props.inventoryStore!.addItem(this.props.item.item, 1)
		} else {
			alert("You don't have the resources to craft this.")
		}
	}

	public render() {
		return (
			<div style={{ width: `100%`, marginBottom: 10, display: 'flex', color: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
				<button onClick={this.onClickCraft} style={{ width: 200, height: 35, backgroundColor: 'blue', color: 'white' }}>CRAFT</button>
				<p style={{ marginLeft: 10, flex: 1, display: 'flex' }}>{this.props.item.item.name}</p>
				<div style={{ marginLeft: 10, flex: 1, display: 'flex' }}>
					{this.props.item.requiredItems.length !== 0 ? (
						<div>
							{this.props.item.requiredItems.map(item => {
								return <>{item.item.name} ({item.amount})<br /></>
							})}
						</div>
					) : (
							<div>{'n/a'}</div>
						)}
				</div>
				<p style={{ marginLeft: 10, flex: 1, display: 'flex' }}>{this.props.item.failChance}</p>
				<p style={{ marginLeft: 10, flex: 1, display: 'flex' }}>{this.props.item.levelRequired.level}</p>
			</div>
		);
	}
}
