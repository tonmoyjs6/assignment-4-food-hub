import { Request, Response } from "express";
import { orderService } from "./order.service";


const orderCreate=async(req:Request,res:Response)=>{

    try {
        const {userId,providerId}=req.body

        const result= await orderService.orderCreate({userId,providerId})
        res.status(201).json(result)

    } catch (error) {
        
    }


    


}

const getUserOrder=async(req:Request,res:Response)=>{
    const {id,name,email}=req.user
    
    const result= await orderService.getUserOrder({id,name,email})
    res.status(200).json(result)

}

export const ordercontroller={
    orderCreate,
    getUserOrder
}