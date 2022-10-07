import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(authorization, 'secret');
    // res.locals.user = validateUser;
  } catch (e) {
    console.log(e);
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }

  next();
};