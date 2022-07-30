import express from 'express';
import loginController from './controllers/loginController';
import UserControler from './controllers/UserControler';
import loginMiddlewares from './middlewares/loginMiddlewares';
import { LoginRouter } from './routes/loginRouter';
import { ProductsRouter } from './routes/productsRouter';
import { RegisterRouter } from './routes/registerRouter';

const router = express.Router();

// router.get("/users", )
router.use("/login", LoginRouter)
router.use("/register", RegisterRouter)
router.use("/products", ProductsRouter)

export { router }