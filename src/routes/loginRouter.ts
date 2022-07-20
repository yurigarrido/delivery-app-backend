import express from 'express';
import loginController from '../controllers/loginController';
import loginMiddlewares from '../middlewares/loginMiddlewares';

const LoginRouter = express.Router();

LoginRouter.post("/", loginMiddlewares.validateLogin, loginController.login)
LoginRouter.get("/", loginController.getUsers)

export { LoginRouter }