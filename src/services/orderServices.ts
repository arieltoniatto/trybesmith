import OrderModel from '../models/orderModel';
import IOrder from '../interfaces/orderInterface';
import connection from '../models/connection';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(userId: number, productsIds: number[]) {
    const result = await this.model.create(userId, productsIds);
    return result;
  }
}

export default OrderService;