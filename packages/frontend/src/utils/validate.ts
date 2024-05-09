import Joi from 'joi';
import { ITodo } from '~shared/types/todos.type';
import { ValidationErrors } from 'final-form';

const validate = (values: ITodo): ValidationErrors => {
	const schema = Joi.object({
		title: Joi.string().min(5).required().label('Title'),
		description: Joi.string().min(5).required().label('Description'),
	});

	const { error } = schema.validate(values, { abortEarly: false });
	if (!error) return;

	const finalFormErrors: ValidationErrors = {};
	error.details.forEach((detail) => {
		finalFormErrors[detail.path.join('.')] = detail.message;
	});

	return finalFormErrors;
};

export default validate;
