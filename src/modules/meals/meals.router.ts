import express from 'express';
import { mealsController } from './meals.controller';



const router=express.Router()
// router.get("/all",providerController.allProvider)
router.post("/create",mealsController.createMeals)
router.get("/all-meals",mealsController.getAllMeals)
router.get("/filter-meals",mealsController.filterMeals)





export const mealsRouter=router