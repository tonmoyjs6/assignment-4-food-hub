import { Router } from "express";
import { ordercontroller } from "./order.controller";
import { checkAuth } from "../../middleware/checkAuth";



const router= Router()

router.post("/orderCreate",ordercontroller.orderCreate)
// user login userId diye ber korbo


router.get("/api/orders",checkAuth("CUSTOMER"),ordercontroller.getUserOrder)




export const orderRouter=router