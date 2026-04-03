import { MealWhereInput } from "../../../prisma/generated/prisma/models"
import { prisma } from "../../lib/prisma"

const createMeals = async (payload: any) => {
    // payload type can change
    const mealsCreationByProvider = await prisma.meal.create({
        data: payload
    })
    return mealsCreationByProvider

}

// not use filtr after make catgeory data then make filter for use

const getAllMeals=async()=>{
    const allMeals= await prisma.meal.findMany()
    return allMeals

}


const filterMeals=async(payload:any)=>{

    const {catgeory}=payload
    


}

export const mealsService = {
    createMeals,
    getAllMeals,
    filterMeals
    
}