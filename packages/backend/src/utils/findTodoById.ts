import prisma from '@/db/database';
import { TodoType } from '@/types/todos.types';
import { Request } from 'express';

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
