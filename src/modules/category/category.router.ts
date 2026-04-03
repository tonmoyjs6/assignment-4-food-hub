import { Router } from "express";
import { categoryController } from "./category.controller";


const router=Router()
// not make category
router.post("/create",categoryController.categoryCreate)
router.patch("/:id",categoryController.updateCategory)
router.delete("/:id",categoryController.deleteCategory)


export const cartegoryRouter=router