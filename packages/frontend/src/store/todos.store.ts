import { create } from 'zustand';
import todoService from '~shared/services/todo.service';
import { Todo } from '~shared/services/types';

interface TodoStore {
	todos: Todo[];
	isLoading: boolean;
	error: Error | null;
	// createTodo: (todo: Todo) => Promise<void>;
	// updateTodoo: (id: string, updatedTodo: Partial<Todo>) => Promise<void>;
	// deleteTodo: (id: string) => Promise<void>;
	getAllTodos: () => Promise<void>;
}

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

const useTodoStore = create<TodoStore>((set) => ({
	...initialState,
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
