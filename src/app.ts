import express from "express"
import { authRouter } from "./modules/auth/auth.router"
import { providerRouter } from "./modules/providerprofile/providerprofile.router"
import { mealsRouter } from "./modules/meals/meals.router"
import { cartegoryRouter } from "./modules/category/category.router"
import { mealCategoryRouter } from "./modules/mealCategory/mealCategory.router"


const app = express()
app.use(express.json())


app.use("/api/v1/auth",authRouter)
app.use("/api/v1/provider",providerRouter)
app.use("/api/v1/meals",mealsRouter)
app.use("/api/v1/category",cartegoryRouter)
app.use("/api/v1/mealCategory",mealCategoryRouter)

export default app
