import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
import MatchMedia from 'react-responsive';

import CreateTodoForm from '~modules/todo/components/todo-create-form/todo-create-form.component';
import TodoDesktop from '~modules/todo/components/todo-desktop/todo-desktop.component';
import TodoMobile from '~modules/todo/components/todo-mobile/todo-mobile.component';
import TodoTablet from '~modules/todo/components/todo-tablet/todo-tablet.component';

import { MEDIA_QUERIES_ALT } from '~shared/themes/mediaQueries.theme';
import { ITodoCreate } from '~shared/types/todos.type';
import useTodoStore from '~store/todos.store';
import ModalForm from '~shared/components/modal/modal.component';
import TodoSearch from '~modules/todo/components/todo-search/todo-search-component';
import { useQueryParams } from '~/hooks/use-query-params.hook';
import TodoFilter from '~modules/todo/components/todo-filter/todo-filter.component';
import { STATUSES_KEYS } from '~shared/keys';
import { styles } from './todos-page.styled';

const TodosPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { search, status } = useQueryParams();
	const { todos } = useTodoStore();

	const { createNewTodo } = useTodoStore();

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const handleTodoSubmit = async (todoData: ITodoCreate): Promise<void> => {
		try {
			createNewTodo(todoData);
			closeModal();
		} catch (error) {
			console.error('Error creating todo:', error);
		}
	};

	const filteredTodos = search
		? todos.filter((todo) => {
				const isTitleMatch = todo.title
					.toLowerCase()
					.includes(search.toLowerCase());
				const isDescriptionMatch = todo.description
					.toLowerCase()
					.includes(search.toLowerCase());
				const isPrivateMatch =
					todo.isPrivate && status === STATUSES_KEYS.PRIVATE;
				const isCompletedMatch =
					todo.completed && status === STATUSES_KEYS.COMPLETED;
				const isPublicMatch =
					!todo.isPrivate &&
					!todo.completed &&
					status === STATUSES_KEYS.PUBLIC;

				return (
					(isTitleMatch || isDescriptionMatch) &&
					(status === STATUSES_KEYS.ALL ||
						isPrivateMatch ||
						isCompletedMatch ||
						isPublicMatch)
				);
			})
		: todos.filter((todo) => {
				const isPrivateMatch =
					todo.isPrivate && status === STATUSES_KEYS.PRIVATE;
				const isCompletedMatch =
					todo.completed && status === STATUSES_KEYS.COMPLETED;
				const isPublicMatch =
					!todo.isPrivate &&
					!todo.completed &&
					status === STATUSES_KEYS.PUBLIC;

				return (
					status === STATUSES_KEYS.ALL ||
					isPrivateMatch ||
					isCompletedMatch ||
					isPublicMatch
				);
			});

	return (
		<section>
			<div className={styles.container}>
				<TodoSearch />
				<TodoFilter />
			</div>
			<Button onClick={openModal}>Add Todo</Button>

			<MatchMedia minWidth={MEDIA_QUERIES_ALT.desktop.minWidth}>
				{(matches) =>
					matches ? <TodoDesktop todos={filteredTodos} /> : null
				}
			</MatchMedia>
			<MatchMedia
				minWidth={MEDIA_QUERIES_ALT.tablet.minWidth}
				maxWidth={MEDIA_QUERIES_ALT.tablet.maxWidth}
			>
				{(matches) =>
					matches ? <TodoTablet todos={filteredTodos} /> : null
				}
			</MatchMedia>

			<MatchMedia maxWidth={MEDIA_QUERIES_ALT.mobile.maxWidth}>
				{(matches) =>
					matches ? <TodoMobile todos={filteredTodos} /> : null
				}
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
