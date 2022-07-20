import { Request, Response, NextFunction } from'express';
import UserModel from '../database/models/UserModel';

class LoginMiddleware {
  private validatePassword = (password: string) => {
    if (!password) {
      return { status: 400, message: 'All fields must be filled', sucess: false };
    }
    if (password.length < 7) {
      return { status: 401, message: 'Password must be at least 7 characters long', sucess: false };
    }
  
    return { sucess: true, status: 200 };
  };
  
  private validateEmail = (email: string) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const verifyEmail = emailRegex.test(email);
  
    if (!email) {
      return { status: 400, message: 'All fields must be filled', sucess: false };
    }
    if (verifyEmail === false || !verifyEmail) {
      return { status: 401, message: 'Incorrect email or password', sucess: false };
    }
    return { sucess: true, status: 200 };
  };
  
  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
  
    const isEmailValid = this.validateEmail(email);
    const isPasswordValid = this.validatePassword(password);
  
    if (!isEmailValid.sucess) {
      const { message, status } = isEmailValid;
      return res.status(status).json({ message });
    }
  
    if (!isPasswordValid.sucess) {
      const { message, status } = isPasswordValid;
      return res.status(status).json({ message });
    }
    next();
  };
}

export default new LoginMiddleware();