"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseConnection = void 0;
const knex_1 = __importDefault(require("knex"));
const connectionConfig = {
    host: process.env.DB_HOST || "",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    user: process.env.DB_USER || "",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "",
};
exports.dataBaseConnection = (0, knex_1.default)({
    client: "pg",
    connection: connectionConfig,
});
//# sourceMappingURL=connectiong.js.map