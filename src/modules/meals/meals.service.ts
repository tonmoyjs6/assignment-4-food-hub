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

const getAllMeals = async () => {
    const allMeals = await prisma.meal.findMany()
    return allMeals

}


const filterMeals = async (payload: any) => {

    const { category, dietarypreferences, maxPrice ,minPrice} = payload
    let filterInput: any = {}
    // console.log(dietarypreferences);

    if (category) {
        filterInput.mealCategories = {
            some: {
                categoryInfo: {
                    cuisineName: category
                }
            }
        }

    }

    if (dietarypreferences) {
        filterInput.mealCategories = {
            some: {
                // ...filterInput.mealCategories?.some,
                dietaryPreference: dietarypreferences
            }

        }
    }

    if (minPrice || maxPrice) {
    filterInput.price = {
        ...(minPrice && { gte: Number(minPrice) }),
        ...(maxPrice && { lte: Number(maxPrice) })
    }
}



    try {
        const result = await prisma.meal.findMany({
            where: filterInput

        })
        return result

    } catch (error) {

    }



}



const getMealDetail=async(id:string)=>{
    try {
        const result= await prisma.meal.findUnique(
            {
                where:{
                    id
                }
            }
        )
        

        return result
    } catch (error) {
        
    }
    

}

export const mealsService = {
    createMeals,
    getAllMeals,
    filterMeals,
    getMealDetail

}