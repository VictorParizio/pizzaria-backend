"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const route = (0, express_1.Router)();
route.get("/produto", product_1.getProducts);
exports.default = route;
//# sourceMappingURL=productRouter.js.map