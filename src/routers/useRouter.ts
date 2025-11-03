import { Router } from "express";
import { registerUser, loginUser, listUser } from "../controllers/user";

const route = Router();

route.post("/user", registerUser);
route.post("/login", loginUser);
route.get("/user", listUser);

export default route;
