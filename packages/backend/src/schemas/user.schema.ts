import Joi from 'joi';

const registerSchema = Joi.object({
	username: Joi.string().trim(),
	email: Joi.string().email().required(),
	password: Joi.string().trim().required(),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().trim().required(),
});

const changePasswordSchema = Joi.object({
	oldPassword: Joi.string().required(),
	newPassword: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
	resetToken: Joi.string().required(),
	newPassword: Joi.string().required(),
});

export {
	registerSchema,
	loginSchema,
	changePasswordSchema,
	resetPasswordSchema,
};
