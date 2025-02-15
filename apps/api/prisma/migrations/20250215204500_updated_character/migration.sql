/*
  Warnings:

  - The `equipment` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `otherProficienciesAndLanguages` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `spells` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "equipment",
ADD COLUMN     "equipment" TEXT[],
DROP COLUMN "otherProficienciesAndLanguages",
ADD COLUMN     "otherProficienciesAndLanguages" TEXT[],
DROP COLUMN "spells",
ADD COLUMN     "spells" TEXT[];
