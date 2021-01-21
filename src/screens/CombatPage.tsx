import { PEACEFUL_HILLS, Tile } from 'models/Maps/CombatMap';
import React from 'react';



const MAP_SIZE = '30vw';
export class CombatPage extends React.Component {
	public render() {
		return (
			<div style={{ width: `100vw`, height: `100%`, paddingTop: 100, display: 'flex', flexDirection: 'row' }}>
				<h1 style={{fontSize: 35, fontWeight: 'lighter', textAlign: 'center', marginTop: 200, marginLeft: 50}}>coming soon.. map exploration and combat :)</h1>
				<div style={{ display: 'flex', flexDirection: 'row', width: `100vw` }}>
					{/* <div style={{ display: 'flex', width: `30%`, border: '1px solid green', paddingLeft: 60, paddingTop: 50 }}>
						<h1 style={{ fontSize: 22 }}> Combat Inventory </h1>
					</div> */}

					<div style={{ alignItems: 'center',display: 'flex', width: `100%`, maxHeight: `100vh`, overflowY: 'scroll', flex: 1, flexDirection: 'column', paddingTop: 50, paddingRight: 20, paddingBottom: 0 }}>
						<div style={{ width: `${MAP_SIZE}`, height: `${MAP_SIZE}`, display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
							{PEACEFUL_HILLS.tileset.map((tile: Tile, i: number) => {
								return <div key={i} style={{ border: '1px solid white', width: `calc(${MAP_SIZE} / 10)`, height: `calc(${MAP_SIZE} / 10)`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {tile.symbol !== '' && <img alt="" style={{height: '70%', width: '70%'}} src={tile.symbol} />    }
                                </div>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
