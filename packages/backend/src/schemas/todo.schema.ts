import Joi from 'joi';

const createTodoSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
	completed: Joi.boolean().default(false),
	isPrivate: Joi.boolean().default(false),
});

const updateTodoSchema = Joi.object({
	title: Joi.string(),
	description: Joi.string(),
	completed: Joi.boolean(),
	isPrivate: Joi.boolean(),
}).min(1);

export { createTodoSchema, updateTodoSchema };
