import React from 'react';
import useTodoStore from '~store/todos.store';

const TodoMobile: React.FC = () => {
	const { todos } = useTodoStore();
	console.log('todos :', todos);

	return <div>TodoMobile</div>;
};

export default TodoMobile;
