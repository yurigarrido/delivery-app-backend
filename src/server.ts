import express, { json } from "express";
import db from "./database/db";
import Product from "./database/models/ProductsModel";
import Sale from "./database/models/SalesModel";
import SaleProduct from "./database/models/SalesProducts";
import User from "./database/models/UserModel";
import { router } from "./routes";
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json())
app.use(router)
app.use(cors())

app.listen(PORT, async () => {
  await User.sync()
  await Sale.sync()
  await SaleProduct.sync()
  await Product.sync()
  console.log(`PORT ${PORT}`);
});
