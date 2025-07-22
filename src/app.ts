import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { RootRouter } from './app/rootRouter/rootRouter';
import notFound from './app/middleware/notFound.middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:4002'], // or your frontend domain
    credentials: true,
  }),
);

// Your existing REST endpoints
app.use('/api/v1', RootRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.nPM_PACKAGE_VERSION,
    environment: process.env.NODE_ENV,
    data: { message: 'API is up and running! 🚀' },
  });
});

app.use(notFound);

app.use(globalErrorHandler);

export default app;
