import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validateBody = (
	schema: Schema,
): ((req: Request, res: Response, next: NextFunction) => void) => {
	const func = (req: Request, _: Response, next: NextFunction): void => {
		const { error } = schema.validate(req.body);

		if (error) {
			next(error);
		}

		next();
	};
	return func;
};

export default validateBody;
