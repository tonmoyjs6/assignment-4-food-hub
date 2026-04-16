import { Router } from "express";
import { cartController } from "./cart.controller";


const router= Router()


router.post("/create-cart",cartController.cartCreate)
router.post("/cartItem-create",cartController.cartItemCreate)


export const cartRouter=router