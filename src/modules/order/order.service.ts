import { OrderCreateInput, OrderUncheckedCreateInput } from "../../../prisma/generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { orderInput } from "./order.interface";

const orderCreate=async(payload:orderInput)=>{
    // console.log("hell");
    try {

        const {userId,providerId}=payload

        const isUserExist= await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        if(!isUserExist){
            new Error("please signUp or login")
        }
        const isProviderExist= await prisma.providerProfile.findUnique({
            where:{
                id:providerId
            }
        })
        if(!isUserExist){
            new Error("provider not exist")
        }

        const result= await prisma.order.create({
            data:{
                userId,
                providerId
            }
        })
        return result
        

        

        
    } catch (error) {
        
    }

    

}
const getUserOrder=async({id,name,email}:{id:string,name:string,email:string})=>{
    
    const userDetailOrder= await prisma.order.findMany({
        where:{
            userId:id
        },
        include:{
            orderItems:{
            include:{
                mealInfo:true
            }
            }
        }
    })
    // console.log();
    return userDetailOrder
}


export const orderService={
    orderCreate,
    getUserOrder
}