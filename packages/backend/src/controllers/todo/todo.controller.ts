import { TodoService } from '@/services';
import { STATUSES_KEYS } from '@/types/todos.types';
import { User } from '@prisma/client';
import { Response, Request } from 'express';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const ownerId = (req.user as User)?.id;
		const searchQuery = req.query.search as string;
		const status = req.query.status as STATUSES_KEYS;

		const todos = await this.todoService.findAll(
			ownerId,
			searchQuery,
			status,
		);

		res.status(200).json(todos);
	}

	async getById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const todo = await this.todoService.findById(id);
		res.status(200).json(todo);
	}

	async createTodo(req: Request, res: Response): Promise<void> {
		const newTodo = req.body;

		const ownerId = (req.user as User)?.id;
		const todo = await this.todoService.createTodo(ownerId, newTodo);
		res.status(201).json(todo);
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const { id } = req.params;

		const ownerId = (req.user as User)?.id;

		const newTodo = req.body;

		const todo = await this.todoService.findById(id);
		if (todo?.ownerId !== ownerId) {
			res.status(403).json({
				message: 'You do not have permission to edit this todo',
			});
			return;
		}

		const updatedTodo = await this.todoService.updateTodo(
			ownerId,
			id,
			newTodo,
		);

		res.status(200).json(updatedTodo);
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const ownerId = (req.user as User)?.id;
		const todo = await this.todoService.findById(id);

		if (!todo) {
			res.status(404).json({
				message: 'Todo not found',
			});
			return;
		}

		if (todo.ownerId !== ownerId) {
			res.status(403).json({
				message: 'You do not have permission to delete this todo',
			});
			return;
		}

		await this.todoService.deleteTodo(ownerId, id);
		res.status(204).end();
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
