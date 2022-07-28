import { Request, Response, NextFunction } from'express';
import UserModel from '../database/models/UserModel';

class RegisterMiddleware {
  private validateName = (name: string) => {
    if (name.length < 12) {
      return { status: 401, message: 'Name must be at least 12 characters long', sucess: false };
    }
    return { sucess: true, status: 200 };
  };
    private validatePassword = (password: string) => {
    if (password.length < 6) {
      return { status: 401, message: 'Password must be at least 6 characters long', sucess: false };
    }
  
    return { sucess: true, status: 200 };
  };
  
  private validateEmail = (email: string) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const verifyEmail = emailRegex.test(email);

    if (verifyEmail === false || !verifyEmail) {
      return { status: 401, message: 'Incorrect email or password', sucess: false };
    }
    return { sucess: true, status: 200 };
  };
  
  public validateRegistration= (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    
    if( !email || !password) {
      return { status: 400, message: 'All fields must be filled', sucess: false }; 
    }
    const isEmailValid = this.validateEmail(email);
    const isPasswordValid = this.validatePassword(password);
    // const isNameValid = this.validateName(name);
  
    if (!isEmailValid.sucess) {
      const { message, status } = isEmailValid;
      return res.status(status).json({ message: message });
    }
    if (!isPasswordValid.sucess) {
      const { message, status } = isPasswordValid;
      return res.status(status).json({ message: message });
    }
    // if (!isNameValid.sucess) {
    //   const { message, status } = isPasswordValid;
    //   return res.status(status).json({ message: message });
    // }
    next();
  };
}

export default new RegisterMiddleware();