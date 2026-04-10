import { prisma } from "../../lib/prisma"
import { creatOrderItemInput } from "./orderItem.interface"

const orderItemCreate = async (payload: creatOrderItemInput) => {
    const { orderId, items } = payload
    const isMealId = items.map((meal) => meal.mealId)


    try {

        const mealExist = await prisma.meal.findMany({
            where: {
                id: {
                    in: isMealId
                }
            }
        })
        // console.log(mealExist);

        const orderItems = items.map((item) => {
            const findMeal = mealExist.find((meal) => meal.id === item.mealId)
            // console.log(findMeal,"findMeal");
            if (!findMeal) {
                console.log("wrong", findMeal);
            }
            return {
                orderId,
                mealId: item.mealId,
                price: findMeal?.price || 0,
                quantity: item.quantity
            }
        })
        console.log(orderItems);

        // console.log(orderItems);

        const order = await prisma.orderItem.createMany({
            data: orderItems
        })
        const result = await prisma.orderItem.findMany({
            where: { orderId },
        });

        return result











    } catch (error) {

    }



}



export const orderItemService = {
    orderItemCreate
}