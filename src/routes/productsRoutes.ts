import { Router } from 'express';
import ProcutController from '../controllers/productController';
import { validateName, validateAmount } from '../middlewares/productValidation';

const router = Router();

const productController = new ProcutController();

router.get('/products', validateName, validateAmount, productController.getAll);
router.post('/products', productController.create);

export default router;