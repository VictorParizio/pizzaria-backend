import knex, { Knex } from "knex";

interface ConnectionConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

const connectionConfig: ConnectionConfig = {
  host: process.env.DB_HOST || "",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  user: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "",
};

export const dataBaseConnection: Knex = knex({
  client: "pg",
  connection: connectionConfig,
});

