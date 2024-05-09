import { TodoService } from '@/services';
import { NotFoundError } from '@/utils/custom-errors';
import { Request, Response, NextFunction } from 'express';

const services = {
	todo: new TodoService(),
};

const isExist = (model: keyof typeof services) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | void> => {
		try {
			const { id } = req.params;
			const resource = await services[model].findById(id);

			if (!resource) {
				next(new NotFoundError(`${model} not found`));
			}

			next();
		} catch (error) {
			next(error);
		}
	};
};

export default isExist;
