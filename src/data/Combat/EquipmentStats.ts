import { SkillID } from 'models/Skill/Skill_ID';

export interface IEquipmentStats {
	// % increase of player chance to attacl
	attack_stab: number;
	attack_slash: number;
	attack_crush: number;
	attack_magic: number;
	attack_ranged: number;

	// % decress of enemy attack roll
	defence_stab: number;
	defence_slash: number;
	defence_crush: number;
	defence_magic: number;
	defence_ranged: number;

	// % increase of damage rolled
	melee_strength: number;
	ranged_strength: number;
	magic_strength: number;

	prayer_bonus: number;

	slot: EquipmentSlotType;

	requirements: { skillID: SkillID; level: number };
}

enum EquipmentSlotType {
	HEAD = 'HEAD',
	CHEST = 'CHEST',
	LEGS = 'LEGS',
	BOOTS = 'BOOTS'
}
