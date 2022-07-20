import express from 'express';
import loginController from './controllers/loginController';
import UserControler from './controllers/UserControler';
import loginMiddlewares from './middlewares/loginMiddlewares';
import { LoginRouter } from './routes/loginRouter';

const router = express.Router();

// router.get("/users", )
router.use("/login", LoginRouter)

export { router }