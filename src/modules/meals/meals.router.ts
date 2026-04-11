import express from 'express';
import { mealsController } from './meals.controller';
import { checkAuth } from '../../middleware/checkAuth';



const router=express.Router()
// router.get("/all",providerController.allProvider)
router.post("/create",checkAuth("ADMIN","PROVIDER"),mealsController.createMeals)
router.get("/all-meals",mealsController.getAllMeals)
router.get("/filter-meals",mealsController.filterMeals)
router.get("/:id",mealsController.getMealDetail)



export const mealsRouter=router