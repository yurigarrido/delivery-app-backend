// import { Sequelize } from "sequelize";

// const db = new Sequelize({
//   database: process.env.DATABASE,
//   username: process.env.DB_USERNAME,
//   password: process.env.PASSWORD_POSTGRES,
//   host: process.env.HOST,
//   port: +process.env.DB_PORT,
//   dialect: "postgres",
//   dialectOptions: {
//     require: true,
//     rejectUnauthorized: false,
//     encrypt: "true"
//   },
// });

// export default db;
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  export default db;