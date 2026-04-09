/*
  Warnings:

  - You are about to drop the column `dietaryPreference` on the `MealCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "dietaryPreference" "DietaryPreferenceInclude" NOT NULL DEFAULT 'HALAL';

-- AlterTable
ALTER TABLE "MealCategory" DROP COLUMN "dietaryPreference";
