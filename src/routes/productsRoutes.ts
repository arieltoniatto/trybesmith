import { Router } from 'express';
import ProcutController from '../controllers/productController';
import { validateName, validateAmount } from '../middlewares/productValidation';

const router = Router();

const productController = new ProcutController();

router.get('/', productController.getAll);
router.post('/', validateName, validateAmount, productController.create);

export default router;