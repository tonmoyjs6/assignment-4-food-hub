import { Request, Response } from "express";
import { orderItemService } from "./orderItem.service";



const orderItemCreate = async (req: Request, res: Response) => {
  try {
    const result = await orderItemService.orderItemCreate(req.body);

    return res.status(201).json({
      success: true,
      data: result,
    });

  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const orderItemcontroller={
    orderItemCreate
}