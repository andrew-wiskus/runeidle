import * as React from 'react';
import { CombatPage } from 'screens/CombatPage';
import { HomePage } from 'screens/HomePage';

interface Props {}

interface State {
	activeTab: Tab;
}

enum Tab {
	PRODUCTION = 'Production',
	COMBAT = 'Combat'
}

export class Router extends React.Component<Props, State> {
	public state: State = {
		activeTab: Tab.COMBAT
	};

	public render(): JSX.Element {
		return (
			<div>
				<div style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'black', zIndex: 99, height: 100, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
					<div style={styles.navButton} onClick={() => this.setState({ activeTab: Tab.PRODUCTION })}>
						production
					</div>
					<div style={styles.navButton} onClick={() => this.setState({ activeTab: Tab.COMBAT })}>
						combat
					</div>
				</div>
				{this.state.activeTab === Tab.PRODUCTION && <HomePage />}
				{this.state.activeTab === Tab.COMBAT && <CombatPage />}
			</div>
		);
	}
}

const styles = {
	navButton: { width: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: `100%`, border: '1px solid blue' } as React.CSSProperties
};
