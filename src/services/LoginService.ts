import UserModel from '../database/models/UserModel';
import auth from '../helpers/auth/jsonWebToken';
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
  token };
  }
}

export default new UserService();