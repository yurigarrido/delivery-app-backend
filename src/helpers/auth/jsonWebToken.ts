import { verify, sign, SignOptions } from 'jsonwebtoken';

import { readFileSync } from 'fs';
import { IUser } from '../../interfaces/User';


const SECRET_KEY = 'deliveryapp@secret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user: IUser) => {
  const token = sign(user, SECRET_KEY, jwtConfig as SignOptions);
  return token;
};

const verifyToken = (token: string) => {
  try {
    const dataUser = verify(token, SECRET_KEY);
    return dataUser;
  } catch (error) {
    return undefined;
  }
};

const auth = { createToken, verifyToken };
export default auth;
