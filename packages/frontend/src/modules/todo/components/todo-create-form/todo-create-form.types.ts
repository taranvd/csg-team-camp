import { ITodo } from '~shared/types/todos.type';

export type CreateTodoFormValues = Pick<ITodo, 'title' | 'description'>;

export interface CreateTodoFormProps {
	onSubmit: (values: CreateTodoFormValues) => void;
}
