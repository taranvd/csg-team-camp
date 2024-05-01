import { Request, Response, NextFunction } from 'express';

const isExist =
	<T>(callback: (req: Request) => T | null) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			await callback(req);
			next();
		} catch (err: unknown) {
			const error = err as Error;
			res.status(404).json({ message: error.message });
		}
	};

export default isExist;
