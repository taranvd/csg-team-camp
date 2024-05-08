import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import {
	CreateTodoFormProps,
	CreateTodoFormValues,
} from './todo-create-form.types';
import FormGroups from '~shared/components/form-groups/form-groups.component';
import validate from '~/utils/validate';

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onSubmit }) => {
	const handleSubmit = (values: CreateTodoFormValues): void => {
		onSubmit(values);
	};

	return (
		<Form
			validate={validate}
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<>
					<FormGroups />
					<Button
						onClick={handleSubmit}
						type="submit"
						intent="primary"
					>
						Create Todo
					</Button>
				</>
			)}
		/>
	);
};

export default CreateTodoForm;
