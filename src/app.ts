import express, { NextFunction, Request, Response } from 'express';
import productRoutes from './routes/productsRoutes';
import statusCodes from './statusCodes';
import userRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

app.use(productRoutes);
app.use(userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

export default app;
