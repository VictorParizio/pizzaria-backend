"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const useRouter_1 = __importDefault(require("./useRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const testimonialRouter_1 = __importDefault(require("./testimonialRouter"));
const apiPizzarIA = (0, express_1.default)();
apiPizzarIA.use(useRouter_1.default);
apiPizzarIA.use(productRouter_1.default);
apiPizzarIA.use(testimonialRouter_1.default);
exports.default = apiPizzarIA;
//# sourceMappingURL=index.js.map