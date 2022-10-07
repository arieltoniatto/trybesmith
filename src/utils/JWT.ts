import jwt from 'jsonwebtoken';
import { Iauth } from '../interfaces/authInterface';
import IUser from '../interfaces/userInterface';

export default {
  create: (user: IUser) => jwt.sign(user, 'secret'),
  decript: (auth: string) => jwt.verify(auth, 'secret') as Iauth,
};