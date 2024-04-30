import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { TodoType } from '@/types/todos.type';

const prisma = new PrismaClient();

const isExist = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const { id } = req.params;

		const resource: TodoType | null = await prisma.todo.findUnique({
			where: {
				id,
			},
		});

		if (!resource) {
			res.status(404).json({ error: 'Resource not found' });
			return;
		}

		next();
	} catch (error) {
		console.error('Error in isExist middleware:', error);
		res.status(500).json({ error: 'Internal server error' });
		return;
	}
};

export default isExist;
