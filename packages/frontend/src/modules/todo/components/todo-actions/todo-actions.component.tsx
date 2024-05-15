import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTodoStore from '~store/todos.store';
import { TodoActionsProps } from './todo-actions.types';
import { styledBtn, styledContainer } from './todo-actions.styles';
import { Button } from '@blueprintjs/core';

const TodoActions: React.FC<TodoActionsProps> = ({ todoId }) => {
	const { deleteTodo } = useTodoStore();
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async (): Promise<void> => {
		setIsDeleting(true);
		await deleteTodo(todoId);

		setIsDeleting(false);
	};

	return (
		<div className={styledContainer}>
			<Link to={todoId}>
				<Button className={styledBtn} text="View" />
			</Link>
			<Button
				className={styledBtn}
				text={isDeleting ? 'Deleting...' : 'Delete'}
				onClick={handleDelete}
				loading={isDeleting}
			/>
		</div>
	);
};

export default TodoActions;
