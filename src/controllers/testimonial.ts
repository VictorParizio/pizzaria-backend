import { Request, Response } from "express";
import { listData } from "../repositories/queries";

const listTestimonial = async (_: Request, res: Response) => {
  try {
    const getedTestimonial = await listData("testimonials");
    return res.status(200).json(getedTestimonial);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export { listTestimonial };
