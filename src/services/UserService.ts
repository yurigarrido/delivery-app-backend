import { Request, Response } from'express';
import UserModel from '../database/models/UserModel';

class UserService {
  async findAll() {
    const users = await UserModel.findAll();
    return users
  }
}

export default new UserService();