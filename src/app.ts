import express from "express"
import { authRouter } from "./modules/auth/auth.router"
import { providerRouter } from "./modules/providerprofile/providerprofile.router"
import { mealsRouter } from "./modules/meals/meals.router"
import { cartegoryRouter } from "./modules/category/category.router"
import { mealCategoryRouter } from "./modules/mealCategory/mealCategory.router"
import { orderRouter } from "./modules/order/order.router"
import { orderItemRouter } from "./modules/orderItem/orderitem.router"
import { adminRouter } from "./modules/admin/admin.router"


const app = express()
app.use(express.json())


app.use("/api/v1/auth",authRouter)
app.use("/api/v1/provider",providerRouter)
app.use("/api/v1/meals",mealsRouter)
app.use("/api/v1/category",cartegoryRouter)
app.use("/api/v1/mealCategory",mealCategoryRouter)
app.use("/api/v1/orders",orderRouter)
app.use("/api/v1/orderItem",orderItemRouter)
app.use("/api/v1/admin",adminRouter)


export default app
