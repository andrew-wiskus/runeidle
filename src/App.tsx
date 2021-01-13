import React from 'react';
import { CssStyleSheet } from './config/types/Style';
import './config/styleReset.css';
import { Provider } from 'mobx-react';
import { Router } from 'routing/Router';
import { GameTickStore } from 'data/GameTickStore';
import { ProductionStore } from 'data/ProductionStore';
import { InventoryStore } from 'data/InventoryStore';
import { LevelStore } from 'data/LevelStore';

const inventoryStore = new InventoryStore();
const levelStore = new LevelStore();
const productionStore = new ProductionStore(inventoryStore, levelStore);
const gameTickStore = new GameTickStore(productionStore, levelStore, inventoryStore);

export class App extends React.Component {
	public render(): JSX.Element {
		return (
			<Provider gameTickStore={gameTickStore} productionStore={productionStore} inventoryStore={inventoryStore} levelStore={levelStore}>
				<div style={styles.container}>
					<Router />
				</div>
			</Provider>
		);
	}
}

const styles: CssStyleSheet = {
	container: {
		backgroundColor: 'black',
		height: `100vh`,
		width: `100vw`
	}
};
