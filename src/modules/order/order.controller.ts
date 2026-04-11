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

// total amount add kora hoy nai
const orderDetails=async(req:Request,res:Response)=>{
    try {
        const id= req.params.orderId 
        if(typeof id !=="string"){
            throw new Error("id should be string")
            
        }
        const result=await orderService.orderDetails(id)
        res.status(200).json(result)
        
    } catch (error) {
        
    }

}

export const ordercontroller={
    orderCreate,
    getUserOrder,
    orderDetails
}