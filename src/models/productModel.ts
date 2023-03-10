import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [rows] = result;
    return rows as IProduct[];
  }
}

// const getAllProducts = async ():Promise<IProduct[]> => {
//   const [products] = await connection.execute('SELECT * from Trybesmith.Products');
//   return products as IProduct[];
// };

// export = { getAllProducts };
