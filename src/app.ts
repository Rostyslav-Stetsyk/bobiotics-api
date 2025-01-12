import deliveryRouter from './routes/delivery.router';
import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/delivery', deliveryRouter);

export default app;
