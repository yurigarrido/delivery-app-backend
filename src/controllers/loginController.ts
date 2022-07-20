import { Request, Response } from'express';
import UserModel from '../database/models/UserModel';
import LoginService from '../services/LoginService';
const md5 = require('md5');

class LoginController {

  public  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    const user = await LoginService.findOne(email, password);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(user)
  }

  public  getUsers = async (req: Request, res: Response) => {
    
    const user = await UserModel.findAll()
    return res.status(200).json(user)
  }
}

export default new LoginController();