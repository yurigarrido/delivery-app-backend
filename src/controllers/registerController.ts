import { Request, Response } from'express';
import UserModel from '../database/models/UserModel';
import LoginService from '../services/LoginService';

class RegisterController {

  public  create = async (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    
    const user = await LoginService.create(email, password, name, 'customer');
    if(!user) {
      return res.status(400).json({ message: "user already exists"})
    }
    return res.status(201).json(user)
  }

  public  getUsers = async (req: Request, res: Response) => {
    
    const user = await UserModel.findAll()
    return res.status(200).json(user)
  }
}

export default new RegisterController();