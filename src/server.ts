import express, { json } from "express";
import db from "./database/db";
import { router } from "./routes";
import { LoginRouter } from "./routes/loginRouter";

const app = express();

app.use(json())
app.use(router)

app.listen(3000, async () => {
  await db.sync()
  console.log("listening on port 3000");
});
