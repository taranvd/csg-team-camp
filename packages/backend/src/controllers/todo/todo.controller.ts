import { TodoService } from '@/services';
import { User } from '@prisma/client';
import { Response, Request } from 'express';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const ownerId = (req.user as User)?.id;
		const todos = await this.todoService.findAll(ownerId);
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
		await this.todoService.deleteTodo(ownerId, id);
		res.status(204).end();
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
