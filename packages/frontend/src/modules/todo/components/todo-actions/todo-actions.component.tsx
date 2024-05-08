import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTodoStore from '~store/todos.store';
import toast from 'react-hot-toast';
import { TodoActionsProps } from './todo-actions.types';
import { styledBtn, styledContainer } from './todo-actions.styles';
import { Button } from '@blueprintjs/core';

const TodoActions: React.FC<TodoActionsProps> = ({ todoId }) => {
	const { deleteTodo } = useTodoStore();
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async (): Promise<void> => {
		setIsDeleting(true);
		try {
			const deletePromise = deleteTodo(todoId);
			await toast.promise(deletePromise, {
				loading: 'Deleting...',
				success: 'Todo deleted successfully',
				error: 'Failed to delete todo',
			});
		} finally {
			setIsDeleting(false);
		}
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
