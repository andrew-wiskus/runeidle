import { InventoryStore } from 'data/InventoryStore';
import { inject, observer } from 'mobx-react';
import { getItemType, ItemType } from 'models/Item/ItemConfig';
import React from 'react';

@inject('inventoryStore')
@observer
export class Inventory extends React.Component<{ inventoryStore?: InventoryStore }> {
	public render() {
		let equipmentItems = this.props.inventoryStore!.inventory.filter(item => getItemType(item.item.id) !== ItemType.PRODUCTION)
		let productionItems = this.props.inventoryStore!.inventory.filter(item => getItemType(item.item.id) === ItemType.PRODUCTION)
		return (
			<div style={{ width: `30%`, paddingTop: 120, paddingLeft: 40 }}>
				<h1 style={{ height: 40, fontSize: 40, marginBottom: 20 }}>Inventory</h1>

				{productionItems.length != 0 &&
					<>

						<p style={{ marginTop: 15, textDecoration: 'underline', fontSize: 22, marginBottom: 5 }}>Production Items</p>

						{productionItems.map((item) => {
							return (
								<div style={{ width: `100%`, display: 'flex', flexDirection: 'row', marginBottom: 5 }}>
									<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.item.name}</p>
									<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.amount}</p>
								</div>
							);
						})}
					</>}

				{equipmentItems.length != 0 &&
					<>
						<p style={{ marginTop: 15, textDecoration: 'underline', fontSize: 22, marginBottom: 5 }}>Equipment</p>
						{equipmentItems.map((item) => {
							return (
								<div style={{ width: `100%`, display: 'flex', flexDirection: 'row', marginBottom: 5 }}>
									<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.item.name}</p>
									<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.amount}</p>
								</div>
							);
						})}

					</>}
			</div>
		);
	}
}
