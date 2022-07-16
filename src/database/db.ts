import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.PASSWORD_POSTGRES,
  {
    host: process.env.HOST,
    dialect: "postgres",
    port: +process.env.DB_PORT,
  }
);

export default db;
