import { Request, Response } from "express";
import { cartService } from "./cart.service";


const cartCreate=async(req:Request,res:Response)=>{

    try {

        const {userId}= req.body

        const result= await cartService.cartCreate(userId)

        res.status(201).json(result)
        
    } catch (error) {
        
    }

}




const cartItemCreate=async(req:Request,res:Response)=>{

    try {

        

        const result= await cartService.cartItemCreate(req.body)

        res.status(201).json(result)
        
    } catch (error) {
        
    }

}


// total price korte hobe



export const cartController={
    cartCreate,
    cartItemCreate
}