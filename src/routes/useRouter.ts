import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user";

const route = Router();

route.post("/user", registerUser);
route.post("/login", loginUser);

export default route;
