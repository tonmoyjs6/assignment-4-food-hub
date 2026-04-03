import { Request, Response } from "express"
import { mealCategoryService } from "./mealCategory.service"

const createMeals = async (req:Request, res:Response) => {

    try {
        const result= await mealCategoryService.createMeals(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const mealCategoryController={
    createMeals
}