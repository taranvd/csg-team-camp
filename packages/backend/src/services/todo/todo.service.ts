import prisma from '@/db/database';
import { Todo } from '@prisma/client';

export default class TodoService {
	async findAll(ownerId: string): Promise<Todo[]> {
		return await prisma.todo.findMany({
			where: { ownerId, isPrivate: false },
		});
	}

	async findById(id: string): Promise<Todo | null> {
		return await prisma.todo.findUnique({ where: { id } });
	}

	async createTodo(ownerId: string, newTodo: Todo): Promise<Todo> {
		return await prisma.todo.create({
			data: { ...newTodo, ownerId },
		});
	}

	async updateTodo(ownerId: string, id: string, todo: Todo): Promise<Todo> {
		return await prisma.todo.update({
			where: { id, ownerId },
			data: todo,
		});
	}

	async deleteTodo(ownerId: string, id: string): Promise<Todo> {
		return await prisma.todo.delete({ where: { id, ownerId } });
	}
}
