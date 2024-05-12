import React from 'react';
import useTodoStore from '~store/todos.store';
import TodoView from '../todo-view/todo-view.component';
import Loader from '~shared/components/loader/loader.component';
import TodoNotFound from '../todo-not-found/todo-not-found.component';
import { stylesContainer } from '../todo-tablet/todo-table.components';

const TodoMobile: React.FC = () => {
	const { todos, isLoading } = useTodoStore();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			{todos.length > 0 ? (
				<ul className={stylesContainer}>
					{todos.map((todo) => (
						<li key={todo.id}>
							<TodoView todo={todo} />
						</li>
					))}
				</ul>
			) : (
				<TodoNotFound />
			)}
		</>
	);
};

export default TodoMobile;
