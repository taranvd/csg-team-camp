import HttpService from './http.service';
import { Todo } from './types';

class TodoService extends HttpService {
	constructor() {
		super();
	}

	async findAll(): Promise<Todo[]> {
		const todos = await this.get<Todo[]>({ url: 'todos' });
		return todos;
	}

	async findById(id: string): Promise<Todo | null> {
		const todo = await this.get<Todo>({ url: `todos/${id}` });
		return todo;
	}

	async createTodo(title: string, description: string): Promise<Todo> {
		const newTodo = await this.post<Todo>({
			url: '/todos',
			data: { title, description },
		});
		return newTodo;
	}

	async updateTodo(
		id: string,
		title: string,
		description: string,
	): Promise<Todo> {
		const updatedTodo = await this.put<Todo>({
			url: `/todos/${id}`,
			data: { title, description },
		});
		return updatedTodo;
	}

	async deleteTodo(id: string): Promise<Todo> {
		const deletedTodo = await this.delete<Todo>({ url: `todos/${id}` });
		return deletedTodo;
	}
}

const todoService = new TodoService();
export default todoService;
