import { Router } from "express";
const route = Router();

import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

route.use("/", swaggerUI.serve);
route.get("/", swaggerUI.setup(swaggerDocument));

export default route