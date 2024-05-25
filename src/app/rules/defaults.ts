import { Skill } from '../types/skills'
import { Trait } from '../types/trait'
import { DEFUALT_GHOUL_STATS } from './races'

export const MIN_STAT = 1
export const MAX_STAT = 10

export const MIN_SKILL = 5
export const MAX_SKILL = 100

export const STARTING_STAT_POINTS = 33
export const STARTING_SKILL_POINTS = 0

export const STARTING_TRAITS = 2

export const DEFAULT_STATS = {
	strength: MIN_STAT,
	perception: MIN_STAT,
	endurance: MIN_STAT,
	charisma: MIN_STAT,
	intelligence: MIN_STAT,
	agility: MIN_STAT,
	luck: MIN_STAT,
}

export const DEFAULT_SKILLS = {
	barter: MIN_SKILL,
	energyWeapons: MIN_SKILL,
	explosives: MIN_SKILL,
	guns: MIN_SKILL,
	lockpick: MIN_SKILL,
	medicine: MIN_SKILL,
	melee: MIN_SKILL,
	repair: MIN_SKILL,
	science: MIN_SKILL,
	sneak: MIN_SKILL,
	speech: MIN_SKILL,
	survival: MIN_SKILL,
	unarmed: MIN_SKILL,
}

export const DEFAULT_SKILL_MODS = {
	barter: 0,
	energyWeapons: 0,
	explosives: 0,
	guns: 0,
	lockpick: 0,
	medicine: 0,
	melee: 0,
	repair: 0,
	science: 0,
	sneak: 0,
	speech: 0,
	survival: 0,
	unarmed: 0,
}

export const DEFAULT_TAGS = 3

export const GHOUL_STAT_MODS = {
	perception: 2,
	endurance: 1,
}

export const DEFAULT_CHAR = {
	name: '',
	level: 0,
    hp: 0,
    frame: 'AVERAGE_JOE',

	stats: DEFUALT_GHOUL_STATS,

	skills: DEFAULT_SKILLS,
	taggedSkills: [] as Skill[],
	availableTags: DEFAULT_TAGS,

	availableStatPoints: STARTING_STAT_POINTS,
	availableSkillPoints: STARTING_SKILL_POINTS,

	traits: [] as Trait[],
	availableTraits: STARTING_TRAITS,
}
