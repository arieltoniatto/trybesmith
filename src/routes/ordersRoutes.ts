import { Router } from 'express';
import OrderController from '../controllers/orderController';
import tokenValidation from '../middlewares/tokenValidation';
import productIdValidation from '../middlewares/productIdValidation';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', tokenValidation, productIdValidation, orderController.createC);

export default router;