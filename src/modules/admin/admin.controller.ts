import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllOrders=async(req:Request,res:Response)=>{
try {
    const result= await adminService.getAllOrders()
    res.status(200).json(result)
} catch (error) {
    
}

}

const allUsersOnlySeeByAdmin=async(req:Request,res:Response)=>{
    try {
        const result= await adminService.allUsersOnlySeeByAdmin()
        res.status(200).json(result)
    } catch (error) {
        
    }


}

const userStatusUpdate=async(req:Request,res:Response)=>{
    try {
        
    const id= req.params.id as string

    const result= await adminService.userStatusUpdate(id,req.body)
    res.status(201).json(result)
    } catch (error) {
        
    }

}

export const adminController={
    getAllOrders,
    allUsersOnlySeeByAdmin,
    userStatusUpdate
}