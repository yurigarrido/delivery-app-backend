import express, { json } from "express";
import db from "./database/db";
import Product from "./database/models/ProductsModel";
import Sale from "./database/models/SalesModel";
import SaleProduct from "./database/models/SalesProducts";
import User from "./database/models/UserModel";
import { router } from "./routes";
const cors = require('cors')

const PORT = process.env.PORT || 3000;

 const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    const app = express();
    app.use(accessControl);

// app.use(cors())
app.use(json())
app.use(router)

app.listen(PORT, async () => {
  await User.sync()
  await Sale.sync()
  await SaleProduct.sync()
  await Product.sync()
  console.log(`PORT ${PORT}`);
});
