import express from 'express';
import loginController from '../controllers/loginController';
import productsController from '../controllers/productsController';
import registerController from '../controllers/registerController';
import registerMiddlewares from '../middlewares/registerMiddlewares';

const ProductsRouter = express.Router();

ProductsRouter.get("/", productsController.getAll)
ProductsRouter.post("/create", productsController.create)


export { ProductsRouter }