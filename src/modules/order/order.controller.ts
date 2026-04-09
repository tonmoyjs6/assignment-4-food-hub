import { Request, Response } from "express";
import { orderService } from "./order.service";


const orderCreate=async(req:Request,res:Response)=>{

    try {
        const {userId,providerId}=req.body

        const result= await orderService.orderCreate({userId,providerId})

    } catch (error) {
        
    }


    


}

export const ordercontroller={
    orderCreate
}