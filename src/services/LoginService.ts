import UserModel from '../database/models/UserModel';
import auth from '../helpers/auth/jsonWebToken';
import { IUserWithToken } from '../interfaces/User';
const md5 = require('md5');

class UserService {
  async findOne(email: string, password: string) {
    const user = await UserModel.findOne({ where: { email }, raw: true });

  if (!user) return undefined;
  if(md5(password) !== user.password) return undefined;

  const token = auth.createToken(user);
  return { user: {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  },
  token } as IUserWithToken;
  }

  async create(email: string, password: string, name:string, role:string) {
    const hasUser = await UserModel.findOne({ where: { email }})
    if (hasUser) return undefined;
    const newUser = await UserModel.create({ email, password, name, role });
    return newUser;
  }
}

export default new UserService();