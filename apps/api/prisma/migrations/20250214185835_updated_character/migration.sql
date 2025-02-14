/*
  Warnings:

  - Added the required column `acrobatics` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animalHandling` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arcana` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `armorClass` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `athletics` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `background` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charisma` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `constitution` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deception` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dexterity` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initiative` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insight` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intelligence` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intimidation` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `investigation` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicine` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nature` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherProficienciesAndLanguages` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perception` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `performance` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persuasion` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proficiencyBonus` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleightOfHand` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spells` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stealth` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strength` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survival` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wisdom` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Classes" AS ENUM ('BARBARIAN', 'BARD', 'CLERIC', 'DRUID', 'FIGHTER', 'MONK', 'PALADIN', 'RANGER', 'ROGUE', 'SORCERER', 'WARLOCK', 'WIZARD');

-- CreateEnum
CREATE TYPE "Races" AS ENUM ('Dragonborn', 'Dwarf_Hill', 'Dwarf_Mountain', 'Elf_Drow', 'Elf_High', 'Elf_Wood', 'Gnome_Forest', 'Gnome_Rock', 'Half_Elf', 'Half_Orc', 'Halfling_Lightfoot', 'Halfling_Stout', 'Human', 'Human_Variant', 'Tiefling');

-- CreateEnum
CREATE TYPE "Backgrounds" AS ENUM ('ACOLYTE', 'CHARLATAN', 'CRIMINAL', 'ENTERTAINER', 'FOLK_HERO', 'GUILD_ARTISAN', 'HERMIT', 'NOBLE', 'OUTLANDER', 'SAGE', 'SAILOR', 'SOLDIER', 'URCHIN');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "acrobatics" INTEGER NOT NULL,
ADD COLUMN     "animalHandling" INTEGER NOT NULL,
ADD COLUMN     "arcana" INTEGER NOT NULL,
ADD COLUMN     "armorClass" INTEGER NOT NULL,
ADD COLUMN     "athletics" INTEGER NOT NULL,
ADD COLUMN     "background" "Backgrounds" NOT NULL,
ADD COLUMN     "charisma" INTEGER NOT NULL,
ADD COLUMN     "class" "Classes" NOT NULL,
ADD COLUMN     "constitution" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deception" INTEGER NOT NULL,
ADD COLUMN     "dexterity" INTEGER NOT NULL,
ADD COLUMN     "equipment" TEXT NOT NULL,
ADD COLUMN     "history" INTEGER NOT NULL,
ADD COLUMN     "initiative" INTEGER NOT NULL,
ADD COLUMN     "insight" INTEGER NOT NULL,
ADD COLUMN     "intelligence" INTEGER NOT NULL,
ADD COLUMN     "intimidation" INTEGER NOT NULL,
ADD COLUMN     "investigation" INTEGER NOT NULL,
ADD COLUMN     "medicine" INTEGER NOT NULL,
ADD COLUMN     "nature" INTEGER NOT NULL,
ADD COLUMN     "otherProficienciesAndLanguages" TEXT NOT NULL,
ADD COLUMN     "perception" INTEGER NOT NULL,
ADD COLUMN     "performance" INTEGER NOT NULL,
ADD COLUMN     "persuasion" INTEGER NOT NULL,
ADD COLUMN     "proficiencyBonus" INTEGER NOT NULL,
ADD COLUMN     "race" "Races" NOT NULL,
ADD COLUMN     "religion" INTEGER NOT NULL,
ADD COLUMN     "selectedSkills" TEXT[],
ADD COLUMN     "sleightOfHand" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL,
ADD COLUMN     "spells" TEXT NOT NULL,
ADD COLUMN     "stealth" INTEGER NOT NULL,
ADD COLUMN     "strength" INTEGER NOT NULL,
ADD COLUMN     "subclass" TEXT,
ADD COLUMN     "survival" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "wisdom" INTEGER NOT NULL;
