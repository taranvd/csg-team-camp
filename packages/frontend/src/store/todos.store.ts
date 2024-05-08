import { create } from 'zustand';
import todoService from '~shared/services/todo.service';
import { Todo } from '~shared/services/types';
import { ITodo, ITodoCreate } from '~shared/types/todos.type';

interface TodoStore {
	todos: Todo[];
	isLoading: boolean;
	error: Error | null;
	createNewTodo: (todo: ITodoCreate) => Promise<void>;
	updateTodo: (id: string, updatedTodo: Partial<Todo>) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	getAllTodos: () => Promise<void>;
}

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

const useTodoStore = create<TodoStore>((set) => ({
	...initialState,

	createNewTodo: async (todo: ITodoCreate): Promise<void> => {
		try {
			set({ isLoading: true, error: null });

			const resp = await todoService.createTodo(
				todo.title,
				todo.description,
			);

			set((state) => ({
				todos: [...state.todos, resp],
				isLoading: false,
			}));
		} catch (error) {
			set({ isLoading: false, error });
		}
	},

	updateTodo: async (id, updatedTodo: ITodo): Promise<void> => {
		try {
			set({ isLoading: true, error: null });
			const updatedData = await todoService.updateTodo(id, updatedTodo);
			set((state) => ({
				todos: state.todos.map((todo) =>
					todo.id === id ? { ...todo, ...updatedData } : todo,
				),
				isLoading: false,
			}));
		} catch (error) {
			set({ isLoading: false, error });
		}
	},

	deleteTodo: async (id: string): Promise<void> => {
		try {
			set({ isLoading: true, error: null });
			await todoService.deleteTodo(id);
			set((state) => ({
				todos: state.todos.filter((todo) => todo.id !== id),
				isLoading: false,
			}));
		} catch (error) {
			set({ isLoading: false, error });
		}
	},

	getAllTodos: async (): Promise<void> => {
		set({ isLoading: true, error: null });
		try {
			const todos = await todoService.findAll();
			set({ todos, isLoading: false });
		} catch (error) {
			set({ isLoading: false, error });
		}
	},
}));

export default useTodoStore;
