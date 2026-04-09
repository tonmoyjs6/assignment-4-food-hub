import { Router } from "express";
import { orderItemcontroller } from "./orderItem.controller";




const router= Router()

router.post("/orderItemCreate",orderItemcontroller.orderItemCreate)



export const orderItemRouter=router