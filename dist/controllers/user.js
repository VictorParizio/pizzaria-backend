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
exports.loginUser = exports.registerUser = exports.listUsers = void 0;
const queries_1 = require("../repositories/queries");
const encrypt_1 = require("../utils/encrypt");
const jwt_1 = require("../utils/jwt");
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getedUsers = yield (0, queries_1.listData)("users");
        return res.status(200).json(getedUsers);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.listUsers = listUsers;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const foundEmail = yield (0, queries_1.getData)("users", { email });
        if (foundEmail) {
            return res
                .status(409)
                .json({ message: "Usuário ou Email já Cadastrado" });
        }
        const encryptedPassword = yield (0, encrypt_1.encryptPassword)(password.toString());
        const newUser = { name, email, password: encryptedPassword };
        const [registererUser] = yield (0, queries_1.addData)("users", newUser);
        delete registererUser.password;
        const access_token = (0, jwt_1.generateToken)({ user_id: registererUser.user_id }, "8h");
        return res.status(201).json({
            registererUser,
            access_token,
            message: "Usuário cadastrado com sucesso",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield (0, queries_1.getData)("users", { email });
        if (!user) {
            return res.status(401).json({ message: "Email e/ou Senha inválido(s)" });
        }
        const validPassword = yield (0, encrypt_1.comparePassword)(password.toString(), user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Email e/ou Senha inválido(s)" });
        }
        const access_token = (0, jwt_1.generateToken)({ id: user.user_id }, "8h");
        delete user.password;
        return res.status(200).json({ user, access_token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=user.js.map