import jwt from 'jsonwebtoken';
import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import { ILogin } from '../interfaces/loginInterface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async findOne(login: ILogin): Promise<string> {
    const user = await this.model.findOne(login);
    console.log('THIS', user);
    if (!user) return 'err';

    return jwt.sign({ id: user.id, username: user.username }, 'secret');
  }
}

export default LoginService;