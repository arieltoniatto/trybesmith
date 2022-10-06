import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import LoginService from '../services/loginServices';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
    }
    if (!password) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
    }

    const token: string = await this.loginService.findOne(req.body);

    if (token === 'err') {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }

    return res.status(statusCodes.OK).json({ token });
  };
}

export default LoginController;