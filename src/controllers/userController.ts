import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';
import UserService from '../services/userServices';

class UserController {
  constructor(private userService = new UserService()) {}
  
  public create = async (req: Request, res: Response) => {
    const token = jwt.sign(req.body, 'secret');
    await this.userService.create(req.body);
    return res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;