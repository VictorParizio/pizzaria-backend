"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const route = (0, express_1.Router)();
route.get("/usuario", user_1.listUsers);
route.post("/usuario", user_1.registerUser);
route.post("/login", user_1.loginUser);
exports.default = route;
//# sourceMappingURL=useRouter.js.map