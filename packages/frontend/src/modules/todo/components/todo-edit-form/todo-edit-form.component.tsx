import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import { ITodo } from '~shared/types/todos.type';
import { EditTodoFormProps } from './todo-edit-form.types';
import FormGroups from '~shared/components/form-groups/form-groups.component';
import validate from '~/utils/validate';

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onSubmit }) => {
	const initialValues = {
		title: todo.title,
		description: todo.description,
	};

	const handleSubmit = (values: ITodo): void => {
		onSubmit(values);
	};

	return (
		<Form
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<>
					<FormGroups />
					<Button
						type="submit"
						intent="primary"
						onClick={handleSubmit}
					>
						Save Changes
					</Button>
				</>
			)}
		/>
	);
};

export default EditTodoForm;
