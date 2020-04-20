import React from 'react';
import { CollapsableHeader } from 'shared_components/CollapsableHeader';
import { ItemClass } from 'data/_all_cards';
import { getLevelFromEXP } from 'util_functions';
import { SkillStore } from 'data/SkillStore';
import { observer, inject } from 'mobx-react';
import { LevelXP } from 'data/_level_xp';

interface Props {
    skillStore?: SkillStore;
}

@inject('skillStore')
@observer
export class SkillWindow extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <CollapsableHeader defaultShown={true} header='Skills'>
                <div
                    style={{
                        backgroundColor: 'white',
                        margin: 20,
                        marginTop: 0,
                        padding: 20,
                        border: '3px solid black',
                        borderTop: 'none',
                        width: 760,
                    }}
                >
                    <SkillBar forClass={ItemClass.HERB} header='Herb Gather' totalXP={this.props.skillStore!.herbXP} />
                    <SkillBar forClass={ItemClass.FARMING} header='Farming Crops' totalXP={this.props.skillStore!.farmingXP} />
                    <SkillBar
                        forClass={ItemClass.FARM_ANIMAL}
                        header='Farming Animals'
                        totalXP={this.props.skillStore!.farmAnimalXP}
                    />
                    <SkillBar forClass={ItemClass.GEM} header='Gem Mining' totalXP={this.props.skillStore!.gemXP} />
                    <SkillBar forClass={ItemClass.FISH} header='Fishing' totalXP={this.props.skillStore!.fishXP} />
                    <SkillBar forClass={ItemClass.TREE} header='Wood Cutting' totalXP={this.props.skillStore!.woodXP} />
                    <SkillBar forClass={ItemClass.ORE} header='Mining' totalXP={this.props.skillStore!.oreXP} />
                    <SkillBar forClass={ItemClass.RUNE} header='Herb Gather' totalXP={this.props.skillStore!.runeXP} />
                </div>
            </CollapsableHeader>
        );
    }
}

export const SkillBar = (props: { forClass: ItemClass; header: string; totalXP: number }) => {
    let currentLevel = getLevelFromEXP(props.totalXP);
    let nextLevel = currentLevel + 1;
    let currentXP = props.totalXP;
    let nextXP = LevelXP[currentLevel];
    let progress = (currentXP - LevelXP[currentLevel - 1]) / (nextXP - LevelXP[currentLevel - 1]);

    return (
        <div>
            <h1 style={{ fontSize: 15 }}>{props.header}</h1>
            <div
                style={{
                    width: 740,
                    height: 20,
                    border: '3px solid black',
                    marginTop: 0,
                    marginBottom: 10,
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: 'green',
                        top: 0,
                        left: 0,
                        right: `${100 - Math.floor(progress * 100)}%`,
                        bottom: 0,
                    }}
                />
                <h1 style={{ position: 'absolute', left: 10, top: 4, bottom: 0, fontSize: 12 }}>Lvl {currentLevel}</h1>
                <h1 style={{ position: 'absolute', right: 10, top: 4, bottom: 0, fontSize: 12 }}>Lvl {nextLevel}</h1>
                <h1 style={{ fontSize: 12, textAlign: 'center', position: 'absolute', top: 4, left: 0, right: 0, bottom: 0 }}>
                    {`${currentXP} / ${nextXP}`}
                </h1>
            </div>
        </div>
    );
};
