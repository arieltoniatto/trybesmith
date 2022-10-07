import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

export default (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(statusCodes.INVALID_FORMAT)
      .json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(statusCodes.INVALID_FORMAT)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
};