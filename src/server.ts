import express, { json } from "express";
import db from "./database/db";
import { router } from "./routes";
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json())
app.use(router)
app.use(cors())

app.listen(PORT, async () => {
  await db.sync()
  console.log(`PORT ${PORT}`);
});
