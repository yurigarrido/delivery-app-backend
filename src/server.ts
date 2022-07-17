import express, { json } from "express";
import db from "./database/db";
import { router } from "./routes";
import { LoginRouter } from "./routes/loginRouter";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json())
app.use(router)

app.listen(PORT, async () => {
  await db.sync()
  console.log(`PORT ${PORT}`);
});
