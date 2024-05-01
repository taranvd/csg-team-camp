import { TodoType } from '@/types/todos.type';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

const prisma = new PrismaClient();

const findTodoById = async (req: Request): Promise<TodoType | null> => {
	const { id } = req.params;
	const todo = await prisma.todo.findUnique({
		where: {
			id,
		},
	});

	if (!todo) {
		throw new Error('Todo not found');
	}

	return todo;
};

export default findTodoById;
