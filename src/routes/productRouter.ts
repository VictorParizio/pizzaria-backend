import { Router } from "express";
import { getProducts } from "../controllers/product";

const route = Router();

route.get("/produto", getProducts);

export default route;
