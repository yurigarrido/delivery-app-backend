import { Request, Response } from'express';
import LoginService from '../services/LoginService';

class UserController {
  async findAll(req: Request, res: Response) {
    const { email, password } = req.body
    const users = await LoginService.findOne(email, password);
    return res.status(200).json(users)
  }
}

export default new UserController();