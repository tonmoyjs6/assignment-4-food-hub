
import { STATUS } from "../../../prisma/generated/prisma/enums"
import { prisma } from "../../lib/prisma"

const getAllOrders = async () => {


    try {
        const allTheOrders = await prisma.order.findMany()
        return allTheOrders

    } catch (error) {

    }
}


const allUsersOnlySeeByAdmin = async () => {
    try {
        const result = await prisma.user.findMany()
        return result
    } catch (error) {

    }

}


const userStatusUpdate = async (id: string, payload: STATUS) => {
    try {
        const userExist = await prisma.user.findUnique({
            where: {
                id
            }
        })
        if (!userExist) {
            return
        }

        const { status } = payload
        // console.log(status);
        const parsedStatus = STATUS[status as keyof typeof STATUS]


        const userStatusUpdate = await prisma.user.update({
            where: {
                id
            },
            data: {

                status: parsedStatus
            }

        }
        )
        return userStatusUpdate
    } catch (error) {

    }
}

export const adminService = {
    getAllOrders,
    allUsersOnlySeeByAdmin,
    userStatusUpdate
}