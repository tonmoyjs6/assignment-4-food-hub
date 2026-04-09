import { OrderCreateInput, OrderUncheckedCreateInput } from "../../../prisma/generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { orderInput } from "./order.interface";

const orderCreate=async(payload:orderInput)=>{
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
        

        

        
    } catch (error) {
        
    }

    

}



export const orderService={
    orderCreate
}