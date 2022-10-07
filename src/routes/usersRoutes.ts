import { Router } from 'express';
import UserController from '../controllers/userController';
import {
  vUsername, vClasse, vLevel, vPassword,
} from '../middlewares/userValidation';

const router = Router();

const userController = new UserController();

router.post('/', vUsername, vClasse, vLevel, vPassword, userController.create);

export default router;