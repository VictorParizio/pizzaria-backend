import { Router } from "express";
import { getProducts } from "../controllers/product";

const route = Router();

route.get("/product", getProducts);

export default route;
