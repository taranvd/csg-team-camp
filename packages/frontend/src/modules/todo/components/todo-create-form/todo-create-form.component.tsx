import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import {
	CreateTodoFormProps,
	CreateTodoFormValues,
} from './todo-create-form.types';
import FormGroups from '~shared/components/form-groups/form-groups.component';

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onSubmit }) => {
	const handleSubmit = (values: CreateTodoFormValues): void => {
		try {
			onSubmit(values);
		} catch (error) {
			console.error('Error creating todo:', error);
		}
	};

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<FormGroups />
					<Button type="submit" intent="primary">
						Create Todo
					</Button>
				</form>
			)}
		/>
	);
};

export default CreateTodoForm;
