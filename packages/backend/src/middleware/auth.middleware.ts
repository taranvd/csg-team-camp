import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '@/utils/custom-errors';
import { User } from '@prisma/client';

export const auth = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate(
		'jwt',
		{ session: false },
		(err: unknown, user: User) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				return next(new NotAuthorizedError('Unauthorized'));
			}
			req.user = user;
			next();
		},
	)(req, res, next);
};
