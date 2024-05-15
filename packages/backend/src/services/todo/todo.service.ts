import prisma from '@/db/database';
import { STATUSES_KEYS } from '@/types/todos.types';
import { Prisma, Todo } from '@prisma/client';

export default class TodoService {
	async findAll(
		ownerId?: string,
		searchQuery?: string,
		status?: STATUSES_KEYS,
	): Promise<Todo[]> {
		let whereClause: Prisma.TodoWhereInput = {};

		if (ownerId) {
			whereClause = {
				OR: [
					{
						AND: [{ isPrivate: false }],
					},
					{
						AND: [{ isPrivate: true }, { ownerId }],
					},
				],
			};
		}

		if (searchQuery) {
			whereClause = {
				AND: [
					whereClause,
					{
						OR: [
							{ title: { contains: searchQuery } },
							{ description: { contains: searchQuery } },
						],
					},
				],
			};
		}

		if (status) {
			if (status === STATUSES_KEYS.COMPLETED) {
				whereClause = {
					...whereClause,
					completed: true,
				};
			} else if (status === STATUSES_KEYS.PRIVATE) {
				whereClause = {
					...whereClause,
					isPrivate: true,
				};
			} else if (status === STATUSES_KEYS.PUBLIC) {
				whereClause = {
					...whereClause,
					isPrivate: false,
				};
			}
		}

		const todos = await prisma.todo.findMany({
			where: whereClause,
			orderBy: {
				createdAt: 'desc',
			},
		});
		return todos;
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
		const currentDate = new Date();

		const currentDate = new Date();

		return await prisma.todo.update({
			where: { id, ownerId },
			data: {
				...todo,
				updatedAt: currentDate,
			},
			data: {
				...todo,
				updatedAt: currentDate,
			},
		});
	}

	async deleteTodo(ownerId: string, id: string): Promise<Todo> {
		return await prisma.todo.delete({ where: { id, ownerId } });
	}
}
