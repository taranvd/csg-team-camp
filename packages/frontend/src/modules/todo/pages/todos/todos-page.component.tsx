import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
import toast from 'react-hot-toast';
import MatchMedia from 'react-responsive';

import CreateTodoForm from '~modules/todo/components/todo-create-form/todo-create-form.component';
import ModalForm from '~modules/todo/components/todo-modal/todo-modal.component';
import TodoDesktop from '~modules/todo/components/todo-desktop/todo-desktop.component';
import TodoMobile from '~modules/todo/components/todo-mobile/todo-mobile.component';
import TodoTablet from '~modules/todo/components/todo-tablet/todo-tablet.component';

import { MEDIA_QUERIES_ALT } from '~shared/themes/mediaQueries.theme';
import { ITodoCreate } from '~shared/types/todos.type';
import useTodoStore from '~store/todos.store';

const TodosPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { createNewTodo } = useTodoStore();

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const handleTodoSubmit = async (todoData: ITodoCreate): Promise<void> => {
		try {
			const response = createNewTodo(todoData);
			await toast.promise(response, {
				loading: 'Creating todo...',
				success: 'Todo created successfully',
				error: 'Error creating todo',
			});
			closeModal();
		} catch (error) {
			console.error('Error creating todo:', error);
		}
	};

	return (
		<section>
			<Button onClick={openModal}>Add Todo</Button>

			<MatchMedia minWidth={MEDIA_QUERIES_ALT.desktop.minWidth}>
				{(matches) => (matches ? <TodoDesktop /> : null)}
			</MatchMedia>
			<MatchMedia
				minWidth={MEDIA_QUERIES_ALT.tablet.minWidth}
				maxWidth={MEDIA_QUERIES_ALT.tablet.maxWidth}
			>
				{(matches) => (matches ? <TodoTablet /> : null)}
			</MatchMedia>

			<MatchMedia maxWidth={MEDIA_QUERIES_ALT.mobile.maxWidth}>
				{(matches) => (matches ? <TodoMobile /> : null)}
			</MatchMedia>

			<ModalForm
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Create New Todo"
			>
				<CreateTodoForm onSubmit={handleTodoSubmit} />
			</ModalForm>
		</section>
	);
};

export default TodosPage;
