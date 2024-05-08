import React, { useState } from 'react';
import { Switch } from '@blueprintjs/core';
import useTodoStore from '~store/todos.store';
import toast from 'react-hot-toast';
import { TodoToggleProps } from '../todo-completion-toggle/todo-completion-toggle.types';
import { styledToggler } from './todo-isprivate-toggle.styled';

const TodoIsPrivateToggle: React.FC<TodoToggleProps> = ({ todo }) => {
	const { updateTodo } = useTodoStore();
	const [isUpdating, setIsUpdating] = useState(false);

	const handleOnChange = async (): Promise<void> => {
		if (isUpdating) {
			return;
		}

		try {
			setIsUpdating(true);
			const updatePromise = updateTodo(todo.id, {
				isPrivate: !todo.isPrivate,
			});
			await toast.promise(updatePromise, {
				loading: 'Updating...',
				success: 'Todo status updated successfully',
				error: 'Failed to update todo status',
			});
		} finally {
			setIsUpdating(false);
		}
	};

	return (
		<Switch
			className={styledToggler}
			inline
			large={true}
			checked={todo.isPrivate}
			onChange={handleOnChange}
			disabled={isUpdating}
		/>
	);
};

export default TodoIsPrivateToggle;
