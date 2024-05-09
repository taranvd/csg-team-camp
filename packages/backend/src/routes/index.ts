import { Application } from 'express';
import passport from 'passport';

import todosRouter from './api/todos.route';
import userRouter from './api/user.route';

import UserService from '@/services/user/user.service';
import JWTService from '@/services/jwt-service/jwt.service';

import errorMiddleware from '@/middleware/error.middleware';
import { configurePassport } from '@/config/passport';

const userService = new UserService(new JWTService());

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		configurePassport(userService);
		this.app.use(passport.initialize());
		this.app.use('/api/todos', todosRouter);
		this.app.use('/api/user', userRouter);
		this.app.use(errorMiddleware);
	}
}

export default AppRouter;
