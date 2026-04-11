import { Request, RequestHandler, Response } from "express";
import { providerProfileService } from "./providerprofile.service";




const createProviderProfile:RequestHandler=async(req,res)=>{

        try {
            const result= await providerProfileService.createProviderProfile(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
}

const createMeals: RequestHandler = async (req, res) => {

    try {
        const result = await providerProfileService.createMeals(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const allProvider:RequestHandler=async(req,res)=>{

        try {
            const result= await providerProfileService.allProvider()
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
}


// aita thik hoi nai
const singleProviderProfileaAndMeanus:RequestHandler=async(req,res)=>{
    const {id}=req.params
    console.log(id);
    
     try {
        if(typeof id==="string"){
            const result= await providerProfileService.singleProviderProfileaAndMeanus(id)
            res.status(200).json(result)

        }
            
        } catch (error) {
            res.status(400).json(error)
        }

}

const updateMeal=async(req:Request,res:Response)=>{

    try {
        const id= req.params.id as string
        

        const result= await providerProfileService.updateMeal(id,req.body)
        res.status(201).json(result)
    } catch (error) {
        
    }

}

export const providerController={
    allProvider,
    createProviderProfile,
    singleProviderProfileaAndMeanus,
    createMeals,
    updateMeal
}