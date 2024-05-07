import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import TodoCompletionToggle from '~modules/todo/components/todo-completion-toggle/todo-completion-toggle';
import TodoIsPrivateToggle from '~modules/todo/components/todo-isprivate-toggle/todo-isprivate-toggle.component';
import { ROUTER_KEYS } from '~shared/keys';
import { useTodoSelector } from '~store/todos.selectors';
import {
	stylesActionsWrapper,
	stylesDesc,
	stylesLink,
	stylesSubtitle,
	stylesTitle,
} from './todo-page.styled';
import TodoNotFound from '~modules/todo/components/todo-not-found/todo-not-found.component';
import ModalForm from '~modules/todo/components/todo-modal/todo-modal.component';
import { Button } from '@blueprintjs/core';
import EditTodoForm from '~modules/todo/components/todo-edit-form/todo-edit-form.component';
import { ITodo } from '~shared/types/todos.type';
import useTodoStore from '~store/todos.store';
import toast from 'react-hot-toast';

const TodoPage: React.FC = () => {
	const { id } = useParams();
	const location = useLocation();
	const { updateTodo } = useTodoStore();
	const todo = useTodoSelector(id);
	const backLinkHref = location.state?.from ?? ROUTER_KEYS.TODOS;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const handleSubmit = async (values: Partial<ITodo>): Promise<void> => {
		try {
			const response = updateTodo(todo.id, values);
			await toast.promise(response, {
				loading: 'Updating todo...',
				success: 'Todo updated successfully',
				error: 'Error updating todo',
			});
			closeModal();
		} catch (error) {
			console.error('Error updating todo:', error);
		}
	};
	if (!todo) {
		return <TodoNotFound />;
	}

	return (
		<div>
			{todo && (
				<>
					<Button onClick={openModal}>Edit</Button>

					<ModalForm
						isOpen={isModalOpen}
						onClose={closeModal}
						title="Edit Todo"
					>
						<EditTodoForm todo={todo} onSubmit={handleSubmit} />
					</ModalForm>
					<h2 className={stylesTitle}>{todo.title}</h2>
					<span className={stylesSubtitle}> Description:</span>
					<p className={stylesDesc}>{todo.description}</p>

					<div className={stylesActionsWrapper}>
						<span>Complete</span>
						<TodoCompletionToggle todo={todo} />
					</div>

					<div className={stylesActionsWrapper}>
						<span>Private</span>
						<TodoIsPrivateToggle todo={todo} />
					</div>
				</>
			)}

			<Link className={stylesLink} to={backLinkHref}>
				Back
			</Link>
		</div>
	);
};

export default TodoPage;
