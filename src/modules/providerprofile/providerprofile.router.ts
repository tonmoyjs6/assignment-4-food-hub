import express from 'express';
import { providerController } from './providerprofile.controller';
// import { providerController } from './providerprofile.controller';

// console.log(providerController);

const router=express.Router()
router.get("/all",providerController.allProvider)
router.post("/create",providerController.createProviderProfile)
router.get("/single/:id",providerController.singleProviderProfileaAndMeanus)
router.post("/create-meal",providerController.createMeals)
router.put("/:id",providerController.updateMeal)





export const providerRouter=router