import { CartItemCreateInput } from "../../../prisma/generated/prisma/models"
import { prisma } from "../../lib/prisma"

const cartCreate=async(id:string)=>{
   try {
        const customerId= await prisma.user.findUnique({
            where:{
                id
            }
        })
        if(customerId?.role!=="CUSTOMER"){

            return new Error("please use CustomerId")

        }
        const result= await prisma.cart.create({
            data:{
                userId:id
            }
        })

        return result
        

   } catch (error) {
    
   }
}


const cartItemCreate=async(payload:CartItemCreateInput)=>{

    try {
        const result= await prisma.cartItem.create({
            data:payload
        })

        return result
        
    } catch (error) {
        
    }

}



export const cartService={
    cartCreate,
    cartItemCreate
}