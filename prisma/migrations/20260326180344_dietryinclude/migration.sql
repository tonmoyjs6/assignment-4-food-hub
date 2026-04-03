-- CreateEnum
CREATE TYPE "DietaryPreferenceInclude" AS ENUM ('VEGAN', 'HALAL');

-- AlterTable
ALTER TABLE "MealCategory" ADD COLUMN     "dietaryPreference" "DietaryPreferenceInclude" NOT NULL DEFAULT 'HALAL';
