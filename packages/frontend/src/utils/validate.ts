import { ITodo } from '~shared/types/todos.type';
import {
	IResetPasswordForm,
	IUserChangePassword,
	IUserLogin,
	IUserProfile,
	IUserRegister,
} from '~shared/types/user.type';
import { ValidationErrors } from 'final-form';
import Joi from 'joi';

type FormValues =
	| ITodo
	| IUserLogin
	| IUserRegister
	| IResetPasswordForm
	| IUserProfile
	| IUserChangePassword;

const validateForm = (
	values: FormValues,
	schema: Joi.ObjectSchema,
): ValidationErrors => {
	const { error } = schema.validate(values, { abortEarly: false });
	if (!error) return;

	const finalFormErrors: ValidationErrors = {};
	error.details.forEach((detail) => {
		finalFormErrors[detail.path.join('.')] = detail.message;
	});

	return finalFormErrors;
};

const todoSchema = Joi.object({
	title: Joi.string().min(5).required().label('Title'),
	description: Joi.string().min(5).required().label('Description'),
});

const loginSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.label('Email'),
	password: Joi.string().min(6).max(30).required().label('Password'),
});

const registerSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.label('Email'),
	password: Joi.string().min(6).max(30).required().label('Password'),
	name: Joi.string().min(3).max(50).required().label('Name'),
});

const resetPasswordSchema = Joi.object({
	newPassword: Joi.string().min(6).max(30).required().label('New Password'),
	confirmPassword: Joi.string()
		.valid(Joi.ref('newPassword'))
		.required()
		.label('Confirm Password')
		.messages({ 'any.only': 'Passwords do not match' }),
});

const profileSchema = Joi.object({
	name: Joi.string().min(3).optional().label('Name'),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.optional()
		.label('Email'),
});

const changePasswordSchema = Joi.object({
	oldPassword: Joi.string().min(6).required().label('Old Password'),
	newPassword: Joi.string().min(6).required().label('New Password'),
});

export const validateTodoForm = (values: ITodo): ValidationErrors =>
	validateForm(values, todoSchema);

export const validateLoginForm = (values: IUserLogin): ValidationErrors =>
	validateForm(values, loginSchema);

export const validateRegisterForm = (values: IUserRegister): ValidationErrors =>
	validateForm(values, registerSchema);

export const validateResetPasswordForm = (
	values: IResetPasswordForm,
): ValidationErrors => validateForm(values, resetPasswordSchema);

export const validateProfileForm = (values: IUserProfile): ValidationErrors =>
	validateForm(values, profileSchema);

export const validateChangePasswordForm = (values: {
	oldPassword: string;
	newPassword: string;
}): ValidationErrors => validateForm(values, changePasswordSchema);

export default validateForm;
