import { Request, Response } from "express";
import { orderItemService } from "./orderItem.service";



const orderItemCreate=async(req:Request,res:Response)=>{

    try {
        const {userId,providerId}=req.body
        const result= await orderItemService.orderItemCreate()

        

    } catch (error) {
        
    }


    


}

export const orderItemcontroller={
    orderItemCreate
}