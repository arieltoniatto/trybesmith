import UserModel from '../models/userModel';
import IUser from '../interfaces/userInterface';
import connection from '../models/connection';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}

export default UserService;