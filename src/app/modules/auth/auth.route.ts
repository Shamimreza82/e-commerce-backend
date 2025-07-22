import express from 'express';
import { AuthController } from './auth.controller';

const route = express();

route.post('/register', AuthController.register);

export const AuthRouter = route;
