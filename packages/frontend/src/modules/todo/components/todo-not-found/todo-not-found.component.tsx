import React from 'react';
import { styles } from './todo-not-found.styled';

const TodoNotFound: React.FC = () => {
	return (
		<div className={styles.container}>
			<h2>Todo Not Found</h2>
			<p>The requested todo item was not found.</p>
		</div>
	);
};

export default TodoNotFound;
