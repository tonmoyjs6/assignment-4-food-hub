import { Request, Response } from "express";
import { categoryService } from "./category.service";


const categoryCreate=async(req:Request,res:Response)=>{
    try {
        const result= await categoryService.categoryCreate(req.body)

        res.status(201).json({result})
    } catch (error) {
        
    }

}

const updateCategory=async(req:Request,res:Response)=>{
     try {
        const id=req.params.id as string 

        
        // this not destruring it is normally dot notaion accses
        
        const {cuisineName,description,isActive}=req.body
        
        const result= await categoryService.updateCategory({id,cuisineName,description,isActive}) 
        res.status(201).json(result)
     } catch (error) {
        
     } 

}


const deleteCategory=async(req:Request,res:Response)=>{
     try {
        const id=req.params.id as string 

        const result= await categoryService.deleteCategory({id})
        res.status(200).json({
            result,
            mesaage:"delete succeffully"
        })
        
               
        
       
     } catch (error) {
        
     } 

}

export const categoryController={
    categoryCreate,
    updateCategory,
    deleteCategory
}