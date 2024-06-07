"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (data, validity) => {
    return jsonwebtoken_1.default.sign(data, process.env.PASSWORD_JWT || "", {
        expiresIn: validity,
    });
};
exports.generateToken = generateToken;
const checkToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.PASSWORD_JWT || "");
};
exports.checkToken = checkToken;
//# sourceMappingURL=jwt.js.map