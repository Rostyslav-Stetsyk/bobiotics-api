import testRouter from './routes/testRoutes';
import express from 'express';

const app = express();

app.use(express.json());

app.use('/api', testRouter);

export default app;
