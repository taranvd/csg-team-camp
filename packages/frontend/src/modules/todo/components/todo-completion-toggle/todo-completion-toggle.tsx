import { Switch } from '@blueprintjs/core';
import React from 'react';
import { styledToggler } from './todo.completion-toggle.styled';
import useTodoStore from '~store/todos.store';
import { TodoToggleProps } from './todo-completion-toggle.types';
import toast from 'react-hot-toast';

const TodoCompletionToggle: React.FC<TodoToggleProps> = ({ todo }) => {
	const { updateTodo } = useTodoStore();

	const handleOnChange = async (): Promise<void> => {
		const updatePromise = updateTodo(todo.id, {
			completed: !todo.completed,
		});
		await toast.promise(updatePromise, {
			loading: 'Updating...',
			success: 'Todo status updated successfully',
			error: 'Failed to update todo status',
		});
	};

	return (
		<Switch
			className={styledToggler}
			inline
			large={true}
			innerLabel="Not done"
			innerLabelChecked="done"
			checked={todo.completed}
			onChange={handleOnChange}
		/>
	);
};

export default TodoCompletionToggle;
