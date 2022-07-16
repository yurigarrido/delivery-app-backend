import { Request, Response } from'express';
import UserModel from '../database/models/UserModel';

class LoginController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return res.status(200).json(users)
  }
}

export default new LoginController();