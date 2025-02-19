import { Backgrounds, Classes, Races } from '@prisma/client';
import { z } from 'zod';

export class CreateCharacterDto {
  name: string;
  userId: string;
  isActive?: boolean;
  class: Classes;
  subclass?: string;
  race: Races;
  background: Backgrounds;
  proficiencyBonus: number;
  selectedSkills?: string[];
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
  otherProficienciesAndLanguages?: string[];
  equipment?: string[];
  spells?: string[];
  armorClass: number;
  initiative: number;
  speed: number;
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

export const CharacterSchema = z.object({
  name: z.string(),
  userId: z.string(),
  isActive: z.boolean().optional(),
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
  otherProficienciesAndLanguages: z.array(z.string()).optional(),
  equipment: z.array(z.string()).optional(),
  spells: z.array(z.string()).optional(),
  armorClass: z.number(),
  initiative: z.number(),
  speed: z.number(),
});
