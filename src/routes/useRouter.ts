import { Router } from "express";
import { listUsers, registerUser, loginUser } from "../controllers/user";

const route = Router();

route.get("/user", listUsers);
route.post("/user", registerUser);
route.post("/login", loginUser);

export default route;
