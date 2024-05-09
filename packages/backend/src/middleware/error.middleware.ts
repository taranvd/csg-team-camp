import { CustomErrors } from '@/utils/custom-errors';
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
	err: CustomErrors,
	_req: Request,
	res: Response,
	_next: NextFunction,
): Response<unknown, Record<string, unknown>> => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'Internal error';

	const response = {
		success: false,
		message: err.message,
		stack: err.stack,
	};

	return res.status(err.statusCode).json(response);
};

export default errorMiddleware;
