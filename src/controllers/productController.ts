import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/productServices';

class ProcutController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(statusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const productCreated = await this.productService.create(req.body);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default ProcutController;
