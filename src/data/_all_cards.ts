import { images } from 'images/images';
import { ResourceCardProps } from 'screens/CardDisplay/ResourceCard';

const MECHANICAL_PROPS = {
    workers: 0,
    cycleProgress: 0,
    lastUpdatedTick: 0,
    currentXP: 0,
};

export enum ItemClass {
    TREE,
    ORE,
    FISH,
    FARMING,
    FARM_ANIMAL,
    HERB,
    RUNE,
    GEM,
}

// FARMING --

const cotton = {
    id: 'xx_cotton_xx',
    name: 'cotton',
    icon: images.farming.cotton,
    itemClass: ItemClass.FARMING,
    starCount: 0,
    levelRequired: 10,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const hemp = {
    id: 'xx_hemp_xx',
    name: 'hemp',
    icon: images.farming.hemp,
    itemClass: ItemClass.FARMING,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const wheat = {
    id: 'xx_wheat_xx',
    name: 'wheat',
    icon: images.farming.wheat,
    itemClass: ItemClass.FARMING,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

// END FARMING

// HERB

const bluchoo = {
    id: 'xx_bluchoo_xx',
    name: 'bluchoo',
    icon: images.herbs.bluchoo,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 10,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const chamo = {
    id: 'xx_chamo_xx',
    name: 'chamo',
    icon: images.herbs.chamo,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 22,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const echina = {
    id: 'xx_echina_xx',
    name: 'echina',
    icon: images.herbs.echina,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 36,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const ferralfew = {
    id: 'xx_ferralfew_xx',
    name: 'ferralfew',
    icon: images.herbs.ferralfew,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 67,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const garlo = {
    id: 'xx_garlo_xx',
    name: 'garlo',
    icon: images.herbs.garlo,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 84,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const ginko = {
    id: 'xx_ginko_xx',
    name: 'ginko',
    icon: images.herbs.ginko,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 92,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const litenseal = {
    id: 'xx_litenseal_xx',
    name: 'litenseal',
    icon: images.herbs.litenseal,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const matis = {
    id: 'xx_matis_xx',
    name: 'matis',
    icon: images.herbs.matis,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 53,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const pawsel = {
    id: 'xx_pawsel_xx',
    name: 'pawsel',
    icon: images.herbs.pawsel,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 76,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const vargo = {
    id: 'xx_vargo_xx',
    name: 'vargo',
    icon: images.herbs.vargo,
    itemClass: ItemClass.HERB,
    starCount: 0,
    levelRequired: 21,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};
// END HERB
// START FARM_ANIMAL
const cow = {
    id: 'xx_COW_xx',
    name: 'Cow',
    icon: images.farming.cow,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 10,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const chicken = {
    id: 'xx_chicken_xx',
    name: 'chicken',
    icon: images.farming.chicken,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const dwarf_serpent = {
    id: 'xx_dwarf_serpent_xx',
    name: 'dwarf serpent',
    icon: images.farming.dwarf_serpent,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 80,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const dwarf_hydra = {
    id: 'xx_dwarf_hydra_xx',
    name: 'dwarf hydra',
    icon: images.farming.dwarf_hydra,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 90,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const dwarf_drake = {
    id: 'xx_dwarf_drake_xx',
    name: 'dwarf drake',
    icon: images.farming.dwarf_drake,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 70,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const jackalope = {
    id: 'xx_jackalope_xx',
    name: 'jackalope',
    icon: images.farming.jackalope,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 45,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const liger = {
    id: 'xx_liger_xx',
    name: 'liger',
    icon: images.farming.liger,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 65,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const lizard = {
    id: 'xx_lizard_xx',
    name: 'lizard',
    icon: images.farming.lizard,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 20,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const sheep = {
    id: 'xx_sheep_xx',
    name: 'sheep',
    icon: images.farming.sheep,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 25,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const terror_birds = {
    id: 'xx_terror_birds_xx',
    name: 'terror_birds',
    icon: images.farming.terror_birds,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 35,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const unicorn = {
    id: 'xx_unicorn_xx',
    name: 'unicorn',
    icon: images.farming.unicorn,
    itemClass: ItemClass.FARM_ANIMAL,
    starCount: 0,
    levelRequired: 52,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

// END FARM ANIMAL

const diamo = {
    id: 'xx_diamo_xx',
    name: 'diamo',
    icon: images.gem.diamo,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 92,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const egstar = {
    id: 'xx_egstar_xx',
    name: 'egstar',
    icon: images.gem.egstar,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 27,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const gopal = {
    id: 'xx_gopal_xx',
    name: 'gopal',
    icon: images.gem.gopal,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const tristan = {
    id: 'xx_tristan_xx',
    name: 'tristan',
    icon: images.gem.tristan,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 22,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const peri = {
    id: 'xx_peri_xx',
    name: 'peri',
    icon: images.gem.peri,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 67,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const amer = {
    id: 'xx_amer_xx',
    name: 'amer',
    icon: images.gem.amer,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 87,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const opali = {
    id: 'xx_opali_xx',
    name: 'opali',
    icon: images.gem.opali,
    itemClass: ItemClass.GEM,
    starCount: 0,
    levelRequired: 17,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

// END GEM

// ----

// FISH

const angler_fish = {
    id: 'xx_angler_fish_xx',
    name: 'angler_fish',
    icon: images.fish.angler_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 80,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const baby_fish = {
    id: 'xx_baby_fish_xx',
    name: 'baby_fish',
    icon: images.fish.baby_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const balooga_fish = {
    id: 'xx_balooga_fish_xx',
    name: 'balooga_fish',
    icon: images.fish.balooga_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const big_fin_fish = {
    id: 'xx_big_fin_fish_xx',
    name: 'big_fin fish',
    icon: images.fish.big_fin_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 56,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const boyo_fish = {
    id: 'xx_boyo_fish_xx',
    name: 'boyo_fish',
    icon: images.fish.boyo_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 14,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const dolshark_fish = {
    id: 'xx_dolshark_fish_xx',
    name: 'dolshark',
    icon: images.fish.dolshark_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 29,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const flat_fish = {
    id: 'xx_flat_fish_xx',
    name: 'flat_fish',
    icon: images.fish.flat_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 8,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const long_tail_fish = {
    id: 'xx_long_tail_fish_xx',
    name: 'long_tail snapper',
    icon: images.fish.long_tail_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 62,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const simple_fish = {
    id: 'xx_simple_fish_xx',
    name: 'simple_fish',
    icon: images.fish.simple_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 18,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const stick_fish = {
    id: 'xx_stick_fish_xx',
    name: 'stick_fish',
    icon: images.fish.stick_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 43,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const swordy_fish = {
    id: 'xx_swordy_fish_xx',
    name: 'swordy',
    icon: images.fish.swordy_fish,
    itemClass: ItemClass.FISH,
    starCount: 0,
    levelRequired: 51,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

// END FISH

const anchie_tree = {
    id: 'xx_anchie_tree_xx',
    name: 'anchie_tree',
    icon: images.tree.anchie_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 80,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const bush_tree = {
    id: 'xx_bush_tree_xx',
    name: 'bush',
    icon: images.tree.bush_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const mago_tree = {
    id: 'xx_mago_tree_xx',
    name: 'mago_tree',
    icon: images.tree.mago_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const mysto_tree = {
    id: 'xx_mysto_tree_xx',
    name: 'mysto_tree',
    icon: images.tree.mysto_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 30,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const oak_tree = {
    id: 'xx_oak_tree_xx',
    name: 'oak_tree',
    icon: images.tree.oak_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 20,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const saboyo_tree = {
    id: 'xx_saboyo_tree_xx',
    name: 'saboyo_tree',
    icon: images.tree.saboyo_tree,
    itemClass: ItemClass.TREE,
    starCount: 0,
    levelRequired: 90,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

// ORE

const adamantite_ore = {
    id: 'xx_adamantite_ore_xx',
    name: 'adamantite_ore',
    icon: images.ore.adamantite_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 50,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const coal_ore = {
    id: 'xx_coal_ore_xx',
    name: 'coal_ore',
    icon: images.ore.coal_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 20,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const copper_ore = {
    id: 'xx_copper_ore_xx',
    name: 'copper_ore',
    icon: images.ore.copper_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const gold_ore = {
    id: 'xx_gold_ore_xx',
    name: 'gold_ore',
    icon: images.ore.gold_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 60,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const hell_rock_ore = {
    id: 'xx_hell_rock_ore_xx',
    name: 'hell_rock',
    icon: images.ore.hell_rock_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 90,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const iron_ore = {
    id: 'xx_iron_ore_xx',
    name: 'iron_ore',
    icon: images.ore.iron_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 10,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const lead_ore = {
    id: 'xx_lead_ore_xx',
    name: 'lead_ore',
    icon: images.ore.lead_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const mithril_ore = {
    id: 'xx_mithril_ore_xx',
    name: 'mithril_ore',
    icon: images.ore.mithril_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 35,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const mythic_ore = {
    id: 'xx_mythic_ore_xx',
    name: 'mythic_ore',
    icon: images.ore.mythic_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 70,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const platinum_ore = {
    id: 'xx_platinum_ore_xx',
    name: 'platinum_ore',
    icon: images.ore.platinum_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 60,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const silver_ore = {
    id: 'xx_silver_ore_xx',
    name: 'silver_ore',
    icon: images.ore.silver_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 35,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const tin_ore = {
    id: 'xx_tin_ore_xx',
    name: 'tin_ore',
    icon: images.ore.tin_ore,
    itemClass: ItemClass.ORE,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const fire_rune = {
    id: 'xx_fire_rune_xx',
    name: 'fire_rune',
    icon: images.rune.fire_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 1,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const fusion_rune = {
    id: 'xx_fusion_rune_xx',
    name: 'fusion_rune',
    icon: images.rune.fusion_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 80,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const life_rune = {
    id: 'xx_life_rune_xx',
    name: 'life_rune',
    icon: images.rune.life_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const mana_rune = {
    id: 'xx_mana_rune_xx',
    name: 'mana_rune',
    icon: images.rune.mana_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 20,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const sand_rune = {
    id: 'xx_sand_rune_xx',
    name: 'sand_rune',
    icon: images.rune.sand_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 15,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const sky_rune = {
    id: 'xx_sky_rune_xx',
    name: 'sky_rune',
    icon: images.rune.sky_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 40,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const stone_rune = {
    id: 'xx_stone_rune_xx',
    name: 'stone_rune',
    icon: images.rune.stone_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 20,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

const water_rune = {
    id: 'xx_water_rune_xx',
    name: 'water_rune',
    icon: images.rune.water_rune,
    itemClass: ItemClass.RUNE,
    starCount: 0,
    levelRequired: 30,

    tickCountForProgress: 21,
    progressPerCycle: 27,
    cycleMax: 120,

    unitsPerCycleMin: 1,
    unitsPerCycleMax: 100,

    xpPerCycle: 25,
    basePointsPerSacrafice: 0.01,

    ...MECHANICAL_PROPS,
};

export const ALL_CARDS: ResourceCardProps[] = [
    wheat,
    unicorn,
    terror_birds,
    sheep,
    lizard,
    liger,
    jackalope,
    hemp,
    dwarf_drake,
    dwarf_hydra,
    dwarf_serpent,
    cow,
    chicken,
    diamo,
    egstar,
    gopal,
    tristan,
    peri,
    amer,
    opali,
    angler_fish,
    baby_fish,
    balooga_fish,
    big_fin_fish,
    boyo_fish,
    dolshark_fish,
    flat_fish,
    long_tail_fish,
    simple_fish,
    stick_fish,
    swordy_fish,
    anchie_tree,
    bush_tree,
    mago_tree,
    mysto_tree,
    oak_tree,
    saboyo_tree,
    adamantite_ore,
    coal_ore,
    copper_ore,
    gold_ore,
    hell_rock_ore,
    iron_ore,
    lead_ore,
    mithril_ore,
    mythic_ore,
    platinum_ore,
    silver_ore,
    tin_ore,
    fire_rune,
    fusion_rune,
    life_rune,
    mana_rune,
    sand_rune,
    sky_rune,
    stone_rune,
    water_rune,
    bluchoo,
    chamo,
    echina,
    ferralfew,
    garlo,
    ginko,
    litenseal,
    matis,
    pawsel,
    vargo,
].sort((a, b) => a.levelRequired - b.levelRequired);
