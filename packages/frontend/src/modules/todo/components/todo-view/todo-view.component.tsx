import React from 'react';
import { TodoViewProps } from './todo-view.types';
import { stylesWrapper } from './todo-view.styles';

const TodoView: React.FC<TodoViewProps> = ({ todo }) => {
	return (
		<div className={stylesWrapper}>
			<h3>{todo.title}</h3>
			<p>{todo.description}</p>
		</div>
	);
};

export default TodoView;
