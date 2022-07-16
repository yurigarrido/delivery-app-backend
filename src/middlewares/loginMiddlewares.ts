import { Request, Response, NextFunction } from'express';
import UserModel from '../database/models/UserModel';

class LoginMiddleware {
  async findAll(req: Request, res: Response, next: NextFunction) {
    const users = await UserModel.findAll();
    return res.status(200).json(users)
  }
}

export default new LoginMiddleware();