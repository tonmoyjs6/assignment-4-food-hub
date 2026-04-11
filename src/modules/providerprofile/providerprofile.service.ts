import { DietaryPreferenceInclude } from "../../../prisma/generated/prisma/enums";
import { MealUpdateWithoutMealCategoriesInput } from "../../../prisma/generated/prisma/models";
import { prisma } from "../../lib/prisma";







const createProviderProfile = async (payload: any) => {
    const providerProfileCreation = await prisma.providerProfile.create({
        data: payload
    })
    return providerProfileCreation
}




const allProvider = async () => {

    const provider = await prisma.providerProfile.findMany({
        include: {
            userInfo: true,
            meals: true
        }
    })

    return provider


}

const singleProviderProfileaAndMeanus = async (id: string) => {

    const singleProviderInfo = await prisma.providerProfile.findUnique({
        where: {
            id: id
        },
        include: {
            meals: true
        }
    })
    return singleProviderInfo

}


const createMeals = async (payload: any) => {
    // payload type can change
    const mealsCreationByProvider = await prisma.meal.create({
        data: payload
    })
    return mealsCreationByProvider

}

interface mealupdateInterface{
    mealId:string;
    mealName:string;providerId:string;
    isAvailable:boolean;
    price:number;
dietaryPreference:DietaryPreferenceInclude
    
    
}

const updateMeal = async (id: string,meal:mealupdateInterface) => {
    const {mealId,mealName,providerId,isAvailable,price,dietaryPreference}=meal

    try {
        const provider= await prisma.providerProfile.findUnique({
            where:{
                id
            },
            include:{
                meals:true
            }

        })
        if(!provider){
            return
        }
    const meals= provider?.meals

    const mealExist=meals?.find((meal)=>meal.id===mealId)
    if(!mealExist){
        return 
    }
    

    const updateMealByOwnProvider= await prisma.meal.update({
        where:{
            id:mealId
        },
        data:{
            mealName,
            isAvailable,
            price,
            dietaryPreference


        }
    })

    return updateMealByOwnProvider
    


    } catch (error) {

    }

}

export const providerProfileService = {
    allProvider,
    createProviderProfile,
    singleProviderProfileaAndMeanus,
    createMeals,
    updateMeal

}



