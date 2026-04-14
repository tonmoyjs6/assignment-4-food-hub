import { Router } from "express";
import { adminController } from "./admin.controller";


const router=Router()


router.get("/orders",adminController.getAllOrders)
router.get("/allUsers",adminController.allUsersOnlySeeByAdmin)
router.patch("/usersStatus/:id",adminController.userStatusUpdate)


export const adminRouter=router