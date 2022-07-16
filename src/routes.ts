import express from 'express';
import UserControler from './controllers/UserControler';
import { LoginRouter } from './routes/loginRouter';

const router = express.Router();

router.get("/users", UserControler.findAll)
router.use("/login", LoginRouter)

export { router }