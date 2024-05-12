import passport from 'passport';
import { Response, Request, NextFunction } from 'express';
import { User } from '@prisma/client';
import { NotAuthorizedError } from '@/utils/custom-errors';

export const authenticateUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	passport.authenticate(
		['jwt', 'anon'],
		{
			session: false,
		},
		(err: unknown, user: User) => {
			if (!user || err) {
				return next();
			}

			req.user = user;
			next();
		},
	)(req, res, next);
};

export const authorizeUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	passport.authenticate(
		'jwt',
		{
			session: false,
		},
		(err: unknown, user: User) => {
			if (!user || err) {
				return next(new NotAuthorizedError('Unauthorized'));
			}

			req.user = user;
			next();
		},
	)(req, res, next);
};
