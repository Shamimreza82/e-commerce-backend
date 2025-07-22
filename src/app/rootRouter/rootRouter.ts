import express from 'express';
import { AuthRouter } from '../modules/auth/auth.route';

const router = express();

const routers = [
  {
    path: '/auth',
    handler: AuthRouter,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.handler);
});

export const RootRouter = router;
