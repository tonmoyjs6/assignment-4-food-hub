import express from 'express';
import { providerController } from './providerprofile.controller';
// import { providerController } from './providerprofile.controller';

// console.log(providerController);

// DELETE	/api/provider/meals/:id	Remove meal


const router=express.Router()
router.get("/all",providerController.allProvider)
router.post("/create",providerController.createProviderProfile)
router.get("/single/:id",providerController.singleProviderProfileaAndMeanus)
router.post("/create-meal",providerController.createMeals)
router.put("/:id",providerController.updateMeal)
router.delete("/:deleteid",providerController.deleteMeal)
// PATCH	/api/provider/orders/:id	Update order status
router.patch("/order/:updateid",providerController.updateOrderStatus)





export const providerRouter=router