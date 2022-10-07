import { Request, Response } from 'express';
import JWT from '../utils/JWT';
import statusCodes from '../statusCodes';
import OrderService from '../services/orderServices';
// import { Iauth } from '../interfaces/authInterface';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };

  public createC = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const auth = req.headers.authorization;
    // if (!auth) {
    //   return res.sendStatus(statusCodes.BAD_REQUEST);
    // }
    const user = JWT.decript(auth as string);
    const result = await this.orderService.create(user.id, productsIds);
    console.log(result);

    res.status(statusCodes.CREATED).json({ userId: user.id, productsIds });
  };
}

export default OrderController;