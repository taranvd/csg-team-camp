import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		return await prisma.todo.findMany();
	}

	async findTodoById(id: string): Promise<Todo | null> {
		return await prisma.todo.findUnique({ where: { id } });
	}

	async createTodo(
		title: string,
		description: string,
		completed: boolean,
		isPrivate: boolean,
	): Promise<Todo> {
		return await prisma.todo.create({
			data: { title, description, completed, isPrivate },
		});
	}

	async updateTodo(
		id: string,
		title: string,
		description: string,
		completed: boolean,
		isPrivate: boolean,
	): Promise<Todo> {
		return await prisma.todo.update({
			where: { id },
			data: { title, description, completed, isPrivate },
		});
	}

	async deleteTodo(id: string): Promise<Todo> {
		return await prisma.todo.delete({ where: { id } });
	}
}
