import express from 'express';
import loginController from '../controllers/loginController';
import registerController from '../controllers/registerController';
import registerMiddlewares from '../middlewares/registerMiddlewares';

const RegisterRouter = express.Router();

RegisterRouter.post("/", registerMiddlewares.validateRegistration, registerController.create)

export { RegisterRouter }