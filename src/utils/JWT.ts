import jwt from 'jsonwebtoken';
import IUser from '../interfaces/userInterface';

export default {
  create: (user: IUser) => jwt.sign(user, 'secret'),
};