import React from 'react';
import useTodoStore from '~store/todos.store';
import TodoView from '../todo-view/todo-view.component';
import { stylesContaiiner } from './todo-mobile.styles';

const TodoMobile: React.FC = () => {
	const { todos } = useTodoStore();

	return (
		<ul className={stylesContaiiner}>
			{todos.map((todo) => (
				<li key={todo.id}>
					<TodoView todo={todo} />
				</li>
			))}
		</ul>
	);
};

export default TodoMobile;
