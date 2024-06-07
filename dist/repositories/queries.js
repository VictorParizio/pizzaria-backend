"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editData = exports.addData = exports.getData = exports.listData = void 0;
const connectiong_1 = require("../config/connectiong");
const listData = (table) => {
    const data = (0, connectiong_1.dataBaseConnection)(table);
    return data;
};
exports.listData = listData;
const getData = (table, field) => {
    const data = (0, connectiong_1.dataBaseConnection)(table).where(field).first();
    return data;
};
exports.getData = getData;
const addData = (table, data) => {
    const dataAdded = (0, connectiong_1.dataBaseConnection)(table).insert(data).returning("*");
    return dataAdded;
};
exports.addData = addData;
const editData = (props) => {
    const { table, field, data } = props;
    const dataEdited = (0, connectiong_1.dataBaseConnection)(table).where(field).update(data);
    return dataEdited;
};
exports.editData = editData;
//# sourceMappingURL=queries.js.map