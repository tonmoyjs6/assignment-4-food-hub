import { Router } from "express";
import { mealCategoryController } from "./mealCategory.controller";

const router= Router()
router.post("/create",mealCategoryController.createMeals)



export const mealCategoryRouter=router