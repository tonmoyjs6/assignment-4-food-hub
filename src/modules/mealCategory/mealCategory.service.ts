import { Request, Response } from "express"
import { MealCategoryCreateInput } from "../../../prisma/generated/prisma/models"
import { prisma } from "../../lib/prisma"

const createMeals = async (payload:MealCategoryCreateInput) => {

    try {

        const result= await prisma.mealCategory.create({
            data:payload
        })
        return result
        
    } catch (error) {

    }
}


export const mealCategoryService={
    createMeals
}