import { InventoryStore } from 'data/InventoryStore';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('inventoryStore')
@observer
export class Inventory extends React.Component<{ inventoryStore?: InventoryStore }> {
	public render() {
		return (
			<div style={{ width: `30%`, paddingTop: 120, paddingLeft: 40 }}>
				<h1 style={{ height: 40, fontSize: 40, marginBottom: 20 }}>Inventory</h1>
				{this.props.inventoryStore!.inventory.map((item) => {
					return (
						<div style={{ width: `100%`, display: 'flex', flexDirection: 'row', marginBottom: 5 }}>
							<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.item.name}</p>
							<p style={{ display: 'flex', flex: 1, width: `100%` }}>{item.amount}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
