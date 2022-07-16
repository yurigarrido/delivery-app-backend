import { Request, Response } from'express';
import UserModel from '../database/models/UserModel';

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return res.status(200).json(users)
  }
}

export default new UserController();