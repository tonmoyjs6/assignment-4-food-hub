import { Router } from "express";
import { ordercontroller } from "./order.controller";



const router= Router()

router.post("/orderCreate",ordercontroller.orderCreate)



export const orderRouter=router