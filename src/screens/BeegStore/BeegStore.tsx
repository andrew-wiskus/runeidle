import React, { CSSProperties } from 'react';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';
import { images } from 'images/images';
import { PrestigeTab } from './PrestigeTab';
import { CardSellingTab } from './CardSellingTab';

enum Tab {
    CARD,
    TICK,
}

interface Props {}

interface State {
    selectedTab: Tab;
}

export class BeegStore extends React.Component<Props, State> {
    public state: State = {
        selectedTab: Tab.CARD,
    };

    private getTabStyle(tab: Tab) {
        return {
            ...styles.tab,
            backgroundColor: this.state.selectedTab === tab ? 'grey' : 'white',
        };
    }

    private getTabText(tab: Tab) {
        return {
            ...styles.tabText,
            color: this.state.selectedTab === tab ? 'white' : 'black',
        } as CSSProperties;
    }

    private clickTab(tab: Tab) {
        this.setState({ selectedTab: tab });
    }

    public render(): JSX.Element {
        return (
            <CollapsableHeader header='BEEG Store' defaultShown={false}>
                <div style={styles.container}>
                    <div style={styles.tabContainer}>
                        <div onClick={() => this.clickTab(Tab.CARD)} style={this.getTabStyle(Tab.CARD)}>
                            <p style={this.getTabText(Tab.CARD)}>{'CARDS'}</p>
                        </div>
                        <div onClick={() => this.clickTab(Tab.TICK)} style={this.getTabStyle(Tab.TICK)}>
                            <p style={this.getTabText(Tab.TICK)}>{'PRESTIGE'}</p>
                        </div>
                    </div>

                    {this.state.selectedTab == Tab.TICK && <PrestigeTab />}
                    {this.state.selectedTab == Tab.CARD && <CardSellingTab />}
                </div>
            </CollapsableHeader>
        );
    }
}

const styles = {
    container: {
        margin: 20,
        marginTop: 0,
        border: `3px solid black`,
        borderTop: 'none',
        height: 500,
        width: 800,
    } as CSSProperties,
    tabContainer: {
        height: 40,
        width: `100%`,
        borderBottom: '3px solid grey',
        display: 'flex',
        flexDirection: 'row',
    } as CSSProperties,
    tab: {
        display: 'flex',
        flex: 1,
        height: `100%`,
        cursor: 'pointer',
    } as CSSProperties,
    tabText: {
        fontSize: 26,
        textAlign: 'center',
        width: `100%`,
        fontFamily: 'sans-serif',
        paddingTop: 8,
    },
};
