import { dataBaseConnection } from "../config/connectiong";

const listData = (table: string) => {
  const data = dataBaseConnection(table);
  return data;
};

const getData = (table: string, field: object) => {
  const data = dataBaseConnection(table).where(field).first();
  return data;
};

const addData = (table: string, data: object) => {
  const dataAdded = dataBaseConnection(table).insert(data).returning("*");
  return dataAdded;
};

const editData = (props: any) => {
  const { table, field, data } = props;
  const dataEdited = dataBaseConnection(table).where(field).update(data);
  return dataEdited;
};

export { listData, getData, addData, editData };
