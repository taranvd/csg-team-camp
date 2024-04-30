import { TodoService } from '@/services';
import { Response, Request } from 'express';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		const todos = await this.todoService.findAll();
		res.status(200).json(todos);
	}

	async getTodoById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const todo = await this.todoService.findTodoById(id);
		if (!todo) {
			res.status(404).json({ message: 'Todo not found' });
		} else {
			res.status(200).json(todo);
		}
	}

	async createTodo(req: Request, res: Response): Promise<void> {
		const { title, description, completed, isPrivate } = req.body;
		const newTodo = await this.todoService.createTodo(
			title,
			description,
			completed,
			isPrivate,
		);
		res.status(201).json(newTodo);
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const { title, description, completed, isPrivate } = req.body;
		const updatedTodo = await this.todoService.updateTodo(
			id,
			title,
			description,
			completed,
			isPrivate,
		);
		res.status(200).json(updatedTodo);
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		await this.todoService.deleteTodo(id);
		res.status(204).end();
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
