import React from 'react';
import useTodoStore from '~store/todos.store';
import {
	actionsContainer,
	styledColumns,
	styledRows,
} from './todo-desktop.styled';
import TodoActions from '../todo-actions/todo-actions.component';
import TodoCompletionToggle from '../todo-completion-toggle/todo-completion-toggle';
import { TodoTitles } from './todo-desktop.enum';
import TodoNotFound from '../todo-not-found/todo-not-found.component';
import Loader from '~shared/components/loader/loader.component';

const TodoDesktop: React.FC = () => {
	const { todos, isLoading } = useTodoStore();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{todos.length > 0 ? (
						<>
							<ul className={styledColumns}>
								{Object.values(TodoTitles).map((header) => (
									<li key={header}>
										<p>{header}</p>
									</li>
								))}
							</ul>

							<ul className={styledRows}>
								{todos.map((todo) => (
									<li key={todo.id}>
										<h3>{todo.title}</h3>

										<p>{todo.description}</p>

										<div className={actionsContainer}>
											<TodoActions todoId={todo.id} />

											<TodoCompletionToggle todo={todo} />
										</div>
									</li>
								))}
							</ul>
						</>
					) : (
						<TodoNotFound />
					)}
				</>
			)}
		</>
	);
};

export default TodoDesktop;
