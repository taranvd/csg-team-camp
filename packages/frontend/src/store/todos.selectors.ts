import { ITodo } from '~shared/types/todos.type';
import useTodoStore from './todos.store';

export const useTodoSelector = (id: string): ITodo => {
	const { todos } = useTodoStore();
	return todos.find((todo) => todo.id === id);
};
