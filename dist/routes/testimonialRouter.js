"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonial_1 = require("../controllers/testimonial");
const route = (0, express_1.Router)();
route.get("/testimonial", testimonial_1.listTestimonial);
exports.default = route;
//# sourceMappingURL=testimonialRouter.js.map