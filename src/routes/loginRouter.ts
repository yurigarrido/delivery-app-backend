import express from 'express';
import loginController from '../controllers/loginController';

const LoginRouter = express.Router();

LoginRouter.get("/", loginController.findAll)

export { LoginRouter }