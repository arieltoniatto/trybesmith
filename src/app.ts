import express, { Request, Response } from 'express';
import productRoutes from './routes/productsRoutes';
import statusCodes from './statusCodes';
import userRoutes from './routes/usersRoutes';
import orderRoutes from './routes/ordersRoutes';
import loginRoutes from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);

export default app;
