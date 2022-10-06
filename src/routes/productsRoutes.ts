import { Router } from 'express';
import ProcutController from '../controllers/productController';

const router = Router();

const productController = new ProcutController();

router.get('/products', productController.getAll);
router.post('/products', productController.create);

export default router;