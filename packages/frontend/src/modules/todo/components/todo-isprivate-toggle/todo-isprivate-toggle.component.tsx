import React, { useState } from 'react';
import { Switch } from '@blueprintjs/core';
import useTodoStore from '~store/todos.store';
import { TodoToggleProps } from '../todo-completion-toggle/todo-completion-toggle.types';
import { styledToggler } from './todo-isprivate-toggle.styled';

const TodoIsPrivateToggle: React.FC<TodoToggleProps> = ({ todo }) => {
	const { updateTodo } = useTodoStore();
	const [isUpdating, setIsUpdating] = useState(false);

	const handleOnChange = async (): Promise<void> => {
		if (isUpdating) {
			return;
		}

		setIsUpdating(true);

		await updateTodo(todo.id, {
			isPrivate: !todo.isPrivate,
		});

		setIsUpdating(false);
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
