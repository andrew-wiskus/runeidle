import React, { CSSProperties } from 'react';
import { SkillTabButton } from 'screens/HomeScreen/components/SkillTabButton';
import { images } from 'images/images';
import { CardDataStore } from 'data/CardDataStore';
import { ItemClass } from 'data/_all_cards';
import { ResourceCard, ResourceCardProps } from 'screens/CardDisplay/ResourceCard';
import { inject, observer } from 'mobx-react';
import { SkillStore } from 'data/SkillStore';
import { getDecimalIfNeeded, getLevelFromEXP } from 'util_functions';
import { LevelXP } from 'data/_level_xp';
import { WorkerStore } from 'data/WorkerStore';

interface Props {
    cardDataStore?: CardDataStore;
    skillStore?: SkillStore;
}

interface State {
    activeTab: ItemClass;
}

@inject('cardDataStore', 'skillStore')
@observer
export class ProductionPanel extends React.Component<Props, State> {
    public state: State = {
        activeTab: ItemClass.TREE,
    };

    private clickFilter = (itemClass: ItemClass) => {
        this.setState({ activeTab: itemClass });
    };

    private getHeaderForSkill = (itemClass: ItemClass) => {
        switch (itemClass) {
            case ItemClass.FARMING:
                return 'Crop Farming';
            case ItemClass.FARM_ANIMAL:
                return 'Animal Farming';
            case ItemClass.HERB:
                return 'Herb Gather';
            case ItemClass.GEM:
                return 'Gem Mining';
            case ItemClass.FISH:
                return 'Fishing';
            case ItemClass.TREE:
                return 'Woodcutting';
            case ItemClass.ORE:
                return 'Mining';
            case ItemClass.RUNE:
                return 'Runecrafting';
        }
    };

    public render(): JSX.Element {
        let productionCards = this.props.cardDataStore!.cardDisplay.filter((item) => item.itemClass == this.state.activeTab);

        let currentLevel = this.props.skillStore!.getlevelForSkill(this.state.activeTab);
        let cXP = this.props.skillStore!.getCurrentXPForSkill(this.state.activeTab);
        let nXP = LevelXP[currentLevel];
        let progress = (cXP - LevelXP[currentLevel - 1]) / (nXP - LevelXP[currentLevel - 1]);

        let nextXP = nXP - LevelXP[currentLevel - 1];
        let currentXP = cXP - LevelXP[currentLevel - 1];

        let levelPercent = `${100 - Math.floor(progress * 100)}%`;

        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={styles.skillTabButtonRow}>
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.TREE}
                        onClick={() => this.clickFilter(ItemClass.TREE)}
                        icon={images.tree.mago_tree}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.ORE}
                        onClick={() => this.clickFilter(ItemClass.ORE)}
                        icon={images.ore.mithril_ore}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.FISH}
                        onClick={() => this.clickFilter(ItemClass.FISH)}
                        icon={images.fish.flat_fish}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.FARMING}
                        onClick={() => this.clickFilter(ItemClass.FARMING)}
                        icon={images.farming.cotton}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.FARM_ANIMAL}
                        onClick={() => this.clickFilter(ItemClass.FARM_ANIMAL)}
                        icon={images.farming.cow}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.HERB}
                        onClick={() => this.clickFilter(ItemClass.HERB)}
                        icon={images.herbs.ferralfew}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.RUNE}
                        onClick={() => this.clickFilter(ItemClass.RUNE)}
                        icon={images.rune.sky_rune}
                    />
                    <SkillTabButton
                        isSelected={this.state.activeTab == ItemClass.GEM}
                        onClick={() => this.clickFilter(ItemClass.GEM)}
                        icon={images.gem.diamo}
                    />
                    <SkillTabButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                    <SkillTabButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                    <SkillTabButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                    <SkillTabButton isSelected={false} onClick={() => {}} icon={images.lock} isLocked={true} />
                </div>

                <div
                    style={{
                        height: 600 - 50,
                        width: 800 - 226,
                        padding: 20,
                        paddingBottom: 0,
                        backgroundColor: 'white',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            right: 20,
                            top: 20,
                            height: 100,
                            width: 130,
                            borderRadius: 15,
                            border: '3px solid black',
                            overflow: 'hidden',
                        }}
                    >
                        <h1 style={{ width: `100%`, fontSize: 50, textAlign: 'center', paddingTop: 10 }}>
                            {this.props.skillStore!.getlevelForSkill(this.state.activeTab)}
                        </h1>
                        <div style={{ width: `100%`, height: 40, borderTop: '3px solid black', position: 'relative' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: levelPercent,
                                    top: 0,
                                    bottom: 0,
                                    backgroundColor: '#32CD32',
                                }}
                            />
                            <h1 style={{ position: 'absolute', top: 8, left: 0, right: 0, bottom: 0, textAlign: 'center' }}>
                                {currentXP}/{nextXP}
                            </h1>
                        </div>
                    </div>
                    <div style={{ height: 120 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'lighter', marginBottom: 15 }}>
                            {this.getHeaderForSkill(this.state.activeTab)}
                        </h1>
                        <h1 style={{ fontSize: 13, fontWeight: 'lighter', marginBottom: 2 }}>
                            some stat goes here about skill 192p
                        </h1>
                        <h1 style={{ fontSize: 13, fontWeight: 'lighter', marginBottom: 2 }}>some stat 22</h1>
                        <h1 style={{ fontSize: 13, fontWeight: 'lighter', marginBottom: 2 }}>some stat goes here: 99/sec</h1>
                        <h1 style={{ fontSize: 13, fontWeight: 'lighter', marginBottom: 2 }}>
                            some stat goes here about skill and 100.32/hr
                        </h1>
                    </div>

                    <div
                        style={{
                            width: 800 - 226 - 40,
                            height: 404,
                            display: 'flex',
                            flexWrap: 'wrap',
                            overflow: 'scroll',
                            padding: 10,
                            border: '3px solid black',
                            borderBottom: 'none',
                            overflowX: 'hidden',
                        }}
                    >
                        {productionCards.map((card) => {
                            return (
                                <ProductionCard
                                    key={card.id}
                                    card={card}
                                    isLocked={this.props.skillStore!.getlevelForSkill(card.itemClass) < card.levelRequired}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    skillTabButtonRow: {
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 50,
        width: 800 - 226,
        borderBottom: '3px solid black',
        padding: 0,
        backgroundColor: 'black',
        flex: 1,
    } as CSSProperties,
};

@inject('cardDataStore')
@observer
export class ProductionCard extends React.Component<{
    card: ResourceCardProps;
    isLocked: boolean;
    cardDataStore?: CardDataStore;
}> {
    private addWorkers(amount: number) {
        let maxAmount = this.props.card.maxWorkers - this.props.card.workers;
        this.props.cardDataStore!.addWorkersToCard(this.props.card.id, Math.min(maxAmount, amount));
    }

    private removeWorkers() {
        this.props.cardDataStore!.addWorkersToCard(this.props.card.id, this.props.card.workers * -1);
    }

    public render(): JSX.Element {
        let cyclesRequired = this.props.card.cycleMax / this.props.card.progressPerCycle;
        let ticksPerCycle = cyclesRequired * this.props.card.tickCountForProgress;
        let unitsPerThousandTick = getDecimalIfNeeded(1000 / ticksPerCycle);

        let unitsPerHour = 'P: ' + unitsPerThousandTick + '/ 1kt';

        let currentProgressPercent = 100 - Math.floor((this.props.card.cycleProgress / this.props.card.cycleMax) * 100);

        return (
            <div
                style={{
                    height: 200,
                    width: 150,
                    margin: 5,
                    border: '3px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 6,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ height: 27, borderBottom: '2px solid black', width: '100%' }}>
                    <h1 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', paddingTop: 5 }}>
                        {this.props.card.name}
                    </h1>
                </div>
                <div
                    style={{
                        height: 70,
                        width: 150,
                        borderBottom: '3px solid black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <img src={this.props.card.icon} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>

                <div
                    style={{
                        height: 20,
                        width: 130,
                        border: '3px solid black',
                        marginTop: 5,
                        position: 'relative',
                        marginBottom: 7,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: currentProgressPercent + '%',
                            bottom: 0,
                            top: 0,
                            backgroundColor: `#32CD32`,
                        }}
                    />
                    <h1
                        style={{
                            position: 'absolute',
                            fontWeight: 400,
                            fontSize: 11,
                            paddingTop: 2,
                            textAlign: 'center',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    >
                        {`${this.props.card.cycleProgress}/${this.props.card.cycleMax}`}
                    </h1>
                </div>
                <h1>{`W: ${this.props.card.workers}/${this.props.card.maxWorkers}`} </h1>
                <h1>{unitsPerHour}</h1>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderTop: '3px solid black',
                        height: 30,
                        backgroundColor: 'black',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <div
                        className='hover-light-grey'
                        onClick={() => this.addWorkers(1)}
                        style={{
                            display: 'flex',
                            cursor: 'pointer',
                            marginLeft: 0,
                            marginRight: 1,
                            flex: 1,
                            height: 30,
                            backgroundColor: 'white',
                        }}
                    >
                        <h1 style={{ paddingTop: 5, fontSize: 18, textAlign: 'center', width: `100%` }}>+1</h1>
                    </div>
                    <div
                        className='hover-light-grey'
                        onClick={() => this.addWorkers(10)}
                        style={{
                            display: 'flex',
                            cursor: 'pointer',
                            marginLeft: 2,
                            marginRight: 2,
                            flex: 1,
                            height: 30,
                            backgroundColor: 'white',
                        }}
                    >
                        <h1 style={{ paddingTop: 5, fontSize: 18, textAlign: 'center', width: `100%` }}>+10</h1>
                    </div>
                    <div
                        className='hover-light-grey'
                        onClick={() => this.removeWorkers()}
                        style={{
                            display: 'flex',
                            cursor: 'pointer',
                            marginLeft: 1,
                            marginRight: 0,
                            flex: 1,
                            height: 30,
                            backgroundColor: 'white',
                        }}
                    >
                        <h1 style={{ paddingTop: 5, fontSize: 18, textAlign: 'center', width: `100%` }}>X</h1>
                    </div>
                </div>
                {this.props.isLocked && <ProductionLockOverlay lvlReq={this.props.card.levelRequired} />}
            </div>
        );
    }
}

export const ProductionLockOverlay = (props: { lvlReq: number }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#FFFFFFCC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <img style={{ height: 100, width: 100, objectFit: 'contain', marginBottom: 15 }} src={images.lock} />
            <h1>{`Require Lvl ${props.lvlReq}`}</h1>
        </div>
    );
};
