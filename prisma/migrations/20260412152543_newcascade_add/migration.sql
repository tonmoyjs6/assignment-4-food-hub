-- DropForeignKey
ALTER TABLE "MealCategory" DROP CONSTRAINT "MealCategory_mealId_fkey";

-- AddForeignKey
ALTER TABLE "MealCategory" ADD CONSTRAINT "MealCategory_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
