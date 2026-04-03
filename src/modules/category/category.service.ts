import { CategoryCreateInput, CategoryUpdateWithoutMealCategoriesInput } from "../../../prisma/generated/prisma/models"
import { prisma } from "../../lib/prisma"

const categoryCreate=async(payload:CategoryCreateInput)=>{
    try {
        const result= await prisma.category.create({
            data:payload
        })
        return result
    } catch (error) {
        
    }

}

const updateCategory=async({id,cuisineName,description,isActive}:{id: string,cuisineName:string,
    description:string,isActive:boolean})=>{

    const isCategoryExist= await prisma.category.findUnique({
        where:{
            id
        }
    })
    if(!isCategoryExist){
        throw new Error("this category not exist")
        // global error Handeler na thakle error mesage show kore na
    }

    const result= await prisma.category.update({
        where:{
            id
        },
        data:{
            
            cuisineName,
            description,
            isActive
        }
    })

    return result





    





}



const deleteCategory=async({id}:{id: string})=>{

    const isCategoryExist= await prisma.category.findUnique({
        where:{
            id
        }
    })
    if(!isCategoryExist){
        throw new Error("this category not exist")
        // global error Handeler na thakle error mesage show kore na
    }

    
    const result= await prisma.category.delete({
        where:{
            id
        }
    })

    return result





    





}


export const categoryService={
    categoryCreate,
    updateCategory,
    deleteCategory
}