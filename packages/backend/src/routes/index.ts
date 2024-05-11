import { Application } from 'express';
import passport from 'passport';

import todosRouter from './api/todos.route';
import userRouter from './api/user.route';

import errorMiddleware from '@/middleware/error.middleware';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.use(
			'/api/todos',
			passport.authenticate(['jwt', 'anon'], { session: false }),
			todosRouter,
		);
		this.app.use('/api/user', userRouter);
		this.app.use(errorMiddleware);
	}
}

export default AppRouter;
