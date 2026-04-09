import { Request, RequestHandler, Response } from "express"
import { mealsService } from "./meals.service"

const createMeals: RequestHandler = async (req, res) => {

    try {
        const result = await mealsService.createMeals(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllMeals = async (req: Request, res: Response) => {





    try {
        const result = await mealsService.getAllMeals()
        res.status(200).json({
            result
        })

    } catch (error) {

    }

}

const filterMeals = async (req: Request, res: Response) => {
    // console.log(req.query);

    try {
        const result = await mealsService.filterMeals(req.query)
        res.status(200).json({ result })


    } catch (error) {

    }
}



const getMealDetail=async(req:Request,res:Response)=>{
    

    const id= req.params.id as string

    try {
        const result= await mealsService.getMealDetail(id)

        res.status(200).json({
            result
        })
        
    } catch (error) {
        
    }

}

export const mealsController = {
    createMeals,
    getAllMeals,
    filterMeals,
    getMealDetail

}


