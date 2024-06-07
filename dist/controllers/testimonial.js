"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTestimonial = void 0;
const queries_1 = require("../repositories/queries");
const listTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getedTestimonial = yield (0, queries_1.listData)("testimonials");
        return res.status(200).json(getedTestimonial);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.listTestimonial = listTestimonial;
//# sourceMappingURL=testimonial.js.map