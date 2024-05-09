import React from 'react';
import { TodoViewProps } from './todo-view.types';
import {
	stylesActionsWrapper,
	stylesDesc,
	stylesWrapper,
} from './todo-view.styles';
import TodoActions from '../todo-actions/todo-actions.component';
import TodoCompletionToggle from '../todo-completion-toggle/todo-completion-toggle';

const TodoView: React.FC<TodoViewProps> = ({ todo }) => {
	return (
		<div className={stylesWrapper}>
			<h3>{todo.title}</h3>
			<p className={stylesDesc}>{todo.description}</p>

			<div className={stylesActionsWrapper}>
				<TodoActions todoId={todo.id} />
				<TodoCompletionToggle todo={todo} />
			</div>
		</div>
	);
};

export default TodoView;
