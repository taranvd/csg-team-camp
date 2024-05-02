import { Request, Response, NextFunction } from 'express';

const tryCatch = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			await fn(req, res, next);
		} catch (error) {
			console.error('Error in controller:', error);
			next(error);
		}
	};
};

export default tryCatch;
