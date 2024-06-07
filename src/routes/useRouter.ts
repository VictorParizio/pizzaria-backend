import { Router } from "express";
import { listUsers, registerUser, loginUser } from "../controllers/user";

const route = Router();

route.get("/usuario", listUsers);
route.post("/usuario", registerUser);
route.post("/login", loginUser);

export default route;
