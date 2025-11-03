import { Request, Response } from "express";
import { listData } from "../repositories/queries";

const getProducts = async (_: Request, res: Response) => {
  try {
    const getedProducts = await listData("products");
    return res.status(200).json(getedProducts);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export { getProducts };
