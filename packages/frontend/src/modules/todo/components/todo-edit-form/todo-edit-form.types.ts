import { ITodo } from '~shared/types/todos.type';

export interface EditTodoFormProps {
	todo: ITodo;
	onSubmit: (values: ITodo) => void;
}
