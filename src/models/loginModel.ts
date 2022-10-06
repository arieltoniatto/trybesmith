import { Pool, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';
import { ILogin } from '../interfaces/loginInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findOne(login: ILogin): Promise<IUser> {
    const { username, password } = login;
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [rows] = result;
    return rows as IUser;
  }
}