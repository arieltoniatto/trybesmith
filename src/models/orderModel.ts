import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrder from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(prod.id) as 'productsIds'
FROM Trybesmith.Orders as orders
INNER JOIN Trybesmith.Products as prod
ON orders.id = prod.orderId
GROUP BY orders.id;`,
    );
    const [rows] = result;
    return rows as IOrder[];
  }

  public async create(id: number, productsIds: number[]) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );
    productsIds.forEach(async (product) => {
      await this.connection.execute(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, product],
      );
    });
    return null;
  }
}