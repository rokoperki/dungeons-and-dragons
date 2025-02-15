import { Backgrounds, Classes, Races, User } from '@prisma/client';
import { z } from 'zod';

export class CreateCharacterDto {
  id: string;
  name: string;
  userId: string;
  user: User;
  class: Classes;
  subclass?: string;
  race: Races;
  background: Backgrounds;
  proficiencyBonus: number;
  selectedSkills: string[];
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
  otherProficienciesAndLanguages: string;
  equipment: string;
  spells: string;
  armorClass: number;
  initiative: number;
  speed: number;
  createdAt: Date;
  updatedAt: Date;
}

const ClassesEnum = z.enum([
  'BARBARIAN',
  'BARD',
  'CLERIC',
  'DRUID',
  'FIGHTER',
  'MONK',
  'PALADIN',
  'RANGER',
  'ROGUE',
  'SORCERER',
  'WARLOCK',
  'WIZARD',
]);

const RacesEnum = z.enum([
  'Dragonborn',
  'Dwarf_Hill',
  'Dwarf_Mountain',
  'Elf_Drow',
  'Elf_High',
  'Elf_Wood',
  'Gnome_Forest',
  'Gnome_Rock',
  'Half_Elf',
  'Half_Orc',
  'Halfling_Lightfoot',
  'Halfling_Stout',
  'Human',
  'Human_Variant',
  'Tiefling',
]);

const BackgroundsEnum = z.enum([
  'ACOLYTE',
  'CHARLATAN',
  'CRIMINAL',
  'ENTERTAINER',
  'FOLK_HERO',
  'GUILD_ARTISAN',
  'HERMIT',
  'NOBLE',
  'OUTLANDER',
  'SAGE',
  'SAILOR',
  'SOLDIER',
  'URCHIN',
]);

export const CreateCharacterSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  userId: z.string().uuid(),
  class: ClassesEnum,
  subclass: z.string().optional(),
  race: RacesEnum,
  background: BackgroundsEnum,
  proficiencyBonus: z.number(),
  selectedSkills: z.array(z.string()),
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
  acrobatics: z.number(),
  animalHandling: z.number(),
  arcana: z.number(),
  athletics: z.number(),
  deception: z.number(),
  history: z.number(),
  insight: z.number(),
  intimidation: z.number(),
  investigation: z.number(),
  medicine: z.number(),
  nature: z.number(),
  perception: z.number(),
  performance: z.number(),
  persuasion: z.number(),
  religion: z.number(),
  sleightOfHand: z.number(),
  stealth: z.number(),
  survival: z.number(),
  otherProficienciesAndLanguages: z.string(),
  equipment: z.array(z.string()),
  spells: z.array(z.string()),
  armorClass: z.number(),
  initiative: z.number(),
  speed: z.number(),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
});

export const UpdateCharacterSchema = z.object({
  name: z.string().optional(),
  userId: z.string().uuid().optional(),
  class: ClassesEnum.optional(),
  subclass: z.string().optional(),
  race: RacesEnum.optional(),
  background: BackgroundsEnum.optional(),
  proficiencyBonus: z.number().optional(),
  selectedSkills: z.array(z.string()).optional(),
  strength: z.number().optional(),
  dexterity: z.number().optional(),
  constitution: z.number().optional(),
  intelligence: z.number().optional(),
  wisdom: z.number().optional(),
  charisma: z.number().optional(),
  acrobatics: z.number().optional(),
  animalHandling: z.number().optional(),
  arcana: z.number().optional(),
  athletics: z.number().optional(),
  deception: z.number().optional(),
  history: z.number().optional(),
  insight: z.number().optional(),
  intimidation: z.number().optional(),
  investigation: z.number().optional(),
  medicine: z.number().optional(),
  nature: z.number().optional(),
  perception: z.number().optional(),
  performance: z.number().optional(),
  persuasion: z.number().optional(),
  religion: z.number().optional(),
  sleightOfHand: z.number().optional(),
  stealth: z.number().optional(),
  survival: z.number().optional(),
  otherProficienciesAndLanguages: z.string().optional(),
  equipment: z.array(z.string()).optional(),
  spells: z.array(z.string()).optional(),
  armorClass: z.number().optional(),
  initiative: z.number().optional(),
  speed: z.number().optional(),
  updatedAt: z.date().default(new Date()).optional(),
});
